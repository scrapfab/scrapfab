(ns scrapfab.images
 (:require [clojure.set :refer [subset?]]))

;; Possible image types:
;;
;;   :metal  - Metal Fabrication
;;   :set    - Set Design
;;   :prop   - Prop Fabrication
;;   :sculpt - Sculpture

(def images
  [{:title "Metal Railing for staircase"
    :desc  ""
    :src   "/img/curvy_railing.jpg"
    :tags  #{:metal}}

   {:title "Satanic Fire Pit"
    :desc  ""
    :src   "/img/fire_pit.jpg"
    :tags  #{:sculpt :metal}}

   {:title "Police Car"
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

   {:title "Shelving for soda repair vans."
    :desc  ""
    :src   "/img/van_shelving.jpg"
    :tags  #{:metal}}

   {:title "Fire Stick"
    :desc ""
    :src "/img/fire_stick.jpg"
    :tags #{:metal :prop}}

   {:title "Water Heater Spaceship"
    :desc  ""
    :src   "/img/spaceship.jpg"
    :tags  #{:metal :prop}}

   {:title "Bike Trailer"
    :desc  ""
    :src   "/img/trailer.jpg"
    :tags  #{:metal}}

   {:title "Kicks USA Store Display"
    :desc  ""
    :src   "/img/kicks_1.jpg"
    :tags  #{:set}}

   {:title "Kicks USA Store Display"
    :desc  ""
    :src   "/img/kicks_2.jpg"
    :tags  #{:set}}

   {:title "Kicks USA Store Display"
    :desc  ""
    :src   "/img/kicks_3.jpg"
    :tags  #{:set}}

   {:title "NFL Hallway"
    :desc  ""
    :src   "/img/nfl_hallway_1.jpg"
    :tags  #{:set}}])

(defn tagged?
 [tags media]
 (subset? (set tags) (:tags media)))