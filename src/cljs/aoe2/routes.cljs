(ns aoe2.routes
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [re-frame.core :as re-frame]
            [aoe2.events :as events]))

(def routes ["/" {""      :home-panel
                  "about" :about-panel
                  "civ/" {[:slug] :civ-panel}}])

(def history
  (let [dispatch #(re-frame/dispatch [::events/set-active-panel {:page      (:handler %)
                                                                 :slug      (get-in % [:route-params :slug])}])
        match #(bidi/match-route routes %)]
    (pushy/pushy dispatch match)))

(defn start!
  []
  (pushy/start! history))

(def url-for (partial bidi/path-for routes))

(url-for :civ-panel :slug 1)