goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_46090 = (function (this$,type){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (malli.registry._schema[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4429__auto__.call(null,this$,type));
} else {
var m__4426__auto__ = (malli.registry._schema["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4426__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_46090(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_46092 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (malli.registry._schemas[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (malli.registry._schemas["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_46092(this$);
}
});

malli.registry.simple_registry = (function malli$registry$simple_registry(schemas){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry45987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45987 = (function (schemas,meta45988){
this.schemas = schemas;
this.meta45988 = meta45988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45989,meta45988__$1){
var self__ = this;
var _45989__$1 = this;
return (new malli.registry.t_malli$registry45987(self__.schemas,meta45988__$1));
}));

(malli.registry.t_malli$registry45987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45989){
var self__ = this;
var _45989__$1 = this;
return self__.meta45988;
}));

(malli.registry.t_malli$registry45987.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45987.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.schemas,type);
}));

(malli.registry.t_malli$registry45987.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schemas;
}));

(malli.registry.t_malli$registry45987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null),new cljs.core.Symbol(null,"meta45988","meta45988",1398873640,null)], null);
}));

(malli.registry.t_malli$registry45987.cljs$lang$type = true);

(malli.registry.t_malli$registry45987.cljs$lang$ctorStr = "malli.registry/t_malli$registry45987");

(malli.registry.t_malli$registry45987.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"malli.registry/t_malli$registry45987");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45987.
 */
malli.registry.__GT_t_malli$registry45987 = (function malli$registry$simple_registry_$___GT_t_malli$registry45987(schemas__$1,meta45988){
return (new malli.registry.t_malli$registry45987(schemas__$1,meta45988));
});

}

return (new malli.registry.t_malli$registry45987(schemas,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
return null;
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((malli.registry.type === "custom")){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});
malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry45999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45999 = (function (meta46000){
this.meta46000 = meta46000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46001,meta46000__$1){
var self__ = this;
var _46001__$1 = this;
return (new malli.registry.t_malli$registry45999(meta46000__$1));
}));

(malli.registry.t_malli$registry45999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46001){
var self__ = this;
var _46001__$1 = this;
return self__.meta46000;
}));

(malli.registry.t_malli$registry45999.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45999.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45999.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46000","meta46000",-436394537,null)], null);
}));

(malli.registry.t_malli$registry45999.cljs$lang$type = true);

(malli.registry.t_malli$registry45999.cljs$lang$ctorStr = "malli.registry/t_malli$registry45999");

(malli.registry.t_malli$registry45999.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"malli.registry/t_malli$registry45999");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45999.
 */
malli.registry.__GT_t_malli$registry45999 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry45999(meta46000){
return (new malli.registry.t_malli$registry45999(meta46000));
});

}

return (new malli.registry.t_malli$registry45999(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46106 = arguments.length;
var i__4737__auto___46107 = (0);
while(true){
if((i__4737__auto___46107 < len__4736__auto___46106)){
args__4742__auto__.push((arguments[i__4737__auto___46107]));

var G__46108 = (i__4737__auto___46107 + (1));
i__4737__auto___46107 = G__46108;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry46018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry46018 = (function (_QMARK_registries,registries,meta46019){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta46019 = meta46019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry46018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46020,meta46019__$1){
var self__ = this;
var _46020__$1 = this;
return (new malli.registry.t_malli$registry46018(self__._QMARK_registries,self__.registries,meta46019__$1));
}));

(malli.registry.t_malli$registry46018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46020){
var self__ = this;
var _46020__$1 = this;
return self__.meta46019;
}));

(malli.registry.t_malli$registry46018.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry46018.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__46006_SHARP_){
return malli.registry._schema(p1__46006_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry46018.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry46018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta46019","meta46019",922781897,null)], null);
}));

(malli.registry.t_malli$registry46018.cljs$lang$type = true);

(malli.registry.t_malli$registry46018.cljs$lang$ctorStr = "malli.registry/t_malli$registry46018");

(malli.registry.t_malli$registry46018.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"malli.registry/t_malli$registry46018");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry46018.
 */
