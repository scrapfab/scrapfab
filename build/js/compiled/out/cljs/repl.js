// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28257_28271 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28258_28272 = null;
var count__28259_28273 = (0);
var i__28260_28274 = (0);
while(true){
if((i__28260_28274 < count__28259_28273)){
var f_28275 = cljs.core._nth.call(null,chunk__28258_28272,i__28260_28274);
cljs.core.println.call(null,"  ",f_28275);

var G__28276 = seq__28257_28271;
var G__28277 = chunk__28258_28272;
var G__28278 = count__28259_28273;
var G__28279 = (i__28260_28274 + (1));
seq__28257_28271 = G__28276;
chunk__28258_28272 = G__28277;
count__28259_28273 = G__28278;
i__28260_28274 = G__28279;
continue;
} else {
var temp__4657__auto___28280 = cljs.core.seq.call(null,seq__28257_28271);
if(temp__4657__auto___28280){
var seq__28257_28281__$1 = temp__4657__auto___28280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28257_28281__$1)){
var c__22517__auto___28282 = cljs.core.chunk_first.call(null,seq__28257_28281__$1);
var G__28283 = cljs.core.chunk_rest.call(null,seq__28257_28281__$1);
var G__28284 = c__22517__auto___28282;
var G__28285 = cljs.core.count.call(null,c__22517__auto___28282);
var G__28286 = (0);
seq__28257_28271 = G__28283;
chunk__28258_28272 = G__28284;
count__28259_28273 = G__28285;
i__28260_28274 = G__28286;
continue;
} else {
var f_28287 = cljs.core.first.call(null,seq__28257_28281__$1);
cljs.core.println.call(null,"  ",f_28287);

var G__28288 = cljs.core.next.call(null,seq__28257_28281__$1);
var G__28289 = null;
var G__28290 = (0);
var G__28291 = (0);
seq__28257_28271 = G__28288;
chunk__28258_28272 = G__28289;
count__28259_28273 = G__28290;
i__28260_28274 = G__28291;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28292 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21706__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21706__auto__)){
return or__21706__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28292);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28292)))?cljs.core.second.call(null,arglists_28292):arglists_28292));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28261 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28262 = null;
var count__28263 = (0);
var i__28264 = (0);
while(true){
if((i__28264 < count__28263)){
var vec__28265 = cljs.core._nth.call(null,chunk__28262,i__28264);
var name = cljs.core.nth.call(null,vec__28265,(0),null);
var map__28266 = cljs.core.nth.call(null,vec__28265,(1),null);
var map__28266__$1 = ((((!((map__28266 == null)))?((((map__28266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28266):map__28266);
var doc = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28293 = seq__28261;
var G__28294 = chunk__28262;
var G__28295 = count__28263;
var G__28296 = (i__28264 + (1));
seq__28261 = G__28293;
chunk__28262 = G__28294;
count__28263 = G__28295;
i__28264 = G__28296;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28261);
if(temp__4657__auto__){
var seq__28261__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28261__$1)){
var c__22517__auto__ = cljs.core.chunk_first.call(null,seq__28261__$1);
var G__28297 = cljs.core.chunk_rest.call(null,seq__28261__$1);
var G__28298 = c__22517__auto__;
var G__28299 = cljs.core.count.call(null,c__22517__auto__);
var G__28300 = (0);
seq__28261 = G__28297;
chunk__28262 = G__28298;
count__28263 = G__28299;
i__28264 = G__28300;
continue;
} else {
var vec__28268 = cljs.core.first.call(null,seq__28261__$1);
var name = cljs.core.nth.call(null,vec__28268,(0),null);
var map__28269 = cljs.core.nth.call(null,vec__28268,(1),null);
var map__28269__$1 = ((((!((map__28269 == null)))?((((map__28269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28269):map__28269);
var doc = cljs.core.get.call(null,map__28269__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28269__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28301 = cljs.core.next.call(null,seq__28261__$1);
var G__28302 = null;
var G__28303 = (0);
var G__28304 = (0);
seq__28261 = G__28301;
chunk__28262 = G__28302;
count__28263 = G__28303;
i__28264 = G__28304;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1467155006157