// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21706__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21706__auto__){
return or__21706__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21706__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21706__auto__)){
return or__21706__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27233_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27233_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27238 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27239 = null;
var count__27240 = (0);
var i__27241 = (0);
while(true){
if((i__27241 < count__27240)){
var n = cljs.core._nth.call(null,chunk__27239,i__27241);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27242 = seq__27238;
var G__27243 = chunk__27239;
var G__27244 = count__27240;
var G__27245 = (i__27241 + (1));
seq__27238 = G__27242;
chunk__27239 = G__27243;
count__27240 = G__27244;
i__27241 = G__27245;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27238);
if(temp__4657__auto__){
var seq__27238__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27238__$1)){
var c__22517__auto__ = cljs.core.chunk_first.call(null,seq__27238__$1);
var G__27246 = cljs.core.chunk_rest.call(null,seq__27238__$1);
var G__27247 = c__22517__auto__;
var G__27248 = cljs.core.count.call(null,c__22517__auto__);
var G__27249 = (0);
seq__27238 = G__27246;
chunk__27239 = G__27247;
count__27240 = G__27248;
i__27241 = G__27249;
continue;
} else {
var n = cljs.core.first.call(null,seq__27238__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27250 = cljs.core.next.call(null,seq__27238__$1);
var G__27251 = null;
var G__27252 = (0);
var G__27253 = (0);
seq__27238 = G__27250;
chunk__27239 = G__27251;
count__27240 = G__27252;
i__27241 = G__27253;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27292_27299 = cljs.core.seq.call(null,deps);
var chunk__27293_27300 = null;
var count__27294_27301 = (0);
var i__27295_27302 = (0);
while(true){
if((i__27295_27302 < count__27294_27301)){
var dep_27303 = cljs.core._nth.call(null,chunk__27293_27300,i__27295_27302);
topo_sort_helper_STAR_.call(null,dep_27303,(depth + (1)),state);

var G__27304 = seq__27292_27299;
var G__27305 = chunk__27293_27300;
var G__27306 = count__27294_27301;
var G__27307 = (i__27295_27302 + (1));
seq__27292_27299 = G__27304;
chunk__27293_27300 = G__27305;
count__27294_27301 = G__27306;
i__27295_27302 = G__27307;
continue;
} else {
var temp__4657__auto___27308 = cljs.core.seq.call(null,seq__27292_27299);
if(temp__4657__auto___27308){
var seq__27292_27309__$1 = temp__4657__auto___27308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27292_27309__$1)){
var c__22517__auto___27310 = cljs.core.chunk_first.call(null,seq__27292_27309__$1);
var G__27311 = cljs.core.chunk_rest.call(null,seq__27292_27309__$1);
var G__27312 = c__22517__auto___27310;
var G__27313 = cljs.core.count.call(null,c__22517__auto___27310);
var G__27314 = (0);
seq__27292_27299 = G__27311;
chunk__27293_27300 = G__27312;
count__27294_27301 = G__27313;
i__27295_27302 = G__27314;
continue;
} else {
var dep_27315 = cljs.core.first.call(null,seq__27292_27309__$1);
topo_sort_helper_STAR_.call(null,dep_27315,(depth + (1)),state);

var G__27316 = cljs.core.next.call(null,seq__27292_27309__$1);
var G__27317 = null;
var G__27318 = (0);
var G__27319 = (0);
seq__27292_27299 = G__27316;
chunk__27293_27300 = G__27317;
count__27294_27301 = G__27318;
i__27295_27302 = G__27319;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27296){
var vec__27298 = p__27296;
var x = cljs.core.nth.call(null,vec__27298,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27298,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27298,x,xs,get_deps__$1){
return (function (p1__27254_SHARP_){
return clojure.set.difference.call(null,p1__27254_SHARP_,x);
});})(vec__27298,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27332 = cljs.core.seq.call(null,provides);
var chunk__27333 = null;
var count__27334 = (0);
var i__27335 = (0);
while(true){
if((i__27335 < count__27334)){
var prov = cljs.core._nth.call(null,chunk__27333,i__27335);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27336_27344 = cljs.core.seq.call(null,requires);
var chunk__27337_27345 = null;
var count__27338_27346 = (0);
var i__27339_27347 = (0);
while(true){
if((i__27339_27347 < count__27338_27346)){
var req_27348 = cljs.core._nth.call(null,chunk__27337_27345,i__27339_27347);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27348,prov);

var G__27349 = seq__27336_27344;
var G__27350 = chunk__27337_27345;
var G__27351 = count__27338_27346;
var G__27352 = (i__27339_27347 + (1));
seq__27336_27344 = G__27349;
chunk__27337_27345 = G__27350;
count__27338_27346 = G__27351;
i__27339_27347 = G__27352;
continue;
} else {
var temp__4657__auto___27353 = cljs.core.seq.call(null,seq__27336_27344);
if(temp__4657__auto___27353){
var seq__27336_27354__$1 = temp__4657__auto___27353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27336_27354__$1)){
var c__22517__auto___27355 = cljs.core.chunk_first.call(null,seq__27336_27354__$1);
var G__27356 = cljs.core.chunk_rest.call(null,seq__27336_27354__$1);
var G__27357 = c__22517__auto___27355;
var G__27358 = cljs.core.count.call(null,c__22517__auto___27355);
var G__27359 = (0);
seq__27336_27344 = G__27356;
chunk__27337_27345 = G__27357;
count__27338_27346 = G__27358;
i__27339_27347 = G__27359;
continue;
} else {
var req_27360 = cljs.core.first.call(null,seq__27336_27354__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27360,prov);

var G__27361 = cljs.core.next.call(null,seq__27336_27354__$1);
var G__27362 = null;
var G__27363 = (0);
var G__27364 = (0);
seq__27336_27344 = G__27361;
chunk__27337_27345 = G__27362;
count__27338_27346 = G__27363;
i__27339_27347 = G__27364;
continue;
}
} else {
}
}
break;
}

var G__27365 = seq__27332;
var G__27366 = chunk__27333;
var G__27367 = count__27334;
var G__27368 = (i__27335 + (1));
seq__27332 = G__27365;
chunk__27333 = G__27366;
count__27334 = G__27367;
i__27335 = G__27368;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27332);
if(temp__4657__auto__){
var seq__27332__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27332__$1)){
var c__22517__auto__ = cljs.core.chunk_first.call(null,seq__27332__$1);
var G__27369 = cljs.core.chunk_rest.call(null,seq__27332__$1);
var G__27370 = c__22517__auto__;
var G__27371 = cljs.core.count.call(null,c__22517__auto__);
var G__27372 = (0);
seq__27332 = G__27369;
chunk__27333 = G__27370;
count__27334 = G__27371;
i__27335 = G__27372;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27332__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27340_27373 = cljs.core.seq.call(null,requires);
var chunk__27341_27374 = null;
var count__27342_27375 = (0);
var i__27343_27376 = (0);
while(true){
if((i__27343_27376 < count__27342_27375)){
var req_27377 = cljs.core._nth.call(null,chunk__27341_27374,i__27343_27376);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27377,prov);

var G__27378 = seq__27340_27373;
var G__27379 = chunk__27341_27374;
var G__27380 = count__27342_27375;
var G__27381 = (i__27343_27376 + (1));
seq__27340_27373 = G__27378;
chunk__27341_27374 = G__27379;
count__27342_27375 = G__27380;
i__27343_27376 = G__27381;
continue;
} else {
var temp__4657__auto___27382__$1 = cljs.core.seq.call(null,seq__27340_27373);
if(temp__4657__auto___27382__$1){
var seq__27340_27383__$1 = temp__4657__auto___27382__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27340_27383__$1)){
var c__22517__auto___27384 = cljs.core.chunk_first.call(null,seq__27340_27383__$1);
var G__27385 = cljs.core.chunk_rest.call(null,seq__27340_27383__$1);
var G__27386 = c__22517__auto___27384;
var G__27387 = cljs.core.count.call(null,c__22517__auto___27384);
var G__27388 = (0);
seq__27340_27373 = G__27385;
chunk__27341_27374 = G__27386;
count__27342_27375 = G__27387;
i__27343_27376 = G__27388;
continue;
} else {
var req_27389 = cljs.core.first.call(null,seq__27340_27383__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27389,prov);

var G__27390 = cljs.core.next.call(null,seq__27340_27383__$1);
var G__27391 = null;
var G__27392 = (0);
var G__27393 = (0);
seq__27340_27373 = G__27390;
chunk__27341_27374 = G__27391;
count__27342_27375 = G__27392;
i__27343_27376 = G__27393;
continue;
}
} else {
}
}
break;
}

