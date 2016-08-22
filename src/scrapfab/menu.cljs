(ns scrapfab.menu)

(defn sub-url?
  [parent-url url]
  (when-let [m (.exec (js/RegExp url) parent-url)]
    (= (.-index m) 0)))

(defn class-opts
  [class]
  (when (some? class) {:class class}))

(defn menu-item
  [& {:keys [url label on-change class selected?]}]
  (let [item-class (str class "-item" (when selected? " pure-menu-selected"))
        link-class (str class "-link")]
    [:li.pure-menu-item
     {:class item-class}
     [:a.pure-menu-link
      {:href     url
       :class    link-class
       :on-click (fn [e]
                   (.preventDefault e)
                   (on-change e))}
      label]]))

(defn horizontal-menu
  [& {:keys [items
             current-id
             label-fn
             id-fn
             url-fn
             selected-fn
             on-change
             class]
      :or {label-fn    (fn [item] (:label item))
           id-fn       (fn [item] (:id item))
           selected-fn (fn [item] (= current-id (id-fn item)))
           url-fn      (constantly "#")}}]
  [:div.pure-menu.pure-menu-horizontal
   (class-opts class)
   [:ul.pure-menu-list
    (class-opts class)
    (doall
      (for [item items]
        ^{:key (id-fn item)}
        [menu-item :url       (url-fn item)
                   :label     (label-fn item)
                   :on-change on-change
                   :class     class
                   :selected? (selected-fn item)]))]])

(defn navigation
  [& {:keys [current-url items class]}]
  [horizontal-menu :items items
                   :class class
                   :current-id current-url
                   :id-fn :url
                   :url-fn :url
                   :selected-fn (fn [item] (sub-url? current-url (:url item)))])
