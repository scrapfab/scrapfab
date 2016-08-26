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
            [scrapfab.media :as media]
            [scrapfab.media.gm :as gm :refer [gm resize-width resize-height]]))

(nodejs/enable-util-print!)

(defonce fs (nodejs/require "fs"))
(defonce file-path (nodejs/require "path"))
(defonce mkdirp (nodejs/require "mkdirp"))
(defonce ncp (nodejs/require "ncp"))

(.sync mkdirp "build/media")

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
     [:meta {:name "viewport" :content "width=device-width"}]
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
  (let [c (async/chan)]
    (ncp "site/resources"
         "build"
         (fn [err]
           (if err
             (println "Could not copy resources.")
             (async/put! c true))
           (async/close! c)))
    c))

(def MAX-WIDTH 1920)
(def MAX-HEIGHT 1920)

(defn write-cb
  [path]
  (fn [err]
    (if err
      (println "coult not write image" path err)
      (println path "written"))))

(defn preprocess-media
  [media-library]
  (let [img-dir "build/img"]
    (println "Resizing images.")
    (doseq [[name {:keys [orientation width height]}] media-library]
      (let [img-path (.join file-path img-dir name)
            img (gm img-path)]
        (condp = orientation
          :landscape
          (when (> width MAX-WIDTH)
            (println "resizing" img-path)
            (.write (resize-width img MAX-WIDTH)
                    img-path
                    (write-cb img-path)))
          :portrait
          (when (> height MAX-HEIGHT)
            (println "resizing" img-path)
            (.write (resize-height img MAX-HEIGHT)
                    img-path
                    (write-cb img-path))))))))

(defn -main [& args]
  (let [{:keys [site-map layout]} core/scrapfab]
    (go
      (let [media-library (async/<! (media/load-library))
            gallery-done  (process-galleries! media-library)]
        (when (async/<! (write-assets!))
          (preprocess-media media-library))
        (doseq [[url page] site-map]
          (let [html  (render-page layout url page media-library)]
            (write-page! url html)))))))

(set! *main-cli-fn* -main)
