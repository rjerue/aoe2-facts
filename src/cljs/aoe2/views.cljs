(ns aoe2.views
  (:require
   [re-frame.core :as re-frame]
   [aoe2.subs :as subs]
   [aoe2.routes :as routes]
   [aoe2.lib :as lib]))

(defn civilization-component [{id "id" name "name"}]
  [:li {:key (str id "-" name) :value id} [:a {:href (routes/url-for :civ-panel :slug id)} name]])

(defn civilization-link []
  (let [civilizations (re-frame/subscribe [::subs/civilizations])]
    [:ul {:name "civiliztions" :id "civilizations"}
     (let [civ-seq (vals @civilizations)]
       (if (empty? civ-seq)
         "Loading..."
         (map civilization-component civ-seq)))]))

(defn home-panel []
  [:div
   [:h2 "Select a civilization to learn more"]
   [:div [civilization-link]]
   [:div]])

(defn about-panel []
  [:div
   [:h1 "This is the About Page."]

   [:div
    [:a {:href (routes/url-for :home-panel)}
     "go to Home Page"]]])

(defn content-list [{title :title elements :elements}]
  [:div
   [:h3 title]
   [:ul (for [[index value] (map-indexed #(vector %1 %2) elements)]
          [:li {:key (str title index value)} value])]])

(defn format-unit [unit]
  (if (unit :loading)
    "Loading..."
    (str (unit "name") " - " (unit "description") ".")))

(defn unit-content [unit-id]
  (let [unit (re-frame/subscribe [::subs/unit unit-id])]
    (when @unit
      (format-unit @unit))))

(defn civ-panel []
  [:div
   (let [id (re-frame/subscribe [::subs/active-civilization])]
     (if (nil? @id)
       [:h2 "Error: 404"]
       (let [active (re-frame/subscribe [::subs/civilization @id])]
         (if (nil? @active)
           [:h2 "Error: 404"]
           [:div
            [:h2 (str "Civilization: " (@active "name"))]
            (if (@active :loading)
              [:p "Loading..."]
              [:div
               [content-list {:title "Bonuses:" :elements (@active "civilization_bonus")}]
               (let [unit-ids (mapv #(lib/final-slug %1) (@active "unique_unit"))
                     elements (mapv unit-content unit-ids)]
                 (if (and (empty? unit-ids) (not (@active :loading)))
                   [:p "No unique units"]
                   [content-list {:title "Unique Units:"
                                  :elements elements}]))])]))))])

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    :civ-panel [civ-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  [:div [:header [:a {:href (routes/url-for :home-panel)} [:h1 "Age of Empires 2 Facts"]]
         [:i "AoE 2 is the second best video game ever (the OG KOTOR is #1), but it has the best API!"]]
   (let [active-panel (re-frame/subscribe [::subs/active-panel])]
     [:section [show-panel @active-panel]])])