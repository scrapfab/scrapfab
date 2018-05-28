(ns scrapfab.media
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [clojure.set :refer [intersection]]
            [cljs.nodejs :as nodejs]
            [cljs.reader :refer [read-string]]
            [cljs.core.async :as async :refer [<!]]

            [scrapfab.media.gm :refer [get-dimensions get-filesize orientation gm]]))

(defonce fs (nodejs/require "fs"))
(defonce path (nodejs/require "path"))

(defonce media-dir "site/resources/img")

(def media-meta
  (let [source (.readFileSync fs "site/media.edn")]
    (read-string (.toString source))))

(defrecord MediaInfo [width height aspect data])

(defn process-info
  [name {:keys [width height]} filesize]
  (let [aspect (/ width height)]
    (map->MediaInfo
      {:width width
       :height height
       :aspect aspect
       :orientation (orientation aspect)
       :data (select-keys (get media-meta name)
                          [:tags :desc :rate :title :credit])})))

(defn- load-info
  "Given a path to a media collection item, return a channel which contains
  a pair [path media-info]."
  [name]
  (async/pipe (go
                (let [img      (gm (.join path media-dir name))
                      dims     (get-dimensions name img)
                      filesize (get-filesize name img)]
                  [name (<! dims) (<! filesize)]))
              (async/chan 1 (map (fn [info] [name (apply process-info info)])))))

(defn image?
  [p]
  (= ".jpg" (.extname path p)))

(defn- load-media
  "Returns channel containing [path media-info] pairs for all
  media items."
  [paths]
  (async/merge (->> paths
                    (filter image?)
                    (map load-info))))

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
