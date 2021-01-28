goog.provide('aoe2.router');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (_cofx,p__48579){
var vec__48580 = p__48579;
var seq__48581 = cljs.core.seq(vec__48580);
var first__48582 = cljs.core.first(seq__48581);
var seq__48581__$1 = cljs.core.next(seq__48581);
var _ = first__48582;
var route = seq__48581__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate!","navigate!",79998348),route], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate!","navigate!",79998348),(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigated","navigated",540897836),(function (db,p__48583){
var vec__48584 = p__48583;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48584,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48584,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
aoe2.router.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("routes","home","routes/home",-1297486007),new cljs.core.Keyword(null,"view","view",1247994814),aoe2.views.home_panel,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Home",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","get-civilizations","aoe2.events/get-civilizations",1099560127)], null));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Entering home page"], 0));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Leaving home page"], 0));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("routes","files","routes/files",719853404),new cljs.core.Keyword(null,"view","view",1247994814),aoe2.views.about_panel,new cljs.core.Keyword(null,"link-text","link-text",224432076),"about",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Entering files page"], 0));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Leaving files page"], 0));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["civ/x",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("routes","civ","routes/civ",1306402209),new cljs.core.Keyword(null,"view","view",1247994814),aoe2.views.civ_panel,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Civilizations",new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.malli.coercion,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.string_QMARK_], null)], null)], null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),new cljs.core.Keyword(null,"start","start",-355208981),(function (p__48587){
var map__48588 = p__48587;
var map__48588__$1 = (((((!((map__48588 == null))))?(((((map__48588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48588):map__48588);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48588__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var civ_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(path);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Entering files/:id page for id",civ_id], 0));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Leaving files page"], 0));
})], null)], null)], null)], null)], null);
aoe2.router.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(aoe2.router.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.malli.coercion], null)], null));
aoe2.router.on_navigate = (function aoe2$router$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigated","navigated",540897836),new_match], null));
} else {
return null;
}
});
aoe2.router.init_routes_BANG_ = (function aoe2$router$init_routes_BANG_(){
console.log("initializing routes");

return reitit.frontend.easy.start_BANG_(aoe2.router.router,aoe2.router.on_navigate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false,new cljs.core.Keyword(null,"ignore-anchor-click?","ignore-anchor-click?",-186007337),(function (router,e,el,uri){
var and__4115__auto__ = reitit.frontend.history.ignore_anchor_click_QMARK_(router,e,el,uri);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("false",goog.object.get(el.dataset,"reititHandleClick"));
} else {
return and__4115__auto__;
}
})], null));
});

//# sourceMappingURL=aoe2.router.js.map
