(ns scrapfab.gallery
  (:require [clojure.set :refer [intersection]]
            [clojure.string :refer [join]]
            [scrapfab.media :as media]))

(defn tagged-media?
  "Returns true if all tags in given as the first argument are associated
  with the media given as the second argument."
  [tags media]
  (seq (intersection (set tags) (:tags (second media)))))

(defn gallery
  ([media-library]
    (gallery media-library []))
  ([media-library tags]
  [:div.gallery
   {:data-photos (->> media-library
                      (filter #(tagged-media? tags %))
                      (sort-by (comp :rate second) >)
                      (into {})
                      (media/to-json))}]))
