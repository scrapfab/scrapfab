(ns scrapfab.util
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.nodejs :as nodejs]
            [cljs.reader :refer [read-string]]
            [cljs.core.async :as async]))

(defonce fs (nodejs/require "fs"))
(defonce node-path (nodejs/require "path"))

(defn read-in
  "Given a sequence of path fragments, reads the EDN file at that location
  and returns a Clojurescript data structure."
  [path]
  (let [result (async/chan)]
    (.readFile fs
               path
               (fn [err edn-buffer]
                 (async/put! result
                             [(.basename node-path path ".edn")
                              (read-string (.toString edn-buffer))])
                 (async/close! result)))
    result))

(defn ls
  [p]
  (let [c (async/chan)]
    (.readdir fs
              p
              (fn [err v]
                (async/put! c (js->clj (map #(.join node-path p %) v)))
                (async/close! c)))
    c))