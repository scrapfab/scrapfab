(ns scrapfab.core
  (:require [scrapfab.menu :refer [navigation]]

            [scrapfab.images :as images :refer [tagged?]]
            [scrapfab.desc :as desc]

            [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

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
  [current-url body]
  [:div.pure-g
   [:div.pure-u-1-24]
   [:div.pure-u-22-24
     [:div.header
      [navigation :items main-navigation
                  :brand [logo]
                  :current-url current-url
                  :class "main-menu"]]
      body]
   [:div.pure-u-1-24]])

(defn about-page
  [url _ media]
  [:div "about us"])

(defn contact-page
  [url _ media]
  [:div "contact us"])

(def service-navigation
  [{:url "/services/metal" :label "Metal Fabrication"}
   {:url "/services/prop" :label "Prop Fabrication"}
   {:url "/services/set" :label "Set Design"}
   {:url "/services/sculpture" :label "Sculpture"}])

(defn service-layout
  [url body]
  [:div
   [navigation :items service-navigation
               :current-url url
               :class "service-menu"]
   body])

(defn gallery
  [images]
  (reagent/create-class
    {:component-did-mount
     (fn [owner] (js/perfect_gallery (reagent/dom-node owner)))
     :reagent-render
     (fn [images]
      [:div.gallery
      {:style {:display "hidden"}}
      (doall
        (for [{:keys [src]} (sort-by :rate > images)]
          ^{:key src}
          [:img.gallery-img {:src src}]))])}))

(defn service-index
  [url _ media]
  [service-layout :content
   [:div
    [:h1 "We provide all the services"]
    [gallery media]]])

(defn service-page
  [url {:keys [title desc]} media]
  [service-layout url
   [:div
    [:h1 title]
    [:p desc]
    [gallery media]]])

(def site-map
  {"/about"              {:title  "About"
                          :render about-page}

   "/contact"            {:title  "Contact"
                          :render contact-page}

   "/services"           {:title  "Services"
                          :render service-index
                          :index? true}

   "/services/metal"     {:title  "Metal Fabrication"
                          :desc   desc/metal
                          :tags   [:metal]
                          :render service-page}

   "/services/prop"      {:title  "Prop Fabrication"
                          :desc   desc/prop
                          :tags   [:prop]
                          :render service-page}

   "/services/set"       {:title  "Set Fabrication"
                          :desc   desc/sets
                          :tags   [:set]
                          :render service-page}

   "/services/sculpture" {:title  "Sculpture"
                          :desc   desc/sculpt
                          :tags   [:sculpt]
                          :render service-page}})

(def scrapfab
  {:layout scrapfab-layout
   :site-map site-map
   :media-library images/images})
