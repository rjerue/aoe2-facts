goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__48624,match){
var map__48627 = p__48624;
var map__48627__$1 = (((((!((map__48627 == null))))?(((((map__48627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48627):map__48627);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48627__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48627__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48627__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__48637(s__48638){
return (new cljs.core.LazySeq(null,(function (){
var s__48638__$1 = s__48638;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48638__$1);
if(temp__5735__auto__){
var s__48638__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48638__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48638__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48640 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48639 = (0);
while(true){
if((i__48639 < size__4528__auto__)){
var vec__48643 = cljs.core._nth(c__4527__auto__,i__48639);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48643,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48643,(1),null);
cljs.core.chunk_append(b__48640,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__48696 = (i__48639 + (1));
i__48639 = G__48696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48640),reitit$frontend$controllers$get_identity_$_iter__48637(cljs.core.chunk_rest(s__48638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48640),null);
}
} else {
var vec__48649 = cljs.core.first(s__48638__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48649,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48649,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__48637(cljs.core.rest(s__48638__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__48655 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48655) : f.call(null,G__48655));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__48658_48713 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__48659_48714 = null;
var count__48660_48715 = (0);
var i__48661_48716 = (0);
while(true){
if((i__48661_48716 < count__48660_48715)){
var controller_48720 = chunk__48659_48714.cljs$core$IIndexed$_nth$arity$2(null,i__48661_48716);
reitit.frontend.controllers.apply_controller(controller_48720,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__48721 = seq__48658_48713;
var G__48722 = chunk__48659_48714;
var G__48723 = count__48660_48715;
var G__48724 = (i__48661_48716 + (1));
seq__48658_48713 = G__48721;
chunk__48659_48714 = G__48722;
count__48660_48715 = G__48723;
i__48661_48716 = G__48724;
continue;
} else {
var temp__5735__auto___48726 = cljs.core.seq(seq__48658_48713);
if(temp__5735__auto___48726){
var seq__48658_48727__$1 = temp__5735__auto___48726;
if(cljs.core.chunked_seq_QMARK_(seq__48658_48727__$1)){
var c__4556__auto___48728 = cljs.core.chunk_first(seq__48658_48727__$1);
var G__48730 = cljs.core.chunk_rest(seq__48658_48727__$1);
var G__48731 = c__4556__auto___48728;
var G__48732 = cljs.core.count(c__4556__auto___48728);
var G__48733 = (0);
seq__48658_48713 = G__48730;
chunk__48659_48714 = G__48731;
count__48660_48715 = G__48732;
i__48661_48716 = G__48733;
continue;
} else {
var controller_48737 = cljs.core.first(seq__48658_48727__$1);
reitit.frontend.controllers.apply_controller(controller_48737,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__48738 = cljs.core.next(seq__48658_48727__$1);
var G__48739 = null;
var G__48740 = (0);
var G__48741 = (0);
seq__48658_48713 = G__48738;
chunk__48659_48714 = G__48739;
count__48660_48715 = G__48740;
i__48661_48716 = G__48741;
continue;
}
} else {
}
}
break;
}

var seq__48673_48742 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__48674_48743 = null;
var count__48675_48744 = (0);
var i__48676_48745 = (0);
while(true){
if((i__48676_48745 < count__48675_48744)){
var controller_48749 = chunk__48674_48743.cljs$core$IIndexed$_nth$arity$2(null,i__48676_48745);
reitit.frontend.controllers.apply_controller(controller_48749,new cljs.core.Keyword(null,"start","start",-355208981));


var G__48750 = seq__48673_48742;
var G__48751 = chunk__48674_48743;
var G__48752 = count__48675_48744;
var G__48753 = (i__48676_48745 + (1));
seq__48673_48742 = G__48750;
chunk__48674_48743 = G__48751;
count__48675_48744 = G__48752;
i__48676_48745 = G__48753;
continue;
} else {
var temp__5735__auto___48754 = cljs.core.seq(seq__48673_48742);
if(temp__5735__auto___48754){
var seq__48673_48755__$1 = temp__5735__auto___48754;
if(cljs.core.chunked_seq_QMARK_(seq__48673_48755__$1)){
var c__4556__auto___48756 = cljs.core.chunk_first(seq__48673_48755__$1);
var G__48757 = cljs.core.chunk_rest(seq__48673_48755__$1);
var G__48758 = c__4556__auto___48756;
var G__48759 = cljs.core.count(c__4556__auto___48756);
var G__48760 = (0);
seq__48673_48742 = G__48757;
chunk__48674_48743 = G__48758;
count__48675_48744 = G__48759;
i__48676_48745 = G__48760;
continue;
} else {
var controller_48761 = cljs.core.first(seq__48673_48755__$1);
reitit.frontend.controllers.apply_controller(controller_48761,new cljs.core.Keyword(null,"start","start",-355208981));


var G__48763 = cljs.core.next(seq__48673_48755__$1);
var G__48764 = null;
var G__48765 = (0);
var G__48766 = (0);
seq__48673_48742 = G__48763;
chunk__48674_48743 = G__48764;
count__48675_48744 = G__48765;
i__48676_48745 = G__48766;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
