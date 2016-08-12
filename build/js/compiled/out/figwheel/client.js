// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-3";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args29869 = [];
var len__22776__auto___29872 = arguments.length;
var i__22777__auto___29873 = (0);
while(true){
if((i__22777__auto___29873 < len__22776__auto___29872)){
args29869.push((arguments[i__22777__auto___29873]));

var G__29874 = (i__22777__auto___29873 + (1));
i__22777__auto___29873 = G__29874;
continue;
} else {
}
break;
}

var G__29871 = args29869.length;
switch (G__29871) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29869.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;
figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22783__auto__ = [];
var len__22776__auto___29877 = arguments.length;
var i__22777__auto___29878 = (0);
while(true){
if((i__22777__auto___29878 < len__22776__auto___29877)){
args__22783__auto__.push((arguments[i__22777__auto___29878]));

var G__29879 = (i__22777__auto___29878 + (1));
i__22777__auto___29878 = G__29879;
continue;
} else {
}
break;
}

var argseq__22784__auto__ = ((((0) < args__22783__auto__.length))?(new cljs.core.IndexedSeq(args__22783__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22784__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29876){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29876));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22783__auto__ = [];
var len__22776__auto___29881 = arguments.length;
var i__22777__auto___29882 = (0);
while(true){
if((i__22777__auto___29882 < len__22776__auto___29881)){
args__22783__auto__.push((arguments[i__22777__auto___29882]));

var G__29883 = (i__22777__auto___29882 + (1));
i__22777__auto___29882 = G__29883;
continue;
} else {
}
break;
}

var argseq__22784__auto__ = ((((0) < args__22783__auto__.length))?(new cljs.core.IndexedSeq(args__22783__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22784__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29880){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29880));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__29884 = cljs.core._EQ_;
var expr__29885 = (function (){var or__21706__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e29888){if((e29888 instanceof Error)){
var e = e29888;
return false;
} else {
throw e29888;

}
}})();
if(cljs.core.truth_(or__21706__auto__)){
return or__21706__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29884.call(null,"true",expr__29885))){
return true;
} else {
if(cljs.core.truth_(pred__29884.call(null,"false",expr__29885))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29885)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e29890){if((e29890 instanceof Error)){
var e = e29890;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e29890;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29891){
var map__29894 = p__29891;
var map__29894__$1 = ((((!((map__29894 == null)))?((((map__29894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29894):map__29894);
var message = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21706__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21706__auto__)){
return or__21706__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21694__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21694__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21694__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24339__auto___30056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___30056,ch){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___30056,ch){
return (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_30021 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30027_30057 = state_30025__$1;
(statearr_30027_30057[(2)] = inst_30021);

(statearr_30027_30057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var state_30025__$1 = state_30025;
var statearr_30028_30058 = state_30025__$1;
(statearr_30028_30058[(2)] = null);

(statearr_30028_30058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_29978 = (state_30025[(7)]);
var inst_29978__$1 = (state_30025[(2)]);
var state_30025__$1 = (function (){var statearr_30029 = state_30025;
(statearr_30029[(7)] = inst_29978__$1);

return statearr_30029;
})();
if(cljs.core.truth_(inst_29978__$1)){
var statearr_30030_30059 = state_30025__$1;
(statearr_30030_30059[(1)] = (5));

} else {
var statearr_30031_30060 = state_30025__$1;
(statearr_30031_30060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (15))){
var inst_29985 = (state_30025[(8)]);
var inst_30000 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29985);
var inst_30001 = cljs.core.first.call(null,inst_30000);
var inst_30002 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30001);
var inst_30003 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30002)].join('');
var inst_30004 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30003);
var state_30025__$1 = state_30025;
var statearr_30032_30061 = state_30025__$1;
(statearr_30032_30061[(2)] = inst_30004);

(statearr_30032_30061[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (13))){
var inst_30009 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30033_30062 = state_30025__$1;
(statearr_30033_30062[(2)] = inst_30009);

(statearr_30033_30062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var state_30025__$1 = state_30025;
var statearr_30034_30063 = state_30025__$1;
(statearr_30034_30063[(2)] = null);

(statearr_30034_30063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (17))){
var inst_30007 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30035_30064 = state_30025__$1;
(statearr_30035_30064[(2)] = inst_30007);

(statearr_30035_30064[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (12))){
var inst_29984 = (state_30025[(9)]);
var inst_29998 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29984,opts);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29998)){
var statearr_30036_30065 = state_30025__$1;
(statearr_30036_30065[(1)] = (15));

} else {
var statearr_30037_30066 = state_30025__$1;
(statearr_30037_30066[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (2))){
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30025__$1,(4),ch);
} else {
if((state_val_30026 === (11))){
var inst_29985 = (state_30025[(8)]);
var inst_29990 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29991 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29985);
var inst_29992 = cljs.core.async.timeout.call(null,(1000));
var inst_29993 = [inst_29991,inst_29992];
var inst_29994 = (new cljs.core.PersistentVector(null,2,(5),inst_29990,inst_29993,null));
var state_30025__$1 = state_30025;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30025__$1,(14),inst_29994);
} else {
if((state_val_30026 === (9))){
var inst_29985 = (state_30025[(8)]);
var inst_30011 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30012 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29985);
var inst_30013 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30012);
var inst_30014 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30013)].join('');
var inst_30015 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30014);
var state_30025__$1 = (function (){var statearr_30038 = state_30025;
(statearr_30038[(10)] = inst_30011);

return statearr_30038;
})();
var statearr_30039_30067 = state_30025__$1;
(statearr_30039_30067[(2)] = inst_30015);

(statearr_30039_30067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (5))){
var inst_29978 = (state_30025[(7)]);
var inst_29980 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29981 = (new cljs.core.PersistentArrayMap(null,2,inst_29980,null));
var inst_29982 = (new cljs.core.PersistentHashSet(null,inst_29981,null));
var inst_29983 = figwheel.client.focus_msgs.call(null,inst_29982,inst_29978);
var inst_29984 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29983);
var inst_29985 = cljs.core.first.call(null,inst_29983);
var inst_29986 = figwheel.client.autoload_QMARK_.call(null);
var state_30025__$1 = (function (){var statearr_30040 = state_30025;
(statearr_30040[(8)] = inst_29985);

(statearr_30040[(9)] = inst_29984);

return statearr_30040;
})();
if(cljs.core.truth_(inst_29986)){
var statearr_30041_30068 = state_30025__$1;
(statearr_30041_30068[(1)] = (8));

} else {
var statearr_30042_30069 = state_30025__$1;
(statearr_30042_30069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (14))){
var inst_29996 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30043_30070 = state_30025__$1;
(statearr_30043_30070[(2)] = inst_29996);

(statearr_30043_30070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (16))){
var state_30025__$1 = state_30025;
var statearr_30044_30071 = state_30025__$1;
(statearr_30044_30071[(2)] = null);

(statearr_30044_30071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (10))){
var inst_30017 = (state_30025[(2)]);
var state_30025__$1 = (function (){var statearr_30045 = state_30025;
(statearr_30045[(11)] = inst_30017);

return statearr_30045;
})();
var statearr_30046_30072 = state_30025__$1;
(statearr_30046_30072[(2)] = null);

(statearr_30046_30072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var inst_29984 = (state_30025[(9)]);
var inst_29988 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29984,opts);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29988)){
var statearr_30047_30073 = state_30025__$1;
(statearr_30047_30073[(1)] = (11));

} else {
var statearr_30048_30074 = state_30025__$1;
(statearr_30048_30074[(1)] = (12));

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
});})(c__24339__auto___30056,ch))
;
return ((function (switch__24227__auto__,c__24339__auto___30056,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24228__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24228__auto____0 = (function (){
var statearr_30052 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30052[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24228__auto__);

(statearr_30052[(1)] = (1));

return statearr_30052;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24228__auto____1 = (function (state_30025){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_30025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e30053){if((e30053 instanceof Object)){
var ex__24231__auto__ = e30053;
var statearr_30054_30075 = state_30025;
(statearr_30054_30075[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30076 = state_30025;
state_30025 = G__30076;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24228__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24228__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24228__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24228__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24228__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___30056,ch))
})();
var state__24341__auto__ = (function (){var statearr_30055 = f__24340__auto__.call(null);
(statearr_30055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___30056);

return statearr_30055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___30056,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30077_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30077_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30080 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30080){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30079){if((e30079 instanceof Error)){
var e = e30079;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30080], null));
} else {
var e = e30079;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30080))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30081){
var map__30088 = p__30081;
var map__30088__$1 = ((((!((map__30088 == null)))?((((map__30088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30088):map__30088);
var opts = map__30088__$1;
var build_id = cljs.core.get.call(null,map__30088__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30088,map__30088__$1,opts,build_id){
return (function (p__30090){
var vec__30091 = p__30090;
var map__30092 = cljs.core.nth.call(null,vec__30091,(0),null);
var map__30092__$1 = ((((!((map__30092 == null)))?((((map__30092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30092):map__30092);
var msg = map__30092__$1;
var msg_name = cljs.core.get.call(null,map__30092__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30091,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30091,map__30092,map__30092__$1,msg,msg_name,_,map__30088,map__30088__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30091,map__30092,map__30092__$1,msg,msg_name,_,map__30088,map__30088__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30088,map__30088__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30098){
var vec__30099 = p__30098;
var map__30100 = cljs.core.nth.call(null,vec__30099,(0),null);
var map__30100__$1 = ((((!((map__30100 == null)))?((((map__30100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30100):map__30100);
var msg = map__30100__$1;
var msg_name = cljs.core.get.call(null,map__30100__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30099,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30102){
var map__30112 = p__30102;
var map__30112__$1 = ((((!((map__30112 == null)))?((((map__30112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30112):map__30112);
var on_compile_warning = cljs.core.get.call(null,map__30112__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30112__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30112,map__30112__$1,on_compile_warning,on_compile_fail){
return (function (p__30114){
var vec__30115 = p__30114;
var map__30116 = cljs.core.nth.call(null,vec__30115,(0),null);
var map__30116__$1 = ((((!((map__30116 == null)))?((((map__30116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30116):map__30116);
var msg = map__30116__$1;
var msg_name = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30115,(1));
var pred__30118 = cljs.core._EQ_;
var expr__30119 = msg_name;
if(cljs.core.truth_(pred__30118.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30119))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30118.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30119))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30112,map__30112__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24339__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto__,msg_hist,msg_names,msg){
return (function (state_30327){
var state_val_30328 = (state_30327[(1)]);
if((state_val_30328 === (7))){
var inst_30255 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
if(cljs.core.truth_(inst_30255)){
var statearr_30329_30375 = state_30327__$1;
(statearr_30329_30375[(1)] = (8));

} else {
var statearr_30330_30376 = state_30327__$1;
(statearr_30330_30376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (20))){
var inst_30321 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30331_30377 = state_30327__$1;
(statearr_30331_30377[(2)] = inst_30321);

(statearr_30331_30377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (27))){
var inst_30317 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30332_30378 = state_30327__$1;
(statearr_30332_30378[(2)] = inst_30317);

(statearr_30332_30378[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (1))){
var inst_30248 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30327__$1 = state_30327;
if(cljs.core.truth_(inst_30248)){
var statearr_30333_30379 = state_30327__$1;
(statearr_30333_30379[(1)] = (2));

} else {
var statearr_30334_30380 = state_30327__$1;
(statearr_30334_30380[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (24))){
var inst_30319 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30335_30381 = state_30327__$1;
(statearr_30335_30381[(2)] = inst_30319);

(statearr_30335_30381[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (4))){
var inst_30325 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30327__$1,inst_30325);
} else {
if((state_val_30328 === (15))){
var inst_30323 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30336_30382 = state_30327__$1;
(statearr_30336_30382[(2)] = inst_30323);

(statearr_30336_30382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (21))){
var inst_30282 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30337_30383 = state_30327__$1;
(statearr_30337_30383[(2)] = inst_30282);

(statearr_30337_30383[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (31))){
var inst_30306 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30327__$1 = state_30327;
if(cljs.core.truth_(inst_30306)){
var statearr_30338_30384 = state_30327__$1;
(statearr_30338_30384[(1)] = (34));

} else {
var statearr_30339_30385 = state_30327__$1;
(statearr_30339_30385[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (32))){
var inst_30315 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30340_30386 = state_30327__$1;
(statearr_30340_30386[(2)] = inst_30315);

(statearr_30340_30386[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (33))){
var inst_30304 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30341_30387 = state_30327__$1;
(statearr_30341_30387[(2)] = inst_30304);

(statearr_30341_30387[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (13))){
var inst_30269 = figwheel.client.heads_up.clear.call(null);
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30327__$1,(16),inst_30269);
} else {
if((state_val_30328 === (22))){
var inst_30286 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30287 = figwheel.client.heads_up.append_warning_message.call(null,inst_30286);
var state_30327__$1 = state_30327;
var statearr_30342_30388 = state_30327__$1;
(statearr_30342_30388[(2)] = inst_30287);

(statearr_30342_30388[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (36))){
var inst_30313 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30343_30389 = state_30327__$1;
(statearr_30343_30389[(2)] = inst_30313);

(statearr_30343_30389[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (29))){
var inst_30297 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30344_30390 = state_30327__$1;
(statearr_30344_30390[(2)] = inst_30297);

(statearr_30344_30390[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (6))){
var inst_30250 = (state_30327[(7)]);
var state_30327__$1 = state_30327;
var statearr_30345_30391 = state_30327__$1;
(statearr_30345_30391[(2)] = inst_30250);

(statearr_30345_30391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (28))){
var inst_30293 = (state_30327[(2)]);
var inst_30294 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30295 = figwheel.client.heads_up.display_warning.call(null,inst_30294);
var state_30327__$1 = (function (){var statearr_30346 = state_30327;
(statearr_30346[(8)] = inst_30293);

return statearr_30346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30327__$1,(29),inst_30295);
} else {
if((state_val_30328 === (25))){
var inst_30291 = figwheel.client.heads_up.clear.call(null);
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30327__$1,(28),inst_30291);
} else {
if((state_val_30328 === (34))){
var inst_30308 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30327__$1,(37),inst_30308);
} else {
if((state_val_30328 === (17))){
var inst_30275 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30347_30392 = state_30327__$1;
(statearr_30347_30392[(2)] = inst_30275);

(statearr_30347_30392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (3))){
var inst_30267 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30327__$1 = state_30327;
if(cljs.core.truth_(inst_30267)){
var statearr_30348_30393 = state_30327__$1;
(statearr_30348_30393[(1)] = (13));

} else {
var statearr_30349_30394 = state_30327__$1;
(statearr_30349_30394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (12))){
var inst_30263 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30350_30395 = state_30327__$1;
(statearr_30350_30395[(2)] = inst_30263);

(statearr_30350_30395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (2))){
var inst_30250 = (state_30327[(7)]);
var inst_30250__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30327__$1 = (function (){var statearr_30351 = state_30327;
(statearr_30351[(7)] = inst_30250__$1);

return statearr_30351;
})();
if(cljs.core.truth_(inst_30250__$1)){
var statearr_30352_30396 = state_30327__$1;
(statearr_30352_30396[(1)] = (5));

} else {
var statearr_30353_30397 = state_30327__$1;
(statearr_30353_30397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (23))){
var inst_30289 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30327__$1 = state_30327;
if(cljs.core.truth_(inst_30289)){
var statearr_30354_30398 = state_30327__$1;
(statearr_30354_30398[(1)] = (25));

} else {
var statearr_30355_30399 = state_30327__$1;
(statearr_30355_30399[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (35))){
var state_30327__$1 = state_30327;
var statearr_30356_30400 = state_30327__$1;
(statearr_30356_30400[(2)] = null);

(statearr_30356_30400[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (19))){
var inst_30284 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30327__$1 = state_30327;
if(cljs.core.truth_(inst_30284)){
var statearr_30357_30401 = state_30327__$1;
(statearr_30357_30401[(1)] = (22));

} else {
var statearr_30358_30402 = state_30327__$1;
(statearr_30358_30402[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (11))){
var inst_30259 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30359_30403 = state_30327__$1;
(statearr_30359_30403[(2)] = inst_30259);

(statearr_30359_30403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (9))){
var inst_30261 = figwheel.client.heads_up.clear.call(null);
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30327__$1,(12),inst_30261);
} else {
if((state_val_30328 === (5))){
var inst_30252 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30327__$1 = state_30327;
var statearr_30360_30404 = state_30327__$1;
(statearr_30360_30404[(2)] = inst_30252);

(statearr_30360_30404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (14))){
var inst_30277 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30327__$1 = state_30327;
if(cljs.core.truth_(inst_30277)){
var statearr_30361_30405 = state_30327__$1;
(statearr_30361_30405[(1)] = (18));

} else {
var statearr_30362_30406 = state_30327__$1;
(statearr_30362_30406[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (26))){
var inst_30299 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30327__$1 = state_30327;
if(cljs.core.truth_(inst_30299)){
var statearr_30363_30407 = state_30327__$1;
(statearr_30363_30407[(1)] = (30));

} else {
var statearr_30364_30408 = state_30327__$1;
(statearr_30364_30408[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (16))){
var inst_30271 = (state_30327[(2)]);
var inst_30272 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30273 = figwheel.client.heads_up.display_exception.call(null,inst_30272);
var state_30327__$1 = (function (){var statearr_30365 = state_30327;
(statearr_30365[(9)] = inst_30271);

return statearr_30365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30327__$1,(17),inst_30273);
} else {
if((state_val_30328 === (30))){
var inst_30301 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30302 = figwheel.client.heads_up.display_warning.call(null,inst_30301);
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30327__$1,(33),inst_30302);
} else {
if((state_val_30328 === (10))){
var inst_30265 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30366_30409 = state_30327__$1;
(statearr_30366_30409[(2)] = inst_30265);

(statearr_30366_30409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (18))){
var inst_30279 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30280 = figwheel.client.heads_up.display_exception.call(null,inst_30279);
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30327__$1,(21),inst_30280);
} else {
if((state_val_30328 === (37))){
var inst_30310 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30367_30410 = state_30327__$1;
(statearr_30367_30410[(2)] = inst_30310);

(statearr_30367_30410[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (8))){
var inst_30257 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30327__$1,(11),inst_30257);
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
});})(c__24339__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24227__auto__,c__24339__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto____0 = (function (){
var statearr_30371 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30371[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto__);

(statearr_30371[(1)] = (1));

return statearr_30371;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto____1 = (function (state_30327){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_30327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e30372){if((e30372 instanceof Object)){
var ex__24231__auto__ = e30372;
var statearr_30373_30411 = state_30327;
(statearr_30373_30411[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30412 = state_30327;
state_30327 = G__30412;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto__ = function(state_30327){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto____1.call(this,state_30327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto__,msg_hist,msg_names,msg))
})();
var state__24341__auto__ = (function (){var statearr_30374 = f__24340__auto__.call(null);
(statearr_30374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto__);

return statearr_30374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto__,msg_hist,msg_names,msg))
);

return c__24339__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24339__auto___30475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___30475,ch){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___30475,ch){
return (function (state_30458){
var state_val_30459 = (state_30458[(1)]);
if((state_val_30459 === (1))){
var state_30458__$1 = state_30458;
var statearr_30460_30476 = state_30458__$1;
(statearr_30460_30476[(2)] = null);

(statearr_30460_30476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30459 === (2))){
var state_30458__$1 = state_30458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30458__$1,(4),ch);
} else {
if((state_val_30459 === (3))){
var inst_30456 = (state_30458[(2)]);
var state_30458__$1 = state_30458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30458__$1,inst_30456);
} else {
if((state_val_30459 === (4))){
var inst_30446 = (state_30458[(7)]);
var inst_30446__$1 = (state_30458[(2)]);
var state_30458__$1 = (function (){var statearr_30461 = state_30458;
(statearr_30461[(7)] = inst_30446__$1);

return statearr_30461;
})();
if(cljs.core.truth_(inst_30446__$1)){
var statearr_30462_30477 = state_30458__$1;
(statearr_30462_30477[(1)] = (5));

} else {
var statearr_30463_30478 = state_30458__$1;
(statearr_30463_30478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30459 === (5))){
var inst_30446 = (state_30458[(7)]);
var inst_30448 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30446);
var state_30458__$1 = state_30458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30458__$1,(8),inst_30448);
} else {
if((state_val_30459 === (6))){
var state_30458__$1 = state_30458;
var statearr_30464_30479 = state_30458__$1;
(statearr_30464_30479[(2)] = null);

(statearr_30464_30479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30459 === (7))){
var inst_30454 = (state_30458[(2)]);
var state_30458__$1 = state_30458;
var statearr_30465_30480 = state_30458__$1;
(statearr_30465_30480[(2)] = inst_30454);

(statearr_30465_30480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30459 === (8))){
var inst_30450 = (state_30458[(2)]);
var state_30458__$1 = (function (){var statearr_30466 = state_30458;
(statearr_30466[(8)] = inst_30450);

return statearr_30466;
})();
var statearr_30467_30481 = state_30458__$1;
(statearr_30467_30481[(2)] = null);

(statearr_30467_30481[(1)] = (2));


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
});})(c__24339__auto___30475,ch))
;
return ((function (switch__24227__auto__,c__24339__auto___30475,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24228__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24228__auto____0 = (function (){
var statearr_30471 = [null,null,null,null,null,null,null,null,null];
(statearr_30471[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24228__auto__);

(statearr_30471[(1)] = (1));

return statearr_30471;
});
var figwheel$client$heads_up_plugin_$_state_machine__24228__auto____1 = (function (state_30458){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_30458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e30472){if((e30472 instanceof Object)){
var ex__24231__auto__ = e30472;
var statearr_30473_30482 = state_30458;
(statearr_30473_30482[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30483 = state_30458;
state_30458 = G__30483;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24228__auto__ = function(state_30458){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24228__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24228__auto____1.call(this,state_30458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24228__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24228__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___30475,ch))
})();
var state__24341__auto__ = (function (){var statearr_30474 = f__24340__auto__.call(null);
(statearr_30474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___30475);

return statearr_30474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___30475,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24339__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto__){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto__){
return (function (state_30504){
var state_val_30505 = (state_30504[(1)]);
if((state_val_30505 === (1))){
var inst_30499 = cljs.core.async.timeout.call(null,(3000));
var state_30504__$1 = state_30504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30504__$1,(2),inst_30499);
} else {
if((state_val_30505 === (2))){
var inst_30501 = (state_30504[(2)]);
var inst_30502 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30504__$1 = (function (){var statearr_30506 = state_30504;
(statearr_30506[(7)] = inst_30501);

return statearr_30506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30504__$1,inst_30502);
} else {
return null;
}
}
});})(c__24339__auto__))
;
return ((function (switch__24227__auto__,c__24339__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24228__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24228__auto____0 = (function (){
var statearr_30510 = [null,null,null,null,null,null,null,null];
(statearr_30510[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24228__auto__);

(statearr_30510[(1)] = (1));

return statearr_30510;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24228__auto____1 = (function (state_30504){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_30504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e30511){if((e30511 instanceof Object)){
var ex__24231__auto__ = e30511;
var statearr_30512_30514 = state_30504;
(statearr_30512_30514[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30515 = state_30504;
state_30504 = G__30515;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24228__auto__ = function(state_30504){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24228__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24228__auto____1.call(this,state_30504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24228__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24228__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto__))
})();
var state__24341__auto__ = (function (){var statearr_30513 = f__24340__auto__.call(null);
(statearr_30513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto__);

return statearr_30513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto__))
);

return c__24339__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24339__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto__,figwheel_version,temp__4657__auto__){
return (function (state_30538){
var state_val_30539 = (state_30538[(1)]);
if((state_val_30539 === (1))){
var inst_30532 = cljs.core.async.timeout.call(null,(2000));
var state_30538__$1 = state_30538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30538__$1,(2),inst_30532);
} else {
if((state_val_30539 === (2))){
var inst_30534 = (state_30538[(2)]);
var inst_30535 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_30536 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30535);
var state_30538__$1 = (function (){var statearr_30540 = state_30538;
(statearr_30540[(7)] = inst_30534);

return statearr_30540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30538__$1,inst_30536);
} else {
return null;
}
}
});})(c__24339__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__24227__auto__,c__24339__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto____0 = (function (){
var statearr_30544 = [null,null,null,null,null,null,null,null];
(statearr_30544[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto__);

(statearr_30544[(1)] = (1));

return statearr_30544;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto____1 = (function (state_30538){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_30538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e30545){if((e30545 instanceof Object)){
var ex__24231__auto__ = e30545;
var statearr_30546_30548 = state_30538;
(statearr_30546_30548[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30549 = state_30538;
state_30538 = G__30549;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto__ = function(state_30538){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto____1.call(this,state_30538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto__,figwheel_version,temp__4657__auto__))
})();
var state__24341__auto__ = (function (){var statearr_30547 = f__24340__auto__.call(null);
(statearr_30547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto__);

return statearr_30547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto__,figwheel_version,temp__4657__auto__))
);

return c__24339__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30550){
var map__30554 = p__30550;
var map__30554__$1 = ((((!((map__30554 == null)))?((((map__30554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30554):map__30554);
var file = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30556 = "";
var G__30556__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__30556),cljs.core.str("file "),cljs.core.str(file)].join(''):G__30556);
var G__30556__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__30556__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__30556__$1);
if(cljs.core.truth_((function (){var and__21694__auto__ = line;
if(cljs.core.truth_(and__21694__auto__)){
return column;
} else {
return and__21694__auto__;
}
})())){
return [cljs.core.str(G__30556__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__30556__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30557){
var map__30564 = p__30557;
var map__30564__$1 = ((((!((map__30564 == null)))?((((map__30564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30564):map__30564);
var ed = map__30564__$1;
var formatted_exception = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30566_30570 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30567_30571 = null;
var count__30568_30572 = (0);
var i__30569_30573 = (0);
while(true){
if((i__30569_30573 < count__30568_30572)){
var msg_30574 = cljs.core._nth.call(null,chunk__30567_30571,i__30569_30573);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30574);

var G__30575 = seq__30566_30570;
var G__30576 = chunk__30567_30571;
var G__30577 = count__30568_30572;
var G__30578 = (i__30569_30573 + (1));
seq__30566_30570 = G__30575;
chunk__30567_30571 = G__30576;
count__30568_30572 = G__30577;
i__30569_30573 = G__30578;
continue;
} else {
var temp__4657__auto___30579 = cljs.core.seq.call(null,seq__30566_30570);
if(temp__4657__auto___30579){
var seq__30566_30580__$1 = temp__4657__auto___30579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30566_30580__$1)){
var c__22517__auto___30581 = cljs.core.chunk_first.call(null,seq__30566_30580__$1);
var G__30582 = cljs.core.chunk_rest.call(null,seq__30566_30580__$1);
var G__30583 = c__22517__auto___30581;
var G__30584 = cljs.core.count.call(null,c__22517__auto___30581);
var G__30585 = (0);
seq__30566_30570 = G__30582;
chunk__30567_30571 = G__30583;
count__30568_30572 = G__30584;
i__30569_30573 = G__30585;
continue;
} else {
var msg_30586 = cljs.core.first.call(null,seq__30566_30580__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30586);

var G__30587 = cljs.core.next.call(null,seq__30566_30580__$1);
var G__30588 = null;
var G__30589 = (0);
var G__30590 = (0);
seq__30566_30570 = G__30587;
chunk__30567_30571 = G__30588;
count__30568_30572 = G__30589;
i__30569_30573 = G__30590;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30591){
var map__30594 = p__30591;
var map__30594__$1 = ((((!((map__30594 == null)))?((((map__30594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30594):map__30594);
var w = map__30594__$1;
var message = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21694__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21694__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21694__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30602 = cljs.core.seq.call(null,plugins);
var chunk__30603 = null;
var count__30604 = (0);
var i__30605 = (0);
while(true){
if((i__30605 < count__30604)){
var vec__30606 = cljs.core._nth.call(null,chunk__30603,i__30605);
var k = cljs.core.nth.call(null,vec__30606,(0),null);
var plugin = cljs.core.nth.call(null,vec__30606,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30608 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30602,chunk__30603,count__30604,i__30605,pl_30608,vec__30606,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30608.call(null,msg_hist);
});})(seq__30602,chunk__30603,count__30604,i__30605,pl_30608,vec__30606,k,plugin))
);
} else {
}

var G__30609 = seq__30602;
var G__30610 = chunk__30603;
var G__30611 = count__30604;
var G__30612 = (i__30605 + (1));
seq__30602 = G__30609;
chunk__30603 = G__30610;
count__30604 = G__30611;
i__30605 = G__30612;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30602);
if(temp__4657__auto__){
var seq__30602__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30602__$1)){
var c__22517__auto__ = cljs.core.chunk_first.call(null,seq__30602__$1);
var G__30613 = cljs.core.chunk_rest.call(null,seq__30602__$1);
var G__30614 = c__22517__auto__;
var G__30615 = cljs.core.count.call(null,c__22517__auto__);
var G__30616 = (0);
seq__30602 = G__30613;
chunk__30603 = G__30614;
count__30604 = G__30615;
i__30605 = G__30616;
continue;
} else {
var vec__30607 = cljs.core.first.call(null,seq__30602__$1);
var k = cljs.core.nth.call(null,vec__30607,(0),null);
var plugin = cljs.core.nth.call(null,vec__30607,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30617 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30602,chunk__30603,count__30604,i__30605,pl_30617,vec__30607,k,plugin,seq__30602__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30617.call(null,msg_hist);
});})(seq__30602,chunk__30603,count__30604,i__30605,pl_30617,vec__30607,k,plugin,seq__30602__$1,temp__4657__auto__))
);
} else {
}

var G__30618 = cljs.core.next.call(null,seq__30602__$1);
var G__30619 = null;
var G__30620 = (0);
var G__30621 = (0);
seq__30602 = G__30618;
chunk__30603 = G__30619;
count__30604 = G__30620;
i__30605 = G__30621;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30622 = [];
var len__22776__auto___30629 = arguments.length;
var i__22777__auto___30630 = (0);
while(true){
if((i__22777__auto___30630 < len__22776__auto___30629)){
args30622.push((arguments[i__22777__auto___30630]));

var G__30631 = (i__22777__auto___30630 + (1));
i__22777__auto___30630 = G__30631;
continue;
} else {
}
break;
}

var G__30624 = args30622.length;
switch (G__30624) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30622.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30625_30633 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30626_30634 = null;
var count__30627_30635 = (0);
var i__30628_30636 = (0);
while(true){
if((i__30628_30636 < count__30627_30635)){
var msg_30637 = cljs.core._nth.call(null,chunk__30626_30634,i__30628_30636);
figwheel.client.socket.handle_incoming_message.call(null,msg_30637);

var G__30638 = seq__30625_30633;
var G__30639 = chunk__30626_30634;
var G__30640 = count__30627_30635;
var G__30641 = (i__30628_30636 + (1));
seq__30625_30633 = G__30638;
chunk__30626_30634 = G__30639;
count__30627_30635 = G__30640;
i__30628_30636 = G__30641;
continue;
} else {
var temp__4657__auto___30642 = cljs.core.seq.call(null,seq__30625_30633);
if(temp__4657__auto___30642){
var seq__30625_30643__$1 = temp__4657__auto___30642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30625_30643__$1)){
var c__22517__auto___30644 = cljs.core.chunk_first.call(null,seq__30625_30643__$1);
var G__30645 = cljs.core.chunk_rest.call(null,seq__30625_30643__$1);
var G__30646 = c__22517__auto___30644;
var G__30647 = cljs.core.count.call(null,c__22517__auto___30644);
var G__30648 = (0);
seq__30625_30633 = G__30645;
chunk__30626_30634 = G__30646;
count__30627_30635 = G__30647;
i__30628_30636 = G__30648;
continue;
} else {
var msg_30649 = cljs.core.first.call(null,seq__30625_30643__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30649);

var G__30650 = cljs.core.next.call(null,seq__30625_30643__$1);
var G__30651 = null;
var G__30652 = (0);
var G__30653 = (0);
seq__30625_30633 = G__30650;
chunk__30626_30634 = G__30651;
count__30627_30635 = G__30652;
i__30628_30636 = G__30653;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22783__auto__ = [];
var len__22776__auto___30658 = arguments.length;
var i__22777__auto___30659 = (0);
while(true){
if((i__22777__auto___30659 < len__22776__auto___30658)){
args__22783__auto__.push((arguments[i__22777__auto___30659]));

var G__30660 = (i__22777__auto___30659 + (1));
i__22777__auto___30659 = G__30660;
continue;
} else {
}
break;
}

var argseq__22784__auto__ = ((((0) < args__22783__auto__.length))?(new cljs.core.IndexedSeq(args__22783__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22784__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30655){
var map__30656 = p__30655;
var map__30656__$1 = ((((!((map__30656 == null)))?((((map__30656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30656):map__30656);
var opts = map__30656__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30654){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30654));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30662){if((e30662 instanceof Error)){
var e = e30662;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30662;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30666){
var map__30667 = p__30666;
var map__30667__$1 = ((((!((map__30667 == null)))?((((map__30667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30667):map__30667);
var msg_name = cljs.core.get.call(null,map__30667__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1467155011515