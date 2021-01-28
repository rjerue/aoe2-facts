goog.provide('reitit.coercion.malli');

/**
 * @interface
 */
reitit.coercion.malli.Coercer = function(){};

var reitit$coercion$malli$Coercer$_decode$dyn_48981 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion.malli._decode[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (reitit.coercion.malli._decode["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("Coercer.-decode",this$);
}
}
});
reitit.coercion.malli._decode = (function reitit$coercion$malli$_decode(this$,value){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$Coercer$_decode$arity$2 == null)))))){
return this$.reitit$coercion$malli$Coercer$_decode$arity$2(this$,value);
} else {
return reitit$coercion$malli$Coercer$_decode$dyn_48981(this$,value);
}
});

var reitit$coercion$malli$Coercer$_encode$dyn_48982 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion.malli._encode[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (reitit.coercion.malli._encode["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("Coercer.-encode",this$);
}
}
});
reitit.coercion.malli._encode = (function reitit$coercion$malli$_encode(this$,value){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$Coercer$_encode$arity$2 == null)))))){
return this$.reitit$coercion$malli$Coercer$_encode$arity$2(this$,value);
} else {
return reitit$coercion$malli$Coercer$_encode$dyn_48982(this$,value);
}
});

var reitit$coercion$malli$Coercer$_validate$dyn_48983 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion.malli._validate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (reitit.coercion.malli._validate["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("Coercer.-validate",this$);
}
}
});
reitit.coercion.malli._validate = (function reitit$coercion$malli$_validate(this$,value){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$Coercer$_validate$arity$2 == null)))))){
return this$.reitit$coercion$malli$Coercer$_validate$arity$2(this$,value);
} else {
return reitit$coercion$malli$Coercer$_validate$dyn_48983(this$,value);
}
});

var reitit$coercion$malli$Coercer$_explain$dyn_48984 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion.malli._explain[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (reitit.coercion.malli._explain["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("Coercer.-explain",this$);
}
}
});
reitit.coercion.malli._explain = (function reitit$coercion$malli$_explain(this$,value){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$Coercer$_explain$arity$2 == null)))))){
return this$.reitit$coercion$malli$Coercer$_explain$arity$2(this$,value);
} else {
return reitit$coercion$malli$Coercer$_explain$dyn_48984(this$,value);
}
});


/**
 * @interface
 */
reitit.coercion.malli.TransformationProvider = function(){};

var reitit$coercion$malli$TransformationProvider$_transformer$dyn_48989 = (function (this$,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion.malli._transformer[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__4429__auto__.call(null,this$,options));
} else {
var m__4426__auto__ = (reitit.coercion.malli._transformer["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__4426__auto__.call(null,this$,options));
} else {
throw cljs.core.missing_protocol("TransformationProvider.-transformer",this$);
}
}
});
reitit.coercion.malli._transformer = (function reitit$coercion$malli$_transformer(this$,options){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$TransformationProvider$_transformer$arity$2 == null)))))){
return this$.reitit$coercion$malli$TransformationProvider$_transformer$arity$2(this$,options);
} else {
return reitit$coercion$malli$TransformationProvider$_transformer$dyn_48989(this$,options);
}
});

reitit.coercion.malli._provider = (function reitit$coercion$malli$_provider(transformer){
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.malli !== 'undefined') && (typeof reitit.coercion.malli.t_reitit$coercion$malli48847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.malli.TransformationProvider}
*/
reitit.coercion.malli.t_reitit$coercion$malli48847 = (function (transformer,meta48848){
this.transformer = transformer;
this.meta48848 = meta48848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.malli.t_reitit$coercion$malli48847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48849,meta48848__$1){
var self__ = this;
var _48849__$1 = this;
return (new reitit.coercion.malli.t_reitit$coercion$malli48847(self__.transformer,meta48848__$1));
}));

(reitit.coercion.malli.t_reitit$coercion$malli48847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48849){
var self__ = this;
var _48849__$1 = this;
return self__.meta48848;
}));

