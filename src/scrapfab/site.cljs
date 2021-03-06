(ns scrapfab.site
  (:require [scrapfab.menu :refer [navigation]]
            [scrapfab.gallery :refer [gallery]]

            [clojure.string :refer [join]]
            [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn logo
  []
  [:object.logo
   {:type "image/svg+xml"
    :data "/img/toolbox.svg"}])

(defn who-we-are
  []
  [:div
  [:h1.site-heading "Who We Are"]
  [:hr]
  [:div.pure-g
   [:div.pure-u-1.pure-u-md-1-2.pure-u-lg-1-2.profile
     [:img.profile-picture {:src "/img/good_deal.jpg"}]
     [:h2.profile-name "Good Deal Neil"]
     [:p.profile-text "Professional problem solver."]]
   [:div.pure-u-1.pure-u-md-1-2.pure-u-lg-1-2.profile
     [:img.profile-picture {:src "/img/dmitry.jpg"}]
     [:h2.profile-name "Dmitry Kolobov"]
     [:p.profile-text "Scrap scientist."]]]])

(defn footer
  []
  [:div
   [:h1.site-heading "Contact Us"]
   [:div.text-center
    [:a.red-white.muncie
     {:href "mailto:scrapfab@gmail.com"}
     "scrapfab@gmail.com"]]])

(defn scrapfab-layout
  [current-url body]
  [:div.pure-g
   [:div.pure-u-1-24]
   [:div.pure-u-22-24
    [logo]
    [:p.text-center
     "Custom fabricators making fantasies come alive."]
    [:a {:href "#gallery"}]
    body
    [who-we-are]
    [footer]]
   [:div.pure-u-1-24]])

(def service-navigation
  [{:url "#all" :label "Our Work" :brand? true}
   {:url "#metal" :label "Metal Fabrication"}
   {:url "#prop" :label "Prop Fabrication"}
   {:url "#set" :label "Set Design"}
   {:url "#sculpt" :label "Sculpture"}])

(defn service-layout
  [url body]
  [:div
   [navigation :items service-navigation
               :current-url url
               :class "gallery-menu"]
   body])

(defn service-index
  [url _ media-library]
  [service-layout :content
   [:div
    [gallery media-library]]])

(defn service-page
  [url {:keys [title gallery-id]} media-library]
  [service-layout url
   [:div.gallery {:data-gallery-id "all"}]])

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
  "http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css"
  "/css/colorbox.css"
  "/css/fixedsticky.css"
  "/css/style.css"])

(def javascripts
 ["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"
  "https://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.6.4/jquery.colorbox.js"
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.15.0/lodash.min.js"
  "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.13.0/polyfill.min.js"
  "/js/linear_partition.js"
  "/js/fixedsticky.js"
  "/js/perfect_gallery.js"])
