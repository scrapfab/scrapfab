// Compiled by ClojureScript 1.8.51 {}
goog.provide('scrapfab.build');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('reagent.core');
goog.require('clojure.set');
goog.require('scrapfab.core');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof scrapfab.build.fs !== 'undefined'){
} else {
scrapfab.build.fs = cljs.nodejs.require.call(null,"fs");
}
if(typeof scrapfab.build.file_path !== 'undefined'){
} else {
scrapfab.build.file_path = cljs.nodejs.require.call(null,"path");
}
if(typeof scrapfab.build.mkdirp !== 'undefined'){
} else {
scrapfab.build.mkdirp = cljs.nodejs.require.call(null,"mkdirp");
}
/**
 * Converts the url of a page to a filename, relative to the root
 *   directory of the site.
 */
scrapfab.build.url__GT_path = (function scrapfab$build$url__GT_path(url){
return [cljs.core.str("build"),cljs.core.str(clojure.string.join.call(null,"/",clojure.string.split.call(null,url,"/"))),cljs.core.str(".html")].join('');
});
/**
 * Returns true if all tags in given as the first argument are associated
 *   with the media given as the second argument.
 */
scrapfab.build.tagged_media_QMARK_ = (function scrapfab$build$tagged_media_QMARK_(tags,media){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,tags),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(media));
});
/**
 * Given a site-map page value as the first argument and a seq of
 *   media as the first argument, return a seq of media associated with
 *   that page.
 */
scrapfab.build.page_media = (function scrapfab$build$page_media(p__41974,media_library){
var map__41977 = p__41974;
var map__41977__$1 = ((((!((map__41977 == null)))?((((map__41977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41977):map__41977);
var page = map__41977__$1;
var tags = cljs.core.get.call(null,map__41977__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
return cljs.core.filter.call(null,((function (map__41977,map__41977__$1,page,tags){
return (function (p1__41973_SHARP_){
return scrapfab.build.tagged_media_QMARK_.call(null,tags,p1__41973_SHARP_);
});})(map__41977,map__41977__$1,page,tags))
,media_library);
});
scrapfab.build.root_layout = (function scrapfab$build$root_layout(body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"head","head",-771383919)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),body], null)], null);
});
/**
 * Given a site-map page value as the first argument and a seq of
 *   media associated with the page as its second argument, return the
 *   rendered body HTML of the page.
 */
scrapfab.build.render_page = (function scrapfab$build$render_page(layout,url,p__41979,media){
var map__41982 = p__41979;
var map__41982__$1 = ((((!((map__41982 == null)))?((((map__41982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41982):map__41982);
var page = map__41982__$1;
var render = cljs.core.get.call(null,map__41982__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
return reagent.core.render_to_string.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrapfab.build.root_layout,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout,url,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,url,cljs.core.dissoc.call(null,page,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"tags","tags",1771418977)),media], null)], null)], null));
});
/**
 * Given a URL and the rendered HTML for that URL, write the webpage
 *   to the file system.
 */
scrapfab.build.write_page_BANG_ = (function scrapfab$build$write_page_BANG_(url,html){
var path = scrapfab.build.url__GT_path.call(null,url);
return scrapfab.build.mkdirp.mkdirp(scrapfab.build.file_path.dirname(path),((function (path){
return (function (){
return scrapfab.build.fs.writeFileSync(path,html);
});})(path))
);
});
scrapfab.build._main = (function scrapfab$build$_main(var_args){
var args__22783__auto__ = [];
var len__22776__auto___41993 = arguments.length;
var i__22777__auto___41994 = (0);
while(true){
if((i__22777__auto___41994 < len__22776__auto___41993)){
args__22783__auto__.push((arguments[i__22777__auto___41994]));

var G__41995 = (i__22777__auto___41994 + (1));
i__22777__auto___41994 = G__41995;
continue;
} else {
}
break;
}

var argseq__22784__auto__ = ((((0) < args__22783__auto__.length))?(new cljs.core.IndexedSeq(args__22783__auto__.slice((0)),(0),null)):null);
return scrapfab.build._main.cljs$core$IFn$_invoke$arity$variadic(argseq__22784__auto__);
});

scrapfab.build._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var map__41985 = scrapfab.core.scrapfab;
var map__41985__$1 = ((((!((map__41985 == null)))?((((map__41985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41985):map__41985);
var site_map = cljs.core.get.call(null,map__41985__$1,new cljs.core.Keyword(null,"site-map","site-map",2115840195));
var layout = cljs.core.get.call(null,map__41985__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var media_library = cljs.core.get.call(null,map__41985__$1,new cljs.core.Keyword(null,"media-library","media-library",745012467));
var seq__41987 = cljs.core.seq.call(null,site_map);
var chunk__41988 = null;
var count__41989 = (0);
var i__41990 = (0);
while(true){
if((i__41990 < count__41989)){
var vec__41991 = cljs.core._nth.call(null,chunk__41988,i__41990);
var url = cljs.core.nth.call(null,vec__41991,(0),null);
var page = cljs.core.nth.call(null,vec__41991,(1),null);
var media_41996 = scrapfab.build.page_media.call(null,page,media_library);
var html_41997 = scrapfab.build.render_page.call(null,layout,url,page,media_41996);
scrapfab.build.write_page_BANG_.call(null,url,html_41997);

var G__41998 = seq__41987;
var G__41999 = chunk__41988;
var G__42000 = count__41989;
var G__42001 = (i__41990 + (1));
seq__41987 = G__41998;
chunk__41988 = G__41999;
count__41989 = G__42000;
i__41990 = G__42001;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41987);
if(temp__4657__auto__){
var seq__41987__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41987__$1)){
var c__22517__auto__ = cljs.core.chunk_first.call(null,seq__41987__$1);
var G__42002 = cljs.core.chunk_rest.call(null,seq__41987__$1);
var G__42003 = c__22517__auto__;
var G__42004 = cljs.core.count.call(null,c__22517__auto__);
var G__42005 = (0);
seq__41987 = G__42002;
chunk__41988 = G__42003;
count__41989 = G__42004;
i__41990 = G__42005;
continue;
} else {
var vec__41992 = cljs.core.first.call(null,seq__41987__$1);
var url = cljs.core.nth.call(null,vec__41992,(0),null);
var page = cljs.core.nth.call(null,vec__41992,(1),null);
var media_42006 = scrapfab.build.page_media.call(null,page,media_library);
var html_42007 = scrapfab.build.render_page.call(null,layout,url,page,media_42006);
scrapfab.build.write_page_BANG_.call(null,url,html_42007);

var G__42008 = cljs.core.next.call(null,seq__41987__$1);
var G__42009 = null;
var G__42010 = (0);
var G__42011 = (0);
seq__41987 = G__42008;
chunk__41988 = G__42009;
count__41989 = G__42010;
i__41990 = G__42011;
continue;
}
} else {
return null;
}
}
break;
}
});

scrapfab.build._main.cljs$lang$maxFixedArity = (0);

scrapfab.build._main.cljs$lang$applyTo = (function (seq41984){
return scrapfab.build._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41984));
});
cljs.core._STAR_main_cli_fn_STAR_ = scrapfab.build._main;

//# sourceMappingURL=build.js.map?rel=1468966132023