goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__55612){
var map__55613 = p__55612;
var map__55613__$1 = (((((!((map__55613 == null))))?(((((map__55613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55613):map__55613);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55613__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55613__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55613__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55613__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__55618_55692 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__55619_55693 = null;
var count__55620_55694 = (0);
var i__55621_55695 = (0);
while(true){
if((i__55621_55695 < count__55620_55694)){
var vec__55646_55696 = chunk__55619_55693.cljs$core$IIndexed$_nth$arity$2(null,i__55621_55695);
var k_55697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55646_55696,(0),null);
var cb_55698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55646_55696,(1),null);
try{var G__55653_55702 = cljs.core.deref(re_frame.trace.traces);
(cb_55698.cljs$core$IFn$_invoke$arity$1 ? cb_55698.cljs$core$IFn$_invoke$arity$1(G__55653_55702) : cb_55698.call(null,G__55653_55702));
}catch (e55649){var e_55703 = e55649;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_55697,"while storing",cljs.core.deref(re_frame.trace.traces),e_55703], 0));
}

var G__55704 = seq__55618_55692;
var G__55705 = chunk__55619_55693;
var G__55706 = count__55620_55694;
var G__55707 = (i__55621_55695 + (1));
seq__55618_55692 = G__55704;
chunk__55619_55693 = G__55705;
count__55620_55694 = G__55706;
i__55621_55695 = G__55707;
continue;
} else {
var temp__5735__auto___55710 = cljs.core.seq(seq__55618_55692);
if(temp__5735__auto___55710){
var seq__55618_55711__$1 = temp__5735__auto___55710;
if(cljs.core.chunked_seq_QMARK_(seq__55618_55711__$1)){
var c__4556__auto___55712 = cljs.core.chunk_first(seq__55618_55711__$1);
var G__55713 = cljs.core.chunk_rest(seq__55618_55711__$1);
var G__55714 = c__4556__auto___55712;
var G__55715 = cljs.core.count(c__4556__auto___55712);
var G__55716 = (0);
seq__55618_55692 = G__55713;
chunk__55619_55693 = G__55714;
count__55620_55694 = G__55715;
i__55621_55695 = G__55716;
continue;
} else {
var vec__55658_55717 = cljs.core.first(seq__55618_55711__$1);
var k_55718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55658_55717,(0),null);
var cb_55719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55658_55717,(1),null);
try{var G__55665_55720 = cljs.core.deref(re_frame.trace.traces);
(cb_55719.cljs$core$IFn$_invoke$arity$1 ? cb_55719.cljs$core$IFn$_invoke$arity$1(G__55665_55720) : cb_55719.call(null,G__55665_55720));
}catch (e55664){var e_55721 = e55664;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_55718,"while storing",cljs.core.deref(re_frame.trace.traces),e_55721], 0));
}

var G__55724 = cljs.core.next(seq__55618_55711__$1);
var G__55725 = null;
var G__55726 = (0);
var G__55727 = (0);
seq__55618_55692 = G__55724;
chunk__55619_55693 = G__55725;
count__55620_55694 = G__55726;
i__55621_55695 = G__55727;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