malli.registry.__GT_t_malli$registry46018 = (function malli$registry$__GT_t_malli$registry46018(_QMARK_registries__$1,registries__$1,meta46019){
return (new malli.registry.t_malli$registry46018(_QMARK_registries__$1,registries__$1,meta46019));
});

}

return (new malli.registry.t_malli$registry46018(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq46013){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46013));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry46041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry46041 = (function (db,meta46042){
this.db = db;
this.meta46042 = meta46042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry46041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46043,meta46042__$1){
var self__ = this;
var _46043__$1 = this;
return (new malli.registry.t_malli$registry46041(self__.db,meta46042__$1));
}));

(malli.registry.t_malli$registry46041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46043){
var self__ = this;
var _46043__$1 = this;
return self__.meta46042;
}));

(malli.registry.t_malli$registry46041.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry46041.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.db),type);
}));

(malli.registry.t_malli$registry46041.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.db);
}));

(malli.registry.t_malli$registry46041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta46042","meta46042",-1116692854,null)], null);
}));

(malli.registry.t_malli$registry46041.cljs$lang$type = true);

(malli.registry.t_malli$registry46041.cljs$lang$ctorStr = "malli.registry/t_malli$registry46041");

(malli.registry.t_malli$registry46041.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"malli.registry/t_malli$registry46041");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry46041.
 */
malli.registry.__GT_t_malli$registry46041 = (function malli$registry$mutable_registry_$___GT_t_malli$registry46041(db__$1,meta46042){
return (new malli.registry.t_malli$registry46041(db__$1,meta46042));
});

}

return (new malli.registry.t_malli$registry46041(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry46058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry46058 = (function (meta46059){
this.meta46059 = meta46059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry46058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46060,meta46059__$1){
var self__ = this;
var _46060__$1 = this;
return (new malli.registry.t_malli$registry46058(meta46059__$1));
}));

(malli.registry.t_malli$registry46058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46060){
var self__ = this;
var _46060__$1 = this;
return self__.meta46059;
}));

(malli.registry.t_malli$registry46058.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry46058.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(malli.registry._STAR_registry_STAR_,type);
}));

(malli.registry.t_malli$registry46058.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._STAR_registry_STAR_;
}));

(malli.registry.t_malli$registry46058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46059","meta46059",639345180,null)], null);
}));

(malli.registry.t_malli$registry46058.cljs$lang$type = true);

(malli.registry.t_malli$registry46058.cljs$lang$ctorStr = "malli.registry/t_malli$registry46058");

(malli.registry.t_malli$registry46058.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"malli.registry/t_malli$registry46058");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry46058.
 */
malli.registry.__GT_t_malli$registry46058 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry46058(meta46059){
return (new malli.registry.t_malli$registry46058(meta46059));
});

}

return (new malli.registry.t_malli$registry46058(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry46075 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry46075 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta46076){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta46076 = meta46076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry46075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46077,meta46076__$1){
var self__ = this;
var _46077__$1 = this;
return (new malli.registry.t_malli$registry46075(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta46076__$1));
}));

(malli.registry.t_malli$registry46075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46077){
var self__ = this;
var _46077__$1 = this;
return self__.meta46076;
}));

(malli.registry.t_malli$registry46075.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry46075.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = (function (){var fexpr__46080 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__46080.cljs$core$IFn$_invoke$arity$1 ? fexpr__46080.cljs$core$IFn$_invoke$arity$1(name) : fexpr__46080.call(null,name));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5735__auto__ = (function (){var G__46081 = name;
var G__46082 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__46081,G__46082) : self__.provider.call(null,G__46081,G__46082));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var schema = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry46075.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry46075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta46076","meta46076",-147407560,null)], null);
}));

(malli.registry.t_malli$registry46075.cljs$lang$type = true);

(malli.registry.t_malli$registry46075.cljs$lang$ctorStr = "malli.registry/t_malli$registry46075");

(malli.registry.t_malli$registry46075.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"malli.registry/t_malli$registry46075");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry46075.
 */
malli.registry.__GT_t_malli$registry46075 = (function malli$registry$lazy_registry_$___GT_t_malli$registry46075(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta46076){
return (new malli.registry.t_malli$registry46075(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta46076));
});

}

return (new malli.registry.t_malli$registry46075(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
})()
], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
