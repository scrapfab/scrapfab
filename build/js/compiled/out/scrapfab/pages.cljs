(ns scrapfab.pages)

;; --------

;; -------- ui --------

(defn service-page
  "Displays the photo gallery for a single service."
  [service]
  ())

(defn services-page
  "Top-level services page contains links to individual services."
  []
  (let []
    ()))

(def pages
  (conj [home-page
         about-page]
        (services-page)
        (service-page :metal)
        (service-page :prop)
        (service-page :set)
        (service-page :sculpt)))