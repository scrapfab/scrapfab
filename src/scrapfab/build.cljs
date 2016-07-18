(ns scrapfab.build
  (:require [cljs.nodejs :as nodejs]
            [reagent.core :as reagent]
            [scrapfab.core :as core]))

(nodejs/enable-util-print!)

(defn -main [& args]
  (println "Building...")
  (println
    (reagent/render-to-string [core/render-site core/scrapfab])))

(set! *main-cli-fn* -main)
