(ns scrapfab.images)

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
    :services #{:prop}}

   {:title "Corporate Headquarters"
    :desc  ""
    :src   "/img/corp_head.jpg"
    :services #{:set}}

   {:title "Electric Daisy Carnival Flower"
    :desc  ""
    :src   "/img/edc_flower.jpg"
    :services #{:set}}

   {:title "Electric Daisy Carnival Flower and Monster"
    :desc  ""
    :src   "/img/edc_show.jpg"
    :services #{:set}}

   {:title "Satanic Fire Pit"
    :desc  ""
    :src   "/img/fire_pit.jpg"
    :services #{:sculpt :metal}}

   {:title "Shelving for soda repair vans."
    :desc  ""
    :src   "/img/van_shelving.jpg"
    :services #{:metal}}])

