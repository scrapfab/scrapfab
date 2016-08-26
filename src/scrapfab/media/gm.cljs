(ns scrapfab.media.gm
  (:require [cljs.nodejs :as nodejs]
            [cljs.core.async :as async :refer [chan put! close!]]))

(defonce gm (nodejs/require "gm"))

(defn get-dimensions
  "Given a gm img object as an argument, return a channel which will contain
  the underlying image's dimensions."
  [name img]
  (let [c (chan)]
    (.size img
           (fn [err size]
             (if (some? err)
               (println "warning:" name "is not an image")
               (put! c (js->clj size :keywordize-keys true)))
             (close! c)))
    c))

(defn get-filesize
  "Given a gm img object as an argument, return a channel which will contain
  the underlying image's filesize."
  [name img]
  (let [c (chan)]
    (.filesize img
               (fn [err filesize]
                 (if (some? err)
                   (println "warning: could not get" name "filesize")
                   (put! c filesize))
                 (close! c)))
    c))

(defn orientation
  [aspect]
  (if (< aspect 1) :portrait :landscape))

(defn resize-width
  [gm width]
  (.resize gm width))

(defn resize-height
  [gm height]
  (.resize gm height))


