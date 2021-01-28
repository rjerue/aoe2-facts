(ns aoe2.events
  (:require
   [re-frame.core :as re-frame]
   [aoe2.db :as db]
   [ajax.core :refer [GET]]
   [aoe2.lib :as lib]
   [clojure.string :as clojure.string]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-fx
 ::set-active-panel
 (fn [{:keys [db]} [_ {page :page slug :slug}]]
   (let [set-page (assoc db :active-panel page)]
     (case page
       :home-panel {:db set-page
                    :fx [[:dispatch [::get-civilizations]]]}
       :civ-panel {:db (assoc set-page :active-civilization slug)
                   :fx [[:dispatch [::get-civilization slug]]]}
       {:db set-page}))))

(re-frame/reg-event-db
 ::set-civilizations
 (fn [db [_ civs]]
   (assoc db
          :civilizations (reduce #(assoc %1 (%2 "id") %2) {} civs)
          :civilizations-loading-status :done)))

(re-frame/reg-event-db
 ::error-civilizations
 (fn [db _]
   (assoc db :civilizations [] :civilizations-loading :error)))

(re-frame/reg-event-db
 ::get-civilizations
 (fn [db]
   (GET "https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
     {:response-format :json
      :handler #(re-frame/dispatch [::set-civilizations (js->clj (%1 "civilizations"))])
      :error-handler #(re-frame/dispatch [::error-civilizations])})
   (assoc db :civilizations {} :civilizations-loading :loading)))

(re-frame/reg-event-db
 ::get-civilization
 (fn [db [_ id]]
   (GET (str "https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/" id)
     {:response-format :json
      :handler #(re-frame/dispatch [::set-civilization %1])
      :error-handler #(re-frame/dispatch [::error-civilizations])})
   (assoc-in db [:civilizations (str id) :loading] true)))

(re-frame/reg-event-db
 ::set-civilization
 (fn [db [_ civ]]
   (let [units (civ "unique_unit")]
     (when (not-empty units) (doseq [unit-url units] (re-frame/dispatch [::get-unit (lib/final-slug unit-url)]))))
   (assoc-in db [:civilizations (str (civ "id"))] (assoc civ :loading false))))

(re-frame/reg-event-db
 ::get-unit
 (fn [db [_ id]]
   (GET (str "https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/unit/" id)
     {:response-format :json
      :handler #(re-frame/dispatch [::set-unit %1])
      :error-handler #(re-frame/dispatch [::error-civilizations])})
   (assoc-in db [:units (str id)] {:loading true})))

(re-frame/reg-event-db
 ::set-unit
 (fn [db [_ unit]]
   (assoc-in db [:units (clojure.string/replace (-> "name" unit clojure.string/lower-case) " " "_")] (assoc unit :loading false))))