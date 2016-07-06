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

(def site-pages
  {"/"
   {:title     "Home"
    :body      "Hello, world"
    :skip-nav? true}

   "/about"
   {:title "About"
    :body  "About us"}

   "/services"
   {:title "Services"}

   "/portfolio"
   {:title "Portfolio"}

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