(reitit.coercion.malli.t_reitit$coercion$malli48847.prototype.reitit$coercion$malli$TransformationProvider$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.malli.t_reitit$coercion$malli48847.prototype.reitit$coercion$malli$TransformationProvider$_transformer$arity$2 = (function (_,p__48854){
var self__ = this;
var map__48855 = p__48854;
var map__48855__$1 = (((((!((map__48855 == null))))?(((((map__48855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48855):map__48855);
var strip_extra_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48855__$1,new cljs.core.Keyword(null,"strip-extra-keys","strip-extra-keys",844924777));
var default_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48855__$1,new cljs.core.Keyword(null,"default-values","default-values",1480201073));
var ___$1 = this;
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(strip_extra_keys)?malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0():null),self__.transformer,(cljs.core.truth_(default_values)?malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$0():null)], 0));
}));

(reitit.coercion.malli.t_reitit$coercion$malli48847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transformer","transformer",147060907,null),new cljs.core.Symbol(null,"meta48848","meta48848",183539898,null)], null);
}));

(reitit.coercion.malli.t_reitit$coercion$malli48847.cljs$lang$type = true);

(reitit.coercion.malli.t_reitit$coercion$malli48847.cljs$lang$ctorStr = "reitit.coercion.malli/t_reitit$coercion$malli48847");

(reitit.coercion.malli.t_reitit$coercion$malli48847.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.coercion.malli/t_reitit$coercion$malli48847");
}));

/**
 * Positional factory function for reitit.coercion.malli/t_reitit$coercion$malli48847.
 */
reitit.coercion.malli.__GT_t_reitit$coercion$malli48847 = (function reitit$coercion$malli$_provider_$___GT_t_reitit$coercion$malli48847(transformer__$1,meta48848){
return (new reitit.coercion.malli.t_reitit$coercion$malli48847(transformer__$1,meta48848));
});

}

return (new reitit.coercion.malli.t_reitit$coercion$malli48847(transformer,cljs.core.PersistentArrayMap.EMPTY));
});
reitit.coercion.malli.string_transformer_provider = reitit.coercion.malli._provider(malli.transform.string_transformer());
reitit.coercion.malli.json_transformer_provider = reitit.coercion.malli._provider(malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$0());
reitit.coercion.malli.default_transformer_provider = reitit.coercion.malli._provider(null);
reitit.coercion.malli._coercer = (function reitit$coercion$malli$_coercer(schema,type,transformers,f,encoder,p__48863){
var map__48864 = p__48863;
var map__48864__$1 = (((((!((map__48864 == null))))?(((((map__48864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48864):map__48864);
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48864__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48864__$1,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48864__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(schema)){
var __GT_coercer = (function (t){
var decoder = (cljs.core.truth_(t)?malli.core.decoder.cljs$core$IFn$_invoke$arity$3(schema,options,t):cljs.core.identity);
var encoder__$1 = (cljs.core.truth_(t)?malli.core.encoder.cljs$core$IFn$_invoke$arity$3(schema,options,t):cljs.core.identity);
var validator = (cljs.core.truth_(validate)?malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema,options):cljs.core.constantly(true));
var explainer = malli.core.explainer.cljs$core$IFn$_invoke$arity$2(schema,options);
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.malli !== 'undefined') && (typeof reitit.coercion.malli.t_reitit$coercion$malli48871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {reitit.coercion.malli.Coercer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.malli.t_reitit$coercion$malli48871 = (function (t,options,map__48864,p__48863,decoder,enabled,explainer,schema,transformers,validate,encoder,validator,type,f,meta48872){
this.t = t;
this.options = options;
this.map__48864 = map__48864;
this.p__48863 = p__48863;
this.decoder = decoder;
this.enabled = enabled;
this.explainer = explainer;
this.schema = schema;
this.transformers = transformers;
this.validate = validate;
this.encoder = encoder;
this.validator = validator;
this.type = type;
this.f = f;
this.meta48872 = meta48872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.malli.t_reitit$coercion$malli48871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48873,meta48872__$1){
var self__ = this;
var _48873__$1 = this;
return (new reitit.coercion.malli.t_reitit$coercion$malli48871(self__.t,self__.options,self__.map__48864,self__.p__48863,self__.decoder,self__.enabled,self__.explainer,self__.schema,self__.transformers,self__.validate,self__.encoder,self__.validator,self__.type,self__.f,meta48872__$1));
}));

(reitit.coercion.malli.t_reitit$coercion$malli48871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48873){
var self__ = this;
var _48873__$1 = this;
return self__.meta48872;
}));

(reitit.coercion.malli.t_reitit$coercion$malli48871.prototype.reitit$coercion$malli$Coercer$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.malli.t_reitit$coercion$malli48871.prototype.reitit$coercion$malli$Coercer$_decode$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return (self__.decoder.cljs$core$IFn$_invoke$arity$1 ? self__.decoder.cljs$core$IFn$_invoke$arity$1(value) : self__.decoder.call(null,value));
}));

(reitit.coercion.malli.t_reitit$coercion$malli48871.prototype.reitit$coercion$malli$Coercer$_encode$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return (self__.encoder.cljs$core$IFn$_invoke$arity$1 ? self__.encoder.cljs$core$IFn$_invoke$arity$1(value) : self__.encoder.call(null,value));
}));

(reitit.coercion.malli.t_reitit$coercion$malli48871.prototype.reitit$coercion$malli$Coercer$_validate$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(value) : self__.validator.call(null,value));
}));

