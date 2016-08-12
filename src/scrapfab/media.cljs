(ns scrapfab.media
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.nodejs :as nodejs]
            [cljs.core.async :as async]))

(defonce fs (nodejs/require "fs"))
(defonce gm (nodejs/require "gm"))
(defonce path (nodejs/require "path"))

(defn process-info
  [{:keys [width height]}]
  {:width width
   :height height
   :aspect (/ width height)})

(defn load-info
  "Given a path to a media collection item, return a channel which contains
  a pair [path media-info]."
  [p]
  (let [c (async/chan)]
    (.size (gm (.join path "resources/public/img" p))
           (fn [err size]
             (when (not err)
               (async/put! c [p (process-info (js->clj size :keywordize-keys true))]))
             (async/close! c)))
    c))

(defn load-media
  [paths]
  (async/merge (map load-info paths)))

(defn load-library! ;; -> channel:[path & paths]
  []
  (let [result (async/chan)]
    (.readdir fs
              "resources/public/img"
              (fn [_ paths]
                (async/pipe (async/reduce (partial apply assoc)
                                          {}
                                          (load-media paths))
                            result)))
    result))