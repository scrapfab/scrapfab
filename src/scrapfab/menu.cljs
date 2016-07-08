(ns scrapfab.menu)

(defn class-opts
  [class]
  (when (some? class) {:class class}))

(defn horizontal-menu
  [& {:keys [items
             current-id
             label-fn
             id-fn
             url-fn
             on-change
             class
             brand]
      :or {label-fn (fn [item] (:label item))
           id-fn    (fn [item] (:id item))
           url-fn   (constantly "#")}}]
  [:div.pure-menu.pure-menu-horizontal
   (class-opts class)
   (when (some? brand)
     [:div.pure-menu-heading
      (class-opts class)
      brand])
   [:ul.pure-menu-list
    (class-opts class)
    (doall
      (for [item items]
        ^{:key (id-fn item)}
        [:li.pure-menu-item
         (class-opts (str class
                          (when (= current-id (id-fn item))
                            "pure-menu-selected")))
         [:a.pure-menu-link
          {:href     (url-fn item)
           :on-click (fn [e]
                       (.preventDefault e)
                       (on-change (id-fn item)))}
          (label-fn item)]]))]])
