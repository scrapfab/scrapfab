(ns scrapfab.build
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.nodejs :as nodejs]
            [cljs.core.async :as async :refer [<!]]
            [cljs.pprint :refer [pprint]]
            [reagent.core :as reagent]
            [clojure.string :refer [join split]]
            [cljs.reader :refer [read-string]]
            [scrapfab.site :as core]
            [scrapfab.util :refer [ls read-in]]
            [scrapfab.media :as media]))

(nodejs/enable-util-print!)

(defonce fs (nodejs/require "fs"))
(defonce file-path (nodejs/require "path"))
(defonce mkdirp (nodejs/require "mkdirp"))
(defonce ncp (nodejs/require "ncp"))
(defonce gm (nodejs/require "gm"))

(.mkdirp mkdirp "build/media")

(defn url->path
  "Converts the url of a page to a filename, relative to the root
  directory of the site."
  [url]
  (str "build"
       (join "/" (split url "/"))
       ".html"))

(defn root-layout
  [body stylesheets javascripts]
  [:html
    [:head
     (doall
       (map (fn [style]
              ^{:key style}
              [:link
               {:rel  "stylesheet"
                :type "text/css"
                :href style}])
            core/stylesheets))]
    [:body
     [:div#app body]
     (doall
       (map (fn [js]
              ^{:key js}
              [:script
               {:type "text/javascript"
                :src  js}])
            core/javascripts))]])

(defn render-page
  "Given a site-map page value as the first argument and a seq of
  media associated with the page as its second argument, return the
  rendered body HTML of the page."
  [layout url {:keys [render] :as page} media-library]
  (str "<!DOCTYPE html>\n"
   (reagent/render-to-string
   [root-layout
    [layout url
     [render url (dissoc page :render) media-library]]])))

(defn write-page!
  "Given a URL and the rendered HTML for that URL, write the webpage
  to the file system."
  [url html]
  (let [path (url->path url)]
    (.mkdirp mkdirp
             (.dirname file-path path)
             #(.writeFileSync fs path html))))

(defn compile-gallery!
  [media-library [name {:keys [tags]}]]
  (let [path (.join file-path "build" "media" (str name ".json"))
        source (->> media-library
                    (filter (partial media/tagged? tags))
                    (sort-by media/rating >)
                    (media/to-json))]
    (.writeFileSync fs path source)
    true))

(defn process-galleries!
  [media-library]
  (let [result (async/chan 16 (map (partial compile-gallery! media-library)))]
    (go
      (let [galleries (<! (ls "site/galleries"))]
        (async/pipe (async/merge
                      (map read-in galleries))
                    result)))
    result))

(defn write-assets!
  []
  (ncp "site/resources" "build"))

(defn -main [& args]
  (let [{:keys [site-map layout]} core/scrapfab]
    (go
      (let [media-library (async/<! (media/load-library))
            gallery-done  (process-galleries! media-library)]
        (write-assets!)
        (doseq [[url page] site-map]
          (let [html  (render-page layout url page media-library)]
            (write-page! url html)))))))

(set! *main-cli-fn* -main)
