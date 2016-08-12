// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26406__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26407__i = 0, G__26407__a = new Array(arguments.length -  0);
while (G__26407__i < G__26407__a.length) {G__26407__a[G__26407__i] = arguments[G__26407__i + 0]; ++G__26407__i;}
  args = new cljs.core.IndexedSeq(G__26407__a,0);
} 
return G__26406__delegate.call(this,args);};
G__26406.cljs$lang$maxFixedArity = 0;
G__26406.cljs$lang$applyTo = (function (arglist__26408){
var args = cljs.core.seq(arglist__26408);
return G__26406__delegate(args);
});
G__26406.cljs$core$IFn$_invoke$arity$variadic = G__26406__delegate;
return G__26406;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26409__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26410__i = 0, G__26410__a = new Array(arguments.length -  0);
while (G__26410__i < G__26410__a.length) {G__26410__a[G__26410__i] = arguments[G__26410__i + 0]; ++G__26410__i;}
  args = new cljs.core.IndexedSeq(G__26410__a,0);
} 
return G__26409__delegate.call(this,args);};
G__26409.cljs$lang$maxFixedArity = 0;
G__26409.cljs$lang$applyTo = (function (arglist__26411){
var args = cljs.core.seq(arglist__26411);
return G__26409__delegate(args);
});
G__26409.cljs$core$IFn$_invoke$arity$variadic = G__26409__delegate;
return G__26409;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1468798172843