var G__27394 = cljs.core.next.call(null,seq__27332__$1);
var G__27395 = null;
var G__27396 = (0);
var G__27397 = (0);
seq__27332 = G__27394;
chunk__27333 = G__27395;
count__27334 = G__27396;
i__27335 = G__27397;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27402_27406 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27403_27407 = null;
var count__27404_27408 = (0);
var i__27405_27409 = (0);
while(true){
if((i__27405_27409 < count__27404_27408)){
var ns_27410 = cljs.core._nth.call(null,chunk__27403_27407,i__27405_27409);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27410);

var G__27411 = seq__27402_27406;
var G__27412 = chunk__27403_27407;
var G__27413 = count__27404_27408;
var G__27414 = (i__27405_27409 + (1));
seq__27402_27406 = G__27411;
chunk__27403_27407 = G__27412;
count__27404_27408 = G__27413;
i__27405_27409 = G__27414;
continue;
} else {
var temp__4657__auto___27415 = cljs.core.seq.call(null,seq__27402_27406);
if(temp__4657__auto___27415){
var seq__27402_27416__$1 = temp__4657__auto___27415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27402_27416__$1)){
var c__22517__auto___27417 = cljs.core.chunk_first.call(null,seq__27402_27416__$1);
var G__27418 = cljs.core.chunk_rest.call(null,seq__27402_27416__$1);
var G__27419 = c__22517__auto___27417;
var G__27420 = cljs.core.count.call(null,c__22517__auto___27417);
var G__27421 = (0);
seq__27402_27406 = G__27418;
chunk__27403_27407 = G__27419;
count__27404_27408 = G__27420;
i__27405_27409 = G__27421;
continue;
} else {
var ns_27422 = cljs.core.first.call(null,seq__27402_27416__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27422);

var G__27423 = cljs.core.next.call(null,seq__27402_27416__$1);
var G__27424 = null;
var G__27425 = (0);
var G__27426 = (0);
seq__27402_27406 = G__27423;
chunk__27403_27407 = G__27424;
count__27404_27408 = G__27425;
i__27405_27409 = G__27426;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21706__auto__ = goog.require__;
if(cljs.core.truth_(or__21706__auto__)){
return or__21706__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27427__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27428__i = 0, G__27428__a = new Array(arguments.length -  0);
while (G__27428__i < G__27428__a.length) {G__27428__a[G__27428__i] = arguments[G__27428__i + 0]; ++G__27428__i;}
  args = new cljs.core.IndexedSeq(G__27428__a,0);
} 
return G__27427__delegate.call(this,args);};
G__27427.cljs$lang$maxFixedArity = 0;
G__27427.cljs$lang$applyTo = (function (arglist__27429){
var args = cljs.core.seq(arglist__27429);
return G__27427__delegate(args);
});
G__27427.cljs$core$IFn$_invoke$arity$variadic = G__27427__delegate;
return G__27427;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27431 = cljs.core._EQ_;
var expr__27432 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27431.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27432))){
var path_parts = ((function (pred__27431,expr__27432){
return (function (p1__27430_SHARP_){
return clojure.string.split.call(null,p1__27430_SHARP_,/[\/\\]/);
});})(pred__27431,expr__27432))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27431,expr__27432){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27434){if((e27434 instanceof Error)){
var e = e27434;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27434;

}
}})());
});
;})(path_parts,sep,root,pred__27431,expr__27432))
} else {
if(cljs.core.truth_(pred__27431.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27432))){
return ((function (pred__27431,expr__27432){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27431,expr__27432){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27431,expr__27432))
);

return deferred.addErrback(((function (deferred,pred__27431,expr__27432){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27431,expr__27432))
);
});
;})(pred__27431,expr__27432))
} else {
return ((function (pred__27431,expr__27432){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27431,expr__27432))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27435,callback){
var map__27438 = p__27435;
var map__27438__$1 = ((((!((map__27438 == null)))?((((map__27438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27438):map__27438);
var file_msg = map__27438__$1;
var request_url = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27438,map__27438__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27438,map__27438__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24339__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto__){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto__){
return (function (state_27462){
var state_val_27463 = (state_27462[(1)]);
if((state_val_27463 === (7))){
var inst_27458 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27464_27484 = state_27462__$1;
(statearr_27464_27484[(2)] = inst_27458);

(statearr_27464_27484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (1))){
var state_27462__$1 = state_27462;
var statearr_27465_27485 = state_27462__$1;
(statearr_27465_27485[(2)] = null);

(statearr_27465_27485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (4))){
var inst_27442 = (state_27462[(7)]);
var inst_27442__$1 = (state_27462[(2)]);
var state_27462__$1 = (function (){var statearr_27466 = state_27462;
(statearr_27466[(7)] = inst_27442__$1);

return statearr_27466;
})();
if(cljs.core.truth_(inst_27442__$1)){
var statearr_27467_27486 = state_27462__$1;
(statearr_27467_27486[(1)] = (5));

} else {
var statearr_27468_27487 = state_27462__$1;
(statearr_27468_27487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (6))){
var state_27462__$1 = state_27462;
var statearr_27469_27488 = state_27462__$1;
(statearr_27469_27488[(2)] = null);

(statearr_27469_27488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (3))){
var inst_27460 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27462__$1,inst_27460);
} else {
if((state_val_27463 === (2))){
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27462__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27463 === (11))){
var inst_27454 = (state_27462[(2)]);
var state_27462__$1 = (function (){var statearr_27470 = state_27462;
(statearr_27470[(8)] = inst_27454);

return statearr_27470;
})();
var statearr_27471_27489 = state_27462__$1;
(statearr_27471_27489[(2)] = null);

(statearr_27471_27489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (9))){
var inst_27446 = (state_27462[(9)]);
var inst_27448 = (state_27462[(10)]);
var inst_27450 = inst_27448.call(null,inst_27446);
var state_27462__$1 = state_27462;
var statearr_27472_27490 = state_27462__$1;
(statearr_27472_27490[(2)] = inst_27450);

(statearr_27472_27490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (5))){
var inst_27442 = (state_27462[(7)]);
var inst_27444 = figwheel.client.file_reloading.blocking_load.call(null,inst_27442);
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27462__$1,(8),inst_27444);
} else {
if((state_val_27463 === (10))){
var inst_27446 = (state_27462[(9)]);
var inst_27452 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27446);
var state_27462__$1 = state_27462;
var statearr_27473_27491 = state_27462__$1;
(statearr_27473_27491[(2)] = inst_27452);

(statearr_27473_27491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (8))){
var inst_27448 = (state_27462[(10)]);
var inst_27442 = (state_27462[(7)]);
var inst_27446 = (state_27462[(2)]);
var inst_27447 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27448__$1 = cljs.core.get.call(null,inst_27447,inst_27442);
var state_27462__$1 = (function (){var statearr_27474 = state_27462;
(statearr_27474[(9)] = inst_27446);

(statearr_27474[(10)] = inst_27448__$1);

return statearr_27474;
})();
if(cljs.core.truth_(inst_27448__$1)){
var statearr_27475_27492 = state_27462__$1;
(statearr_27475_27492[(1)] = (9));

} else {
var statearr_27476_27493 = state_27462__$1;
(statearr_27476_27493[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24339__auto__))
;
return ((function (switch__24227__auto__,c__24339__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24228__auto__ = null;
var figwheel$client$file_reloading$state_machine__24228__auto____0 = (function (){
var statearr_27480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27480[(0)] = figwheel$client$file_reloading$state_machine__24228__auto__);

(statearr_27480[(1)] = (1));

return statearr_27480;
});
var figwheel$client$file_reloading$state_machine__24228__auto____1 = (function (state_27462){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_27462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e27481){if((e27481 instanceof Object)){
var ex__24231__auto__ = e27481;
var statearr_27482_27494 = state_27462;
(statearr_27482_27494[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27495 = state_27462;
state_27462 = G__27495;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24228__auto__ = function(state_27462){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24228__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24228__auto____1.call(this,state_27462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24228__auto____0;
figwheel$client$file_reloading$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24228__auto____1;
return figwheel$client$file_reloading$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto__))
})();
var state__24341__auto__ = (function (){var statearr_27483 = f__24340__auto__.call(null);
(statearr_27483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto__);

return statearr_27483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto__))
);

return c__24339__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27496,callback){
var map__27499 = p__27496;
var map__27499__$1 = ((((!((map__27499 == null)))?((((map__27499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27499):map__27499);
var file_msg = map__27499__$1;
var namespace = cljs.core.get.call(null,map__27499__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27499,map__27499__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27499,map__27499__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27501){
var map__27504 = p__27501;
var map__27504__$1 = ((((!((map__27504 == null)))?((((map__27504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27504):map__27504);
var file_msg = map__27504__$1;
var namespace = cljs.core.get.call(null,map__27504__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21694__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21694__auto__){
var or__21706__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21706__auto__)){
return or__21706__auto__;
} else {
var or__21706__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21706__auto____$1)){
return or__21706__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21694__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27506,callback){
var map__27509 = p__27506;
var map__27509__$1 = ((((!((map__27509 == null)))?((((map__27509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27509):map__27509);
var file_msg = map__27509__$1;
var request_url = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24339__auto___27597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___27597,out){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___27597,out){
return (function (state_27579){
var state_val_27580 = (state_27579[(1)]);
if((state_val_27580 === (1))){
var inst_27557 = cljs.core.nth.call(null,files,(0),null);
var inst_27558 = cljs.core.nthnext.call(null,files,(1));
var inst_27559 = files;
var state_27579__$1 = (function (){var statearr_27581 = state_27579;
(statearr_27581[(7)] = inst_27558);

(statearr_27581[(8)] = inst_27559);

(statearr_27581[(9)] = inst_27557);

return statearr_27581;
})();
var statearr_27582_27598 = state_27579__$1;
(statearr_27582_27598[(2)] = null);

(statearr_27582_27598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (2))){
var inst_27559 = (state_27579[(8)]);
var inst_27562 = (state_27579[(10)]);
var inst_27562__$1 = cljs.core.nth.call(null,inst_27559,(0),null);
var inst_27563 = cljs.core.nthnext.call(null,inst_27559,(1));
var inst_27564 = (inst_27562__$1 == null);
var inst_27565 = cljs.core.not.call(null,inst_27564);
var state_27579__$1 = (function (){var statearr_27583 = state_27579;
(statearr_27583[(11)] = inst_27563);

(statearr_27583[(10)] = inst_27562__$1);

return statearr_27583;
})();
if(inst_27565){
var statearr_27584_27599 = state_27579__$1;
(statearr_27584_27599[(1)] = (4));

} else {
var statearr_27585_27600 = state_27579__$1;
(statearr_27585_27600[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (3))){
var inst_27577 = (state_27579[(2)]);
var state_27579__$1 = state_27579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27579__$1,inst_27577);
} else {
if((state_val_27580 === (4))){
var inst_27562 = (state_27579[(10)]);
var inst_27567 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27562);
var state_27579__$1 = state_27579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27579__$1,(7),inst_27567);
} else {
if((state_val_27580 === (5))){
var inst_27573 = cljs.core.async.close_BANG_.call(null,out);
var state_27579__$1 = state_27579;
var statearr_27586_27601 = state_27579__$1;
(statearr_27586_27601[(2)] = inst_27573);

(statearr_27586_27601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (6))){
var inst_27575 = (state_27579[(2)]);
var state_27579__$1 = state_27579;
var statearr_27587_27602 = state_27579__$1;
(statearr_27587_27602[(2)] = inst_27575);

(statearr_27587_27602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27580 === (7))){
var inst_27563 = (state_27579[(11)]);
var inst_27569 = (state_27579[(2)]);
var inst_27570 = cljs.core.async.put_BANG_.call(null,out,inst_27569);
var inst_27559 = inst_27563;
var state_27579__$1 = (function (){var statearr_27588 = state_27579;
(statearr_27588[(12)] = inst_27570);

(statearr_27588[(8)] = inst_27559);

return statearr_27588;
})();
var statearr_27589_27603 = state_27579__$1;
(statearr_27589_27603[(2)] = null);

(statearr_27589_27603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24339__auto___27597,out))
;
return ((function (switch__24227__auto__,c__24339__auto___27597,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto____0 = (function (){
var statearr_27593 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27593[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto__);

(statearr_27593[(1)] = (1));

return statearr_27593;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto____1 = (function (state_27579){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_27579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e27594){if((e27594 instanceof Object)){
var ex__24231__auto__ = e27594;
var statearr_27595_27604 = state_27579;
(statearr_27595_27604[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27605 = state_27579;
state_27579 = G__27605;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto__ = function(state_27579){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto____1.call(this,state_27579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___27597,out))
})();
var state__24341__auto__ = (function (){var statearr_27596 = f__24340__auto__.call(null);
(statearr_27596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___27597);

return statearr_27596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___27597,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27606,opts){
var map__27610 = p__27606;
var map__27610__$1 = ((((!((map__27610 == null)))?((((map__27610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27610):map__27610);
var eval_body__$1 = cljs.core.get.call(null,map__27610__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27610__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21694__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21694__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21694__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27612){var e = e27612;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27613_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27613_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27618){
var vec__27619 = p__27618;
var k = cljs.core.nth.call(null,vec__27619,(0),null);
var v = cljs.core.nth.call(null,vec__27619,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27620){
var vec__27621 = p__27620;
var k = cljs.core.nth.call(null,vec__27621,(0),null);
var v = cljs.core.nth.call(null,vec__27621,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27625,p__27626){
var map__27873 = p__27625;
var map__27873__$1 = ((((!((map__27873 == null)))?((((map__27873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27873):map__27873);
var opts = map__27873__$1;
var before_jsload = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27874 = p__27626;
var map__27874__$1 = ((((!((map__27874 == null)))?((((map__27874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27874):map__27874);
var msg = map__27874__$1;
var files = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24339__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28027){
var state_val_28028 = (state_28027[(1)]);
if((state_val_28028 === (7))){
var inst_27889 = (state_28027[(7)]);
var inst_27890 = (state_28027[(8)]);
var inst_27888 = (state_28027[(9)]);
var inst_27891 = (state_28027[(10)]);
var inst_27896 = cljs.core._nth.call(null,inst_27889,inst_27891);
var inst_27897 = figwheel.client.file_reloading.eval_body.call(null,inst_27896,opts);
var inst_27898 = (inst_27891 + (1));
var tmp28029 = inst_27889;
var tmp28030 = inst_27890;
var tmp28031 = inst_27888;
var inst_27888__$1 = tmp28031;
var inst_27889__$1 = tmp28029;
var inst_27890__$1 = tmp28030;
var inst_27891__$1 = inst_27898;
var state_28027__$1 = (function (){var statearr_28032 = state_28027;
(statearr_28032[(7)] = inst_27889__$1);

(statearr_28032[(8)] = inst_27890__$1);

(statearr_28032[(11)] = inst_27897);

(statearr_28032[(9)] = inst_27888__$1);

(statearr_28032[(10)] = inst_27891__$1);

return statearr_28032;
})();
var statearr_28033_28119 = state_28027__$1;
(statearr_28033_28119[(2)] = null);

(statearr_28033_28119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (20))){
var inst_27931 = (state_28027[(12)]);
var inst_27939 = figwheel.client.file_reloading.sort_files.call(null,inst_27931);
var state_28027__$1 = state_28027;
var statearr_28034_28120 = state_28027__$1;
(statearr_28034_28120[(2)] = inst_27939);

(statearr_28034_28120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (27))){
var state_28027__$1 = state_28027;
var statearr_28035_28121 = state_28027__$1;
(statearr_28035_28121[(2)] = null);

(statearr_28035_28121[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (1))){
var inst_27880 = (state_28027[(13)]);
var inst_27877 = before_jsload.call(null,files);
var inst_27878 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27879 = (function (){return ((function (inst_27880,inst_27877,inst_27878,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27622_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27622_SHARP_);
});
;})(inst_27880,inst_27877,inst_27878,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27880__$1 = cljs.core.filter.call(null,inst_27879,files);
var inst_27881 = cljs.core.not_empty.call(null,inst_27880__$1);
var state_28027__$1 = (function (){var statearr_28036 = state_28027;
(statearr_28036[(13)] = inst_27880__$1);

(statearr_28036[(14)] = inst_27877);

(statearr_28036[(15)] = inst_27878);

return statearr_28036;
})();
if(cljs.core.truth_(inst_27881)){
var statearr_28037_28122 = state_28027__$1;
(statearr_28037_28122[(1)] = (2));

} else {
var statearr_28038_28123 = state_28027__$1;
(statearr_28038_28123[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (24))){
var state_28027__$1 = state_28027;
var statearr_28039_28124 = state_28027__$1;
(statearr_28039_28124[(2)] = null);

(statearr_28039_28124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (39))){
var inst_27981 = (state_28027[(16)]);
var state_28027__$1 = state_28027;
var statearr_28040_28125 = state_28027__$1;
(statearr_28040_28125[(2)] = inst_27981);

(statearr_28040_28125[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (46))){
var inst_28022 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28041_28126 = state_28027__$1;
(statearr_28041_28126[(2)] = inst_28022);

(statearr_28041_28126[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (4))){
var inst_27925 = (state_28027[(2)]);
var inst_27926 = cljs.core.List.EMPTY;
var inst_27927 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27926);
var inst_27928 = (function (){return ((function (inst_27925,inst_27926,inst_27927,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27623_SHARP_){
var and__21694__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27623_SHARP_);
if(cljs.core.truth_(and__21694__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27623_SHARP_));
} else {
return and__21694__auto__;
}
});
;})(inst_27925,inst_27926,inst_27927,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27929 = cljs.core.filter.call(null,inst_27928,files);
var inst_27930 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27931 = cljs.core.concat.call(null,inst_27929,inst_27930);
var state_28027__$1 = (function (){var statearr_28042 = state_28027;
(statearr_28042[(12)] = inst_27931);

(statearr_28042[(17)] = inst_27925);

(statearr_28042[(18)] = inst_27927);

return statearr_28042;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28043_28127 = state_28027__$1;
(statearr_28043_28127[(1)] = (16));

} else {
var statearr_28044_28128 = state_28027__$1;
(statearr_28044_28128[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (15))){
var inst_27915 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28045_28129 = state_28027__$1;
(statearr_28045_28129[(2)] = inst_27915);

(statearr_28045_28129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (21))){
var inst_27941 = (state_28027[(19)]);
var inst_27941__$1 = (state_28027[(2)]);
var inst_27942 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27941__$1);
var state_28027__$1 = (function (){var statearr_28046 = state_28027;
(statearr_28046[(19)] = inst_27941__$1);

return statearr_28046;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28027__$1,(22),inst_27942);
} else {
if((state_val_28028 === (31))){
var inst_28025 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28027__$1,inst_28025);
} else {
if((state_val_28028 === (32))){
var inst_27981 = (state_28027[(16)]);
var inst_27986 = inst_27981.cljs$lang$protocol_mask$partition0$;
var inst_27987 = (inst_27986 & (64));
var inst_27988 = inst_27981.cljs$core$ISeq$;
var inst_27989 = (inst_27987) || (inst_27988);
var state_28027__$1 = state_28027;
if(cljs.core.truth_(inst_27989)){
var statearr_28047_28130 = state_28027__$1;
(statearr_28047_28130[(1)] = (35));

} else {
var statearr_28048_28131 = state_28027__$1;
(statearr_28048_28131[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (40))){
var inst_28002 = (state_28027[(20)]);
var inst_28001 = (state_28027[(2)]);
var inst_28002__$1 = cljs.core.get.call(null,inst_28001,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28003 = cljs.core.get.call(null,inst_28001,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28004 = cljs.core.not_empty.call(null,inst_28002__$1);
var state_28027__$1 = (function (){var statearr_28049 = state_28027;
(statearr_28049[(20)] = inst_28002__$1);

(statearr_28049[(21)] = inst_28003);

return statearr_28049;
})();
if(cljs.core.truth_(inst_28004)){
var statearr_28050_28132 = state_28027__$1;
(statearr_28050_28132[(1)] = (41));

} else {
var statearr_28051_28133 = state_28027__$1;
(statearr_28051_28133[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (33))){
var state_28027__$1 = state_28027;
var statearr_28052_28134 = state_28027__$1;
(statearr_28052_28134[(2)] = false);

(statearr_28052_28134[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (13))){
var inst_27901 = (state_28027[(22)]);
var inst_27905 = cljs.core.chunk_first.call(null,inst_27901);
var inst_27906 = cljs.core.chunk_rest.call(null,inst_27901);
var inst_27907 = cljs.core.count.call(null,inst_27905);
var inst_27888 = inst_27906;
var inst_27889 = inst_27905;
var inst_27890 = inst_27907;
var inst_27891 = (0);
var state_28027__$1 = (function (){var statearr_28053 = state_28027;
(statearr_28053[(7)] = inst_27889);

(statearr_28053[(8)] = inst_27890);

(statearr_28053[(9)] = inst_27888);

(statearr_28053[(10)] = inst_27891);

return statearr_28053;
})();
var statearr_28054_28135 = state_28027__$1;
(statearr_28054_28135[(2)] = null);

(statearr_28054_28135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (22))){
var inst_27949 = (state_28027[(23)]);
var inst_27944 = (state_28027[(24)]);
var inst_27941 = (state_28027[(19)]);
var inst_27945 = (state_28027[(25)]);
var inst_27944__$1 = (state_28027[(2)]);
var inst_27945__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27944__$1);
var inst_27946 = (function (){var all_files = inst_27941;
var res_SINGLEQUOTE_ = inst_27944__$1;
var res = inst_27945__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27949,inst_27944,inst_27941,inst_27945,inst_27944__$1,inst_27945__$1,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27624_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27624_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27949,inst_27944,inst_27941,inst_27945,inst_27944__$1,inst_27945__$1,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27947 = cljs.core.filter.call(null,inst_27946,inst_27944__$1);
var inst_27948 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27949__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27948);
var inst_27950 = cljs.core.not_empty.call(null,inst_27949__$1);
var state_28027__$1 = (function (){var statearr_28055 = state_28027;
(statearr_28055[(23)] = inst_27949__$1);

(statearr_28055[(24)] = inst_27944__$1);

(statearr_28055[(25)] = inst_27945__$1);

(statearr_28055[(26)] = inst_27947);

return statearr_28055;
})();
if(cljs.core.truth_(inst_27950)){
var statearr_28056_28136 = state_28027__$1;
(statearr_28056_28136[(1)] = (23));

} else {
var statearr_28057_28137 = state_28027__$1;
(statearr_28057_28137[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (36))){
var state_28027__$1 = state_28027;
var statearr_28058_28138 = state_28027__$1;
(statearr_28058_28138[(2)] = false);

(statearr_28058_28138[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (41))){
var inst_28002 = (state_28027[(20)]);
var inst_28006 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28007 = cljs.core.map.call(null,inst_28006,inst_28002);
var inst_28008 = cljs.core.pr_str.call(null,inst_28007);
var inst_28009 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28008)].join('');
var inst_28010 = figwheel.client.utils.log.call(null,inst_28009);
var state_28027__$1 = state_28027;
var statearr_28059_28139 = state_28027__$1;
(statearr_28059_28139[(2)] = inst_28010);

(statearr_28059_28139[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (43))){
var inst_28003 = (state_28027[(21)]);
var inst_28013 = (state_28027[(2)]);
var inst_28014 = cljs.core.not_empty.call(null,inst_28003);
var state_28027__$1 = (function (){var statearr_28060 = state_28027;
(statearr_28060[(27)] = inst_28013);

return statearr_28060;
})();
if(cljs.core.truth_(inst_28014)){
var statearr_28061_28140 = state_28027__$1;
(statearr_28061_28140[(1)] = (44));

} else {
var statearr_28062_28141 = state_28027__$1;
(statearr_28062_28141[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (29))){
var inst_27949 = (state_28027[(23)]);
var inst_27944 = (state_28027[(24)]);
var inst_27941 = (state_28027[(19)]);
var inst_27945 = (state_28027[(25)]);
var inst_27947 = (state_28027[(26)]);
var inst_27981 = (state_28027[(16)]);
var inst_27977 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27980 = (function (){var all_files = inst_27941;
var res_SINGLEQUOTE_ = inst_27944;
var res = inst_27945;
var files_not_loaded = inst_27947;
var dependencies_that_loaded = inst_27949;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27949,inst_27944,inst_27941,inst_27945,inst_27947,inst_27981,inst_27977,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27979){
var map__28063 = p__27979;
var map__28063__$1 = ((((!((map__28063 == null)))?((((map__28063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28063):map__28063);
var namespace = cljs.core.get.call(null,map__28063__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27949,inst_27944,inst_27941,inst_27945,inst_27947,inst_27981,inst_27977,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27981__$1 = cljs.core.group_by.call(null,inst_27980,inst_27947);
var inst_27983 = (inst_27981__$1 == null);
var inst_27984 = cljs.core.not.call(null,inst_27983);
var state_28027__$1 = (function (){var statearr_28065 = state_28027;
(statearr_28065[(28)] = inst_27977);

(statearr_28065[(16)] = inst_27981__$1);

return statearr_28065;
})();
if(inst_27984){
var statearr_28066_28142 = state_28027__$1;
(statearr_28066_28142[(1)] = (32));

} else {
var statearr_28067_28143 = state_28027__$1;
(statearr_28067_28143[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (44))){
var inst_28003 = (state_28027[(21)]);
var inst_28016 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28003);
var inst_28017 = cljs.core.pr_str.call(null,inst_28016);
var inst_28018 = [cljs.core.str("not required: "),cljs.core.str(inst_28017)].join('');
var inst_28019 = figwheel.client.utils.log.call(null,inst_28018);
var state_28027__$1 = state_28027;
var statearr_28068_28144 = state_28027__$1;
(statearr_28068_28144[(2)] = inst_28019);

(statearr_28068_28144[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (6))){
var inst_27922 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28069_28145 = state_28027__$1;
(statearr_28069_28145[(2)] = inst_27922);

(statearr_28069_28145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (28))){
var inst_27947 = (state_28027[(26)]);
var inst_27974 = (state_28027[(2)]);
var inst_27975 = cljs.core.not_empty.call(null,inst_27947);
var state_28027__$1 = (function (){var statearr_28070 = state_28027;
(statearr_28070[(29)] = inst_27974);

return statearr_28070;
})();
if(cljs.core.truth_(inst_27975)){
var statearr_28071_28146 = state_28027__$1;
(statearr_28071_28146[(1)] = (29));

} else {
var statearr_28072_28147 = state_28027__$1;
(statearr_28072_28147[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (25))){
var inst_27945 = (state_28027[(25)]);
var inst_27961 = (state_28027[(2)]);
var inst_27962 = cljs.core.not_empty.call(null,inst_27945);
var state_28027__$1 = (function (){var statearr_28073 = state_28027;
(statearr_28073[(30)] = inst_27961);

return statearr_28073;
})();
if(cljs.core.truth_(inst_27962)){
var statearr_28074_28148 = state_28027__$1;
(statearr_28074_28148[(1)] = (26));

} else {
var statearr_28075_28149 = state_28027__$1;
(statearr_28075_28149[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (34))){
var inst_27996 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
if(cljs.core.truth_(inst_27996)){
var statearr_28076_28150 = state_28027__$1;
(statearr_28076_28150[(1)] = (38));

} else {
var statearr_28077_28151 = state_28027__$1;
(statearr_28077_28151[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (17))){
var state_28027__$1 = state_28027;
var statearr_28078_28152 = state_28027__$1;
(statearr_28078_28152[(2)] = recompile_dependents);

(statearr_28078_28152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (3))){
var state_28027__$1 = state_28027;
var statearr_28079_28153 = state_28027__$1;
(statearr_28079_28153[(2)] = null);

(statearr_28079_28153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (12))){
var inst_27918 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28080_28154 = state_28027__$1;
(statearr_28080_28154[(2)] = inst_27918);

(statearr_28080_28154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (2))){
var inst_27880 = (state_28027[(13)]);
var inst_27887 = cljs.core.seq.call(null,inst_27880);
var inst_27888 = inst_27887;
var inst_27889 = null;
var inst_27890 = (0);
var inst_27891 = (0);
var state_28027__$1 = (function (){var statearr_28081 = state_28027;
(statearr_28081[(7)] = inst_27889);

(statearr_28081[(8)] = inst_27890);

(statearr_28081[(9)] = inst_27888);

(statearr_28081[(10)] = inst_27891);

return statearr_28081;
})();
var statearr_28082_28155 = state_28027__$1;
(statearr_28082_28155[(2)] = null);

(statearr_28082_28155[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (23))){
var inst_27949 = (state_28027[(23)]);
var inst_27944 = (state_28027[(24)]);
var inst_27941 = (state_28027[(19)]);
var inst_27945 = (state_28027[(25)]);
var inst_27947 = (state_28027[(26)]);
var inst_27952 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27954 = (function (){var all_files = inst_27941;
var res_SINGLEQUOTE_ = inst_27944;
var res = inst_27945;
var files_not_loaded = inst_27947;
var dependencies_that_loaded = inst_27949;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27949,inst_27944,inst_27941,inst_27945,inst_27947,inst_27952,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27953){
var map__28083 = p__27953;
var map__28083__$1 = ((((!((map__28083 == null)))?((((map__28083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28083):map__28083);
var request_url = cljs.core.get.call(null,map__28083__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27949,inst_27944,inst_27941,inst_27945,inst_27947,inst_27952,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27955 = cljs.core.reverse.call(null,inst_27949);
var inst_27956 = cljs.core.map.call(null,inst_27954,inst_27955);
var inst_27957 = cljs.core.pr_str.call(null,inst_27956);
var inst_27958 = figwheel.client.utils.log.call(null,inst_27957);
var state_28027__$1 = (function (){var statearr_28085 = state_28027;
(statearr_28085[(31)] = inst_27952);

return statearr_28085;
})();
var statearr_28086_28156 = state_28027__$1;
(statearr_28086_28156[(2)] = inst_27958);

(statearr_28086_28156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (35))){
var state_28027__$1 = state_28027;
var statearr_28087_28157 = state_28027__$1;
(statearr_28087_28157[(2)] = true);

(statearr_28087_28157[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (19))){
var inst_27931 = (state_28027[(12)]);
var inst_27937 = figwheel.client.file_reloading.expand_files.call(null,inst_27931);
var state_28027__$1 = state_28027;
var statearr_28088_28158 = state_28027__$1;
(statearr_28088_28158[(2)] = inst_27937);

(statearr_28088_28158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (11))){
var state_28027__$1 = state_28027;
var statearr_28089_28159 = state_28027__$1;
(statearr_28089_28159[(2)] = null);

(statearr_28089_28159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (9))){
var inst_27920 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28090_28160 = state_28027__$1;
(statearr_28090_28160[(2)] = inst_27920);

(statearr_28090_28160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (5))){
var inst_27890 = (state_28027[(8)]);
var inst_27891 = (state_28027[(10)]);
var inst_27893 = (inst_27891 < inst_27890);
var inst_27894 = inst_27893;
var state_28027__$1 = state_28027;
if(cljs.core.truth_(inst_27894)){
var statearr_28091_28161 = state_28027__$1;
(statearr_28091_28161[(1)] = (7));

} else {
var statearr_28092_28162 = state_28027__$1;
(statearr_28092_28162[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (14))){
var inst_27901 = (state_28027[(22)]);
var inst_27910 = cljs.core.first.call(null,inst_27901);
var inst_27911 = figwheel.client.file_reloading.eval_body.call(null,inst_27910,opts);
var inst_27912 = cljs.core.next.call(null,inst_27901);
var inst_27888 = inst_27912;
var inst_27889 = null;
var inst_27890 = (0);
var inst_27891 = (0);
var state_28027__$1 = (function (){var statearr_28093 = state_28027;
(statearr_28093[(7)] = inst_27889);

(statearr_28093[(32)] = inst_27911);

(statearr_28093[(8)] = inst_27890);

(statearr_28093[(9)] = inst_27888);

(statearr_28093[(10)] = inst_27891);

return statearr_28093;
})();
var statearr_28094_28163 = state_28027__$1;
(statearr_28094_28163[(2)] = null);

(statearr_28094_28163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (45))){
var state_28027__$1 = state_28027;
var statearr_28095_28164 = state_28027__$1;
(statearr_28095_28164[(2)] = null);

(statearr_28095_28164[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (26))){
var inst_27949 = (state_28027[(23)]);
var inst_27944 = (state_28027[(24)]);
var inst_27941 = (state_28027[(19)]);
var inst_27945 = (state_28027[(25)]);
var inst_27947 = (state_28027[(26)]);
var inst_27964 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27966 = (function (){var all_files = inst_27941;
var res_SINGLEQUOTE_ = inst_27944;
var res = inst_27945;
var files_not_loaded = inst_27947;
var dependencies_that_loaded = inst_27949;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27949,inst_27944,inst_27941,inst_27945,inst_27947,inst_27964,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27965){
var map__28096 = p__27965;
var map__28096__$1 = ((((!((map__28096 == null)))?((((map__28096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28096):map__28096);
var namespace = cljs.core.get.call(null,map__28096__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28096__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27949,inst_27944,inst_27941,inst_27945,inst_27947,inst_27964,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27967 = cljs.core.map.call(null,inst_27966,inst_27945);
var inst_27968 = cljs.core.pr_str.call(null,inst_27967);
var inst_27969 = figwheel.client.utils.log.call(null,inst_27968);
var inst_27970 = (function (){var all_files = inst_27941;
var res_SINGLEQUOTE_ = inst_27944;
var res = inst_27945;
var files_not_loaded = inst_27947;
var dependencies_that_loaded = inst_27949;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27949,inst_27944,inst_27941,inst_27945,inst_27947,inst_27964,inst_27966,inst_27967,inst_27968,inst_27969,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27949,inst_27944,inst_27941,inst_27945,inst_27947,inst_27964,inst_27966,inst_27967,inst_27968,inst_27969,state_val_28028,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27971 = setTimeout(inst_27970,(10));
var state_28027__$1 = (function (){var statearr_28098 = state_28027;
(statearr_28098[(33)] = inst_27969);

(statearr_28098[(34)] = inst_27964);

return statearr_28098;
})();
var statearr_28099_28165 = state_28027__$1;
(statearr_28099_28165[(2)] = inst_27971);

(statearr_28099_28165[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (16))){
var state_28027__$1 = state_28027;
var statearr_28100_28166 = state_28027__$1;
(statearr_28100_28166[(2)] = reload_dependents);

(statearr_28100_28166[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (38))){
var inst_27981 = (state_28027[(16)]);
var inst_27998 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27981);
var state_28027__$1 = state_28027;
var statearr_28101_28167 = state_28027__$1;
(statearr_28101_28167[(2)] = inst_27998);

(statearr_28101_28167[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (30))){
var state_28027__$1 = state_28027;
var statearr_28102_28168 = state_28027__$1;
(statearr_28102_28168[(2)] = null);

(statearr_28102_28168[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (10))){
var inst_27901 = (state_28027[(22)]);
var inst_27903 = cljs.core.chunked_seq_QMARK_.call(null,inst_27901);
var state_28027__$1 = state_28027;
if(inst_27903){
var statearr_28103_28169 = state_28027__$1;
(statearr_28103_28169[(1)] = (13));

} else {
var statearr_28104_28170 = state_28027__$1;
(statearr_28104_28170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (18))){
var inst_27935 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
if(cljs.core.truth_(inst_27935)){
var statearr_28105_28171 = state_28027__$1;
(statearr_28105_28171[(1)] = (19));

} else {
var statearr_28106_28172 = state_28027__$1;
(statearr_28106_28172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (42))){
var state_28027__$1 = state_28027;
var statearr_28107_28173 = state_28027__$1;
(statearr_28107_28173[(2)] = null);

(statearr_28107_28173[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (37))){
var inst_27993 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28108_28174 = state_28027__$1;
(statearr_28108_28174[(2)] = inst_27993);

(statearr_28108_28174[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (8))){
var inst_27901 = (state_28027[(22)]);
var inst_27888 = (state_28027[(9)]);
var inst_27901__$1 = cljs.core.seq.call(null,inst_27888);
var state_28027__$1 = (function (){var statearr_28109 = state_28027;
(statearr_28109[(22)] = inst_27901__$1);

return statearr_28109;
})();
if(inst_27901__$1){
var statearr_28110_28175 = state_28027__$1;
(statearr_28110_28175[(1)] = (10));

} else {
var statearr_28111_28176 = state_28027__$1;
(statearr_28111_28176[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24227__auto__,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto____0 = (function (){
var statearr_28115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28115[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto__);

(statearr_28115[(1)] = (1));

return statearr_28115;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto____1 = (function (state_28027){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_28027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e28116){if((e28116 instanceof Object)){
var ex__24231__auto__ = e28116;
var statearr_28117_28177 = state_28027;
(statearr_28117_28177[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28178 = state_28027;
state_28027 = G__28178;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto__ = function(state_28027){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto____1.call(this,state_28027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24341__auto__ = (function (){var statearr_28118 = f__24340__auto__.call(null);
(statearr_28118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto__);

return statearr_28118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto__,map__27873,map__27873__$1,opts,before_jsload,on_jsload,reload_dependents,map__27874,map__27874__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24339__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28181,link){
var map__28184 = p__28181;
var map__28184__$1 = ((((!((map__28184 == null)))?((((map__28184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28184):map__28184);
var file = cljs.core.get.call(null,map__28184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28184,map__28184__$1,file){
return (function (p1__28179_SHARP_,p2__28180_SHARP_){
if(cljs.core._EQ_.call(null,p1__28179_SHARP_,p2__28180_SHARP_)){
return p1__28179_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28184,map__28184__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28190){
var map__28191 = p__28190;
var map__28191__$1 = ((((!((map__28191 == null)))?((((map__28191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28191):map__28191);
var match_length = cljs.core.get.call(null,map__28191__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28191__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28186_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28186_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28193 = [];
var len__22776__auto___28196 = arguments.length;
var i__22777__auto___28197 = (0);
while(true){
if((i__22777__auto___28197 < len__22776__auto___28196)){
args28193.push((arguments[i__22777__auto___28197]));

var G__28198 = (i__22777__auto___28197 + (1));
i__22777__auto___28197 = G__28198;
continue;
} else {
}
break;
}

var G__28195 = args28193.length;
switch (G__28195) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28193.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28200_SHARP_,p2__28201_SHARP_){
return cljs.core.assoc.call(null,p1__28200_SHARP_,cljs.core.get.call(null,p2__28201_SHARP_,key),p2__28201_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28202){
var map__28205 = p__28202;
var map__28205__$1 = ((((!((map__28205 == null)))?((((map__28205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28205):map__28205);
var f_data = map__28205__$1;
var file = cljs.core.get.call(null,map__28205__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28207,files_msg){
var map__28214 = p__28207;
var map__28214__$1 = ((((!((map__28214 == null)))?((((map__28214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28214):map__28214);
var opts = map__28214__$1;
var on_cssload = cljs.core.get.call(null,map__28214__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28216_28220 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28217_28221 = null;
var count__28218_28222 = (0);
var i__28219_28223 = (0);
while(true){
if((i__28219_28223 < count__28218_28222)){
var f_28224 = cljs.core._nth.call(null,chunk__28217_28221,i__28219_28223);
figwheel.client.file_reloading.reload_css_file.call(null,f_28224);

var G__28225 = seq__28216_28220;
var G__28226 = chunk__28217_28221;
var G__28227 = count__28218_28222;
var G__28228 = (i__28219_28223 + (1));
seq__28216_28220 = G__28225;
chunk__28217_28221 = G__28226;
count__28218_28222 = G__28227;
i__28219_28223 = G__28228;
continue;
} else {
var temp__4657__auto___28229 = cljs.core.seq.call(null,seq__28216_28220);
if(temp__4657__auto___28229){
var seq__28216_28230__$1 = temp__4657__auto___28229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28216_28230__$1)){
var c__22517__auto___28231 = cljs.core.chunk_first.call(null,seq__28216_28230__$1);
var G__28232 = cljs.core.chunk_rest.call(null,seq__28216_28230__$1);
var G__28233 = c__22517__auto___28231;
var G__28234 = cljs.core.count.call(null,c__22517__auto___28231);
var G__28235 = (0);
seq__28216_28220 = G__28232;
chunk__28217_28221 = G__28233;
count__28218_28222 = G__28234;
i__28219_28223 = G__28235;
continue;
} else {
var f_28236 = cljs.core.first.call(null,seq__28216_28230__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28236);

var G__28237 = cljs.core.next.call(null,seq__28216_28230__$1);
var G__28238 = null;
var G__28239 = (0);
var G__28240 = (0);
seq__28216_28220 = G__28237;
chunk__28217_28221 = G__28238;
count__28218_28222 = G__28239;
i__28219_28223 = G__28240;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28214,map__28214__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28214,map__28214__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1467155006026