(reitit.coercion.malli.t_reitit$coercion$malli48871.prototype.reitit$coercion$malli$Coercer$_explain$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return (self__.explainer.cljs$core$IFn$_invoke$arity$1 ? self__.explainer.cljs$core$IFn$_invoke$arity$1(value) : self__.explainer.call(null,value));
}));

(reitit.coercion.malli.t_reitit$coercion$malli48871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"map__48864","map__48864",1235657633,null),new cljs.core.Symbol(null,"p__48863","p__48863",881114146,null),new cljs.core.Symbol(null,"decoder","decoder",-1484876926,null),new cljs.core.Symbol(null,"enabled","enabled",-1458526013,null),new cljs.core.Symbol(null,"explainer","explainer",-361690397,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"encoder","encoder",527403693,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta48872","meta48872",1067951469,null)], null);
}));

(reitit.coercion.malli.t_reitit$coercion$malli48871.cljs$lang$type = true);

(reitit.coercion.malli.t_reitit$coercion$malli48871.cljs$lang$ctorStr = "reitit.coercion.malli/t_reitit$coercion$malli48871");

(reitit.coercion.malli.t_reitit$coercion$malli48871.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.coercion.malli/t_reitit$coercion$malli48871");
}));

/**
 * Positional factory function for reitit.coercion.malli/t_reitit$coercion$malli48871.
 */
reitit.coercion.malli.__GT_t_reitit$coercion$malli48871 = (function reitit$coercion$malli$_coercer_$___GT_t_reitit$coercion$malli48871(t__$1,options__$1,map__48864__$2,p__48863__$1,decoder__$1,enabled__$1,explainer__$1,schema__$1,transformers__$1,validate__$1,encoder__$2,validator__$1,type__$1,f__$1,meta48872){
return (new reitit.coercion.malli.t_reitit$coercion$malli48871(t__$1,options__$1,map__48864__$2,p__48863__$1,decoder__$1,enabled__$1,explainer__$1,schema__$1,transformers__$1,validate__$1,encoder__$2,validator__$1,type__$1,f__$1,meta48872));
});

}

