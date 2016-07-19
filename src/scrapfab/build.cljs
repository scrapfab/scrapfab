(ns scrapfab.build
  (:require [cljs.nodejs :as nodejs]
            [reagent.core :as reagent]
            [clojure.set :refer [subset?]]

            [scrapfab.core :as core]))

(nodejs/enable-util-print!)

(defonce fs (nodejs/require "fs"))
(defonce file-path (nodejs/require "path"))
(defonce mkdirp (nodejs/require "mkdirp"))

(defn url->path
  "Converts the url of a page to a filename, relative to the root
  directory of the site."
  [url]
  (str "build"
       (clojure.string/join "/" (clojure.string/split url "/"))
       ".html"))

(defn tagged-media?
  "Returns true if all tags in given as the first argument are associated
  with the media given as the second argument."
  [tags media]
  (subset? (set tags) (:tags media)))

(defn page-media
  "Given a site-map page value as the first argument and a seq of
  media as the first argument, return a seq of media associated with
  that page."
  [{:keys [tags] :as page} media-library]
  (filter #(tagged-media? tags %) media-library))

(defn root-layout
  [body]
  [:html
    [:head]
    [:body
     body]])

(defn render-page
  "Given a site-map page value as the first argument and a seq of
  media associated with the page as its second argument, return the
  rendered body HTML of the page."
  [layout url {:keys [render] :as page} media]
  (reagent/render-to-string
   [root-layout
    [layout url
     [render url (dissoc page :render :tags) media]]]))

(defn write-page!
  "Given a URL and the rendered HTML for that URL, write the webpage
  to the file system."
  [url html]
  (let [path (url->path url)]
    (.mkdirp mkdirp
             (.dirname file-path path)
             #(.writeFileSync fs path html))))

(defn -main [& args]
  (let [{:keys [site-map layout media-library]} core/scrapfab]
    (doseq [[url page] site-map]
      (let [media (page-media page media-library)
            html  (render-page layout url page media)]
        (write-page! url html)))))

(set! *main-cli-fn* -main)
