(ns scrapfab.build
  (:require [cljs.nodejs :as nodejs]
            [reagent.core :as reagent]

            [scrapfab.core :as core]))

(nodejs/enable-util-print!)

(defonce fs (nodejs/require "fs"))
(defonce file-path (nodejs/require "path"))
(defonce mkdirp (nodejs/require "mkdirp"))
(defonce ncp (nodejs/require "ncp"))

(defn url->path
  "Converts the url of a page to a filename, relative to the root
  directory of the site."
  [url]
  (str "build"
       (clojure.string/join "/" (clojure.string/split url "/"))
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
  (reagent/render-to-string
   [root-layout
    [layout url
     [render url (dissoc page :render) media-library]]]))

(defn write-page!
  "Given a URL and the rendered HTML for that URL, write the webpage
  to the file system."
  [url html]
  (let [path (url->path url)]
    (.mkdirp mkdirp
             (.dirname file-path path)
             #(.writeFileSync fs path html))))

(defn normalize-indexes
  "Given a site-map, return a sequence of [url page] entries with all index
  page urls explicitely referencing an index.html file."
  [site-map]
  (map (fn [[url page]]
         (if (:index? page)
           [(str (clojure.string/join "/"
                  (clojure.string/split url "/"))
                  "/index")
            (dissoc page :index?)]
           [url page]))
       site-map))

(defn -main [& args]
  (let [{:keys [site-map layout media-library]} core/scrapfab]
    (ncp "resources/public" "build")
    (doseq [[url page] (normalize-indexes site-map)]
      (let [html  (render-page layout url page media-library)]
        (write-page! url html)))))

(set! *main-cli-fn* -main)
