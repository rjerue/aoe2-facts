goog.provide('aoe2.core');
aoe2.core.dev_setup = (function aoe2$core$dev_setup(){
if(aoe2.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
aoe2.core.mount_root = (function aoe2$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aoe2.views.main_panel], null),root_el);
});
aoe2.core.init = (function aoe2$core$init(){
aoe2.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.events","initialize-db","aoe2.events/initialize-db",1889137380)], null));

aoe2.core.dev_setup();

return aoe2.core.mount_root();
});

//# sourceMappingURL=aoe2.core.js.map
