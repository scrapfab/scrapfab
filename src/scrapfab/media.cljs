(ns scrapfab.media
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [clojure.set :refer [intersection]]
            [cljs.nodejs :as nodejs]
            [cljs.reader :refer [read-string]]
            [cljs.core.async :as async]))

(defonce fs (nodejs/require "fs"))
(defonce gm (nodejs/require "gm"))
(defonce path (nodejs/require "path"))

(defonce media-dir "site/resources/img")

(def media-meta
  (let [source (.readFileSync fs "site/media.edn")]
    (read-string (.toString source))))

(defrecord MediaInfo [width height aspect data])

(defn process-info
  [name {:keys [width height]}]
  (map->MediaInfo
    {:width width
     :height height
     :aspect (/ width height)
     :data (select-keys (get media-meta name)
                        [:tags :desc :rate :title :credit])}))

(defn- load-info
  "Given a path to a media collection item, return a channel which contains
  a pair [path media-info]."
  [name]
  (let [c (async/chan)]
    (.size (gm (.join path media-dir name))
           (fn [err size]
             (if err
               (println "warning: " name "is not an image")
               (when (contains? media-meta name)
                (async/put! c [name (process-info name (js->clj size :keywordize-keys true))])))
             (async/close! c)))
    c))

(defn- load-media
  "Returns channel containing [path media-info] pairs for all
  media items."
  [paths]
  (async/merge (map load-info paths)))

(defn- create-library
  "Given a sequence of media names, return a channel containing a hash
  map where media names are keys, and MediaInfo records are values."
  [media-names]
  (async/reduce (partial apply assoc)
                {}
                (load-media media-names)))

(defn load-library
  "Returns a hash where keys are the names of media items, and
  values are {:width :height :aspect} hashes."
  []
  (let [result (async/chan)]
    (.readdir fs
              media-dir
              (fn [_ paths]
                (async/pipe (create-library paths) result)))
    result))

(defn tagged?
  "Returns true if all tags in given as the first argument are associated
  with the media given as the second argument."
  [tags media]
  (seq (intersection (set tags) (get-in (second media) [:data :tags]))))

(defn rating [[_ {:keys [data]}]] (:rate data))

(defn to-json
  [media-info]
  (.stringify js/JSON (clj->js media-info)))