// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24384 = [];
var len__22776__auto___24390 = arguments.length;
var i__22777__auto___24391 = (0);
while(true){
if((i__22777__auto___24391 < len__22776__auto___24390)){
args24384.push((arguments[i__22777__auto___24391]));

var G__24392 = (i__22777__auto___24391 + (1));
i__22777__auto___24391 = G__24392;
continue;
} else {
}
break;
}

var G__24386 = args24384.length;
switch (G__24386) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24384.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24387 = (function (f,blockable,meta24388){
this.f = f;
this.blockable = blockable;
this.meta24388 = meta24388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24389,meta24388__$1){
var self__ = this;
var _24389__$1 = this;
return (new cljs.core.async.t_cljs$core$async24387(self__.f,self__.blockable,meta24388__$1));
});

cljs.core.async.t_cljs$core$async24387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24389){
var self__ = this;
var _24389__$1 = this;
return self__.meta24388;
});

cljs.core.async.t_cljs$core$async24387.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24388","meta24388",-387024604,null)], null);
});

cljs.core.async.t_cljs$core$async24387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24387";

cljs.core.async.t_cljs$core$async24387.cljs$lang$ctorPrWriter = (function (this__22312__auto__,writer__22313__auto__,opt__22314__auto__){
return cljs.core._write.call(null,writer__22313__auto__,"cljs.core.async/t_cljs$core$async24387");
});

cljs.core.async.__GT_t_cljs$core$async24387 = (function cljs$core$async$__GT_t_cljs$core$async24387(f__$1,blockable__$1,meta24388){
return (new cljs.core.async.t_cljs$core$async24387(f__$1,blockable__$1,meta24388));
});

}

return (new cljs.core.async.t_cljs$core$async24387(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24396 = [];
var len__22776__auto___24399 = arguments.length;
var i__22777__auto___24400 = (0);
while(true){
if((i__22777__auto___24400 < len__22776__auto___24399)){
args24396.push((arguments[i__22777__auto___24400]));

var G__24401 = (i__22777__auto___24400 + (1));
i__22777__auto___24400 = G__24401;
continue;
} else {
}
break;
}

var G__24398 = args24396.length;
switch (G__24398) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24396.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24403 = [];
var len__22776__auto___24406 = arguments.length;
var i__22777__auto___24407 = (0);
while(true){
if((i__22777__auto___24407 < len__22776__auto___24406)){
args24403.push((arguments[i__22777__auto___24407]));

var G__24408 = (i__22777__auto___24407 + (1));
i__22777__auto___24407 = G__24408;
continue;
} else {
}
break;
}

var G__24405 = args24403.length;
switch (G__24405) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24403.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24410 = [];
var len__22776__auto___24413 = arguments.length;
var i__22777__auto___24414 = (0);
while(true){
if((i__22777__auto___24414 < len__22776__auto___24413)){
args24410.push((arguments[i__22777__auto___24414]));

var G__24415 = (i__22777__auto___24414 + (1));
i__22777__auto___24414 = G__24415;
continue;
} else {
}
break;
}

var G__24412 = args24410.length;
switch (G__24412) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24410.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24417 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24417);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24417,ret){
return (function (){
return fn1.call(null,val_24417);
});})(val_24417,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24418 = [];
var len__22776__auto___24421 = arguments.length;
var i__22777__auto___24422 = (0);
while(true){
if((i__22777__auto___24422 < len__22776__auto___24421)){
args24418.push((arguments[i__22777__auto___24422]));

var G__24423 = (i__22777__auto___24422 + (1));
i__22777__auto___24422 = G__24423;
continue;
} else {
}
break;
}

var G__24420 = args24418.length;
switch (G__24420) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24418.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22621__auto___24425 = n;
var x_24426 = (0);
while(true){
if((x_24426 < n__22621__auto___24425)){
(a[x_24426] = (0));

var G__24427 = (x_24426 + (1));
x_24426 = G__24427;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24428 = (i + (1));
i = G__24428;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24432 = (function (alt_flag,flag,meta24433){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24433 = meta24433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24434,meta24433__$1){
var self__ = this;
var _24434__$1 = this;
return (new cljs.core.async.t_cljs$core$async24432(self__.alt_flag,self__.flag,meta24433__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24434){
var self__ = this;
var _24434__$1 = this;
return self__.meta24433;
});})(flag))
;

cljs.core.async.t_cljs$core$async24432.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24432.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24433","meta24433",-1109846524,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24432";

cljs.core.async.t_cljs$core$async24432.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22312__auto__,writer__22313__auto__,opt__22314__auto__){
return cljs.core._write.call(null,writer__22313__auto__,"cljs.core.async/t_cljs$core$async24432");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24432 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24432(alt_flag__$1,flag__$1,meta24433){
return (new cljs.core.async.t_cljs$core$async24432(alt_flag__$1,flag__$1,meta24433));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24432(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24438 = (function (alt_handler,flag,cb,meta24439){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24439 = meta24439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24440,meta24439__$1){
var self__ = this;
var _24440__$1 = this;
return (new cljs.core.async.t_cljs$core$async24438(self__.alt_handler,self__.flag,self__.cb,meta24439__$1));
});

cljs.core.async.t_cljs$core$async24438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24440){
var self__ = this;
var _24440__$1 = this;
return self__.meta24439;
});

cljs.core.async.t_cljs$core$async24438.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24438.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24439","meta24439",-1397831108,null)], null);
});

cljs.core.async.t_cljs$core$async24438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24438";

cljs.core.async.t_cljs$core$async24438.cljs$lang$ctorPrWriter = (function (this__22312__auto__,writer__22313__auto__,opt__22314__auto__){
return cljs.core._write.call(null,writer__22313__auto__,"cljs.core.async/t_cljs$core$async24438");
});

cljs.core.async.__GT_t_cljs$core$async24438 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24438(alt_handler__$1,flag__$1,cb__$1,meta24439){
return (new cljs.core.async.t_cljs$core$async24438(alt_handler__$1,flag__$1,cb__$1,meta24439));
});

}

