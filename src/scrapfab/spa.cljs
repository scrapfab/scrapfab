(ns scrapfab.spa
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce location (atom "/"))

(defn current-url
  "Returns the current URL of the static-site SPA."
  []
  @location)

(defn set-url!
  "Sets the current URL of the static-site SPA to the given URL."
  [url]
  (reset! location url))

(defn sub-url?
  [parent-url url]
  (when-let [m (.exec (js/RegExp url) parent-url)]
    (= (.-index m) 0)))