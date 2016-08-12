// Compiled by ClojureScript 1.8.51 {}
goog.provide('scrapfab.core');
goog.require('cljs.core');
goog.require('scrapfab.menu');
goog.require('scrapfab.images');
goog.require('scrapfab.desc');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
scrapfab.core.logo = (function scrapfab$core$logo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.logo","div.logo",281122689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.logo-scrap","span.logo-scrap",-769835197),"scrap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.logo-fab","span.logo-fab",-838437532),"fab"], null)], null);
});
scrapfab.core.main_navigation = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/about",new cljs.core.Keyword(null,"label","label",1718410804),"About"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/services",new cljs.core.Keyword(null,"label","label",1718410804),"Services"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/contact",new cljs.core.Keyword(null,"label","label",1718410804),"Contact"], null)], null);
scrapfab.core.scrapfab_layout = (function scrapfab$core$scrapfab_layout(current_url,body){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-g","div.pure-g",1950568742),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-24","div.pure-u-1-24",986419631)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-22-24","div.pure-u-22-24",-45190980),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrapfab.menu.navigation,new cljs.core.Keyword(null,"items","items",1031954938),scrapfab.core.main_navigation,new cljs.core.Keyword(null,"brand","brand",557863343),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrapfab.core.logo], null),new cljs.core.Keyword(null,"current-url","current-url",-1470200930),current_url,new cljs.core.Keyword(null,"class","class",-2030961996),"main-menu"], null)], null),body], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-24","div.pure-u-1-24",986419631)], null)], null);
});
scrapfab.core.about_page = (function scrapfab$core$about_page(url,_,media){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"about us"], null);
});
scrapfab.core.contact_page = (function scrapfab$core$contact_page(url,_,media){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"contact us"], null);
});
scrapfab.core.service_navigation = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/services/metal",new cljs.core.Keyword(null,"label","label",1718410804),"Metal Fabrication"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/services/prop",new cljs.core.Keyword(null,"label","label",1718410804),"Prop Fabrication"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/services/set",new cljs.core.Keyword(null,"label","label",1718410804),"Set Design"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/services/sculpture",new cljs.core.Keyword(null,"label","label",1718410804),"Sculpture"], null)], null);
scrapfab.core.service_layout = (function scrapfab$core$service_layout(url,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrapfab.menu.navigation,new cljs.core.Keyword(null,"items","items",1031954938),scrapfab.core.service_navigation,new cljs.core.Keyword(null,"current-url","current-url",-1470200930),url,new cljs.core.Keyword(null,"class","class",-2030961996),"service-menu"], null),body], null);
});
scrapfab.core.gallery = (function scrapfab$core$gallery(images){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (owner){
return perfect_gallery(reagent.core.dom_node.call(null,owner));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (images__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gallery","div.gallery",875501500),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"hidden"], null)], null),cljs.core.doall.call(null,(function (){var iter__22486__auto__ = (function scrapfab$core$gallery_$_iter__40472(s__40473){
return (new cljs.core.LazySeq(null,(function (){
var s__40473__$1 = s__40473;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40473__$1);
if(temp__4657__auto__){
var s__40473__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40473__$2)){
var c__22484__auto__ = cljs.core.chunk_first.call(null,s__40473__$2);
var size__22485__auto__ = cljs.core.count.call(null,c__22484__auto__);
var b__40475 = cljs.core.chunk_buffer.call(null,size__22485__auto__);
if((function (){var i__40474 = (0);
while(true){
if((i__40474 < size__22485__auto__)){
var map__40480 = cljs.core._nth.call(null,c__22484__auto__,i__40474);
var map__40480__$1 = ((((!((map__40480 == null)))?((((map__40480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40480):map__40480);
var src = cljs.core.get.call(null,map__40480__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
cljs.core.chunk_append.call(null,b__40475,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gallery-img","img.gallery-img",1494573177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),src], null)));

var G__40484 = (i__40474 + (1));
i__40474 = G__40484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40475),scrapfab$core$gallery_$_iter__40472.call(null,cljs.core.chunk_rest.call(null,s__40473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40475),null);
}
} else {
var map__40482 = cljs.core.first.call(null,s__40473__$2);
var map__40482__$1 = ((((!((map__40482 == null)))?((((map__40482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40482):map__40482);
var src = cljs.core.get.call(null,map__40482__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gallery-img","img.gallery-img",1494573177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),src], null)),scrapfab$core$gallery_$_iter__40472.call(null,cljs.core.rest.call(null,s__40473__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22486__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"rate","rate",-1428659698),cljs.core._GT_,images__$1));
})())], null);
})], null));
});
scrapfab.core.service_index = (function scrapfab$core$service_index(url,_,media){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrapfab.core.service_layout,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"We provide all the services"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrapfab.core.gallery,media], null)], null)], null);
});
scrapfab.core.service_page = (function scrapfab$core$service_page(url,p__40485,media){
var map__40488 = p__40485;
var map__40488__$1 = ((((!((map__40488 == null)))?((((map__40488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40488):map__40488);
var title = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"title","title",636505583));
var desc = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrapfab.core.service_layout,url,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),desc], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrapfab.core.gallery,media], null)], null)], null);
});
scrapfab.core.site_map = new cljs.core.PersistentArrayMap(null, 7, ["/about",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"About",new cljs.core.Keyword(null,"render","render",-1408033454),scrapfab.core.about_page], null),"/contact",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Contact",new cljs.core.Keyword(null,"render","render",-1408033454),scrapfab.core.contact_page], null),"/services",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Services",new cljs.core.Keyword(null,"render","render",-1408033454),scrapfab.core.service_index], null),"/services/metal",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Metal Fabrication",new cljs.core.Keyword(null,"desc","desc",2093485764),scrapfab.desc.metal,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metal","metal",-1749068480)], null),new cljs.core.Keyword(null,"render","render",-1408033454),scrapfab.core.service_page], null),"/services/prop",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Prop Fabrication",new cljs.core.Keyword(null,"desc","desc",2093485764),scrapfab.desc.prop,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.Keyword(null,"render","render",-1408033454),scrapfab.core.service_page], null),"/services/set",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Set Fabrication",new cljs.core.Keyword(null,"desc","desc",2093485764),scrapfab.desc.sets,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554)], null),new cljs.core.Keyword(null,"render","render",-1408033454),scrapfab.core.service_page], null),"/services/sculpture",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Sculpture",new cljs.core.Keyword(null,"desc","desc",2093485764),scrapfab.desc.sculpt,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sculpt","sculpt",-1930727524)], null),new cljs.core.Keyword(null,"render","render",-1408033454),scrapfab.core.service_page], null)], null);
scrapfab.core.scrapfab = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layout","layout",-2120940921),scrapfab.core.scrapfab_layout,new cljs.core.Keyword(null,"site-map","site-map",2115840195),scrapfab.core.site_map,new cljs.core.Keyword(null,"media-library","media-library",745012467),scrapfab.images.images], null);

//# sourceMappingURL=core.js.map?rel=1468903445544