goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__52941__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__52941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52943__i = 0, G__52943__a = new Array(arguments.length -  0);
while (G__52943__i < G__52943__a.length) {G__52943__a[G__52943__i] = arguments[G__52943__i + 0]; ++G__52943__i;}
  args = new cljs.core.IndexedSeq(G__52943__a,0,null);
} 
return G__52941__delegate.call(this,args);};
G__52941.cljs$lang$maxFixedArity = 0;
G__52941.cljs$lang$applyTo = (function (arglist__52944){
var args = cljs.core.seq(arglist__52944);
return G__52941__delegate(args);
});
G__52941.cljs$core$IFn$_invoke$arity$variadic = G__52941__delegate;
return G__52941;
})()
);

(o.error = (function() { 
var G__52945__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__52945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52946__i = 0, G__52946__a = new Array(arguments.length -  0);
while (G__52946__i < G__52946__a.length) {G__52946__a[G__52946__i] = arguments[G__52946__i + 0]; ++G__52946__i;}
  args = new cljs.core.IndexedSeq(G__52946__a,0,null);
} 
return G__52945__delegate.call(this,args);};
G__52945.cljs$lang$maxFixedArity = 0;
G__52945.cljs$lang$applyTo = (function (arglist__52948){
var args = cljs.core.seq(arglist__52948);
return G__52945__delegate(args);
});
G__52945.cljs$core$IFn$_invoke$arity$variadic = G__52945__delegate;
return G__52945;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
