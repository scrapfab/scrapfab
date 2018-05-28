# scrapfab

## Basic Usage 

To build the website: 

```
npm install 
lein cljsbuild once node
node run.js
```

## Adding Pictures 

1. Put photo `foobar.jpg` in `site/resources/img`
2. Add the following entry to the map( before the last curly brace ) in `site/media.edn`:
```clojure
 ...
 "foobar.jpg" {:title "Title of the Picture"
               :desc  "Some words"
               :rate  5 ;; higher means its more likely to appear in front.
               :tags  #{:metal} ;; Set of categories the picture belongs to. 
                                ;; Allowed categories: #{:metal :sculpt :set :prop}
 } ;; <- existing curly brace.      
```