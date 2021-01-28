goog.provide('aoe2.views');
aoe2.views.civilization_component = (function aoe2$views$civilization_component(p__55609){
var map__55610 = p__55609;
var map__55610__$1 = (((((!((map__55610 == null))))?(((((map__55610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55610):map__55610);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55610__$1,"id");
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55610__$1,"name");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"value","value",305978217),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),aoe2.routes.url_for(new cljs.core.Keyword(null,"civ-panel","civ-panel",-1265083186),new cljs.core.Keyword(null,"slug","slug",2029314850),id)], null),name], null)], null);
});
aoe2.views.civilization_link = (function aoe2$views$civilization_link(){
var civilizations = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.subs","civilizations","aoe2.subs/civilizations",-1066831548)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"civiliztions",new cljs.core.Keyword(null,"id","id",-1388402092),"civilizations"], null),(function (){var civ_seq = cljs.core.vals(cljs.core.deref(civilizations));
if(cljs.core.empty_QMARK_(civ_seq)){
return "Loading...";
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(aoe2.views.civilization_component,civ_seq);
}
})()], null);
});
aoe2.views.home_panel = (function aoe2$views$home_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Select a civilization to learn more"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aoe2.views.civilization_link], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null);
});
aoe2.views.about_panel = (function aoe2$views$about_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"This is the About Page."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),aoe2.routes.url_for(new cljs.core.Keyword(null,"home-panel","home-panel",1226198754))], null),"go to Home Page"], null)], null)], null);
});
aoe2.views.content_list = (function aoe2$views$content_list(p__55614){
var map__55615 = p__55614;
var map__55615__$1 = (((((!((map__55615 == null))))?(((((map__55615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55615):map__55615);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55615__$1,new cljs.core.Keyword(null,"title","title",636505583));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55615__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function aoe2$views$content_list_$_iter__55617(s__55618){
return (new cljs.core.LazySeq(null,(function (){
var s__55618__$1 = s__55618;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55618__$1);
if(temp__5735__auto__){
var s__55618__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55618__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55618__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55620 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55619 = (0);
while(true){
if((i__55619 < size__4528__auto__)){
var vec__55621 = cljs.core._nth(c__4527__auto__,i__55619);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55621,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55621,(1),null);
cljs.core.chunk_append(b__55620,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null),value], null));

var G__55636 = (i__55619 + (1));
i__55619 = G__55636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55620),aoe2$views$content_list_$_iter__55617(cljs.core.chunk_rest(s__55618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55620),null);
}
} else {
var vec__55624 = cljs.core.first(s__55618__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55624,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55624,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null),value], null),aoe2$views$content_list_$_iter__55617(cljs.core.rest(s__55618__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__55612_SHARP_,p2__55613_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__55612_SHARP_,p2__55613_SHARP_],null));
}),elements));
})()], null)], null);
});
aoe2.views.format_unit = (function aoe2$views$format_unit(unit){
if(cljs.core.truth_((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loading","loading",-737050189)) : unit.call(null,new cljs.core.Keyword(null,"loading","loading",-737050189))))){
return "Loading...";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1("name") : unit.call(null,"name")))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1("description") : unit.call(null,"description"))),"."].join('');
}
});
aoe2.views.unit_content = (function aoe2$views$unit_content(unit_id){
var unit = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.subs","unit","aoe2.subs/unit",-2014957267),unit_id], null));
if(cljs.core.truth_(cljs.core.deref(unit))){
return aoe2.views.format_unit(cljs.core.deref(unit));
} else {
return null;
}
});
aoe2.views.civ_panel = (function aoe2$views$civ_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var id = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.subs","active-civilization","aoe2.subs/active-civilization",353850234)], null));
if((cljs.core.deref(id) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Error: 404"], null);
} else {
var active = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.subs","civilization","aoe2.subs/civilization",-333727623),cljs.core.deref(id)], null));
if((cljs.core.deref(active) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Error: 404"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Civilization: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__55629 = cljs.core.deref(active);
return (fexpr__55629.cljs$core$IFn$_invoke$arity$1 ? fexpr__55629.cljs$core$IFn$_invoke$arity$1("name") : fexpr__55629.call(null,"name"));
})())].join('')], null),(cljs.core.truth_((function (){var fexpr__55630 = cljs.core.deref(active);
return (fexpr__55630.cljs$core$IFn$_invoke$arity$1 ? fexpr__55630.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loading","loading",-737050189)) : fexpr__55630.call(null,new cljs.core.Keyword(null,"loading","loading",-737050189)));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aoe2.views.content_list,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Bonuses:",new cljs.core.Keyword(null,"elements","elements",657646735),(function (){var fexpr__55631 = cljs.core.deref(active);
return (fexpr__55631.cljs$core$IFn$_invoke$arity$1 ? fexpr__55631.cljs$core$IFn$_invoke$arity$1("civilization_bonus") : fexpr__55631.call(null,"civilization_bonus"));
})()], null)], null),(function (){var unit_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55627_SHARP_){
return aoe2.lib.final_slug(p1__55627_SHARP_);
}),(function (){var fexpr__55632 = cljs.core.deref(active);
return (fexpr__55632.cljs$core$IFn$_invoke$arity$1 ? fexpr__55632.cljs$core$IFn$_invoke$arity$1("unique_unit") : fexpr__55632.call(null,"unique_unit"));
})());
var elements = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(aoe2.views.unit_content,unit_ids);
if(((cljs.core.empty_QMARK_(unit_ids)) && (cljs.core.not((function (){var fexpr__55634 = cljs.core.deref(active);
return (fexpr__55634.cljs$core$IFn$_invoke$arity$1 ? fexpr__55634.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loading","loading",-737050189)) : fexpr__55634.call(null,new cljs.core.Keyword(null,"loading","loading",-737050189)));
})())))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No unique units"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aoe2.views.content_list,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Unique Units:",new cljs.core.Keyword(null,"elements","elements",657646735),elements], null)], null);
}
})()], null))], null);
}
}
})()], null);
});
aoe2.views.panels = (function aoe2$views$panels(panel_name){
var G__55635 = panel_name;
var G__55635__$1 = (((G__55635 instanceof cljs.core.Keyword))?G__55635.fqn:null);
switch (G__55635__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aoe2.views.home_panel], null);

break;
case "about-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aoe2.views.about_panel], null);

break;
case "civ-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aoe2.views.civ_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
aoe2.views.show_panel = (function aoe2$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aoe2.views.panels,panel_name], null);
});
aoe2.views.main_panel = (function aoe2$views$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),aoe2.routes.url_for(new cljs.core.Keyword(null,"home-panel","home-panel",1226198754))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Age of Empires 2 Facts"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"AoE 2 is the second best video game ever (the OG KOTOR is #1), but it has the best API!"], null)], null),(function (){var active_panel = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("aoe2.subs","active-panel","aoe2.subs/active-panel",67419348)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aoe2.views.show_panel,cljs.core.deref(active_panel)], null)], null);
})()], null);
});

//# sourceMappingURL=aoe2.views.js.map
