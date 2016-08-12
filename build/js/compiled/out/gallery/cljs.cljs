(ns gallery.cljs)

(defn gallery
  [images]
  [:div.pure-g.gallery
   (doall
     (for [img images]
       ^{:key (:src img)}
       [:div.pure-u-1-3.gallery-cell
        [:img.gallery-img {:src (:src img)}]]))])