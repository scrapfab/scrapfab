(ns scrapfab.media
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.nodejs :as nodejs]
            [cljs.reader :refer [read-string]]
            [cljs.core.async :as async]))

(defonce fs (nodejs/require "fs"))
(defonce gm (nodejs/require "gm"))
(defonce path (nodejs/require "path"))

(defonce media-dir "resources/public/img")

(def media-meta
  (let [source (.readFileSync fs "meta/media.edn")]
    (read-string (.toString source))))

(defrecord MediaInfo [width height aspect tags desc rate title])

(defn process-info
  [name {:keys [width height]}]
  (map->MediaInfo
    {:width width
     :height height
     :aspect (/ width height)
     :tags (get-in media-meta [name :tags])
     :desc (get-in media-meta [name :desc])
     :rate (get-in media-meta [name :rate])
     :title (get-in media-meta [name :title])}))
;;
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

(defn to-json
  [media-info]
  (.stringify js/JSON (clj->js media-info)))