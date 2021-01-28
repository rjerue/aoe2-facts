goog.provide('aoe2.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aoe2.events","initialize-db","aoe2.events/initialize-db",1889137380),(function (_,___$1){
return aoe2.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aoe2.events","set-active-panel","aoe2.events/set-active-panel",-95492168),(function (p__55638,p__55639){
var map__55640 = p__55638;
var map__55640__$1 = (((((!((map__55640 == null))))?(((((map__55640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55640):map__55640);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55640__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55641 = p__55639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55641,(0),null);
var map__55644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55641,(1),null);
var map__55644__$1 = (((((!((map__55644 == null))))?(((((map__55644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55644):map__55644);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55644__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55644__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var set_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),page);
var G__55647 = page;
var G__55647__$1 = (((G__55647 instanceof cljs.core.Keyword))?G__55647.fqn:null);
switch (G__55647__$1) {
case "home-panel":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),set_page,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","get-civilizations","aoe2.events/get-civilizations",1099560127)], null)], null)], null)], null);

break;
case "civ-panel":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(set_page,new cljs.core.Keyword(null,"active-civilization","active-civilization",-2074043656),slug),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","get-civilization","aoe2.events/get-civilization",1001998585),slug], null)], null)], null)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),set_page], null);

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aoe2.events","set-civilizations","aoe2.events/set-civilizations",-323533150),(function (db,p__55650){
var vec__55651 = p__55650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55651,(0),null);
var civs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55651,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"civilizations","civilizations",822016090),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__55648_SHARP_,p2__55649_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55648_SHARP_,(p2__55649_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__55649_SHARP_.cljs$core$IFn$_invoke$arity$1("id") : p2__55649_SHARP_.call(null,"id")),p2__55649_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,civs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"civilizations-loading-status","civilizations-loading-status",-1483740680),new cljs.core.Keyword(null,"done","done",-889844188)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aoe2.events","error-civilizations","aoe2.events/error-civilizations",-664733712),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"civilizations","civilizations",822016090),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"civilizations-loading","civilizations-loading",-1811779656),new cljs.core.Keyword(null,"error","error",-978969032)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aoe2.events","get-civilizations","aoe2.events/get-civilizations",1099560127),(function (db){
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__55654_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","set-civilizations","aoe2.events/set-civilizations",-323533150),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((p1__55654_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55654_SHARP_.cljs$core$IFn$_invoke$arity$1("civilizations") : p1__55654_SHARP_.call(null,"civilizations")))], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","error-civilizations","aoe2.events/error-civilizations",-664733712)], null));
})], null)], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"civilizations","civilizations",822016090),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"civilizations-loading","civilizations-loading",-1811779656),new cljs.core.Keyword(null,"loading","loading",-737050189)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aoe2.events","get-civilization","aoe2.events/get-civilization",1001998585),(function (db,p__55656){
var vec__55657 = p__55656;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(1),null);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__55655_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","set-civilization","aoe2.events/set-civilization",1100578252),p1__55655_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","error-civilizations","aoe2.events/error-civilizations",-664733712)], null));
})], null)], 0));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"civilizations","civilizations",822016090),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aoe2.events","set-civilization","aoe2.events/set-civilization",1100578252),(function (db,p__55660){
var vec__55661 = p__55660;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55661,(0),null);
var civ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55661,(1),null);
var units_55681 = (civ.cljs$core$IFn$_invoke$arity$1 ? civ.cljs$core$IFn$_invoke$arity$1("unique_unit") : civ.call(null,"unique_unit"));
if(cljs.core.truth_(cljs.core.not_empty(units_55681))){
var seq__55664_55682 = cljs.core.seq(units_55681);
var chunk__55665_55683 = null;
var count__55666_55684 = (0);
var i__55667_55685 = (0);
while(true){
if((i__55667_55685 < count__55666_55684)){
var unit_url_55686 = chunk__55665_55683.cljs$core$IIndexed$_nth$arity$2(null,i__55667_55685);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","get-unit","aoe2.events/get-unit",-1411575416),aoe2.lib.final_slug(unit_url_55686)], null));


var G__55687 = seq__55664_55682;
var G__55688 = chunk__55665_55683;
var G__55689 = count__55666_55684;
var G__55690 = (i__55667_55685 + (1));
seq__55664_55682 = G__55687;
chunk__55665_55683 = G__55688;
count__55666_55684 = G__55689;
i__55667_55685 = G__55690;
continue;
} else {
var temp__5735__auto___55691 = cljs.core.seq(seq__55664_55682);
if(temp__5735__auto___55691){
var seq__55664_55692__$1 = temp__5735__auto___55691;
if(cljs.core.chunked_seq_QMARK_(seq__55664_55692__$1)){
var c__4556__auto___55693 = cljs.core.chunk_first(seq__55664_55692__$1);
var G__55694 = cljs.core.chunk_rest(seq__55664_55692__$1);
var G__55695 = c__4556__auto___55693;
var G__55696 = cljs.core.count(c__4556__auto___55693);
var G__55697 = (0);
seq__55664_55682 = G__55694;
chunk__55665_55683 = G__55695;
count__55666_55684 = G__55696;
i__55667_55685 = G__55697;
continue;
} else {
var unit_url_55698 = cljs.core.first(seq__55664_55692__$1);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","get-unit","aoe2.events/get-unit",-1411575416),aoe2.lib.final_slug(unit_url_55698)], null));


var G__55699 = cljs.core.next(seq__55664_55692__$1);
var G__55700 = null;
var G__55701 = (0);
var G__55702 = (0);
seq__55664_55682 = G__55699;
chunk__55665_55683 = G__55700;
count__55666_55684 = G__55701;
i__55667_55685 = G__55702;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"civilizations","civilizations",822016090),cljs.core.str.cljs$core$IFn$_invoke$arity$1((civ.cljs$core$IFn$_invoke$arity$1 ? civ.cljs$core$IFn$_invoke$arity$1("id") : civ.call(null,"id")))], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(civ,new cljs.core.Keyword(null,"loading","loading",-737050189),false));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aoe2.events","get-unit","aoe2.events/get-unit",-1411575416),(function (db,p__55669){
var vec__55670 = p__55669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55670,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55670,(1),null);
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/unit/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__55668_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","set-unit","aoe2.events/set-unit",-1618545939),p1__55668_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","error-civilizations","aoe2.events/error-civilizations",-664733712)], null));
})], null)], 0));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading","loading",-737050189),true], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("aoe2.events","set-unit","aoe2.events/set-unit",-1618545939),(function (db,p__55674){
var vec__55675 = p__55674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55675,(0),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55675,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"units","units",-533089095),clojure.string.replace(clojure.string.lower_case((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1("name") : unit.call(null,"name")))," ","_")], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(unit,new cljs.core.Keyword(null,"loading","loading",-737050189),false));
}));

//# sourceMappingURL=aoe2.events.js.map
