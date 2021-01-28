goog.provide('malli.swagger');

/**
 * @interface
 */
malli.swagger.SwaggerSchema = function(){};

var malli$swagger$SwaggerSchema$_accept$dyn_48686 = (function (this$,children,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (malli.swagger._accept[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,children,options) : m__4429__auto__.call(null,this$,children,options));
} else {
var m__4426__auto__ = (malli.swagger._accept["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,children,options) : m__4426__auto__.call(null,this$,children,options));
} else {
throw cljs.core.missing_protocol("SwaggerSchema.-accept",this$);
}
}
});
/**
 * transforms schema to Swagger Schema
 */
malli.swagger._accept = (function malli$swagger$_accept(this$,children,options){
if((((!((this$ == null)))) && ((!((this$.malli$swagger$SwaggerSchema$_accept$arity$3 == null)))))){
return this$.malli$swagger$SwaggerSchema$_accept$arity$3(this$,children,options);
} else {
return malli$swagger$SwaggerSchema$_accept$dyn_48686(this$,children,options);
}
});

if((typeof malli !== 'undefined') && (typeof malli.swagger !== 'undefined') && (typeof malli.swagger.accept !== 'undefined')){
} else {
malli.swagger.accept = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("malli.swagger","default","malli.swagger/default",799472521)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48621 = cljs.core.get_global_hierarchy;
return (fexpr__48621.cljs$core$IFn$_invoke$arity$0 ? fexpr__48621.cljs$core$IFn$_invoke$arity$0() : fexpr__48621.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.swagger","accept"),(function (name,_schema,_children,_options){
return name;
}),new cljs.core.Keyword("malli.swagger","default","malli.swagger/default",799472521),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.swagger","default","malli.swagger/default",799472521),(function (name,schema,children,options){
return malli.json_schema.accept.cljs$core$IFn$_invoke$arity$4(name,schema,children,options);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"float?","float?",673884616,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"float"], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"double?","double?",-2146564276,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (_,___$1,children,___$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),new cljs.core.Keyword(null,"x-allOf","x-allOf",-1697874638),children);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (_,___$1,children,___$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi","multi",-190293005),(function (_,___$1,children,___$2){
var cs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.last,children);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(cs),new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),cs);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"maybe","maybe",-314397560),(function (_,___$1,children,p__48652){
var map__48653 = p__48652;
var map__48653__$1 = (((((!((map__48653 == null))))?(((((map__48653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48653):map__48653);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var k = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"parameter","parameter",1978789597))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(in$,new cljs.core.Keyword(null,"body","body",-2049205669)))))?new cljs.core.Keyword(null,"allowEmptyValue","allowEmptyValue",-1066530890):new cljs.core.Keyword(null,"x-nullable","x-nullable",1492681247));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),k,true);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"x-items","x-items",-710213657),children], null);
}));
malli.swagger._swagger_walker = (function malli$swagger$_swagger_walker(schema,_,children,options){
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema)], 0));
var or__4126__auto__ = malli.json_schema.unlift(p,new cljs.core.Keyword(null,"swagger","swagger",-79684232));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = malli.json_schema.unlift(p,new cljs.core.Keyword(null,"json-schema","json-schema",389191695));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.json_schema.select(p),(((((!((schema == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === schema.malli$swagger$SwaggerSchema$))))?true:(((!schema.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.swagger.SwaggerSchema,schema):false)):cljs.core.native_satisfies_QMARK_(malli.swagger.SwaggerSchema,schema)))?malli.swagger._accept(schema,children,options):malli.swagger.accept.cljs$core$IFn$_invoke$arity$4(malli.core.type.cljs$core$IFn$_invoke$arity$1(schema),schema,children,options)),malli.json_schema.unlift_keys(p,new cljs.core.Keyword(null,"json-schema","json-schema",389191695)),malli.json_schema.unlift_keys(p,new cljs.core.Keyword(null,"swagger","swagger",-79684232))], 0));
}
}
});
malli.swagger._transform = (function malli$swagger$_transform(_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.swagger._swagger_walker,options);
});
malli.swagger.transform = (function malli$swagger$transform(var_args){
var G__48677 = arguments.length;
switch (G__48677) {
case 1:
return malli.swagger.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.swagger.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.swagger.transform.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.swagger.transform.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.swagger.transform.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var definitions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("malli.core","walk-entry-vals","malli.core/walk-entry-vals",-64238340),true,new cljs.core.Keyword("malli.json-schema","definitions","malli.json-schema/definitions",1666750607),definitions,new cljs.core.Keyword("malli.json-schema","transform","malli.json-schema/transform",-1255228521),malli.swagger._transform], null)], 0));
var G__48682 = malli.swagger._transform(_QMARK_schema,options__$1);
if(cljs.core.seq(cljs.core.deref(definitions))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48682,new cljs.core.Keyword(null,"definitions","definitions",167529986),cljs.core.deref(definitions));
} else {
return G__48682;
}
}));

(malli.swagger.transform.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.swagger.js.map
