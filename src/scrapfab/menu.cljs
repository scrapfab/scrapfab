(ns scrapfab.menu)

(defn sub-url?
  [parent-url url]
  (when-let [m (.exec (js/RegExp url) parent-url)]
    (= (.-index m) 0)))

(defn class-opts
  [class]
  (when (some? class) {:class class}))

(defn menu-item
  [& {:keys [url label class selected?]}]
  (let [item-class (str class "-item" (when selected? " pure-menu-selected"))
        link-class (str class "-link")]
    [:li.pure-menu-item
     {:class item-class}
     [:a.pure-menu-link
      {:href     url
       :class    link-class}
      label]]))

(defn horizontal-menu
  [& {:keys [items
             current-id
             label-fn
             id-fn
             url-fn
             selected-fn
             class]
      :or {label-fn    :label
           id-fn       :id
           selected-fn (fn [item] (= current-id (id-fn item)))
           url-fn      (constantly "#")}}]
    [:div.pure-menu.pure-menu-horizontal
     (class-opts class)
     [:ul.pure-menu-list
      {:class (str class "-list")}
      (doall
        (for [item items]
          ^{:key (id-fn item)}
          [menu-item :url       (url-fn item)
                     :label     (label-fn item)
                     :class     class
                     :selected? (selected-fn item)]))]])

(defn brand-link
 [& {:keys [url label class selected?]}]
 [:a.pure-menu-heading.pure-menu-link
  {:href     url
   :class    (str class "-link " class "-heading" (when selected? " pure-menu-selected"))}
  label])


(defn navigation
  [& {:keys [current-url items class]}]
  (let [[brand & items] items
        selected-fn     (fn [item] (sub-url? current-url (:url item)))]
    [:div.responsive-menu.fixedsticky
     [:div.pure-menu.responsive-mobile-menu
      [brand-link :url       (:url brand)
                  :label     (:label brand)
                  :class     class
                  :selected? (selected-fn brand)]
      [:a.custom-toggle {:href "#"} [:s.bar] [:s.bar]]]
     [horizontal-menu :items items
                      :class class
                      :current-id current-url
                      :id-fn :url
                      :url-fn :url
                      :selected-fn selected-fn]]))
