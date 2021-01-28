goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__52155,p__52156){
var map__52159 = p__52155;
var map__52159__$1 = (((((!((map__52159 == null))))?(((((map__52159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52159):map__52159);
var svc = map__52159__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52159__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52159__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52159__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__52161 = p__52156;
var map__52161__$1 = (((((!((map__52161 == null))))?(((((map__52161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52161):map__52161);
var msg = map__52161__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52161__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__52177,p__52178){
var map__52180 = p__52177;
var map__52180__$1 = (((((!((map__52180 == null))))?(((((map__52180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52180):map__52180);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52180__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__52182 = p__52178;
var map__52182__$1 = (((((!((map__52182 == null))))?(((((map__52182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52182):map__52182);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52182__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__52190,p__52191){
var map__52192 = p__52190;
var map__52192__$1 = (((((!((map__52192 == null))))?(((((map__52192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52192):map__52192);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__52193 = p__52191;
var map__52193__$1 = (((((!((map__52193 == null))))?(((((map__52193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52193):map__52193);
var msg = map__52193__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52193__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__52196,tid){
var map__52197 = p__52196;
var map__52197__$1 = (((((!((map__52197 == null))))?(((((map__52197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52197):map__52197);
var svc = map__52197__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52197__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__52210 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__52211 = null;
var count__52212 = (0);
var i__52213 = (0);
while(true){
if((i__52213 < count__52212)){
var vec__52225 = chunk__52211.cljs$core$IIndexed$_nth$arity$2(null,i__52213);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__52249 = seq__52210;
var G__52250 = chunk__52211;
var G__52251 = count__52212;
var G__52252 = (i__52213 + (1));
seq__52210 = G__52249;
chunk__52211 = G__52250;
count__52212 = G__52251;
i__52213 = G__52252;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52210);
if(temp__5735__auto__){
var seq__52210__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52210__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52210__$1);
var G__52253 = cljs.core.chunk_rest(seq__52210__$1);
var G__52254 = c__4556__auto__;
var G__52255 = cljs.core.count(c__4556__auto__);
var G__52256 = (0);
seq__52210 = G__52253;
chunk__52211 = G__52254;
count__52212 = G__52255;
i__52213 = G__52256;
continue;
} else {
var vec__52228 = cljs.core.first(seq__52210__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52228,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52228,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__52257 = cljs.core.next(seq__52210__$1);
var G__52258 = null;
var G__52259 = (0);
var G__52260 = (0);
seq__52210 = G__52257;
chunk__52211 = G__52258;
count__52212 = G__52259;
i__52213 = G__52260;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__52205_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__52205_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__52206_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__52206_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__52207_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__52207_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__52208_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__52208_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__52231){
var map__52232 = p__52231;
var map__52232__$1 = (((((!((map__52232 == null))))?(((((map__52232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52232):map__52232);
var svc = map__52232__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52232__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52232__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
