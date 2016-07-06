(ns scrapfab.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

;; SPA wiring

(def real-links?
  "Set to false to render website as an SPA, set to true if links
  should navigate to the new url."
  false)

(def location
  "Holds the current url of the SPA."
  (atom "/"))

(defn navigate!
  [url e]
  "Set the current url of the SPA to the given url."
  (.preventDefault e)
  (reset! location url))

(defn logo
  []
  [:div.logo
   [:span.logo-scrap "scrap"]
   [:span.logo-fab "fab"]])

(defn navigation
  "Main site navigation."
  [pages]
  [:ul.pure-menu.pure-menu-horizontal.main-menu
   [:ul.pure-menu-heading.logo-container (logo)]
   [:ul.pure-menu-list
    (doall
      (for [[url {:keys [title skip-nav?]}] pages]
        (when-not skip-nav?
          (println (str "current:"@location" url:"url))
          ^{:key url}
          [:li.pure-menu-item
           {:class
            (when (= url @location) "pure-menu-selected")}
           [:a.pure-menu-link
            {:href url
             :on-click (partial navigate! url)}
            title]])))]])

(defn service
  [{:keys [title desc images]}]
  [:div.service
   [:div.pure-g
    [:div.pure-u-1-3
     [:h2 title]
     desc]
    [:div.pure-u-2-3
     [:div.pure-g.gallery
      (doall
        (for [src images]
          ^{:key src}
          [:div.pure-u-1-3.gallery-cell
           [:img.gallery-img {:src src}]]))]]]])

(def our-services
  [{:title "Metal Fabrication"
    :desc "We do metal stuff"
    :images ["img/van_shelving.jpg"
             "img/trailer.jpg"
             "img/railing.jpg"]}
   {:title "Prop Fabrication"
    :desc "We fabricate props."
    :images ["img/spaceship.jpg"
             "img/see_saw.jpg"
             "img/music_car.jpg"
             "img/fire_stick.jpg"
             "img/toyota_concept_1.jpg"
             "img/toyota_concept_2.jpg"
             "img/cop_car.jpg"]}
   {:title "Set Design"
    :desc "We design sets."
    :images ["img/edc_show.jpg"
             "img/edc_flower.jpg"
             "img/corp_head.jpg"
             "img/kicks_1.jpg"
             "img/kicks_2.jpg"
             "img/kicks_3.jpg"
             "img/toyota_set_1.jpg"
             "img/toyota_set_2.jpg"
             "img/toyota_set_3.jpg"]}])

(defn services
  []
  [:div.services
   (doall
     (for [s our-services]
       ^{:key (:title s)}
       (service s)))])

(def site-pages
  {"/"
   {:title     "Home"
    :body      "Hello, world"
    :skip-nav? true}

   "/about"
   {:title "About"
    :body  "About us"}

   "/services"
   {:title "Services"
    :body (services)}

   "/contact"
   {:title "Contact"}})

(defn site
  "Main site template containing the logo and navigation."
  [& {:keys [pages]}]
  (let [body (get-in pages [@location :body])]
    [:div.app
     [:div.header [navigation pages]]
     body]))

(reagent/render-component [site :pages site-pages]
                          (. js/document (getElementById "app")))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