return (new reitit.coercion.malli.t_reitit$coercion$malli48871(t,options,map__48864__$1,p__48863,decoder,enabled,explainer,schema,transformers,validate,encoder__$1,validator,type,f,cljs.core.PersistentArrayMap.EMPTY));
});
var map__48869 = (transformers.cljs$core$IFn$_invoke$arity$1 ? transformers.cljs$core$IFn$_invoke$arity$1(type) : transformers.call(null,type));
var map__48869__$1 = (((((!((map__48869 == null))))?(((((map__48869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48869):map__48869);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48869__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48869__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var default_coercer = __GT_coercer(default$);
var encode = (function (){var or__4126__auto__ = encoder;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (function (value,_format){
return value;
});
}
})();
var format_coercers = (function (){var G__48881 = (function (){var iter__4529__auto__ = (function reitit$coercion$malli$_coercer_$_iter__48882(s__48883){
return (new cljs.core.LazySeq(null,(function (){
var s__48883__$1 = s__48883;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48883__$1);
if(temp__5735__auto__){
var s__48883__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48883__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48883__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48885 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48884 = (0);
while(true){
if((i__48884 < size__4528__auto__)){
var vec__48887 = cljs.core._nth(c__4527__auto__,i__48884);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48887,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48887,(1),null);
cljs.core.chunk_append(b__48885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f__$1,__GT_coercer(t)], null));

var G__48997 = (i__48884 + (1));
i__48884 = G__48997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48885),reitit$coercion$malli$_coercer_$_iter__48882(cljs.core.chunk_rest(s__48883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48885),null);
}
} else {
var vec__48894 = cljs.core.first(s__48883__$2);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48894,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48894,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f__$1,__GT_coercer(t)], null),reitit$coercion$malli$_coercer_$_iter__48882(cljs.core.rest(s__48883__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(formats);
})();
var G__48881__$1 = (((G__48881 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__48881));
var G__48881__$2 = (((G__48881__$1 == null))?null:cljs.core.seq(G__48881__$1));
if((G__48881__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48881__$2);
}
})();
var get_coercer = (cljs.core.truth_(format_coercers)?(function (format){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(format_coercers,format);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default_coercer;
}
}):(cljs.core.truth_(default_coercer)?cljs.core.constantly(default_coercer):null));
if(cljs.core.truth_((function (){var and__4115__auto__ = enabled;
if(cljs.core.truth_(and__4115__auto__)){
return get_coercer;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"decode","decode",-1306165281))){
return (function (value,format){
var temp__5733__auto__ = (get_coercer.cljs$core$IFn$_invoke$arity$1 ? get_coercer.cljs$core$IFn$_invoke$arity$1(format) : get_coercer.call(null,format));
if(cljs.core.truth_(temp__5733__auto__)){
var coercer = temp__5733__auto__;
var transformed = reitit.coercion.malli._decode(coercer,value);
if(cljs.core.truth_(reitit.coercion.malli._validate(coercer,transformed))){
return transformed;
} else {
var error = reitit.coercion.malli._explain(coercer,transformed);
return reitit.coercion.map__GT_CoercionError(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"transformed","transformed",1969289512),transformed));
}
} else {
return value;
}
});
} else {
return (function (value,format){
var temp__5733__auto__ = (get_coercer.cljs$core$IFn$_invoke$arity$1 ? get_coercer.cljs$core$IFn$_invoke$arity$1(format) : get_coercer.call(null,format));
if(cljs.core.truth_(temp__5733__auto__)){
var coercer = temp__5733__auto__;
var transformed = reitit.coercion.malli._decode(coercer,value);
if(cljs.core.truth_(reitit.coercion.malli._validate(coercer,transformed))){
return (encode.cljs$core$IFn$_invoke$arity$2 ? encode.cljs$core$IFn$_invoke$arity$2(transformed,format) : encode.call(null,transformed,format));
} else {
var error = reitit.coercion.malli._explain(coercer,transformed);
return reitit.coercion.map__GT_CoercionError(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"transformed","transformed",1969289512),transformed));
}
} else {
return value;
}
});
}
} else {
return null;
}
} else {
return null;
}
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.malli !== 'undefined') && (typeof reitit.coercion.malli.extract_parameter !== 'undefined')){
} else {
reitit.coercion.malli.extract_parameter = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48910 = cljs.core.get_global_hierarchy;
return (fexpr__48910.cljs$core$IFn$_invoke$arity$0 ? fexpr__48910.cljs$core$IFn$_invoke$arity$0() : fexpr__48910.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.malli","extract-parameter"),(function (in$,_,___$1){
return in$;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
reitit.coercion.malli.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"body","body",-2049205669),(function (_,schema,options){
var swagger_schema = malli.swagger.transform.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null)], 0)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),"body",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(swagger_schema,"body"),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(swagger_schema,""),new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"maybe","maybe",-314397560),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema)),new cljs.core.Keyword(null,"schema","schema",-1582001791),swagger_schema], null)], null);
}));
reitit.coercion.malli.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (in$,schema,options){
var map__48912 = malli.swagger.transform.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null)], 0)));
var map__48912__$1 = (((((!((map__48912 == null))))?(((((map__48912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48912):map__48912);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48912__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48912__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__48917){
var vec__48918 = p__48917;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48918,(0),null);
var map__48921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48918,(1),null);
var map__48921__$1 = (((((!((map__48921 == null))))?(((((map__48921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48921):map__48921);
var schema__$1 = map__48921__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48921__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.name(in$),new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(schema__$1,""),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.contains_QMARK_(cljs.core.set(required),k)], null),schema__$1], 0));
}),properties);
}));
reitit.coercion.malli.default_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.Keyword(null,"error-keys","error-keys",633236228),new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.Keyword(null,"strip-extra-keys","strip-extra-keys",844924777),new cljs.core.Keyword(null,"encode-error","encode-error",887349998),new cljs.core.Keyword(null,"default-values","default-values",1480201073),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"compile","compile",608186429)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.malli.default_transformer_provider,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.malli.json_transformer_provider], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.malli.string_transformer_provider], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.malli.default_transformer_provider], null)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"errors","errors",-908790718),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"coercion","coercion",904067157),null,new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"humanized","humanized",-287672961),null], null), null),true,true,null,true,null,true,malli.util.closed_schema]);
reitit.coercion.malli.create = (function reitit$coercion$malli$create(var_args){
var G__48930 = arguments.length;
switch (G__48930) {
case 0:
return reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$0 = (function (){
return reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1(null);
}));

(reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var map__48933 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.coercion.malli.default_options,opts], 0));
var map__48933__$1 = (((((!((map__48933 == null))))?(((((map__48933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48933):map__48933);
var opts__$1 = map__48933__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48933__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48933__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48933__$1,new cljs.core.Keyword(null,"options","options",99638489));
var error_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48933__$1,new cljs.core.Keyword(null,"error-keys","error-keys",633236228));
var encode_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48933__$1,new cljs.core.Keyword(null,"encode-error","encode-error",887349998));
var show_QMARK_ = (function (key){
return cljs.core.contains_QMARK_(error_keys,key);
});
var transformers__$1 = clojure.walk.prewalk((function (p1__48924_SHARP_){
if((((!((p1__48924_SHARP_ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__48924_SHARP_.reitit$coercion$malli$TransformationProvider$))))?true:(((!p1__48924_SHARP_.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reitit.coercion.malli.TransformationProvider,p1__48924_SHARP_):false)):cljs.core.native_satisfies_QMARK_(reitit.coercion.malli.TransformationProvider,p1__48924_SHARP_))){
return reitit.coercion.malli._transformer(p1__48924_SHARP_,opts__$1);
} else {
return p1__48924_SHARP_;
}
}),transformers);
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.malli !== 'undefined') && (typeof reitit.coercion.malli.t_reitit$coercion$malli48942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.malli.t_reitit$coercion$malli48942 = (function (opts,map__48933,transformers,compile,options,error_keys,encode_error,show_QMARK_,meta48943){
this.opts = opts;
this.map__48933 = map__48933;
this.transformers = transformers;
this.compile = compile;
this.options = options;
this.error_keys = error_keys;
this.encode_error = encode_error;
this.show_QMARK_ = show_QMARK_;
this.meta48943 = meta48943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48944,meta48943__$1){
var self__ = this;
var _48944__$1 = this;
return (new reitit.coercion.malli.t_reitit$coercion$malli48942(self__.opts,self__.map__48933,self__.transformers,self__.compile,self__.options,self__.error_keys,self__.encode_error,self__.show_QMARK_,meta48943__$1));
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48944){
var self__ = this;
var _48944__$1 = this;
return self__.meta48943;
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"malli","malli",814072082);
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (_,specification,p__48948){
var self__ = this;
var map__48949 = p__48948;
var map__48949__$1 = (((((!((map__48949 == null))))?(((((map__48949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48949):map__48949);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48949__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48949__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var ___$1 = this;
var G__48952 = specification;
var G__48952__$1 = (((G__48952 instanceof cljs.core.Keyword))?G__48952.fqn:null);
switch (G__48952__$1) {
case "swagger":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function reitit$coercion$malli$iter__48953(s__48954){
return (new cljs.core.LazySeq(null,(function (){
var s__48954__$1 = s__48954;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48954__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__48959 = cljs.core.first(xs__6292__auto__);
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48959,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48959,(1),null);
var iterys__4525__auto__ = ((function (s__48954__$1,vec__48959,in$,schema,xs__6292__auto__,temp__5735__auto__,G__48952,G__48952__$1,___$1,map__48949,map__48949__$1,parameters,responses,map__48933,map__48933__$1,opts__$1,transformers,compile,options,error_keys,encode_error,show_QMARK_,transformers__$1){
return (function reitit$coercion$malli$iter__48953_$_iter__48955(s__48956){
return (new cljs.core.LazySeq(null,((function (s__48954__$1,vec__48959,in$,schema,xs__6292__auto__,temp__5735__auto__,G__48952,G__48952__$1,___$1,map__48949,map__48949__$1,parameters,responses,map__48933,map__48933__$1,opts__$1,transformers,compile,options,error_keys,encode_error,show_QMARK_,transformers__$1){
return (function (){
var s__48956__$1 = s__48956;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__48956__$1);
if(temp__5735__auto____$1){
var s__48956__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48956__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48956__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48958 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48957 = (0);
while(true){
if((i__48957 < size__4528__auto__)){
var parameter = cljs.core._nth(c__4527__auto__,i__48957);
cljs.core.chunk_append(b__48958,parameter);

var G__49004 = (i__48957 + (1));
i__48957 = G__49004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48958),reitit$coercion$malli$iter__48953_$_iter__48955(cljs.core.chunk_rest(s__48956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48958),null);
}
} else {
var parameter = cljs.core.first(s__48956__$2);
return cljs.core.cons(parameter,reitit$coercion$malli$iter__48953_$_iter__48955(cljs.core.rest(s__48956__$2)));
}
} else {
return null;
}
break;
}
});})(s__48954__$1,vec__48959,in$,schema,xs__6292__auto__,temp__5735__auto__,G__48952,G__48952__$1,___$1,map__48949,map__48949__$1,parameters,responses,map__48933,map__48933__$1,opts__$1,transformers,compile,options,error_keys,encode_error,show_QMARK_,transformers__$1))
,null,null));
});})(s__48954__$1,vec__48959,in$,schema,xs__6292__auto__,temp__5735__auto__,G__48952,G__48952__$1,___$1,map__48949,map__48949__$1,parameters,responses,map__48933,map__48933__$1,opts__$1,transformers,compile,options,error_keys,encode_error,show_QMARK_,transformers__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(reitit.coercion.malli.extract_parameter.cljs$core$IFn$_invoke$arity$3(in$,(self__.compile.cljs$core$IFn$_invoke$arity$2 ? self__.compile.cljs$core$IFn$_invoke$arity$2(schema,self__.options) : self__.compile.call(null,schema,self__.options)),self__.options)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,reitit$coercion$malli$iter__48953(cljs.core.rest(s__48954__$1)));
} else {
var G__49005 = cljs.core.rest(s__48954__$1);
s__48954__$1 = G__49005;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"responses","responses",1257546453),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__4529__auto__ = (function reitit$coercion$malli$iter__48964(s__48965){
return (new cljs.core.LazySeq(null,(function (){
var s__48965__$1 = s__48965;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48965__$1);
if(temp__5735__auto__){
var s__48965__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48965__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48965__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48967 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48966 = (0);
while(true){
if((i__48966 < size__4528__auto__)){
var vec__48971 = cljs.core._nth(c__4527__auto__,i__48966);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48971,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48971,(1),null);
cljs.core.chunk_append(b__48967,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
var $__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,""));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$2))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4($__$2,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.compile,self__.options),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.swagger.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
} else {
return $__$2;
}
})()], null));

var G__49006 = (i__48966 + (1));
i__48966 = G__49006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48967),reitit$coercion$malli$iter__48964(cljs.core.chunk_rest(s__48965__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48967),null);
}
} else {
var vec__48975 = cljs.core.first(s__48965__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48975,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48975,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
var $__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,""));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$2))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4($__$2,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.compile,self__.options),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.swagger.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
} else {
return $__$2;
}
})()], null),reitit$coercion$malli$iter__48964(cljs.core.rest(s__48965__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(responses);
})())], null):null)], 0));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Schema apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));

}
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,___$1){
var self__ = this;
var ___$2 = this;
return (self__.compile.cljs$core$IFn$_invoke$arity$2 ? self__.compile.cljs$core$IFn$_invoke$arity$2(model,self__.options) : self__.compile.call(null,model,self__.options));
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,schema){
var self__ = this;
var ___$1 = this;
return schema;
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var G__48978 = error;
var G__48978__$1 = (cljs.core.truth_((self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"humanized","humanized",-287672961)) : self__.show_QMARK_.call(null,new cljs.core.Keyword(null,"humanized","humanized",-287672961))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48978,new cljs.core.Keyword(null,"humanized","humanized",-287672961),malli.error.humanize.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"message","message",-406056002)], null))):G__48978);
var G__48978__$2 = (cljs.core.truth_((self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"schema","schema",-1582001791)) : self__.show_QMARK_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48978__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.edn.write_string,self__.opts):G__48978__$1);
var G__48978__$3 = (cljs.core.truth_((self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"errors","errors",-908790718)) : self__.show_QMARK_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718))))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2(G__48978__$2,self__.opts),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (p1__48928_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__48928_SHARP_,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.edn.write_string,self__.opts);
}))):G__48978__$2);
var G__48978__$4 = ((cljs.core.seq(self__.error_keys))?cljs.core.select_keys(G__48978__$3,self__.error_keys):G__48978__$3);
if(cljs.core.truth_(self__.encode_error)){
return (self__.encode_error.cljs$core$IFn$_invoke$arity$1 ? self__.encode_error.cljs$core$IFn$_invoke$arity$1(G__48978__$4) : self__.encode_error.call(null,G__48978__$4));
} else {
return G__48978__$4;
}
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (_,type,schema){
var self__ = this;
var ___$1 = this;
return reitit.coercion.malli._coercer((self__.compile.cljs$core$IFn$_invoke$arity$2 ? self__.compile.cljs$core$IFn$_invoke$arity$2(schema,self__.options) : self__.compile.call(null,schema,self__.options)),type,self__.transformers,new cljs.core.Keyword(null,"decode","decode",-1306165281),null,self__.opts);
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (_,schema){
var self__ = this;
var ___$1 = this;
var schema__$1 = (self__.compile.cljs$core$IFn$_invoke$arity$2 ? self__.compile.cljs$core$IFn$_invoke$arity$2(schema,self__.options) : self__.compile.call(null,schema,self__.options));
var encoder = reitit.coercion.malli._coercer(schema__$1,new cljs.core.Keyword(null,"body","body",-2049205669),self__.transformers,new cljs.core.Keyword(null,"encode","encode",-1753429702),null,self__.opts);
return reitit.coercion.malli._coercer(schema__$1,new cljs.core.Keyword(null,"response","response",-1068424192),self__.transformers,new cljs.core.Keyword(null,"encode","encode",-1753429702),encoder,self__.opts);
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"map__48933","map__48933",-742916410,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"compile","compile",-2046249340,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"error-keys","error-keys",-2021199541,null),new cljs.core.Symbol(null,"encode-error","encode-error",-1767085771,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),new cljs.core.Symbol(null,"meta48943","meta48943",361573213,null)], null);
}));

