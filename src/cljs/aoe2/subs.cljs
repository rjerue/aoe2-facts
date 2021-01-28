(ns aoe2.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
 ::active-civilization
 (fn [db _]
   (:active-civilization db)))

(re-frame/reg-sub
 ::civilizations-loading
 (fn [db]
   (:civilizations-loading-status db)))


(re-frame/reg-sub
 ::civilizations
 (fn [db]
   (:civilizations db)))

(re-frame/reg-sub
 ::civilization
 (fn [db [_ id]]
   (-> db :civilizations (get (str id)))))

(re-frame/reg-sub
 ::unit
 (fn [db [_ id]]
   (-> db :units (get (str id)))))
