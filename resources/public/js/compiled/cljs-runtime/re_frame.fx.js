goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__56276 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56277 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56277);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___56534 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___56534)){
var new_db_56536 = temp__5735__auto___56534;
var fexpr__56279_56540 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__56279_56540.cljs$core$IFn$_invoke$arity$1 ? fexpr__56279_56540.cljs$core$IFn$_invoke$arity$1(new_db_56536) : fexpr__56279_56540.call(null,new_db_56536));
} else {
}

var seq__56280 = cljs.core.seq(effects_without_db);
var chunk__56281 = null;
var count__56282 = (0);
var i__56283 = (0);
while(true){
if((i__56283 < count__56282)){
var vec__56297 = chunk__56281.cljs$core$IIndexed$_nth$arity$2(null,i__56283);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(1),null);
var temp__5733__auto___56543 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56543)){
var effect_fn_56544 = temp__5733__auto___56543;
(effect_fn_56544.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56544.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56544.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56545 = seq__56280;
var G__56546 = chunk__56281;
var G__56547 = count__56282;
var G__56548 = (i__56283 + (1));
seq__56280 = G__56545;
chunk__56281 = G__56546;
count__56282 = G__56547;
i__56283 = G__56548;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56280);
if(temp__5735__auto__){
var seq__56280__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56280__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56280__$1);
var G__56549 = cljs.core.chunk_rest(seq__56280__$1);
var G__56550 = c__4556__auto__;
var G__56551 = cljs.core.count(c__4556__auto__);
var G__56552 = (0);
seq__56280 = G__56549;
chunk__56281 = G__56550;
count__56282 = G__56551;
i__56283 = G__56552;
continue;
} else {
var vec__56305 = cljs.core.first(seq__56280__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56305,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56305,(1),null);
var temp__5733__auto___56553 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56553)){
var effect_fn_56554 = temp__5733__auto___56553;
(effect_fn_56554.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56554.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56554.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56555 = cljs.core.next(seq__56280__$1);
var G__56556 = null;
var G__56557 = (0);
var G__56558 = (0);
seq__56280 = G__56555;
chunk__56281 = G__56556;
count__56282 = G__56557;
i__56283 = G__56558;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__55573__auto___56559 = re_frame.interop.now();
var duration__55574__auto___56560 = (end__55573__auto___56559 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__55574__auto___56560,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__55573__auto___56559);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56276);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___56568 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___56568)){
var new_db_56576 = temp__5735__auto___56568;
var fexpr__56318_56579 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__56318_56579.cljs$core$IFn$_invoke$arity$1 ? fexpr__56318_56579.cljs$core$IFn$_invoke$arity$1(new_db_56576) : fexpr__56318_56579.call(null,new_db_56576));
} else {
}

