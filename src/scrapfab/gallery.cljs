(ns scrapfab.gallery
  (:require [scrapfab.media :as media]))

(defn gallery
  ([media-library]
    (gallery media-library []))
  ([media-library tags]
  [:div.gallery]))
