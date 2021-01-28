goog.provide('aoe2.routes2');
aoe2.routes2.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),"about",new cljs.core.Keyword(null,"about-panel","about-panel",334628515),"civ/",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slug","slug",2029314850)], null),new cljs.core.Keyword(null,"civ-panel","civ-panel",-1265083186)])], null)], null);
aoe2.routes2.history = (function (){var dispatch = (function (p1__45947_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","set-active-panel","aoe2.events/set-active-panel",-95492168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(p1__45947_SHARP_),new cljs.core.Keyword(null,"slug","slug",2029314850),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__45947_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"slug","slug",2029314850)], null))], null)], null));
});
var match = (function (p1__45948_SHARP_){
return bidi.bidi.match_route(aoe2.routes2.routes,p1__45948_SHARP_);
});
return pushy.core.pushy(dispatch,match);
})();
aoe2.routes2.start_BANG_ = (function aoe2$routes2$start_BANG_(){
return aoe2.routes2.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
aoe2.routes2.url_for = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,aoe2.routes2.routes);
aoe2.routes2.set_token_BANG_ = (function aoe2$routes2$set_token_BANG_(token){
return aoe2.routes2.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,token);
});

//# sourceMappingURL=aoe2.routes2.js.map