var seq__56320 = cljs.core.seq(effects_without_db);
var chunk__56321 = null;
var count__56322 = (0);
var i__56323 = (0);
while(true){
if((i__56323 < count__56322)){
var vec__56344 = chunk__56321.cljs$core$IIndexed$_nth$arity$2(null,i__56323);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56344,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56344,(1),null);
var temp__5733__auto___56587 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56587)){
var effect_fn_56589 = temp__5733__auto___56587;
(effect_fn_56589.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56589.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56589.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56591 = seq__56320;
var G__56592 = chunk__56321;
var G__56593 = count__56322;
var G__56594 = (i__56323 + (1));
seq__56320 = G__56591;
chunk__56321 = G__56592;
count__56322 = G__56593;
i__56323 = G__56594;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56320);
if(temp__5735__auto__){
var seq__56320__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56320__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56320__$1);
var G__56597 = cljs.core.chunk_rest(seq__56320__$1);
var G__56598 = c__4556__auto__;
var G__56599 = cljs.core.count(c__4556__auto__);
var G__56600 = (0);
seq__56320 = G__56597;
chunk__56321 = G__56598;
count__56322 = G__56599;
i__56323 = G__56600;
continue;
} else {
var vec__56350 = cljs.core.first(seq__56320__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56350,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56350,(1),null);
var temp__5733__auto___56603 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56603)){
var effect_fn_56605 = temp__5733__auto___56603;
(effect_fn_56605.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56605.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56605.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56607 = cljs.core.next(seq__56320__$1);
var G__56608 = null;
var G__56609 = (0);
var G__56610 = (0);
seq__56320 = G__56607;
chunk__56321 = G__56608;
count__56322 = G__56609;
i__56323 = G__56610;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__56359){
var map__56360 = p__56359;
var map__56360__$1 = (((((!((map__56360 == null))))?(((((map__56360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56360):map__56360);
var effect = map__56360__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__56380 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56381 = null;
var count__56382 = (0);
var i__56383 = (0);
while(true){
if((i__56383 < count__56382)){
var effect = chunk__56381.cljs$core$IIndexed$_nth$arity$2(null,i__56383);
re_frame.fx.dispatch_later(effect);


var G__56619 = seq__56380;
var G__56620 = chunk__56381;
var G__56621 = count__56382;
var G__56622 = (i__56383 + (1));
seq__56380 = G__56619;
chunk__56381 = G__56620;
count__56382 = G__56621;
i__56383 = G__56622;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56380);
if(temp__5735__auto__){
var seq__56380__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56380__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56380__$1);
var G__56623 = cljs.core.chunk_rest(seq__56380__$1);
var G__56624 = c__4556__auto__;
var G__56625 = cljs.core.count(c__4556__auto__);
var G__56626 = (0);
seq__56380 = G__56623;
chunk__56381 = G__56624;
count__56382 = G__56625;
i__56383 = G__56626;
continue;
} else {
var effect = cljs.core.first(seq__56380__$1);
re_frame.fx.dispatch_later(effect);


var G__56627 = cljs.core.next(seq__56380__$1);
var G__56628 = null;
var G__56629 = (0);
var G__56630 = (0);
seq__56380 = G__56627;
chunk__56381 = G__56628;
count__56382 = G__56629;
i__56383 = G__56630;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__56422 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__56423 = null;
var count__56424 = (0);
var i__56425 = (0);
while(true){
if((i__56425 < count__56424)){
var vec__56442 = chunk__56423.cljs$core$IIndexed$_nth$arity$2(null,i__56425);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56442,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56442,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___56636 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56636)){
var effect_fn_56637 = temp__5733__auto___56636;
(effect_fn_56637.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56637.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56637.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__56642 = seq__56422;
var G__56643 = chunk__56423;
var G__56644 = count__56424;
var G__56645 = (i__56425 + (1));
seq__56422 = G__56642;
chunk__56423 = G__56643;
count__56424 = G__56644;
i__56425 = G__56645;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56422);
if(temp__5735__auto__){
var seq__56422__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56422__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56422__$1);
var G__56646 = cljs.core.chunk_rest(seq__56422__$1);
var G__56647 = c__4556__auto__;
var G__56648 = cljs.core.count(c__4556__auto__);
var G__56649 = (0);
seq__56422 = G__56646;
chunk__56423 = G__56647;
count__56424 = G__56648;
i__56425 = G__56649;
continue;
} else {
var vec__56459 = cljs.core.first(seq__56422__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56459,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56459,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___56657 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56657)){
var effect_fn_56658 = temp__5733__auto___56657;
(effect_fn_56658.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56658.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56658.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__56662 = cljs.core.next(seq__56422__$1);
var G__56663 = null;
var G__56664 = (0);
var G__56665 = (0);
seq__56422 = G__56662;
chunk__56423 = G__56663;
count__56424 = G__56664;
i__56425 = G__56665;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__56470 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56471 = null;
var count__56472 = (0);
var i__56473 = (0);
while(true){
if((i__56473 < count__56472)){
var event = chunk__56471.cljs$core$IIndexed$_nth$arity$2(null,i__56473);
re_frame.router.dispatch(event);


var G__56674 = seq__56470;
var G__56675 = chunk__56471;
var G__56676 = count__56472;
var G__56677 = (i__56473 + (1));
seq__56470 = G__56674;
chunk__56471 = G__56675;
count__56472 = G__56676;
i__56473 = G__56677;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56470);
if(temp__5735__auto__){
var seq__56470__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56470__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56470__$1);
var G__56678 = cljs.core.chunk_rest(seq__56470__$1);
var G__56679 = c__4556__auto__;
var G__56680 = cljs.core.count(c__4556__auto__);
var G__56681 = (0);
seq__56470 = G__56678;
chunk__56471 = G__56679;
count__56472 = G__56680;
i__56473 = G__56681;
continue;
} else {
var event = cljs.core.first(seq__56470__$1);
re_frame.router.dispatch(event);


var G__56689 = cljs.core.next(seq__56470__$1);
var G__56690 = null;
var G__56691 = (0);
var G__56692 = (0);
seq__56470 = G__56689;
chunk__56471 = G__56690;
count__56472 = G__56691;
i__56473 = G__56692;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__56493 = cljs.core.seq(value);
var chunk__56494 = null;
var count__56495 = (0);
var i__56496 = (0);
while(true){
if((i__56496 < count__56495)){
var event = chunk__56494.cljs$core$IIndexed$_nth$arity$2(null,i__56496);
clear_event(event);


var G__56700 = seq__56493;
var G__56701 = chunk__56494;
var G__56702 = count__56495;
var G__56703 = (i__56496 + (1));
seq__56493 = G__56700;
chunk__56494 = G__56701;
count__56495 = G__56702;
i__56496 = G__56703;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56493);
if(temp__5735__auto__){
var seq__56493__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56493__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56493__$1);
var G__56706 = cljs.core.chunk_rest(seq__56493__$1);
var G__56707 = c__4556__auto__;
var G__56708 = cljs.core.count(c__4556__auto__);
var G__56709 = (0);
seq__56493 = G__56706;
chunk__56494 = G__56707;
count__56495 = G__56708;
i__56496 = G__56709;
continue;
} else {
var event = cljs.core.first(seq__56493__$1);
clear_event(event);


var G__56710 = cljs.core.next(seq__56493__$1);
var G__56711 = null;
var G__56712 = (0);
var G__56713 = (0);
seq__56493 = G__56710;
chunk__56494 = G__56711;
count__56495 = G__56712;
i__56496 = G__56713;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
