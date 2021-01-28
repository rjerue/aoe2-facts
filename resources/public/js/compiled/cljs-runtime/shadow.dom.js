goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_54263 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_54263(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_54271 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_54271(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__53482 = coll;
var G__53483 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__53482,G__53483) : shadow.dom.lazy_native_coll_seq.call(null,G__53482,G__53483));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__53498 = arguments.length;
switch (G__53498) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__53501 = arguments.length;
switch (G__53501) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__53507 = arguments.length;
switch (G__53507) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__53514 = arguments.length;
switch (G__53514) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__53526 = arguments.length;
switch (G__53526) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__53536 = arguments.length;
switch (G__53536) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e53542){if((e53542 instanceof Object)){
var e = e53542;
return console.log("didnt support attachEvent",el,e);
} else {
throw e53542;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__53551 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__53552 = null;
var count__53553 = (0);
var i__53554 = (0);
while(true){
if((i__53554 < count__53553)){
var el = chunk__53552.cljs$core$IIndexed$_nth$arity$2(null,i__53554);
var handler_54307__$1 = ((function (seq__53551,chunk__53552,count__53553,i__53554,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53551,chunk__53552,count__53553,i__53554,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_54307__$1);


var G__54313 = seq__53551;
var G__54314 = chunk__53552;
var G__54315 = count__53553;
var G__54316 = (i__53554 + (1));
seq__53551 = G__54313;
chunk__53552 = G__54314;
count__53553 = G__54315;
i__53554 = G__54316;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53551);
if(temp__5735__auto__){
var seq__53551__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53551__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53551__$1);
var G__54317 = cljs.core.chunk_rest(seq__53551__$1);
var G__54318 = c__4556__auto__;
var G__54319 = cljs.core.count(c__4556__auto__);
var G__54320 = (0);
seq__53551 = G__54317;
chunk__53552 = G__54318;
count__53553 = G__54319;
i__53554 = G__54320;
continue;
} else {
var el = cljs.core.first(seq__53551__$1);
var handler_54322__$1 = ((function (seq__53551,chunk__53552,count__53553,i__53554,el,seq__53551__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53551,chunk__53552,count__53553,i__53554,el,seq__53551__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_54322__$1);


var G__54323 = cljs.core.next(seq__53551__$1);
var G__54324 = null;
var G__54325 = (0);
var G__54326 = (0);
seq__53551 = G__54323;
chunk__53552 = G__54324;
count__53553 = G__54325;
i__53554 = G__54326;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__53569 = arguments.length;
switch (G__53569) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__53580 = cljs.core.seq(events);
var chunk__53581 = null;
var count__53582 = (0);
var i__53583 = (0);
while(true){
if((i__53583 < count__53582)){
var vec__53597 = chunk__53581.cljs$core$IIndexed$_nth$arity$2(null,i__53583);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53597,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54337 = seq__53580;
var G__54338 = chunk__53581;
var G__54339 = count__53582;
var G__54340 = (i__53583 + (1));
seq__53580 = G__54337;
chunk__53581 = G__54338;
count__53582 = G__54339;
i__53583 = G__54340;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53580);
if(temp__5735__auto__){
var seq__53580__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53580__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53580__$1);
var G__54342 = cljs.core.chunk_rest(seq__53580__$1);
var G__54343 = c__4556__auto__;
var G__54344 = cljs.core.count(c__4556__auto__);
var G__54345 = (0);
seq__53580 = G__54342;
chunk__53581 = G__54343;
count__53582 = G__54344;
i__53583 = G__54345;
continue;
} else {
var vec__53600 = cljs.core.first(seq__53580__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53600,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54349 = cljs.core.next(seq__53580__$1);
var G__54350 = null;
var G__54351 = (0);
var G__54352 = (0);
seq__53580 = G__54349;
chunk__53581 = G__54350;
count__53582 = G__54351;
i__53583 = G__54352;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__53606 = cljs.core.seq(styles);
var chunk__53607 = null;
var count__53608 = (0);
var i__53609 = (0);
while(true){
if((i__53609 < count__53608)){
var vec__53621 = chunk__53607.cljs$core$IIndexed$_nth$arity$2(null,i__53609);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53621,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__54362 = seq__53606;
var G__54363 = chunk__53607;
var G__54364 = count__53608;
var G__54365 = (i__53609 + (1));
seq__53606 = G__54362;
chunk__53607 = G__54363;
count__53608 = G__54364;
i__53609 = G__54365;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53606);
if(temp__5735__auto__){
var seq__53606__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53606__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53606__$1);
var G__54366 = cljs.core.chunk_rest(seq__53606__$1);
var G__54367 = c__4556__auto__;
var G__54368 = cljs.core.count(c__4556__auto__);
var G__54369 = (0);
seq__53606 = G__54366;
chunk__53607 = G__54367;
count__53608 = G__54368;
i__53609 = G__54369;
continue;
} else {
var vec__53625 = cljs.core.first(seq__53606__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__54371 = cljs.core.next(seq__53606__$1);
var G__54372 = null;
var G__54373 = (0);
var G__54374 = (0);
seq__53606 = G__54371;
chunk__53607 = G__54372;
count__53608 = G__54373;
i__53609 = G__54374;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__53630_54377 = key;
var G__53630_54378__$1 = (((G__53630_54377 instanceof cljs.core.Keyword))?G__53630_54377.fqn:null);
switch (G__53630_54378__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_54385 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_54385,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_54385,"aria-");
}
})())){
el.setAttribute(ks_54385,value);
} else {
(el[ks_54385] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__53645){
var map__53646 = p__53645;
var map__53646__$1 = (((((!((map__53646 == null))))?(((((map__53646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53646):map__53646);
var props = map__53646__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53646__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__53649 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53649,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53649,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53649,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__53653 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__53653,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__53653;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__53658 = arguments.length;
switch (G__53658) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__53667){
var vec__53671 = p__53667;
var seq__53672 = cljs.core.seq(vec__53671);
var first__53673 = cljs.core.first(seq__53672);
var seq__53672__$1 = cljs.core.next(seq__53672);
var nn = first__53673;
var first__53673__$1 = cljs.core.first(seq__53672__$1);
var seq__53672__$2 = cljs.core.next(seq__53672__$1);
var np = first__53673__$1;
var nc = seq__53672__$2;
var node = vec__53671;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53677 = nn;
var G__53678 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53677,G__53678) : create_fn.call(null,G__53677,G__53678));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53679 = nn;
var G__53680 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53679,G__53680) : create_fn.call(null,G__53679,G__53680));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__53684 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53684,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53684,(1),null);
var seq__53687_54424 = cljs.core.seq(node_children);
var chunk__53688_54425 = null;
var count__53689_54426 = (0);
var i__53690_54427 = (0);
while(true){
if((i__53690_54427 < count__53689_54426)){
var child_struct_54429 = chunk__53688_54425.cljs$core$IIndexed$_nth$arity$2(null,i__53690_54427);
var children_54430 = shadow.dom.dom_node(child_struct_54429);
if(cljs.core.seq_QMARK_(children_54430)){
var seq__53724_54431 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54430));
var chunk__53726_54432 = null;
var count__53727_54433 = (0);
var i__53728_54434 = (0);
while(true){
if((i__53728_54434 < count__53727_54433)){
var child_54435 = chunk__53726_54432.cljs$core$IIndexed$_nth$arity$2(null,i__53728_54434);
if(cljs.core.truth_(child_54435)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54435);


var G__54437 = seq__53724_54431;
var G__54438 = chunk__53726_54432;
var G__54439 = count__53727_54433;
var G__54440 = (i__53728_54434 + (1));
seq__53724_54431 = G__54437;
chunk__53726_54432 = G__54438;
count__53727_54433 = G__54439;
i__53728_54434 = G__54440;
continue;
} else {
var G__54441 = seq__53724_54431;
var G__54442 = chunk__53726_54432;
var G__54443 = count__53727_54433;
var G__54444 = (i__53728_54434 + (1));
seq__53724_54431 = G__54441;
chunk__53726_54432 = G__54442;
count__53727_54433 = G__54443;
i__53728_54434 = G__54444;
continue;
}
} else {
var temp__5735__auto___54446 = cljs.core.seq(seq__53724_54431);
if(temp__5735__auto___54446){
var seq__53724_54452__$1 = temp__5735__auto___54446;
if(cljs.core.chunked_seq_QMARK_(seq__53724_54452__$1)){
var c__4556__auto___54453 = cljs.core.chunk_first(seq__53724_54452__$1);
var G__54454 = cljs.core.chunk_rest(seq__53724_54452__$1);
var G__54455 = c__4556__auto___54453;
var G__54456 = cljs.core.count(c__4556__auto___54453);
var G__54457 = (0);
seq__53724_54431 = G__54454;
chunk__53726_54432 = G__54455;
count__53727_54433 = G__54456;
i__53728_54434 = G__54457;
continue;
} else {
var child_54460 = cljs.core.first(seq__53724_54452__$1);
if(cljs.core.truth_(child_54460)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54460);


var G__54461 = cljs.core.next(seq__53724_54452__$1);
var G__54462 = null;
var G__54463 = (0);
var G__54464 = (0);
seq__53724_54431 = G__54461;
chunk__53726_54432 = G__54462;
count__53727_54433 = G__54463;
i__53728_54434 = G__54464;
continue;
} else {
var G__54465 = cljs.core.next(seq__53724_54452__$1);
var G__54466 = null;
var G__54467 = (0);
var G__54468 = (0);
seq__53724_54431 = G__54465;
chunk__53726_54432 = G__54466;
count__53727_54433 = G__54467;
i__53728_54434 = G__54468;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54430);
}


var G__54469 = seq__53687_54424;
var G__54470 = chunk__53688_54425;
var G__54471 = count__53689_54426;
var G__54472 = (i__53690_54427 + (1));
seq__53687_54424 = G__54469;
chunk__53688_54425 = G__54470;
count__53689_54426 = G__54471;
i__53690_54427 = G__54472;
continue;
} else {
var temp__5735__auto___54475 = cljs.core.seq(seq__53687_54424);
if(temp__5735__auto___54475){
var seq__53687_54476__$1 = temp__5735__auto___54475;
if(cljs.core.chunked_seq_QMARK_(seq__53687_54476__$1)){
var c__4556__auto___54477 = cljs.core.chunk_first(seq__53687_54476__$1);
var G__54478 = cljs.core.chunk_rest(seq__53687_54476__$1);
var G__54479 = c__4556__auto___54477;
var G__54480 = cljs.core.count(c__4556__auto___54477);
var G__54481 = (0);
seq__53687_54424 = G__54478;
chunk__53688_54425 = G__54479;
count__53689_54426 = G__54480;
i__53690_54427 = G__54481;
continue;
} else {
var child_struct_54482 = cljs.core.first(seq__53687_54476__$1);
var children_54483 = shadow.dom.dom_node(child_struct_54482);
if(cljs.core.seq_QMARK_(children_54483)){
var seq__53744_54484 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54483));
var chunk__53746_54485 = null;
var count__53747_54486 = (0);
var i__53748_54487 = (0);
while(true){
if((i__53748_54487 < count__53747_54486)){
var child_54489 = chunk__53746_54485.cljs$core$IIndexed$_nth$arity$2(null,i__53748_54487);
if(cljs.core.truth_(child_54489)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54489);


var G__54491 = seq__53744_54484;
var G__54492 = chunk__53746_54485;
var G__54493 = count__53747_54486;
var G__54494 = (i__53748_54487 + (1));
seq__53744_54484 = G__54491;
chunk__53746_54485 = G__54492;
count__53747_54486 = G__54493;
i__53748_54487 = G__54494;
continue;
} else {
var G__54496 = seq__53744_54484;
var G__54497 = chunk__53746_54485;
var G__54498 = count__53747_54486;
var G__54499 = (i__53748_54487 + (1));
seq__53744_54484 = G__54496;
chunk__53746_54485 = G__54497;
count__53747_54486 = G__54498;
i__53748_54487 = G__54499;
continue;
}
} else {
var temp__5735__auto___54500__$1 = cljs.core.seq(seq__53744_54484);
if(temp__5735__auto___54500__$1){
var seq__53744_54501__$1 = temp__5735__auto___54500__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53744_54501__$1)){
var c__4556__auto___54502 = cljs.core.chunk_first(seq__53744_54501__$1);
var G__54503 = cljs.core.chunk_rest(seq__53744_54501__$1);
var G__54504 = c__4556__auto___54502;
var G__54505 = cljs.core.count(c__4556__auto___54502);
var G__54506 = (0);
seq__53744_54484 = G__54503;
chunk__53746_54485 = G__54504;
count__53747_54486 = G__54505;
i__53748_54487 = G__54506;
continue;
} else {
var child_54512 = cljs.core.first(seq__53744_54501__$1);
if(cljs.core.truth_(child_54512)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54512);


var G__54513 = cljs.core.next(seq__53744_54501__$1);
var G__54514 = null;
var G__54515 = (0);
var G__54516 = (0);
seq__53744_54484 = G__54513;
chunk__53746_54485 = G__54514;
count__53747_54486 = G__54515;
i__53748_54487 = G__54516;
continue;
} else {
var G__54517 = cljs.core.next(seq__53744_54501__$1);
var G__54518 = null;
var G__54519 = (0);
var G__54520 = (0);
seq__53744_54484 = G__54517;
chunk__53746_54485 = G__54518;
count__53747_54486 = G__54519;
i__53748_54487 = G__54520;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54483);
}


var G__54521 = cljs.core.next(seq__53687_54476__$1);
var G__54522 = null;
var G__54523 = (0);
var G__54524 = (0);
seq__53687_54424 = G__54521;
chunk__53688_54425 = G__54522;
count__53689_54426 = G__54523;
i__53690_54427 = G__54524;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__53770 = cljs.core.seq(node);
var chunk__53771 = null;
var count__53772 = (0);
var i__53773 = (0);
while(true){
if((i__53773 < count__53772)){
var n = chunk__53771.cljs$core$IIndexed$_nth$arity$2(null,i__53773);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54545 = seq__53770;
var G__54546 = chunk__53771;
var G__54547 = count__53772;
var G__54548 = (i__53773 + (1));
seq__53770 = G__54545;
chunk__53771 = G__54546;
count__53772 = G__54547;
i__53773 = G__54548;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53770);
if(temp__5735__auto__){
var seq__53770__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53770__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53770__$1);
var G__54550 = cljs.core.chunk_rest(seq__53770__$1);
var G__54551 = c__4556__auto__;
var G__54552 = cljs.core.count(c__4556__auto__);
var G__54553 = (0);
seq__53770 = G__54550;
chunk__53771 = G__54551;
count__53772 = G__54552;
i__53773 = G__54553;
continue;
} else {
var n = cljs.core.first(seq__53770__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54555 = cljs.core.next(seq__53770__$1);
var G__54556 = null;
var G__54557 = (0);
var G__54558 = (0);
seq__53770 = G__54555;
chunk__53771 = G__54556;
count__53772 = G__54557;
i__53773 = G__54558;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__53781 = arguments.length;
switch (G__53781) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__53785 = arguments.length;
switch (G__53785) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__53799 = arguments.length;
switch (G__53799) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54589 = arguments.length;
var i__4737__auto___54590 = (0);
while(true){
if((i__4737__auto___54590 < len__4736__auto___54589)){
args__4742__auto__.push((arguments[i__4737__auto___54590]));

var G__54593 = (i__4737__auto___54590 + (1));
i__4737__auto___54590 = G__54593;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__53843_54595 = cljs.core.seq(nodes);
var chunk__53845_54596 = null;
var count__53846_54597 = (0);
var i__53847_54598 = (0);
while(true){
if((i__53847_54598 < count__53846_54597)){
var node_54599 = chunk__53845_54596.cljs$core$IIndexed$_nth$arity$2(null,i__53847_54598);
fragment.appendChild(shadow.dom._to_dom(node_54599));


var G__54602 = seq__53843_54595;
var G__54603 = chunk__53845_54596;
var G__54604 = count__53846_54597;
var G__54605 = (i__53847_54598 + (1));
seq__53843_54595 = G__54602;
chunk__53845_54596 = G__54603;
count__53846_54597 = G__54604;
i__53847_54598 = G__54605;
continue;
} else {
var temp__5735__auto___54607 = cljs.core.seq(seq__53843_54595);
if(temp__5735__auto___54607){
var seq__53843_54608__$1 = temp__5735__auto___54607;
if(cljs.core.chunked_seq_QMARK_(seq__53843_54608__$1)){
var c__4556__auto___54609 = cljs.core.chunk_first(seq__53843_54608__$1);
var G__54610 = cljs.core.chunk_rest(seq__53843_54608__$1);
var G__54611 = c__4556__auto___54609;
var G__54612 = cljs.core.count(c__4556__auto___54609);
var G__54613 = (0);
seq__53843_54595 = G__54610;
chunk__53845_54596 = G__54611;
count__53846_54597 = G__54612;
i__53847_54598 = G__54613;
continue;
} else {
var node_54614 = cljs.core.first(seq__53843_54608__$1);
fragment.appendChild(shadow.dom._to_dom(node_54614));


var G__54615 = cljs.core.next(seq__53843_54608__$1);
var G__54616 = null;
var G__54617 = (0);
var G__54618 = (0);
seq__53843_54595 = G__54615;
chunk__53845_54596 = G__54616;
count__53846_54597 = G__54617;
i__53847_54598 = G__54618;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq53834){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53834));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__53850_54625 = cljs.core.seq(scripts);
var chunk__53851_54626 = null;
var count__53852_54627 = (0);
var i__53853_54628 = (0);
while(true){
if((i__53853_54628 < count__53852_54627)){
var vec__53881_54629 = chunk__53851_54626.cljs$core$IIndexed$_nth$arity$2(null,i__53853_54628);
var script_tag_54630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53881_54629,(0),null);
var script_body_54631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53881_54629,(1),null);
eval(script_body_54631);


var G__54632 = seq__53850_54625;
var G__54633 = chunk__53851_54626;
var G__54634 = count__53852_54627;
var G__54635 = (i__53853_54628 + (1));
seq__53850_54625 = G__54632;
chunk__53851_54626 = G__54633;
count__53852_54627 = G__54634;
i__53853_54628 = G__54635;
continue;
} else {
var temp__5735__auto___54636 = cljs.core.seq(seq__53850_54625);
if(temp__5735__auto___54636){
var seq__53850_54637__$1 = temp__5735__auto___54636;
if(cljs.core.chunked_seq_QMARK_(seq__53850_54637__$1)){
var c__4556__auto___54638 = cljs.core.chunk_first(seq__53850_54637__$1);
var G__54639 = cljs.core.chunk_rest(seq__53850_54637__$1);
var G__54640 = c__4556__auto___54638;
var G__54641 = cljs.core.count(c__4556__auto___54638);
var G__54642 = (0);
seq__53850_54625 = G__54639;
chunk__53851_54626 = G__54640;
count__53852_54627 = G__54641;
i__53853_54628 = G__54642;
continue;
} else {
var vec__53885_54645 = cljs.core.first(seq__53850_54637__$1);
var script_tag_54646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53885_54645,(0),null);
var script_body_54647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53885_54645,(1),null);
eval(script_body_54647);


var G__54648 = cljs.core.next(seq__53850_54637__$1);
var G__54649 = null;
var G__54650 = (0);
var G__54651 = (0);
seq__53850_54625 = G__54648;
chunk__53851_54626 = G__54649;
count__53852_54627 = G__54650;
i__53853_54628 = G__54651;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__53889){
var vec__53890 = p__53889;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53890,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53890,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__53900 = arguments.length;
switch (G__53900) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__53923 = cljs.core.seq(style_keys);
var chunk__53924 = null;
var count__53925 = (0);
var i__53926 = (0);
while(true){
if((i__53926 < count__53925)){
var it = chunk__53924.cljs$core$IIndexed$_nth$arity$2(null,i__53926);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__54666 = seq__53923;
var G__54667 = chunk__53924;
var G__54668 = count__53925;
var G__54669 = (i__53926 + (1));
seq__53923 = G__54666;
chunk__53924 = G__54667;
count__53925 = G__54668;
i__53926 = G__54669;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53923);
if(temp__5735__auto__){
var seq__53923__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53923__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53923__$1);
var G__54673 = cljs.core.chunk_rest(seq__53923__$1);
var G__54674 = c__4556__auto__;
var G__54675 = cljs.core.count(c__4556__auto__);
var G__54676 = (0);
seq__53923 = G__54673;
chunk__53924 = G__54674;
count__53925 = G__54675;
i__53926 = G__54676;
continue;
} else {
var it = cljs.core.first(seq__53923__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__54677 = cljs.core.next(seq__53923__$1);
var G__54678 = null;
var G__54679 = (0);
var G__54680 = (0);
seq__53923 = G__54677;
chunk__53924 = G__54678;
count__53925 = G__54679;
i__53926 = G__54680;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53936,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53942 = k53936;
var G__53942__$1 = (((G__53942 instanceof cljs.core.Keyword))?G__53942.fqn:null);
switch (G__53942__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53936,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53945){
var vec__53946 = p__53945;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53946,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53946,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53935){
var self__ = this;
var G__53935__$1 = this;
return (new cljs.core.RecordIter((0),G__53935__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53937,other53938){
var self__ = this;
var this53937__$1 = this;
return (((!((other53938 == null)))) && ((this53937__$1.constructor === other53938.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53937__$1.x,other53938.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53937__$1.y,other53938.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53937__$1.__extmap,other53938.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53935){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53967 = cljs.core.keyword_identical_QMARK_;
var expr__53968 = k__4388__auto__;
if(cljs.core.truth_((pred__53967.cljs$core$IFn$_invoke$arity$2 ? pred__53967.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__53968) : pred__53967.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__53968)))){
return (new shadow.dom.Coordinate(G__53935,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53967.cljs$core$IFn$_invoke$arity$2 ? pred__53967.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__53968) : pred__53967.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__53968)))){
return (new shadow.dom.Coordinate(self__.x,G__53935,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53935),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53935){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__53935,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__53940){
var extmap__4419__auto__ = (function (){var G__53977 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53940,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__53940)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53977);
} else {
return G__53977;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__53940),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__53940),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53987,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53998 = k53987;
var G__53998__$1 = (((G__53998 instanceof cljs.core.Keyword))?G__53998.fqn:null);
switch (G__53998__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53987,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__54000){
var vec__54001 = p__54000;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54001,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54001,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53986){
var self__ = this;
var G__53986__$1 = this;
return (new cljs.core.RecordIter((0),G__53986__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53988,other53989){
var self__ = this;
var this53988__$1 = this;
return (((!((other53989 == null)))) && ((this53988__$1.constructor === other53989.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53988__$1.w,other53989.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53988__$1.h,other53989.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53988__$1.__extmap,other53989.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53986){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__54014 = cljs.core.keyword_identical_QMARK_;
var expr__54015 = k__4388__auto__;
if(cljs.core.truth_((pred__54014.cljs$core$IFn$_invoke$arity$2 ? pred__54014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__54015) : pred__54014.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__54015)))){
return (new shadow.dom.Size(G__53986,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54014.cljs$core$IFn$_invoke$arity$2 ? pred__54014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__54015) : pred__54014.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__54015)))){
return (new shadow.dom.Size(self__.w,G__53986,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53986),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53986){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__53986,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__53991){
var extmap__4419__auto__ = (function (){var G__54021 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53991,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__53991)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54021);
} else {
return G__54021;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__53991),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__53991),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__54769 = (i + (1));
var G__54770 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__54769;
ret = G__54770;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54038){
var vec__54039 = p__54038;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54039,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54039,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__54043 = arguments.length;
switch (G__54043) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__54799 = ps;
var G__54800 = (i + (1));
el__$1 = G__54799;
i = G__54800;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__54063 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__54070_54814 = cljs.core.seq(props);
var chunk__54071_54815 = null;
var count__54072_54816 = (0);
var i__54073_54818 = (0);
while(true){
if((i__54073_54818 < count__54072_54816)){
var vec__54091_54821 = chunk__54071_54815.cljs$core$IIndexed$_nth$arity$2(null,i__54073_54818);
var k_54822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54091_54821,(0),null);
var v_54823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54091_54821,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_54822);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_54822),v_54823);


var G__54826 = seq__54070_54814;
var G__54827 = chunk__54071_54815;
var G__54828 = count__54072_54816;
var G__54829 = (i__54073_54818 + (1));
seq__54070_54814 = G__54826;
chunk__54071_54815 = G__54827;
count__54072_54816 = G__54828;
i__54073_54818 = G__54829;
continue;
} else {
var temp__5735__auto___54830 = cljs.core.seq(seq__54070_54814);
if(temp__5735__auto___54830){
var seq__54070_54831__$1 = temp__5735__auto___54830;
if(cljs.core.chunked_seq_QMARK_(seq__54070_54831__$1)){
var c__4556__auto___54835 = cljs.core.chunk_first(seq__54070_54831__$1);
var G__54836 = cljs.core.chunk_rest(seq__54070_54831__$1);
var G__54837 = c__4556__auto___54835;
var G__54838 = cljs.core.count(c__4556__auto___54835);
var G__54839 = (0);
seq__54070_54814 = G__54836;
chunk__54071_54815 = G__54837;
count__54072_54816 = G__54838;
i__54073_54818 = G__54839;
continue;
} else {
var vec__54098_54840 = cljs.core.first(seq__54070_54831__$1);
var k_54841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54098_54840,(0),null);
var v_54842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54098_54840,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_54841);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_54841),v_54842);


var G__54846 = cljs.core.next(seq__54070_54831__$1);
var G__54847 = null;
var G__54848 = (0);
var G__54849 = (0);
seq__54070_54814 = G__54846;
chunk__54071_54815 = G__54847;
count__54072_54816 = G__54848;
i__54073_54818 = G__54849;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__54112 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54112,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54112,(1),null);
var seq__54115_54856 = cljs.core.seq(node_children);
var chunk__54117_54857 = null;
var count__54118_54858 = (0);
var i__54119_54859 = (0);
while(true){
if((i__54119_54859 < count__54118_54858)){
var child_struct_54861 = chunk__54117_54857.cljs$core$IIndexed$_nth$arity$2(null,i__54119_54859);
if((!((child_struct_54861 == null)))){
if(typeof child_struct_54861 === 'string'){
var text_54862 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_54862),child_struct_54861].join(''));
} else {
var children_54864 = shadow.dom.svg_node(child_struct_54861);
if(cljs.core.seq_QMARK_(children_54864)){
var seq__54198_54865 = cljs.core.seq(children_54864);
var chunk__54200_54866 = null;
var count__54201_54867 = (0);
var i__54202_54868 = (0);
while(true){
if((i__54202_54868 < count__54201_54867)){
var child_54870 = chunk__54200_54866.cljs$core$IIndexed$_nth$arity$2(null,i__54202_54868);
if(cljs.core.truth_(child_54870)){
node.appendChild(child_54870);


var G__54871 = seq__54198_54865;
var G__54872 = chunk__54200_54866;
var G__54873 = count__54201_54867;
var G__54874 = (i__54202_54868 + (1));
seq__54198_54865 = G__54871;
chunk__54200_54866 = G__54872;
count__54201_54867 = G__54873;
i__54202_54868 = G__54874;
continue;
} else {
var G__54876 = seq__54198_54865;
var G__54877 = chunk__54200_54866;
var G__54878 = count__54201_54867;
var G__54879 = (i__54202_54868 + (1));
seq__54198_54865 = G__54876;
chunk__54200_54866 = G__54877;
count__54201_54867 = G__54878;
i__54202_54868 = G__54879;
continue;
}
} else {
var temp__5735__auto___54880 = cljs.core.seq(seq__54198_54865);
if(temp__5735__auto___54880){
var seq__54198_54882__$1 = temp__5735__auto___54880;
if(cljs.core.chunked_seq_QMARK_(seq__54198_54882__$1)){
var c__4556__auto___54883 = cljs.core.chunk_first(seq__54198_54882__$1);
var G__54884 = cljs.core.chunk_rest(seq__54198_54882__$1);
var G__54885 = c__4556__auto___54883;
var G__54886 = cljs.core.count(c__4556__auto___54883);
var G__54887 = (0);
seq__54198_54865 = G__54884;
chunk__54200_54866 = G__54885;
count__54201_54867 = G__54886;
i__54202_54868 = G__54887;
continue;
} else {
var child_54890 = cljs.core.first(seq__54198_54882__$1);
if(cljs.core.truth_(child_54890)){
node.appendChild(child_54890);


var G__54891 = cljs.core.next(seq__54198_54882__$1);
var G__54892 = null;
var G__54893 = (0);
var G__54894 = (0);
seq__54198_54865 = G__54891;
chunk__54200_54866 = G__54892;
count__54201_54867 = G__54893;
i__54202_54868 = G__54894;
continue;
} else {
var G__54898 = cljs.core.next(seq__54198_54882__$1);
var G__54899 = null;
var G__54900 = (0);
var G__54901 = (0);
seq__54198_54865 = G__54898;
chunk__54200_54866 = G__54899;
count__54201_54867 = G__54900;
i__54202_54868 = G__54901;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_54864);
}
}


var G__54904 = seq__54115_54856;
var G__54905 = chunk__54117_54857;
var G__54906 = count__54118_54858;
var G__54907 = (i__54119_54859 + (1));
seq__54115_54856 = G__54904;
chunk__54117_54857 = G__54905;
count__54118_54858 = G__54906;
i__54119_54859 = G__54907;
continue;
} else {
var G__54908 = seq__54115_54856;
var G__54909 = chunk__54117_54857;
var G__54910 = count__54118_54858;
var G__54911 = (i__54119_54859 + (1));
seq__54115_54856 = G__54908;
chunk__54117_54857 = G__54909;
count__54118_54858 = G__54910;
i__54119_54859 = G__54911;
continue;
}
} else {
var temp__5735__auto___54914 = cljs.core.seq(seq__54115_54856);
if(temp__5735__auto___54914){
var seq__54115_54917__$1 = temp__5735__auto___54914;
if(cljs.core.chunked_seq_QMARK_(seq__54115_54917__$1)){
var c__4556__auto___54918 = cljs.core.chunk_first(seq__54115_54917__$1);
var G__54920 = cljs.core.chunk_rest(seq__54115_54917__$1);
var G__54921 = c__4556__auto___54918;
var G__54922 = cljs.core.count(c__4556__auto___54918);
var G__54923 = (0);
seq__54115_54856 = G__54920;
chunk__54117_54857 = G__54921;
count__54118_54858 = G__54922;
i__54119_54859 = G__54923;
continue;
} else {
var child_struct_54925 = cljs.core.first(seq__54115_54917__$1);
if((!((child_struct_54925 == null)))){
if(typeof child_struct_54925 === 'string'){
var text_54926 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_54926),child_struct_54925].join(''));
} else {
var children_54927 = shadow.dom.svg_node(child_struct_54925);
if(cljs.core.seq_QMARK_(children_54927)){
var seq__54213_54928 = cljs.core.seq(children_54927);
var chunk__54215_54929 = null;
var count__54216_54930 = (0);
var i__54217_54931 = (0);
while(true){
if((i__54217_54931 < count__54216_54930)){
var child_54933 = chunk__54215_54929.cljs$core$IIndexed$_nth$arity$2(null,i__54217_54931);
if(cljs.core.truth_(child_54933)){
node.appendChild(child_54933);


var G__54935 = seq__54213_54928;
var G__54936 = chunk__54215_54929;
var G__54937 = count__54216_54930;
var G__54938 = (i__54217_54931 + (1));
seq__54213_54928 = G__54935;
chunk__54215_54929 = G__54936;
count__54216_54930 = G__54937;
i__54217_54931 = G__54938;
continue;
} else {
var G__54940 = seq__54213_54928;
var G__54941 = chunk__54215_54929;
var G__54942 = count__54216_54930;
var G__54943 = (i__54217_54931 + (1));
seq__54213_54928 = G__54940;
chunk__54215_54929 = G__54941;
count__54216_54930 = G__54942;
i__54217_54931 = G__54943;
continue;
}
} else {
var temp__5735__auto___54948__$1 = cljs.core.seq(seq__54213_54928);
if(temp__5735__auto___54948__$1){
var seq__54213_54949__$1 = temp__5735__auto___54948__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54213_54949__$1)){
var c__4556__auto___54950 = cljs.core.chunk_first(seq__54213_54949__$1);
var G__54951 = cljs.core.chunk_rest(seq__54213_54949__$1);
var G__54952 = c__4556__auto___54950;
var G__54953 = cljs.core.count(c__4556__auto___54950);
var G__54954 = (0);
seq__54213_54928 = G__54951;
chunk__54215_54929 = G__54952;
count__54216_54930 = G__54953;
i__54217_54931 = G__54954;
continue;
} else {
var child_54963 = cljs.core.first(seq__54213_54949__$1);
if(cljs.core.truth_(child_54963)){
node.appendChild(child_54963);


var G__54964 = cljs.core.next(seq__54213_54949__$1);
var G__54965 = null;
var G__54966 = (0);
var G__54967 = (0);
seq__54213_54928 = G__54964;
chunk__54215_54929 = G__54965;
count__54216_54930 = G__54966;
i__54217_54931 = G__54967;
continue;
} else {
var G__54968 = cljs.core.next(seq__54213_54949__$1);
var G__54969 = null;
var G__54970 = (0);
var G__54971 = (0);
seq__54213_54928 = G__54968;
chunk__54215_54929 = G__54969;
count__54216_54930 = G__54970;
i__54217_54931 = G__54971;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_54927);
}
}


var G__54974 = cljs.core.next(seq__54115_54917__$1);
var G__54975 = null;
var G__54976 = (0);
var G__54977 = (0);
seq__54115_54856 = G__54974;
chunk__54117_54857 = G__54975;
count__54118_54858 = G__54976;
i__54119_54859 = G__54977;
continue;
} else {
var G__54980 = cljs.core.next(seq__54115_54917__$1);
var G__54981 = null;
var G__54982 = (0);
var G__54983 = (0);
seq__54115_54856 = G__54980;
chunk__54117_54857 = G__54981;
count__54118_54858 = G__54982;
i__54119_54859 = G__54983;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55003 = arguments.length;
var i__4737__auto___55004 = (0);
while(true){
if((i__4737__auto___55004 < len__4736__auto___55003)){
args__4742__auto__.push((arguments[i__4737__auto___55004]));

var G__55010 = (i__4737__auto___55004 + (1));
i__4737__auto___55004 = G__55010;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq54230){
var G__54231 = cljs.core.first(seq54230);
var seq54230__$1 = cljs.core.next(seq54230);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54231,seq54230__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__54235 = arguments.length;
switch (G__54235) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__50721__auto___55053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_54240){
var state_val_54241 = (state_54240[(1)]);
if((state_val_54241 === (1))){
var state_54240__$1 = state_54240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54240__$1,(2),once_or_cleanup);
} else {
if((state_val_54241 === (2))){
var inst_54237 = (state_54240[(2)]);
var inst_54238 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_54240__$1 = (function (){var statearr_54243 = state_54240;
(statearr_54243[(7)] = inst_54237);

return statearr_54243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54240__$1,inst_54238);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__50274__auto__ = null;
var shadow$dom$state_machine__50274__auto____0 = (function (){
var statearr_54245 = [null,null,null,null,null,null,null,null];
(statearr_54245[(0)] = shadow$dom$state_machine__50274__auto__);

(statearr_54245[(1)] = (1));

return statearr_54245;
});
var shadow$dom$state_machine__50274__auto____1 = (function (state_54240){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_54240);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e54248){var ex__50277__auto__ = e54248;
var statearr_54250_55079 = state_54240;
(statearr_54250_55079[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_54240[(4)]))){
var statearr_54252_55081 = state_54240;
(statearr_54252_55081[(1)] = cljs.core.first((state_54240[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55087 = state_54240;
state_54240 = G__55087;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
shadow$dom$state_machine__50274__auto__ = function(state_54240){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__50274__auto____0.call(this);
case 1:
return shadow$dom$state_machine__50274__auto____1.call(this,state_54240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__50274__auto____0;
shadow$dom$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__50274__auto____1;
return shadow$dom$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_54254 = f__50722__auto__();
(statearr_54254[(6)] = c__50721__auto___55053);

return statearr_54254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
