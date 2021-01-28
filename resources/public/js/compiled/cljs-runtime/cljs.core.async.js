goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50838 = arguments.length;
switch (G__50838) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50849 = (function (f,blockable,meta50850){
this.f = f;
this.blockable = blockable;
this.meta50850 = meta50850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50851,meta50850__$1){
var self__ = this;
var _50851__$1 = this;
return (new cljs.core.async.t_cljs$core$async50849(self__.f,self__.blockable,meta50850__$1));
}));

(cljs.core.async.t_cljs$core$async50849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50851){
var self__ = this;
var _50851__$1 = this;
return self__.meta50850;
}));

(cljs.core.async.t_cljs$core$async50849.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50850","meta50850",-1908814565,null)], null);
}));

(cljs.core.async.t_cljs$core$async50849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50849");

(cljs.core.async.t_cljs$core$async50849.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50849.
 */
cljs.core.async.__GT_t_cljs$core$async50849 = (function cljs$core$async$__GT_t_cljs$core$async50849(f__$1,blockable__$1,meta50850){
return (new cljs.core.async.t_cljs$core$async50849(f__$1,blockable__$1,meta50850));
});

}

return (new cljs.core.async.t_cljs$core$async50849(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__50873 = arguments.length;
switch (G__50873) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50886 = arguments.length;
switch (G__50886) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__50893 = arguments.length;
switch (G__50893) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_53479 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53479) : fn1.call(null,val_53479));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53479) : fn1.call(null,val_53479));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50895 = arguments.length;
switch (G__50895) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___53481 = n;
var x_53484 = (0);
while(true){
if((x_53484 < n__4613__auto___53481)){
(a[x_53484] = x_53484);

var G__53485 = (x_53484 + (1));
x_53484 = G__53485;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50926 = (function (flag,meta50927){
this.flag = flag;
this.meta50927 = meta50927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50928,meta50927__$1){
var self__ = this;
var _50928__$1 = this;
return (new cljs.core.async.t_cljs$core$async50926(self__.flag,meta50927__$1));
}));

(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50928){
var self__ = this;
var _50928__$1 = this;
return self__.meta50927;
}));

(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50927","meta50927",1000756108,null)], null);
}));

(cljs.core.async.t_cljs$core$async50926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50926");

(cljs.core.async.t_cljs$core$async50926.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50926.
 */
cljs.core.async.__GT_t_cljs$core$async50926 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50926(flag__$1,meta50927){
return (new cljs.core.async.t_cljs$core$async50926(flag__$1,meta50927));
});

}

return (new cljs.core.async.t_cljs$core$async50926(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50932 = (function (flag,cb,meta50933){
this.flag = flag;
this.cb = cb;
this.meta50933 = meta50933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50934,meta50933__$1){
var self__ = this;
var _50934__$1 = this;
return (new cljs.core.async.t_cljs$core$async50932(self__.flag,self__.cb,meta50933__$1));
}));

(cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50934){
var self__ = this;
var _50934__$1 = this;
return self__.meta50933;
}));

(cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50933","meta50933",189191123,null)], null);
}));

(cljs.core.async.t_cljs$core$async50932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50932");

(cljs.core.async.t_cljs$core$async50932.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50932.
 */
cljs.core.async.__GT_t_cljs$core$async50932 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50932(flag__$1,cb__$1,meta50933){
return (new cljs.core.async.t_cljs$core$async50932(flag__$1,cb__$1,meta50933));
});

}

