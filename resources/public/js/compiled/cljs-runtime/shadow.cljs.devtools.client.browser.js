goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___57109 = arguments.length;
var i__4737__auto___57110 = (0);
while(true){
if((i__4737__auto___57110 < len__4736__auto___57109)){
args__4742__auto__.push((arguments[i__4737__auto___57110]));

var G__57111 = (i__4737__auto___57110 + (1));
i__4737__auto___57110 = G__57111;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56799){
var G__56800 = cljs.core.first(seq56799);
var seq56799__$1 = cljs.core.next(seq56799);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56800,seq56799__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__56820 = cljs.core.seq(sources);
var chunk__56821 = null;
var count__56822 = (0);
var i__56823 = (0);
while(true){
if((i__56823 < count__56822)){
var map__56856 = chunk__56821.cljs$core$IIndexed$_nth$arity$2(null,i__56823);
var map__56856__$1 = (((((!((map__56856 == null))))?(((((map__56856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56856):map__56856);
var src = map__56856__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56856__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56856__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56856__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56856__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56862){var e_57112 = e56862;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57112);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57112.message)].join('')));
}

var G__57113 = seq__56820;
var G__57114 = chunk__56821;
var G__57115 = count__56822;
var G__57116 = (i__56823 + (1));
seq__56820 = G__57113;
chunk__56821 = G__57114;
count__56822 = G__57115;
i__56823 = G__57116;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56820);
if(temp__5735__auto__){
var seq__56820__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56820__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56820__$1);
var G__57117 = cljs.core.chunk_rest(seq__56820__$1);
var G__57118 = c__4556__auto__;
var G__57119 = cljs.core.count(c__4556__auto__);
var G__57120 = (0);
seq__56820 = G__57117;
chunk__56821 = G__57118;
count__56822 = G__57119;
i__56823 = G__57120;
continue;
} else {
var map__56865 = cljs.core.first(seq__56820__$1);
var map__56865__$1 = (((((!((map__56865 == null))))?(((((map__56865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56865):map__56865);
var src = map__56865__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56865__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56865__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56865__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56865__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56868){var e_57121 = e56868;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57121);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57121.message)].join('')));
}

var G__57122 = cljs.core.next(seq__56820__$1);
var G__57123 = null;
var G__57124 = (0);
var G__57125 = (0);
seq__56820 = G__57122;
chunk__56821 = G__57123;
count__56822 = G__57124;
i__56823 = G__57125;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__56881 = cljs.core.seq(js_requires);
var chunk__56882 = null;
var count__56883 = (0);
var i__56884 = (0);
while(true){
if((i__56884 < count__56883)){
var js_ns = chunk__56882.cljs$core$IIndexed$_nth$arity$2(null,i__56884);
var require_str_57126 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57126);


var G__57127 = seq__56881;
var G__57128 = chunk__56882;
var G__57129 = count__56883;
var G__57130 = (i__56884 + (1));
seq__56881 = G__57127;
chunk__56882 = G__57128;
count__56883 = G__57129;
i__56884 = G__57130;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56881);
if(temp__5735__auto__){
var seq__56881__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56881__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56881__$1);
var G__57131 = cljs.core.chunk_rest(seq__56881__$1);
var G__57132 = c__4556__auto__;
var G__57133 = cljs.core.count(c__4556__auto__);
var G__57134 = (0);
seq__56881 = G__57131;
chunk__56882 = G__57132;
count__56883 = G__57133;
i__56884 = G__57134;
continue;
} else {
var js_ns = cljs.core.first(seq__56881__$1);
var require_str_57135 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57135);


var G__57136 = cljs.core.next(seq__56881__$1);
var G__57137 = null;
var G__57138 = (0);
var G__57139 = (0);
seq__56881 = G__57136;
chunk__56882 = G__57137;
count__56883 = G__57138;
i__56884 = G__57139;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__56893){
var map__56894 = p__56893;
var map__56894__$1 = (((((!((map__56894 == null))))?(((((map__56894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56894):map__56894);
var msg = map__56894__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56894__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56894__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56897(s__56898){
return (new cljs.core.LazySeq(null,(function (){
var s__56898__$1 = s__56898;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56898__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__56903 = cljs.core.first(xs__6292__auto__);
var map__56903__$1 = (((((!((map__56903 == null))))?(((((map__56903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56903):map__56903);
var src = map__56903__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56903__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56903__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__56898__$1,map__56903,map__56903__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56894,map__56894__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56897_$_iter__56899(s__56900){
return (new cljs.core.LazySeq(null,((function (s__56898__$1,map__56903,map__56903__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56894,map__56894__$1,msg,info,reload_info){
return (function (){
var s__56900__$1 = s__56900;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56900__$1);
if(temp__5735__auto____$1){
var s__56900__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56900__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56900__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56902 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56901 = (0);
while(true){
if((i__56901 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__56901);
cljs.core.chunk_append(b__56902,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__57140 = (i__56901 + (1));
i__56901 = G__57140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56902),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56897_$_iter__56899(cljs.core.chunk_rest(s__56900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56902),null);
}
} else {
var warning = cljs.core.first(s__56900__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56897_$_iter__56899(cljs.core.rest(s__56900__$2)));
}
} else {
return null;
}
break;
}
});})(s__56898__$1,map__56903,map__56903__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56894,map__56894__$1,msg,info,reload_info))
,null,null));
});})(s__56898__$1,map__56903,map__56903__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56894,map__56894__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56897(cljs.core.rest(s__56898__$1)));
} else {
var G__57141 = cljs.core.rest(s__56898__$1);
s__56898__$1 = G__57141;
continue;
}
} else {
var G__57142 = cljs.core.rest(s__56898__$1);
s__56898__$1 = G__57142;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__56911_57143 = cljs.core.seq(warnings);
var chunk__56912_57144 = null;
var count__56913_57145 = (0);
var i__56914_57146 = (0);
while(true){
if((i__56914_57146 < count__56913_57145)){
var map__56923_57147 = chunk__56912_57144.cljs$core$IIndexed$_nth$arity$2(null,i__56914_57146);
var map__56923_57148__$1 = (((((!((map__56923_57147 == null))))?(((((map__56923_57147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56923_57147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56923_57147):map__56923_57147);
var w_57149 = map__56923_57148__$1;
var msg_57150__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923_57148__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923_57148__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923_57148__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923_57148__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57153)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57151),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57152),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57150__$1)].join(''));


var G__57154 = seq__56911_57143;
var G__57155 = chunk__56912_57144;
var G__57156 = count__56913_57145;
var G__57157 = (i__56914_57146 + (1));
seq__56911_57143 = G__57154;
chunk__56912_57144 = G__57155;
count__56913_57145 = G__57156;
i__56914_57146 = G__57157;
continue;
} else {
var temp__5735__auto___57158 = cljs.core.seq(seq__56911_57143);
if(temp__5735__auto___57158){
var seq__56911_57159__$1 = temp__5735__auto___57158;
if(cljs.core.chunked_seq_QMARK_(seq__56911_57159__$1)){
var c__4556__auto___57160 = cljs.core.chunk_first(seq__56911_57159__$1);
var G__57161 = cljs.core.chunk_rest(seq__56911_57159__$1);
var G__57162 = c__4556__auto___57160;
var G__57163 = cljs.core.count(c__4556__auto___57160);
var G__57164 = (0);
seq__56911_57143 = G__57161;
chunk__56912_57144 = G__57162;
count__56913_57145 = G__57163;
i__56914_57146 = G__57164;
continue;
} else {
var map__56925_57165 = cljs.core.first(seq__56911_57159__$1);
var map__56925_57166__$1 = (((((!((map__56925_57165 == null))))?(((((map__56925_57165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56925_57165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56925_57165):map__56925_57165);
var w_57167 = map__56925_57166__$1;
var msg_57168__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56925_57166__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56925_57166__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56925_57166__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56925_57166__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57171)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57169),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57170),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57168__$1)].join(''));


var G__57172 = cljs.core.next(seq__56911_57159__$1);
var G__57173 = null;
var G__57174 = (0);
var G__57175 = (0);
seq__56911_57143 = G__57172;
chunk__56912_57144 = G__57173;
count__56913_57145 = G__57174;
i__56914_57146 = G__57175;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__56892_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56892_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__56934){
var map__56935 = p__56934;
var map__56935__$1 = (((((!((map__56935 == null))))?(((((map__56935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56935):map__56935);
var msg = map__56935__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56935__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__56938 = cljs.core.seq(updates);
var chunk__56940 = null;
var count__56941 = (0);
var i__56942 = (0);
while(true){
if((i__56942 < count__56941)){
var path = chunk__56940.cljs$core$IIndexed$_nth$arity$2(null,i__56942);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57010_57176 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57014_57177 = null;
var count__57015_57178 = (0);
var i__57016_57179 = (0);
while(true){
if((i__57016_57179 < count__57015_57178)){
var node_57180 = chunk__57014_57177.cljs$core$IIndexed$_nth$arity$2(null,i__57016_57179);
if(cljs.core.not(node_57180.shadow$old)){
var path_match_57181 = shadow.cljs.devtools.client.browser.match_paths(node_57180.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57181)){
var new_link_57182 = (function (){var G__57027 = node_57180.cloneNode(true);
G__57027.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57181),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57027;
})();
(node_57180.shadow$old = true);

(new_link_57182.onload = ((function (seq__57010_57176,chunk__57014_57177,count__57015_57178,i__57016_57179,seq__56938,chunk__56940,count__56941,i__56942,new_link_57182,path_match_57181,node_57180,path,map__56935,map__56935__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57180);
});})(seq__57010_57176,chunk__57014_57177,count__57015_57178,i__57016_57179,seq__56938,chunk__56940,count__56941,i__56942,new_link_57182,path_match_57181,node_57180,path,map__56935,map__56935__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57181], 0));

goog.dom.insertSiblingAfter(new_link_57182,node_57180);


var G__57183 = seq__57010_57176;
var G__57184 = chunk__57014_57177;
var G__57185 = count__57015_57178;
var G__57186 = (i__57016_57179 + (1));
seq__57010_57176 = G__57183;
chunk__57014_57177 = G__57184;
count__57015_57178 = G__57185;
i__57016_57179 = G__57186;
continue;
} else {
var G__57187 = seq__57010_57176;
var G__57188 = chunk__57014_57177;
var G__57189 = count__57015_57178;
var G__57190 = (i__57016_57179 + (1));
seq__57010_57176 = G__57187;
chunk__57014_57177 = G__57188;
count__57015_57178 = G__57189;
i__57016_57179 = G__57190;
continue;
}
} else {
var G__57191 = seq__57010_57176;
var G__57192 = chunk__57014_57177;
var G__57193 = count__57015_57178;
var G__57194 = (i__57016_57179 + (1));
seq__57010_57176 = G__57191;
chunk__57014_57177 = G__57192;
count__57015_57178 = G__57193;
i__57016_57179 = G__57194;
continue;
}
} else {
var temp__5735__auto___57195 = cljs.core.seq(seq__57010_57176);
if(temp__5735__auto___57195){
var seq__57010_57196__$1 = temp__5735__auto___57195;
if(cljs.core.chunked_seq_QMARK_(seq__57010_57196__$1)){
var c__4556__auto___57197 = cljs.core.chunk_first(seq__57010_57196__$1);
var G__57198 = cljs.core.chunk_rest(seq__57010_57196__$1);
var G__57199 = c__4556__auto___57197;
var G__57200 = cljs.core.count(c__4556__auto___57197);
var G__57201 = (0);
seq__57010_57176 = G__57198;
chunk__57014_57177 = G__57199;
count__57015_57178 = G__57200;
i__57016_57179 = G__57201;
continue;
} else {
var node_57202 = cljs.core.first(seq__57010_57196__$1);
if(cljs.core.not(node_57202.shadow$old)){
var path_match_57203 = shadow.cljs.devtools.client.browser.match_paths(node_57202.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57203)){
var new_link_57204 = (function (){var G__57029 = node_57202.cloneNode(true);
G__57029.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57203),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57029;
})();
(node_57202.shadow$old = true);

(new_link_57204.onload = ((function (seq__57010_57176,chunk__57014_57177,count__57015_57178,i__57016_57179,seq__56938,chunk__56940,count__56941,i__56942,new_link_57204,path_match_57203,node_57202,seq__57010_57196__$1,temp__5735__auto___57195,path,map__56935,map__56935__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57202);
});})(seq__57010_57176,chunk__57014_57177,count__57015_57178,i__57016_57179,seq__56938,chunk__56940,count__56941,i__56942,new_link_57204,path_match_57203,node_57202,seq__57010_57196__$1,temp__5735__auto___57195,path,map__56935,map__56935__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57203], 0));

goog.dom.insertSiblingAfter(new_link_57204,node_57202);


var G__57205 = cljs.core.next(seq__57010_57196__$1);
var G__57206 = null;
var G__57207 = (0);
var G__57208 = (0);
seq__57010_57176 = G__57205;
chunk__57014_57177 = G__57206;
count__57015_57178 = G__57207;
i__57016_57179 = G__57208;
continue;
} else {
var G__57209 = cljs.core.next(seq__57010_57196__$1);
var G__57210 = null;
var G__57211 = (0);
var G__57212 = (0);
seq__57010_57176 = G__57209;
chunk__57014_57177 = G__57210;
count__57015_57178 = G__57211;
i__57016_57179 = G__57212;
continue;
}
} else {
var G__57213 = cljs.core.next(seq__57010_57196__$1);
var G__57214 = null;
var G__57215 = (0);
var G__57216 = (0);
seq__57010_57176 = G__57213;
chunk__57014_57177 = G__57214;
count__57015_57178 = G__57215;
i__57016_57179 = G__57216;
continue;
}
}
} else {
}
}
break;
}


var G__57217 = seq__56938;
var G__57218 = chunk__56940;
var G__57219 = count__56941;
var G__57220 = (i__56942 + (1));
seq__56938 = G__57217;
chunk__56940 = G__57218;
count__56941 = G__57219;
i__56942 = G__57220;
continue;
} else {
var G__57221 = seq__56938;
var G__57222 = chunk__56940;
var G__57223 = count__56941;
var G__57224 = (i__56942 + (1));
seq__56938 = G__57221;
chunk__56940 = G__57222;
count__56941 = G__57223;
i__56942 = G__57224;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56938);
if(temp__5735__auto__){
var seq__56938__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56938__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56938__$1);
var G__57225 = cljs.core.chunk_rest(seq__56938__$1);
var G__57226 = c__4556__auto__;
var G__57227 = cljs.core.count(c__4556__auto__);
var G__57228 = (0);
seq__56938 = G__57225;
chunk__56940 = G__57226;
count__56941 = G__57227;
i__56942 = G__57228;
continue;
} else {
var path = cljs.core.first(seq__56938__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57033_57229 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57037_57230 = null;
var count__57038_57231 = (0);
var i__57039_57232 = (0);
while(true){
if((i__57039_57232 < count__57038_57231)){
var node_57233 = chunk__57037_57230.cljs$core$IIndexed$_nth$arity$2(null,i__57039_57232);
if(cljs.core.not(node_57233.shadow$old)){
var path_match_57234 = shadow.cljs.devtools.client.browser.match_paths(node_57233.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57234)){
var new_link_57235 = (function (){var G__57068 = node_57233.cloneNode(true);
G__57068.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57234),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57068;
})();
(node_57233.shadow$old = true);

(new_link_57235.onload = ((function (seq__57033_57229,chunk__57037_57230,count__57038_57231,i__57039_57232,seq__56938,chunk__56940,count__56941,i__56942,new_link_57235,path_match_57234,node_57233,path,seq__56938__$1,temp__5735__auto__,map__56935,map__56935__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57233);
});})(seq__57033_57229,chunk__57037_57230,count__57038_57231,i__57039_57232,seq__56938,chunk__56940,count__56941,i__56942,new_link_57235,path_match_57234,node_57233,path,seq__56938__$1,temp__5735__auto__,map__56935,map__56935__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57234], 0));

goog.dom.insertSiblingAfter(new_link_57235,node_57233);


var G__57236 = seq__57033_57229;
var G__57237 = chunk__57037_57230;
var G__57238 = count__57038_57231;
var G__57239 = (i__57039_57232 + (1));
seq__57033_57229 = G__57236;
chunk__57037_57230 = G__57237;
count__57038_57231 = G__57238;
i__57039_57232 = G__57239;
continue;
} else {
var G__57240 = seq__57033_57229;
var G__57241 = chunk__57037_57230;
var G__57242 = count__57038_57231;
var G__57243 = (i__57039_57232 + (1));
seq__57033_57229 = G__57240;
chunk__57037_57230 = G__57241;
count__57038_57231 = G__57242;
i__57039_57232 = G__57243;
continue;
}
} else {
var G__57244 = seq__57033_57229;
var G__57245 = chunk__57037_57230;
var G__57246 = count__57038_57231;
var G__57247 = (i__57039_57232 + (1));
seq__57033_57229 = G__57244;
chunk__57037_57230 = G__57245;
count__57038_57231 = G__57246;
i__57039_57232 = G__57247;
continue;
}
} else {
var temp__5735__auto___57248__$1 = cljs.core.seq(seq__57033_57229);
if(temp__5735__auto___57248__$1){
var seq__57033_57249__$1 = temp__5735__auto___57248__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57033_57249__$1)){
var c__4556__auto___57250 = cljs.core.chunk_first(seq__57033_57249__$1);
var G__57251 = cljs.core.chunk_rest(seq__57033_57249__$1);
var G__57252 = c__4556__auto___57250;
var G__57253 = cljs.core.count(c__4556__auto___57250);
var G__57254 = (0);
seq__57033_57229 = G__57251;
chunk__57037_57230 = G__57252;
count__57038_57231 = G__57253;
i__57039_57232 = G__57254;
continue;
} else {
var node_57255 = cljs.core.first(seq__57033_57249__$1);
if(cljs.core.not(node_57255.shadow$old)){
var path_match_57256 = shadow.cljs.devtools.client.browser.match_paths(node_57255.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57256)){
var new_link_57257 = (function (){var G__57073 = node_57255.cloneNode(true);
G__57073.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57256),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57073;
})();
(node_57255.shadow$old = true);

(new_link_57257.onload = ((function (seq__57033_57229,chunk__57037_57230,count__57038_57231,i__57039_57232,seq__56938,chunk__56940,count__56941,i__56942,new_link_57257,path_match_57256,node_57255,seq__57033_57249__$1,temp__5735__auto___57248__$1,path,seq__56938__$1,temp__5735__auto__,map__56935,map__56935__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57255);
});})(seq__57033_57229,chunk__57037_57230,count__57038_57231,i__57039_57232,seq__56938,chunk__56940,count__56941,i__56942,new_link_57257,path_match_57256,node_57255,seq__57033_57249__$1,temp__5735__auto___57248__$1,path,seq__56938__$1,temp__5735__auto__,map__56935,map__56935__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57256], 0));

goog.dom.insertSiblingAfter(new_link_57257,node_57255);


var G__57258 = cljs.core.next(seq__57033_57249__$1);
var G__57259 = null;
var G__57260 = (0);
var G__57261 = (0);
seq__57033_57229 = G__57258;
chunk__57037_57230 = G__57259;
count__57038_57231 = G__57260;
i__57039_57232 = G__57261;
continue;
} else {
var G__57262 = cljs.core.next(seq__57033_57249__$1);
var G__57263 = null;
var G__57264 = (0);
var G__57265 = (0);
seq__57033_57229 = G__57262;
chunk__57037_57230 = G__57263;
count__57038_57231 = G__57264;
i__57039_57232 = G__57265;
continue;
}
} else {
var G__57266 = cljs.core.next(seq__57033_57249__$1);
var G__57267 = null;
var G__57268 = (0);
var G__57269 = (0);
seq__57033_57229 = G__57266;
chunk__57037_57230 = G__57267;
count__57038_57231 = G__57268;
i__57039_57232 = G__57269;
continue;
}
}
} else {
}
}
break;
}


var G__57270 = cljs.core.next(seq__56938__$1);
var G__57271 = null;
var G__57272 = (0);
var G__57273 = (0);
seq__56938 = G__57270;
chunk__56940 = G__57271;
count__56941 = G__57272;
i__56942 = G__57273;
continue;
} else {
var G__57274 = cljs.core.next(seq__56938__$1);
var G__57275 = null;
var G__57276 = (0);
var G__57277 = (0);
seq__56938 = G__57274;
chunk__56940 = G__57275;
count__56941 = G__57276;
i__56942 = G__57277;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__57077){
var map__57078 = p__57077;
var map__57078__$1 = (((((!((map__57078 == null))))?(((((map__57078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57078):map__57078);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57078__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__57080){
var map__57081 = p__57080;
var map__57081__$1 = (((((!((map__57081 == null))))?(((((map__57081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57081):map__57081);
var _ = map__57081__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57081__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__57083,done,error){
var map__57084 = p__57083;
var map__57084__$1 = (((((!((map__57084 == null))))?(((((map__57084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57084):map__57084);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57084__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__57086,done,error){
var map__57087 = p__57086;
var map__57087__$1 = (((((!((map__57087 == null))))?(((((map__57087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57087):map__57087);
var msg = map__57087__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57087__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57087__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57087__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__57089){
var map__57090 = p__57089;
var map__57090__$1 = (((((!((map__57090 == null))))?(((((map__57090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57090):map__57090);
var src = map__57090__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57090__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__57092 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__57092) : done.call(null,G__57092));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__57093){
var map__57094 = p__57093;
var map__57094__$1 = (((((!((map__57094 == null))))?(((((map__57094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57094):map__57094);
var msg__$1 = map__57094__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57094__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e57096){var ex = e57096;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__57097){
var map__57098 = p__57097;
var map__57098__$1 = (((((!((map__57098 == null))))?(((((map__57098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57098):map__57098);
var env = map__57098__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57098__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__57100){
var map__57101 = p__57100;
var map__57101__$1 = (((((!((map__57101 == null))))?(((((map__57101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57101):map__57101);
var msg = map__57101__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57101__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__57103){
var map__57104 = p__57103;
var map__57104__$1 = (((((!((map__57104 == null))))?(((((map__57104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57104):map__57104);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57104__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57104__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__57106){
var map__57107 = p__57106;
var map__57107__$1 = (((((!((map__57107 == null))))?(((((map__57107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57107):map__57107);
var svc = map__57107__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57107__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
