(ns scrapfab.services)

(defn metal-description
  []
  "")

(defn prop-description
  []
  "")

(defn set-description
  []
  "")

(defn sculpture-description
  []
  "")

(def services
  {:metal  {:title "Metal Fabrication"
            :desc  (metal-description)}

   :prop   {:title "Prop Fabrication"
            :desc  (prop-description)}

   :set    {:title "Set Design"
            :desc  (set-description)}

   :sculpt {:title "Sculpture"
            :desc  (sculpture-description)}})