return (new cljs.core.async.t_cljs$core$async50932(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50977_SHARP_){
var G__50990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50977_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50990) : fret.call(null,G__50990));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50978_SHARP_){
var G__50991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50978_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50991) : fret.call(null,G__50991));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53499 = (i + (1));
i = G__53499;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4742__auto__ = [];
var len__4736__auto___53502 = arguments.length;
var i__4737__auto___53503 = (0);
while(true){
if((i__4737__auto___53503 < len__4736__auto___53502)){
args__4742__auto__.push((arguments[i__4737__auto___53503]));

var G__53504 = (i__4737__auto___53503 + (1));
i__4737__auto___53503 = G__53504;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51001){
var map__51002 = p__51001;
var map__51002__$1 = (((((!((map__51002 == null))))?(((((map__51002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51002):map__51002);
var opts = map__51002__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50993){
var G__50994 = cljs.core.first(seq50993);
var seq50993__$1 = cljs.core.next(seq50993);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50994,seq50993__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__51017 = arguments.length;
switch (G__51017) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50721__auto___53513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_51066){
var state_val_51067 = (state_51066[(1)]);
if((state_val_51067 === (7))){
var inst_51062 = (state_51066[(2)]);
var state_51066__$1 = state_51066;
var statearr_51075_53515 = state_51066__$1;
(statearr_51075_53515[(2)] = inst_51062);

(statearr_51075_53515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51067 === (1))){
var state_51066__$1 = state_51066;
var statearr_51076_53516 = state_51066__$1;
(statearr_51076_53516[(2)] = null);

(statearr_51076_53516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51067 === (4))){
var inst_51041 = (state_51066[(7)]);
var inst_51041__$1 = (state_51066[(2)]);
var inst_51043 = (inst_51041__$1 == null);
var state_51066__$1 = (function (){var statearr_51079 = state_51066;
(statearr_51079[(7)] = inst_51041__$1);

return statearr_51079;
})();
if(cljs.core.truth_(inst_51043)){
var statearr_51080_53517 = state_51066__$1;
(statearr_51080_53517[(1)] = (5));

} else {
var statearr_51082_53518 = state_51066__$1;
(statearr_51082_53518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51067 === (13))){
var state_51066__$1 = state_51066;
var statearr_51083_53519 = state_51066__$1;
(statearr_51083_53519[(2)] = null);

(statearr_51083_53519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51067 === (6))){
var inst_51041 = (state_51066[(7)]);
var state_51066__$1 = state_51066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51066__$1,(11),to,inst_51041);
} else {
if((state_val_51067 === (3))){
var inst_51064 = (state_51066[(2)]);
var state_51066__$1 = state_51066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51066__$1,inst_51064);
} else {
if((state_val_51067 === (12))){
var state_51066__$1 = state_51066;
var statearr_51088_53521 = state_51066__$1;
(statearr_51088_53521[(2)] = null);

(statearr_51088_53521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51067 === (2))){
var state_51066__$1 = state_51066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51066__$1,(4),from);
} else {
if((state_val_51067 === (11))){
var inst_51053 = (state_51066[(2)]);
var state_51066__$1 = state_51066;
if(cljs.core.truth_(inst_51053)){
var statearr_51089_53527 = state_51066__$1;
(statearr_51089_53527[(1)] = (12));

} else {
var statearr_51090_53528 = state_51066__$1;
(statearr_51090_53528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51067 === (9))){
var state_51066__$1 = state_51066;
var statearr_51091_53529 = state_51066__$1;
(statearr_51091_53529[(2)] = null);

(statearr_51091_53529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51067 === (5))){
var state_51066__$1 = state_51066;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51092_53530 = state_51066__$1;
(statearr_51092_53530[(1)] = (8));

} else {
var statearr_51093_53531 = state_51066__$1;
(statearr_51093_53531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51067 === (14))){
var inst_51060 = (state_51066[(2)]);
var state_51066__$1 = state_51066;
var statearr_51097_53532 = state_51066__$1;
(statearr_51097_53532[(2)] = inst_51060);

(statearr_51097_53532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51067 === (10))){
var inst_51049 = (state_51066[(2)]);
var state_51066__$1 = state_51066;
var statearr_51098_53533 = state_51066__$1;
(statearr_51098_53533[(2)] = inst_51049);

(statearr_51098_53533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51067 === (8))){
var inst_51046 = cljs.core.async.close_BANG_(to);
var state_51066__$1 = state_51066;
var statearr_51102_53534 = state_51066__$1;
(statearr_51102_53534[(2)] = inst_51046);

(statearr_51102_53534[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_51106 = [null,null,null,null,null,null,null,null];
(statearr_51106[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_51106[(1)] = (1));

return statearr_51106;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_51066){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_51066);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e51107){var ex__50277__auto__ = e51107;
var statearr_51108_53538 = state_51066;
(statearr_51108_53538[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_51066[(4)]))){
var statearr_51109_53539 = state_51066;
(statearr_51109_53539[(1)] = cljs.core.first((state_51066[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53540 = state_51066;
state_51066 = G__53540;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_51066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_51066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_51110 = f__50722__auto__();
(statearr_51110[(6)] = c__50721__auto___53513);

return statearr_51110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__51111){
var vec__51113 = p__51111;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51113,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51113,(1),null);
var job = vec__51113;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50721__auto___53545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_51120){
var state_val_51121 = (state_51120[(1)]);
if((state_val_51121 === (1))){
var state_51120__$1 = state_51120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51120__$1,(2),res,v);
} else {
if((state_val_51121 === (2))){
var inst_51117 = (state_51120[(2)]);
var inst_51118 = cljs.core.async.close_BANG_(res);
var state_51120__$1 = (function (){var statearr_51122 = state_51120;
(statearr_51122[(7)] = inst_51117);

return statearr_51122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51120__$1,inst_51118);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0 = (function (){
var statearr_51125 = [null,null,null,null,null,null,null,null];
(statearr_51125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__);

(statearr_51125[(1)] = (1));

return statearr_51125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1 = (function (state_51120){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_51120);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e51126){var ex__50277__auto__ = e51126;
var statearr_51127_53549 = state_51120;
(statearr_51127_53549[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_51120[(4)]))){
var statearr_51128_53550 = state_51120;
(statearr_51128_53550[(1)] = cljs.core.first((state_51120[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53555 = state_51120;
state_51120 = G__53555;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__ = function(state_51120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1.call(this,state_51120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_51129 = f__50722__auto__();
(statearr_51129[(6)] = c__50721__auto___53545);

return statearr_51129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__51130){
var vec__51131 = p__51130;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51131,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51131,(1),null);
var job = vec__51131;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___53556 = n;
var __53557 = (0);
while(true){
if((__53557 < n__4613__auto___53556)){
var G__51136_53558 = type;
var G__51136_53559__$1 = (((G__51136_53558 instanceof cljs.core.Keyword))?G__51136_53558.fqn:null);
switch (G__51136_53559__$1) {
case "compute":
var c__50721__auto___53561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53557,c__50721__auto___53561,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async){
return (function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = ((function (__53557,c__50721__auto___53561,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async){
return (function (state_51159){
var state_val_51160 = (state_51159[(1)]);
if((state_val_51160 === (1))){
var state_51159__$1 = state_51159;
var statearr_51162_53562 = state_51159__$1;
(statearr_51162_53562[(2)] = null);

(statearr_51162_53562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51160 === (2))){
var state_51159__$1 = state_51159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51159__$1,(4),jobs);
} else {
if((state_val_51160 === (3))){
var inst_51157 = (state_51159[(2)]);
var state_51159__$1 = state_51159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51159__$1,inst_51157);
} else {
if((state_val_51160 === (4))){
var inst_51148 = (state_51159[(2)]);
var inst_51150 = process(inst_51148);
var state_51159__$1 = state_51159;
if(cljs.core.truth_(inst_51150)){
var statearr_51169_53563 = state_51159__$1;
(statearr_51169_53563[(1)] = (5));

} else {
var statearr_51170_53564 = state_51159__$1;
(statearr_51170_53564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51160 === (5))){
var state_51159__$1 = state_51159;
var statearr_51171_53565 = state_51159__$1;
(statearr_51171_53565[(2)] = null);

(statearr_51171_53565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51160 === (6))){
var state_51159__$1 = state_51159;
var statearr_51175_53566 = state_51159__$1;
(statearr_51175_53566[(2)] = null);

(statearr_51175_53566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51160 === (7))){
var inst_51155 = (state_51159[(2)]);
var state_51159__$1 = state_51159;
var statearr_51176_53568 = state_51159__$1;
(statearr_51176_53568[(2)] = inst_51155);

(statearr_51176_53568[(1)] = (3));


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
});})(__53557,c__50721__auto___53561,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async))
;
return ((function (__53557,switch__50273__auto__,c__50721__auto___53561,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0 = (function (){
var statearr_51183 = [null,null,null,null,null,null,null];
(statearr_51183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__);

(statearr_51183[(1)] = (1));

return statearr_51183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1 = (function (state_51159){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_51159);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e51184){var ex__50277__auto__ = e51184;
var statearr_51185_53572 = state_51159;
(statearr_51185_53572[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_51159[(4)]))){
var statearr_51186_53573 = state_51159;
(statearr_51186_53573[(1)] = cljs.core.first((state_51159[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53577 = state_51159;
state_51159 = G__53577;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__ = function(state_51159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1.call(this,state_51159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__;
})()
;})(__53557,switch__50273__auto__,c__50721__auto___53561,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async))
})();
var state__50723__auto__ = (function (){var statearr_51190 = f__50722__auto__();
(statearr_51190[(6)] = c__50721__auto___53561);

return statearr_51190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
});})(__53557,c__50721__auto___53561,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async))
);


break;
case "async":
var c__50721__auto___53578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53557,c__50721__auto___53578,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async){
return (function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = ((function (__53557,c__50721__auto___53578,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async){
return (function (state_51203){
var state_val_51204 = (state_51203[(1)]);
if((state_val_51204 === (1))){
var state_51203__$1 = state_51203;
var statearr_51218_53579 = state_51203__$1;
(statearr_51218_53579[(2)] = null);

(statearr_51218_53579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (2))){
var state_51203__$1 = state_51203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51203__$1,(4),jobs);
} else {
if((state_val_51204 === (3))){
var inst_51201 = (state_51203[(2)]);
var state_51203__$1 = state_51203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51203__$1,inst_51201);
} else {
if((state_val_51204 === (4))){
var inst_51193 = (state_51203[(2)]);
var inst_51194 = async(inst_51193);
var state_51203__$1 = state_51203;
if(cljs.core.truth_(inst_51194)){
var statearr_51219_53587 = state_51203__$1;
(statearr_51219_53587[(1)] = (5));

} else {
var statearr_51220_53588 = state_51203__$1;
(statearr_51220_53588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (5))){
var state_51203__$1 = state_51203;
var statearr_51221_53589 = state_51203__$1;
(statearr_51221_53589[(2)] = null);

(statearr_51221_53589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (6))){
var state_51203__$1 = state_51203;
var statearr_51225_53593 = state_51203__$1;
(statearr_51225_53593[(2)] = null);

(statearr_51225_53593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (7))){
var inst_51199 = (state_51203[(2)]);
var state_51203__$1 = state_51203;
var statearr_51226_53596 = state_51203__$1;
(statearr_51226_53596[(2)] = inst_51199);

(statearr_51226_53596[(1)] = (3));


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
});})(__53557,c__50721__auto___53578,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async))
;
return ((function (__53557,switch__50273__auto__,c__50721__auto___53578,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0 = (function (){
var statearr_51227 = [null,null,null,null,null,null,null];
(statearr_51227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__);

(statearr_51227[(1)] = (1));

return statearr_51227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1 = (function (state_51203){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_51203);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e51228){var ex__50277__auto__ = e51228;
var statearr_51229_53603 = state_51203;
(statearr_51229_53603[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_51203[(4)]))){
var statearr_51230_53604 = state_51203;
(statearr_51230_53604[(1)] = cljs.core.first((state_51203[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53605 = state_51203;
state_51203 = G__53605;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__ = function(state_51203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1.call(this,state_51203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__;
})()
;})(__53557,switch__50273__auto__,c__50721__auto___53578,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async))
})();
var state__50723__auto__ = (function (){var statearr_51231 = f__50722__auto__();
(statearr_51231[(6)] = c__50721__auto___53578);

return statearr_51231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
});})(__53557,c__50721__auto___53578,G__51136_53558,G__51136_53559__$1,n__4613__auto___53556,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51136_53559__$1)].join('')));

}

var G__53613 = (__53557 + (1));
__53557 = G__53613;
continue;
} else {
}
break;
}

var c__50721__auto___53614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_51259){
var state_val_51260 = (state_51259[(1)]);
if((state_val_51260 === (7))){
var inst_51255 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
var statearr_51263_53615 = state_51259__$1;
(statearr_51263_53615[(2)] = inst_51255);

(statearr_51263_53615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (1))){
var state_51259__$1 = state_51259;
var statearr_51264_53619 = state_51259__$1;
(statearr_51264_53619[(2)] = null);

(statearr_51264_53619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (4))){
var inst_51236 = (state_51259[(7)]);
var inst_51236__$1 = (state_51259[(2)]);
var inst_51237 = (inst_51236__$1 == null);
var state_51259__$1 = (function (){var statearr_51268 = state_51259;
(statearr_51268[(7)] = inst_51236__$1);

return statearr_51268;
})();
if(cljs.core.truth_(inst_51237)){
var statearr_51269_53620 = state_51259__$1;
(statearr_51269_53620[(1)] = (5));

} else {
var statearr_51270_53624 = state_51259__$1;
(statearr_51270_53624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (6))){
var inst_51236 = (state_51259[(7)]);
var inst_51244 = (state_51259[(8)]);
var inst_51244__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51246 = [inst_51236,inst_51244__$1];
var inst_51247 = (new cljs.core.PersistentVector(null,2,(5),inst_51245,inst_51246,null));
var state_51259__$1 = (function (){var statearr_51271 = state_51259;
(statearr_51271[(8)] = inst_51244__$1);

return statearr_51271;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51259__$1,(8),jobs,inst_51247);
} else {
if((state_val_51260 === (3))){
var inst_51257 = (state_51259[(2)]);
var state_51259__$1 = state_51259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51259__$1,inst_51257);
} else {
if((state_val_51260 === (2))){
var state_51259__$1 = state_51259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51259__$1,(4),from);
} else {
if((state_val_51260 === (9))){
var inst_51252 = (state_51259[(2)]);
var state_51259__$1 = (function (){var statearr_51278 = state_51259;
(statearr_51278[(9)] = inst_51252);

return statearr_51278;
})();
var statearr_51279_53628 = state_51259__$1;
(statearr_51279_53628[(2)] = null);

(statearr_51279_53628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (5))){
var inst_51241 = cljs.core.async.close_BANG_(jobs);
var state_51259__$1 = state_51259;
var statearr_51280_53629 = state_51259__$1;
(statearr_51280_53629[(2)] = inst_51241);

(statearr_51280_53629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51260 === (8))){
var inst_51244 = (state_51259[(8)]);
var inst_51249 = (state_51259[(2)]);
var state_51259__$1 = (function (){var statearr_51281 = state_51259;
(statearr_51281[(10)] = inst_51249);

return statearr_51281;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51259__$1,(9),results,inst_51244);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0 = (function (){
var statearr_51282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__);

(statearr_51282[(1)] = (1));

return statearr_51282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1 = (function (state_51259){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_51259);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e51283){var ex__50277__auto__ = e51283;
var statearr_51284_53631 = state_51259;
(statearr_51284_53631[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_51259[(4)]))){
var statearr_51286_53632 = state_51259;
(statearr_51286_53632[(1)] = cljs.core.first((state_51259[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53633 = state_51259;
state_51259 = G__53633;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__ = function(state_51259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1.call(this,state_51259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_51292 = f__50722__auto__();
(statearr_51292[(6)] = c__50721__auto___53614);

return statearr_51292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


var c__50721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_51331){
var state_val_51332 = (state_51331[(1)]);
if((state_val_51332 === (7))){
var inst_51327 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
var statearr_51337_53634 = state_51331__$1;
(statearr_51337_53634[(2)] = inst_51327);

(statearr_51337_53634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (20))){
var state_51331__$1 = state_51331;
var statearr_51343_53635 = state_51331__$1;
(statearr_51343_53635[(2)] = null);

(statearr_51343_53635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (1))){
var state_51331__$1 = state_51331;
var statearr_51344_53636 = state_51331__$1;
(statearr_51344_53636[(2)] = null);

(statearr_51344_53636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (4))){
var inst_51296 = (state_51331[(7)]);
var inst_51296__$1 = (state_51331[(2)]);
var inst_51297 = (inst_51296__$1 == null);
var state_51331__$1 = (function (){var statearr_51346 = state_51331;
(statearr_51346[(7)] = inst_51296__$1);

return statearr_51346;
})();
if(cljs.core.truth_(inst_51297)){
var statearr_51347_53637 = state_51331__$1;
(statearr_51347_53637[(1)] = (5));

} else {
var statearr_51348_53638 = state_51331__$1;
(statearr_51348_53638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (15))){
var inst_51309 = (state_51331[(8)]);
var state_51331__$1 = state_51331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51331__$1,(18),to,inst_51309);
} else {
if((state_val_51332 === (21))){
var inst_51322 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
var statearr_51350_53639 = state_51331__$1;
(statearr_51350_53639[(2)] = inst_51322);

(statearr_51350_53639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (13))){
var inst_51324 = (state_51331[(2)]);
var state_51331__$1 = (function (){var statearr_51353 = state_51331;
(statearr_51353[(9)] = inst_51324);

return statearr_51353;
})();
var statearr_51356_53640 = state_51331__$1;
(statearr_51356_53640[(2)] = null);

(statearr_51356_53640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (6))){
var inst_51296 = (state_51331[(7)]);
var state_51331__$1 = state_51331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51331__$1,(11),inst_51296);
} else {
if((state_val_51332 === (17))){
var inst_51317 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
if(cljs.core.truth_(inst_51317)){
var statearr_51357_53641 = state_51331__$1;
(statearr_51357_53641[(1)] = (19));

} else {
var statearr_51358_53642 = state_51331__$1;
(statearr_51358_53642[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (3))){
var inst_51329 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51331__$1,inst_51329);
} else {
if((state_val_51332 === (12))){
var inst_51306 = (state_51331[(10)]);
var state_51331__$1 = state_51331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51331__$1,(14),inst_51306);
} else {
if((state_val_51332 === (2))){
var state_51331__$1 = state_51331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51331__$1,(4),results);
} else {
if((state_val_51332 === (19))){
var state_51331__$1 = state_51331;
var statearr_51362_53644 = state_51331__$1;
(statearr_51362_53644[(2)] = null);

(statearr_51362_53644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (11))){
var inst_51306 = (state_51331[(2)]);
var state_51331__$1 = (function (){var statearr_51364 = state_51331;
(statearr_51364[(10)] = inst_51306);

return statearr_51364;
})();
var statearr_51365_53648 = state_51331__$1;
(statearr_51365_53648[(2)] = null);

(statearr_51365_53648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (9))){
var state_51331__$1 = state_51331;
var statearr_51367_53652 = state_51331__$1;
(statearr_51367_53652[(2)] = null);

(statearr_51367_53652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (5))){
var state_51331__$1 = state_51331;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51368_53654 = state_51331__$1;
(statearr_51368_53654[(1)] = (8));

} else {
var statearr_51372_53655 = state_51331__$1;
(statearr_51372_53655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (14))){
var inst_51309 = (state_51331[(8)]);
var inst_51309__$1 = (state_51331[(2)]);
var inst_51310 = (inst_51309__$1 == null);
var inst_51311 = cljs.core.not(inst_51310);
var state_51331__$1 = (function (){var statearr_51382 = state_51331;
(statearr_51382[(8)] = inst_51309__$1);

return statearr_51382;
})();
if(inst_51311){
var statearr_51385_53657 = state_51331__$1;
(statearr_51385_53657[(1)] = (15));

} else {
var statearr_51390_53659 = state_51331__$1;
(statearr_51390_53659[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (16))){
var state_51331__$1 = state_51331;
var statearr_51396_53660 = state_51331__$1;
(statearr_51396_53660[(2)] = false);

(statearr_51396_53660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (10))){
var inst_51303 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
var statearr_51404_53661 = state_51331__$1;
(statearr_51404_53661[(2)] = inst_51303);

(statearr_51404_53661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (18))){
var inst_51314 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
var statearr_51405_53664 = state_51331__$1;
(statearr_51405_53664[(2)] = inst_51314);

(statearr_51405_53664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (8))){
var inst_51300 = cljs.core.async.close_BANG_(to);
var state_51331__$1 = state_51331;
var statearr_51407_53666 = state_51331__$1;
(statearr_51407_53666[(2)] = inst_51300);

(statearr_51407_53666[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0 = (function (){
var statearr_51409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__);

(statearr_51409[(1)] = (1));

return statearr_51409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1 = (function (state_51331){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_51331);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e51416){var ex__50277__auto__ = e51416;
var statearr_51417_53668 = state_51331;
(statearr_51417_53668[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_51331[(4)]))){
var statearr_51419_53674 = state_51331;
(statearr_51419_53674[(1)] = cljs.core.first((state_51331[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53676 = state_51331;
state_51331 = G__53676;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__ = function(state_51331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1.call(this,state_51331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50274__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_51421 = f__50722__auto__();
(statearr_51421[(6)] = c__50721__auto__);

return statearr_51421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));

return c__50721__auto__;
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
var G__51426 = arguments.length;
switch (G__51426) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__51438 = arguments.length;
switch (G__51438) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__51448 = arguments.length;
switch (G__51448) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50721__auto___53701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_51498){
var state_val_51499 = (state_51498[(1)]);
if((state_val_51499 === (7))){
var inst_51494 = (state_51498[(2)]);
var state_51498__$1 = state_51498;
var statearr_51504_53702 = state_51498__$1;
(statearr_51504_53702[(2)] = inst_51494);

(statearr_51504_53702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51499 === (1))){
var state_51498__$1 = state_51498;
var statearr_51509_53706 = state_51498__$1;
(statearr_51509_53706[(2)] = null);

(statearr_51509_53706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51499 === (4))){
var inst_51475 = (state_51498[(7)]);
var inst_51475__$1 = (state_51498[(2)]);
var inst_51476 = (inst_51475__$1 == null);
var state_51498__$1 = (function (){var statearr_51518 = state_51498;
(statearr_51518[(7)] = inst_51475__$1);

return statearr_51518;
})();
if(cljs.core.truth_(inst_51476)){
var statearr_51523_53708 = state_51498__$1;
(statearr_51523_53708[(1)] = (5));

} else {
var statearr_51532_53709 = state_51498__$1;
(statearr_51532_53709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51499 === (13))){
var state_51498__$1 = state_51498;
var statearr_51536_53716 = state_51498__$1;
(statearr_51536_53716[(2)] = null);

(statearr_51536_53716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51499 === (6))){
var inst_51475 = (state_51498[(7)]);
var inst_51481 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51475) : p.call(null,inst_51475));
var state_51498__$1 = state_51498;
if(cljs.core.truth_(inst_51481)){
var statearr_51560_53717 = state_51498__$1;
(statearr_51560_53717[(1)] = (9));

} else {
var statearr_51561_53718 = state_51498__$1;
(statearr_51561_53718[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51499 === (3))){
var inst_51496 = (state_51498[(2)]);
var state_51498__$1 = state_51498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51498__$1,inst_51496);
} else {
if((state_val_51499 === (12))){
var state_51498__$1 = state_51498;
var statearr_51574_53719 = state_51498__$1;
(statearr_51574_53719[(2)] = null);

(statearr_51574_53719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51499 === (2))){
var state_51498__$1 = state_51498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51498__$1,(4),ch);
} else {
if((state_val_51499 === (11))){
var inst_51475 = (state_51498[(7)]);
var inst_51485 = (state_51498[(2)]);
var state_51498__$1 = state_51498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51498__$1,(8),inst_51485,inst_51475);
} else {
if((state_val_51499 === (9))){
var state_51498__$1 = state_51498;
var statearr_51598_53723 = state_51498__$1;
(statearr_51598_53723[(2)] = tc);

(statearr_51598_53723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51499 === (5))){
var inst_51478 = cljs.core.async.close_BANG_(tc);
var inst_51479 = cljs.core.async.close_BANG_(fc);
var state_51498__$1 = (function (){var statearr_51610 = state_51498;
(statearr_51610[(8)] = inst_51478);

return statearr_51610;
})();
var statearr_51616_53730 = state_51498__$1;
(statearr_51616_53730[(2)] = inst_51479);

(statearr_51616_53730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51499 === (14))){
var inst_51492 = (state_51498[(2)]);
var state_51498__$1 = state_51498;
var statearr_51623_53732 = state_51498__$1;
(statearr_51623_53732[(2)] = inst_51492);

(statearr_51623_53732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51499 === (10))){
var state_51498__$1 = state_51498;
var statearr_51629_53733 = state_51498__$1;
(statearr_51629_53733[(2)] = fc);

(statearr_51629_53733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51499 === (8))){
var inst_51487 = (state_51498[(2)]);
var state_51498__$1 = state_51498;
if(cljs.core.truth_(inst_51487)){
var statearr_51631_53735 = state_51498__$1;
(statearr_51631_53735[(1)] = (12));

} else {
var statearr_51632_53736 = state_51498__$1;
(statearr_51632_53736[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_51633 = [null,null,null,null,null,null,null,null,null];
(statearr_51633[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_51633[(1)] = (1));

return statearr_51633;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_51498){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_51498);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e51634){var ex__50277__auto__ = e51634;
var statearr_51638_53737 = state_51498;
(statearr_51638_53737[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_51498[(4)]))){
var statearr_51640_53738 = state_51498;
(statearr_51640_53738[(1)] = cljs.core.first((state_51498[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53739 = state_51498;
state_51498 = G__53739;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_51498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_51498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_51644 = f__50722__auto__();
(statearr_51644[(6)] = c__50721__auto___53701);

return statearr_51644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_51666){
var state_val_51668 = (state_51666[(1)]);
if((state_val_51668 === (7))){
var inst_51662 = (state_51666[(2)]);
var state_51666__$1 = state_51666;
var statearr_51670_53751 = state_51666__$1;
(statearr_51670_53751[(2)] = inst_51662);

(statearr_51670_53751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51668 === (1))){
var inst_51645 = init;
var inst_51646 = inst_51645;
var state_51666__$1 = (function (){var statearr_51671 = state_51666;
(statearr_51671[(7)] = inst_51646);

return statearr_51671;
})();
var statearr_51672_53752 = state_51666__$1;
(statearr_51672_53752[(2)] = null);

(statearr_51672_53752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51668 === (4))){
var inst_51649 = (state_51666[(8)]);
var inst_51649__$1 = (state_51666[(2)]);
var inst_51650 = (inst_51649__$1 == null);
var state_51666__$1 = (function (){var statearr_51673 = state_51666;
(statearr_51673[(8)] = inst_51649__$1);

return statearr_51673;
})();
if(cljs.core.truth_(inst_51650)){
var statearr_51675_53755 = state_51666__$1;
(statearr_51675_53755[(1)] = (5));

} else {
var statearr_51676_53757 = state_51666__$1;
(statearr_51676_53757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51668 === (6))){
var inst_51646 = (state_51666[(7)]);
var inst_51653 = (state_51666[(9)]);
var inst_51649 = (state_51666[(8)]);
var inst_51653__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_51646,inst_51649) : f.call(null,inst_51646,inst_51649));
var inst_51654 = cljs.core.reduced_QMARK_(inst_51653__$1);
var state_51666__$1 = (function (){var statearr_51679 = state_51666;
(statearr_51679[(9)] = inst_51653__$1);

return statearr_51679;
})();
if(inst_51654){
var statearr_51680_53758 = state_51666__$1;
(statearr_51680_53758[(1)] = (8));

} else {
var statearr_51682_53759 = state_51666__$1;
(statearr_51682_53759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51668 === (3))){
var inst_51664 = (state_51666[(2)]);
var state_51666__$1 = state_51666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51666__$1,inst_51664);
} else {
if((state_val_51668 === (2))){
var state_51666__$1 = state_51666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51666__$1,(4),ch);
} else {
if((state_val_51668 === (9))){
var inst_51653 = (state_51666[(9)]);
var inst_51646 = inst_51653;
var state_51666__$1 = (function (){var statearr_51686 = state_51666;
(statearr_51686[(7)] = inst_51646);

return statearr_51686;
})();
var statearr_51687_53761 = state_51666__$1;
(statearr_51687_53761[(2)] = null);

(statearr_51687_53761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51668 === (5))){
var inst_51646 = (state_51666[(7)]);
var state_51666__$1 = state_51666;
var statearr_51689_53762 = state_51666__$1;
(statearr_51689_53762[(2)] = inst_51646);

(statearr_51689_53762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51668 === (10))){
var inst_51660 = (state_51666[(2)]);
var state_51666__$1 = state_51666;
var statearr_51690_53763 = state_51666__$1;
(statearr_51690_53763[(2)] = inst_51660);

(statearr_51690_53763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51668 === (8))){
var inst_51653 = (state_51666[(9)]);
var inst_51656 = cljs.core.deref(inst_51653);
var state_51666__$1 = state_51666;
var statearr_51697_53764 = state_51666__$1;
(statearr_51697_53764[(2)] = inst_51656);

(statearr_51697_53764[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__50274__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50274__auto____0 = (function (){
var statearr_51705 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51705[(0)] = cljs$core$async$reduce_$_state_machine__50274__auto__);

(statearr_51705[(1)] = (1));

return statearr_51705;
});
var cljs$core$async$reduce_$_state_machine__50274__auto____1 = (function (state_51666){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_51666);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e51706){var ex__50277__auto__ = e51706;
var statearr_51707_53765 = state_51666;
(statearr_51707_53765[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_51666[(4)]))){
var statearr_51708_53766 = state_51666;
(statearr_51708_53766[(1)] = cljs.core.first((state_51666[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53768 = state_51666;
state_51666 = G__53768;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50274__auto__ = function(state_51666){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50274__auto____1.call(this,state_51666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50274__auto____0;
cljs$core$async$reduce_$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50274__auto____1;
return cljs$core$async$reduce_$_state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_51713 = f__50722__auto__();
(statearr_51713[(6)] = c__50721__auto__);

return statearr_51713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));

return c__50721__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_51725){
var state_val_51726 = (state_51725[(1)]);
if((state_val_51726 === (1))){
var inst_51719 = cljs.core.async.reduce(f__$1,init,ch);
var state_51725__$1 = state_51725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51725__$1,(2),inst_51719);
} else {
if((state_val_51726 === (2))){
var inst_51721 = (state_51725[(2)]);
var inst_51723 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51721) : f__$1.call(null,inst_51721));
var state_51725__$1 = state_51725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51725__$1,inst_51723);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50274__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50274__auto____0 = (function (){
var statearr_51732 = [null,null,null,null,null,null,null];
(statearr_51732[(0)] = cljs$core$async$transduce_$_state_machine__50274__auto__);

(statearr_51732[(1)] = (1));

return statearr_51732;
});
var cljs$core$async$transduce_$_state_machine__50274__auto____1 = (function (state_51725){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_51725);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e51734){var ex__50277__auto__ = e51734;
var statearr_51736_53775 = state_51725;
(statearr_51736_53775[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_51725[(4)]))){
var statearr_51738_53776 = state_51725;
(statearr_51738_53776[(1)] = cljs.core.first((state_51725[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53777 = state_51725;
state_51725 = G__53777;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50274__auto__ = function(state_51725){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50274__auto____1.call(this,state_51725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50274__auto____0;
cljs$core$async$transduce_$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50274__auto____1;
return cljs$core$async$transduce_$_state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_51741 = f__50722__auto__();
(statearr_51741[(6)] = c__50721__auto__);

return statearr_51741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));

return c__50721__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__51749 = arguments.length;
switch (G__51749) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_51794){
var state_val_51796 = (state_51794[(1)]);
if((state_val_51796 === (7))){
var inst_51776 = (state_51794[(2)]);
var state_51794__$1 = state_51794;
var statearr_51800_53782 = state_51794__$1;
(statearr_51800_53782[(2)] = inst_51776);

(statearr_51800_53782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (1))){
var inst_51768 = cljs.core.seq(coll);
var inst_51769 = inst_51768;
var state_51794__$1 = (function (){var statearr_51805 = state_51794;
(statearr_51805[(7)] = inst_51769);

return statearr_51805;
})();
var statearr_51806_53786 = state_51794__$1;
(statearr_51806_53786[(2)] = null);

(statearr_51806_53786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (4))){
var inst_51769 = (state_51794[(7)]);
var inst_51774 = cljs.core.first(inst_51769);
var state_51794__$1 = state_51794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51794__$1,(7),ch,inst_51774);
} else {
if((state_val_51796 === (13))){
var inst_51788 = (state_51794[(2)]);
var state_51794__$1 = state_51794;
var statearr_51807_53788 = state_51794__$1;
(statearr_51807_53788[(2)] = inst_51788);

(statearr_51807_53788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (6))){
var inst_51779 = (state_51794[(2)]);
var state_51794__$1 = state_51794;
if(cljs.core.truth_(inst_51779)){
var statearr_51808_53789 = state_51794__$1;
(statearr_51808_53789[(1)] = (8));

} else {
var statearr_51810_53790 = state_51794__$1;
(statearr_51810_53790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (3))){
var inst_51792 = (state_51794[(2)]);
var state_51794__$1 = state_51794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51794__$1,inst_51792);
} else {
if((state_val_51796 === (12))){
var state_51794__$1 = state_51794;
var statearr_51812_53791 = state_51794__$1;
(statearr_51812_53791[(2)] = null);

(statearr_51812_53791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (2))){
var inst_51769 = (state_51794[(7)]);
var state_51794__$1 = state_51794;
if(cljs.core.truth_(inst_51769)){
var statearr_51814_53793 = state_51794__$1;
(statearr_51814_53793[(1)] = (4));

} else {
var statearr_51817_53794 = state_51794__$1;
(statearr_51817_53794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (11))){
var inst_51785 = cljs.core.async.close_BANG_(ch);
var state_51794__$1 = state_51794;
var statearr_51818_53795 = state_51794__$1;
(statearr_51818_53795[(2)] = inst_51785);

(statearr_51818_53795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (9))){
var state_51794__$1 = state_51794;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51822_53796 = state_51794__$1;
(statearr_51822_53796[(1)] = (11));

} else {
var statearr_51823_53798 = state_51794__$1;
(statearr_51823_53798[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (5))){
var inst_51769 = (state_51794[(7)]);
var state_51794__$1 = state_51794;
var statearr_51825_53800 = state_51794__$1;
(statearr_51825_53800[(2)] = inst_51769);

(statearr_51825_53800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (10))){
var inst_51790 = (state_51794[(2)]);
var state_51794__$1 = state_51794;
var statearr_51828_53801 = state_51794__$1;
(statearr_51828_53801[(2)] = inst_51790);

(statearr_51828_53801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (8))){
var inst_51769 = (state_51794[(7)]);
var inst_51781 = cljs.core.next(inst_51769);
var inst_51769__$1 = inst_51781;
var state_51794__$1 = (function (){var statearr_51830 = state_51794;
(statearr_51830[(7)] = inst_51769__$1);

return statearr_51830;
})();
var statearr_51831_53802 = state_51794__$1;
(statearr_51831_53802[(2)] = null);

(statearr_51831_53802[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_51832 = [null,null,null,null,null,null,null,null];
(statearr_51832[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_51832[(1)] = (1));

return statearr_51832;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_51794){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_51794);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e51833){var ex__50277__auto__ = e51833;
var statearr_51834_53803 = state_51794;
(statearr_51834_53803[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_51794[(4)]))){
var statearr_51835_53809 = state_51794;
(statearr_51835_53809[(1)] = cljs.core.first((state_51794[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53811 = state_51794;
state_51794 = G__53811;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_51794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_51794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_51838 = f__50722__auto__();
(statearr_51838[(6)] = c__50721__auto__);

return statearr_51838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));

return c__50721__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51845 = arguments.length;
switch (G__51845) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_53833 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_53833(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53844 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_53844(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53848 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_53848(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53849 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_53849(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51873 = (function (ch,cs,meta51874){
this.ch = ch;
this.cs = cs;
this.meta51874 = meta51874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51875,meta51874__$1){
var self__ = this;
var _51875__$1 = this;
return (new cljs.core.async.t_cljs$core$async51873(self__.ch,self__.cs,meta51874__$1));
}));

(cljs.core.async.t_cljs$core$async51873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51875){
var self__ = this;
var _51875__$1 = this;
return self__.meta51874;
}));

(cljs.core.async.t_cljs$core$async51873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51873.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51873.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51873.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51873.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51874","meta51874",-1878725983,null)], null);
}));

(cljs.core.async.t_cljs$core$async51873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51873");

(cljs.core.async.t_cljs$core$async51873.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51873.
 */
cljs.core.async.__GT_t_cljs$core$async51873 = (function cljs$core$async$mult_$___GT_t_cljs$core$async51873(ch__$1,cs__$1,meta51874){
return (new cljs.core.async.t_cljs$core$async51873(ch__$1,cs__$1,meta51874));
});

}

return (new cljs.core.async.t_cljs$core$async51873(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__50721__auto___53895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_52022){
var state_val_52024 = (state_52022[(1)]);
if((state_val_52024 === (7))){
var inst_52016 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52027_53896 = state_52022__$1;
(statearr_52027_53896[(2)] = inst_52016);

(statearr_52027_53896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (20))){
var inst_51916 = (state_52022[(7)]);
var inst_51931 = cljs.core.first(inst_51916);
var inst_51933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51931,(0),null);
var inst_51934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51931,(1),null);
var state_52022__$1 = (function (){var statearr_52029 = state_52022;
(statearr_52029[(8)] = inst_51933);

return statearr_52029;
})();
if(cljs.core.truth_(inst_51934)){
var statearr_52030_53897 = state_52022__$1;
(statearr_52030_53897[(1)] = (22));

} else {
var statearr_52031_53898 = state_52022__$1;
(statearr_52031_53898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (27))){
var inst_51970 = (state_52022[(9)]);
var inst_51962 = (state_52022[(10)]);
var inst_51964 = (state_52022[(11)]);
var inst_51881 = (state_52022[(12)]);
var inst_51970__$1 = cljs.core._nth(inst_51962,inst_51964);
var inst_51971 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51970__$1,inst_51881,done);
var state_52022__$1 = (function (){var statearr_52037 = state_52022;
(statearr_52037[(9)] = inst_51970__$1);

return statearr_52037;
})();
if(cljs.core.truth_(inst_51971)){
var statearr_52038_53901 = state_52022__$1;
(statearr_52038_53901[(1)] = (30));

} else {
var statearr_52039_53902 = state_52022__$1;
(statearr_52039_53902[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (1))){
var state_52022__$1 = state_52022;
var statearr_52040_53903 = state_52022__$1;
(statearr_52040_53903[(2)] = null);

(statearr_52040_53903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (24))){
var inst_51916 = (state_52022[(7)]);
var inst_51939 = (state_52022[(2)]);
var inst_51940 = cljs.core.next(inst_51916);
var inst_51890 = inst_51940;
var inst_51891 = null;
var inst_51892 = (0);
var inst_51893 = (0);
var state_52022__$1 = (function (){var statearr_52041 = state_52022;
(statearr_52041[(13)] = inst_51890);

(statearr_52041[(14)] = inst_51939);

(statearr_52041[(15)] = inst_51893);

(statearr_52041[(16)] = inst_51892);

(statearr_52041[(17)] = inst_51891);

return statearr_52041;
})();
var statearr_52043_53908 = state_52022__$1;
(statearr_52043_53908[(2)] = null);

(statearr_52043_53908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (39))){
var state_52022__$1 = state_52022;
var statearr_52049_53909 = state_52022__$1;
(statearr_52049_53909[(2)] = null);

(statearr_52049_53909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (4))){
var inst_51881 = (state_52022[(12)]);
var inst_51881__$1 = (state_52022[(2)]);
var inst_51882 = (inst_51881__$1 == null);
var state_52022__$1 = (function (){var statearr_52050 = state_52022;
(statearr_52050[(12)] = inst_51881__$1);

return statearr_52050;
})();
if(cljs.core.truth_(inst_51882)){
var statearr_52051_53911 = state_52022__$1;
(statearr_52051_53911[(1)] = (5));

} else {
var statearr_52052_53912 = state_52022__$1;
(statearr_52052_53912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (15))){
var inst_51890 = (state_52022[(13)]);
var inst_51893 = (state_52022[(15)]);
var inst_51892 = (state_52022[(16)]);
var inst_51891 = (state_52022[(17)]);
var inst_51912 = (state_52022[(2)]);
var inst_51913 = (inst_51893 + (1));
var tmp52046 = inst_51890;
var tmp52047 = inst_51892;
var tmp52048 = inst_51891;
var inst_51890__$1 = tmp52046;
var inst_51891__$1 = tmp52048;
var inst_51892__$1 = tmp52047;
var inst_51893__$1 = inst_51913;
var state_52022__$1 = (function (){var statearr_52058 = state_52022;
(statearr_52058[(18)] = inst_51912);

(statearr_52058[(13)] = inst_51890__$1);

(statearr_52058[(15)] = inst_51893__$1);

(statearr_52058[(16)] = inst_51892__$1);

(statearr_52058[(17)] = inst_51891__$1);

return statearr_52058;
})();
var statearr_52059_53918 = state_52022__$1;
(statearr_52059_53918[(2)] = null);

(statearr_52059_53918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (21))){
var inst_51943 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52064_53921 = state_52022__$1;
(statearr_52064_53921[(2)] = inst_51943);

(statearr_52064_53921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (31))){
var inst_51970 = (state_52022[(9)]);
var inst_51974 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51970);
var state_52022__$1 = state_52022;
var statearr_52065_53927 = state_52022__$1;
(statearr_52065_53927[(2)] = inst_51974);

(statearr_52065_53927[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (32))){
var inst_51961 = (state_52022[(19)]);
var inst_51963 = (state_52022[(20)]);
var inst_51962 = (state_52022[(10)]);
var inst_51964 = (state_52022[(11)]);
var inst_51976 = (state_52022[(2)]);
var inst_51977 = (inst_51964 + (1));
var tmp52061 = inst_51961;
var tmp52062 = inst_51963;
var tmp52063 = inst_51962;
var inst_51961__$1 = tmp52061;
var inst_51962__$1 = tmp52063;
var inst_51963__$1 = tmp52062;
var inst_51964__$1 = inst_51977;
var state_52022__$1 = (function (){var statearr_52066 = state_52022;
(statearr_52066[(19)] = inst_51961__$1);

(statearr_52066[(20)] = inst_51963__$1);

(statearr_52066[(10)] = inst_51962__$1);

(statearr_52066[(11)] = inst_51964__$1);

(statearr_52066[(21)] = inst_51976);

return statearr_52066;
})();
var statearr_52067_53928 = state_52022__$1;
(statearr_52067_53928[(2)] = null);

(statearr_52067_53928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (40))){
var inst_51989 = (state_52022[(22)]);
var inst_51993 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51989);
var state_52022__$1 = state_52022;
var statearr_52073_53929 = state_52022__$1;
(statearr_52073_53929[(2)] = inst_51993);

(statearr_52073_53929[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (33))){
var inst_51980 = (state_52022[(23)]);
var inst_51982 = cljs.core.chunked_seq_QMARK_(inst_51980);
var state_52022__$1 = state_52022;
if(inst_51982){
var statearr_52074_53931 = state_52022__$1;
(statearr_52074_53931[(1)] = (36));

} else {
var statearr_52076_53932 = state_52022__$1;
(statearr_52076_53932[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (13))){
var inst_51904 = (state_52022[(24)]);
var inst_51909 = cljs.core.async.close_BANG_(inst_51904);
var state_52022__$1 = state_52022;
var statearr_52077_53933 = state_52022__$1;
(statearr_52077_53933[(2)] = inst_51909);

(statearr_52077_53933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (22))){
var inst_51933 = (state_52022[(8)]);
var inst_51936 = cljs.core.async.close_BANG_(inst_51933);
var state_52022__$1 = state_52022;
var statearr_52078_53939 = state_52022__$1;
(statearr_52078_53939[(2)] = inst_51936);

(statearr_52078_53939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (36))){
var inst_51980 = (state_52022[(23)]);
var inst_51984 = cljs.core.chunk_first(inst_51980);
var inst_51985 = cljs.core.chunk_rest(inst_51980);
var inst_51986 = cljs.core.count(inst_51984);
var inst_51961 = inst_51985;
var inst_51962 = inst_51984;
var inst_51963 = inst_51986;
var inst_51964 = (0);
var state_52022__$1 = (function (){var statearr_52083 = state_52022;
(statearr_52083[(19)] = inst_51961);

(statearr_52083[(20)] = inst_51963);

(statearr_52083[(10)] = inst_51962);

(statearr_52083[(11)] = inst_51964);

return statearr_52083;
})();
var statearr_52084_53941 = state_52022__$1;
(statearr_52084_53941[(2)] = null);

(statearr_52084_53941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (41))){
var inst_51980 = (state_52022[(23)]);
var inst_51995 = (state_52022[(2)]);
var inst_51996 = cljs.core.next(inst_51980);
var inst_51961 = inst_51996;
var inst_51962 = null;
var inst_51963 = (0);
var inst_51964 = (0);
var state_52022__$1 = (function (){var statearr_52086 = state_52022;
(statearr_52086[(25)] = inst_51995);

(statearr_52086[(19)] = inst_51961);

(statearr_52086[(20)] = inst_51963);

(statearr_52086[(10)] = inst_51962);

(statearr_52086[(11)] = inst_51964);

return statearr_52086;
})();
var statearr_52087_53944 = state_52022__$1;
(statearr_52087_53944[(2)] = null);

(statearr_52087_53944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (43))){
var state_52022__$1 = state_52022;
var statearr_52088_53949 = state_52022__$1;
(statearr_52088_53949[(2)] = null);

(statearr_52088_53949[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (29))){
var inst_52004 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52093_53950 = state_52022__$1;
(statearr_52093_53950[(2)] = inst_52004);

(statearr_52093_53950[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (44))){
var inst_52013 = (state_52022[(2)]);
var state_52022__$1 = (function (){var statearr_52095 = state_52022;
(statearr_52095[(26)] = inst_52013);

return statearr_52095;
})();
var statearr_52097_53953 = state_52022__$1;
(statearr_52097_53953[(2)] = null);

(statearr_52097_53953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (6))){
var inst_51953 = (state_52022[(27)]);
var inst_51952 = cljs.core.deref(cs);
var inst_51953__$1 = cljs.core.keys(inst_51952);
var inst_51954 = cljs.core.count(inst_51953__$1);
var inst_51955 = cljs.core.reset_BANG_(dctr,inst_51954);
var inst_51960 = cljs.core.seq(inst_51953__$1);
var inst_51961 = inst_51960;
var inst_51962 = null;
var inst_51963 = (0);
var inst_51964 = (0);
var state_52022__$1 = (function (){var statearr_52098 = state_52022;
(statearr_52098[(19)] = inst_51961);

(statearr_52098[(27)] = inst_51953__$1);

(statearr_52098[(20)] = inst_51963);

(statearr_52098[(10)] = inst_51962);

(statearr_52098[(11)] = inst_51964);

(statearr_52098[(28)] = inst_51955);

return statearr_52098;
})();
var statearr_52099_53954 = state_52022__$1;
(statearr_52099_53954[(2)] = null);

(statearr_52099_53954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (28))){
var inst_51961 = (state_52022[(19)]);
var inst_51980 = (state_52022[(23)]);
var inst_51980__$1 = cljs.core.seq(inst_51961);
var state_52022__$1 = (function (){var statearr_52103 = state_52022;
(statearr_52103[(23)] = inst_51980__$1);

return statearr_52103;
})();
if(inst_51980__$1){
var statearr_52104_53955 = state_52022__$1;
(statearr_52104_53955[(1)] = (33));

} else {
var statearr_52105_53956 = state_52022__$1;
(statearr_52105_53956[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (25))){
var inst_51963 = (state_52022[(20)]);
var inst_51964 = (state_52022[(11)]);
var inst_51967 = (inst_51964 < inst_51963);
var inst_51968 = inst_51967;
var state_52022__$1 = state_52022;
if(cljs.core.truth_(inst_51968)){
var statearr_52106_53962 = state_52022__$1;
(statearr_52106_53962[(1)] = (27));

} else {
var statearr_52107_53963 = state_52022__$1;
(statearr_52107_53963[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (34))){
var state_52022__$1 = state_52022;
var statearr_52108_53964 = state_52022__$1;
(statearr_52108_53964[(2)] = null);

(statearr_52108_53964[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (17))){
var state_52022__$1 = state_52022;
var statearr_52109_53965 = state_52022__$1;
(statearr_52109_53965[(2)] = null);

(statearr_52109_53965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (3))){
var inst_52018 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52022__$1,inst_52018);
} else {
if((state_val_52024 === (12))){
var inst_51948 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52114_53966 = state_52022__$1;
(statearr_52114_53966[(2)] = inst_51948);

(statearr_52114_53966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (2))){
var state_52022__$1 = state_52022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52022__$1,(4),ch);
} else {
if((state_val_52024 === (23))){
var state_52022__$1 = state_52022;
var statearr_52115_53970 = state_52022__$1;
(statearr_52115_53970[(2)] = null);

(statearr_52115_53970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (35))){
var inst_52002 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52116_53971 = state_52022__$1;
(statearr_52116_53971[(2)] = inst_52002);

(statearr_52116_53971[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (19))){
var inst_51916 = (state_52022[(7)]);
var inst_51920 = cljs.core.chunk_first(inst_51916);
var inst_51921 = cljs.core.chunk_rest(inst_51916);
var inst_51922 = cljs.core.count(inst_51920);
var inst_51890 = inst_51921;
var inst_51891 = inst_51920;
var inst_51892 = inst_51922;
var inst_51893 = (0);
var state_52022__$1 = (function (){var statearr_52120 = state_52022;
(statearr_52120[(13)] = inst_51890);

(statearr_52120[(15)] = inst_51893);

(statearr_52120[(16)] = inst_51892);

(statearr_52120[(17)] = inst_51891);

return statearr_52120;
})();
var statearr_52121_53972 = state_52022__$1;
(statearr_52121_53972[(2)] = null);

(statearr_52121_53972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (11))){
var inst_51916 = (state_52022[(7)]);
var inst_51890 = (state_52022[(13)]);
var inst_51916__$1 = cljs.core.seq(inst_51890);
var state_52022__$1 = (function (){var statearr_52122 = state_52022;
(statearr_52122[(7)] = inst_51916__$1);

return statearr_52122;
})();
if(inst_51916__$1){
var statearr_52123_53974 = state_52022__$1;
(statearr_52123_53974[(1)] = (16));

} else {
var statearr_52124_53975 = state_52022__$1;
(statearr_52124_53975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (9))){
var inst_51950 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52125_53976 = state_52022__$1;
(statearr_52125_53976[(2)] = inst_51950);

(statearr_52125_53976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (5))){
var inst_51888 = cljs.core.deref(cs);
var inst_51889 = cljs.core.seq(inst_51888);
var inst_51890 = inst_51889;
var inst_51891 = null;
var inst_51892 = (0);
var inst_51893 = (0);
var state_52022__$1 = (function (){var statearr_52129 = state_52022;
(statearr_52129[(13)] = inst_51890);

(statearr_52129[(15)] = inst_51893);

(statearr_52129[(16)] = inst_51892);

(statearr_52129[(17)] = inst_51891);

return statearr_52129;
})();
var statearr_52130_53978 = state_52022__$1;
(statearr_52130_53978[(2)] = null);

(statearr_52130_53978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (14))){
var state_52022__$1 = state_52022;
var statearr_52131_53979 = state_52022__$1;
(statearr_52131_53979[(2)] = null);

(statearr_52131_53979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (45))){
var inst_52010 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52135_53980 = state_52022__$1;
(statearr_52135_53980[(2)] = inst_52010);

(statearr_52135_53980[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (26))){
var inst_51953 = (state_52022[(27)]);
var inst_52006 = (state_52022[(2)]);
var inst_52007 = cljs.core.seq(inst_51953);
var state_52022__$1 = (function (){var statearr_52136 = state_52022;
(statearr_52136[(29)] = inst_52006);

return statearr_52136;
})();
if(inst_52007){
var statearr_52137_53982 = state_52022__$1;
(statearr_52137_53982[(1)] = (42));

} else {
var statearr_52138_53983 = state_52022__$1;
(statearr_52138_53983[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (16))){
var inst_51916 = (state_52022[(7)]);
var inst_51918 = cljs.core.chunked_seq_QMARK_(inst_51916);
var state_52022__$1 = state_52022;
if(inst_51918){
var statearr_52139_53984 = state_52022__$1;
(statearr_52139_53984[(1)] = (19));

} else {
var statearr_52140_53985 = state_52022__$1;
(statearr_52140_53985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (38))){
var inst_51999 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52141_53990 = state_52022__$1;
(statearr_52141_53990[(2)] = inst_51999);

(statearr_52141_53990[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (30))){
var state_52022__$1 = state_52022;
var statearr_52142_53992 = state_52022__$1;
(statearr_52142_53992[(2)] = null);

(statearr_52142_53992[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (10))){
var inst_51893 = (state_52022[(15)]);
var inst_51891 = (state_52022[(17)]);
var inst_51903 = cljs.core._nth(inst_51891,inst_51893);
var inst_51904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51903,(0),null);
var inst_51906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51903,(1),null);
var state_52022__$1 = (function (){var statearr_52144 = state_52022;
(statearr_52144[(24)] = inst_51904);

return statearr_52144;
})();
if(cljs.core.truth_(inst_51906)){
var statearr_52145_53996 = state_52022__$1;
(statearr_52145_53996[(1)] = (13));

} else {
var statearr_52146_53997 = state_52022__$1;
(statearr_52146_53997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (18))){
var inst_51946 = (state_52022[(2)]);
var state_52022__$1 = state_52022;
var statearr_52147_53999 = state_52022__$1;
(statearr_52147_53999[(2)] = inst_51946);

(statearr_52147_53999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (42))){
var state_52022__$1 = state_52022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52022__$1,(45),dchan);
} else {
if((state_val_52024 === (37))){
var inst_51989 = (state_52022[(22)]);
var inst_51980 = (state_52022[(23)]);
var inst_51881 = (state_52022[(12)]);
var inst_51989__$1 = cljs.core.first(inst_51980);
var inst_51990 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51989__$1,inst_51881,done);
var state_52022__$1 = (function (){var statearr_52148 = state_52022;
(statearr_52148[(22)] = inst_51989__$1);

return statearr_52148;
})();
if(cljs.core.truth_(inst_51990)){
var statearr_52149_54005 = state_52022__$1;
(statearr_52149_54005[(1)] = (39));

} else {
var statearr_52150_54006 = state_52022__$1;
(statearr_52150_54006[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52024 === (8))){
var inst_51893 = (state_52022[(15)]);
var inst_51892 = (state_52022[(16)]);
var inst_51896 = (inst_51893 < inst_51892);
var inst_51897 = inst_51896;
var state_52022__$1 = state_52022;
if(cljs.core.truth_(inst_51897)){
var statearr_52151_54007 = state_52022__$1;
(statearr_52151_54007[(1)] = (10));

} else {
var statearr_52154_54008 = state_52022__$1;
(statearr_52154_54008[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__50274__auto__ = null;
var cljs$core$async$mult_$_state_machine__50274__auto____0 = (function (){
var statearr_52164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52164[(0)] = cljs$core$async$mult_$_state_machine__50274__auto__);

(statearr_52164[(1)] = (1));

return statearr_52164;
});
var cljs$core$async$mult_$_state_machine__50274__auto____1 = (function (state_52022){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_52022);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e52166){var ex__50277__auto__ = e52166;
var statearr_52168_54009 = state_52022;
(statearr_52168_54009[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_52022[(4)]))){
var statearr_52171_54010 = state_52022;
(statearr_52171_54010[(1)] = cljs.core.first((state_52022[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54011 = state_52022;
state_52022 = G__54011;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50274__auto__ = function(state_52022){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50274__auto____1.call(this,state_52022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50274__auto____0;
cljs$core$async$mult_$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50274__auto____1;
return cljs$core$async$mult_$_state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_52173 = f__50722__auto__();
(statearr_52173[(6)] = c__50721__auto___53895);

return statearr_52173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__52179 = arguments.length;
switch (G__52179) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_54013 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_54013(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_54017 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_54017(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_54018 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_54018(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_54020 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_54020(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_54023 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_54023(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54025 = arguments.length;
var i__4737__auto___54026 = (0);
while(true){
if((i__4737__auto___54026 < len__4736__auto___54025)){
args__4742__auto__.push((arguments[i__4737__auto___54026]));

var G__54029 = (i__4737__auto___54026 + (1));
i__4737__auto___54026 = G__54029;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52239){
var map__52240 = p__52239;
var map__52240__$1 = (((((!((map__52240 == null))))?(((((map__52240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52240):map__52240);
var opts = map__52240__$1;
var statearr_52242_54030 = state;
(statearr_52242_54030[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_52243_54031 = state;
(statearr_52243_54031[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_52244_54032 = state;
(statearr_52244_54032[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52235){
var G__52236 = cljs.core.first(seq52235);
var seq52235__$1 = cljs.core.next(seq52235);
var G__52237 = cljs.core.first(seq52235__$1);
var seq52235__$2 = cljs.core.next(seq52235__$1);
var G__52238 = cljs.core.first(seq52235__$2);
var seq52235__$3 = cljs.core.next(seq52235__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52236,G__52237,G__52238,seq52235__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52245 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52246){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52246 = meta52246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52247,meta52246__$1){
var self__ = this;
var _52247__$1 = this;
return (new cljs.core.async.t_cljs$core$async52245(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52246__$1));
}));

(cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52247){
var self__ = this;
var _52247__$1 = this;
return self__.meta52246;
}));

(cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52246","meta52246",432123094,null)], null);
}));

(cljs.core.async.t_cljs$core$async52245.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52245");

(cljs.core.async.t_cljs$core$async52245.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52245");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52245.
 */
cljs.core.async.__GT_t_cljs$core$async52245 = (function cljs$core$async$mix_$___GT_t_cljs$core$async52245(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52246){
return (new cljs.core.async.t_cljs$core$async52245(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52246));
});

}

return (new cljs.core.async.t_cljs$core$async52245(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50721__auto___54048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_52371){
var state_val_52372 = (state_52371[(1)]);
if((state_val_52372 === (7))){
var inst_52278 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52377_54049 = state_52371__$1;
(statearr_52377_54049[(2)] = inst_52278);

(statearr_52377_54049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (20))){
var inst_52290 = (state_52371[(7)]);
var state_52371__$1 = state_52371;
var statearr_52378_54051 = state_52371__$1;
(statearr_52378_54051[(2)] = inst_52290);

(statearr_52378_54051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (27))){
var state_52371__$1 = state_52371;
var statearr_52380_54052 = state_52371__$1;
(statearr_52380_54052[(2)] = null);

(statearr_52380_54052[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (1))){
var inst_52265 = (state_52371[(8)]);
var inst_52265__$1 = calc_state();
var inst_52267 = (inst_52265__$1 == null);
var inst_52268 = cljs.core.not(inst_52267);
var state_52371__$1 = (function (){var statearr_52383 = state_52371;
(statearr_52383[(8)] = inst_52265__$1);

return statearr_52383;
})();
if(inst_52268){
var statearr_52386_54053 = state_52371__$1;
(statearr_52386_54053[(1)] = (2));

} else {
var statearr_52387_54054 = state_52371__$1;
(statearr_52387_54054[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (24))){
var inst_52340 = (state_52371[(9)]);
var inst_52317 = (state_52371[(10)]);
var inst_52326 = (state_52371[(11)]);
var inst_52340__$1 = (inst_52317.cljs$core$IFn$_invoke$arity$1 ? inst_52317.cljs$core$IFn$_invoke$arity$1(inst_52326) : inst_52317.call(null,inst_52326));
var state_52371__$1 = (function (){var statearr_52388 = state_52371;
(statearr_52388[(9)] = inst_52340__$1);

return statearr_52388;
})();
if(cljs.core.truth_(inst_52340__$1)){
var statearr_52389_54055 = state_52371__$1;
(statearr_52389_54055[(1)] = (29));

} else {
var statearr_52390_54056 = state_52371__$1;
(statearr_52390_54056[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (4))){
var inst_52281 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52281)){
var statearr_52393_54057 = state_52371__$1;
(statearr_52393_54057[(1)] = (8));

} else {
var statearr_52394_54058 = state_52371__$1;
(statearr_52394_54058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (15))){
var inst_52311 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52311)){
var statearr_52395_54059 = state_52371__$1;
(statearr_52395_54059[(1)] = (19));

} else {
var statearr_52396_54060 = state_52371__$1;
(statearr_52396_54060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (21))){
var inst_52316 = (state_52371[(12)]);
var inst_52316__$1 = (state_52371[(2)]);
var inst_52317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52316__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52316__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52316__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52371__$1 = (function (){var statearr_52399 = state_52371;
(statearr_52399[(12)] = inst_52316__$1);

(statearr_52399[(10)] = inst_52317);

(statearr_52399[(13)] = inst_52318);

return statearr_52399;
})();
return cljs.core.async.ioc_alts_BANG_(state_52371__$1,(22),inst_52319);
} else {
if((state_val_52372 === (31))){
var inst_52348 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52348)){
var statearr_52405_54068 = state_52371__$1;
(statearr_52405_54068[(1)] = (32));

} else {
var statearr_52410_54069 = state_52371__$1;
(statearr_52410_54069[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (32))){
var inst_52325 = (state_52371[(14)]);
var state_52371__$1 = state_52371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52371__$1,(35),out,inst_52325);
} else {
if((state_val_52372 === (33))){
var inst_52316 = (state_52371[(12)]);
var inst_52290 = inst_52316;
var state_52371__$1 = (function (){var statearr_52416 = state_52371;
(statearr_52416[(7)] = inst_52290);

return statearr_52416;
})();
var statearr_52417_54080 = state_52371__$1;
(statearr_52417_54080[(2)] = null);

(statearr_52417_54080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (13))){
var inst_52290 = (state_52371[(7)]);
var inst_52297 = inst_52290.cljs$lang$protocol_mask$partition0$;
var inst_52298 = (inst_52297 & (64));
var inst_52299 = inst_52290.cljs$core$ISeq$;
var inst_52300 = (cljs.core.PROTOCOL_SENTINEL === inst_52299);
var inst_52301 = ((inst_52298) || (inst_52300));
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52301)){
var statearr_52418_54082 = state_52371__$1;
(statearr_52418_54082[(1)] = (16));

} else {
var statearr_52419_54083 = state_52371__$1;
(statearr_52419_54083[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (22))){
var inst_52325 = (state_52371[(14)]);
var inst_52326 = (state_52371[(11)]);
var inst_52324 = (state_52371[(2)]);
var inst_52325__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52324,(0),null);
var inst_52326__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52324,(1),null);
var inst_52327 = (inst_52325__$1 == null);
var inst_52328 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52326__$1,change);
var inst_52329 = ((inst_52327) || (inst_52328));
var state_52371__$1 = (function (){var statearr_52420 = state_52371;
(statearr_52420[(14)] = inst_52325__$1);

(statearr_52420[(11)] = inst_52326__$1);

return statearr_52420;
})();
if(cljs.core.truth_(inst_52329)){
var statearr_52421_54094 = state_52371__$1;
(statearr_52421_54094[(1)] = (23));

} else {
var statearr_52423_54095 = state_52371__$1;
(statearr_52423_54095[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (36))){
var inst_52316 = (state_52371[(12)]);
var inst_52290 = inst_52316;
var state_52371__$1 = (function (){var statearr_52425 = state_52371;
(statearr_52425[(7)] = inst_52290);

return statearr_52425;
})();
var statearr_52426_54096 = state_52371__$1;
(statearr_52426_54096[(2)] = null);

(statearr_52426_54096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (29))){
var inst_52340 = (state_52371[(9)]);
var state_52371__$1 = state_52371;
var statearr_52427_54097 = state_52371__$1;
(statearr_52427_54097[(2)] = inst_52340);

(statearr_52427_54097[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (6))){
var state_52371__$1 = state_52371;
var statearr_52428_54101 = state_52371__$1;
(statearr_52428_54101[(2)] = false);

(statearr_52428_54101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (28))){
var inst_52336 = (state_52371[(2)]);
var inst_52337 = calc_state();
var inst_52290 = inst_52337;
var state_52371__$1 = (function (){var statearr_52431 = state_52371;
(statearr_52431[(7)] = inst_52290);

(statearr_52431[(15)] = inst_52336);

return statearr_52431;
})();
var statearr_52432_54106 = state_52371__$1;
(statearr_52432_54106[(2)] = null);

(statearr_52432_54106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (25))){
var inst_52364 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52434_54107 = state_52371__$1;
(statearr_52434_54107[(2)] = inst_52364);

(statearr_52434_54107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (34))){
var inst_52362 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52435_54109 = state_52371__$1;
(statearr_52435_54109[(2)] = inst_52362);

(statearr_52435_54109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (17))){
var state_52371__$1 = state_52371;
var statearr_52436_54110 = state_52371__$1;
(statearr_52436_54110[(2)] = false);

(statearr_52436_54110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (3))){
var state_52371__$1 = state_52371;
var statearr_52439_54111 = state_52371__$1;
(statearr_52439_54111[(2)] = false);

(statearr_52439_54111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (12))){
var inst_52366 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52371__$1,inst_52366);
} else {
if((state_val_52372 === (2))){
var inst_52265 = (state_52371[(8)]);
var inst_52270 = inst_52265.cljs$lang$protocol_mask$partition0$;
var inst_52271 = (inst_52270 & (64));
var inst_52272 = inst_52265.cljs$core$ISeq$;
var inst_52273 = (cljs.core.PROTOCOL_SENTINEL === inst_52272);
var inst_52274 = ((inst_52271) || (inst_52273));
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52274)){
var statearr_52442_54121 = state_52371__$1;
(statearr_52442_54121[(1)] = (5));

} else {
var statearr_52443_54122 = state_52371__$1;
(statearr_52443_54122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (23))){
var inst_52325 = (state_52371[(14)]);
var inst_52331 = (inst_52325 == null);
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52331)){
var statearr_52445_54129 = state_52371__$1;
(statearr_52445_54129[(1)] = (26));

} else {
var statearr_52446_54130 = state_52371__$1;
(statearr_52446_54130[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (35))){
var inst_52353 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
if(cljs.core.truth_(inst_52353)){
var statearr_52447_54131 = state_52371__$1;
(statearr_52447_54131[(1)] = (36));

} else {
var statearr_52448_54132 = state_52371__$1;
(statearr_52448_54132[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (19))){
var inst_52290 = (state_52371[(7)]);
var inst_52313 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52290);
var state_52371__$1 = state_52371;
var statearr_52453_54133 = state_52371__$1;
(statearr_52453_54133[(2)] = inst_52313);

(statearr_52453_54133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (11))){
var inst_52290 = (state_52371[(7)]);
var inst_52294 = (inst_52290 == null);
var inst_52295 = cljs.core.not(inst_52294);
var state_52371__$1 = state_52371;
if(inst_52295){
var statearr_52454_54136 = state_52371__$1;
(statearr_52454_54136[(1)] = (13));

} else {
var statearr_52455_54137 = state_52371__$1;
(statearr_52455_54137[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (9))){
var inst_52265 = (state_52371[(8)]);
var state_52371__$1 = state_52371;
var statearr_52459_54140 = state_52371__$1;
(statearr_52459_54140[(2)] = inst_52265);

(statearr_52459_54140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (5))){
var state_52371__$1 = state_52371;
var statearr_52465_54143 = state_52371__$1;
(statearr_52465_54143[(2)] = true);

(statearr_52465_54143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (14))){
var state_52371__$1 = state_52371;
var statearr_52466_54146 = state_52371__$1;
(statearr_52466_54146[(2)] = false);

(statearr_52466_54146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (26))){
var inst_52326 = (state_52371[(11)]);
var inst_52333 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52326);
var state_52371__$1 = state_52371;
var statearr_52468_54152 = state_52371__$1;
(statearr_52468_54152[(2)] = inst_52333);

(statearr_52468_54152[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (16))){
var state_52371__$1 = state_52371;
var statearr_52470_54168 = state_52371__$1;
(statearr_52470_54168[(2)] = true);

(statearr_52470_54168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (38))){
var inst_52358 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52471_54180 = state_52371__$1;
(statearr_52471_54180[(2)] = inst_52358);

(statearr_52471_54180[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (30))){
var inst_52317 = (state_52371[(10)]);
var inst_52318 = (state_52371[(13)]);
var inst_52326 = (state_52371[(11)]);
var inst_52343 = cljs.core.empty_QMARK_(inst_52317);
var inst_52344 = (inst_52318.cljs$core$IFn$_invoke$arity$1 ? inst_52318.cljs$core$IFn$_invoke$arity$1(inst_52326) : inst_52318.call(null,inst_52326));
var inst_52345 = cljs.core.not(inst_52344);
var inst_52346 = ((inst_52343) && (inst_52345));
var state_52371__$1 = state_52371;
var statearr_52474_54185 = state_52371__$1;
(statearr_52474_54185[(2)] = inst_52346);

(statearr_52474_54185[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (10))){
var inst_52265 = (state_52371[(8)]);
var inst_52286 = (state_52371[(2)]);
var inst_52287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52286,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52286,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52286,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52290 = inst_52265;
var state_52371__$1 = (function (){var statearr_52477 = state_52371;
(statearr_52477[(7)] = inst_52290);

(statearr_52477[(16)] = inst_52288);

(statearr_52477[(17)] = inst_52287);

(statearr_52477[(18)] = inst_52289);

return statearr_52477;
})();
var statearr_52478_54187 = state_52371__$1;
(statearr_52478_54187[(2)] = null);

(statearr_52478_54187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (18))){
var inst_52305 = (state_52371[(2)]);
var state_52371__$1 = state_52371;
var statearr_52482_54190 = state_52371__$1;
(statearr_52482_54190[(2)] = inst_52305);

(statearr_52482_54190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (37))){
var state_52371__$1 = state_52371;
var statearr_52484_54196 = state_52371__$1;
(statearr_52484_54196[(2)] = null);

(statearr_52484_54196[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52372 === (8))){
var inst_52265 = (state_52371[(8)]);
var inst_52283 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52265);
var state_52371__$1 = state_52371;
var statearr_52487_54204 = state_52371__$1;
(statearr_52487_54204[(2)] = inst_52283);

(statearr_52487_54204[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__50274__auto__ = null;
var cljs$core$async$mix_$_state_machine__50274__auto____0 = (function (){
var statearr_52490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52490[(0)] = cljs$core$async$mix_$_state_machine__50274__auto__);

(statearr_52490[(1)] = (1));

return statearr_52490;
});
var cljs$core$async$mix_$_state_machine__50274__auto____1 = (function (state_52371){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_52371);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e52494){var ex__50277__auto__ = e52494;
var statearr_52496_54207 = state_52371;
(statearr_52496_54207[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_52371[(4)]))){
var statearr_52497_54208 = state_52371;
(statearr_52497_54208[(1)] = cljs.core.first((state_52371[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54209 = state_52371;
state_52371 = G__54209;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50274__auto__ = function(state_52371){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50274__auto____1.call(this,state_52371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50274__auto____0;
cljs$core$async$mix_$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50274__auto____1;
return cljs$core$async$mix_$_state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_52500 = f__50722__auto__();
(statearr_52500[(6)] = c__50721__auto___54048);

return statearr_52500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_54212 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_54212(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_54222 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_54222(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_54224 = (function() {
var G__54225 = null;
var G__54225__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__54225__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__54225 = function(p,v){
switch(arguments.length){
case 1:
return G__54225__1.call(this,p);
case 2:
return G__54225__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54225.cljs$core$IFn$_invoke$arity$1 = G__54225__1;
G__54225.cljs$core$IFn$_invoke$arity$2 = G__54225__2;
return G__54225;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52518 = arguments.length;
switch (G__52518) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54224(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54224(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__52528 = arguments.length;
switch (G__52528) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__52522_SHARP_){
if(cljs.core.truth_((p1__52522_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52522_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52522_SHARP_.call(null,topic)))){
return p1__52522_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52522_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52529 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52530){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52530 = meta52530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52531,meta52530__$1){
var self__ = this;
var _52531__$1 = this;
return (new cljs.core.async.t_cljs$core$async52529(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52530__$1));
}));

(cljs.core.async.t_cljs$core$async52529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52531){
var self__ = this;
var _52531__$1 = this;
return self__.meta52530;
}));

(cljs.core.async.t_cljs$core$async52529.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52529.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52529.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async52529.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async52529.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async52529.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async52529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52530","meta52530",1596791573,null)], null);
}));

(cljs.core.async.t_cljs$core$async52529.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52529");

(cljs.core.async.t_cljs$core$async52529.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52529");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52529.
 */
cljs.core.async.__GT_t_cljs$core$async52529 = (function cljs$core$async$__GT_t_cljs$core$async52529(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52530){
return (new cljs.core.async.t_cljs$core$async52529(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52530));
});

}

return (new cljs.core.async.t_cljs$core$async52529(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50721__auto___54242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_52610){
var state_val_52611 = (state_52610[(1)]);
if((state_val_52611 === (7))){
var inst_52605 = (state_52610[(2)]);
var state_52610__$1 = state_52610;
var statearr_52613_54244 = state_52610__$1;
(statearr_52613_54244[(2)] = inst_52605);

(statearr_52613_54244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (20))){
var state_52610__$1 = state_52610;
var statearr_52614_54246 = state_52610__$1;
(statearr_52614_54246[(2)] = null);

(statearr_52614_54246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (1))){
var state_52610__$1 = state_52610;
var statearr_52615_54249 = state_52610__$1;
(statearr_52615_54249[(2)] = null);

(statearr_52615_54249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (24))){
var inst_52587 = (state_52610[(7)]);
var inst_52597 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52587);
var state_52610__$1 = state_52610;
var statearr_52616_54253 = state_52610__$1;
(statearr_52616_54253[(2)] = inst_52597);

(statearr_52616_54253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (4))){
var inst_52539 = (state_52610[(8)]);
var inst_52539__$1 = (state_52610[(2)]);
var inst_52540 = (inst_52539__$1 == null);
var state_52610__$1 = (function (){var statearr_52620 = state_52610;
(statearr_52620[(8)] = inst_52539__$1);

return statearr_52620;
})();
if(cljs.core.truth_(inst_52540)){
var statearr_52621_54255 = state_52610__$1;
(statearr_52621_54255[(1)] = (5));

} else {
var statearr_52622_54256 = state_52610__$1;
(statearr_52622_54256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (15))){
var inst_52581 = (state_52610[(2)]);
var state_52610__$1 = state_52610;
var statearr_52623_54257 = state_52610__$1;
(statearr_52623_54257[(2)] = inst_52581);

(statearr_52623_54257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (21))){
var inst_52602 = (state_52610[(2)]);
var state_52610__$1 = (function (){var statearr_52624 = state_52610;
(statearr_52624[(9)] = inst_52602);

return statearr_52624;
})();
var statearr_52625_54258 = state_52610__$1;
(statearr_52625_54258[(2)] = null);

(statearr_52625_54258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (13))){
var inst_52563 = (state_52610[(10)]);
var inst_52565 = cljs.core.chunked_seq_QMARK_(inst_52563);
var state_52610__$1 = state_52610;
if(inst_52565){
var statearr_52626_54259 = state_52610__$1;
(statearr_52626_54259[(1)] = (16));

} else {
var statearr_52629_54260 = state_52610__$1;
(statearr_52629_54260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (22))){
var inst_52593 = (state_52610[(2)]);
var state_52610__$1 = state_52610;
if(cljs.core.truth_(inst_52593)){
var statearr_52633_54261 = state_52610__$1;
(statearr_52633_54261[(1)] = (23));

} else {
var statearr_52634_54262 = state_52610__$1;
(statearr_52634_54262[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (6))){
var inst_52589 = (state_52610[(11)]);
var inst_52539 = (state_52610[(8)]);
var inst_52587 = (state_52610[(7)]);
var inst_52587__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52539) : topic_fn.call(null,inst_52539));
var inst_52588 = cljs.core.deref(mults);
var inst_52589__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52588,inst_52587__$1);
var state_52610__$1 = (function (){var statearr_52635 = state_52610;
(statearr_52635[(11)] = inst_52589__$1);

(statearr_52635[(7)] = inst_52587__$1);

return statearr_52635;
})();
if(cljs.core.truth_(inst_52589__$1)){
var statearr_52636_54264 = state_52610__$1;
(statearr_52636_54264[(1)] = (19));

} else {
var statearr_52638_54265 = state_52610__$1;
(statearr_52638_54265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (25))){
var inst_52599 = (state_52610[(2)]);
var state_52610__$1 = state_52610;
var statearr_52639_54266 = state_52610__$1;
(statearr_52639_54266[(2)] = inst_52599);

(statearr_52639_54266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (17))){
var inst_52563 = (state_52610[(10)]);
var inst_52572 = cljs.core.first(inst_52563);
var inst_52573 = cljs.core.async.muxch_STAR_(inst_52572);
var inst_52574 = cljs.core.async.close_BANG_(inst_52573);
var inst_52575 = cljs.core.next(inst_52563);
var inst_52549 = inst_52575;
var inst_52550 = null;
var inst_52551 = (0);
var inst_52552 = (0);
var state_52610__$1 = (function (){var statearr_52640 = state_52610;
(statearr_52640[(12)] = inst_52552);

(statearr_52640[(13)] = inst_52550);

(statearr_52640[(14)] = inst_52574);

(statearr_52640[(15)] = inst_52549);

(statearr_52640[(16)] = inst_52551);

return statearr_52640;
})();
var statearr_52641_54273 = state_52610__$1;
(statearr_52641_54273[(2)] = null);

(statearr_52641_54273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (3))){
var inst_52608 = (state_52610[(2)]);
var state_52610__$1 = state_52610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52610__$1,inst_52608);
} else {
if((state_val_52611 === (12))){
var inst_52583 = (state_52610[(2)]);
var state_52610__$1 = state_52610;
var statearr_52645_54274 = state_52610__$1;
(statearr_52645_54274[(2)] = inst_52583);

(statearr_52645_54274[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (2))){
var state_52610__$1 = state_52610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52610__$1,(4),ch);
} else {
if((state_val_52611 === (23))){
var state_52610__$1 = state_52610;
var statearr_52648_54275 = state_52610__$1;
(statearr_52648_54275[(2)] = null);

(statearr_52648_54275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (19))){
var inst_52589 = (state_52610[(11)]);
var inst_52539 = (state_52610[(8)]);
var inst_52591 = cljs.core.async.muxch_STAR_(inst_52589);
var state_52610__$1 = state_52610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52610__$1,(22),inst_52591,inst_52539);
} else {
if((state_val_52611 === (11))){
var inst_52563 = (state_52610[(10)]);
var inst_52549 = (state_52610[(15)]);
var inst_52563__$1 = cljs.core.seq(inst_52549);
var state_52610__$1 = (function (){var statearr_52650 = state_52610;
(statearr_52650[(10)] = inst_52563__$1);

return statearr_52650;
})();
if(inst_52563__$1){
var statearr_52652_54276 = state_52610__$1;
(statearr_52652_54276[(1)] = (13));

} else {
var statearr_52653_54277 = state_52610__$1;
(statearr_52653_54277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (9))){
var inst_52585 = (state_52610[(2)]);
var state_52610__$1 = state_52610;
var statearr_52654_54278 = state_52610__$1;
(statearr_52654_54278[(2)] = inst_52585);

(statearr_52654_54278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (5))){
var inst_52546 = cljs.core.deref(mults);
var inst_52547 = cljs.core.vals(inst_52546);
var inst_52548 = cljs.core.seq(inst_52547);
var inst_52549 = inst_52548;
var inst_52550 = null;
var inst_52551 = (0);
var inst_52552 = (0);
var state_52610__$1 = (function (){var statearr_52656 = state_52610;
(statearr_52656[(12)] = inst_52552);

(statearr_52656[(13)] = inst_52550);

(statearr_52656[(15)] = inst_52549);

(statearr_52656[(16)] = inst_52551);

return statearr_52656;
})();
var statearr_52657_54285 = state_52610__$1;
(statearr_52657_54285[(2)] = null);

(statearr_52657_54285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (14))){
var state_52610__$1 = state_52610;
var statearr_52665_54286 = state_52610__$1;
(statearr_52665_54286[(2)] = null);

(statearr_52665_54286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (16))){
var inst_52563 = (state_52610[(10)]);
var inst_52567 = cljs.core.chunk_first(inst_52563);
var inst_52568 = cljs.core.chunk_rest(inst_52563);
var inst_52569 = cljs.core.count(inst_52567);
var inst_52549 = inst_52568;
var inst_52550 = inst_52567;
var inst_52551 = inst_52569;
var inst_52552 = (0);
var state_52610__$1 = (function (){var statearr_52667 = state_52610;
(statearr_52667[(12)] = inst_52552);

(statearr_52667[(13)] = inst_52550);

(statearr_52667[(15)] = inst_52549);

(statearr_52667[(16)] = inst_52551);

return statearr_52667;
})();
var statearr_52668_54289 = state_52610__$1;
(statearr_52668_54289[(2)] = null);

(statearr_52668_54289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (10))){
var inst_52552 = (state_52610[(12)]);
var inst_52550 = (state_52610[(13)]);
var inst_52549 = (state_52610[(15)]);
var inst_52551 = (state_52610[(16)]);
var inst_52557 = cljs.core._nth(inst_52550,inst_52552);
var inst_52558 = cljs.core.async.muxch_STAR_(inst_52557);
var inst_52559 = cljs.core.async.close_BANG_(inst_52558);
var inst_52560 = (inst_52552 + (1));
var tmp52661 = inst_52550;
var tmp52662 = inst_52549;
var tmp52663 = inst_52551;
var inst_52549__$1 = tmp52662;
var inst_52550__$1 = tmp52661;
var inst_52551__$1 = tmp52663;
var inst_52552__$1 = inst_52560;
var state_52610__$1 = (function (){var statearr_52670 = state_52610;
(statearr_52670[(12)] = inst_52552__$1);

(statearr_52670[(13)] = inst_52550__$1);

(statearr_52670[(17)] = inst_52559);

(statearr_52670[(15)] = inst_52549__$1);

(statearr_52670[(16)] = inst_52551__$1);

return statearr_52670;
})();
var statearr_52673_54295 = state_52610__$1;
(statearr_52673_54295[(2)] = null);

(statearr_52673_54295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (18))){
var inst_52578 = (state_52610[(2)]);
var state_52610__$1 = state_52610;
var statearr_52674_54296 = state_52610__$1;
(statearr_52674_54296[(2)] = inst_52578);

(statearr_52674_54296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52611 === (8))){
var inst_52552 = (state_52610[(12)]);
var inst_52551 = (state_52610[(16)]);
var inst_52554 = (inst_52552 < inst_52551);
var inst_52555 = inst_52554;
var state_52610__$1 = state_52610;
if(cljs.core.truth_(inst_52555)){
var statearr_52677_54298 = state_52610__$1;
(statearr_52677_54298[(1)] = (10));

} else {
var statearr_52679_54299 = state_52610__$1;
(statearr_52679_54299[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_52680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52680[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_52680[(1)] = (1));

return statearr_52680;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_52610){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_52610);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e52682){var ex__50277__auto__ = e52682;
var statearr_52683_54301 = state_52610;
(statearr_52683_54301[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_52610[(4)]))){
var statearr_52686_54302 = state_52610;
(statearr_52686_54302[(1)] = cljs.core.first((state_52610[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54305 = state_52610;
state_52610 = G__54305;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_52610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_52610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_52689 = f__50722__auto__();
(statearr_52689[(6)] = c__50721__auto___54242);

return statearr_52689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__52691 = arguments.length;
switch (G__52691) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__52695 = arguments.length;
switch (G__52695) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__52702 = arguments.length;
switch (G__52702) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__50721__auto___54328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_52762){
var state_val_52763 = (state_52762[(1)]);
if((state_val_52763 === (7))){
var state_52762__$1 = state_52762;
var statearr_52767_54329 = state_52762__$1;
(statearr_52767_54329[(2)] = null);

(statearr_52767_54329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (1))){
var state_52762__$1 = state_52762;
var statearr_52770_54333 = state_52762__$1;
(statearr_52770_54333[(2)] = null);

(statearr_52770_54333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (4))){
var inst_52716 = (state_52762[(7)]);
var inst_52715 = (state_52762[(8)]);
var inst_52718 = (inst_52716 < inst_52715);
var state_52762__$1 = state_52762;
if(cljs.core.truth_(inst_52718)){
var statearr_52771_54334 = state_52762__$1;
(statearr_52771_54334[(1)] = (6));

} else {
var statearr_52772_54335 = state_52762__$1;
(statearr_52772_54335[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (15))){
var inst_52746 = (state_52762[(9)]);
var inst_52753 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52746);
var state_52762__$1 = state_52762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52762__$1,(17),out,inst_52753);
} else {
if((state_val_52763 === (13))){
var inst_52746 = (state_52762[(9)]);
var inst_52746__$1 = (state_52762[(2)]);
var inst_52748 = cljs.core.some(cljs.core.nil_QMARK_,inst_52746__$1);
var state_52762__$1 = (function (){var statearr_52779 = state_52762;
(statearr_52779[(9)] = inst_52746__$1);

return statearr_52779;
})();
if(cljs.core.truth_(inst_52748)){
var statearr_52780_54346 = state_52762__$1;
(statearr_52780_54346[(1)] = (14));

} else {
var statearr_52781_54347 = state_52762__$1;
(statearr_52781_54347[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (6))){
var state_52762__$1 = state_52762;
var statearr_52783_54348 = state_52762__$1;
(statearr_52783_54348[(2)] = null);

(statearr_52783_54348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (17))){
var inst_52755 = (state_52762[(2)]);
var state_52762__$1 = (function (){var statearr_52792 = state_52762;
(statearr_52792[(10)] = inst_52755);

return statearr_52792;
})();
var statearr_52795_54353 = state_52762__$1;
(statearr_52795_54353[(2)] = null);

(statearr_52795_54353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (3))){
var inst_52760 = (state_52762[(2)]);
var state_52762__$1 = state_52762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52762__$1,inst_52760);
} else {
if((state_val_52763 === (12))){
var _ = (function (){var statearr_52798 = state_52762;
(statearr_52798[(4)] = cljs.core.rest((state_52762[(4)])));

return statearr_52798;
})();
var state_52762__$1 = state_52762;
var ex52789 = (state_52762__$1[(2)]);
var statearr_52801_54357 = state_52762__$1;
(statearr_52801_54357[(5)] = ex52789);


if((ex52789 instanceof Object)){
var statearr_52804_54361 = state_52762__$1;
(statearr_52804_54361[(1)] = (11));

(statearr_52804_54361[(5)] = null);

} else {
throw ex52789;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (2))){
var inst_52714 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52715 = cnt;
var inst_52716 = (0);
var state_52762__$1 = (function (){var statearr_52810 = state_52762;
(statearr_52810[(7)] = inst_52716);

(statearr_52810[(8)] = inst_52715);

(statearr_52810[(11)] = inst_52714);

return statearr_52810;
})();
var statearr_52812_54370 = state_52762__$1;
(statearr_52812_54370[(2)] = null);

(statearr_52812_54370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (11))){
var inst_52722 = (state_52762[(2)]);
var inst_52724 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52762__$1 = (function (){var statearr_52815 = state_52762;
(statearr_52815[(12)] = inst_52722);

return statearr_52815;
})();
var statearr_52816_54376 = state_52762__$1;
(statearr_52816_54376[(2)] = inst_52724);

(statearr_52816_54376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (9))){
var inst_52716 = (state_52762[(7)]);
var _ = (function (){var statearr_52819 = state_52762;
(statearr_52819[(4)] = cljs.core.cons((12),(state_52762[(4)])));

return statearr_52819;
})();
var inst_52731 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52716) : chs__$1.call(null,inst_52716));
var inst_52732 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52716) : done.call(null,inst_52716));
var inst_52733 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52731,inst_52732);
var ___$1 = (function (){var statearr_52823 = state_52762;
(statearr_52823[(4)] = cljs.core.rest((state_52762[(4)])));

return statearr_52823;
})();
var state_52762__$1 = state_52762;
var statearr_52825_54381 = state_52762__$1;
(statearr_52825_54381[(2)] = inst_52733);

(statearr_52825_54381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (5))){
var inst_52744 = (state_52762[(2)]);
var state_52762__$1 = (function (){var statearr_52826 = state_52762;
(statearr_52826[(13)] = inst_52744);

return statearr_52826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52762__$1,(13),dchan);
} else {
if((state_val_52763 === (14))){
var inst_52750 = cljs.core.async.close_BANG_(out);
var state_52762__$1 = state_52762;
var statearr_52828_54388 = state_52762__$1;
(statearr_52828_54388[(2)] = inst_52750);

(statearr_52828_54388[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (16))){
var inst_52758 = (state_52762[(2)]);
var state_52762__$1 = state_52762;
var statearr_52831_54389 = state_52762__$1;
(statearr_52831_54389[(2)] = inst_52758);

(statearr_52831_54389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (10))){
var inst_52716 = (state_52762[(7)]);
var inst_52736 = (state_52762[(2)]);
var inst_52738 = (inst_52716 + (1));
var inst_52716__$1 = inst_52738;
var state_52762__$1 = (function (){var statearr_52834 = state_52762;
(statearr_52834[(7)] = inst_52716__$1);

(statearr_52834[(14)] = inst_52736);

return statearr_52834;
})();
var statearr_52835_54392 = state_52762__$1;
(statearr_52835_54392[(2)] = null);

(statearr_52835_54392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52763 === (8))){
var inst_52742 = (state_52762[(2)]);
var state_52762__$1 = state_52762;
var statearr_52840_54395 = state_52762__$1;
(statearr_52840_54395[(2)] = inst_52742);

(statearr_52840_54395[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_52845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52845[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_52845[(1)] = (1));

return statearr_52845;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_52762){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_52762);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e52847){var ex__50277__auto__ = e52847;
var statearr_52848_54398 = state_52762;
(statearr_52848_54398[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_52762[(4)]))){
var statearr_52849_54400 = state_52762;
(statearr_52849_54400[(1)] = cljs.core.first((state_52762[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54401 = state_52762;
state_52762 = G__54401;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_52762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_52762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_52854 = f__50722__auto__();
(statearr_52854[(6)] = c__50721__auto___54328);

return statearr_52854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__52870 = arguments.length;
switch (G__52870) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50721__auto___54411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_52912){
var state_val_52913 = (state_52912[(1)]);
if((state_val_52913 === (7))){
var inst_52886 = (state_52912[(7)]);
var inst_52888 = (state_52912[(8)]);
var inst_52886__$1 = (state_52912[(2)]);
var inst_52888__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52886__$1,(0),null);
var inst_52889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52886__$1,(1),null);
var inst_52890 = (inst_52888__$1 == null);
var state_52912__$1 = (function (){var statearr_52919 = state_52912;
(statearr_52919[(9)] = inst_52889);

(statearr_52919[(7)] = inst_52886__$1);

(statearr_52919[(8)] = inst_52888__$1);

return statearr_52919;
})();
if(cljs.core.truth_(inst_52890)){
var statearr_52920_54415 = state_52912__$1;
(statearr_52920_54415[(1)] = (8));

} else {
var statearr_52921_54416 = state_52912__$1;
(statearr_52921_54416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52913 === (1))){
var inst_52876 = cljs.core.vec(chs);
var inst_52877 = inst_52876;
var state_52912__$1 = (function (){var statearr_52923 = state_52912;
(statearr_52923[(10)] = inst_52877);

return statearr_52923;
})();
var statearr_52926_54417 = state_52912__$1;
(statearr_52926_54417[(2)] = null);

(statearr_52926_54417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52913 === (4))){
var inst_52877 = (state_52912[(10)]);
var state_52912__$1 = state_52912;
return cljs.core.async.ioc_alts_BANG_(state_52912__$1,(7),inst_52877);
} else {
if((state_val_52913 === (6))){
var inst_52906 = (state_52912[(2)]);
var state_52912__$1 = state_52912;
var statearr_52930_54418 = state_52912__$1;
(statearr_52930_54418[(2)] = inst_52906);

(statearr_52930_54418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52913 === (3))){
var inst_52908 = (state_52912[(2)]);
var state_52912__$1 = state_52912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52912__$1,inst_52908);
} else {
if((state_val_52913 === (2))){
var inst_52877 = (state_52912[(10)]);
var inst_52879 = cljs.core.count(inst_52877);
var inst_52880 = (inst_52879 > (0));
var state_52912__$1 = state_52912;
if(cljs.core.truth_(inst_52880)){
var statearr_52932_54419 = state_52912__$1;
(statearr_52932_54419[(1)] = (4));

} else {
var statearr_52934_54428 = state_52912__$1;
(statearr_52934_54428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52913 === (11))){
var inst_52877 = (state_52912[(10)]);
var inst_52899 = (state_52912[(2)]);
var tmp52931 = inst_52877;
var inst_52877__$1 = tmp52931;
var state_52912__$1 = (function (){var statearr_52937 = state_52912;
(statearr_52937[(11)] = inst_52899);

(statearr_52937[(10)] = inst_52877__$1);

return statearr_52937;
})();
var statearr_52939_54436 = state_52912__$1;
(statearr_52939_54436[(2)] = null);

(statearr_52939_54436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52913 === (9))){
var inst_52888 = (state_52912[(8)]);
var state_52912__$1 = state_52912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52912__$1,(11),out,inst_52888);
} else {
if((state_val_52913 === (5))){
var inst_52904 = cljs.core.async.close_BANG_(out);
var state_52912__$1 = state_52912;
var statearr_52940_54451 = state_52912__$1;
(statearr_52940_54451[(2)] = inst_52904);

(statearr_52940_54451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52913 === (10))){
var inst_52902 = (state_52912[(2)]);
var state_52912__$1 = state_52912;
var statearr_52942_54458 = state_52912__$1;
(statearr_52942_54458[(2)] = inst_52902);

(statearr_52942_54458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52913 === (8))){
var inst_52889 = (state_52912[(9)]);
var inst_52877 = (state_52912[(10)]);
var inst_52886 = (state_52912[(7)]);
var inst_52888 = (state_52912[(8)]);
var inst_52892 = (function (){var cs = inst_52877;
var vec__52882 = inst_52886;
var v = inst_52888;
var c = inst_52889;
return (function (p1__52859_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52859_SHARP_);
});
})();
var inst_52895 = cljs.core.filterv(inst_52892,inst_52877);
var inst_52877__$1 = inst_52895;
var state_52912__$1 = (function (){var statearr_52947 = state_52912;
(statearr_52947[(10)] = inst_52877__$1);

return statearr_52947;
})();
var statearr_52949_54473 = state_52912__$1;
(statearr_52949_54473[(2)] = null);

(statearr_52949_54473[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_52950 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52950[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_52950[(1)] = (1));

return statearr_52950;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_52912){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_52912);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e52952){var ex__50277__auto__ = e52952;
var statearr_52953_54488 = state_52912;
(statearr_52953_54488[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_52912[(4)]))){
var statearr_52956_54490 = state_52912;
(statearr_52956_54490[(1)] = cljs.core.first((state_52912[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54495 = state_52912;
state_52912 = G__54495;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_52912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_52912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_52958 = f__50722__auto__();
(statearr_52958[(6)] = c__50721__auto___54411);

return statearr_52958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__52960 = arguments.length;
switch (G__52960) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50721__auto___54526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_52984){
var state_val_52985 = (state_52984[(1)]);
if((state_val_52985 === (7))){
var inst_52966 = (state_52984[(7)]);
var inst_52966__$1 = (state_52984[(2)]);
var inst_52967 = (inst_52966__$1 == null);
var inst_52968 = cljs.core.not(inst_52967);
var state_52984__$1 = (function (){var statearr_52986 = state_52984;
(statearr_52986[(7)] = inst_52966__$1);

return statearr_52986;
})();
if(inst_52968){
var statearr_52987_54531 = state_52984__$1;
(statearr_52987_54531[(1)] = (8));

} else {
var statearr_52988_54535 = state_52984__$1;
(statearr_52988_54535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52985 === (1))){
var inst_52961 = (0);
var state_52984__$1 = (function (){var statearr_52989 = state_52984;
(statearr_52989[(8)] = inst_52961);

return statearr_52989;
})();
var statearr_52990_54536 = state_52984__$1;
(statearr_52990_54536[(2)] = null);

(statearr_52990_54536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52985 === (4))){
var state_52984__$1 = state_52984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52984__$1,(7),ch);
} else {
if((state_val_52985 === (6))){
var inst_52979 = (state_52984[(2)]);
var state_52984__$1 = state_52984;
var statearr_52991_54540 = state_52984__$1;
(statearr_52991_54540[(2)] = inst_52979);

(statearr_52991_54540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52985 === (3))){
var inst_52981 = (state_52984[(2)]);
var inst_52982 = cljs.core.async.close_BANG_(out);
var state_52984__$1 = (function (){var statearr_52993 = state_52984;
(statearr_52993[(9)] = inst_52981);

return statearr_52993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52984__$1,inst_52982);
} else {
if((state_val_52985 === (2))){
var inst_52961 = (state_52984[(8)]);
var inst_52963 = (inst_52961 < n);
var state_52984__$1 = state_52984;
if(cljs.core.truth_(inst_52963)){
var statearr_52994_54549 = state_52984__$1;
(statearr_52994_54549[(1)] = (4));

} else {
var statearr_52995_54554 = state_52984__$1;
(statearr_52995_54554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52985 === (11))){
var inst_52961 = (state_52984[(8)]);
var inst_52971 = (state_52984[(2)]);
var inst_52972 = (inst_52961 + (1));
var inst_52961__$1 = inst_52972;
var state_52984__$1 = (function (){var statearr_52996 = state_52984;
(statearr_52996[(8)] = inst_52961__$1);

(statearr_52996[(10)] = inst_52971);

return statearr_52996;
})();
var statearr_52997_54563 = state_52984__$1;
(statearr_52997_54563[(2)] = null);

(statearr_52997_54563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52985 === (9))){
var state_52984__$1 = state_52984;
var statearr_52998_54571 = state_52984__$1;
(statearr_52998_54571[(2)] = null);

(statearr_52998_54571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52985 === (5))){
var state_52984__$1 = state_52984;
var statearr_52999_54574 = state_52984__$1;
(statearr_52999_54574[(2)] = null);

(statearr_52999_54574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52985 === (10))){
var inst_52976 = (state_52984[(2)]);
var state_52984__$1 = state_52984;
var statearr_53000_54575 = state_52984__$1;
(statearr_53000_54575[(2)] = inst_52976);

(statearr_53000_54575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52985 === (8))){
var inst_52966 = (state_52984[(7)]);
var state_52984__$1 = state_52984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52984__$1,(11),out,inst_52966);
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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_53001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53001[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_53001[(1)] = (1));

return statearr_53001;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_52984){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_52984);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e53002){var ex__50277__auto__ = e53002;
var statearr_53003_54577 = state_52984;
(statearr_53003_54577[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_52984[(4)]))){
var statearr_53004_54580 = state_52984;
(statearr_53004_54580[(1)] = cljs.core.first((state_52984[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54586 = state_52984;
state_52984 = G__54586;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_52984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_52984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_53005 = f__50722__auto__();
(statearr_53005[(6)] = c__50721__auto___54526);

return statearr_53005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53007 = (function (f,ch,meta53008){
this.f = f;
this.ch = ch;
this.meta53008 = meta53008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53009,meta53008__$1){
var self__ = this;
var _53009__$1 = this;
return (new cljs.core.async.t_cljs$core$async53007(self__.f,self__.ch,meta53008__$1));
}));

(cljs.core.async.t_cljs$core$async53007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53009){
var self__ = this;
var _53009__$1 = this;
return self__.meta53008;
}));

(cljs.core.async.t_cljs$core$async53007.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53007.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53007.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53007.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53007.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53010 = (function (f,ch,meta53008,_,fn1,meta53011){
this.f = f;
this.ch = ch;
this.meta53008 = meta53008;
this._ = _;
this.fn1 = fn1;
this.meta53011 = meta53011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53012,meta53011__$1){
var self__ = this;
var _53012__$1 = this;
return (new cljs.core.async.t_cljs$core$async53010(self__.f,self__.ch,self__.meta53008,self__._,self__.fn1,meta53011__$1));
}));

(cljs.core.async.t_cljs$core$async53010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53012){
var self__ = this;
var _53012__$1 = this;
return self__.meta53011;
}));

(cljs.core.async.t_cljs$core$async53010.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async53010.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__53006_SHARP_){
var G__53014 = (((p1__53006_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53006_SHARP_) : self__.f.call(null,p1__53006_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53014) : f1.call(null,G__53014));
});
}));

(cljs.core.async.t_cljs$core$async53010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53008","meta53008",-648196576,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53007","cljs.core.async/t_cljs$core$async53007",-433251294,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53011","meta53011",-1175441479,null)], null);
}));

(cljs.core.async.t_cljs$core$async53010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53010");

(cljs.core.async.t_cljs$core$async53010.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53010.
 */
cljs.core.async.__GT_t_cljs$core$async53010 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53010(f__$1,ch__$1,meta53008__$1,___$2,fn1__$1,meta53011){
return (new cljs.core.async.t_cljs$core$async53010(f__$1,ch__$1,meta53008__$1,___$2,fn1__$1,meta53011));
});

}

return (new cljs.core.async.t_cljs$core$async53010(self__.f,self__.ch,self__.meta53008,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53015 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53015) : self__.f.call(null,G__53015));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async53007.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53007.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async53007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53008","meta53008",-648196576,null)], null);
}));

(cljs.core.async.t_cljs$core$async53007.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53007");

(cljs.core.async.t_cljs$core$async53007.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53007");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53007.
 */
cljs.core.async.__GT_t_cljs$core$async53007 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53007(f__$1,ch__$1,meta53008){
return (new cljs.core.async.t_cljs$core$async53007(f__$1,ch__$1,meta53008));
});

}

return (new cljs.core.async.t_cljs$core$async53007(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53017 = (function (f,ch,meta53018){
this.f = f;
this.ch = ch;
this.meta53018 = meta53018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53019,meta53018__$1){
var self__ = this;
var _53019__$1 = this;
return (new cljs.core.async.t_cljs$core$async53017(self__.f,self__.ch,meta53018__$1));
}));

(cljs.core.async.t_cljs$core$async53017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53019){
var self__ = this;
var _53019__$1 = this;
return self__.meta53018;
}));

(cljs.core.async.t_cljs$core$async53017.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53017.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53017.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async53017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53018","meta53018",743809715,null)], null);
}));

(cljs.core.async.t_cljs$core$async53017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53017");

(cljs.core.async.t_cljs$core$async53017.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53017.
 */
cljs.core.async.__GT_t_cljs$core$async53017 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53017(f__$1,ch__$1,meta53018){
return (new cljs.core.async.t_cljs$core$async53017(f__$1,ch__$1,meta53018));
});

}

return (new cljs.core.async.t_cljs$core$async53017(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53022 = (function (p,ch,meta53023){
this.p = p;
this.ch = ch;
this.meta53023 = meta53023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53024,meta53023__$1){
var self__ = this;
var _53024__$1 = this;
return (new cljs.core.async.t_cljs$core$async53022(self__.p,self__.ch,meta53023__$1));
}));

(cljs.core.async.t_cljs$core$async53022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53024){
var self__ = this;
var _53024__$1 = this;
return self__.meta53023;
}));

(cljs.core.async.t_cljs$core$async53022.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53022.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53022.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53022.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async53022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53023","meta53023",973725375,null)], null);
}));

(cljs.core.async.t_cljs$core$async53022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53022");

(cljs.core.async.t_cljs$core$async53022.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53022.
 */
cljs.core.async.__GT_t_cljs$core$async53022 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53022(p__$1,ch__$1,meta53023){
return (new cljs.core.async.t_cljs$core$async53022(p__$1,ch__$1,meta53023));
});

}

return (new cljs.core.async.t_cljs$core$async53022(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__53031 = arguments.length;
switch (G__53031) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50721__auto___54692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_53057){
var state_val_53058 = (state_53057[(1)]);
if((state_val_53058 === (7))){
var inst_53053 = (state_53057[(2)]);
var state_53057__$1 = state_53057;
var statearr_53059_54693 = state_53057__$1;
(statearr_53059_54693[(2)] = inst_53053);

(statearr_53059_54693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53058 === (1))){
var state_53057__$1 = state_53057;
var statearr_53060_54694 = state_53057__$1;
(statearr_53060_54694[(2)] = null);

(statearr_53060_54694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53058 === (4))){
var inst_53039 = (state_53057[(7)]);
var inst_53039__$1 = (state_53057[(2)]);
var inst_53040 = (inst_53039__$1 == null);
var state_53057__$1 = (function (){var statearr_53064 = state_53057;
(statearr_53064[(7)] = inst_53039__$1);

return statearr_53064;
})();
if(cljs.core.truth_(inst_53040)){
var statearr_53066_54699 = state_53057__$1;
(statearr_53066_54699[(1)] = (5));

} else {
var statearr_53068_54700 = state_53057__$1;
(statearr_53068_54700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53058 === (6))){
var inst_53039 = (state_53057[(7)]);
var inst_53044 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53039) : p.call(null,inst_53039));
var state_53057__$1 = state_53057;
if(cljs.core.truth_(inst_53044)){
var statearr_53070_54701 = state_53057__$1;
(statearr_53070_54701[(1)] = (8));

} else {
var statearr_53071_54702 = state_53057__$1;
(statearr_53071_54702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53058 === (3))){
var inst_53055 = (state_53057[(2)]);
var state_53057__$1 = state_53057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53057__$1,inst_53055);
} else {
if((state_val_53058 === (2))){
var state_53057__$1 = state_53057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53057__$1,(4),ch);
} else {
if((state_val_53058 === (11))){
var inst_53047 = (state_53057[(2)]);
var state_53057__$1 = state_53057;
var statearr_53072_54703 = state_53057__$1;
(statearr_53072_54703[(2)] = inst_53047);

(statearr_53072_54703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53058 === (9))){
var state_53057__$1 = state_53057;
var statearr_53076_54704 = state_53057__$1;
(statearr_53076_54704[(2)] = null);

(statearr_53076_54704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53058 === (5))){
var inst_53042 = cljs.core.async.close_BANG_(out);
var state_53057__$1 = state_53057;
var statearr_53078_54705 = state_53057__$1;
(statearr_53078_54705[(2)] = inst_53042);

(statearr_53078_54705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53058 === (10))){
var inst_53050 = (state_53057[(2)]);
var state_53057__$1 = (function (){var statearr_53079 = state_53057;
(statearr_53079[(8)] = inst_53050);

return statearr_53079;
})();
var statearr_53080_54706 = state_53057__$1;
(statearr_53080_54706[(2)] = null);

(statearr_53080_54706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53058 === (8))){
var inst_53039 = (state_53057[(7)]);
var state_53057__$1 = state_53057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53057__$1,(11),out,inst_53039);
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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_53082 = [null,null,null,null,null,null,null,null,null];
(statearr_53082[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_53082[(1)] = (1));

return statearr_53082;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_53057){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_53057);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e53085){var ex__50277__auto__ = e53085;
var statearr_53088_54711 = state_53057;
(statearr_53088_54711[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_53057[(4)]))){
var statearr_53089_54712 = state_53057;
(statearr_53089_54712[(1)] = cljs.core.first((state_53057[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54713 = state_53057;
state_53057 = G__54713;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_53057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_53057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_53090 = f__50722__auto__();
(statearr_53090[(6)] = c__50721__auto___54692);

return statearr_53090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53095 = arguments.length;
switch (G__53095) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_53177){
var state_val_53178 = (state_53177[(1)]);
if((state_val_53178 === (7))){
var inst_53170 = (state_53177[(2)]);
var state_53177__$1 = state_53177;
var statearr_53184_54728 = state_53177__$1;
(statearr_53184_54728[(2)] = inst_53170);

(statearr_53184_54728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (20))){
var inst_53136 = (state_53177[(7)]);
var inst_53151 = (state_53177[(2)]);
var inst_53152 = cljs.core.next(inst_53136);
var inst_53121 = inst_53152;
var inst_53122 = null;
var inst_53123 = (0);
var inst_53124 = (0);
var state_53177__$1 = (function (){var statearr_53185 = state_53177;
(statearr_53185[(8)] = inst_53121);

(statearr_53185[(9)] = inst_53124);

(statearr_53185[(10)] = inst_53122);

(statearr_53185[(11)] = inst_53151);

(statearr_53185[(12)] = inst_53123);

return statearr_53185;
})();
var statearr_53186_54730 = state_53177__$1;
(statearr_53186_54730[(2)] = null);

(statearr_53186_54730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (1))){
var state_53177__$1 = state_53177;
var statearr_53189_54731 = state_53177__$1;
(statearr_53189_54731[(2)] = null);

(statearr_53189_54731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (4))){
var inst_53110 = (state_53177[(13)]);
var inst_53110__$1 = (state_53177[(2)]);
var inst_53111 = (inst_53110__$1 == null);
var state_53177__$1 = (function (){var statearr_53190 = state_53177;
(statearr_53190[(13)] = inst_53110__$1);

return statearr_53190;
})();
if(cljs.core.truth_(inst_53111)){
var statearr_53191_54735 = state_53177__$1;
(statearr_53191_54735[(1)] = (5));

} else {
var statearr_53192_54737 = state_53177__$1;
(statearr_53192_54737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (15))){
var state_53177__$1 = state_53177;
var statearr_53196_54741 = state_53177__$1;
(statearr_53196_54741[(2)] = null);

(statearr_53196_54741[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (21))){
var state_53177__$1 = state_53177;
var statearr_53199_54742 = state_53177__$1;
(statearr_53199_54742[(2)] = null);

(statearr_53199_54742[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (13))){
var inst_53121 = (state_53177[(8)]);
var inst_53124 = (state_53177[(9)]);
var inst_53122 = (state_53177[(10)]);
var inst_53123 = (state_53177[(12)]);
var inst_53132 = (state_53177[(2)]);
var inst_53133 = (inst_53124 + (1));
var tmp53193 = inst_53121;
var tmp53194 = inst_53122;
var tmp53195 = inst_53123;
var inst_53121__$1 = tmp53193;
var inst_53122__$1 = tmp53194;
var inst_53123__$1 = tmp53195;
var inst_53124__$1 = inst_53133;
var state_53177__$1 = (function (){var statearr_53202 = state_53177;
(statearr_53202[(14)] = inst_53132);

(statearr_53202[(8)] = inst_53121__$1);

(statearr_53202[(9)] = inst_53124__$1);

(statearr_53202[(10)] = inst_53122__$1);

(statearr_53202[(12)] = inst_53123__$1);

return statearr_53202;
})();
var statearr_53203_54749 = state_53177__$1;
(statearr_53203_54749[(2)] = null);

(statearr_53203_54749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (22))){
var state_53177__$1 = state_53177;
var statearr_53204_54751 = state_53177__$1;
(statearr_53204_54751[(2)] = null);

(statearr_53204_54751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (6))){
var inst_53110 = (state_53177[(13)]);
var inst_53119 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53110) : f.call(null,inst_53110));
var inst_53120 = cljs.core.seq(inst_53119);
var inst_53121 = inst_53120;
var inst_53122 = null;
var inst_53123 = (0);
var inst_53124 = (0);
var state_53177__$1 = (function (){var statearr_53205 = state_53177;
(statearr_53205[(8)] = inst_53121);

(statearr_53205[(9)] = inst_53124);

(statearr_53205[(10)] = inst_53122);

(statearr_53205[(12)] = inst_53123);

return statearr_53205;
})();
var statearr_53206_54759 = state_53177__$1;
(statearr_53206_54759[(2)] = null);

(statearr_53206_54759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (17))){
var inst_53136 = (state_53177[(7)]);
var inst_53142 = cljs.core.chunk_first(inst_53136);
var inst_53143 = cljs.core.chunk_rest(inst_53136);
var inst_53144 = cljs.core.count(inst_53142);
var inst_53121 = inst_53143;
var inst_53122 = inst_53142;
var inst_53123 = inst_53144;
var inst_53124 = (0);
var state_53177__$1 = (function (){var statearr_53207 = state_53177;
(statearr_53207[(8)] = inst_53121);

(statearr_53207[(9)] = inst_53124);

(statearr_53207[(10)] = inst_53122);

(statearr_53207[(12)] = inst_53123);

return statearr_53207;
})();
var statearr_53208_54766 = state_53177__$1;
(statearr_53208_54766[(2)] = null);

(statearr_53208_54766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (3))){
var inst_53173 = (state_53177[(2)]);
var state_53177__$1 = state_53177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53177__$1,inst_53173);
} else {
if((state_val_53178 === (12))){
var inst_53160 = (state_53177[(2)]);
var state_53177__$1 = state_53177;
var statearr_53209_54771 = state_53177__$1;
(statearr_53209_54771[(2)] = inst_53160);

(statearr_53209_54771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (2))){
var state_53177__$1 = state_53177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53177__$1,(4),in$);
} else {
if((state_val_53178 === (23))){
var inst_53168 = (state_53177[(2)]);
var state_53177__$1 = state_53177;
var statearr_53210_54774 = state_53177__$1;
(statearr_53210_54774[(2)] = inst_53168);

(statearr_53210_54774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (19))){
var inst_53155 = (state_53177[(2)]);
var state_53177__$1 = state_53177;
var statearr_53211_54778 = state_53177__$1;
(statearr_53211_54778[(2)] = inst_53155);

(statearr_53211_54778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (11))){
var inst_53121 = (state_53177[(8)]);
var inst_53136 = (state_53177[(7)]);
var inst_53136__$1 = cljs.core.seq(inst_53121);
var state_53177__$1 = (function (){var statearr_53212 = state_53177;
(statearr_53212[(7)] = inst_53136__$1);

return statearr_53212;
})();
if(inst_53136__$1){
var statearr_53213_54781 = state_53177__$1;
(statearr_53213_54781[(1)] = (14));

} else {
var statearr_53214_54784 = state_53177__$1;
(statearr_53214_54784[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (9))){
var inst_53162 = (state_53177[(2)]);
var inst_53163 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53177__$1 = (function (){var statearr_53215 = state_53177;
(statearr_53215[(15)] = inst_53162);

return statearr_53215;
})();
if(cljs.core.truth_(inst_53163)){
var statearr_53218_54789 = state_53177__$1;
(statearr_53218_54789[(1)] = (21));

} else {
var statearr_53219_54790 = state_53177__$1;
(statearr_53219_54790[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (5))){
var inst_53113 = cljs.core.async.close_BANG_(out);
var state_53177__$1 = state_53177;
var statearr_53220_54795 = state_53177__$1;
(statearr_53220_54795[(2)] = inst_53113);

(statearr_53220_54795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (14))){
var inst_53136 = (state_53177[(7)]);
var inst_53139 = cljs.core.chunked_seq_QMARK_(inst_53136);
var state_53177__$1 = state_53177;
if(inst_53139){
var statearr_53221_54801 = state_53177__$1;
(statearr_53221_54801[(1)] = (17));

} else {
var statearr_53222_54802 = state_53177__$1;
(statearr_53222_54802[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (16))){
var inst_53158 = (state_53177[(2)]);
var state_53177__$1 = state_53177;
var statearr_53223_54803 = state_53177__$1;
(statearr_53223_54803[(2)] = inst_53158);

(statearr_53223_54803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53178 === (10))){
var inst_53124 = (state_53177[(9)]);
var inst_53122 = (state_53177[(10)]);
var inst_53130 = cljs.core._nth(inst_53122,inst_53124);
var state_53177__$1 = state_53177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53177__$1,(13),out,inst_53130);
} else {
if((state_val_53178 === (18))){
var inst_53136 = (state_53177[(7)]);
var inst_53149 = cljs.core.first(inst_53136);
var state_53177__$1 = state_53177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53177__$1,(20),out,inst_53149);
} else {
if((state_val_53178 === (8))){
var inst_53124 = (state_53177[(9)]);
var inst_53123 = (state_53177[(12)]);
var inst_53126 = (inst_53124 < inst_53123);
var inst_53127 = inst_53126;
var state_53177__$1 = state_53177;
if(cljs.core.truth_(inst_53127)){
var statearr_53224_54807 = state_53177__$1;
(statearr_53224_54807[(1)] = (10));

} else {
var statearr_53225_54808 = state_53177__$1;
(statearr_53225_54808[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50274__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50274__auto____0 = (function (){
var statearr_53226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53226[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50274__auto__);

(statearr_53226[(1)] = (1));

return statearr_53226;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50274__auto____1 = (function (state_53177){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_53177);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e53227){var ex__50277__auto__ = e53227;
var statearr_53228_54812 = state_53177;
(statearr_53228_54812[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_53177[(4)]))){
var statearr_53229_54819 = state_53177;
(statearr_53229_54819[(1)] = cljs.core.first((state_53177[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54824 = state_53177;
state_53177 = G__54824;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50274__auto__ = function(state_53177){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50274__auto____1.call(this,state_53177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50274__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50274__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_53230 = f__50722__auto__();
(statearr_53230[(6)] = c__50721__auto__);

return statearr_53230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));

return c__50721__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53232 = arguments.length;
switch (G__53232) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53238 = arguments.length;
switch (G__53238) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53242 = arguments.length;
switch (G__53242) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50721__auto___54863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_53266){
var state_val_53267 = (state_53266[(1)]);
if((state_val_53267 === (7))){
var inst_53261 = (state_53266[(2)]);
var state_53266__$1 = state_53266;
var statearr_53268_54869 = state_53266__$1;
(statearr_53268_54869[(2)] = inst_53261);

(statearr_53268_54869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53267 === (1))){
var inst_53243 = null;
var state_53266__$1 = (function (){var statearr_53269 = state_53266;
(statearr_53269[(7)] = inst_53243);

return statearr_53269;
})();
var statearr_53270_54875 = state_53266__$1;
(statearr_53270_54875[(2)] = null);

(statearr_53270_54875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53267 === (4))){
var inst_53246 = (state_53266[(8)]);
var inst_53246__$1 = (state_53266[(2)]);
var inst_53247 = (inst_53246__$1 == null);
var inst_53248 = cljs.core.not(inst_53247);
var state_53266__$1 = (function (){var statearr_53271 = state_53266;
(statearr_53271[(8)] = inst_53246__$1);

return statearr_53271;
})();
if(inst_53248){
var statearr_53272_54888 = state_53266__$1;
(statearr_53272_54888[(1)] = (5));

} else {
var statearr_53273_54889 = state_53266__$1;
(statearr_53273_54889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53267 === (6))){
var state_53266__$1 = state_53266;
var statearr_53274_54896 = state_53266__$1;
(statearr_53274_54896[(2)] = null);

(statearr_53274_54896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53267 === (3))){
var inst_53263 = (state_53266[(2)]);
var inst_53264 = cljs.core.async.close_BANG_(out);
var state_53266__$1 = (function (){var statearr_53275 = state_53266;
(statearr_53275[(9)] = inst_53263);

return statearr_53275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53266__$1,inst_53264);
} else {
if((state_val_53267 === (2))){
var state_53266__$1 = state_53266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53266__$1,(4),ch);
} else {
if((state_val_53267 === (11))){
var inst_53246 = (state_53266[(8)]);
var inst_53255 = (state_53266[(2)]);
var inst_53243 = inst_53246;
var state_53266__$1 = (function (){var statearr_53276 = state_53266;
(statearr_53276[(10)] = inst_53255);

(statearr_53276[(7)] = inst_53243);

return statearr_53276;
})();
var statearr_53277_54924 = state_53266__$1;
(statearr_53277_54924[(2)] = null);

(statearr_53277_54924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53267 === (9))){
var inst_53246 = (state_53266[(8)]);
var state_53266__$1 = state_53266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53266__$1,(11),out,inst_53246);
} else {
if((state_val_53267 === (5))){
var inst_53246 = (state_53266[(8)]);
var inst_53243 = (state_53266[(7)]);
var inst_53250 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53246,inst_53243);
var state_53266__$1 = state_53266;
if(inst_53250){
var statearr_53279_54932 = state_53266__$1;
(statearr_53279_54932[(1)] = (8));

} else {
var statearr_53280_54934 = state_53266__$1;
(statearr_53280_54934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53267 === (10))){
var inst_53258 = (state_53266[(2)]);
var state_53266__$1 = state_53266;
var statearr_53281_54947 = state_53266__$1;
(statearr_53281_54947[(2)] = inst_53258);

(statearr_53281_54947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53267 === (8))){
var inst_53243 = (state_53266[(7)]);
var tmp53278 = inst_53243;
var inst_53243__$1 = tmp53278;
var state_53266__$1 = (function (){var statearr_53282 = state_53266;
(statearr_53282[(7)] = inst_53243__$1);

return statearr_53282;
})();
var statearr_53283_54961 = state_53266__$1;
(statearr_53283_54961[(2)] = null);

(statearr_53283_54961[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_53284 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53284[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_53284[(1)] = (1));

return statearr_53284;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_53266){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_53266);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e53285){var ex__50277__auto__ = e53285;
var statearr_53286_54984 = state_53266;
(statearr_53286_54984[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_53266[(4)]))){
var statearr_53287_54985 = state_53266;
(statearr_53287_54985[(1)] = cljs.core.first((state_53266[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54990 = state_53266;
state_53266 = G__54990;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_53266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_53266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_53288 = f__50722__auto__();
(statearr_53288[(6)] = c__50721__auto___54863);

return statearr_53288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53290 = arguments.length;
switch (G__53290) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50721__auto___55016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_53332){
var state_val_53333 = (state_53332[(1)]);
if((state_val_53333 === (7))){
var inst_53328 = (state_53332[(2)]);
var state_53332__$1 = state_53332;
var statearr_53337_55024 = state_53332__$1;
(statearr_53337_55024[(2)] = inst_53328);

(statearr_53337_55024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (1))){
var inst_53295 = (new Array(n));
var inst_53296 = inst_53295;
var inst_53297 = (0);
var state_53332__$1 = (function (){var statearr_53338 = state_53332;
(statearr_53338[(7)] = inst_53297);

(statearr_53338[(8)] = inst_53296);

return statearr_53338;
})();
var statearr_53339_55026 = state_53332__$1;
(statearr_53339_55026[(2)] = null);

(statearr_53339_55026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (4))){
var inst_53300 = (state_53332[(9)]);
var inst_53300__$1 = (state_53332[(2)]);
var inst_53301 = (inst_53300__$1 == null);
var inst_53302 = cljs.core.not(inst_53301);
var state_53332__$1 = (function (){var statearr_53340 = state_53332;
(statearr_53340[(9)] = inst_53300__$1);

return statearr_53340;
})();
if(inst_53302){
var statearr_53341_55033 = state_53332__$1;
(statearr_53341_55033[(1)] = (5));

} else {
var statearr_53342_55041 = state_53332__$1;
(statearr_53342_55041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (15))){
var inst_53322 = (state_53332[(2)]);
var state_53332__$1 = state_53332;
var statearr_53343_55046 = state_53332__$1;
(statearr_53343_55046[(2)] = inst_53322);

(statearr_53343_55046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (13))){
var state_53332__$1 = state_53332;
var statearr_53344_55049 = state_53332__$1;
(statearr_53344_55049[(2)] = null);

(statearr_53344_55049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (6))){
var inst_53297 = (state_53332[(7)]);
var inst_53318 = (inst_53297 > (0));
var state_53332__$1 = state_53332;
if(cljs.core.truth_(inst_53318)){
var statearr_53345_55052 = state_53332__$1;
(statearr_53345_55052[(1)] = (12));

} else {
var statearr_53349_55054 = state_53332__$1;
(statearr_53349_55054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (3))){
var inst_53330 = (state_53332[(2)]);
var state_53332__$1 = state_53332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53332__$1,inst_53330);
} else {
if((state_val_53333 === (12))){
var inst_53296 = (state_53332[(8)]);
var inst_53320 = cljs.core.vec(inst_53296);
var state_53332__$1 = state_53332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53332__$1,(15),out,inst_53320);
} else {
if((state_val_53333 === (2))){
var state_53332__$1 = state_53332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53332__$1,(4),ch);
} else {
if((state_val_53333 === (11))){
var inst_53312 = (state_53332[(2)]);
var inst_53313 = (new Array(n));
var inst_53296 = inst_53313;
var inst_53297 = (0);
var state_53332__$1 = (function (){var statearr_53350 = state_53332;
(statearr_53350[(10)] = inst_53312);

(statearr_53350[(7)] = inst_53297);

(statearr_53350[(8)] = inst_53296);

return statearr_53350;
})();
var statearr_53351_55075 = state_53332__$1;
(statearr_53351_55075[(2)] = null);

(statearr_53351_55075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (9))){
var inst_53296 = (state_53332[(8)]);
var inst_53310 = cljs.core.vec(inst_53296);
var state_53332__$1 = state_53332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53332__$1,(11),out,inst_53310);
} else {
if((state_val_53333 === (5))){
var inst_53300 = (state_53332[(9)]);
var inst_53305 = (state_53332[(11)]);
var inst_53297 = (state_53332[(7)]);
var inst_53296 = (state_53332[(8)]);
var inst_53304 = (inst_53296[inst_53297] = inst_53300);
var inst_53305__$1 = (inst_53297 + (1));
var inst_53306 = (inst_53305__$1 < n);
var state_53332__$1 = (function (){var statearr_53352 = state_53332;
(statearr_53352[(11)] = inst_53305__$1);

(statearr_53352[(12)] = inst_53304);

return statearr_53352;
})();
if(cljs.core.truth_(inst_53306)){
var statearr_53353_55090 = state_53332__$1;
(statearr_53353_55090[(1)] = (8));

} else {
var statearr_53354_55094 = state_53332__$1;
(statearr_53354_55094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (14))){
var inst_53325 = (state_53332[(2)]);
var inst_53326 = cljs.core.async.close_BANG_(out);
var state_53332__$1 = (function (){var statearr_53356 = state_53332;
(statearr_53356[(13)] = inst_53325);

return statearr_53356;
})();
var statearr_53357_55097 = state_53332__$1;
(statearr_53357_55097[(2)] = inst_53326);

(statearr_53357_55097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (10))){
var inst_53316 = (state_53332[(2)]);
var state_53332__$1 = state_53332;
var statearr_53358_55100 = state_53332__$1;
(statearr_53358_55100[(2)] = inst_53316);

(statearr_53358_55100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (8))){
var inst_53305 = (state_53332[(11)]);
var inst_53296 = (state_53332[(8)]);
var tmp53355 = inst_53296;
var inst_53296__$1 = tmp53355;
var inst_53297 = inst_53305;
var state_53332__$1 = (function (){var statearr_53359 = state_53332;
(statearr_53359[(7)] = inst_53297);

(statearr_53359[(8)] = inst_53296__$1);

return statearr_53359;
})();
var statearr_53360_55107 = state_53332__$1;
(statearr_53360_55107[(2)] = null);

(statearr_53360_55107[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_53361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53361[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_53361[(1)] = (1));

return statearr_53361;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_53332){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_53332);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e53362){var ex__50277__auto__ = e53362;
var statearr_53363_55114 = state_53332;
(statearr_53363_55114[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_53332[(4)]))){
var statearr_53364_55115 = state_53332;
(statearr_53364_55115[(1)] = cljs.core.first((state_53332[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55116 = state_53332;
state_53332 = G__55116;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_53332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_53332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_53365 = f__50722__auto__();
(statearr_53365[(6)] = c__50721__auto___55016);

return statearr_53365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53372 = arguments.length;
switch (G__53372) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50721__auto___55119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50722__auto__ = (function (){var switch__50273__auto__ = (function (state_53416){
var state_val_53417 = (state_53416[(1)]);
if((state_val_53417 === (7))){
var inst_53412 = (state_53416[(2)]);
var state_53416__$1 = state_53416;
var statearr_53418_55120 = state_53416__$1;
(statearr_53418_55120[(2)] = inst_53412);

(statearr_53418_55120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53417 === (1))){
var inst_53373 = [];
var inst_53374 = inst_53373;
var inst_53375 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53416__$1 = (function (){var statearr_53419 = state_53416;
(statearr_53419[(7)] = inst_53375);

(statearr_53419[(8)] = inst_53374);

return statearr_53419;
})();
var statearr_53420_55121 = state_53416__$1;
(statearr_53420_55121[(2)] = null);

(statearr_53420_55121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53417 === (4))){
var inst_53378 = (state_53416[(9)]);
var inst_53378__$1 = (state_53416[(2)]);
var inst_53379 = (inst_53378__$1 == null);
var inst_53380 = cljs.core.not(inst_53379);
var state_53416__$1 = (function (){var statearr_53421 = state_53416;
(statearr_53421[(9)] = inst_53378__$1);

return statearr_53421;
})();
if(inst_53380){
var statearr_53422_55128 = state_53416__$1;
(statearr_53422_55128[(1)] = (5));

} else {
var statearr_53423_55129 = state_53416__$1;
(statearr_53423_55129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53417 === (15))){
var inst_53406 = (state_53416[(2)]);
var state_53416__$1 = state_53416;
var statearr_53424_55131 = state_53416__$1;
(statearr_53424_55131[(2)] = inst_53406);

(statearr_53424_55131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53417 === (13))){
var state_53416__$1 = state_53416;
var statearr_53425_55133 = state_53416__$1;
(statearr_53425_55133[(2)] = null);

(statearr_53425_55133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53417 === (6))){
var inst_53374 = (state_53416[(8)]);
var inst_53401 = inst_53374.length;
var inst_53402 = (inst_53401 > (0));
var state_53416__$1 = state_53416;
if(cljs.core.truth_(inst_53402)){
var statearr_53428_55134 = state_53416__$1;
(statearr_53428_55134[(1)] = (12));

} else {
var statearr_53429_55135 = state_53416__$1;
(statearr_53429_55135[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53417 === (3))){
var inst_53414 = (state_53416[(2)]);
var state_53416__$1 = state_53416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53416__$1,inst_53414);
} else {
if((state_val_53417 === (12))){
var inst_53374 = (state_53416[(8)]);
var inst_53404 = cljs.core.vec(inst_53374);
var state_53416__$1 = state_53416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53416__$1,(15),out,inst_53404);
} else {
if((state_val_53417 === (2))){
var state_53416__$1 = state_53416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53416__$1,(4),ch);
} else {
if((state_val_53417 === (11))){
var inst_53382 = (state_53416[(10)]);
var inst_53378 = (state_53416[(9)]);
var inst_53394 = (state_53416[(2)]);
var inst_53395 = [];
var inst_53396 = inst_53395.push(inst_53378);
var inst_53374 = inst_53395;
var inst_53375 = inst_53382;
var state_53416__$1 = (function (){var statearr_53430 = state_53416;
(statearr_53430[(11)] = inst_53394);

(statearr_53430[(7)] = inst_53375);

(statearr_53430[(12)] = inst_53396);

(statearr_53430[(8)] = inst_53374);

return statearr_53430;
})();
var statearr_53431_55139 = state_53416__$1;
(statearr_53431_55139[(2)] = null);

(statearr_53431_55139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53417 === (9))){
var inst_53374 = (state_53416[(8)]);
var inst_53391 = cljs.core.vec(inst_53374);
var state_53416__$1 = state_53416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53416__$1,(11),out,inst_53391);
} else {
if((state_val_53417 === (5))){
var inst_53375 = (state_53416[(7)]);
var inst_53382 = (state_53416[(10)]);
var inst_53378 = (state_53416[(9)]);
var inst_53382__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53378) : f.call(null,inst_53378));
var inst_53383 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53382__$1,inst_53375);
var inst_53384 = cljs.core.keyword_identical_QMARK_(inst_53375,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53385 = ((inst_53383) || (inst_53384));
var state_53416__$1 = (function (){var statearr_53433 = state_53416;
(statearr_53433[(10)] = inst_53382__$1);

return statearr_53433;
})();
if(cljs.core.truth_(inst_53385)){
var statearr_53434_55148 = state_53416__$1;
(statearr_53434_55148[(1)] = (8));

} else {
var statearr_53435_55149 = state_53416__$1;
(statearr_53435_55149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53417 === (14))){
var inst_53409 = (state_53416[(2)]);
var inst_53410 = cljs.core.async.close_BANG_(out);
var state_53416__$1 = (function (){var statearr_53437 = state_53416;
(statearr_53437[(13)] = inst_53409);

return statearr_53437;
})();
var statearr_53438_55150 = state_53416__$1;
(statearr_53438_55150[(2)] = inst_53410);

(statearr_53438_55150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53417 === (10))){
var inst_53399 = (state_53416[(2)]);
var state_53416__$1 = state_53416;
var statearr_53440_55152 = state_53416__$1;
(statearr_53440_55152[(2)] = inst_53399);

(statearr_53440_55152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53417 === (8))){
var inst_53374 = (state_53416[(8)]);
var inst_53382 = (state_53416[(10)]);
var inst_53378 = (state_53416[(9)]);
var inst_53387 = inst_53374.push(inst_53378);
var tmp53436 = inst_53374;
var inst_53374__$1 = tmp53436;
var inst_53375 = inst_53382;
var state_53416__$1 = (function (){var statearr_53441 = state_53416;
(statearr_53441[(7)] = inst_53375);

(statearr_53441[(14)] = inst_53387);

(statearr_53441[(8)] = inst_53374__$1);

return statearr_53441;
})();
var statearr_53444_55153 = state_53416__$1;
(statearr_53444_55153[(2)] = null);

(statearr_53444_55153[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50274__auto__ = null;
var cljs$core$async$state_machine__50274__auto____0 = (function (){
var statearr_53448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53448[(0)] = cljs$core$async$state_machine__50274__auto__);

(statearr_53448[(1)] = (1));

return statearr_53448;
});
var cljs$core$async$state_machine__50274__auto____1 = (function (state_53416){
while(true){
var ret_value__50275__auto__ = (function (){try{while(true){
var result__50276__auto__ = switch__50273__auto__(state_53416);
if(cljs.core.keyword_identical_QMARK_(result__50276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50276__auto__;
}
break;
}
}catch (e53449){var ex__50277__auto__ = e53449;
var statearr_53450_55164 = state_53416;
(statearr_53450_55164[(2)] = ex__50277__auto__);


if(cljs.core.seq((state_53416[(4)]))){
var statearr_53451_55165 = state_53416;
(statearr_53451_55165[(1)] = cljs.core.first((state_53416[(4)])));

} else {
throw ex__50277__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55166 = state_53416;
state_53416 = G__55166;
continue;
} else {
return ret_value__50275__auto__;
}
break;
}
});
cljs$core$async$state_machine__50274__auto__ = function(state_53416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50274__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50274__auto____1.call(this,state_53416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50274__auto____0;
cljs$core$async$state_machine__50274__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50274__auto____1;
return cljs$core$async$state_machine__50274__auto__;
})()
})();
var state__50723__auto__ = (function (){var statearr_53452 = f__50722__auto__();
(statearr_53452[(6)] = c__50721__auto___55119);

return statearr_53452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50723__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
