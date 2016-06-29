(ns scrapfab.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn logo
  []
  [:h1 "ScrapFab"])

(defn navigation
  "Main site navigation."
  [current-url pages]
  [:ul.pure-menu
   [:ul.pure-menu-heading (logo)]
   [:ul.pure-menu-list
    (for [[url {:keys [title skip-nav?]}] pages]
      (when-not skip-nav?
        [:li.pure-menu-item
         {:class (when (= url current-url) "pure-menu-selected")}
         [:a.pure-menu-link
          {:href url}
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
  [& {:keys [pages current-url]}]
  (let [body (get-in pages [current-url :body])]
    [:div.pure-u-g
     [:div.pure-u-1-5 [navigation current-url pages]]
     [:div.pure-u-4-5 body]]))

(reagent/render-component [site :pages site-pages
                                :current-url "/about"]
                          (. js/document (getElementById "app")))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
