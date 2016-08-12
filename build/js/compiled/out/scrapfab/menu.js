// Compiled by ClojureScript 1.8.51 {}
goog.provide('scrapfab.menu');
goog.require('cljs.core');
scrapfab.menu.sub_url_QMARK_ = (function scrapfab$menu$sub_url_QMARK_(parent_url,url){
var temp__4657__auto__ = RegExp(url).exec(parent_url);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core._EQ_.call(null,m.index,(0));
} else {
return null;
}
});
scrapfab.menu.class_opts = (function scrapfab$menu$class_opts(class$){
if(cljs.core.some_QMARK_.call(null,class$)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null);
} else {
return null;
}
});
scrapfab.menu.brand_heading = (function scrapfab$menu$brand_heading(var_args){
var args__22783__auto__ = [];
var len__22776__auto___38839 = arguments.length;
var i__22777__auto___38840 = (0);
while(true){
if((i__22777__auto___38840 < len__22776__auto___38839)){
args__22783__auto__.push((arguments[i__22777__auto___38840]));

var G__38841 = (i__22777__auto___38840 + (1));
i__22777__auto___38840 = G__38841;
continue;
} else {
}
break;
}

var argseq__22784__auto__ = ((((0) < args__22783__auto__.length))?(new cljs.core.IndexedSeq(args__22783__auto__.slice((0)),(0),null)):null);
return scrapfab.menu.brand_heading.cljs$core$IFn$_invoke$arity$variadic(argseq__22784__auto__);
});

scrapfab.menu.brand_heading.cljs$core$IFn$_invoke$arity$variadic = (function (p__38836){
var map__38837 = p__38836;
var map__38837__$1 = ((((!((map__38837 == null)))?((((map__38837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38837):map__38837);
var class$ = cljs.core.get.call(null,map__38837__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var brand = cljs.core.get.call(null,map__38837__$1,new cljs.core.Keyword(null,"brand","brand",557863343));
if(cljs.core.some_QMARK_.call(null,brand)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-menu-heading","div.pure-menu-heading",423250207),scrapfab.menu.class_opts.call(null,class$),brand], null);
} else {
return null;
}
});

scrapfab.menu.brand_heading.cljs$lang$maxFixedArity = (0);

scrapfab.menu.brand_heading.cljs$lang$applyTo = (function (seq38835){
return scrapfab.menu.brand_heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38835));
});
scrapfab.menu.horizontal_menu = (function scrapfab$menu$horizontal_menu(var_args){
var args__22783__auto__ = [];
var len__22776__auto___38850 = arguments.length;
var i__22777__auto___38851 = (0);
while(true){
if((i__22777__auto___38851 < len__22776__auto___38850)){
args__22783__auto__.push((arguments[i__22777__auto___38851]));

var G__38852 = (i__22777__auto___38851 + (1));
i__22777__auto___38851 = G__38852;
continue;
} else {
}
break;
}

var argseq__22784__auto__ = ((((0) < args__22783__auto__.length))?(new cljs.core.IndexedSeq(args__22783__auto__.slice((0)),(0),null)):null);
return scrapfab.menu.horizontal_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__22784__auto__);
});

scrapfab.menu.horizontal_menu.cljs$core$IFn$_invoke$arity$variadic = (function (p__38843){
var map__38844 = p__38843;
var map__38844__$1 = ((((!((map__38844 == null)))?((((map__38844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38844):map__38844);
var items = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var current_id = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"current-id","current-id",210783650));
var label_fn = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),((function (map__38844,map__38844__$1,items,current_id){
return (function (item){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item);
});})(map__38844,map__38844__$1,items,current_id))
);
var id_fn = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),((function (map__38844,map__38844__$1,items,current_id,label_fn){
return (function (item){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
});})(map__38844,map__38844__$1,items,current_id,label_fn))
);
var url_fn = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"url-fn","url-fn",1228268268),cljs.core.constantly.call(null,"#"));
var selected_fn = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"selected-fn","selected-fn",-245239586),((function (map__38844,map__38844__$1,items,current_id,label_fn,id_fn,url_fn){
return (function (item){
return cljs.core._EQ_.call(null,current_id,id_fn.call(null,item));
});})(map__38844,map__38844__$1,items,current_id,label_fn,id_fn,url_fn))
);
var on_change = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var class$ = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var brand = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"brand","brand",557863343));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-menu.pure-menu-horizontal","div.pure-menu.pure-menu-horizontal",-102400397),scrapfab.menu.class_opts.call(null,class$),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrapfab.menu.brand_heading,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"brand","brand",557863343),brand], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.pure-menu-list","ul.pure-menu-list",1943879978),scrapfab.menu.class_opts.call(null,class$),cljs.core.doall.call(null,(function (){var iter__22486__auto__ = ((function (map__38844,map__38844__$1,items,current_id,label_fn,id_fn,url_fn,selected_fn,on_change,class$,brand){
return (function scrapfab$menu$iter__38846(s__38847){
return (new cljs.core.LazySeq(null,((function (map__38844,map__38844__$1,items,current_id,label_fn,id_fn,url_fn,selected_fn,on_change,class$,brand){
return (function (){
var s__38847__$1 = s__38847;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38847__$1);
if(temp__4657__auto__){
var s__38847__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38847__$2)){
var c__22484__auto__ = cljs.core.chunk_first.call(null,s__38847__$2);
var size__22485__auto__ = cljs.core.count.call(null,c__22484__auto__);
var b__38849 = cljs.core.chunk_buffer.call(null,size__22485__auto__);
if((function (){var i__38848 = (0);
while(true){
if((i__38848 < size__22485__auto__)){
var item = cljs.core._nth.call(null,c__22484__auto__,i__38848);
cljs.core.chunk_append.call(null,b__38849,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pure-menu-item","li.pure-menu-item",1104592210),scrapfab.menu.class_opts.call(null,[cljs.core.str(class$),cljs.core.str((cljs.core.truth_(selected_fn.call(null,item))?" pure-menu-selected":null))].join('')),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-link","a.pure-menu-link",1231931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),url_fn.call(null,item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38848,item,c__22484__auto__,size__22485__auto__,b__38849,s__38847__$2,temp__4657__auto__,map__38844,map__38844__$1,items,current_id,label_fn,id_fn,url_fn,selected_fn,on_change,class$,brand){
return (function (e){
e.preventDefault();

return on_change.call(null,item);
});})(i__38848,item,c__22484__auto__,size__22485__auto__,b__38849,s__38847__$2,temp__4657__auto__,map__38844,map__38844__$1,items,current_id,label_fn,id_fn,url_fn,selected_fn,on_change,class$,brand))
], null),label_fn.call(null,item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id_fn.call(null,item)], null)));

var G__38853 = (i__38848 + (1));
i__38848 = G__38853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38849),scrapfab$menu$iter__38846.call(null,cljs.core.chunk_rest.call(null,s__38847__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38849),null);
}
} else {
var item = cljs.core.first.call(null,s__38847__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pure-menu-item","li.pure-menu-item",1104592210),scrapfab.menu.class_opts.call(null,[cljs.core.str(class$),cljs.core.str((cljs.core.truth_(selected_fn.call(null,item))?" pure-menu-selected":null))].join('')),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-link","a.pure-menu-link",1231931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),url_fn.call(null,item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__38847__$2,temp__4657__auto__,map__38844,map__38844__$1,items,current_id,label_fn,id_fn,url_fn,selected_fn,on_change,class$,brand){
return (function (e){
e.preventDefault();

return on_change.call(null,item);
});})(item,s__38847__$2,temp__4657__auto__,map__38844,map__38844__$1,items,current_id,label_fn,id_fn,url_fn,selected_fn,on_change,class$,brand))
], null),label_fn.call(null,item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id_fn.call(null,item)], null)),scrapfab$menu$iter__38846.call(null,cljs.core.rest.call(null,s__38847__$2)));
}
} else {
return null;
}
break;
}
});})(map__38844,map__38844__$1,items,current_id,label_fn,id_fn,url_fn,selected_fn,on_change,class$,brand))
,null,null));
});})(map__38844,map__38844__$1,items,current_id,label_fn,id_fn,url_fn,selected_fn,on_change,class$,brand))
;
return iter__22486__auto__.call(null,items);
})())], null)], null);
});

