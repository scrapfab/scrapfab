// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('scrapfab.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40492__delegate = function (x){
if(cljs.core.truth_(scrapfab.core.on_js_reload)){
return cljs.core.apply.call(null,scrapfab.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'scrapfab.core/on-js-reload' is missing");
}
};
var G__40492 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40493__i = 0, G__40493__a = new Array(arguments.length -  0);
while (G__40493__i < G__40493__a.length) {G__40493__a[G__40493__i] = arguments[G__40493__i + 0]; ++G__40493__i;}
  x = new cljs.core.IndexedSeq(G__40493__a,0);
} 
return G__40492__delegate.call(this,x);};
G__40492.cljs$lang$maxFixedArity = 0;
G__40492.cljs$lang$applyTo = (function (arglist__40494){
var x = cljs.core.seq(arglist__40494);
return G__40492__delegate(x);
});
G__40492.cljs$core$IFn$_invoke$arity$variadic = G__40492__delegate;
return G__40492;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1468903445639