(reitit.coercion.malli.t_reitit$coercion$malli48942.cljs$lang$type = true);

(reitit.coercion.malli.t_reitit$coercion$malli48942.cljs$lang$ctorStr = "reitit.coercion.malli/t_reitit$coercion$malli48942");

(reitit.coercion.malli.t_reitit$coercion$malli48942.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reitit.coercion.malli/t_reitit$coercion$malli48942");
}));

/**
 * Positional factory function for reitit.coercion.malli/t_reitit$coercion$malli48942.
 */
reitit.coercion.malli.__GT_t_reitit$coercion$malli48942 = (function reitit$coercion$malli$__GT_t_reitit$coercion$malli48942(opts__$2,map__48933__$2,transformers__$2,compile__$1,options__$1,error_keys__$1,encode_error__$1,show_QMARK___$1,meta48943){
return (new reitit.coercion.malli.t_reitit$coercion$malli48942(opts__$2,map__48933__$2,transformers__$2,compile__$1,options__$1,error_keys__$1,encode_error__$1,show_QMARK___$1,meta48943));
});

}

return (new reitit.coercion.malli.t_reitit$coercion$malli48942(opts__$1,map__48933__$1,transformers__$1,compile,options,error_keys,encode_error,show_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
}));

(reitit.coercion.malli.create.cljs$lang$maxFixedArity = 1);

reitit.coercion.malli.coercion = reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1(reitit.coercion.malli.default_options);

//# sourceMappingURL=reitit.coercion.malli.js.map
