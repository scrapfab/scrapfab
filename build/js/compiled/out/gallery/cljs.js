// Compiled by ClojureScript 1.8.51 {}
goog.provide('gallery.cljs');
goog.require('cljs.core');
gallery.cljs.gallery = (function gallery$cljs$gallery(images){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-g.gallery","div.pure-g.gallery",-1538058044),cljs.core.doall.call(null,(function (){var iter__22486__auto__ = (function gallery$cljs$gallery_$_iter__32660(s__32661){
return (new cljs.core.LazySeq(null,(function (){
var s__32661__$1 = s__32661;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32661__$1);
if(temp__4657__auto__){
var s__32661__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32661__$2)){
var c__22484__auto__ = cljs.core.chunk_first.call(null,s__32661__$2);
var size__22485__auto__ = cljs.core.count.call(null,c__22484__auto__);
var b__32663 = cljs.core.chunk_buffer.call(null,size__22485__auto__);
if((function (){var i__32662 = (0);
while(true){
if((i__32662 < size__22485__auto__)){
var img = cljs.core._nth.call(null,c__22484__auto__,i__32662);
cljs.core.chunk_append.call(null,b__32663,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-3.gallery-cell","div.pure-u-1-3.gallery-cell",-1380435753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gallery-img","img.gallery-img",1494573177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(img)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(img)], null)));

var G__32664 = (i__32662 + (1));
i__32662 = G__32664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32663),gallery$cljs$gallery_$_iter__32660.call(null,cljs.core.chunk_rest.call(null,s__32661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32663),null);
}
} else {
var img = cljs.core.first.call(null,s__32661__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-3.gallery-cell","div.pure-u-1-3.gallery-cell",-1380435753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gallery-img","img.gallery-img",1494573177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(img)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(img)], null)),gallery$cljs$gallery_$_iter__32660.call(null,cljs.core.rest.call(null,s__32661__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22486__auto__.call(null,images);
})())], null);
});

//# sourceMappingURL=cljs.js.map?rel=1467841081967