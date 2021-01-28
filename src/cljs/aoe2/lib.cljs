(ns aoe2.lib
  (:require
   [clojure.string :as clojure.string]))

(defn final-slug [input]
  (last (clojure.string/split input "/")))