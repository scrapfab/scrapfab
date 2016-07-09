(ns scrapfab.images
 (:require [clojure.set]))

;; Possible image types:
;;
;;   :metal  - Metal Fabrication
;;   :set    - Set Design
;;   :prop   - Prop Fabrication
;;   :sculpt - Sculpture

(def images
  [{:title "Police Car"
    :desc  ""
    :src   "/img/cop_car.jpg"
    :tags  #{:prop}}

   {:title "Corporate Headquarters"
    :desc  ""
    :src   "/img/corp_head.jpg"
    :tags  #{:set}}

   {:title "Electric Daisy Carnival Flower"
    :desc  ""
    :src   "/img/edc_flower.jpg"
    :tags  #{:set}}

   {:title "Electric Daisy Carnival Flower and Monster"
    :desc  ""
    :src   "/img/edc_show.jpg"
    :tags  #{:set}}

   {:title "Satanic Fire Pit"
    :desc  ""
    :src   "/img/fire_pit.jpg"
    :tags  #{:sculpt :metal}}

   {:title "Shelving for soda repair vans."
    :desc  ""
    :src   "/img/van_shelving.jpg"
    :tags  #{:metal}}])

(defn tagged?
 [tags media]
 (subset? (set tags) (:tags media)))