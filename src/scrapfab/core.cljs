(ns scrapfab.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(def real-links?
  "Set to false to render website as an SPA, set to true if links
  should navigate to the new url."
  false)

(def location
  "Holds the current url of the SPA."
  (atom "/"))

(defn navigate!
  [url]
  "Set the current url of the SPA to the given url."
  (reset! location url))

(defn logo
  []
  [:h1 "ScrapFab"])

(defn navigation
  "Main site navigation."
  [pages]
  (println @location)
  [:ul.pure-menu
   [:ul.pure-menu-heading (logo)]
   [:ul.pure-menu-list
    (for [[url {:keys [title skip-nav?]}] pages]
      (when-not skip-nav?
        [:li.pure-menu-item
         {:class (when (= url @location) "pure-menu-selected")}
         [:a.pure-menu-link
          (if real-links?
            {:href url}
            {:href "#"
             :on-click (partial navigate! url)})
          title]]))]])

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
    [:div.pure-u-g
     [:div.pure-u-1-5 [navigation pages]]
     [:div.pure-u-4-5 body]]))

(reagent/render-component [site :pages site-pages]
                          (. js/document (getElementById "app")))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
