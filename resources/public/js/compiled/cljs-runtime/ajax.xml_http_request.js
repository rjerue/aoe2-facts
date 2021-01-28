goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__45835 = e.target.readyState;
var fexpr__45834 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__45834.cljs$core$IFn$_invoke$arity$1 ? fexpr__45834.cljs$core$IFn$_invoke$arity$1(G__45835) : fexpr__45834.call(null,G__45835));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__45841,handler){
var map__45842 = p__45841;
var map__45842__$1 = (((((!((map__45842 == null))))?(((((map__45842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45842):map__45842);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45842__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45842__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45842__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45842__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45842__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45842__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45842__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__45840_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__45840_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___45935 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___45935)){
var response_type_45936 = temp__5735__auto___45935;
(this$__$1.responseType = cljs.core.name(response_type_45936));
} else {
}

var seq__45859_45937 = cljs.core.seq(headers);
var chunk__45860_45938 = null;
var count__45861_45939 = (0);
var i__45862_45940 = (0);
while(true){
if((i__45862_45940 < count__45861_45939)){
var vec__45901_45941 = chunk__45860_45938.cljs$core$IIndexed$_nth$arity$2(null,i__45862_45940);
var k_45942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45901_45941,(0),null);
var v_45943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45901_45941,(1),null);
this$__$1.setRequestHeader(k_45942,v_45943);


var G__45945 = seq__45859_45937;
var G__45946 = chunk__45860_45938;
var G__45947 = count__45861_45939;
var G__45948 = (i__45862_45940 + (1));
seq__45859_45937 = G__45945;
chunk__45860_45938 = G__45946;
count__45861_45939 = G__45947;
i__45862_45940 = G__45948;
continue;
} else {
var temp__5735__auto___45949 = cljs.core.seq(seq__45859_45937);
if(temp__5735__auto___45949){
var seq__45859_45950__$1 = temp__5735__auto___45949;
if(cljs.core.chunked_seq_QMARK_(seq__45859_45950__$1)){
var c__4556__auto___45951 = cljs.core.chunk_first(seq__45859_45950__$1);
var G__45952 = cljs.core.chunk_rest(seq__45859_45950__$1);
var G__45953 = c__4556__auto___45951;
var G__45954 = cljs.core.count(c__4556__auto___45951);
var G__45955 = (0);
seq__45859_45937 = G__45952;
chunk__45860_45938 = G__45953;
count__45861_45939 = G__45954;
i__45862_45940 = G__45955;
continue;
} else {
var vec__45907_45956 = cljs.core.first(seq__45859_45950__$1);
var k_45957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45907_45956,(0),null);
var v_45958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45907_45956,(1),null);
this$__$1.setRequestHeader(k_45957,v_45958);


var G__45959 = cljs.core.next(seq__45859_45950__$1);
var G__45960 = null;
var G__45961 = (0);
var G__45962 = (0);
seq__45859_45937 = G__45959;
chunk__45860_45938 = G__45960;
count__45861_45939 = G__45961;
i__45862_45940 = G__45962;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
