(ns scrapfab.core
  (:require [scrapfab.menu :refer [navigation]]
            [scrapfab.spa :refer [current-url set-url!]]

            [scrapfab.images :as images :refer [tagged?]]
            [scrapfab.desc :as desc]

            [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

;; ---- app wiring ----

(defn render-url
  [{:keys [site-map layout media]} url]
  (let [{:keys [render tags] :as page} (get site-map url)
        images (filter #(tagged? tags %) media)
        page   (assoc (dissoc page :render) :images images)]
    [layout :content [render page]]))

;; ---- scrapfab ----

(defn logo
  []
  [:div.logo
   [:span.logo-scrap "scrap"]
   [:span.logo-fab "fab"]])

(def main-navigation
  [{:url "/about" :label "About"}
   {:url "/services" :label "Services"}
   {:url "/contact" :label "Contact"}])

(defn scrapfab-layout
  [& {:keys [content]}]
  [:div.app
   [:div.header
    [navigation :items main-navigation
                :brand [logo]
                :class "main-menu"]]
    content])

(defn about-page
  [_]
  [:div "about us"])

(defn contact-page
  [_]
  [:div "contact us"])

(def service-navigation
  [{:url "/services/metal" :label "Metal Fabrication"}
   {:url "/services/prop" :label "Prop Fabrication"}
   {:url "/services/set" :label "Set Design"}
   {:url "/services/sculpture" :label "Sculpture"}])

(defn service-layout
  [& {:keys [content]}]
  [:div
   [navigation :items service-navigation
               :class "service-menu"]
   content])

(defn gallery
  [images]
  [:div.pure-g.gallery
   (doall
     (for [{:keys [src]} images]
       ^{:key src}
       [:div.pure-u-1-3.gallery-cell
        [:img.gallery-img
         {:src src}]]))])

(defn service-index
  [{:keys [images]}]
  [service-layout :content
   [:div
    [:h1 "We provide all the services"]
    [gallery images]]])

(defn service-page
  [{:keys [title images desc]}]
  [service-layout :content
   [:div
    [:h1 title]
    [:p desc]
    [gallery images]]])

(def site-map
  {"/about"              {:title  "About"
                          :render about-page}

   "/contact"            {:title  "Contact"
                          :render contact-page}

   "/services"           {:title  "Services"
                          :render service-index}

   "/services/metal"     {:title  "Metal Fabrication"
                          :desc   desc/metal
                          :tags   [:metal]
                          :render service-page}

   "/services/prop"      {:title  "Prop Fabrication"
                          :desc   desc/prop
                          :tags   [:prop]
                          :render service-page}

   "/services/set"       {:title  "Set Fabrication"
                          :desc   desc/set
                          :tags   [:set]
                          :render service-page}

   "/services/sculpture" {:title  "Sculpture"
                          :desc   desc/sculpt
                          :tags   [:sculpt]
                          :render service-page}})

(def scrapfab
  {:layout scrapfab-layout
   :site-map site-map
   :media images/images})

(defn render-site
  [site]
  [render-url site @current-url])

(reagent/render-component [render-site scrapfab]
                          (. js/document (getElementById "app")))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