return (new cljs.core.async.t_cljs$core$async24438(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24441_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24441_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24442_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24442_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21706__auto__ = wport;
if(cljs.core.truth_(or__21706__auto__)){
return or__21706__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24443 = (i + (1));
i = G__24443;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21706__auto__ = ret;
if(cljs.core.truth_(or__21706__auto__)){
return or__21706__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21694__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21694__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21694__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22783__auto__ = [];
var len__22776__auto___24449 = arguments.length;
var i__22777__auto___24450 = (0);
while(true){
if((i__22777__auto___24450 < len__22776__auto___24449)){
args__22783__auto__.push((arguments[i__22777__auto___24450]));

var G__24451 = (i__22777__auto___24450 + (1));
i__22777__auto___24450 = G__24451;
continue;
} else {
}
break;
}

var argseq__22784__auto__ = ((((1) < args__22783__auto__.length))?(new cljs.core.IndexedSeq(args__22783__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22784__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24446){
var map__24447 = p__24446;
var map__24447__$1 = ((((!((map__24447 == null)))?((((map__24447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24447):map__24447);
var opts = map__24447__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24444){
var G__24445 = cljs.core.first.call(null,seq24444);
var seq24444__$1 = cljs.core.next.call(null,seq24444);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24445,seq24444__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24452 = [];
var len__22776__auto___24502 = arguments.length;
var i__22777__auto___24503 = (0);
while(true){
if((i__22777__auto___24503 < len__22776__auto___24502)){
args24452.push((arguments[i__22777__auto___24503]));

var G__24504 = (i__22777__auto___24503 + (1));
i__22777__auto___24503 = G__24504;
continue;
} else {
}
break;
}

var G__24454 = args24452.length;
switch (G__24454) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24452.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24339__auto___24506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___24506){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___24506){
return (function (state_24478){
var state_val_24479 = (state_24478[(1)]);
if((state_val_24479 === (7))){
var inst_24474 = (state_24478[(2)]);
var state_24478__$1 = state_24478;
var statearr_24480_24507 = state_24478__$1;
(statearr_24480_24507[(2)] = inst_24474);

(statearr_24480_24507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (1))){
var state_24478__$1 = state_24478;
var statearr_24481_24508 = state_24478__$1;
(statearr_24481_24508[(2)] = null);

(statearr_24481_24508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (4))){
var inst_24457 = (state_24478[(7)]);
var inst_24457__$1 = (state_24478[(2)]);
var inst_24458 = (inst_24457__$1 == null);
var state_24478__$1 = (function (){var statearr_24482 = state_24478;
(statearr_24482[(7)] = inst_24457__$1);

return statearr_24482;
})();
if(cljs.core.truth_(inst_24458)){
var statearr_24483_24509 = state_24478__$1;
(statearr_24483_24509[(1)] = (5));

} else {
var statearr_24484_24510 = state_24478__$1;
(statearr_24484_24510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (13))){
var state_24478__$1 = state_24478;
var statearr_24485_24511 = state_24478__$1;
(statearr_24485_24511[(2)] = null);

(statearr_24485_24511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (6))){
var inst_24457 = (state_24478[(7)]);
var state_24478__$1 = state_24478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24478__$1,(11),to,inst_24457);
} else {
if((state_val_24479 === (3))){
var inst_24476 = (state_24478[(2)]);
var state_24478__$1 = state_24478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24478__$1,inst_24476);
} else {
if((state_val_24479 === (12))){
var state_24478__$1 = state_24478;
var statearr_24486_24512 = state_24478__$1;
(statearr_24486_24512[(2)] = null);

(statearr_24486_24512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (2))){
var state_24478__$1 = state_24478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24478__$1,(4),from);
} else {
if((state_val_24479 === (11))){
var inst_24467 = (state_24478[(2)]);
var state_24478__$1 = state_24478;
if(cljs.core.truth_(inst_24467)){
var statearr_24487_24513 = state_24478__$1;
(statearr_24487_24513[(1)] = (12));

} else {
var statearr_24488_24514 = state_24478__$1;
(statearr_24488_24514[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (9))){
var state_24478__$1 = state_24478;
var statearr_24489_24515 = state_24478__$1;
(statearr_24489_24515[(2)] = null);

(statearr_24489_24515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (5))){
var state_24478__$1 = state_24478;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24490_24516 = state_24478__$1;
(statearr_24490_24516[(1)] = (8));

} else {
var statearr_24491_24517 = state_24478__$1;
(statearr_24491_24517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (14))){
var inst_24472 = (state_24478[(2)]);
var state_24478__$1 = state_24478;
var statearr_24492_24518 = state_24478__$1;
(statearr_24492_24518[(2)] = inst_24472);

(statearr_24492_24518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (10))){
var inst_24464 = (state_24478[(2)]);
var state_24478__$1 = state_24478;
var statearr_24493_24519 = state_24478__$1;
(statearr_24493_24519[(2)] = inst_24464);

(statearr_24493_24519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24479 === (8))){
var inst_24461 = cljs.core.async.close_BANG_.call(null,to);
var state_24478__$1 = state_24478;
var statearr_24494_24520 = state_24478__$1;
(statearr_24494_24520[(2)] = inst_24461);

(statearr_24494_24520[(1)] = (10));


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
});})(c__24339__auto___24506))
;
return ((function (switch__24227__auto__,c__24339__auto___24506){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_24498 = [null,null,null,null,null,null,null,null];
(statearr_24498[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_24498[(1)] = (1));

return statearr_24498;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_24478){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_24478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e24499){if((e24499 instanceof Object)){
var ex__24231__auto__ = e24499;
var statearr_24500_24521 = state_24478;
(statearr_24500_24521[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24522 = state_24478;
state_24478 = G__24522;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_24478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_24478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___24506))
})();
var state__24341__auto__ = (function (){var statearr_24501 = f__24340__auto__.call(null);
(statearr_24501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___24506);

return statearr_24501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___24506))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24706){
var vec__24707 = p__24706;
var v = cljs.core.nth.call(null,vec__24707,(0),null);
var p = cljs.core.nth.call(null,vec__24707,(1),null);
var job = vec__24707;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24339__auto___24889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___24889,res,vec__24707,v,p,job,jobs,results){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___24889,res,vec__24707,v,p,job,jobs,results){
return (function (state_24712){
var state_val_24713 = (state_24712[(1)]);
if((state_val_24713 === (1))){
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24712__$1,(2),res,v);
} else {
if((state_val_24713 === (2))){
var inst_24709 = (state_24712[(2)]);
var inst_24710 = cljs.core.async.close_BANG_.call(null,res);
var state_24712__$1 = (function (){var statearr_24714 = state_24712;
(statearr_24714[(7)] = inst_24709);

return statearr_24714;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24712__$1,inst_24710);
} else {
return null;
}
}
});})(c__24339__auto___24889,res,vec__24707,v,p,job,jobs,results))
;
return ((function (switch__24227__auto__,c__24339__auto___24889,res,vec__24707,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0 = (function (){
var statearr_24718 = [null,null,null,null,null,null,null,null];
(statearr_24718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__);

(statearr_24718[(1)] = (1));

return statearr_24718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1 = (function (state_24712){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_24712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e24719){if((e24719 instanceof Object)){
var ex__24231__auto__ = e24719;
var statearr_24720_24890 = state_24712;
(statearr_24720_24890[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24891 = state_24712;
state_24712 = G__24891;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__ = function(state_24712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1.call(this,state_24712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___24889,res,vec__24707,v,p,job,jobs,results))
})();
var state__24341__auto__ = (function (){var statearr_24721 = f__24340__auto__.call(null);
(statearr_24721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___24889);

return statearr_24721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___24889,res,vec__24707,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24722){
var vec__24723 = p__24722;
var v = cljs.core.nth.call(null,vec__24723,(0),null);
var p = cljs.core.nth.call(null,vec__24723,(1),null);
var job = vec__24723;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22621__auto___24892 = n;
var __24893 = (0);
while(true){
if((__24893 < n__22621__auto___24892)){
var G__24724_24894 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24724_24894) {
case "compute":
var c__24339__auto___24896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24893,c__24339__auto___24896,G__24724_24894,n__22621__auto___24892,jobs,results,process,async){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (__24893,c__24339__auto___24896,G__24724_24894,n__22621__auto___24892,jobs,results,process,async){
return (function (state_24737){
var state_val_24738 = (state_24737[(1)]);
if((state_val_24738 === (1))){
var state_24737__$1 = state_24737;
var statearr_24739_24897 = state_24737__$1;
(statearr_24739_24897[(2)] = null);

(statearr_24739_24897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (2))){
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24737__$1,(4),jobs);
} else {
if((state_val_24738 === (3))){
var inst_24735 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24737__$1,inst_24735);
} else {
if((state_val_24738 === (4))){
var inst_24727 = (state_24737[(2)]);
var inst_24728 = process.call(null,inst_24727);
var state_24737__$1 = state_24737;
if(cljs.core.truth_(inst_24728)){
var statearr_24740_24898 = state_24737__$1;
(statearr_24740_24898[(1)] = (5));

} else {
var statearr_24741_24899 = state_24737__$1;
(statearr_24741_24899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (5))){
var state_24737__$1 = state_24737;
var statearr_24742_24900 = state_24737__$1;
(statearr_24742_24900[(2)] = null);

(statearr_24742_24900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (6))){
var state_24737__$1 = state_24737;
var statearr_24743_24901 = state_24737__$1;
(statearr_24743_24901[(2)] = null);

(statearr_24743_24901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (7))){
var inst_24733 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
var statearr_24744_24902 = state_24737__$1;
(statearr_24744_24902[(2)] = inst_24733);

(statearr_24744_24902[(1)] = (3));


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
});})(__24893,c__24339__auto___24896,G__24724_24894,n__22621__auto___24892,jobs,results,process,async))
;
return ((function (__24893,switch__24227__auto__,c__24339__auto___24896,G__24724_24894,n__22621__auto___24892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0 = (function (){
var statearr_24748 = [null,null,null,null,null,null,null];
(statearr_24748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__);

(statearr_24748[(1)] = (1));

return statearr_24748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1 = (function (state_24737){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_24737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e24749){if((e24749 instanceof Object)){
var ex__24231__auto__ = e24749;
var statearr_24750_24903 = state_24737;
(statearr_24750_24903[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24904 = state_24737;
state_24737 = G__24904;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__ = function(state_24737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1.call(this,state_24737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__;
})()
;})(__24893,switch__24227__auto__,c__24339__auto___24896,G__24724_24894,n__22621__auto___24892,jobs,results,process,async))
})();
var state__24341__auto__ = (function (){var statearr_24751 = f__24340__auto__.call(null);
(statearr_24751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___24896);

return statearr_24751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(__24893,c__24339__auto___24896,G__24724_24894,n__22621__auto___24892,jobs,results,process,async))
);


break;
case "async":
var c__24339__auto___24905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24893,c__24339__auto___24905,G__24724_24894,n__22621__auto___24892,jobs,results,process,async){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (__24893,c__24339__auto___24905,G__24724_24894,n__22621__auto___24892,jobs,results,process,async){
return (function (state_24764){
var state_val_24765 = (state_24764[(1)]);
if((state_val_24765 === (1))){
var state_24764__$1 = state_24764;
var statearr_24766_24906 = state_24764__$1;
(statearr_24766_24906[(2)] = null);

(statearr_24766_24906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24765 === (2))){
var state_24764__$1 = state_24764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24764__$1,(4),jobs);
} else {
if((state_val_24765 === (3))){
var inst_24762 = (state_24764[(2)]);
var state_24764__$1 = state_24764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24764__$1,inst_24762);
} else {
if((state_val_24765 === (4))){
var inst_24754 = (state_24764[(2)]);
var inst_24755 = async.call(null,inst_24754);
var state_24764__$1 = state_24764;
if(cljs.core.truth_(inst_24755)){
var statearr_24767_24907 = state_24764__$1;
(statearr_24767_24907[(1)] = (5));

} else {
var statearr_24768_24908 = state_24764__$1;
(statearr_24768_24908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24765 === (5))){
var state_24764__$1 = state_24764;
var statearr_24769_24909 = state_24764__$1;
(statearr_24769_24909[(2)] = null);

(statearr_24769_24909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24765 === (6))){
var state_24764__$1 = state_24764;
var statearr_24770_24910 = state_24764__$1;
(statearr_24770_24910[(2)] = null);

(statearr_24770_24910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24765 === (7))){
var inst_24760 = (state_24764[(2)]);
var state_24764__$1 = state_24764;
var statearr_24771_24911 = state_24764__$1;
(statearr_24771_24911[(2)] = inst_24760);

(statearr_24771_24911[(1)] = (3));


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
});})(__24893,c__24339__auto___24905,G__24724_24894,n__22621__auto___24892,jobs,results,process,async))
;
return ((function (__24893,switch__24227__auto__,c__24339__auto___24905,G__24724_24894,n__22621__auto___24892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0 = (function (){
var statearr_24775 = [null,null,null,null,null,null,null];
(statearr_24775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__);

(statearr_24775[(1)] = (1));

return statearr_24775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1 = (function (state_24764){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_24764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e24776){if((e24776 instanceof Object)){
var ex__24231__auto__ = e24776;
var statearr_24777_24912 = state_24764;
(statearr_24777_24912[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24913 = state_24764;
state_24764 = G__24913;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__ = function(state_24764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1.call(this,state_24764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__;
})()
;})(__24893,switch__24227__auto__,c__24339__auto___24905,G__24724_24894,n__22621__auto___24892,jobs,results,process,async))
})();
var state__24341__auto__ = (function (){var statearr_24778 = f__24340__auto__.call(null);
(statearr_24778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___24905);

return statearr_24778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(__24893,c__24339__auto___24905,G__24724_24894,n__22621__auto___24892,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24914 = (__24893 + (1));
__24893 = G__24914;
continue;
} else {
}
break;
}

var c__24339__auto___24915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___24915,jobs,results,process,async){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___24915,jobs,results,process,async){
return (function (state_24800){
var state_val_24801 = (state_24800[(1)]);
if((state_val_24801 === (1))){
var state_24800__$1 = state_24800;
var statearr_24802_24916 = state_24800__$1;
(statearr_24802_24916[(2)] = null);

(statearr_24802_24916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (2))){
var state_24800__$1 = state_24800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24800__$1,(4),from);
} else {
if((state_val_24801 === (3))){
var inst_24798 = (state_24800[(2)]);
var state_24800__$1 = state_24800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24800__$1,inst_24798);
} else {
if((state_val_24801 === (4))){
var inst_24781 = (state_24800[(7)]);
var inst_24781__$1 = (state_24800[(2)]);
var inst_24782 = (inst_24781__$1 == null);
var state_24800__$1 = (function (){var statearr_24803 = state_24800;
(statearr_24803[(7)] = inst_24781__$1);

return statearr_24803;
})();
if(cljs.core.truth_(inst_24782)){
var statearr_24804_24917 = state_24800__$1;
(statearr_24804_24917[(1)] = (5));

} else {
var statearr_24805_24918 = state_24800__$1;
(statearr_24805_24918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (5))){
var inst_24784 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24800__$1 = state_24800;
var statearr_24806_24919 = state_24800__$1;
(statearr_24806_24919[(2)] = inst_24784);

(statearr_24806_24919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (6))){
var inst_24786 = (state_24800[(8)]);
var inst_24781 = (state_24800[(7)]);
var inst_24786__$1 = cljs.core.async.chan.call(null,(1));
var inst_24787 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24788 = [inst_24781,inst_24786__$1];
var inst_24789 = (new cljs.core.PersistentVector(null,2,(5),inst_24787,inst_24788,null));
var state_24800__$1 = (function (){var statearr_24807 = state_24800;
(statearr_24807[(8)] = inst_24786__$1);

return statearr_24807;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24800__$1,(8),jobs,inst_24789);
} else {
if((state_val_24801 === (7))){
var inst_24796 = (state_24800[(2)]);
var state_24800__$1 = state_24800;
var statearr_24808_24920 = state_24800__$1;
(statearr_24808_24920[(2)] = inst_24796);

(statearr_24808_24920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24801 === (8))){
var inst_24786 = (state_24800[(8)]);
var inst_24791 = (state_24800[(2)]);
var state_24800__$1 = (function (){var statearr_24809 = state_24800;
(statearr_24809[(9)] = inst_24791);

return statearr_24809;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24800__$1,(9),results,inst_24786);
} else {
if((state_val_24801 === (9))){
var inst_24793 = (state_24800[(2)]);
var state_24800__$1 = (function (){var statearr_24810 = state_24800;
(statearr_24810[(10)] = inst_24793);

return statearr_24810;
})();
var statearr_24811_24921 = state_24800__$1;
(statearr_24811_24921[(2)] = null);

(statearr_24811_24921[(1)] = (2));


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
});})(c__24339__auto___24915,jobs,results,process,async))
;
return ((function (switch__24227__auto__,c__24339__auto___24915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0 = (function (){
var statearr_24815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__);

(statearr_24815[(1)] = (1));

return statearr_24815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1 = (function (state_24800){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_24800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e24816){if((e24816 instanceof Object)){
var ex__24231__auto__ = e24816;
var statearr_24817_24922 = state_24800;
(statearr_24817_24922[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24923 = state_24800;
state_24800 = G__24923;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__ = function(state_24800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1.call(this,state_24800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___24915,jobs,results,process,async))
})();
var state__24341__auto__ = (function (){var statearr_24818 = f__24340__auto__.call(null);
(statearr_24818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___24915);

return statearr_24818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___24915,jobs,results,process,async))
);


var c__24339__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto__,jobs,results,process,async){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto__,jobs,results,process,async){
return (function (state_24856){
var state_val_24857 = (state_24856[(1)]);
if((state_val_24857 === (7))){
var inst_24852 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
var statearr_24858_24924 = state_24856__$1;
(statearr_24858_24924[(2)] = inst_24852);

(statearr_24858_24924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (20))){
var state_24856__$1 = state_24856;
var statearr_24859_24925 = state_24856__$1;
(statearr_24859_24925[(2)] = null);

(statearr_24859_24925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (1))){
var state_24856__$1 = state_24856;
var statearr_24860_24926 = state_24856__$1;
(statearr_24860_24926[(2)] = null);

(statearr_24860_24926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (4))){
var inst_24821 = (state_24856[(7)]);
var inst_24821__$1 = (state_24856[(2)]);
var inst_24822 = (inst_24821__$1 == null);
var state_24856__$1 = (function (){var statearr_24861 = state_24856;
(statearr_24861[(7)] = inst_24821__$1);

return statearr_24861;
})();
if(cljs.core.truth_(inst_24822)){
var statearr_24862_24927 = state_24856__$1;
(statearr_24862_24927[(1)] = (5));

} else {
var statearr_24863_24928 = state_24856__$1;
(statearr_24863_24928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (15))){
var inst_24834 = (state_24856[(8)]);
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24856__$1,(18),to,inst_24834);
} else {
if((state_val_24857 === (21))){
var inst_24847 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
var statearr_24864_24929 = state_24856__$1;
(statearr_24864_24929[(2)] = inst_24847);

(statearr_24864_24929[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (13))){
var inst_24849 = (state_24856[(2)]);
var state_24856__$1 = (function (){var statearr_24865 = state_24856;
(statearr_24865[(9)] = inst_24849);

return statearr_24865;
})();
var statearr_24866_24930 = state_24856__$1;
(statearr_24866_24930[(2)] = null);

(statearr_24866_24930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (6))){
var inst_24821 = (state_24856[(7)]);
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24856__$1,(11),inst_24821);
} else {
if((state_val_24857 === (17))){
var inst_24842 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
if(cljs.core.truth_(inst_24842)){
var statearr_24867_24931 = state_24856__$1;
(statearr_24867_24931[(1)] = (19));

} else {
var statearr_24868_24932 = state_24856__$1;
(statearr_24868_24932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (3))){
var inst_24854 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24856__$1,inst_24854);
} else {
if((state_val_24857 === (12))){
var inst_24831 = (state_24856[(10)]);
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24856__$1,(14),inst_24831);
} else {
if((state_val_24857 === (2))){
var state_24856__$1 = state_24856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24856__$1,(4),results);
} else {
if((state_val_24857 === (19))){
var state_24856__$1 = state_24856;
var statearr_24869_24933 = state_24856__$1;
(statearr_24869_24933[(2)] = null);

(statearr_24869_24933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (11))){
var inst_24831 = (state_24856[(2)]);
var state_24856__$1 = (function (){var statearr_24870 = state_24856;
(statearr_24870[(10)] = inst_24831);

return statearr_24870;
})();
var statearr_24871_24934 = state_24856__$1;
(statearr_24871_24934[(2)] = null);

(statearr_24871_24934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (9))){
var state_24856__$1 = state_24856;
var statearr_24872_24935 = state_24856__$1;
(statearr_24872_24935[(2)] = null);

(statearr_24872_24935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (5))){
var state_24856__$1 = state_24856;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24873_24936 = state_24856__$1;
(statearr_24873_24936[(1)] = (8));

} else {
var statearr_24874_24937 = state_24856__$1;
(statearr_24874_24937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (14))){
var inst_24836 = (state_24856[(11)]);
var inst_24834 = (state_24856[(8)]);
var inst_24834__$1 = (state_24856[(2)]);
var inst_24835 = (inst_24834__$1 == null);
var inst_24836__$1 = cljs.core.not.call(null,inst_24835);
var state_24856__$1 = (function (){var statearr_24875 = state_24856;
(statearr_24875[(11)] = inst_24836__$1);

(statearr_24875[(8)] = inst_24834__$1);

return statearr_24875;
})();
if(inst_24836__$1){
var statearr_24876_24938 = state_24856__$1;
(statearr_24876_24938[(1)] = (15));

} else {
var statearr_24877_24939 = state_24856__$1;
(statearr_24877_24939[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (16))){
var inst_24836 = (state_24856[(11)]);
var state_24856__$1 = state_24856;
var statearr_24878_24940 = state_24856__$1;
(statearr_24878_24940[(2)] = inst_24836);

(statearr_24878_24940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (10))){
var inst_24828 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
var statearr_24879_24941 = state_24856__$1;
(statearr_24879_24941[(2)] = inst_24828);

(statearr_24879_24941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (18))){
var inst_24839 = (state_24856[(2)]);
var state_24856__$1 = state_24856;
var statearr_24880_24942 = state_24856__$1;
(statearr_24880_24942[(2)] = inst_24839);

(statearr_24880_24942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24857 === (8))){
var inst_24825 = cljs.core.async.close_BANG_.call(null,to);
var state_24856__$1 = state_24856;
var statearr_24881_24943 = state_24856__$1;
(statearr_24881_24943[(2)] = inst_24825);

(statearr_24881_24943[(1)] = (10));


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
});})(c__24339__auto__,jobs,results,process,async))
;
return ((function (switch__24227__auto__,c__24339__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0 = (function (){
var statearr_24885 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__);

(statearr_24885[(1)] = (1));

return statearr_24885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1 = (function (state_24856){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_24856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e24886){if((e24886 instanceof Object)){
var ex__24231__auto__ = e24886;
var statearr_24887_24944 = state_24856;
(statearr_24887_24944[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24945 = state_24856;
state_24856 = G__24945;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__ = function(state_24856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1.call(this,state_24856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto__,jobs,results,process,async))
})();
var state__24341__auto__ = (function (){var statearr_24888 = f__24340__auto__.call(null);
(statearr_24888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto__);

return statearr_24888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto__,jobs,results,process,async))
);

return c__24339__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24946 = [];
var len__22776__auto___24949 = arguments.length;
var i__22777__auto___24950 = (0);
while(true){
if((i__22777__auto___24950 < len__22776__auto___24949)){
args24946.push((arguments[i__22777__auto___24950]));

var G__24951 = (i__22777__auto___24950 + (1));
i__22777__auto___24950 = G__24951;
continue;
} else {
}
break;
}

var G__24948 = args24946.length;
switch (G__24948) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24946.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24953 = [];
var len__22776__auto___24956 = arguments.length;
var i__22777__auto___24957 = (0);
while(true){
if((i__22777__auto___24957 < len__22776__auto___24956)){
args24953.push((arguments[i__22777__auto___24957]));

var G__24958 = (i__22777__auto___24957 + (1));
i__22777__auto___24957 = G__24958;
continue;
} else {
}
break;
}

var G__24955 = args24953.length;
switch (G__24955) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24953.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24960 = [];
var len__22776__auto___25013 = arguments.length;
var i__22777__auto___25014 = (0);
while(true){
if((i__22777__auto___25014 < len__22776__auto___25013)){
args24960.push((arguments[i__22777__auto___25014]));

var G__25015 = (i__22777__auto___25014 + (1));
i__22777__auto___25014 = G__25015;
continue;
} else {
}
break;
}

var G__24962 = args24960.length;
switch (G__24962) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24960.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24339__auto___25017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___25017,tc,fc){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___25017,tc,fc){
return (function (state_24988){
var state_val_24989 = (state_24988[(1)]);
if((state_val_24989 === (7))){
var inst_24984 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_24990_25018 = state_24988__$1;
(statearr_24990_25018[(2)] = inst_24984);

(statearr_24990_25018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (1))){
var state_24988__$1 = state_24988;
var statearr_24991_25019 = state_24988__$1;
(statearr_24991_25019[(2)] = null);

(statearr_24991_25019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (4))){
var inst_24965 = (state_24988[(7)]);
var inst_24965__$1 = (state_24988[(2)]);
var inst_24966 = (inst_24965__$1 == null);
var state_24988__$1 = (function (){var statearr_24992 = state_24988;
(statearr_24992[(7)] = inst_24965__$1);

return statearr_24992;
})();
if(cljs.core.truth_(inst_24966)){
var statearr_24993_25020 = state_24988__$1;
(statearr_24993_25020[(1)] = (5));

} else {
var statearr_24994_25021 = state_24988__$1;
(statearr_24994_25021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (13))){
var state_24988__$1 = state_24988;
var statearr_24995_25022 = state_24988__$1;
(statearr_24995_25022[(2)] = null);

(statearr_24995_25022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (6))){
var inst_24965 = (state_24988[(7)]);
var inst_24971 = p.call(null,inst_24965);
var state_24988__$1 = state_24988;
if(cljs.core.truth_(inst_24971)){
var statearr_24996_25023 = state_24988__$1;
(statearr_24996_25023[(1)] = (9));

} else {
var statearr_24997_25024 = state_24988__$1;
(statearr_24997_25024[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (3))){
var inst_24986 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24988__$1,inst_24986);
} else {
if((state_val_24989 === (12))){
var state_24988__$1 = state_24988;
var statearr_24998_25025 = state_24988__$1;
(statearr_24998_25025[(2)] = null);

(statearr_24998_25025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (2))){
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24988__$1,(4),ch);
} else {
if((state_val_24989 === (11))){
var inst_24965 = (state_24988[(7)]);
var inst_24975 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24988__$1,(8),inst_24975,inst_24965);
} else {
if((state_val_24989 === (9))){
var state_24988__$1 = state_24988;
var statearr_24999_25026 = state_24988__$1;
(statearr_24999_25026[(2)] = tc);

(statearr_24999_25026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (5))){
var inst_24968 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24969 = cljs.core.async.close_BANG_.call(null,fc);
var state_24988__$1 = (function (){var statearr_25000 = state_24988;
(statearr_25000[(8)] = inst_24968);

return statearr_25000;
})();
var statearr_25001_25027 = state_24988__$1;
(statearr_25001_25027[(2)] = inst_24969);

(statearr_25001_25027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (14))){
var inst_24982 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
var statearr_25002_25028 = state_24988__$1;
(statearr_25002_25028[(2)] = inst_24982);

(statearr_25002_25028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (10))){
var state_24988__$1 = state_24988;
var statearr_25003_25029 = state_24988__$1;
(statearr_25003_25029[(2)] = fc);

(statearr_25003_25029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24989 === (8))){
var inst_24977 = (state_24988[(2)]);
var state_24988__$1 = state_24988;
if(cljs.core.truth_(inst_24977)){
var statearr_25004_25030 = state_24988__$1;
(statearr_25004_25030[(1)] = (12));

} else {
var statearr_25005_25031 = state_24988__$1;
(statearr_25005_25031[(1)] = (13));

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
});})(c__24339__auto___25017,tc,fc))
;
return ((function (switch__24227__auto__,c__24339__auto___25017,tc,fc){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_25009 = [null,null,null,null,null,null,null,null,null];
(statearr_25009[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_25009[(1)] = (1));

return statearr_25009;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_24988){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_24988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e25010){if((e25010 instanceof Object)){
var ex__24231__auto__ = e25010;
var statearr_25011_25032 = state_24988;
(statearr_25011_25032[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25033 = state_24988;
state_24988 = G__25033;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_24988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_24988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___25017,tc,fc))
})();
var state__24341__auto__ = (function (){var statearr_25012 = f__24340__auto__.call(null);
(statearr_25012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___25017);

return statearr_25012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___25017,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24339__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto__){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto__){
return (function (state_25097){
var state_val_25098 = (state_25097[(1)]);
if((state_val_25098 === (7))){
var inst_25093 = (state_25097[(2)]);
var state_25097__$1 = state_25097;
var statearr_25099_25120 = state_25097__$1;
(statearr_25099_25120[(2)] = inst_25093);

(statearr_25099_25120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (1))){
var inst_25077 = init;
var state_25097__$1 = (function (){var statearr_25100 = state_25097;
(statearr_25100[(7)] = inst_25077);

return statearr_25100;
})();
var statearr_25101_25121 = state_25097__$1;
(statearr_25101_25121[(2)] = null);

(statearr_25101_25121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (4))){
var inst_25080 = (state_25097[(8)]);
var inst_25080__$1 = (state_25097[(2)]);
var inst_25081 = (inst_25080__$1 == null);
var state_25097__$1 = (function (){var statearr_25102 = state_25097;
(statearr_25102[(8)] = inst_25080__$1);

return statearr_25102;
})();
if(cljs.core.truth_(inst_25081)){
var statearr_25103_25122 = state_25097__$1;
(statearr_25103_25122[(1)] = (5));

} else {
var statearr_25104_25123 = state_25097__$1;
(statearr_25104_25123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (6))){
var inst_25084 = (state_25097[(9)]);
var inst_25077 = (state_25097[(7)]);
var inst_25080 = (state_25097[(8)]);
var inst_25084__$1 = f.call(null,inst_25077,inst_25080);
var inst_25085 = cljs.core.reduced_QMARK_.call(null,inst_25084__$1);
var state_25097__$1 = (function (){var statearr_25105 = state_25097;
(statearr_25105[(9)] = inst_25084__$1);

return statearr_25105;
})();
if(inst_25085){
var statearr_25106_25124 = state_25097__$1;
(statearr_25106_25124[(1)] = (8));

} else {
var statearr_25107_25125 = state_25097__$1;
(statearr_25107_25125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (3))){
var inst_25095 = (state_25097[(2)]);
var state_25097__$1 = state_25097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25097__$1,inst_25095);
} else {
if((state_val_25098 === (2))){
var state_25097__$1 = state_25097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25097__$1,(4),ch);
} else {
if((state_val_25098 === (9))){
var inst_25084 = (state_25097[(9)]);
var inst_25077 = inst_25084;
var state_25097__$1 = (function (){var statearr_25108 = state_25097;
(statearr_25108[(7)] = inst_25077);

return statearr_25108;
})();
var statearr_25109_25126 = state_25097__$1;
(statearr_25109_25126[(2)] = null);

(statearr_25109_25126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (5))){
var inst_25077 = (state_25097[(7)]);
var state_25097__$1 = state_25097;
var statearr_25110_25127 = state_25097__$1;
(statearr_25110_25127[(2)] = inst_25077);

(statearr_25110_25127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (10))){
var inst_25091 = (state_25097[(2)]);
var state_25097__$1 = state_25097;
var statearr_25111_25128 = state_25097__$1;
(statearr_25111_25128[(2)] = inst_25091);

(statearr_25111_25128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (8))){
var inst_25084 = (state_25097[(9)]);
var inst_25087 = cljs.core.deref.call(null,inst_25084);
var state_25097__$1 = state_25097;
var statearr_25112_25129 = state_25097__$1;
(statearr_25112_25129[(2)] = inst_25087);

(statearr_25112_25129[(1)] = (10));


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
});})(c__24339__auto__))
;
return ((function (switch__24227__auto__,c__24339__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24228__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24228__auto____0 = (function (){
var statearr_25116 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25116[(0)] = cljs$core$async$reduce_$_state_machine__24228__auto__);

(statearr_25116[(1)] = (1));

return statearr_25116;
});
var cljs$core$async$reduce_$_state_machine__24228__auto____1 = (function (state_25097){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_25097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e25117){if((e25117 instanceof Object)){
var ex__24231__auto__ = e25117;
var statearr_25118_25130 = state_25097;
(statearr_25118_25130[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25131 = state_25097;
state_25097 = G__25131;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24228__auto__ = function(state_25097){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24228__auto____1.call(this,state_25097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24228__auto____0;
cljs$core$async$reduce_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24228__auto____1;
return cljs$core$async$reduce_$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto__))
})();
var state__24341__auto__ = (function (){var statearr_25119 = f__24340__auto__.call(null);
(statearr_25119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto__);

return statearr_25119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto__))
);

return c__24339__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25132 = [];
var len__22776__auto___25184 = arguments.length;
var i__22777__auto___25185 = (0);
while(true){
if((i__22777__auto___25185 < len__22776__auto___25184)){
args25132.push((arguments[i__22777__auto___25185]));

var G__25186 = (i__22777__auto___25185 + (1));
i__22777__auto___25185 = G__25186;
continue;
} else {
}
break;
}

var G__25134 = args25132.length;
switch (G__25134) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25132.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24339__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto__){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto__){
return (function (state_25159){
var state_val_25160 = (state_25159[(1)]);
if((state_val_25160 === (7))){
var inst_25141 = (state_25159[(2)]);
var state_25159__$1 = state_25159;
var statearr_25161_25188 = state_25159__$1;
(statearr_25161_25188[(2)] = inst_25141);

(statearr_25161_25188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (1))){
var inst_25135 = cljs.core.seq.call(null,coll);
var inst_25136 = inst_25135;
var state_25159__$1 = (function (){var statearr_25162 = state_25159;
(statearr_25162[(7)] = inst_25136);

return statearr_25162;
})();
var statearr_25163_25189 = state_25159__$1;
(statearr_25163_25189[(2)] = null);

(statearr_25163_25189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (4))){
var inst_25136 = (state_25159[(7)]);
var inst_25139 = cljs.core.first.call(null,inst_25136);
var state_25159__$1 = state_25159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25159__$1,(7),ch,inst_25139);
} else {
if((state_val_25160 === (13))){
var inst_25153 = (state_25159[(2)]);
var state_25159__$1 = state_25159;
var statearr_25164_25190 = state_25159__$1;
(statearr_25164_25190[(2)] = inst_25153);

(statearr_25164_25190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (6))){
var inst_25144 = (state_25159[(2)]);
var state_25159__$1 = state_25159;
if(cljs.core.truth_(inst_25144)){
var statearr_25165_25191 = state_25159__$1;
(statearr_25165_25191[(1)] = (8));

} else {
var statearr_25166_25192 = state_25159__$1;
(statearr_25166_25192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (3))){
var inst_25157 = (state_25159[(2)]);
var state_25159__$1 = state_25159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25159__$1,inst_25157);
} else {
if((state_val_25160 === (12))){
var state_25159__$1 = state_25159;
var statearr_25167_25193 = state_25159__$1;
(statearr_25167_25193[(2)] = null);

(statearr_25167_25193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (2))){
var inst_25136 = (state_25159[(7)]);
var state_25159__$1 = state_25159;
if(cljs.core.truth_(inst_25136)){
var statearr_25168_25194 = state_25159__$1;
(statearr_25168_25194[(1)] = (4));

} else {
var statearr_25169_25195 = state_25159__$1;
(statearr_25169_25195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (11))){
var inst_25150 = cljs.core.async.close_BANG_.call(null,ch);
var state_25159__$1 = state_25159;
var statearr_25170_25196 = state_25159__$1;
(statearr_25170_25196[(2)] = inst_25150);

(statearr_25170_25196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (9))){
var state_25159__$1 = state_25159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25171_25197 = state_25159__$1;
(statearr_25171_25197[(1)] = (11));

} else {
var statearr_25172_25198 = state_25159__$1;
(statearr_25172_25198[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (5))){
var inst_25136 = (state_25159[(7)]);
var state_25159__$1 = state_25159;
var statearr_25173_25199 = state_25159__$1;
(statearr_25173_25199[(2)] = inst_25136);

(statearr_25173_25199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (10))){
var inst_25155 = (state_25159[(2)]);
var state_25159__$1 = state_25159;
var statearr_25174_25200 = state_25159__$1;
(statearr_25174_25200[(2)] = inst_25155);

(statearr_25174_25200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25160 === (8))){
var inst_25136 = (state_25159[(7)]);
var inst_25146 = cljs.core.next.call(null,inst_25136);
var inst_25136__$1 = inst_25146;
var state_25159__$1 = (function (){var statearr_25175 = state_25159;
(statearr_25175[(7)] = inst_25136__$1);

return statearr_25175;
})();
var statearr_25176_25201 = state_25159__$1;
(statearr_25176_25201[(2)] = null);

(statearr_25176_25201[(1)] = (2));


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
});})(c__24339__auto__))
;
return ((function (switch__24227__auto__,c__24339__auto__){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_25180 = [null,null,null,null,null,null,null,null];
(statearr_25180[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_25180[(1)] = (1));

return statearr_25180;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_25159){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_25159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e25181){if((e25181 instanceof Object)){
var ex__24231__auto__ = e25181;
var statearr_25182_25202 = state_25159;
(statearr_25182_25202[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25203 = state_25159;
state_25159 = G__25203;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_25159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_25159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto__))
})();
var state__24341__auto__ = (function (){var statearr_25183 = f__24340__auto__.call(null);
(statearr_25183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto__);

return statearr_25183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto__))
);

return c__24339__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22369__auto__ = (((_ == null))?null:_);
var m__22370__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,_);
} else {
var m__22370__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22369__auto__ = (((m == null))?null:m);
var m__22370__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22370__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22369__auto__ = (((m == null))?null:m);
var m__22370__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,m,ch);
} else {
var m__22370__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22369__auto__ = (((m == null))?null:m);
var m__22370__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,m);
} else {
var m__22370__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25425 = (function (mult,ch,cs,meta25426){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25426 = meta25426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25427,meta25426__$1){
var self__ = this;
var _25427__$1 = this;
return (new cljs.core.async.t_cljs$core$async25425(self__.mult,self__.ch,self__.cs,meta25426__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25427){
var self__ = this;
var _25427__$1 = this;
return self__.meta25426;
});})(cs))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25425.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25425.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25426","meta25426",1006578345,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25425";

cljs.core.async.t_cljs$core$async25425.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22312__auto__,writer__22313__auto__,opt__22314__auto__){
return cljs.core._write.call(null,writer__22313__auto__,"cljs.core.async/t_cljs$core$async25425");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25425 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25425(mult__$1,ch__$1,cs__$1,meta25426){
return (new cljs.core.async.t_cljs$core$async25425(mult__$1,ch__$1,cs__$1,meta25426));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25425(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24339__auto___25646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___25646,cs,m,dchan,dctr,done){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___25646,cs,m,dchan,dctr,done){
return (function (state_25558){
var state_val_25559 = (state_25558[(1)]);
if((state_val_25559 === (7))){
var inst_25554 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25560_25647 = state_25558__$1;
(statearr_25560_25647[(2)] = inst_25554);

(statearr_25560_25647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (20))){
var inst_25459 = (state_25558[(7)]);
var inst_25469 = cljs.core.first.call(null,inst_25459);
var inst_25470 = cljs.core.nth.call(null,inst_25469,(0),null);
var inst_25471 = cljs.core.nth.call(null,inst_25469,(1),null);
var state_25558__$1 = (function (){var statearr_25561 = state_25558;
(statearr_25561[(8)] = inst_25470);

return statearr_25561;
})();
if(cljs.core.truth_(inst_25471)){
var statearr_25562_25648 = state_25558__$1;
(statearr_25562_25648[(1)] = (22));

} else {
var statearr_25563_25649 = state_25558__$1;
(statearr_25563_25649[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (27))){
var inst_25499 = (state_25558[(9)]);
var inst_25430 = (state_25558[(10)]);
var inst_25501 = (state_25558[(11)]);
var inst_25506 = (state_25558[(12)]);
var inst_25506__$1 = cljs.core._nth.call(null,inst_25499,inst_25501);
var inst_25507 = cljs.core.async.put_BANG_.call(null,inst_25506__$1,inst_25430,done);
var state_25558__$1 = (function (){var statearr_25564 = state_25558;
(statearr_25564[(12)] = inst_25506__$1);

return statearr_25564;
})();
if(cljs.core.truth_(inst_25507)){
var statearr_25565_25650 = state_25558__$1;
(statearr_25565_25650[(1)] = (30));

} else {
var statearr_25566_25651 = state_25558__$1;
(statearr_25566_25651[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (1))){
var state_25558__$1 = state_25558;
var statearr_25567_25652 = state_25558__$1;
(statearr_25567_25652[(2)] = null);

(statearr_25567_25652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (24))){
var inst_25459 = (state_25558[(7)]);
var inst_25476 = (state_25558[(2)]);
var inst_25477 = cljs.core.next.call(null,inst_25459);
var inst_25439 = inst_25477;
var inst_25440 = null;
var inst_25441 = (0);
var inst_25442 = (0);
var state_25558__$1 = (function (){var statearr_25568 = state_25558;
(statearr_25568[(13)] = inst_25441);

(statearr_25568[(14)] = inst_25440);

(statearr_25568[(15)] = inst_25442);

(statearr_25568[(16)] = inst_25476);

(statearr_25568[(17)] = inst_25439);

return statearr_25568;
})();
var statearr_25569_25653 = state_25558__$1;
(statearr_25569_25653[(2)] = null);

(statearr_25569_25653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (39))){
var state_25558__$1 = state_25558;
var statearr_25573_25654 = state_25558__$1;
(statearr_25573_25654[(2)] = null);

(statearr_25573_25654[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (4))){
var inst_25430 = (state_25558[(10)]);
var inst_25430__$1 = (state_25558[(2)]);
var inst_25431 = (inst_25430__$1 == null);
var state_25558__$1 = (function (){var statearr_25574 = state_25558;
(statearr_25574[(10)] = inst_25430__$1);

return statearr_25574;
})();
if(cljs.core.truth_(inst_25431)){
var statearr_25575_25655 = state_25558__$1;
(statearr_25575_25655[(1)] = (5));

} else {
var statearr_25576_25656 = state_25558__$1;
(statearr_25576_25656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (15))){
var inst_25441 = (state_25558[(13)]);
var inst_25440 = (state_25558[(14)]);
var inst_25442 = (state_25558[(15)]);
var inst_25439 = (state_25558[(17)]);
var inst_25455 = (state_25558[(2)]);
var inst_25456 = (inst_25442 + (1));
var tmp25570 = inst_25441;
var tmp25571 = inst_25440;
var tmp25572 = inst_25439;
var inst_25439__$1 = tmp25572;
var inst_25440__$1 = tmp25571;
var inst_25441__$1 = tmp25570;
var inst_25442__$1 = inst_25456;
var state_25558__$1 = (function (){var statearr_25577 = state_25558;
(statearr_25577[(13)] = inst_25441__$1);

(statearr_25577[(18)] = inst_25455);

(statearr_25577[(14)] = inst_25440__$1);

(statearr_25577[(15)] = inst_25442__$1);

(statearr_25577[(17)] = inst_25439__$1);

return statearr_25577;
})();
var statearr_25578_25657 = state_25558__$1;
(statearr_25578_25657[(2)] = null);

(statearr_25578_25657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (21))){
var inst_25480 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25582_25658 = state_25558__$1;
(statearr_25582_25658[(2)] = inst_25480);

(statearr_25582_25658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (31))){
var inst_25506 = (state_25558[(12)]);
var inst_25510 = done.call(null,null);
var inst_25511 = cljs.core.async.untap_STAR_.call(null,m,inst_25506);
var state_25558__$1 = (function (){var statearr_25583 = state_25558;
(statearr_25583[(19)] = inst_25510);

return statearr_25583;
})();
var statearr_25584_25659 = state_25558__$1;
(statearr_25584_25659[(2)] = inst_25511);

(statearr_25584_25659[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (32))){
var inst_25499 = (state_25558[(9)]);
var inst_25500 = (state_25558[(20)]);
var inst_25498 = (state_25558[(21)]);
var inst_25501 = (state_25558[(11)]);
var inst_25513 = (state_25558[(2)]);
var inst_25514 = (inst_25501 + (1));
var tmp25579 = inst_25499;
var tmp25580 = inst_25500;
var tmp25581 = inst_25498;
var inst_25498__$1 = tmp25581;
var inst_25499__$1 = tmp25579;
var inst_25500__$1 = tmp25580;
var inst_25501__$1 = inst_25514;
var state_25558__$1 = (function (){var statearr_25585 = state_25558;
(statearr_25585[(9)] = inst_25499__$1);

(statearr_25585[(22)] = inst_25513);

(statearr_25585[(20)] = inst_25500__$1);

(statearr_25585[(21)] = inst_25498__$1);

(statearr_25585[(11)] = inst_25501__$1);

return statearr_25585;
})();
var statearr_25586_25660 = state_25558__$1;
(statearr_25586_25660[(2)] = null);

(statearr_25586_25660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (40))){
var inst_25526 = (state_25558[(23)]);
var inst_25530 = done.call(null,null);
var inst_25531 = cljs.core.async.untap_STAR_.call(null,m,inst_25526);
var state_25558__$1 = (function (){var statearr_25587 = state_25558;
(statearr_25587[(24)] = inst_25530);

return statearr_25587;
})();
var statearr_25588_25661 = state_25558__$1;
(statearr_25588_25661[(2)] = inst_25531);

(statearr_25588_25661[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (33))){
var inst_25517 = (state_25558[(25)]);
var inst_25519 = cljs.core.chunked_seq_QMARK_.call(null,inst_25517);
var state_25558__$1 = state_25558;
if(inst_25519){
var statearr_25589_25662 = state_25558__$1;
(statearr_25589_25662[(1)] = (36));

} else {
var statearr_25590_25663 = state_25558__$1;
(statearr_25590_25663[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (13))){
var inst_25449 = (state_25558[(26)]);
var inst_25452 = cljs.core.async.close_BANG_.call(null,inst_25449);
var state_25558__$1 = state_25558;
var statearr_25591_25664 = state_25558__$1;
(statearr_25591_25664[(2)] = inst_25452);

(statearr_25591_25664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (22))){
var inst_25470 = (state_25558[(8)]);
var inst_25473 = cljs.core.async.close_BANG_.call(null,inst_25470);
var state_25558__$1 = state_25558;
var statearr_25592_25665 = state_25558__$1;
(statearr_25592_25665[(2)] = inst_25473);

(statearr_25592_25665[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (36))){
var inst_25517 = (state_25558[(25)]);
var inst_25521 = cljs.core.chunk_first.call(null,inst_25517);
var inst_25522 = cljs.core.chunk_rest.call(null,inst_25517);
var inst_25523 = cljs.core.count.call(null,inst_25521);
var inst_25498 = inst_25522;
var inst_25499 = inst_25521;
var inst_25500 = inst_25523;
var inst_25501 = (0);
var state_25558__$1 = (function (){var statearr_25593 = state_25558;
(statearr_25593[(9)] = inst_25499);

(statearr_25593[(20)] = inst_25500);

(statearr_25593[(21)] = inst_25498);

(statearr_25593[(11)] = inst_25501);

return statearr_25593;
})();
var statearr_25594_25666 = state_25558__$1;
(statearr_25594_25666[(2)] = null);

(statearr_25594_25666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (41))){
var inst_25517 = (state_25558[(25)]);
var inst_25533 = (state_25558[(2)]);
var inst_25534 = cljs.core.next.call(null,inst_25517);
var inst_25498 = inst_25534;
var inst_25499 = null;
var inst_25500 = (0);
var inst_25501 = (0);
var state_25558__$1 = (function (){var statearr_25595 = state_25558;
(statearr_25595[(9)] = inst_25499);

(statearr_25595[(27)] = inst_25533);

(statearr_25595[(20)] = inst_25500);

(statearr_25595[(21)] = inst_25498);

(statearr_25595[(11)] = inst_25501);

return statearr_25595;
})();
var statearr_25596_25667 = state_25558__$1;
(statearr_25596_25667[(2)] = null);

(statearr_25596_25667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (43))){
var state_25558__$1 = state_25558;
var statearr_25597_25668 = state_25558__$1;
(statearr_25597_25668[(2)] = null);

(statearr_25597_25668[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (29))){
var inst_25542 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25598_25669 = state_25558__$1;
(statearr_25598_25669[(2)] = inst_25542);

(statearr_25598_25669[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (44))){
var inst_25551 = (state_25558[(2)]);
var state_25558__$1 = (function (){var statearr_25599 = state_25558;
(statearr_25599[(28)] = inst_25551);

return statearr_25599;
})();
var statearr_25600_25670 = state_25558__$1;
(statearr_25600_25670[(2)] = null);

(statearr_25600_25670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (6))){
var inst_25490 = (state_25558[(29)]);
var inst_25489 = cljs.core.deref.call(null,cs);
var inst_25490__$1 = cljs.core.keys.call(null,inst_25489);
var inst_25491 = cljs.core.count.call(null,inst_25490__$1);
var inst_25492 = cljs.core.reset_BANG_.call(null,dctr,inst_25491);
var inst_25497 = cljs.core.seq.call(null,inst_25490__$1);
var inst_25498 = inst_25497;
var inst_25499 = null;
var inst_25500 = (0);
var inst_25501 = (0);
var state_25558__$1 = (function (){var statearr_25601 = state_25558;
(statearr_25601[(9)] = inst_25499);

(statearr_25601[(29)] = inst_25490__$1);

(statearr_25601[(30)] = inst_25492);

(statearr_25601[(20)] = inst_25500);

(statearr_25601[(21)] = inst_25498);

(statearr_25601[(11)] = inst_25501);

return statearr_25601;
})();
var statearr_25602_25671 = state_25558__$1;
(statearr_25602_25671[(2)] = null);

(statearr_25602_25671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (28))){
var inst_25498 = (state_25558[(21)]);
var inst_25517 = (state_25558[(25)]);
var inst_25517__$1 = cljs.core.seq.call(null,inst_25498);
var state_25558__$1 = (function (){var statearr_25603 = state_25558;
(statearr_25603[(25)] = inst_25517__$1);

return statearr_25603;
})();
if(inst_25517__$1){
var statearr_25604_25672 = state_25558__$1;
(statearr_25604_25672[(1)] = (33));

} else {
var statearr_25605_25673 = state_25558__$1;
(statearr_25605_25673[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (25))){
var inst_25500 = (state_25558[(20)]);
var inst_25501 = (state_25558[(11)]);
var inst_25503 = (inst_25501 < inst_25500);
var inst_25504 = inst_25503;
var state_25558__$1 = state_25558;
if(cljs.core.truth_(inst_25504)){
var statearr_25606_25674 = state_25558__$1;
(statearr_25606_25674[(1)] = (27));

} else {
var statearr_25607_25675 = state_25558__$1;
(statearr_25607_25675[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (34))){
var state_25558__$1 = state_25558;
var statearr_25608_25676 = state_25558__$1;
(statearr_25608_25676[(2)] = null);

(statearr_25608_25676[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (17))){
var state_25558__$1 = state_25558;
var statearr_25609_25677 = state_25558__$1;
(statearr_25609_25677[(2)] = null);

(statearr_25609_25677[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (3))){
var inst_25556 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25558__$1,inst_25556);
} else {
if((state_val_25559 === (12))){
var inst_25485 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25610_25678 = state_25558__$1;
(statearr_25610_25678[(2)] = inst_25485);

(statearr_25610_25678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (2))){
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25558__$1,(4),ch);
} else {
if((state_val_25559 === (23))){
var state_25558__$1 = state_25558;
var statearr_25611_25679 = state_25558__$1;
(statearr_25611_25679[(2)] = null);

(statearr_25611_25679[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (35))){
var inst_25540 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25612_25680 = state_25558__$1;
(statearr_25612_25680[(2)] = inst_25540);

(statearr_25612_25680[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (19))){
var inst_25459 = (state_25558[(7)]);
var inst_25463 = cljs.core.chunk_first.call(null,inst_25459);
var inst_25464 = cljs.core.chunk_rest.call(null,inst_25459);
var inst_25465 = cljs.core.count.call(null,inst_25463);
var inst_25439 = inst_25464;
var inst_25440 = inst_25463;
var inst_25441 = inst_25465;
var inst_25442 = (0);
var state_25558__$1 = (function (){var statearr_25613 = state_25558;
(statearr_25613[(13)] = inst_25441);

(statearr_25613[(14)] = inst_25440);

(statearr_25613[(15)] = inst_25442);

(statearr_25613[(17)] = inst_25439);

return statearr_25613;
})();
var statearr_25614_25681 = state_25558__$1;
(statearr_25614_25681[(2)] = null);

(statearr_25614_25681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (11))){
var inst_25459 = (state_25558[(7)]);
var inst_25439 = (state_25558[(17)]);
var inst_25459__$1 = cljs.core.seq.call(null,inst_25439);
var state_25558__$1 = (function (){var statearr_25615 = state_25558;
(statearr_25615[(7)] = inst_25459__$1);

return statearr_25615;
})();
if(inst_25459__$1){
var statearr_25616_25682 = state_25558__$1;
(statearr_25616_25682[(1)] = (16));

} else {
var statearr_25617_25683 = state_25558__$1;
(statearr_25617_25683[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (9))){
var inst_25487 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25618_25684 = state_25558__$1;
(statearr_25618_25684[(2)] = inst_25487);

(statearr_25618_25684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (5))){
var inst_25437 = cljs.core.deref.call(null,cs);
var inst_25438 = cljs.core.seq.call(null,inst_25437);
var inst_25439 = inst_25438;
var inst_25440 = null;
var inst_25441 = (0);
var inst_25442 = (0);
var state_25558__$1 = (function (){var statearr_25619 = state_25558;
(statearr_25619[(13)] = inst_25441);

(statearr_25619[(14)] = inst_25440);

(statearr_25619[(15)] = inst_25442);

(statearr_25619[(17)] = inst_25439);

return statearr_25619;
})();
var statearr_25620_25685 = state_25558__$1;
(statearr_25620_25685[(2)] = null);

(statearr_25620_25685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (14))){
var state_25558__$1 = state_25558;
var statearr_25621_25686 = state_25558__$1;
(statearr_25621_25686[(2)] = null);

(statearr_25621_25686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (45))){
var inst_25548 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25622_25687 = state_25558__$1;
(statearr_25622_25687[(2)] = inst_25548);

(statearr_25622_25687[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (26))){
var inst_25490 = (state_25558[(29)]);
var inst_25544 = (state_25558[(2)]);
var inst_25545 = cljs.core.seq.call(null,inst_25490);
var state_25558__$1 = (function (){var statearr_25623 = state_25558;
(statearr_25623[(31)] = inst_25544);

return statearr_25623;
})();
if(inst_25545){
var statearr_25624_25688 = state_25558__$1;
(statearr_25624_25688[(1)] = (42));

} else {
var statearr_25625_25689 = state_25558__$1;
(statearr_25625_25689[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (16))){
var inst_25459 = (state_25558[(7)]);
var inst_25461 = cljs.core.chunked_seq_QMARK_.call(null,inst_25459);
var state_25558__$1 = state_25558;
if(inst_25461){
var statearr_25626_25690 = state_25558__$1;
(statearr_25626_25690[(1)] = (19));

} else {
var statearr_25627_25691 = state_25558__$1;
(statearr_25627_25691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (38))){
var inst_25537 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25628_25692 = state_25558__$1;
(statearr_25628_25692[(2)] = inst_25537);

(statearr_25628_25692[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (30))){
var state_25558__$1 = state_25558;
var statearr_25629_25693 = state_25558__$1;
(statearr_25629_25693[(2)] = null);

(statearr_25629_25693[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (10))){
var inst_25440 = (state_25558[(14)]);
var inst_25442 = (state_25558[(15)]);
var inst_25448 = cljs.core._nth.call(null,inst_25440,inst_25442);
var inst_25449 = cljs.core.nth.call(null,inst_25448,(0),null);
var inst_25450 = cljs.core.nth.call(null,inst_25448,(1),null);
var state_25558__$1 = (function (){var statearr_25630 = state_25558;
(statearr_25630[(26)] = inst_25449);

return statearr_25630;
})();
if(cljs.core.truth_(inst_25450)){
var statearr_25631_25694 = state_25558__$1;
(statearr_25631_25694[(1)] = (13));

} else {
var statearr_25632_25695 = state_25558__$1;
(statearr_25632_25695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (18))){
var inst_25483 = (state_25558[(2)]);
var state_25558__$1 = state_25558;
var statearr_25633_25696 = state_25558__$1;
(statearr_25633_25696[(2)] = inst_25483);

(statearr_25633_25696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (42))){
var state_25558__$1 = state_25558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25558__$1,(45),dchan);
} else {
if((state_val_25559 === (37))){
var inst_25526 = (state_25558[(23)]);
var inst_25430 = (state_25558[(10)]);
var inst_25517 = (state_25558[(25)]);
var inst_25526__$1 = cljs.core.first.call(null,inst_25517);
var inst_25527 = cljs.core.async.put_BANG_.call(null,inst_25526__$1,inst_25430,done);
var state_25558__$1 = (function (){var statearr_25634 = state_25558;
(statearr_25634[(23)] = inst_25526__$1);

return statearr_25634;
})();
if(cljs.core.truth_(inst_25527)){
var statearr_25635_25697 = state_25558__$1;
(statearr_25635_25697[(1)] = (39));

} else {
var statearr_25636_25698 = state_25558__$1;
(statearr_25636_25698[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25559 === (8))){
var inst_25441 = (state_25558[(13)]);
var inst_25442 = (state_25558[(15)]);
var inst_25444 = (inst_25442 < inst_25441);
var inst_25445 = inst_25444;
var state_25558__$1 = state_25558;
if(cljs.core.truth_(inst_25445)){
var statearr_25637_25699 = state_25558__$1;
(statearr_25637_25699[(1)] = (10));

} else {
var statearr_25638_25700 = state_25558__$1;
(statearr_25638_25700[(1)] = (11));

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
});})(c__24339__auto___25646,cs,m,dchan,dctr,done))
;
return ((function (switch__24227__auto__,c__24339__auto___25646,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24228__auto__ = null;
var cljs$core$async$mult_$_state_machine__24228__auto____0 = (function (){
var statearr_25642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25642[(0)] = cljs$core$async$mult_$_state_machine__24228__auto__);

(statearr_25642[(1)] = (1));

return statearr_25642;
});
var cljs$core$async$mult_$_state_machine__24228__auto____1 = (function (state_25558){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_25558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e25643){if((e25643 instanceof Object)){
var ex__24231__auto__ = e25643;
var statearr_25644_25701 = state_25558;
(statearr_25644_25701[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25702 = state_25558;
state_25558 = G__25702;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24228__auto__ = function(state_25558){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24228__auto____1.call(this,state_25558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24228__auto____0;
cljs$core$async$mult_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24228__auto____1;
return cljs$core$async$mult_$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___25646,cs,m,dchan,dctr,done))
})();
var state__24341__auto__ = (function (){var statearr_25645 = f__24340__auto__.call(null);
(statearr_25645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___25646);

return statearr_25645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___25646,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25703 = [];
var len__22776__auto___25706 = arguments.length;
var i__22777__auto___25707 = (0);
while(true){
if((i__22777__auto___25707 < len__22776__auto___25706)){
args25703.push((arguments[i__22777__auto___25707]));

var G__25708 = (i__22777__auto___25707 + (1));
i__22777__auto___25707 = G__25708;
continue;
} else {
}
break;
}

var G__25705 = args25703.length;
switch (G__25705) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25703.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22369__auto__ = (((m == null))?null:m);
var m__22370__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,m,ch);
} else {
var m__22370__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22369__auto__ = (((m == null))?null:m);
var m__22370__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,m,ch);
} else {
var m__22370__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22369__auto__ = (((m == null))?null:m);
var m__22370__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,m);
} else {
var m__22370__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22369__auto__ = (((m == null))?null:m);
var m__22370__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,m,state_map);
} else {
var m__22370__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22369__auto__ = (((m == null))?null:m);
var m__22370__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,m,mode);
} else {
var m__22370__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22783__auto__ = [];
var len__22776__auto___25720 = arguments.length;
var i__22777__auto___25721 = (0);
while(true){
if((i__22777__auto___25721 < len__22776__auto___25720)){
args__22783__auto__.push((arguments[i__22777__auto___25721]));

var G__25722 = (i__22777__auto___25721 + (1));
i__22777__auto___25721 = G__25722;
continue;
} else {
}
break;
}

var argseq__22784__auto__ = ((((3) < args__22783__auto__.length))?(new cljs.core.IndexedSeq(args__22783__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22784__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25714){
var map__25715 = p__25714;
var map__25715__$1 = ((((!((map__25715 == null)))?((((map__25715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25715):map__25715);
var opts = map__25715__$1;
var statearr_25717_25723 = state;
(statearr_25717_25723[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25715,map__25715__$1,opts){
return (function (val){
var statearr_25718_25724 = state;
(statearr_25718_25724[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25715,map__25715__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25719_25725 = state;
(statearr_25719_25725[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25710){
var G__25711 = cljs.core.first.call(null,seq25710);
var seq25710__$1 = cljs.core.next.call(null,seq25710);
var G__25712 = cljs.core.first.call(null,seq25710__$1);
var seq25710__$2 = cljs.core.next.call(null,seq25710__$1);
var G__25713 = cljs.core.first.call(null,seq25710__$2);
var seq25710__$3 = cljs.core.next.call(null,seq25710__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25711,G__25712,G__25713,seq25710__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25889 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25890){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25890 = meta25890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25891,meta25890__$1){
var self__ = this;
var _25891__$1 = this;
return (new cljs.core.async.t_cljs$core$async25889(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25890__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25891){
var self__ = this;
var _25891__$1 = this;
return self__.meta25890;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25889.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25889.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25889.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25889.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25889.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25889.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25889.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25889.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25890","meta25890",1166189843,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25889";

cljs.core.async.t_cljs$core$async25889.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22312__auto__,writer__22313__auto__,opt__22314__auto__){
return cljs.core._write.call(null,writer__22313__auto__,"cljs.core.async/t_cljs$core$async25889");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25889 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25890){
return (new cljs.core.async.t_cljs$core$async25889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25890));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25889(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24339__auto___26052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___26052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___26052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25989){
var state_val_25990 = (state_25989[(1)]);
if((state_val_25990 === (7))){
var inst_25907 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
var statearr_25991_26053 = state_25989__$1;
(statearr_25991_26053[(2)] = inst_25907);

(statearr_25991_26053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (20))){
var inst_25919 = (state_25989[(7)]);
var state_25989__$1 = state_25989;
var statearr_25992_26054 = state_25989__$1;
(statearr_25992_26054[(2)] = inst_25919);

(statearr_25992_26054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (27))){
var state_25989__$1 = state_25989;
var statearr_25993_26055 = state_25989__$1;
(statearr_25993_26055[(2)] = null);

(statearr_25993_26055[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (1))){
var inst_25895 = (state_25989[(8)]);
var inst_25895__$1 = calc_state.call(null);
var inst_25897 = (inst_25895__$1 == null);
var inst_25898 = cljs.core.not.call(null,inst_25897);
var state_25989__$1 = (function (){var statearr_25994 = state_25989;
(statearr_25994[(8)] = inst_25895__$1);

return statearr_25994;
})();
if(inst_25898){
var statearr_25995_26056 = state_25989__$1;
(statearr_25995_26056[(1)] = (2));

} else {
var statearr_25996_26057 = state_25989__$1;
(statearr_25996_26057[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (24))){
var inst_25942 = (state_25989[(9)]);
var inst_25963 = (state_25989[(10)]);
var inst_25949 = (state_25989[(11)]);
var inst_25963__$1 = inst_25942.call(null,inst_25949);
var state_25989__$1 = (function (){var statearr_25997 = state_25989;
(statearr_25997[(10)] = inst_25963__$1);

return statearr_25997;
})();
if(cljs.core.truth_(inst_25963__$1)){
var statearr_25998_26058 = state_25989__$1;
(statearr_25998_26058[(1)] = (29));

} else {
var statearr_25999_26059 = state_25989__$1;
(statearr_25999_26059[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (4))){
var inst_25910 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
if(cljs.core.truth_(inst_25910)){
var statearr_26000_26060 = state_25989__$1;
(statearr_26000_26060[(1)] = (8));

} else {
var statearr_26001_26061 = state_25989__$1;
(statearr_26001_26061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (15))){
var inst_25936 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
if(cljs.core.truth_(inst_25936)){
var statearr_26002_26062 = state_25989__$1;
(statearr_26002_26062[(1)] = (19));

} else {
var statearr_26003_26063 = state_25989__$1;
(statearr_26003_26063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (21))){
var inst_25941 = (state_25989[(12)]);
var inst_25941__$1 = (state_25989[(2)]);
var inst_25942 = cljs.core.get.call(null,inst_25941__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25943 = cljs.core.get.call(null,inst_25941__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25944 = cljs.core.get.call(null,inst_25941__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25989__$1 = (function (){var statearr_26004 = state_25989;
(statearr_26004[(12)] = inst_25941__$1);

(statearr_26004[(13)] = inst_25943);

(statearr_26004[(9)] = inst_25942);

return statearr_26004;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25989__$1,(22),inst_25944);
} else {
if((state_val_25990 === (31))){
var inst_25971 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
if(cljs.core.truth_(inst_25971)){
var statearr_26005_26064 = state_25989__$1;
(statearr_26005_26064[(1)] = (32));

} else {
var statearr_26006_26065 = state_25989__$1;
(statearr_26006_26065[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (32))){
var inst_25948 = (state_25989[(14)]);
var state_25989__$1 = state_25989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25989__$1,(35),out,inst_25948);
} else {
if((state_val_25990 === (33))){
var inst_25941 = (state_25989[(12)]);
var inst_25919 = inst_25941;
var state_25989__$1 = (function (){var statearr_26007 = state_25989;
(statearr_26007[(7)] = inst_25919);

return statearr_26007;
})();
var statearr_26008_26066 = state_25989__$1;
(statearr_26008_26066[(2)] = null);

(statearr_26008_26066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (13))){
var inst_25919 = (state_25989[(7)]);
var inst_25926 = inst_25919.cljs$lang$protocol_mask$partition0$;
var inst_25927 = (inst_25926 & (64));
var inst_25928 = inst_25919.cljs$core$ISeq$;
var inst_25929 = (inst_25927) || (inst_25928);
var state_25989__$1 = state_25989;
if(cljs.core.truth_(inst_25929)){
var statearr_26009_26067 = state_25989__$1;
(statearr_26009_26067[(1)] = (16));

} else {
var statearr_26010_26068 = state_25989__$1;
(statearr_26010_26068[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (22))){
var inst_25948 = (state_25989[(14)]);
var inst_25949 = (state_25989[(11)]);
var inst_25947 = (state_25989[(2)]);
var inst_25948__$1 = cljs.core.nth.call(null,inst_25947,(0),null);
var inst_25949__$1 = cljs.core.nth.call(null,inst_25947,(1),null);
var inst_25950 = (inst_25948__$1 == null);
var inst_25951 = cljs.core._EQ_.call(null,inst_25949__$1,change);
var inst_25952 = (inst_25950) || (inst_25951);
var state_25989__$1 = (function (){var statearr_26011 = state_25989;
(statearr_26011[(14)] = inst_25948__$1);

(statearr_26011[(11)] = inst_25949__$1);

return statearr_26011;
})();
if(cljs.core.truth_(inst_25952)){
var statearr_26012_26069 = state_25989__$1;
(statearr_26012_26069[(1)] = (23));

} else {
var statearr_26013_26070 = state_25989__$1;
(statearr_26013_26070[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (36))){
var inst_25941 = (state_25989[(12)]);
var inst_25919 = inst_25941;
var state_25989__$1 = (function (){var statearr_26014 = state_25989;
(statearr_26014[(7)] = inst_25919);

return statearr_26014;
})();
var statearr_26015_26071 = state_25989__$1;
(statearr_26015_26071[(2)] = null);

(statearr_26015_26071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (29))){
var inst_25963 = (state_25989[(10)]);
var state_25989__$1 = state_25989;
var statearr_26016_26072 = state_25989__$1;
(statearr_26016_26072[(2)] = inst_25963);

(statearr_26016_26072[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (6))){
var state_25989__$1 = state_25989;
var statearr_26017_26073 = state_25989__$1;
(statearr_26017_26073[(2)] = false);

(statearr_26017_26073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (28))){
var inst_25959 = (state_25989[(2)]);
var inst_25960 = calc_state.call(null);
var inst_25919 = inst_25960;
var state_25989__$1 = (function (){var statearr_26018 = state_25989;
(statearr_26018[(15)] = inst_25959);

(statearr_26018[(7)] = inst_25919);

return statearr_26018;
})();
var statearr_26019_26074 = state_25989__$1;
(statearr_26019_26074[(2)] = null);

(statearr_26019_26074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (25))){
var inst_25985 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
var statearr_26020_26075 = state_25989__$1;
(statearr_26020_26075[(2)] = inst_25985);

(statearr_26020_26075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (34))){
var inst_25983 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
var statearr_26021_26076 = state_25989__$1;
(statearr_26021_26076[(2)] = inst_25983);

(statearr_26021_26076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (17))){
var state_25989__$1 = state_25989;
var statearr_26022_26077 = state_25989__$1;
(statearr_26022_26077[(2)] = false);

(statearr_26022_26077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (3))){
var state_25989__$1 = state_25989;
var statearr_26023_26078 = state_25989__$1;
(statearr_26023_26078[(2)] = false);

(statearr_26023_26078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (12))){
var inst_25987 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25989__$1,inst_25987);
} else {
if((state_val_25990 === (2))){
var inst_25895 = (state_25989[(8)]);
var inst_25900 = inst_25895.cljs$lang$protocol_mask$partition0$;
var inst_25901 = (inst_25900 & (64));
var inst_25902 = inst_25895.cljs$core$ISeq$;
var inst_25903 = (inst_25901) || (inst_25902);
var state_25989__$1 = state_25989;
if(cljs.core.truth_(inst_25903)){
var statearr_26024_26079 = state_25989__$1;
(statearr_26024_26079[(1)] = (5));

} else {
var statearr_26025_26080 = state_25989__$1;
(statearr_26025_26080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (23))){
var inst_25948 = (state_25989[(14)]);
var inst_25954 = (inst_25948 == null);
var state_25989__$1 = state_25989;
if(cljs.core.truth_(inst_25954)){
var statearr_26026_26081 = state_25989__$1;
(statearr_26026_26081[(1)] = (26));

} else {
var statearr_26027_26082 = state_25989__$1;
(statearr_26027_26082[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (35))){
var inst_25974 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
if(cljs.core.truth_(inst_25974)){
var statearr_26028_26083 = state_25989__$1;
(statearr_26028_26083[(1)] = (36));

} else {
var statearr_26029_26084 = state_25989__$1;
(statearr_26029_26084[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (19))){
var inst_25919 = (state_25989[(7)]);
var inst_25938 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25919);
var state_25989__$1 = state_25989;
var statearr_26030_26085 = state_25989__$1;
(statearr_26030_26085[(2)] = inst_25938);

(statearr_26030_26085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (11))){
var inst_25919 = (state_25989[(7)]);
var inst_25923 = (inst_25919 == null);
var inst_25924 = cljs.core.not.call(null,inst_25923);
var state_25989__$1 = state_25989;
if(inst_25924){
var statearr_26031_26086 = state_25989__$1;
(statearr_26031_26086[(1)] = (13));

} else {
var statearr_26032_26087 = state_25989__$1;
(statearr_26032_26087[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (9))){
var inst_25895 = (state_25989[(8)]);
var state_25989__$1 = state_25989;
var statearr_26033_26088 = state_25989__$1;
(statearr_26033_26088[(2)] = inst_25895);

(statearr_26033_26088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (5))){
var state_25989__$1 = state_25989;
var statearr_26034_26089 = state_25989__$1;
(statearr_26034_26089[(2)] = true);

(statearr_26034_26089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (14))){
var state_25989__$1 = state_25989;
var statearr_26035_26090 = state_25989__$1;
(statearr_26035_26090[(2)] = false);

(statearr_26035_26090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (26))){
var inst_25949 = (state_25989[(11)]);
var inst_25956 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25949);
var state_25989__$1 = state_25989;
var statearr_26036_26091 = state_25989__$1;
(statearr_26036_26091[(2)] = inst_25956);

(statearr_26036_26091[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (16))){
var state_25989__$1 = state_25989;
var statearr_26037_26092 = state_25989__$1;
(statearr_26037_26092[(2)] = true);

(statearr_26037_26092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (38))){
var inst_25979 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
var statearr_26038_26093 = state_25989__$1;
(statearr_26038_26093[(2)] = inst_25979);

(statearr_26038_26093[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (30))){
var inst_25943 = (state_25989[(13)]);
var inst_25942 = (state_25989[(9)]);
var inst_25949 = (state_25989[(11)]);
var inst_25966 = cljs.core.empty_QMARK_.call(null,inst_25942);
var inst_25967 = inst_25943.call(null,inst_25949);
var inst_25968 = cljs.core.not.call(null,inst_25967);
var inst_25969 = (inst_25966) && (inst_25968);
var state_25989__$1 = state_25989;
var statearr_26039_26094 = state_25989__$1;
(statearr_26039_26094[(2)] = inst_25969);

(statearr_26039_26094[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (10))){
var inst_25895 = (state_25989[(8)]);
var inst_25915 = (state_25989[(2)]);
var inst_25916 = cljs.core.get.call(null,inst_25915,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25917 = cljs.core.get.call(null,inst_25915,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25918 = cljs.core.get.call(null,inst_25915,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25919 = inst_25895;
var state_25989__$1 = (function (){var statearr_26040 = state_25989;
(statearr_26040[(16)] = inst_25917);

(statearr_26040[(7)] = inst_25919);

(statearr_26040[(17)] = inst_25918);

(statearr_26040[(18)] = inst_25916);

return statearr_26040;
})();
var statearr_26041_26095 = state_25989__$1;
(statearr_26041_26095[(2)] = null);

(statearr_26041_26095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (18))){
var inst_25933 = (state_25989[(2)]);
var state_25989__$1 = state_25989;
var statearr_26042_26096 = state_25989__$1;
(statearr_26042_26096[(2)] = inst_25933);

(statearr_26042_26096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (37))){
var state_25989__$1 = state_25989;
var statearr_26043_26097 = state_25989__$1;
(statearr_26043_26097[(2)] = null);

(statearr_26043_26097[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25990 === (8))){
var inst_25895 = (state_25989[(8)]);
var inst_25912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25895);
var state_25989__$1 = state_25989;
var statearr_26044_26098 = state_25989__$1;
(statearr_26044_26098[(2)] = inst_25912);

(statearr_26044_26098[(1)] = (10));


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
});})(c__24339__auto___26052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24227__auto__,c__24339__auto___26052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24228__auto__ = null;
var cljs$core$async$mix_$_state_machine__24228__auto____0 = (function (){
var statearr_26048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26048[(0)] = cljs$core$async$mix_$_state_machine__24228__auto__);

(statearr_26048[(1)] = (1));

return statearr_26048;
});
var cljs$core$async$mix_$_state_machine__24228__auto____1 = (function (state_25989){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_25989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e26049){if((e26049 instanceof Object)){
var ex__24231__auto__ = e26049;
var statearr_26050_26099 = state_25989;
(statearr_26050_26099[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26100 = state_25989;
state_25989 = G__26100;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24228__auto__ = function(state_25989){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24228__auto____1.call(this,state_25989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24228__auto____0;
cljs$core$async$mix_$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24228__auto____1;
return cljs$core$async$mix_$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___26052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24341__auto__ = (function (){var statearr_26051 = f__24340__auto__.call(null);
(statearr_26051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___26052);

return statearr_26051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___26052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22369__auto__ = (((p == null))?null:p);
var m__22370__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22370__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22369__auto__ = (((p == null))?null:p);
var m__22370__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,p,v,ch);
} else {
var m__22370__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26101 = [];
var len__22776__auto___26104 = arguments.length;
var i__22777__auto___26105 = (0);
while(true){
if((i__22777__auto___26105 < len__22776__auto___26104)){
args26101.push((arguments[i__22777__auto___26105]));

var G__26106 = (i__22777__auto___26105 + (1));
i__22777__auto___26105 = G__26106;
continue;
} else {
}
break;
}

var G__26103 = args26101.length;
switch (G__26103) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26101.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22369__auto__ = (((p == null))?null:p);
var m__22370__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,p);
} else {
var m__22370__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22369__auto__ = (((p == null))?null:p);
var m__22370__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22369__auto__)]);
if(!((m__22370__auto__ == null))){
return m__22370__auto__.call(null,p,v);
} else {
var m__22370__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22370__auto____$1 == null))){
return m__22370__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26109 = [];
var len__22776__auto___26234 = arguments.length;
var i__22777__auto___26235 = (0);
while(true){
if((i__22777__auto___26235 < len__22776__auto___26234)){
args26109.push((arguments[i__22777__auto___26235]));

var G__26236 = (i__22777__auto___26235 + (1));
i__22777__auto___26235 = G__26236;
continue;
} else {
}
break;
}

var G__26111 = args26109.length;
switch (G__26111) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26109.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21706__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21706__auto__)){
return or__21706__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21706__auto__,mults){
return (function (p1__26108_SHARP_){
if(cljs.core.truth_(p1__26108_SHARP_.call(null,topic))){
return p1__26108_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26108_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21706__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26112 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26112 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26113){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26113 = meta26113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26114,meta26113__$1){
var self__ = this;
var _26114__$1 = this;
return (new cljs.core.async.t_cljs$core$async26112(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26113__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26114){
var self__ = this;
var _26114__$1 = this;
return self__.meta26113;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26112.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26112.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26112.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26112.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26112.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26112.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26112.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26112.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26113","meta26113",2129351010,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26112";

cljs.core.async.t_cljs$core$async26112.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22312__auto__,writer__22313__auto__,opt__22314__auto__){
return cljs.core._write.call(null,writer__22313__auto__,"cljs.core.async/t_cljs$core$async26112");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26112 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26112(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26113){
return (new cljs.core.async.t_cljs$core$async26112(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26113));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26112(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24339__auto___26238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___26238,mults,ensure_mult,p){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___26238,mults,ensure_mult,p){
return (function (state_26186){
var state_val_26187 = (state_26186[(1)]);
if((state_val_26187 === (7))){
var inst_26182 = (state_26186[(2)]);
var state_26186__$1 = state_26186;
var statearr_26188_26239 = state_26186__$1;
(statearr_26188_26239[(2)] = inst_26182);

(statearr_26188_26239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (20))){
var state_26186__$1 = state_26186;
var statearr_26189_26240 = state_26186__$1;
(statearr_26189_26240[(2)] = null);

(statearr_26189_26240[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (1))){
var state_26186__$1 = state_26186;
var statearr_26190_26241 = state_26186__$1;
(statearr_26190_26241[(2)] = null);

(statearr_26190_26241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (24))){
var inst_26165 = (state_26186[(7)]);
var inst_26174 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26165);
var state_26186__$1 = state_26186;
var statearr_26191_26242 = state_26186__$1;
(statearr_26191_26242[(2)] = inst_26174);

(statearr_26191_26242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (4))){
var inst_26117 = (state_26186[(8)]);
var inst_26117__$1 = (state_26186[(2)]);
var inst_26118 = (inst_26117__$1 == null);
var state_26186__$1 = (function (){var statearr_26192 = state_26186;
(statearr_26192[(8)] = inst_26117__$1);

return statearr_26192;
})();
if(cljs.core.truth_(inst_26118)){
var statearr_26193_26243 = state_26186__$1;
(statearr_26193_26243[(1)] = (5));

} else {
var statearr_26194_26244 = state_26186__$1;
(statearr_26194_26244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (15))){
var inst_26159 = (state_26186[(2)]);
var state_26186__$1 = state_26186;
var statearr_26195_26245 = state_26186__$1;
(statearr_26195_26245[(2)] = inst_26159);

(statearr_26195_26245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (21))){
var inst_26179 = (state_26186[(2)]);
var state_26186__$1 = (function (){var statearr_26196 = state_26186;
(statearr_26196[(9)] = inst_26179);

return statearr_26196;
})();
var statearr_26197_26246 = state_26186__$1;
(statearr_26197_26246[(2)] = null);

(statearr_26197_26246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (13))){
var inst_26141 = (state_26186[(10)]);
var inst_26143 = cljs.core.chunked_seq_QMARK_.call(null,inst_26141);
var state_26186__$1 = state_26186;
if(inst_26143){
var statearr_26198_26247 = state_26186__$1;
(statearr_26198_26247[(1)] = (16));

} else {
var statearr_26199_26248 = state_26186__$1;
(statearr_26199_26248[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (22))){
var inst_26171 = (state_26186[(2)]);
var state_26186__$1 = state_26186;
if(cljs.core.truth_(inst_26171)){
var statearr_26200_26249 = state_26186__$1;
(statearr_26200_26249[(1)] = (23));

} else {
var statearr_26201_26250 = state_26186__$1;
(statearr_26201_26250[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (6))){
var inst_26117 = (state_26186[(8)]);
var inst_26165 = (state_26186[(7)]);
var inst_26167 = (state_26186[(11)]);
var inst_26165__$1 = topic_fn.call(null,inst_26117);
var inst_26166 = cljs.core.deref.call(null,mults);
var inst_26167__$1 = cljs.core.get.call(null,inst_26166,inst_26165__$1);
var state_26186__$1 = (function (){var statearr_26202 = state_26186;
(statearr_26202[(7)] = inst_26165__$1);

(statearr_26202[(11)] = inst_26167__$1);

return statearr_26202;
})();
if(cljs.core.truth_(inst_26167__$1)){
var statearr_26203_26251 = state_26186__$1;
(statearr_26203_26251[(1)] = (19));

} else {
var statearr_26204_26252 = state_26186__$1;
(statearr_26204_26252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (25))){
var inst_26176 = (state_26186[(2)]);
var state_26186__$1 = state_26186;
var statearr_26205_26253 = state_26186__$1;
(statearr_26205_26253[(2)] = inst_26176);

(statearr_26205_26253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (17))){
var inst_26141 = (state_26186[(10)]);
var inst_26150 = cljs.core.first.call(null,inst_26141);
var inst_26151 = cljs.core.async.muxch_STAR_.call(null,inst_26150);
var inst_26152 = cljs.core.async.close_BANG_.call(null,inst_26151);
var inst_26153 = cljs.core.next.call(null,inst_26141);
var inst_26127 = inst_26153;
var inst_26128 = null;
var inst_26129 = (0);
var inst_26130 = (0);
var state_26186__$1 = (function (){var statearr_26206 = state_26186;
(statearr_26206[(12)] = inst_26129);

(statearr_26206[(13)] = inst_26152);

(statearr_26206[(14)] = inst_26127);

(statearr_26206[(15)] = inst_26130);

(statearr_26206[(16)] = inst_26128);

return statearr_26206;
})();
var statearr_26207_26254 = state_26186__$1;
(statearr_26207_26254[(2)] = null);

(statearr_26207_26254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (3))){
var inst_26184 = (state_26186[(2)]);
var state_26186__$1 = state_26186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26186__$1,inst_26184);
} else {
if((state_val_26187 === (12))){
var inst_26161 = (state_26186[(2)]);
var state_26186__$1 = state_26186;
var statearr_26208_26255 = state_26186__$1;
(statearr_26208_26255[(2)] = inst_26161);

(statearr_26208_26255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (2))){
var state_26186__$1 = state_26186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26186__$1,(4),ch);
} else {
if((state_val_26187 === (23))){
var state_26186__$1 = state_26186;
var statearr_26209_26256 = state_26186__$1;
(statearr_26209_26256[(2)] = null);

(statearr_26209_26256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (19))){
var inst_26117 = (state_26186[(8)]);
var inst_26167 = (state_26186[(11)]);
var inst_26169 = cljs.core.async.muxch_STAR_.call(null,inst_26167);
var state_26186__$1 = state_26186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26186__$1,(22),inst_26169,inst_26117);
} else {
if((state_val_26187 === (11))){
var inst_26127 = (state_26186[(14)]);
var inst_26141 = (state_26186[(10)]);
var inst_26141__$1 = cljs.core.seq.call(null,inst_26127);
var state_26186__$1 = (function (){var statearr_26210 = state_26186;
(statearr_26210[(10)] = inst_26141__$1);

return statearr_26210;
})();
if(inst_26141__$1){
var statearr_26211_26257 = state_26186__$1;
(statearr_26211_26257[(1)] = (13));

} else {
var statearr_26212_26258 = state_26186__$1;
(statearr_26212_26258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (9))){
var inst_26163 = (state_26186[(2)]);
var state_26186__$1 = state_26186;
var statearr_26213_26259 = state_26186__$1;
(statearr_26213_26259[(2)] = inst_26163);

(statearr_26213_26259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (5))){
var inst_26124 = cljs.core.deref.call(null,mults);
var inst_26125 = cljs.core.vals.call(null,inst_26124);
var inst_26126 = cljs.core.seq.call(null,inst_26125);
var inst_26127 = inst_26126;
var inst_26128 = null;
var inst_26129 = (0);
var inst_26130 = (0);
var state_26186__$1 = (function (){var statearr_26214 = state_26186;
(statearr_26214[(12)] = inst_26129);

(statearr_26214[(14)] = inst_26127);

(statearr_26214[(15)] = inst_26130);

(statearr_26214[(16)] = inst_26128);

return statearr_26214;
})();
var statearr_26215_26260 = state_26186__$1;
(statearr_26215_26260[(2)] = null);

(statearr_26215_26260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (14))){
var state_26186__$1 = state_26186;
var statearr_26219_26261 = state_26186__$1;
(statearr_26219_26261[(2)] = null);

(statearr_26219_26261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (16))){
var inst_26141 = (state_26186[(10)]);
var inst_26145 = cljs.core.chunk_first.call(null,inst_26141);
var inst_26146 = cljs.core.chunk_rest.call(null,inst_26141);
var inst_26147 = cljs.core.count.call(null,inst_26145);
var inst_26127 = inst_26146;
var inst_26128 = inst_26145;
var inst_26129 = inst_26147;
var inst_26130 = (0);
var state_26186__$1 = (function (){var statearr_26220 = state_26186;
(statearr_26220[(12)] = inst_26129);

(statearr_26220[(14)] = inst_26127);

(statearr_26220[(15)] = inst_26130);

(statearr_26220[(16)] = inst_26128);

return statearr_26220;
})();
var statearr_26221_26262 = state_26186__$1;
(statearr_26221_26262[(2)] = null);

(statearr_26221_26262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (10))){
var inst_26129 = (state_26186[(12)]);
var inst_26127 = (state_26186[(14)]);
var inst_26130 = (state_26186[(15)]);
var inst_26128 = (state_26186[(16)]);
var inst_26135 = cljs.core._nth.call(null,inst_26128,inst_26130);
var inst_26136 = cljs.core.async.muxch_STAR_.call(null,inst_26135);
var inst_26137 = cljs.core.async.close_BANG_.call(null,inst_26136);
var inst_26138 = (inst_26130 + (1));
var tmp26216 = inst_26129;
var tmp26217 = inst_26127;
var tmp26218 = inst_26128;
var inst_26127__$1 = tmp26217;
var inst_26128__$1 = tmp26218;
var inst_26129__$1 = tmp26216;
var inst_26130__$1 = inst_26138;
var state_26186__$1 = (function (){var statearr_26222 = state_26186;
(statearr_26222[(12)] = inst_26129__$1);

(statearr_26222[(14)] = inst_26127__$1);

(statearr_26222[(17)] = inst_26137);

(statearr_26222[(15)] = inst_26130__$1);

(statearr_26222[(16)] = inst_26128__$1);

return statearr_26222;
})();
var statearr_26223_26263 = state_26186__$1;
(statearr_26223_26263[(2)] = null);

(statearr_26223_26263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (18))){
var inst_26156 = (state_26186[(2)]);
var state_26186__$1 = state_26186;
var statearr_26224_26264 = state_26186__$1;
(statearr_26224_26264[(2)] = inst_26156);

(statearr_26224_26264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26187 === (8))){
var inst_26129 = (state_26186[(12)]);
var inst_26130 = (state_26186[(15)]);
var inst_26132 = (inst_26130 < inst_26129);
var inst_26133 = inst_26132;
var state_26186__$1 = state_26186;
if(cljs.core.truth_(inst_26133)){
var statearr_26225_26265 = state_26186__$1;
(statearr_26225_26265[(1)] = (10));

} else {
var statearr_26226_26266 = state_26186__$1;
(statearr_26226_26266[(1)] = (11));

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
});})(c__24339__auto___26238,mults,ensure_mult,p))
;
return ((function (switch__24227__auto__,c__24339__auto___26238,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_26230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26230[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_26230[(1)] = (1));

return statearr_26230;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_26186){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_26186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e26231){if((e26231 instanceof Object)){
var ex__24231__auto__ = e26231;
var statearr_26232_26267 = state_26186;
(statearr_26232_26267[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26268 = state_26186;
state_26186 = G__26268;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_26186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_26186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___26238,mults,ensure_mult,p))
})();
var state__24341__auto__ = (function (){var statearr_26233 = f__24340__auto__.call(null);
(statearr_26233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___26238);

return statearr_26233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___26238,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26269 = [];
var len__22776__auto___26272 = arguments.length;
var i__22777__auto___26273 = (0);
while(true){
if((i__22777__auto___26273 < len__22776__auto___26272)){
args26269.push((arguments[i__22777__auto___26273]));

var G__26274 = (i__22777__auto___26273 + (1));
i__22777__auto___26273 = G__26274;
continue;
} else {
}
break;
}

var G__26271 = args26269.length;
switch (G__26271) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26269.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26276 = [];
var len__22776__auto___26279 = arguments.length;
var i__22777__auto___26280 = (0);
while(true){
if((i__22777__auto___26280 < len__22776__auto___26279)){
args26276.push((arguments[i__22777__auto___26280]));

var G__26281 = (i__22777__auto___26280 + (1));
i__22777__auto___26280 = G__26281;
continue;
} else {
}
break;
}

var G__26278 = args26276.length;
switch (G__26278) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26276.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26283 = [];
var len__22776__auto___26354 = arguments.length;
var i__22777__auto___26355 = (0);
while(true){
if((i__22777__auto___26355 < len__22776__auto___26354)){
args26283.push((arguments[i__22777__auto___26355]));

var G__26356 = (i__22777__auto___26355 + (1));
i__22777__auto___26355 = G__26356;
continue;
} else {
}
break;
}

var G__26285 = args26283.length;
switch (G__26285) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26283.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24339__auto___26358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___26358,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___26358,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26324){
var state_val_26325 = (state_26324[(1)]);
if((state_val_26325 === (7))){
var state_26324__$1 = state_26324;
var statearr_26326_26359 = state_26324__$1;
(statearr_26326_26359[(2)] = null);

(statearr_26326_26359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (1))){
var state_26324__$1 = state_26324;
var statearr_26327_26360 = state_26324__$1;
(statearr_26327_26360[(2)] = null);

(statearr_26327_26360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (4))){
var inst_26288 = (state_26324[(7)]);
var inst_26290 = (inst_26288 < cnt);
var state_26324__$1 = state_26324;
if(cljs.core.truth_(inst_26290)){
var statearr_26328_26361 = state_26324__$1;
(statearr_26328_26361[(1)] = (6));

} else {
var statearr_26329_26362 = state_26324__$1;
(statearr_26329_26362[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (15))){
var inst_26320 = (state_26324[(2)]);
var state_26324__$1 = state_26324;
var statearr_26330_26363 = state_26324__$1;
(statearr_26330_26363[(2)] = inst_26320);

(statearr_26330_26363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (13))){
var inst_26313 = cljs.core.async.close_BANG_.call(null,out);
var state_26324__$1 = state_26324;
var statearr_26331_26364 = state_26324__$1;
(statearr_26331_26364[(2)] = inst_26313);

(statearr_26331_26364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (6))){
var state_26324__$1 = state_26324;
var statearr_26332_26365 = state_26324__$1;
(statearr_26332_26365[(2)] = null);

(statearr_26332_26365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (3))){
var inst_26322 = (state_26324[(2)]);
var state_26324__$1 = state_26324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26324__$1,inst_26322);
} else {
if((state_val_26325 === (12))){
var inst_26310 = (state_26324[(8)]);
var inst_26310__$1 = (state_26324[(2)]);
var inst_26311 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26310__$1);
var state_26324__$1 = (function (){var statearr_26333 = state_26324;
(statearr_26333[(8)] = inst_26310__$1);

return statearr_26333;
})();
if(cljs.core.truth_(inst_26311)){
var statearr_26334_26366 = state_26324__$1;
(statearr_26334_26366[(1)] = (13));

} else {
var statearr_26335_26367 = state_26324__$1;
(statearr_26335_26367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (2))){
var inst_26287 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26288 = (0);
var state_26324__$1 = (function (){var statearr_26336 = state_26324;
(statearr_26336[(9)] = inst_26287);

(statearr_26336[(7)] = inst_26288);

return statearr_26336;
})();
var statearr_26337_26368 = state_26324__$1;
(statearr_26337_26368[(2)] = null);

(statearr_26337_26368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (11))){
var inst_26288 = (state_26324[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26324,(10),Object,null,(9));
var inst_26297 = chs__$1.call(null,inst_26288);
var inst_26298 = done.call(null,inst_26288);
var inst_26299 = cljs.core.async.take_BANG_.call(null,inst_26297,inst_26298);
var state_26324__$1 = state_26324;
var statearr_26338_26369 = state_26324__$1;
(statearr_26338_26369[(2)] = inst_26299);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (9))){
var inst_26288 = (state_26324[(7)]);
var inst_26301 = (state_26324[(2)]);
var inst_26302 = (inst_26288 + (1));
var inst_26288__$1 = inst_26302;
var state_26324__$1 = (function (){var statearr_26339 = state_26324;
(statearr_26339[(10)] = inst_26301);

(statearr_26339[(7)] = inst_26288__$1);

return statearr_26339;
})();
var statearr_26340_26370 = state_26324__$1;
(statearr_26340_26370[(2)] = null);

(statearr_26340_26370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (5))){
var inst_26308 = (state_26324[(2)]);
var state_26324__$1 = (function (){var statearr_26341 = state_26324;
(statearr_26341[(11)] = inst_26308);

return statearr_26341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26324__$1,(12),dchan);
} else {
if((state_val_26325 === (14))){
var inst_26310 = (state_26324[(8)]);
var inst_26315 = cljs.core.apply.call(null,f,inst_26310);
var state_26324__$1 = state_26324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26324__$1,(16),out,inst_26315);
} else {
if((state_val_26325 === (16))){
var inst_26317 = (state_26324[(2)]);
var state_26324__$1 = (function (){var statearr_26342 = state_26324;
(statearr_26342[(12)] = inst_26317);

return statearr_26342;
})();
var statearr_26343_26371 = state_26324__$1;
(statearr_26343_26371[(2)] = null);

(statearr_26343_26371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (10))){
var inst_26292 = (state_26324[(2)]);
var inst_26293 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26324__$1 = (function (){var statearr_26344 = state_26324;
(statearr_26344[(13)] = inst_26292);

return statearr_26344;
})();
var statearr_26345_26372 = state_26324__$1;
(statearr_26345_26372[(2)] = inst_26293);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (8))){
var inst_26306 = (state_26324[(2)]);
var state_26324__$1 = state_26324;
var statearr_26346_26373 = state_26324__$1;
(statearr_26346_26373[(2)] = inst_26306);

(statearr_26346_26373[(1)] = (5));


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
});})(c__24339__auto___26358,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24227__auto__,c__24339__auto___26358,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_26350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26350[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_26350[(1)] = (1));

return statearr_26350;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_26324){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_26324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e26351){if((e26351 instanceof Object)){
var ex__24231__auto__ = e26351;
var statearr_26352_26374 = state_26324;
(statearr_26352_26374[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26375 = state_26324;
state_26324 = G__26375;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_26324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_26324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___26358,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24341__auto__ = (function (){var statearr_26353 = f__24340__auto__.call(null);
(statearr_26353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___26358);

return statearr_26353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___26358,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26377 = [];
var len__22776__auto___26433 = arguments.length;
var i__22777__auto___26434 = (0);
while(true){
if((i__22777__auto___26434 < len__22776__auto___26433)){
args26377.push((arguments[i__22777__auto___26434]));

var G__26435 = (i__22777__auto___26434 + (1));
i__22777__auto___26434 = G__26435;
continue;
} else {
}
break;
}

var G__26379 = args26377.length;
switch (G__26379) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26377.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24339__auto___26437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___26437,out){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___26437,out){
return (function (state_26409){
var state_val_26410 = (state_26409[(1)]);
if((state_val_26410 === (7))){
var inst_26388 = (state_26409[(7)]);
var inst_26389 = (state_26409[(8)]);
var inst_26388__$1 = (state_26409[(2)]);
var inst_26389__$1 = cljs.core.nth.call(null,inst_26388__$1,(0),null);
var inst_26390 = cljs.core.nth.call(null,inst_26388__$1,(1),null);
var inst_26391 = (inst_26389__$1 == null);
var state_26409__$1 = (function (){var statearr_26411 = state_26409;
(statearr_26411[(9)] = inst_26390);

(statearr_26411[(7)] = inst_26388__$1);

(statearr_26411[(8)] = inst_26389__$1);

return statearr_26411;
})();
if(cljs.core.truth_(inst_26391)){
var statearr_26412_26438 = state_26409__$1;
(statearr_26412_26438[(1)] = (8));

} else {
var statearr_26413_26439 = state_26409__$1;
(statearr_26413_26439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (1))){
var inst_26380 = cljs.core.vec.call(null,chs);
var inst_26381 = inst_26380;
var state_26409__$1 = (function (){var statearr_26414 = state_26409;
(statearr_26414[(10)] = inst_26381);

return statearr_26414;
})();
var statearr_26415_26440 = state_26409__$1;
(statearr_26415_26440[(2)] = null);

(statearr_26415_26440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (4))){
var inst_26381 = (state_26409[(10)]);
var state_26409__$1 = state_26409;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26409__$1,(7),inst_26381);
} else {
if((state_val_26410 === (6))){
var inst_26405 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
var statearr_26416_26441 = state_26409__$1;
(statearr_26416_26441[(2)] = inst_26405);

(statearr_26416_26441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (3))){
var inst_26407 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26409__$1,inst_26407);
} else {
if((state_val_26410 === (2))){
var inst_26381 = (state_26409[(10)]);
var inst_26383 = cljs.core.count.call(null,inst_26381);
var inst_26384 = (inst_26383 > (0));
var state_26409__$1 = state_26409;
if(cljs.core.truth_(inst_26384)){
var statearr_26418_26442 = state_26409__$1;
(statearr_26418_26442[(1)] = (4));

} else {
var statearr_26419_26443 = state_26409__$1;
(statearr_26419_26443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (11))){
var inst_26381 = (state_26409[(10)]);
var inst_26398 = (state_26409[(2)]);
var tmp26417 = inst_26381;
var inst_26381__$1 = tmp26417;
var state_26409__$1 = (function (){var statearr_26420 = state_26409;
(statearr_26420[(11)] = inst_26398);

(statearr_26420[(10)] = inst_26381__$1);

return statearr_26420;
})();
var statearr_26421_26444 = state_26409__$1;
(statearr_26421_26444[(2)] = null);

(statearr_26421_26444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (9))){
var inst_26389 = (state_26409[(8)]);
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26409__$1,(11),out,inst_26389);
} else {
if((state_val_26410 === (5))){
var inst_26403 = cljs.core.async.close_BANG_.call(null,out);
var state_26409__$1 = state_26409;
var statearr_26422_26445 = state_26409__$1;
(statearr_26422_26445[(2)] = inst_26403);

(statearr_26422_26445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (10))){
var inst_26401 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
var statearr_26423_26446 = state_26409__$1;
(statearr_26423_26446[(2)] = inst_26401);

(statearr_26423_26446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (8))){
var inst_26390 = (state_26409[(9)]);
var inst_26388 = (state_26409[(7)]);
var inst_26381 = (state_26409[(10)]);
var inst_26389 = (state_26409[(8)]);
var inst_26393 = (function (){var cs = inst_26381;
var vec__26386 = inst_26388;
var v = inst_26389;
var c = inst_26390;
return ((function (cs,vec__26386,v,c,inst_26390,inst_26388,inst_26381,inst_26389,state_val_26410,c__24339__auto___26437,out){
return (function (p1__26376_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26376_SHARP_);
});
;})(cs,vec__26386,v,c,inst_26390,inst_26388,inst_26381,inst_26389,state_val_26410,c__24339__auto___26437,out))
})();
var inst_26394 = cljs.core.filterv.call(null,inst_26393,inst_26381);
var inst_26381__$1 = inst_26394;
var state_26409__$1 = (function (){var statearr_26424 = state_26409;
(statearr_26424[(10)] = inst_26381__$1);

return statearr_26424;
})();
var statearr_26425_26447 = state_26409__$1;
(statearr_26425_26447[(2)] = null);

(statearr_26425_26447[(1)] = (2));


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
});})(c__24339__auto___26437,out))
;
return ((function (switch__24227__auto__,c__24339__auto___26437,out){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_26429 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26429[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_26429[(1)] = (1));

return statearr_26429;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_26409){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_26409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e26430){if((e26430 instanceof Object)){
var ex__24231__auto__ = e26430;
var statearr_26431_26448 = state_26409;
(statearr_26431_26448[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26449 = state_26409;
state_26409 = G__26449;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_26409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_26409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___26437,out))
})();
var state__24341__auto__ = (function (){var statearr_26432 = f__24340__auto__.call(null);
(statearr_26432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___26437);

return statearr_26432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___26437,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26450 = [];
var len__22776__auto___26499 = arguments.length;
var i__22777__auto___26500 = (0);
while(true){
if((i__22777__auto___26500 < len__22776__auto___26499)){
args26450.push((arguments[i__22777__auto___26500]));

var G__26501 = (i__22777__auto___26500 + (1));
i__22777__auto___26500 = G__26501;
continue;
} else {
}
break;
}

var G__26452 = args26450.length;
switch (G__26452) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26450.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24339__auto___26503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___26503,out){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___26503,out){
return (function (state_26476){
var state_val_26477 = (state_26476[(1)]);
if((state_val_26477 === (7))){
var inst_26458 = (state_26476[(7)]);
var inst_26458__$1 = (state_26476[(2)]);
var inst_26459 = (inst_26458__$1 == null);
var inst_26460 = cljs.core.not.call(null,inst_26459);
var state_26476__$1 = (function (){var statearr_26478 = state_26476;
(statearr_26478[(7)] = inst_26458__$1);

return statearr_26478;
})();
if(inst_26460){
var statearr_26479_26504 = state_26476__$1;
(statearr_26479_26504[(1)] = (8));

} else {
var statearr_26480_26505 = state_26476__$1;
(statearr_26480_26505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (1))){
var inst_26453 = (0);
var state_26476__$1 = (function (){var statearr_26481 = state_26476;
(statearr_26481[(8)] = inst_26453);

return statearr_26481;
})();
var statearr_26482_26506 = state_26476__$1;
(statearr_26482_26506[(2)] = null);

(statearr_26482_26506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (4))){
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26476__$1,(7),ch);
} else {
if((state_val_26477 === (6))){
var inst_26471 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
var statearr_26483_26507 = state_26476__$1;
(statearr_26483_26507[(2)] = inst_26471);

(statearr_26483_26507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (3))){
var inst_26473 = (state_26476[(2)]);
var inst_26474 = cljs.core.async.close_BANG_.call(null,out);
var state_26476__$1 = (function (){var statearr_26484 = state_26476;
(statearr_26484[(9)] = inst_26473);

return statearr_26484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26476__$1,inst_26474);
} else {
if((state_val_26477 === (2))){
var inst_26453 = (state_26476[(8)]);
var inst_26455 = (inst_26453 < n);
var state_26476__$1 = state_26476;
if(cljs.core.truth_(inst_26455)){
var statearr_26485_26508 = state_26476__$1;
(statearr_26485_26508[(1)] = (4));

} else {
var statearr_26486_26509 = state_26476__$1;
(statearr_26486_26509[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (11))){
var inst_26453 = (state_26476[(8)]);
var inst_26463 = (state_26476[(2)]);
var inst_26464 = (inst_26453 + (1));
var inst_26453__$1 = inst_26464;
var state_26476__$1 = (function (){var statearr_26487 = state_26476;
(statearr_26487[(10)] = inst_26463);

(statearr_26487[(8)] = inst_26453__$1);

return statearr_26487;
})();
var statearr_26488_26510 = state_26476__$1;
(statearr_26488_26510[(2)] = null);

(statearr_26488_26510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (9))){
var state_26476__$1 = state_26476;
var statearr_26489_26511 = state_26476__$1;
(statearr_26489_26511[(2)] = null);

(statearr_26489_26511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (5))){
var state_26476__$1 = state_26476;
var statearr_26490_26512 = state_26476__$1;
(statearr_26490_26512[(2)] = null);

(statearr_26490_26512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (10))){
var inst_26468 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
var statearr_26491_26513 = state_26476__$1;
(statearr_26491_26513[(2)] = inst_26468);

(statearr_26491_26513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (8))){
var inst_26458 = (state_26476[(7)]);
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26476__$1,(11),out,inst_26458);
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
});})(c__24339__auto___26503,out))
;
return ((function (switch__24227__auto__,c__24339__auto___26503,out){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_26495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26495[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_26495[(1)] = (1));

return statearr_26495;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_26476){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_26476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e26496){if((e26496 instanceof Object)){
var ex__24231__auto__ = e26496;
var statearr_26497_26514 = state_26476;
(statearr_26497_26514[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26515 = state_26476;
state_26476 = G__26515;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_26476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_26476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___26503,out))
})();
var state__24341__auto__ = (function (){var statearr_26498 = f__24340__auto__.call(null);
(statearr_26498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___26503);

return statearr_26498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___26503,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26523 = (function (map_LT_,f,ch,meta26524){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26524 = meta26524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26525,meta26524__$1){
var self__ = this;
var _26525__$1 = this;
return (new cljs.core.async.t_cljs$core$async26523(self__.map_LT_,self__.f,self__.ch,meta26524__$1));
});

cljs.core.async.t_cljs$core$async26523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26525){
var self__ = this;
var _26525__$1 = this;
return self__.meta26524;
});

cljs.core.async.t_cljs$core$async26523.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26523.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26523.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26526 = (function (map_LT_,f,ch,meta26524,_,fn1,meta26527){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26524 = meta26524;
this._ = _;
this.fn1 = fn1;
this.meta26527 = meta26527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26528,meta26527__$1){
var self__ = this;
var _26528__$1 = this;
return (new cljs.core.async.t_cljs$core$async26526(self__.map_LT_,self__.f,self__.ch,self__.meta26524,self__._,self__.fn1,meta26527__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26528){
var self__ = this;
var _26528__$1 = this;
return self__.meta26527;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26526.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26516_SHARP_){
return f1.call(null,(((p1__26516_SHARP_ == null))?null:self__.f.call(null,p1__26516_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26526.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26524","meta26524",591778063,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26523","cljs.core.async/t_cljs$core$async26523",-161831069,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26527","meta26527",415901271,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26526";

cljs.core.async.t_cljs$core$async26526.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22312__auto__,writer__22313__auto__,opt__22314__auto__){
return cljs.core._write.call(null,writer__22313__auto__,"cljs.core.async/t_cljs$core$async26526");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26526 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26526(map_LT___$1,f__$1,ch__$1,meta26524__$1,___$2,fn1__$1,meta26527){
return (new cljs.core.async.t_cljs$core$async26526(map_LT___$1,f__$1,ch__$1,meta26524__$1,___$2,fn1__$1,meta26527));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26526(self__.map_LT_,self__.f,self__.ch,self__.meta26524,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21694__auto__ = ret;
if(cljs.core.truth_(and__21694__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21694__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26523.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26524","meta26524",591778063,null)], null);
});

cljs.core.async.t_cljs$core$async26523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26523";

cljs.core.async.t_cljs$core$async26523.cljs$lang$ctorPrWriter = (function (this__22312__auto__,writer__22313__auto__,opt__22314__auto__){
return cljs.core._write.call(null,writer__22313__auto__,"cljs.core.async/t_cljs$core$async26523");
});

cljs.core.async.__GT_t_cljs$core$async26523 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26523(map_LT___$1,f__$1,ch__$1,meta26524){
return (new cljs.core.async.t_cljs$core$async26523(map_LT___$1,f__$1,ch__$1,meta26524));
});

}

return (new cljs.core.async.t_cljs$core$async26523(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26532 = (function (map_GT_,f,ch,meta26533){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26533 = meta26533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26534,meta26533__$1){
var self__ = this;
var _26534__$1 = this;
return (new cljs.core.async.t_cljs$core$async26532(self__.map_GT_,self__.f,self__.ch,meta26533__$1));
});

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26534){
var self__ = this;
var _26534__$1 = this;
return self__.meta26533;
});

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26533","meta26533",-1895586358,null)], null);
});

cljs.core.async.t_cljs$core$async26532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26532";

cljs.core.async.t_cljs$core$async26532.cljs$lang$ctorPrWriter = (function (this__22312__auto__,writer__22313__auto__,opt__22314__auto__){
return cljs.core._write.call(null,writer__22313__auto__,"cljs.core.async/t_cljs$core$async26532");
});

cljs.core.async.__GT_t_cljs$core$async26532 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26532(map_GT___$1,f__$1,ch__$1,meta26533){
return (new cljs.core.async.t_cljs$core$async26532(map_GT___$1,f__$1,ch__$1,meta26533));
});

}

return (new cljs.core.async.t_cljs$core$async26532(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26538 = (function (filter_GT_,p,ch,meta26539){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26539 = meta26539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26540,meta26539__$1){
var self__ = this;
var _26540__$1 = this;
return (new cljs.core.async.t_cljs$core$async26538(self__.filter_GT_,self__.p,self__.ch,meta26539__$1));
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26540){
var self__ = this;
var _26540__$1 = this;
return self__.meta26539;
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26539","meta26539",1642457799,null)], null);
});

cljs.core.async.t_cljs$core$async26538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26538";

cljs.core.async.t_cljs$core$async26538.cljs$lang$ctorPrWriter = (function (this__22312__auto__,writer__22313__auto__,opt__22314__auto__){
return cljs.core._write.call(null,writer__22313__auto__,"cljs.core.async/t_cljs$core$async26538");
});

cljs.core.async.__GT_t_cljs$core$async26538 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26538(filter_GT___$1,p__$1,ch__$1,meta26539){
return (new cljs.core.async.t_cljs$core$async26538(filter_GT___$1,p__$1,ch__$1,meta26539));
});

}

return (new cljs.core.async.t_cljs$core$async26538(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26541 = [];
var len__22776__auto___26585 = arguments.length;
var i__22777__auto___26586 = (0);
while(true){
if((i__22777__auto___26586 < len__22776__auto___26585)){
args26541.push((arguments[i__22777__auto___26586]));

var G__26587 = (i__22777__auto___26586 + (1));
i__22777__auto___26586 = G__26587;
continue;
} else {
}
break;
}

var G__26543 = args26541.length;
switch (G__26543) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26541.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24339__auto___26589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___26589,out){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___26589,out){
return (function (state_26564){
var state_val_26565 = (state_26564[(1)]);
if((state_val_26565 === (7))){
var inst_26560 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
var statearr_26566_26590 = state_26564__$1;
(statearr_26566_26590[(2)] = inst_26560);

(statearr_26566_26590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (1))){
var state_26564__$1 = state_26564;
var statearr_26567_26591 = state_26564__$1;
(statearr_26567_26591[(2)] = null);

(statearr_26567_26591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (4))){
var inst_26546 = (state_26564[(7)]);
var inst_26546__$1 = (state_26564[(2)]);
var inst_26547 = (inst_26546__$1 == null);
var state_26564__$1 = (function (){var statearr_26568 = state_26564;
(statearr_26568[(7)] = inst_26546__$1);

return statearr_26568;
})();
if(cljs.core.truth_(inst_26547)){
var statearr_26569_26592 = state_26564__$1;
(statearr_26569_26592[(1)] = (5));

} else {
var statearr_26570_26593 = state_26564__$1;
(statearr_26570_26593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (6))){
var inst_26546 = (state_26564[(7)]);
var inst_26551 = p.call(null,inst_26546);
var state_26564__$1 = state_26564;
if(cljs.core.truth_(inst_26551)){
var statearr_26571_26594 = state_26564__$1;
(statearr_26571_26594[(1)] = (8));

} else {
var statearr_26572_26595 = state_26564__$1;
(statearr_26572_26595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (3))){
var inst_26562 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26564__$1,inst_26562);
} else {
if((state_val_26565 === (2))){
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26564__$1,(4),ch);
} else {
if((state_val_26565 === (11))){
var inst_26554 = (state_26564[(2)]);
var state_26564__$1 = state_26564;
var statearr_26573_26596 = state_26564__$1;
(statearr_26573_26596[(2)] = inst_26554);

(statearr_26573_26596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (9))){
var state_26564__$1 = state_26564;
var statearr_26574_26597 = state_26564__$1;
(statearr_26574_26597[(2)] = null);

(statearr_26574_26597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (5))){
var inst_26549 = cljs.core.async.close_BANG_.call(null,out);
var state_26564__$1 = state_26564;
var statearr_26575_26598 = state_26564__$1;
(statearr_26575_26598[(2)] = inst_26549);

(statearr_26575_26598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (10))){
var inst_26557 = (state_26564[(2)]);
var state_26564__$1 = (function (){var statearr_26576 = state_26564;
(statearr_26576[(8)] = inst_26557);

return statearr_26576;
})();
var statearr_26577_26599 = state_26564__$1;
(statearr_26577_26599[(2)] = null);

(statearr_26577_26599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26565 === (8))){
var inst_26546 = (state_26564[(7)]);
var state_26564__$1 = state_26564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26564__$1,(11),out,inst_26546);
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
});})(c__24339__auto___26589,out))
;
return ((function (switch__24227__auto__,c__24339__auto___26589,out){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_26581 = [null,null,null,null,null,null,null,null,null];
(statearr_26581[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_26581[(1)] = (1));

return statearr_26581;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_26564){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_26564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e26582){if((e26582 instanceof Object)){
var ex__24231__auto__ = e26582;
var statearr_26583_26600 = state_26564;
(statearr_26583_26600[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26601 = state_26564;
state_26564 = G__26601;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_26564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_26564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___26589,out))
})();
var state__24341__auto__ = (function (){var statearr_26584 = f__24340__auto__.call(null);
(statearr_26584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___26589);

return statearr_26584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___26589,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26602 = [];
var len__22776__auto___26605 = arguments.length;
var i__22777__auto___26606 = (0);
while(true){
if((i__22777__auto___26606 < len__22776__auto___26605)){
args26602.push((arguments[i__22777__auto___26606]));

var G__26607 = (i__22777__auto___26606 + (1));
i__22777__auto___26606 = G__26607;
continue;
} else {
}
break;
}

var G__26604 = args26602.length;
switch (G__26604) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26602.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24339__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto__){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto__){
return (function (state_26774){
var state_val_26775 = (state_26774[(1)]);
if((state_val_26775 === (7))){
var inst_26770 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26776_26817 = state_26774__$1;
(statearr_26776_26817[(2)] = inst_26770);

(statearr_26776_26817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (20))){
var inst_26740 = (state_26774[(7)]);
var inst_26751 = (state_26774[(2)]);
var inst_26752 = cljs.core.next.call(null,inst_26740);
var inst_26726 = inst_26752;
var inst_26727 = null;
var inst_26728 = (0);
var inst_26729 = (0);
var state_26774__$1 = (function (){var statearr_26777 = state_26774;
(statearr_26777[(8)] = inst_26728);

(statearr_26777[(9)] = inst_26727);

(statearr_26777[(10)] = inst_26729);

(statearr_26777[(11)] = inst_26751);

(statearr_26777[(12)] = inst_26726);

return statearr_26777;
})();
var statearr_26778_26818 = state_26774__$1;
(statearr_26778_26818[(2)] = null);

(statearr_26778_26818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (1))){
var state_26774__$1 = state_26774;
var statearr_26779_26819 = state_26774__$1;
(statearr_26779_26819[(2)] = null);

(statearr_26779_26819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (4))){
var inst_26715 = (state_26774[(13)]);
var inst_26715__$1 = (state_26774[(2)]);
var inst_26716 = (inst_26715__$1 == null);
var state_26774__$1 = (function (){var statearr_26780 = state_26774;
(statearr_26780[(13)] = inst_26715__$1);

return statearr_26780;
})();
if(cljs.core.truth_(inst_26716)){
var statearr_26781_26820 = state_26774__$1;
(statearr_26781_26820[(1)] = (5));

} else {
var statearr_26782_26821 = state_26774__$1;
(statearr_26782_26821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (15))){
var state_26774__$1 = state_26774;
var statearr_26786_26822 = state_26774__$1;
(statearr_26786_26822[(2)] = null);

(statearr_26786_26822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (21))){
var state_26774__$1 = state_26774;
var statearr_26787_26823 = state_26774__$1;
(statearr_26787_26823[(2)] = null);

(statearr_26787_26823[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (13))){
var inst_26728 = (state_26774[(8)]);
var inst_26727 = (state_26774[(9)]);
var inst_26729 = (state_26774[(10)]);
var inst_26726 = (state_26774[(12)]);
var inst_26736 = (state_26774[(2)]);
var inst_26737 = (inst_26729 + (1));
var tmp26783 = inst_26728;
var tmp26784 = inst_26727;
var tmp26785 = inst_26726;
var inst_26726__$1 = tmp26785;
var inst_26727__$1 = tmp26784;
var inst_26728__$1 = tmp26783;
var inst_26729__$1 = inst_26737;
var state_26774__$1 = (function (){var statearr_26788 = state_26774;
(statearr_26788[(8)] = inst_26728__$1);

(statearr_26788[(9)] = inst_26727__$1);

(statearr_26788[(10)] = inst_26729__$1);

(statearr_26788[(14)] = inst_26736);

(statearr_26788[(12)] = inst_26726__$1);

return statearr_26788;
})();
var statearr_26789_26824 = state_26774__$1;
(statearr_26789_26824[(2)] = null);

(statearr_26789_26824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (22))){
var state_26774__$1 = state_26774;
var statearr_26790_26825 = state_26774__$1;
(statearr_26790_26825[(2)] = null);

(statearr_26790_26825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (6))){
var inst_26715 = (state_26774[(13)]);
var inst_26724 = f.call(null,inst_26715);
var inst_26725 = cljs.core.seq.call(null,inst_26724);
var inst_26726 = inst_26725;
var inst_26727 = null;
var inst_26728 = (0);
var inst_26729 = (0);
var state_26774__$1 = (function (){var statearr_26791 = state_26774;
(statearr_26791[(8)] = inst_26728);

(statearr_26791[(9)] = inst_26727);

(statearr_26791[(10)] = inst_26729);

(statearr_26791[(12)] = inst_26726);

return statearr_26791;
})();
var statearr_26792_26826 = state_26774__$1;
(statearr_26792_26826[(2)] = null);

(statearr_26792_26826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (17))){
var inst_26740 = (state_26774[(7)]);
var inst_26744 = cljs.core.chunk_first.call(null,inst_26740);
var inst_26745 = cljs.core.chunk_rest.call(null,inst_26740);
var inst_26746 = cljs.core.count.call(null,inst_26744);
var inst_26726 = inst_26745;
var inst_26727 = inst_26744;
var inst_26728 = inst_26746;
var inst_26729 = (0);
var state_26774__$1 = (function (){var statearr_26793 = state_26774;
(statearr_26793[(8)] = inst_26728);

(statearr_26793[(9)] = inst_26727);

(statearr_26793[(10)] = inst_26729);

(statearr_26793[(12)] = inst_26726);

return statearr_26793;
})();
var statearr_26794_26827 = state_26774__$1;
(statearr_26794_26827[(2)] = null);

(statearr_26794_26827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (3))){
var inst_26772 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26774__$1,inst_26772);
} else {
if((state_val_26775 === (12))){
var inst_26760 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26795_26828 = state_26774__$1;
(statearr_26795_26828[(2)] = inst_26760);

(statearr_26795_26828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (2))){
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26774__$1,(4),in$);
} else {
if((state_val_26775 === (23))){
var inst_26768 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26796_26829 = state_26774__$1;
(statearr_26796_26829[(2)] = inst_26768);

(statearr_26796_26829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (19))){
var inst_26755 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26797_26830 = state_26774__$1;
(statearr_26797_26830[(2)] = inst_26755);

(statearr_26797_26830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (11))){
var inst_26740 = (state_26774[(7)]);
var inst_26726 = (state_26774[(12)]);
var inst_26740__$1 = cljs.core.seq.call(null,inst_26726);
var state_26774__$1 = (function (){var statearr_26798 = state_26774;
(statearr_26798[(7)] = inst_26740__$1);

return statearr_26798;
})();
if(inst_26740__$1){
var statearr_26799_26831 = state_26774__$1;
(statearr_26799_26831[(1)] = (14));

} else {
var statearr_26800_26832 = state_26774__$1;
(statearr_26800_26832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (9))){
var inst_26762 = (state_26774[(2)]);
var inst_26763 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26774__$1 = (function (){var statearr_26801 = state_26774;
(statearr_26801[(15)] = inst_26762);

return statearr_26801;
})();
if(cljs.core.truth_(inst_26763)){
var statearr_26802_26833 = state_26774__$1;
(statearr_26802_26833[(1)] = (21));

} else {
var statearr_26803_26834 = state_26774__$1;
(statearr_26803_26834[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (5))){
var inst_26718 = cljs.core.async.close_BANG_.call(null,out);
var state_26774__$1 = state_26774;
var statearr_26804_26835 = state_26774__$1;
(statearr_26804_26835[(2)] = inst_26718);

(statearr_26804_26835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (14))){
var inst_26740 = (state_26774[(7)]);
var inst_26742 = cljs.core.chunked_seq_QMARK_.call(null,inst_26740);
var state_26774__$1 = state_26774;
if(inst_26742){
var statearr_26805_26836 = state_26774__$1;
(statearr_26805_26836[(1)] = (17));

} else {
var statearr_26806_26837 = state_26774__$1;
(statearr_26806_26837[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (16))){
var inst_26758 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26807_26838 = state_26774__$1;
(statearr_26807_26838[(2)] = inst_26758);

(statearr_26807_26838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (10))){
var inst_26727 = (state_26774[(9)]);
var inst_26729 = (state_26774[(10)]);
var inst_26734 = cljs.core._nth.call(null,inst_26727,inst_26729);
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26774__$1,(13),out,inst_26734);
} else {
if((state_val_26775 === (18))){
var inst_26740 = (state_26774[(7)]);
var inst_26749 = cljs.core.first.call(null,inst_26740);
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26774__$1,(20),out,inst_26749);
} else {
if((state_val_26775 === (8))){
var inst_26728 = (state_26774[(8)]);
var inst_26729 = (state_26774[(10)]);
var inst_26731 = (inst_26729 < inst_26728);
var inst_26732 = inst_26731;
var state_26774__$1 = state_26774;
if(cljs.core.truth_(inst_26732)){
var statearr_26808_26839 = state_26774__$1;
(statearr_26808_26839[(1)] = (10));

} else {
var statearr_26809_26840 = state_26774__$1;
(statearr_26809_26840[(1)] = (11));

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
});})(c__24339__auto__))
;
return ((function (switch__24227__auto__,c__24339__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24228__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24228__auto____0 = (function (){
var statearr_26813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26813[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24228__auto__);

(statearr_26813[(1)] = (1));

return statearr_26813;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24228__auto____1 = (function (state_26774){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_26774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e26814){if((e26814 instanceof Object)){
var ex__24231__auto__ = e26814;
var statearr_26815_26841 = state_26774;
(statearr_26815_26841[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26842 = state_26774;
state_26774 = G__26842;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24228__auto__ = function(state_26774){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24228__auto____1.call(this,state_26774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24228__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24228__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto__))
})();
var state__24341__auto__ = (function (){var statearr_26816 = f__24340__auto__.call(null);
(statearr_26816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto__);

return statearr_26816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto__))
);

return c__24339__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26843 = [];
var len__22776__auto___26846 = arguments.length;
var i__22777__auto___26847 = (0);
while(true){
if((i__22777__auto___26847 < len__22776__auto___26846)){
args26843.push((arguments[i__22777__auto___26847]));

var G__26848 = (i__22777__auto___26847 + (1));
i__22777__auto___26847 = G__26848;
continue;
} else {
}
break;
}

var G__26845 = args26843.length;
switch (G__26845) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26843.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26850 = [];
var len__22776__auto___26853 = arguments.length;
var i__22777__auto___26854 = (0);
while(true){
if((i__22777__auto___26854 < len__22776__auto___26853)){
args26850.push((arguments[i__22777__auto___26854]));

var G__26855 = (i__22777__auto___26854 + (1));
i__22777__auto___26854 = G__26855;
continue;
} else {
}
break;
}

var G__26852 = args26850.length;
switch (G__26852) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26850.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26857 = [];
var len__22776__auto___26908 = arguments.length;
var i__22777__auto___26909 = (0);
while(true){
if((i__22777__auto___26909 < len__22776__auto___26908)){
args26857.push((arguments[i__22777__auto___26909]));

var G__26910 = (i__22777__auto___26909 + (1));
i__22777__auto___26909 = G__26910;
continue;
} else {
}
break;
}

var G__26859 = args26857.length;
switch (G__26859) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26857.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24339__auto___26912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___26912,out){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___26912,out){
return (function (state_26883){
var state_val_26884 = (state_26883[(1)]);
if((state_val_26884 === (7))){
var inst_26878 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
var statearr_26885_26913 = state_26883__$1;
(statearr_26885_26913[(2)] = inst_26878);

(statearr_26885_26913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (1))){
var inst_26860 = null;
var state_26883__$1 = (function (){var statearr_26886 = state_26883;
(statearr_26886[(7)] = inst_26860);

return statearr_26886;
})();
var statearr_26887_26914 = state_26883__$1;
(statearr_26887_26914[(2)] = null);

(statearr_26887_26914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (4))){
var inst_26863 = (state_26883[(8)]);
var inst_26863__$1 = (state_26883[(2)]);
var inst_26864 = (inst_26863__$1 == null);
var inst_26865 = cljs.core.not.call(null,inst_26864);
var state_26883__$1 = (function (){var statearr_26888 = state_26883;
(statearr_26888[(8)] = inst_26863__$1);

return statearr_26888;
})();
if(inst_26865){
var statearr_26889_26915 = state_26883__$1;
(statearr_26889_26915[(1)] = (5));

} else {
var statearr_26890_26916 = state_26883__$1;
(statearr_26890_26916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (6))){
var state_26883__$1 = state_26883;
var statearr_26891_26917 = state_26883__$1;
(statearr_26891_26917[(2)] = null);

(statearr_26891_26917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (3))){
var inst_26880 = (state_26883[(2)]);
var inst_26881 = cljs.core.async.close_BANG_.call(null,out);
var state_26883__$1 = (function (){var statearr_26892 = state_26883;
(statearr_26892[(9)] = inst_26880);

return statearr_26892;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26883__$1,inst_26881);
} else {
if((state_val_26884 === (2))){
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26883__$1,(4),ch);
} else {
if((state_val_26884 === (11))){
var inst_26863 = (state_26883[(8)]);
var inst_26872 = (state_26883[(2)]);
var inst_26860 = inst_26863;
var state_26883__$1 = (function (){var statearr_26893 = state_26883;
(statearr_26893[(10)] = inst_26872);

(statearr_26893[(7)] = inst_26860);

return statearr_26893;
})();
var statearr_26894_26918 = state_26883__$1;
(statearr_26894_26918[(2)] = null);

(statearr_26894_26918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (9))){
var inst_26863 = (state_26883[(8)]);
var state_26883__$1 = state_26883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26883__$1,(11),out,inst_26863);
} else {
if((state_val_26884 === (5))){
var inst_26863 = (state_26883[(8)]);
var inst_26860 = (state_26883[(7)]);
var inst_26867 = cljs.core._EQ_.call(null,inst_26863,inst_26860);
var state_26883__$1 = state_26883;
if(inst_26867){
var statearr_26896_26919 = state_26883__$1;
(statearr_26896_26919[(1)] = (8));

} else {
var statearr_26897_26920 = state_26883__$1;
(statearr_26897_26920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (10))){
var inst_26875 = (state_26883[(2)]);
var state_26883__$1 = state_26883;
var statearr_26898_26921 = state_26883__$1;
(statearr_26898_26921[(2)] = inst_26875);

(statearr_26898_26921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26884 === (8))){
var inst_26860 = (state_26883[(7)]);
var tmp26895 = inst_26860;
var inst_26860__$1 = tmp26895;
var state_26883__$1 = (function (){var statearr_26899 = state_26883;
(statearr_26899[(7)] = inst_26860__$1);

return statearr_26899;
})();
var statearr_26900_26922 = state_26883__$1;
(statearr_26900_26922[(2)] = null);

(statearr_26900_26922[(1)] = (2));


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
});})(c__24339__auto___26912,out))
;
return ((function (switch__24227__auto__,c__24339__auto___26912,out){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_26904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26904[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_26904[(1)] = (1));

return statearr_26904;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_26883){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_26883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e26905){if((e26905 instanceof Object)){
var ex__24231__auto__ = e26905;
var statearr_26906_26923 = state_26883;
(statearr_26906_26923[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26924 = state_26883;
state_26883 = G__26924;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_26883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_26883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___26912,out))
})();
var state__24341__auto__ = (function (){var statearr_26907 = f__24340__auto__.call(null);
(statearr_26907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___26912);

return statearr_26907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___26912,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26925 = [];
var len__22776__auto___26995 = arguments.length;
var i__22777__auto___26996 = (0);
while(true){
if((i__22777__auto___26996 < len__22776__auto___26995)){
args26925.push((arguments[i__22777__auto___26996]));

var G__26997 = (i__22777__auto___26996 + (1));
i__22777__auto___26996 = G__26997;
continue;
} else {
}
break;
}

var G__26927 = args26925.length;
switch (G__26927) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26925.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24339__auto___26999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___26999,out){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___26999,out){
return (function (state_26965){
var state_val_26966 = (state_26965[(1)]);
if((state_val_26966 === (7))){
var inst_26961 = (state_26965[(2)]);
var state_26965__$1 = state_26965;
var statearr_26967_27000 = state_26965__$1;
(statearr_26967_27000[(2)] = inst_26961);

(statearr_26967_27000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (1))){
var inst_26928 = (new Array(n));
var inst_26929 = inst_26928;
var inst_26930 = (0);
var state_26965__$1 = (function (){var statearr_26968 = state_26965;
(statearr_26968[(7)] = inst_26929);

(statearr_26968[(8)] = inst_26930);

return statearr_26968;
})();
var statearr_26969_27001 = state_26965__$1;
(statearr_26969_27001[(2)] = null);

(statearr_26969_27001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (4))){
var inst_26933 = (state_26965[(9)]);
var inst_26933__$1 = (state_26965[(2)]);
var inst_26934 = (inst_26933__$1 == null);
var inst_26935 = cljs.core.not.call(null,inst_26934);
var state_26965__$1 = (function (){var statearr_26970 = state_26965;
(statearr_26970[(9)] = inst_26933__$1);

return statearr_26970;
})();
if(inst_26935){
var statearr_26971_27002 = state_26965__$1;
(statearr_26971_27002[(1)] = (5));

} else {
var statearr_26972_27003 = state_26965__$1;
(statearr_26972_27003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (15))){
var inst_26955 = (state_26965[(2)]);
var state_26965__$1 = state_26965;
var statearr_26973_27004 = state_26965__$1;
(statearr_26973_27004[(2)] = inst_26955);

(statearr_26973_27004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (13))){
var state_26965__$1 = state_26965;
var statearr_26974_27005 = state_26965__$1;
(statearr_26974_27005[(2)] = null);

(statearr_26974_27005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (6))){
var inst_26930 = (state_26965[(8)]);
var inst_26951 = (inst_26930 > (0));
var state_26965__$1 = state_26965;
if(cljs.core.truth_(inst_26951)){
var statearr_26975_27006 = state_26965__$1;
(statearr_26975_27006[(1)] = (12));

} else {
var statearr_26976_27007 = state_26965__$1;
(statearr_26976_27007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (3))){
var inst_26963 = (state_26965[(2)]);
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26965__$1,inst_26963);
} else {
if((state_val_26966 === (12))){
var inst_26929 = (state_26965[(7)]);
var inst_26953 = cljs.core.vec.call(null,inst_26929);
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26965__$1,(15),out,inst_26953);
} else {
if((state_val_26966 === (2))){
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26965__$1,(4),ch);
} else {
if((state_val_26966 === (11))){
var inst_26945 = (state_26965[(2)]);
var inst_26946 = (new Array(n));
var inst_26929 = inst_26946;
var inst_26930 = (0);
var state_26965__$1 = (function (){var statearr_26977 = state_26965;
(statearr_26977[(10)] = inst_26945);

(statearr_26977[(7)] = inst_26929);

(statearr_26977[(8)] = inst_26930);

return statearr_26977;
})();
var statearr_26978_27008 = state_26965__$1;
(statearr_26978_27008[(2)] = null);

(statearr_26978_27008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (9))){
var inst_26929 = (state_26965[(7)]);
var inst_26943 = cljs.core.vec.call(null,inst_26929);
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26965__$1,(11),out,inst_26943);
} else {
if((state_val_26966 === (5))){
var inst_26933 = (state_26965[(9)]);
var inst_26938 = (state_26965[(11)]);
var inst_26929 = (state_26965[(7)]);
var inst_26930 = (state_26965[(8)]);
var inst_26937 = (inst_26929[inst_26930] = inst_26933);
var inst_26938__$1 = (inst_26930 + (1));
var inst_26939 = (inst_26938__$1 < n);
var state_26965__$1 = (function (){var statearr_26979 = state_26965;
(statearr_26979[(12)] = inst_26937);

(statearr_26979[(11)] = inst_26938__$1);

return statearr_26979;
})();
if(cljs.core.truth_(inst_26939)){
var statearr_26980_27009 = state_26965__$1;
(statearr_26980_27009[(1)] = (8));

} else {
var statearr_26981_27010 = state_26965__$1;
(statearr_26981_27010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (14))){
var inst_26958 = (state_26965[(2)]);
var inst_26959 = cljs.core.async.close_BANG_.call(null,out);
var state_26965__$1 = (function (){var statearr_26983 = state_26965;
(statearr_26983[(13)] = inst_26958);

return statearr_26983;
})();
var statearr_26984_27011 = state_26965__$1;
(statearr_26984_27011[(2)] = inst_26959);

(statearr_26984_27011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (10))){
var inst_26949 = (state_26965[(2)]);
var state_26965__$1 = state_26965;
var statearr_26985_27012 = state_26965__$1;
(statearr_26985_27012[(2)] = inst_26949);

(statearr_26985_27012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (8))){
var inst_26938 = (state_26965[(11)]);
var inst_26929 = (state_26965[(7)]);
var tmp26982 = inst_26929;
var inst_26929__$1 = tmp26982;
var inst_26930 = inst_26938;
var state_26965__$1 = (function (){var statearr_26986 = state_26965;
(statearr_26986[(7)] = inst_26929__$1);

(statearr_26986[(8)] = inst_26930);

return statearr_26986;
})();
var statearr_26987_27013 = state_26965__$1;
(statearr_26987_27013[(2)] = null);

(statearr_26987_27013[(1)] = (2));


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
});})(c__24339__auto___26999,out))
;
return ((function (switch__24227__auto__,c__24339__auto___26999,out){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_26991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26991[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_26991[(1)] = (1));

return statearr_26991;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_26965){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_26965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e26992){if((e26992 instanceof Object)){
var ex__24231__auto__ = e26992;
var statearr_26993_27014 = state_26965;
(statearr_26993_27014[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27015 = state_26965;
state_26965 = G__27015;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_26965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_26965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___26999,out))
})();
var state__24341__auto__ = (function (){var statearr_26994 = f__24340__auto__.call(null);
(statearr_26994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___26999);

return statearr_26994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___26999,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27016 = [];
var len__22776__auto___27090 = arguments.length;
var i__22777__auto___27091 = (0);
while(true){
if((i__22777__auto___27091 < len__22776__auto___27090)){
args27016.push((arguments[i__22777__auto___27091]));

var G__27092 = (i__22777__auto___27091 + (1));
i__22777__auto___27091 = G__27092;
continue;
} else {
}
break;
}

var G__27018 = args27016.length;
switch (G__27018) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27016.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24339__auto___27094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24339__auto___27094,out){
return (function (){
var f__24340__auto__ = (function (){var switch__24227__auto__ = ((function (c__24339__auto___27094,out){
return (function (state_27060){
var state_val_27061 = (state_27060[(1)]);
if((state_val_27061 === (7))){
var inst_27056 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
var statearr_27062_27095 = state_27060__$1;
(statearr_27062_27095[(2)] = inst_27056);

(statearr_27062_27095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (1))){
var inst_27019 = [];
var inst_27020 = inst_27019;
var inst_27021 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27060__$1 = (function (){var statearr_27063 = state_27060;
(statearr_27063[(7)] = inst_27021);

(statearr_27063[(8)] = inst_27020);

return statearr_27063;
})();
var statearr_27064_27096 = state_27060__$1;
(statearr_27064_27096[(2)] = null);

(statearr_27064_27096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (4))){
var inst_27024 = (state_27060[(9)]);
var inst_27024__$1 = (state_27060[(2)]);
var inst_27025 = (inst_27024__$1 == null);
var inst_27026 = cljs.core.not.call(null,inst_27025);
var state_27060__$1 = (function (){var statearr_27065 = state_27060;
(statearr_27065[(9)] = inst_27024__$1);

return statearr_27065;
})();
if(inst_27026){
var statearr_27066_27097 = state_27060__$1;
(statearr_27066_27097[(1)] = (5));

} else {
var statearr_27067_27098 = state_27060__$1;
(statearr_27067_27098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (15))){
var inst_27050 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
var statearr_27068_27099 = state_27060__$1;
(statearr_27068_27099[(2)] = inst_27050);

(statearr_27068_27099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (13))){
var state_27060__$1 = state_27060;
var statearr_27069_27100 = state_27060__$1;
(statearr_27069_27100[(2)] = null);

(statearr_27069_27100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (6))){
var inst_27020 = (state_27060[(8)]);
var inst_27045 = inst_27020.length;
var inst_27046 = (inst_27045 > (0));
var state_27060__$1 = state_27060;
if(cljs.core.truth_(inst_27046)){
var statearr_27070_27101 = state_27060__$1;
(statearr_27070_27101[(1)] = (12));

} else {
var statearr_27071_27102 = state_27060__$1;
(statearr_27071_27102[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (3))){
var inst_27058 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27060__$1,inst_27058);
} else {
if((state_val_27061 === (12))){
var inst_27020 = (state_27060[(8)]);
var inst_27048 = cljs.core.vec.call(null,inst_27020);
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27060__$1,(15),out,inst_27048);
} else {
if((state_val_27061 === (2))){
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27060__$1,(4),ch);
} else {
if((state_val_27061 === (11))){
var inst_27028 = (state_27060[(10)]);
var inst_27024 = (state_27060[(9)]);
var inst_27038 = (state_27060[(2)]);
var inst_27039 = [];
var inst_27040 = inst_27039.push(inst_27024);
var inst_27020 = inst_27039;
var inst_27021 = inst_27028;
var state_27060__$1 = (function (){var statearr_27072 = state_27060;
(statearr_27072[(7)] = inst_27021);

(statearr_27072[(11)] = inst_27038);

(statearr_27072[(12)] = inst_27040);

(statearr_27072[(8)] = inst_27020);

return statearr_27072;
})();
var statearr_27073_27103 = state_27060__$1;
(statearr_27073_27103[(2)] = null);

(statearr_27073_27103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (9))){
var inst_27020 = (state_27060[(8)]);
var inst_27036 = cljs.core.vec.call(null,inst_27020);
var state_27060__$1 = state_27060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27060__$1,(11),out,inst_27036);
} else {
if((state_val_27061 === (5))){
var inst_27028 = (state_27060[(10)]);
var inst_27021 = (state_27060[(7)]);
var inst_27024 = (state_27060[(9)]);
var inst_27028__$1 = f.call(null,inst_27024);
var inst_27029 = cljs.core._EQ_.call(null,inst_27028__$1,inst_27021);
var inst_27030 = cljs.core.keyword_identical_QMARK_.call(null,inst_27021,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27031 = (inst_27029) || (inst_27030);
var state_27060__$1 = (function (){var statearr_27074 = state_27060;
(statearr_27074[(10)] = inst_27028__$1);

return statearr_27074;
})();
if(cljs.core.truth_(inst_27031)){
var statearr_27075_27104 = state_27060__$1;
(statearr_27075_27104[(1)] = (8));

} else {
var statearr_27076_27105 = state_27060__$1;
(statearr_27076_27105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (14))){
var inst_27053 = (state_27060[(2)]);
var inst_27054 = cljs.core.async.close_BANG_.call(null,out);
var state_27060__$1 = (function (){var statearr_27078 = state_27060;
(statearr_27078[(13)] = inst_27053);

return statearr_27078;
})();
var statearr_27079_27106 = state_27060__$1;
(statearr_27079_27106[(2)] = inst_27054);

(statearr_27079_27106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (10))){
var inst_27043 = (state_27060[(2)]);
var state_27060__$1 = state_27060;
var statearr_27080_27107 = state_27060__$1;
(statearr_27080_27107[(2)] = inst_27043);

(statearr_27080_27107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27061 === (8))){
var inst_27028 = (state_27060[(10)]);
var inst_27024 = (state_27060[(9)]);
var inst_27020 = (state_27060[(8)]);
var inst_27033 = inst_27020.push(inst_27024);
var tmp27077 = inst_27020;
var inst_27020__$1 = tmp27077;
var inst_27021 = inst_27028;
var state_27060__$1 = (function (){var statearr_27081 = state_27060;
(statearr_27081[(7)] = inst_27021);

(statearr_27081[(14)] = inst_27033);

(statearr_27081[(8)] = inst_27020__$1);

return statearr_27081;
})();
var statearr_27082_27108 = state_27060__$1;
(statearr_27082_27108[(2)] = null);

(statearr_27082_27108[(1)] = (2));


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
});})(c__24339__auto___27094,out))
;
return ((function (switch__24227__auto__,c__24339__auto___27094,out){
return (function() {
var cljs$core$async$state_machine__24228__auto__ = null;
var cljs$core$async$state_machine__24228__auto____0 = (function (){
var statearr_27086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27086[(0)] = cljs$core$async$state_machine__24228__auto__);

(statearr_27086[(1)] = (1));

return statearr_27086;
});
var cljs$core$async$state_machine__24228__auto____1 = (function (state_27060){
while(true){
var ret_value__24229__auto__ = (function (){try{while(true){
var result__24230__auto__ = switch__24227__auto__.call(null,state_27060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24230__auto__;
}
break;
}
}catch (e27087){if((e27087 instanceof Object)){
var ex__24231__auto__ = e27087;
var statearr_27088_27109 = state_27060;
(statearr_27088_27109[(5)] = ex__24231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27110 = state_27060;
state_27060 = G__27110;
continue;
} else {
return ret_value__24229__auto__;
}
break;
}
});
cljs$core$async$state_machine__24228__auto__ = function(state_27060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24228__auto____1.call(this,state_27060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24228__auto____0;
cljs$core$async$state_machine__24228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24228__auto____1;
return cljs$core$async$state_machine__24228__auto__;
})()
;})(switch__24227__auto__,c__24339__auto___27094,out))
})();
var state__24341__auto__ = (function (){var statearr_27089 = f__24340__auto__.call(null);
(statearr_27089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24339__auto___27094);

return statearr_27089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24341__auto__);
});})(c__24339__auto___27094,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1467155004743