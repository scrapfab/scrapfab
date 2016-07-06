(ns scrapfab.core
  (:require [scrapfab.services :refer [services]]
            [scrapfab.images :refer [images]]
            [reagent.core :as reagent :refer [atom]]))

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

(defn render-service
  [{:keys [title desc images]}]
  [:div.service
   [:div.pure-g
    [:div.pure-u-1-3
     [:h2 title]
     desc]
    [:div.pure-u-2-3
     [:div.pure-g.gallery
      (doall
        (for [img images]
          ^{:key (:src img)}
          [:div.pure-u-1-3.gallery-cell
           [:img.gallery-img {:src (:src img)}]]))]]]])

(defn contains-service?
  [service image]
  (contains? (:services image) service))

(defn load-service
  [service]
  (let [{:keys [title desc]} (get services service)
        images (filter (partial contains-service? service) images)]
    {:title  title
     :desc   desc
     :images images}))

(println (load-service :metal))

(defn services-page
  []
  [:div.services
   (doall
     (for [s (keys services)]
       ^{:key (:title s)}
       (render-service (load-service s))))])

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
    :body (services-page)}

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
