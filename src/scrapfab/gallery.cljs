(ns scrapfab.gallery
  (:require [clojure.string :refer [join]]))

(defn gallery
  [images]
  [:div.gallery
   {:data-photos (->> images
                      (sort-by :rate >)
                      (map :src)
                      (join " "))}])
