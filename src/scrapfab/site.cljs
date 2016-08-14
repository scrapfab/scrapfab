(ns scrapfab.site
  (:require [scrapfab.menu :refer [navigation]]
            [scrapfab.gallery :refer [gallery]]

            [clojure.string :refer [join]]
            [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn logo
  []
  [:img.logo {:src "/img/toolbox.svg"}])

(def main-navigation
  [{:url "/about" :label "About"}
   {:url "/services" :label "Services"}
   {:url "/contact" :label "Contact"}])

(defn who-we-are
  []
  [:div
  [:h1.site-heading "Who we are"]
  [:div.pure-g
   [:div.pure-u-1-2.profile
     [:img.profile-picture {:src "/img/good_deal.jpg"}]
     [:h2.profile-name "Good Deal Neil"]]
   [:div.pure-u-1-2.profile
     [:img.profile-picture {:src "/img/dmitry.jpg"}]
     [:h2.profile-name "Dmitry Kolobov"]]]])

(defn scrapfab-layout
  [current-url body]
  [:div.pure-g
   [:div.pure-u-1-24]
   [:div.pure-u-22-24
    [logo]
    [:p.text-center
     "Custom fabricators making fantasies come alive."]
    [:h1.site-heading "Our Work"]
    [:a {:href "#gallery"}]
    body
    [who-we-are]]
   [:div.pure-u-1-24]])

(def service-navigation
  [{:url "/all#gallery" :label "All"}
   {:url "/metal#gallery" :label "Metal Fabrication"}
   {:url "/prop#gallery" :label "Prop Fabrication"}
   {:url "/set#gallery" :label "Set Design"}
   {:url "/sculpture#gallery" :label "Sculpture"}])

(defn service-layout
  [url body]
  [:div
   [navigation :items service-navigation
               :current-url url
               :class "service-menu"]
   body])

(defn service-index
  [url _ media-library]
  [service-layout :content
   [:div
    [gallery media-library]]])

(defn service-page
  [url {:keys [title gallery-id]} media-library]
  [service-layout url
   [:div.gallery {:id "all"}]])

(def site-map
  {"/index"
   {:title      "Scrapfab"
    :render     service-page}})

(def scrapfab
  {:layout scrapfab-layout
   :site-map site-map})

(def stylesheets
 ["/css/muncie.css"
  "/css/pure-min.css"
  "/css/style.css"])

(def javascripts
 ["/js/lodash.js"
  "/js/polyfill.min.js"
  "/js/linear_partition.js"
  "/js/perfect_gallery.js"])
