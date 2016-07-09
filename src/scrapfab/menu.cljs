(ns scrapfab.menu
  (:require [scrapfab.spa :refer [sub-url? current-url set-url!]]))

(defn class-opts
  [class]
  (when (some? class) {:class class}))

(defn brand-heading
  [& {:keys [class brand]}]
  (when (some? brand)
    [:div.pure-menu-heading
     (class-opts class)
     brand]))

(defn horizontal-menu
  [& {:keys [items
             current-id
             label-fn
             id-fn
             url-fn
             selected-fn
             on-change
             class
             brand]
      :or {label-fn    (fn [item] (:label item))
           id-fn       (fn [item] (:id item))
           selected-fn (fn [item] (= current-id (id-fn item)))
           url-fn      (constantly "#")}}]
  [:div.pure-menu.pure-menu-horizontal
   (class-opts class)
   [brand-heading :class class :brand brand]
   [:ul.pure-menu-list
    (class-opts class)
    (doall
      (for [item items]
        ^{:key (id-fn item)}
        [:li.pure-menu-item
         (class-opts (str class
                          (when (selected-fn item)
                            " pure-menu-selected")))
         [:a.pure-menu-link
          {:href     (url-fn item)
           :on-click (fn [e]
                       (.preventDefault e)
                       (on-change item))}
          (label-fn item)]]))]])

(defn navigation
  [& {:keys [items class brand]}]
  [horizontal-menu :items items
                   :class class
                   :brand brand
                   :current-id @current-url
                   :id-fn :url
                   :url-fn :url
                   :selected-fn (fn [item] (sub-url? @current-url (:url item)))
                   :on-change (fn [item]
                                (set-url! (:url item)))])