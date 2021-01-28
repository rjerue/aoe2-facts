goog.provide('malli.json_schema');

/**
 * @interface
 */
malli.json_schema.JsonSchema = function(){};

var malli$json_schema$JsonSchema$_accept$dyn_48583 = (function (this$,children,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (malli.json_schema._accept[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,children,options) : m__4429__auto__.call(null,this$,children,options));
} else {
var m__4426__auto__ = (malli.json_schema._accept["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,children,options) : m__4426__auto__.call(null,this$,children,options));
} else {
throw cljs.core.missing_protocol("JsonSchema.-accept",this$);
}
}
});
/**
 * transforms schema to JSON Schema
 */
malli.json_schema._accept = (function malli$json_schema$_accept(this$,children,options){
if((((!((this$ == null)))) && ((!((this$.malli$json_schema$JsonSchema$_accept$arity$3 == null)))))){
return this$.malli$json_schema$JsonSchema$_accept$arity$3(this$,children,options);
} else {
return malli$json_schema$JsonSchema$_accept$dyn_48583(this$,children,options);
}
});

malli.json_schema._ref = (function malli$json_schema$_ref(x){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"$ref","$ref",841290683),["#/definitions/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null);
});
malli.json_schema._schema = (function malli$json_schema$_schema(schema,p__48202){
var map__48206 = p__48202;
var map__48206__$1 = (((((!((map__48206 == null))))?(((((map__48206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48206):map__48206);
var options = map__48206__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48206__$1,new cljs.core.Keyword("malli.json-schema","transform","malli.json-schema/transform",-1255228521));
var definitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48206__$1,new cljs.core.Keyword("malli.json-schema","definitions","malli.json-schema/definitions",1666750607));
var result = (function (){var G__48208 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__48209 = options;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__48208,G__48209) : transform.call(null,G__48208,G__48209));
})();
var temp__5733__auto__ = malli.core._ref(schema);
if(cljs.core.truth_(temp__5733__auto__)){
var ref = temp__5733__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(definitions,cljs.core.assoc,ref,result);

return malli.json_schema._ref(ref);
} else {
return result;
}
});
malli.json_schema.unlift_keys = (function malli$json_schema$unlift_keys(m,prefix){
return cljs.core.reduce_kv((function (p1__48218_SHARP_,p2__48217_SHARP_,p3__48219_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(prefix),cljs.core.namespace(p2__48217_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48218_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p2__48217_SHARP_)),p3__48219_SHARP_);
} else {
return p1__48218_SHARP_;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
malli.json_schema.unlift = (function malli$json_schema$unlift(m,prefix){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,prefix);
});
malli.json_schema.select = (function malli$json_schema$select(m){
return cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
});
if((typeof malli !== 'undefined') && (typeof malli.json_schema !== 'undefined') && (typeof malli.json_schema.accept !== 'undefined')){
} else {
malli.json_schema.accept = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("malli.json-schema","default","malli.json-schema/default",-421449099)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48252 = cljs.core.get_global_hierarchy;
return (fexpr__48252.cljs$core$IFn$_invoke$arity$0 ? fexpr__48252.cljs$core$IFn$_invoke$arity$0() : fexpr__48252.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.json-schema","accept"),(function (name,_schema,_children,_options){
return name;
}),new cljs.core.Keyword("malli.json-schema","default","malli.json-schema/default",-421449099),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.json-schema","default","malli.json-schema/default",-421449099),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"any?","any?",-318999933,null),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"number?","number?",-1747282210,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"int?","int?",1799729645,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64",new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(1)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64",new cljs.core.Keyword(null,"maximum","maximum",573880714),(-1)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64",new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"float?","float?",673884616,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"number"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"double?","double?",-2146564276,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"number"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"exclusiveMininum","exclusiveMininum",-1883273779),(0)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"exclusiveMaximum","exclusiveMaximum",1883434466),(0)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uuid"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"uri?","uri?",2029475116,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uri"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"decimal?","decimal?",687666240,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"date-time"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"indexed?","indexed?",1234610384,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"map?","map?",-1780568534,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"object"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"list?","list?",-1494629,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"char?","char?",-1072221244,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"uniqueItems","uniqueItems",-826722268),true], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"null"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"object"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"empty?","empty?",76408555,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"maxItems","maxItems",576652798),(0),new cljs.core.Keyword(null,"minItems","minItems",1950622069),(0)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"associative?","associative?",-141666771,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"object"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ratio?","ratio?",-498643049,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"bytes?","bytes?",-1745721485,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"byte"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">",">",-555517146),(function (_,___$1,p__48370,___$2){
var vec__48371 = p__48370;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48371,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double",new cljs.core.Keyword(null,"exclusiveMinimum","exclusiveMinimum",-869557322),value], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">=",">=",-623615505),(function (_,___$1,p__48377,___$2){
var vec__48378 = p__48377;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48378,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double",new cljs.core.Keyword(null,"minimum","minimum",-1621006059),value], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<","<",-646864291),(function (_,___$1,p__48388,___$2){
var vec__48389 = p__48388;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48389,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double",new cljs.core.Keyword(null,"exclusiveMaximum","exclusiveMaximum",1883434466),value], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<=","<=",-395636158),(function (_,___$1,p__48392,___$2){
var vec__48395 = p__48392;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48395,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double",new cljs.core.Keyword(null,"maximum","maximum",573880714),value], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=","=",1152933628),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not=","not=",-173995323),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allOf","allOf",857821143),children], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anyOf","anyOf",-1046092155),children], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","val","malli.core/val",39501268),(function (_,___$1,children,___$2){
return cljs.core.first(children);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (_,___$1,children,___$2){
var required = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(malli.core._comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,new cljs.core.Keyword(null,"optional","optional",2053951509),cljs.core.second),children));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"object",new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__48420){
var vec__48422 = p__48420;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48422,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48422,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48422,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))),new cljs.core.Keyword(null,"required","required",1807647006),required], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi","multi",-190293005),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oneOf","oneOf",1209080187),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.last,children)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"object",new cljs.core.Keyword(null,"additionalProperties","additionalProperties",-1203767392),cljs.core.second(children)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(children)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(children)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(children),new cljs.core.Keyword(null,"uniqueItems","uniqueItems",-826722268),true], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"enum","enum",1679018432),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),children], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"maybe","maybe",-314397560),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oneOf","oneOf",1209080187),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"null"], null))], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),children,new cljs.core.Keyword(null,"additionalItems","additionalItems",630706986),false], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"re","re",228676202),(function (_,schema,___$1,options){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options))], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (_,schema,___$1,___$2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),clojure.set.rename_keys(cljs.core.select_keys(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"minLength","minLength",-1538722770),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073)], null))], 0));
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"int","int",-1741416922),(function (_,schema,___$1,___$2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),clojure.set.rename_keys(cljs.core.select_keys(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"maximum","maximum",573880714)], null))], 0));
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"double","double",884886883),(function (_,schema,___$1,___$2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"number"], null),clojure.set.rename_keys(cljs.core.select_keys(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"maximum","maximum",573880714)], null))], 0));
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uuid"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (_,schema,___$1,___$2){
return malli.json_schema._ref(malli.core._ref(schema));
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),(function (_,schema,___$1,options){
return malli.json_schema._schema(schema,options);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863),(function (_,schema,___$1,options){
return malli.json_schema._schema(schema,options);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (_,schema,___$1,p__48483){
var map__48484 = p__48483;
var map__48484__$1 = (((((!((map__48484 == null))))?(((((map__48484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48484):map__48484);
var options = map__48484__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48484__$1,new cljs.core.Keyword("malli.json-schema","transform","malli.json-schema/transform",-1255228521));
var G__48496 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__48497 = options;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__48496,G__48497) : transform.call(null,G__48496,G__48497));
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (_,schema,___$1,p__48502){
var map__48503 = p__48502;
var map__48503__$1 = (((((!((map__48503 == null))))?(((((map__48503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48503):map__48503);
var options = map__48503__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48503__$1,new cljs.core.Keyword("malli.json-schema","transform","malli.json-schema/transform",-1255228521));
var G__48510 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__48511 = options;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__48510,G__48511) : transform.call(null,G__48510,G__48511));
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),(function (_,schema,___$1,p__48515){
var map__48516 = p__48515;
var map__48516__$1 = (((((!((map__48516 == null))))?(((((map__48516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48516):map__48516);
var options = map__48516__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48516__$1,new cljs.core.Keyword("malli.json-schema","transform","malli.json-schema/transform",-1255228521));
var G__48520 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__48521 = options;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__48520,G__48521) : transform.call(null,G__48520,G__48521));
}));
malli.json_schema._json_schema_walker = (function malli$json_schema$_json_schema_walker(schema,_,children,options){
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema)], 0));
var or__4126__auto__ = malli.json_schema.unlift(p,new cljs.core.Keyword(null,"json-schema","json-schema",389191695));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.json_schema.select(p),(((((!((schema == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === schema.malli$json_schema$JsonSchema$))))?true:(((!schema.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.json_schema.JsonSchema,schema):false)):cljs.core.native_satisfies_QMARK_(malli.json_schema.JsonSchema,schema)))?malli.json_schema._accept(schema,children,options):malli.json_schema.accept.cljs$core$IFn$_invoke$arity$4(malli.core.type.cljs$core$IFn$_invoke$arity$1(schema),schema,children,options)),malli.json_schema.unlift_keys(p,new cljs.core.Keyword(null,"json-schema","json-schema",389191695))], 0));
}
});
malli.json_schema._transform = (function malli$json_schema$_transform(_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.json_schema._json_schema_walker,options);
});
malli.json_schema.transform = (function malli$json_schema$transform(var_args){
var G__48554 = arguments.length;
switch (G__48554) {
case 1:
return malli.json_schema.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.json_schema.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.json_schema.transform.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.json_schema.transform.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.json_schema.transform.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var definitions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("malli.core","walk-entry-vals","malli.core/walk-entry-vals",-64238340),true,new cljs.core.Keyword("malli.json-schema","definitions","malli.json-schema/definitions",1666750607),definitions,new cljs.core.Keyword("malli.json-schema","transform","malli.json-schema/transform",-1255228521),malli.json_schema._transform], null)], 0));
var G__48567 = malli.json_schema._transform(_QMARK_schema,options__$1);
if(cljs.core.seq(cljs.core.deref(definitions))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48567,new cljs.core.Keyword(null,"definitions","definitions",167529986),cljs.core.deref(definitions));
} else {
return G__48567;
}
}));

(malli.json_schema.transform.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.json_schema.js.map