scrapfab.menu.horizontal_menu.cljs$lang$maxFixedArity = (0);

scrapfab.menu.horizontal_menu.cljs$lang$applyTo = (function (seq38842){
return scrapfab.menu.horizontal_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38842));
});
scrapfab.menu.navigation = (function scrapfab$menu$navigation(var_args){
var args__22783__auto__ = [];
var len__22776__auto___38858 = arguments.length;
var i__22777__auto___38859 = (0);
while(true){
if((i__22777__auto___38859 < len__22776__auto___38858)){
args__22783__auto__.push((arguments[i__22777__auto___38859]));

var G__38860 = (i__22777__auto___38859 + (1));
i__22777__auto___38859 = G__38860;
continue;
} else {
}
break;
}

var argseq__22784__auto__ = ((((0) < args__22783__auto__.length))?(new cljs.core.IndexedSeq(args__22783__auto__.slice((0)),(0),null)):null);
return scrapfab.menu.navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__22784__auto__);
});

scrapfab.menu.navigation.cljs$core$IFn$_invoke$arity$variadic = (function (p__38855){
var map__38856 = p__38855;
var map__38856__$1 = ((((!((map__38856 == null)))?((((map__38856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38856):map__38856);
var current_url = cljs.core.get.call(null,map__38856__$1,new cljs.core.Keyword(null,"current-url","current-url",-1470200930));
var items = cljs.core.get.call(null,map__38856__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var class$ = cljs.core.get.call(null,map__38856__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var brand = cljs.core.get.call(null,map__38856__$1,new cljs.core.Keyword(null,"brand","brand",557863343));
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrapfab.menu.horizontal_menu,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"brand","brand",557863343),brand,new cljs.core.Keyword(null,"current-id","current-id",210783650),current_url,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url-fn","url-fn",1228268268),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"selected-fn","selected-fn",-245239586),((function (map__38856,map__38856__$1,current_url,items,class$,brand){
return (function (item){
return scrapfab.menu.sub_url_QMARK_.call(null,current_url,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item));
});})(map__38856,map__38856__$1,current_url,items,class$,brand))
], null);
});

scrapfab.menu.navigation.cljs$lang$maxFixedArity = (0);

scrapfab.menu.navigation.cljs$lang$applyTo = (function (seq38854){
return scrapfab.menu.navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38854));
});

//# sourceMappingURL=menu.js.map?rel=1468902617658