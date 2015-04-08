// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t30697 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30697 = (function (f,fn_handler,meta30698){
this.f = f;
this.fn_handler = fn_handler;
this.meta30698 = meta30698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30699){
var self__ = this;
var _30699__$1 = this;
return self__.meta30698;
});

cljs.core.async.t30697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30699,meta30698__$1){
var self__ = this;
var _30699__$1 = this;
return (new cljs.core.async.t30697(self__.f,self__.fn_handler,meta30698__$1));
});

cljs.core.async.t30697.cljs$lang$type = true;

cljs.core.async.t30697.cljs$lang$ctorStr = "cljs.core.async/t30697";

cljs.core.async.t30697.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30697");
});

cljs.core.async.__GT_t30697 = (function __GT_t30697(f__$1,fn_handler__$1,meta30698){
return (new cljs.core.async.t30697(f__$1,fn_handler__$1,meta30698));
});

}

return (new cljs.core.async.t30697(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__30701 = buff;
if(G__30701){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__30701.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30701.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30701);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30701);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30702 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30702);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30702,ret){
return (function (){
return fn1.call(null,val_30702);
});})(val_30702,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__17032__auto___30703 = n;
var x_30704 = (0);
while(true){
if((x_30704 < n__17032__auto___30703)){
(a[x_30704] = (0));

var G__30705 = (x_30704 + (1));
x_30704 = G__30705;
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

var G__30706 = (i + (1));
i = G__30706;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30710 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30710 = (function (flag,alt_flag,meta30711){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30711 = meta30711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30710.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30712){
var self__ = this;
var _30712__$1 = this;
return self__.meta30711;
});})(flag))
;

cljs.core.async.t30710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30712,meta30711__$1){
var self__ = this;
var _30712__$1 = this;
return (new cljs.core.async.t30710(self__.flag,self__.alt_flag,meta30711__$1));
});})(flag))
;

cljs.core.async.t30710.cljs$lang$type = true;

cljs.core.async.t30710.cljs$lang$ctorStr = "cljs.core.async/t30710";

cljs.core.async.t30710.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30710");
});})(flag))
;

cljs.core.async.__GT_t30710 = ((function (flag){
return (function __GT_t30710(flag__$1,alt_flag__$1,meta30711){
return (new cljs.core.async.t30710(flag__$1,alt_flag__$1,meta30711));
});})(flag))
;

}

return (new cljs.core.async.t30710(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t30716 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30716 = (function (cb,flag,alt_handler,meta30717){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30717 = meta30717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30716.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30718){
var self__ = this;
var _30718__$1 = this;
return self__.meta30717;
});

cljs.core.async.t30716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30718,meta30717__$1){
var self__ = this;
var _30718__$1 = this;
return (new cljs.core.async.t30716(self__.cb,self__.flag,self__.alt_handler,meta30717__$1));
});

cljs.core.async.t30716.cljs$lang$type = true;

cljs.core.async.t30716.cljs$lang$ctorStr = "cljs.core.async/t30716";

cljs.core.async.t30716.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30716");
});

cljs.core.async.__GT_t30716 = (function __GT_t30716(cb__$1,flag__$1,alt_handler__$1,meta30717){
return (new cljs.core.async.t30716(cb__$1,flag__$1,alt_handler__$1,meta30717));
});

}

return (new cljs.core.async.t30716(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
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
return (function (p1__30719_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30719_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30720_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30720_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16145__auto__ = wport;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30721 = (i + (1));
i = G__30721;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16145__auto__ = ret;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__16133__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16133__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__30722){
var map__30724 = p__30722;
var map__30724__$1 = ((cljs.core.seq_QMARK_.call(null,map__30724))?cljs.core.apply.call(null,cljs.core.hash_map,map__30724):map__30724);
var opts = map__30724__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30722 = null;
if (arguments.length > 1) {
var G__30725__i = 0, G__30725__a = new Array(arguments.length -  1);
while (G__30725__i < G__30725__a.length) {G__30725__a[G__30725__i] = arguments[G__30725__i + 1]; ++G__30725__i;}
  p__30722 = new cljs.core.IndexedSeq(G__30725__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__30722);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30726){
var ports = cljs.core.first(arglist__30726);
var p__30722 = cljs.core.rest(arglist__30726);
return alts_BANG___delegate(ports,p__30722);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__18620__auto___30821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___30821){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___30821){
return (function (state_30797){
var state_val_30798 = (state_30797[(1)]);
if((state_val_30798 === (7))){
var inst_30793 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30799_30822 = state_30797__$1;
(statearr_30799_30822[(2)] = inst_30793);

(statearr_30799_30822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (1))){
var state_30797__$1 = state_30797;
var statearr_30800_30823 = state_30797__$1;
(statearr_30800_30823[(2)] = null);

(statearr_30800_30823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (4))){
var inst_30776 = (state_30797[(7)]);
var inst_30776__$1 = (state_30797[(2)]);
var inst_30777 = (inst_30776__$1 == null);
var state_30797__$1 = (function (){var statearr_30801 = state_30797;
(statearr_30801[(7)] = inst_30776__$1);

return statearr_30801;
})();
if(cljs.core.truth_(inst_30777)){
var statearr_30802_30824 = state_30797__$1;
(statearr_30802_30824[(1)] = (5));

} else {
var statearr_30803_30825 = state_30797__$1;
(statearr_30803_30825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (13))){
var state_30797__$1 = state_30797;
var statearr_30804_30826 = state_30797__$1;
(statearr_30804_30826[(2)] = null);

(statearr_30804_30826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (6))){
var inst_30776 = (state_30797[(7)]);
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30797__$1,(11),to,inst_30776);
} else {
if((state_val_30798 === (3))){
var inst_30795 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30797__$1,inst_30795);
} else {
if((state_val_30798 === (12))){
var state_30797__$1 = state_30797;
var statearr_30805_30827 = state_30797__$1;
(statearr_30805_30827[(2)] = null);

(statearr_30805_30827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (2))){
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30797__$1,(4),from);
} else {
if((state_val_30798 === (11))){
var inst_30786 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
if(cljs.core.truth_(inst_30786)){
var statearr_30806_30828 = state_30797__$1;
(statearr_30806_30828[(1)] = (12));

} else {
var statearr_30807_30829 = state_30797__$1;
(statearr_30807_30829[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (9))){
var state_30797__$1 = state_30797;
var statearr_30808_30830 = state_30797__$1;
(statearr_30808_30830[(2)] = null);

(statearr_30808_30830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (5))){
var state_30797__$1 = state_30797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30809_30831 = state_30797__$1;
(statearr_30809_30831[(1)] = (8));

} else {
var statearr_30810_30832 = state_30797__$1;
(statearr_30810_30832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (14))){
var inst_30791 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30811_30833 = state_30797__$1;
(statearr_30811_30833[(2)] = inst_30791);

(statearr_30811_30833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (10))){
var inst_30783 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30812_30834 = state_30797__$1;
(statearr_30812_30834[(2)] = inst_30783);

(statearr_30812_30834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (8))){
var inst_30780 = cljs.core.async.close_BANG_.call(null,to);
var state_30797__$1 = state_30797;
var statearr_30813_30835 = state_30797__$1;
(statearr_30813_30835[(2)] = inst_30780);

(statearr_30813_30835[(1)] = (10));


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
});})(c__18620__auto___30821))
;
return ((function (switch__18564__auto__,c__18620__auto___30821){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_30817 = [null,null,null,null,null,null,null,null];
(statearr_30817[(0)] = state_machine__18565__auto__);

(statearr_30817[(1)] = (1));

return statearr_30817;
});
var state_machine__18565__auto____1 = (function (state_30797){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_30797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e30818){if((e30818 instanceof Object)){
var ex__18568__auto__ = e30818;
var statearr_30819_30836 = state_30797;
(statearr_30819_30836[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30837 = state_30797;
state_30797 = G__30837;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_30797){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_30797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___30821))
})();
var state__18622__auto__ = (function (){var statearr_30820 = f__18621__auto__.call(null);
(statearr_30820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___30821);

return statearr_30820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___30821))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31021){
var vec__31022 = p__31021;
var v = cljs.core.nth.call(null,vec__31022,(0),null);
var p = cljs.core.nth.call(null,vec__31022,(1),null);
var job = vec__31022;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18620__auto___31204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___31204,res,vec__31022,v,p,job,jobs,results){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___31204,res,vec__31022,v,p,job,jobs,results){
return (function (state_31027){
var state_val_31028 = (state_31027[(1)]);
if((state_val_31028 === (2))){
var inst_31024 = (state_31027[(2)]);
var inst_31025 = cljs.core.async.close_BANG_.call(null,res);
var state_31027__$1 = (function (){var statearr_31029 = state_31027;
(statearr_31029[(7)] = inst_31024);

return statearr_31029;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31027__$1,inst_31025);
} else {
if((state_val_31028 === (1))){
var state_31027__$1 = state_31027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31027__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18620__auto___31204,res,vec__31022,v,p,job,jobs,results))
;
return ((function (switch__18564__auto__,c__18620__auto___31204,res,vec__31022,v,p,job,jobs,results){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_31033 = [null,null,null,null,null,null,null,null];
(statearr_31033[(0)] = state_machine__18565__auto__);

(statearr_31033[(1)] = (1));

return statearr_31033;
});
var state_machine__18565__auto____1 = (function (state_31027){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_31027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e31034){if((e31034 instanceof Object)){
var ex__18568__auto__ = e31034;
var statearr_31035_31205 = state_31027;
(statearr_31035_31205[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31206 = state_31027;
state_31027 = G__31206;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_31027){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_31027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___31204,res,vec__31022,v,p,job,jobs,results))
})();
var state__18622__auto__ = (function (){var statearr_31036 = f__18621__auto__.call(null);
(statearr_31036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___31204);

return statearr_31036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___31204,res,vec__31022,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31037){
var vec__31038 = p__31037;
var v = cljs.core.nth.call(null,vec__31038,(0),null);
var p = cljs.core.nth.call(null,vec__31038,(1),null);
var job = vec__31038;
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
var n__17032__auto___31207 = n;
var __31208 = (0);
while(true){
if((__31208 < n__17032__auto___31207)){
var G__31039_31209 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31039_31209) {
case "async":
var c__18620__auto___31211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31208,c__18620__auto___31211,G__31039_31209,n__17032__auto___31207,jobs,results,process,async){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (__31208,c__18620__auto___31211,G__31039_31209,n__17032__auto___31207,jobs,results,process,async){
return (function (state_31052){
var state_val_31053 = (state_31052[(1)]);
if((state_val_31053 === (7))){
var inst_31048 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31054_31212 = state_31052__$1;
(statearr_31054_31212[(2)] = inst_31048);

(statearr_31054_31212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (6))){
var state_31052__$1 = state_31052;
var statearr_31055_31213 = state_31052__$1;
(statearr_31055_31213[(2)] = null);

(statearr_31055_31213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (5))){
var state_31052__$1 = state_31052;
var statearr_31056_31214 = state_31052__$1;
(statearr_31056_31214[(2)] = null);

(statearr_31056_31214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (4))){
var inst_31042 = (state_31052[(2)]);
var inst_31043 = async.call(null,inst_31042);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31043)){
var statearr_31057_31215 = state_31052__$1;
(statearr_31057_31215[(1)] = (5));

} else {
var statearr_31058_31216 = state_31052__$1;
(statearr_31058_31216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (3))){
var inst_31050 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31052__$1,inst_31050);
} else {
if((state_val_31053 === (2))){
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(4),jobs);
} else {
if((state_val_31053 === (1))){
var state_31052__$1 = state_31052;
var statearr_31059_31217 = state_31052__$1;
(statearr_31059_31217[(2)] = null);

(statearr_31059_31217[(1)] = (2));


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
});})(__31208,c__18620__auto___31211,G__31039_31209,n__17032__auto___31207,jobs,results,process,async))
;
return ((function (__31208,switch__18564__auto__,c__18620__auto___31211,G__31039_31209,n__17032__auto___31207,jobs,results,process,async){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_31063 = [null,null,null,null,null,null,null];
(statearr_31063[(0)] = state_machine__18565__auto__);

(statearr_31063[(1)] = (1));

return statearr_31063;
});
var state_machine__18565__auto____1 = (function (state_31052){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_31052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e31064){if((e31064 instanceof Object)){
var ex__18568__auto__ = e31064;
var statearr_31065_31218 = state_31052;
(statearr_31065_31218[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31219 = state_31052;
state_31052 = G__31219;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_31052){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_31052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(__31208,switch__18564__auto__,c__18620__auto___31211,G__31039_31209,n__17032__auto___31207,jobs,results,process,async))
})();
var state__18622__auto__ = (function (){var statearr_31066 = f__18621__auto__.call(null);
(statearr_31066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___31211);

return statearr_31066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(__31208,c__18620__auto___31211,G__31039_31209,n__17032__auto___31207,jobs,results,process,async))
);


break;
case "compute":
var c__18620__auto___31220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31208,c__18620__auto___31220,G__31039_31209,n__17032__auto___31207,jobs,results,process,async){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (__31208,c__18620__auto___31220,G__31039_31209,n__17032__auto___31207,jobs,results,process,async){
return (function (state_31079){
var state_val_31080 = (state_31079[(1)]);
if((state_val_31080 === (7))){
var inst_31075 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31081_31221 = state_31079__$1;
(statearr_31081_31221[(2)] = inst_31075);

(statearr_31081_31221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (6))){
var state_31079__$1 = state_31079;
var statearr_31082_31222 = state_31079__$1;
(statearr_31082_31222[(2)] = null);

(statearr_31082_31222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (5))){
var state_31079__$1 = state_31079;
var statearr_31083_31223 = state_31079__$1;
(statearr_31083_31223[(2)] = null);

(statearr_31083_31223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (4))){
var inst_31069 = (state_31079[(2)]);
var inst_31070 = process.call(null,inst_31069);
var state_31079__$1 = state_31079;
if(cljs.core.truth_(inst_31070)){
var statearr_31084_31224 = state_31079__$1;
(statearr_31084_31224[(1)] = (5));

} else {
var statearr_31085_31225 = state_31079__$1;
(statearr_31085_31225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (3))){
var inst_31077 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31079__$1,inst_31077);
} else {
if((state_val_31080 === (2))){
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31079__$1,(4),jobs);
} else {
if((state_val_31080 === (1))){
var state_31079__$1 = state_31079;
var statearr_31086_31226 = state_31079__$1;
(statearr_31086_31226[(2)] = null);

(statearr_31086_31226[(1)] = (2));


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
});})(__31208,c__18620__auto___31220,G__31039_31209,n__17032__auto___31207,jobs,results,process,async))
;
return ((function (__31208,switch__18564__auto__,c__18620__auto___31220,G__31039_31209,n__17032__auto___31207,jobs,results,process,async){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_31090 = [null,null,null,null,null,null,null];
(statearr_31090[(0)] = state_machine__18565__auto__);

(statearr_31090[(1)] = (1));

return statearr_31090;
});
var state_machine__18565__auto____1 = (function (state_31079){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_31079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e31091){if((e31091 instanceof Object)){
var ex__18568__auto__ = e31091;
var statearr_31092_31227 = state_31079;
(statearr_31092_31227[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31228 = state_31079;
state_31079 = G__31228;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_31079){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_31079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(__31208,switch__18564__auto__,c__18620__auto___31220,G__31039_31209,n__17032__auto___31207,jobs,results,process,async))
})();
var state__18622__auto__ = (function (){var statearr_31093 = f__18621__auto__.call(null);
(statearr_31093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___31220);

return statearr_31093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(__31208,c__18620__auto___31220,G__31039_31209,n__17032__auto___31207,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31229 = (__31208 + (1));
__31208 = G__31229;
continue;
} else {
}
break;
}

var c__18620__auto___31230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___31230,jobs,results,process,async){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___31230,jobs,results,process,async){
return (function (state_31115){
var state_val_31116 = (state_31115[(1)]);
if((state_val_31116 === (9))){
var inst_31108 = (state_31115[(2)]);
var state_31115__$1 = (function (){var statearr_31117 = state_31115;
(statearr_31117[(7)] = inst_31108);

return statearr_31117;
})();
var statearr_31118_31231 = state_31115__$1;
(statearr_31118_31231[(2)] = null);

(statearr_31118_31231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (8))){
var inst_31101 = (state_31115[(8)]);
var inst_31106 = (state_31115[(2)]);
var state_31115__$1 = (function (){var statearr_31119 = state_31115;
(statearr_31119[(9)] = inst_31106);

return statearr_31119;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31115__$1,(9),results,inst_31101);
} else {
if((state_val_31116 === (7))){
var inst_31111 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31120_31232 = state_31115__$1;
(statearr_31120_31232[(2)] = inst_31111);

(statearr_31120_31232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (6))){
var inst_31096 = (state_31115[(10)]);
var inst_31101 = (state_31115[(8)]);
var inst_31101__$1 = cljs.core.async.chan.call(null,(1));
var inst_31102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31103 = [inst_31096,inst_31101__$1];
var inst_31104 = (new cljs.core.PersistentVector(null,2,(5),inst_31102,inst_31103,null));
var state_31115__$1 = (function (){var statearr_31121 = state_31115;
(statearr_31121[(8)] = inst_31101__$1);

return statearr_31121;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31115__$1,(8),jobs,inst_31104);
} else {
if((state_val_31116 === (5))){
var inst_31099 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31115__$1 = state_31115;
var statearr_31122_31233 = state_31115__$1;
(statearr_31122_31233[(2)] = inst_31099);

(statearr_31122_31233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (4))){
var inst_31096 = (state_31115[(10)]);
var inst_31096__$1 = (state_31115[(2)]);
var inst_31097 = (inst_31096__$1 == null);
var state_31115__$1 = (function (){var statearr_31123 = state_31115;
(statearr_31123[(10)] = inst_31096__$1);

return statearr_31123;
})();
if(cljs.core.truth_(inst_31097)){
var statearr_31124_31234 = state_31115__$1;
(statearr_31124_31234[(1)] = (5));

} else {
var statearr_31125_31235 = state_31115__$1;
(statearr_31125_31235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (3))){
var inst_31113 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31115__$1,inst_31113);
} else {
if((state_val_31116 === (2))){
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31115__$1,(4),from);
} else {
if((state_val_31116 === (1))){
var state_31115__$1 = state_31115;
var statearr_31126_31236 = state_31115__$1;
(statearr_31126_31236[(2)] = null);

(statearr_31126_31236[(1)] = (2));


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
});})(c__18620__auto___31230,jobs,results,process,async))
;
return ((function (switch__18564__auto__,c__18620__auto___31230,jobs,results,process,async){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_31130 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31130[(0)] = state_machine__18565__auto__);

(statearr_31130[(1)] = (1));

return statearr_31130;
});
var state_machine__18565__auto____1 = (function (state_31115){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_31115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e31131){if((e31131 instanceof Object)){
var ex__18568__auto__ = e31131;
var statearr_31132_31237 = state_31115;
(statearr_31132_31237[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31238 = state_31115;
state_31115 = G__31238;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_31115){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_31115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___31230,jobs,results,process,async))
})();
var state__18622__auto__ = (function (){var statearr_31133 = f__18621__auto__.call(null);
(statearr_31133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___31230);

return statearr_31133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___31230,jobs,results,process,async))
);


var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__,jobs,results,process,async){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__,jobs,results,process,async){
return (function (state_31171){
var state_val_31172 = (state_31171[(1)]);
if((state_val_31172 === (7))){
var inst_31167 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
var statearr_31173_31239 = state_31171__$1;
(statearr_31173_31239[(2)] = inst_31167);

(statearr_31173_31239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (20))){
var state_31171__$1 = state_31171;
var statearr_31174_31240 = state_31171__$1;
(statearr_31174_31240[(2)] = null);

(statearr_31174_31240[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (1))){
var state_31171__$1 = state_31171;
var statearr_31175_31241 = state_31171__$1;
(statearr_31175_31241[(2)] = null);

(statearr_31175_31241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (4))){
var inst_31136 = (state_31171[(7)]);
var inst_31136__$1 = (state_31171[(2)]);
var inst_31137 = (inst_31136__$1 == null);
var state_31171__$1 = (function (){var statearr_31176 = state_31171;
(statearr_31176[(7)] = inst_31136__$1);

return statearr_31176;
})();
if(cljs.core.truth_(inst_31137)){
var statearr_31177_31242 = state_31171__$1;
(statearr_31177_31242[(1)] = (5));

} else {
var statearr_31178_31243 = state_31171__$1;
(statearr_31178_31243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (15))){
var inst_31149 = (state_31171[(8)]);
var state_31171__$1 = state_31171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31171__$1,(18),to,inst_31149);
} else {
if((state_val_31172 === (21))){
var inst_31162 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
var statearr_31179_31244 = state_31171__$1;
(statearr_31179_31244[(2)] = inst_31162);

(statearr_31179_31244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (13))){
var inst_31164 = (state_31171[(2)]);
var state_31171__$1 = (function (){var statearr_31180 = state_31171;
(statearr_31180[(9)] = inst_31164);

return statearr_31180;
})();
var statearr_31181_31245 = state_31171__$1;
(statearr_31181_31245[(2)] = null);

(statearr_31181_31245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (6))){
var inst_31136 = (state_31171[(7)]);
var state_31171__$1 = state_31171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31171__$1,(11),inst_31136);
} else {
if((state_val_31172 === (17))){
var inst_31157 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
if(cljs.core.truth_(inst_31157)){
var statearr_31182_31246 = state_31171__$1;
(statearr_31182_31246[(1)] = (19));

} else {
var statearr_31183_31247 = state_31171__$1;
(statearr_31183_31247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (3))){
var inst_31169 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31171__$1,inst_31169);
} else {
if((state_val_31172 === (12))){
var inst_31146 = (state_31171[(10)]);
var state_31171__$1 = state_31171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31171__$1,(14),inst_31146);
} else {
if((state_val_31172 === (2))){
var state_31171__$1 = state_31171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31171__$1,(4),results);
} else {
if((state_val_31172 === (19))){
var state_31171__$1 = state_31171;
var statearr_31184_31248 = state_31171__$1;
(statearr_31184_31248[(2)] = null);

(statearr_31184_31248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (11))){
var inst_31146 = (state_31171[(2)]);
var state_31171__$1 = (function (){var statearr_31185 = state_31171;
(statearr_31185[(10)] = inst_31146);

return statearr_31185;
})();
var statearr_31186_31249 = state_31171__$1;
(statearr_31186_31249[(2)] = null);

(statearr_31186_31249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (9))){
var state_31171__$1 = state_31171;
var statearr_31187_31250 = state_31171__$1;
(statearr_31187_31250[(2)] = null);

(statearr_31187_31250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (5))){
var state_31171__$1 = state_31171;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31188_31251 = state_31171__$1;
(statearr_31188_31251[(1)] = (8));

} else {
var statearr_31189_31252 = state_31171__$1;
(statearr_31189_31252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (14))){
var inst_31151 = (state_31171[(11)]);
var inst_31149 = (state_31171[(8)]);
var inst_31149__$1 = (state_31171[(2)]);
var inst_31150 = (inst_31149__$1 == null);
var inst_31151__$1 = cljs.core.not.call(null,inst_31150);
var state_31171__$1 = (function (){var statearr_31190 = state_31171;
(statearr_31190[(11)] = inst_31151__$1);

(statearr_31190[(8)] = inst_31149__$1);

return statearr_31190;
})();
if(inst_31151__$1){
var statearr_31191_31253 = state_31171__$1;
(statearr_31191_31253[(1)] = (15));

} else {
var statearr_31192_31254 = state_31171__$1;
(statearr_31192_31254[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (16))){
var inst_31151 = (state_31171[(11)]);
var state_31171__$1 = state_31171;
var statearr_31193_31255 = state_31171__$1;
(statearr_31193_31255[(2)] = inst_31151);

(statearr_31193_31255[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (10))){
var inst_31143 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
var statearr_31194_31256 = state_31171__$1;
(statearr_31194_31256[(2)] = inst_31143);

(statearr_31194_31256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (18))){
var inst_31154 = (state_31171[(2)]);
var state_31171__$1 = state_31171;
var statearr_31195_31257 = state_31171__$1;
(statearr_31195_31257[(2)] = inst_31154);

(statearr_31195_31257[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (8))){
var inst_31140 = cljs.core.async.close_BANG_.call(null,to);
var state_31171__$1 = state_31171;
var statearr_31196_31258 = state_31171__$1;
(statearr_31196_31258[(2)] = inst_31140);

(statearr_31196_31258[(1)] = (10));


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
});})(c__18620__auto__,jobs,results,process,async))
;
return ((function (switch__18564__auto__,c__18620__auto__,jobs,results,process,async){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_31200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31200[(0)] = state_machine__18565__auto__);

(statearr_31200[(1)] = (1));

return statearr_31200;
});
var state_machine__18565__auto____1 = (function (state_31171){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_31171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e31201){if((e31201 instanceof Object)){
var ex__18568__auto__ = e31201;
var statearr_31202_31259 = state_31171;
(statearr_31202_31259[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31260 = state_31171;
state_31171 = G__31260;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_31171){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_31171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__,jobs,results,process,async))
})();
var state__18622__auto__ = (function (){var statearr_31203 = f__18621__auto__.call(null);
(statearr_31203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_31203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__,jobs,results,process,async))
);

return c__18620__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18620__auto___31361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___31361,tc,fc){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___31361,tc,fc){
return (function (state_31336){
var state_val_31337 = (state_31336[(1)]);
if((state_val_31337 === (7))){
var inst_31332 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31338_31362 = state_31336__$1;
(statearr_31338_31362[(2)] = inst_31332);

(statearr_31338_31362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (1))){
var state_31336__$1 = state_31336;
var statearr_31339_31363 = state_31336__$1;
(statearr_31339_31363[(2)] = null);

(statearr_31339_31363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (4))){
var inst_31313 = (state_31336[(7)]);
var inst_31313__$1 = (state_31336[(2)]);
var inst_31314 = (inst_31313__$1 == null);
var state_31336__$1 = (function (){var statearr_31340 = state_31336;
(statearr_31340[(7)] = inst_31313__$1);

return statearr_31340;
})();
if(cljs.core.truth_(inst_31314)){
var statearr_31341_31364 = state_31336__$1;
(statearr_31341_31364[(1)] = (5));

} else {
var statearr_31342_31365 = state_31336__$1;
(statearr_31342_31365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (13))){
var state_31336__$1 = state_31336;
var statearr_31343_31366 = state_31336__$1;
(statearr_31343_31366[(2)] = null);

(statearr_31343_31366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (6))){
var inst_31313 = (state_31336[(7)]);
var inst_31319 = p.call(null,inst_31313);
var state_31336__$1 = state_31336;
if(cljs.core.truth_(inst_31319)){
var statearr_31344_31367 = state_31336__$1;
(statearr_31344_31367[(1)] = (9));

} else {
var statearr_31345_31368 = state_31336__$1;
(statearr_31345_31368[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (3))){
var inst_31334 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31336__$1,inst_31334);
} else {
if((state_val_31337 === (12))){
var state_31336__$1 = state_31336;
var statearr_31346_31369 = state_31336__$1;
(statearr_31346_31369[(2)] = null);

(statearr_31346_31369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (2))){
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31336__$1,(4),ch);
} else {
if((state_val_31337 === (11))){
var inst_31313 = (state_31336[(7)]);
var inst_31323 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31336__$1,(8),inst_31323,inst_31313);
} else {
if((state_val_31337 === (9))){
var state_31336__$1 = state_31336;
var statearr_31347_31370 = state_31336__$1;
(statearr_31347_31370[(2)] = tc);

(statearr_31347_31370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (5))){
var inst_31316 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31317 = cljs.core.async.close_BANG_.call(null,fc);
var state_31336__$1 = (function (){var statearr_31348 = state_31336;
(statearr_31348[(8)] = inst_31316);

return statearr_31348;
})();
var statearr_31349_31371 = state_31336__$1;
(statearr_31349_31371[(2)] = inst_31317);

(statearr_31349_31371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (14))){
var inst_31330 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
var statearr_31350_31372 = state_31336__$1;
(statearr_31350_31372[(2)] = inst_31330);

(statearr_31350_31372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (10))){
var state_31336__$1 = state_31336;
var statearr_31351_31373 = state_31336__$1;
(statearr_31351_31373[(2)] = fc);

(statearr_31351_31373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31337 === (8))){
var inst_31325 = (state_31336[(2)]);
var state_31336__$1 = state_31336;
if(cljs.core.truth_(inst_31325)){
var statearr_31352_31374 = state_31336__$1;
(statearr_31352_31374[(1)] = (12));

} else {
var statearr_31353_31375 = state_31336__$1;
(statearr_31353_31375[(1)] = (13));

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
});})(c__18620__auto___31361,tc,fc))
;
return ((function (switch__18564__auto__,c__18620__auto___31361,tc,fc){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_31357 = [null,null,null,null,null,null,null,null,null];
(statearr_31357[(0)] = state_machine__18565__auto__);

(statearr_31357[(1)] = (1));

return statearr_31357;
});
var state_machine__18565__auto____1 = (function (state_31336){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_31336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e31358){if((e31358 instanceof Object)){
var ex__18568__auto__ = e31358;
var statearr_31359_31376 = state_31336;
(statearr_31359_31376[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31377 = state_31336;
state_31336 = G__31377;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_31336){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_31336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___31361,tc,fc))
})();
var state__18622__auto__ = (function (){var statearr_31360 = f__18621__auto__.call(null);
(statearr_31360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___31361);

return statearr_31360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___31361,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__){
return (function (state_31424){
var state_val_31425 = (state_31424[(1)]);
if((state_val_31425 === (7))){
var inst_31420 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31426_31442 = state_31424__$1;
(statearr_31426_31442[(2)] = inst_31420);

(statearr_31426_31442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (6))){
var inst_31410 = (state_31424[(7)]);
var inst_31413 = (state_31424[(8)]);
var inst_31417 = f.call(null,inst_31410,inst_31413);
var inst_31410__$1 = inst_31417;
var state_31424__$1 = (function (){var statearr_31427 = state_31424;
(statearr_31427[(7)] = inst_31410__$1);

return statearr_31427;
})();
var statearr_31428_31443 = state_31424__$1;
(statearr_31428_31443[(2)] = null);

(statearr_31428_31443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (5))){
var inst_31410 = (state_31424[(7)]);
var state_31424__$1 = state_31424;
var statearr_31429_31444 = state_31424__$1;
(statearr_31429_31444[(2)] = inst_31410);

(statearr_31429_31444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (4))){
var inst_31413 = (state_31424[(8)]);
var inst_31413__$1 = (state_31424[(2)]);
var inst_31414 = (inst_31413__$1 == null);
var state_31424__$1 = (function (){var statearr_31430 = state_31424;
(statearr_31430[(8)] = inst_31413__$1);

return statearr_31430;
})();
if(cljs.core.truth_(inst_31414)){
var statearr_31431_31445 = state_31424__$1;
(statearr_31431_31445[(1)] = (5));

} else {
var statearr_31432_31446 = state_31424__$1;
(statearr_31432_31446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (3))){
var inst_31422 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31424__$1,inst_31422);
} else {
if((state_val_31425 === (2))){
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(4),ch);
} else {
if((state_val_31425 === (1))){
var inst_31410 = init;
var state_31424__$1 = (function (){var statearr_31433 = state_31424;
(statearr_31433[(7)] = inst_31410);

return statearr_31433;
})();
var statearr_31434_31447 = state_31424__$1;
(statearr_31434_31447[(2)] = null);

(statearr_31434_31447[(1)] = (2));


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
});})(c__18620__auto__))
;
return ((function (switch__18564__auto__,c__18620__auto__){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_31438 = [null,null,null,null,null,null,null,null,null];
(statearr_31438[(0)] = state_machine__18565__auto__);

(statearr_31438[(1)] = (1));

return statearr_31438;
});
var state_machine__18565__auto____1 = (function (state_31424){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_31424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e31439){if((e31439 instanceof Object)){
var ex__18568__auto__ = e31439;
var statearr_31440_31448 = state_31424;
(statearr_31440_31448[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31449 = state_31424;
state_31424 = G__31449;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_31424){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_31424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__))
})();
var state__18622__auto__ = (function (){var statearr_31441 = f__18621__auto__.call(null);
(statearr_31441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_31441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__))
);

return c__18620__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__){
return (function (state_31523){
var state_val_31524 = (state_31523[(1)]);
if((state_val_31524 === (7))){
var inst_31505 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31525_31548 = state_31523__$1;
(statearr_31525_31548[(2)] = inst_31505);

(statearr_31525_31548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (1))){
var inst_31499 = cljs.core.seq.call(null,coll);
var inst_31500 = inst_31499;
var state_31523__$1 = (function (){var statearr_31526 = state_31523;
(statearr_31526[(7)] = inst_31500);

return statearr_31526;
})();
var statearr_31527_31549 = state_31523__$1;
(statearr_31527_31549[(2)] = null);

(statearr_31527_31549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (4))){
var inst_31500 = (state_31523[(7)]);
var inst_31503 = cljs.core.first.call(null,inst_31500);
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31523__$1,(7),ch,inst_31503);
} else {
if((state_val_31524 === (13))){
var inst_31517 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31528_31550 = state_31523__$1;
(statearr_31528_31550[(2)] = inst_31517);

(statearr_31528_31550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (6))){
var inst_31508 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
if(cljs.core.truth_(inst_31508)){
var statearr_31529_31551 = state_31523__$1;
(statearr_31529_31551[(1)] = (8));

} else {
var statearr_31530_31552 = state_31523__$1;
(statearr_31530_31552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (3))){
var inst_31521 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31523__$1,inst_31521);
} else {
if((state_val_31524 === (12))){
var state_31523__$1 = state_31523;
var statearr_31531_31553 = state_31523__$1;
(statearr_31531_31553[(2)] = null);

(statearr_31531_31553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (2))){
var inst_31500 = (state_31523[(7)]);
var state_31523__$1 = state_31523;
if(cljs.core.truth_(inst_31500)){
var statearr_31532_31554 = state_31523__$1;
(statearr_31532_31554[(1)] = (4));

} else {
var statearr_31533_31555 = state_31523__$1;
(statearr_31533_31555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (11))){
var inst_31514 = cljs.core.async.close_BANG_.call(null,ch);
var state_31523__$1 = state_31523;
var statearr_31534_31556 = state_31523__$1;
(statearr_31534_31556[(2)] = inst_31514);

(statearr_31534_31556[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (9))){
var state_31523__$1 = state_31523;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31535_31557 = state_31523__$1;
(statearr_31535_31557[(1)] = (11));

} else {
var statearr_31536_31558 = state_31523__$1;
(statearr_31536_31558[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (5))){
var inst_31500 = (state_31523[(7)]);
var state_31523__$1 = state_31523;
var statearr_31537_31559 = state_31523__$1;
(statearr_31537_31559[(2)] = inst_31500);

(statearr_31537_31559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (10))){
var inst_31519 = (state_31523[(2)]);
var state_31523__$1 = state_31523;
var statearr_31538_31560 = state_31523__$1;
(statearr_31538_31560[(2)] = inst_31519);

(statearr_31538_31560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31524 === (8))){
var inst_31500 = (state_31523[(7)]);
var inst_31510 = cljs.core.next.call(null,inst_31500);
var inst_31500__$1 = inst_31510;
var state_31523__$1 = (function (){var statearr_31539 = state_31523;
(statearr_31539[(7)] = inst_31500__$1);

return statearr_31539;
})();
var statearr_31540_31561 = state_31523__$1;
(statearr_31540_31561[(2)] = null);

(statearr_31540_31561[(1)] = (2));


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
});})(c__18620__auto__))
;
return ((function (switch__18564__auto__,c__18620__auto__){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_31544 = [null,null,null,null,null,null,null,null];
(statearr_31544[(0)] = state_machine__18565__auto__);

(statearr_31544[(1)] = (1));

return statearr_31544;
});
var state_machine__18565__auto____1 = (function (state_31523){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_31523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e31545){if((e31545 instanceof Object)){
var ex__18568__auto__ = e31545;
var statearr_31546_31562 = state_31523;
(statearr_31546_31562[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31563 = state_31523;
state_31523 = G__31563;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_31523){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_31523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__))
})();
var state__18622__auto__ = (function (){var statearr_31547 = f__18621__auto__.call(null);
(statearr_31547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_31547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__))
);

return c__18620__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj31565 = {};
return obj31565;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__16133__auto__ = _;
if(and__16133__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16789__auto__ = (((_ == null))?null:_);
return (function (){var or__16145__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj31567 = {};
return obj31567;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t31789 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31789 = (function (cs,ch,mult,meta31790){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31790 = meta31790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31789.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31789.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31789.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31789.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31789.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31791){
var self__ = this;
var _31791__$1 = this;
return self__.meta31790;
});})(cs))
;

cljs.core.async.t31789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31791,meta31790__$1){
var self__ = this;
var _31791__$1 = this;
return (new cljs.core.async.t31789(self__.cs,self__.ch,self__.mult,meta31790__$1));
});})(cs))
;

cljs.core.async.t31789.cljs$lang$type = true;

cljs.core.async.t31789.cljs$lang$ctorStr = "cljs.core.async/t31789";

cljs.core.async.t31789.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31789");
});})(cs))
;

cljs.core.async.__GT_t31789 = ((function (cs){
return (function __GT_t31789(cs__$1,ch__$1,mult__$1,meta31790){
return (new cljs.core.async.t31789(cs__$1,ch__$1,mult__$1,meta31790));
});})(cs))
;

}

return (new cljs.core.async.t31789(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18620__auto___32010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___32010,cs,m,dchan,dctr,done){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___32010,cs,m,dchan,dctr,done){
return (function (state_31922){
var state_val_31923 = (state_31922[(1)]);
if((state_val_31923 === (7))){
var inst_31918 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31924_32011 = state_31922__$1;
(statearr_31924_32011[(2)] = inst_31918);

(statearr_31924_32011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (20))){
var inst_31823 = (state_31922[(7)]);
var inst_31833 = cljs.core.first.call(null,inst_31823);
var inst_31834 = cljs.core.nth.call(null,inst_31833,(0),null);
var inst_31835 = cljs.core.nth.call(null,inst_31833,(1),null);
var state_31922__$1 = (function (){var statearr_31925 = state_31922;
(statearr_31925[(8)] = inst_31834);

return statearr_31925;
})();
if(cljs.core.truth_(inst_31835)){
var statearr_31926_32012 = state_31922__$1;
(statearr_31926_32012[(1)] = (22));

} else {
var statearr_31927_32013 = state_31922__$1;
(statearr_31927_32013[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (27))){
var inst_31863 = (state_31922[(9)]);
var inst_31794 = (state_31922[(10)]);
var inst_31870 = (state_31922[(11)]);
var inst_31865 = (state_31922[(12)]);
var inst_31870__$1 = cljs.core._nth.call(null,inst_31863,inst_31865);
var inst_31871 = cljs.core.async.put_BANG_.call(null,inst_31870__$1,inst_31794,done);
var state_31922__$1 = (function (){var statearr_31928 = state_31922;
(statearr_31928[(11)] = inst_31870__$1);

return statearr_31928;
})();
if(cljs.core.truth_(inst_31871)){
var statearr_31929_32014 = state_31922__$1;
(statearr_31929_32014[(1)] = (30));

} else {
var statearr_31930_32015 = state_31922__$1;
(statearr_31930_32015[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (1))){
var state_31922__$1 = state_31922;
var statearr_31931_32016 = state_31922__$1;
(statearr_31931_32016[(2)] = null);

(statearr_31931_32016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (24))){
var inst_31823 = (state_31922[(7)]);
var inst_31840 = (state_31922[(2)]);
var inst_31841 = cljs.core.next.call(null,inst_31823);
var inst_31803 = inst_31841;
var inst_31804 = null;
var inst_31805 = (0);
var inst_31806 = (0);
var state_31922__$1 = (function (){var statearr_31932 = state_31922;
(statearr_31932[(13)] = inst_31803);

(statearr_31932[(14)] = inst_31805);

(statearr_31932[(15)] = inst_31806);

(statearr_31932[(16)] = inst_31840);

(statearr_31932[(17)] = inst_31804);

return statearr_31932;
})();
var statearr_31933_32017 = state_31922__$1;
(statearr_31933_32017[(2)] = null);

(statearr_31933_32017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (39))){
var state_31922__$1 = state_31922;
var statearr_31937_32018 = state_31922__$1;
(statearr_31937_32018[(2)] = null);

(statearr_31937_32018[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (4))){
var inst_31794 = (state_31922[(10)]);
var inst_31794__$1 = (state_31922[(2)]);
var inst_31795 = (inst_31794__$1 == null);
var state_31922__$1 = (function (){var statearr_31938 = state_31922;
(statearr_31938[(10)] = inst_31794__$1);

return statearr_31938;
})();
if(cljs.core.truth_(inst_31795)){
var statearr_31939_32019 = state_31922__$1;
(statearr_31939_32019[(1)] = (5));

} else {
var statearr_31940_32020 = state_31922__$1;
(statearr_31940_32020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (15))){
var inst_31803 = (state_31922[(13)]);
var inst_31805 = (state_31922[(14)]);
var inst_31806 = (state_31922[(15)]);
var inst_31804 = (state_31922[(17)]);
var inst_31819 = (state_31922[(2)]);
var inst_31820 = (inst_31806 + (1));
var tmp31934 = inst_31803;
var tmp31935 = inst_31805;
var tmp31936 = inst_31804;
var inst_31803__$1 = tmp31934;
var inst_31804__$1 = tmp31936;
var inst_31805__$1 = tmp31935;
var inst_31806__$1 = inst_31820;
var state_31922__$1 = (function (){var statearr_31941 = state_31922;
(statearr_31941[(13)] = inst_31803__$1);

(statearr_31941[(14)] = inst_31805__$1);

(statearr_31941[(15)] = inst_31806__$1);

(statearr_31941[(18)] = inst_31819);

(statearr_31941[(17)] = inst_31804__$1);

return statearr_31941;
})();
var statearr_31942_32021 = state_31922__$1;
(statearr_31942_32021[(2)] = null);

(statearr_31942_32021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (21))){
var inst_31844 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31946_32022 = state_31922__$1;
(statearr_31946_32022[(2)] = inst_31844);

(statearr_31946_32022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (31))){
var inst_31870 = (state_31922[(11)]);
var inst_31874 = done.call(null,null);
var inst_31875 = cljs.core.async.untap_STAR_.call(null,m,inst_31870);
var state_31922__$1 = (function (){var statearr_31947 = state_31922;
(statearr_31947[(19)] = inst_31874);

return statearr_31947;
})();
var statearr_31948_32023 = state_31922__$1;
(statearr_31948_32023[(2)] = inst_31875);

(statearr_31948_32023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (32))){
var inst_31862 = (state_31922[(20)]);
var inst_31864 = (state_31922[(21)]);
var inst_31863 = (state_31922[(9)]);
var inst_31865 = (state_31922[(12)]);
var inst_31877 = (state_31922[(2)]);
var inst_31878 = (inst_31865 + (1));
var tmp31943 = inst_31862;
var tmp31944 = inst_31864;
var tmp31945 = inst_31863;
var inst_31862__$1 = tmp31943;
var inst_31863__$1 = tmp31945;
var inst_31864__$1 = tmp31944;
var inst_31865__$1 = inst_31878;
var state_31922__$1 = (function (){var statearr_31949 = state_31922;
(statearr_31949[(20)] = inst_31862__$1);

(statearr_31949[(21)] = inst_31864__$1);

(statearr_31949[(9)] = inst_31863__$1);

(statearr_31949[(22)] = inst_31877);

(statearr_31949[(12)] = inst_31865__$1);

return statearr_31949;
})();
var statearr_31950_32024 = state_31922__$1;
(statearr_31950_32024[(2)] = null);

(statearr_31950_32024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (40))){
var inst_31890 = (state_31922[(23)]);
var inst_31894 = done.call(null,null);
var inst_31895 = cljs.core.async.untap_STAR_.call(null,m,inst_31890);
var state_31922__$1 = (function (){var statearr_31951 = state_31922;
(statearr_31951[(24)] = inst_31894);

return statearr_31951;
})();
var statearr_31952_32025 = state_31922__$1;
(statearr_31952_32025[(2)] = inst_31895);

(statearr_31952_32025[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (33))){
var inst_31881 = (state_31922[(25)]);
var inst_31883 = cljs.core.chunked_seq_QMARK_.call(null,inst_31881);
var state_31922__$1 = state_31922;
if(inst_31883){
var statearr_31953_32026 = state_31922__$1;
(statearr_31953_32026[(1)] = (36));

} else {
var statearr_31954_32027 = state_31922__$1;
(statearr_31954_32027[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (13))){
var inst_31813 = (state_31922[(26)]);
var inst_31816 = cljs.core.async.close_BANG_.call(null,inst_31813);
var state_31922__$1 = state_31922;
var statearr_31955_32028 = state_31922__$1;
(statearr_31955_32028[(2)] = inst_31816);

(statearr_31955_32028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (22))){
var inst_31834 = (state_31922[(8)]);
var inst_31837 = cljs.core.async.close_BANG_.call(null,inst_31834);
var state_31922__$1 = state_31922;
var statearr_31956_32029 = state_31922__$1;
(statearr_31956_32029[(2)] = inst_31837);

(statearr_31956_32029[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (36))){
var inst_31881 = (state_31922[(25)]);
var inst_31885 = cljs.core.chunk_first.call(null,inst_31881);
var inst_31886 = cljs.core.chunk_rest.call(null,inst_31881);
var inst_31887 = cljs.core.count.call(null,inst_31885);
var inst_31862 = inst_31886;
var inst_31863 = inst_31885;
var inst_31864 = inst_31887;
var inst_31865 = (0);
var state_31922__$1 = (function (){var statearr_31957 = state_31922;
(statearr_31957[(20)] = inst_31862);

(statearr_31957[(21)] = inst_31864);

(statearr_31957[(9)] = inst_31863);

(statearr_31957[(12)] = inst_31865);

return statearr_31957;
})();
var statearr_31958_32030 = state_31922__$1;
(statearr_31958_32030[(2)] = null);

(statearr_31958_32030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (41))){
var inst_31881 = (state_31922[(25)]);
var inst_31897 = (state_31922[(2)]);
var inst_31898 = cljs.core.next.call(null,inst_31881);
var inst_31862 = inst_31898;
var inst_31863 = null;
var inst_31864 = (0);
var inst_31865 = (0);
var state_31922__$1 = (function (){var statearr_31959 = state_31922;
(statearr_31959[(20)] = inst_31862);

(statearr_31959[(21)] = inst_31864);

(statearr_31959[(9)] = inst_31863);

(statearr_31959[(27)] = inst_31897);

(statearr_31959[(12)] = inst_31865);

return statearr_31959;
})();
var statearr_31960_32031 = state_31922__$1;
(statearr_31960_32031[(2)] = null);

(statearr_31960_32031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (43))){
var state_31922__$1 = state_31922;
var statearr_31961_32032 = state_31922__$1;
(statearr_31961_32032[(2)] = null);

(statearr_31961_32032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (29))){
var inst_31906 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31962_32033 = state_31922__$1;
(statearr_31962_32033[(2)] = inst_31906);

(statearr_31962_32033[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (44))){
var inst_31915 = (state_31922[(2)]);
var state_31922__$1 = (function (){var statearr_31963 = state_31922;
(statearr_31963[(28)] = inst_31915);

return statearr_31963;
})();
var statearr_31964_32034 = state_31922__$1;
(statearr_31964_32034[(2)] = null);

(statearr_31964_32034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (6))){
var inst_31854 = (state_31922[(29)]);
var inst_31853 = cljs.core.deref.call(null,cs);
var inst_31854__$1 = cljs.core.keys.call(null,inst_31853);
var inst_31855 = cljs.core.count.call(null,inst_31854__$1);
var inst_31856 = cljs.core.reset_BANG_.call(null,dctr,inst_31855);
var inst_31861 = cljs.core.seq.call(null,inst_31854__$1);
var inst_31862 = inst_31861;
var inst_31863 = null;
var inst_31864 = (0);
var inst_31865 = (0);
var state_31922__$1 = (function (){var statearr_31965 = state_31922;
(statearr_31965[(20)] = inst_31862);

(statearr_31965[(30)] = inst_31856);

(statearr_31965[(21)] = inst_31864);

(statearr_31965[(9)] = inst_31863);

(statearr_31965[(29)] = inst_31854__$1);

(statearr_31965[(12)] = inst_31865);

return statearr_31965;
})();
var statearr_31966_32035 = state_31922__$1;
(statearr_31966_32035[(2)] = null);

(statearr_31966_32035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (28))){
var inst_31862 = (state_31922[(20)]);
var inst_31881 = (state_31922[(25)]);
var inst_31881__$1 = cljs.core.seq.call(null,inst_31862);
var state_31922__$1 = (function (){var statearr_31967 = state_31922;
(statearr_31967[(25)] = inst_31881__$1);

return statearr_31967;
})();
if(inst_31881__$1){
var statearr_31968_32036 = state_31922__$1;
(statearr_31968_32036[(1)] = (33));

} else {
var statearr_31969_32037 = state_31922__$1;
(statearr_31969_32037[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (25))){
var inst_31864 = (state_31922[(21)]);
var inst_31865 = (state_31922[(12)]);
var inst_31867 = (inst_31865 < inst_31864);
var inst_31868 = inst_31867;
var state_31922__$1 = state_31922;
if(cljs.core.truth_(inst_31868)){
var statearr_31970_32038 = state_31922__$1;
(statearr_31970_32038[(1)] = (27));

} else {
var statearr_31971_32039 = state_31922__$1;
(statearr_31971_32039[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (34))){
var state_31922__$1 = state_31922;
var statearr_31972_32040 = state_31922__$1;
(statearr_31972_32040[(2)] = null);

(statearr_31972_32040[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (17))){
var state_31922__$1 = state_31922;
var statearr_31973_32041 = state_31922__$1;
(statearr_31973_32041[(2)] = null);

(statearr_31973_32041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (3))){
var inst_31920 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31922__$1,inst_31920);
} else {
if((state_val_31923 === (12))){
var inst_31849 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31974_32042 = state_31922__$1;
(statearr_31974_32042[(2)] = inst_31849);

(statearr_31974_32042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (2))){
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31922__$1,(4),ch);
} else {
if((state_val_31923 === (23))){
var state_31922__$1 = state_31922;
var statearr_31975_32043 = state_31922__$1;
(statearr_31975_32043[(2)] = null);

(statearr_31975_32043[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (35))){
var inst_31904 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31976_32044 = state_31922__$1;
(statearr_31976_32044[(2)] = inst_31904);

(statearr_31976_32044[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (19))){
var inst_31823 = (state_31922[(7)]);
var inst_31827 = cljs.core.chunk_first.call(null,inst_31823);
var inst_31828 = cljs.core.chunk_rest.call(null,inst_31823);
var inst_31829 = cljs.core.count.call(null,inst_31827);
var inst_31803 = inst_31828;
var inst_31804 = inst_31827;
var inst_31805 = inst_31829;
var inst_31806 = (0);
var state_31922__$1 = (function (){var statearr_31977 = state_31922;
(statearr_31977[(13)] = inst_31803);

(statearr_31977[(14)] = inst_31805);

(statearr_31977[(15)] = inst_31806);

(statearr_31977[(17)] = inst_31804);

return statearr_31977;
})();
var statearr_31978_32045 = state_31922__$1;
(statearr_31978_32045[(2)] = null);

(statearr_31978_32045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (11))){
var inst_31823 = (state_31922[(7)]);
var inst_31803 = (state_31922[(13)]);
var inst_31823__$1 = cljs.core.seq.call(null,inst_31803);
var state_31922__$1 = (function (){var statearr_31979 = state_31922;
(statearr_31979[(7)] = inst_31823__$1);

return statearr_31979;
})();
if(inst_31823__$1){
var statearr_31980_32046 = state_31922__$1;
(statearr_31980_32046[(1)] = (16));

} else {
var statearr_31981_32047 = state_31922__$1;
(statearr_31981_32047[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (9))){
var inst_31851 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31982_32048 = state_31922__$1;
(statearr_31982_32048[(2)] = inst_31851);

(statearr_31982_32048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (5))){
var inst_31801 = cljs.core.deref.call(null,cs);
var inst_31802 = cljs.core.seq.call(null,inst_31801);
var inst_31803 = inst_31802;
var inst_31804 = null;
var inst_31805 = (0);
var inst_31806 = (0);
var state_31922__$1 = (function (){var statearr_31983 = state_31922;
(statearr_31983[(13)] = inst_31803);

(statearr_31983[(14)] = inst_31805);

(statearr_31983[(15)] = inst_31806);

(statearr_31983[(17)] = inst_31804);

return statearr_31983;
})();
var statearr_31984_32049 = state_31922__$1;
(statearr_31984_32049[(2)] = null);

(statearr_31984_32049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (14))){
var state_31922__$1 = state_31922;
var statearr_31985_32050 = state_31922__$1;
(statearr_31985_32050[(2)] = null);

(statearr_31985_32050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (45))){
var inst_31912 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31986_32051 = state_31922__$1;
(statearr_31986_32051[(2)] = inst_31912);

(statearr_31986_32051[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (26))){
var inst_31854 = (state_31922[(29)]);
var inst_31908 = (state_31922[(2)]);
var inst_31909 = cljs.core.seq.call(null,inst_31854);
var state_31922__$1 = (function (){var statearr_31987 = state_31922;
(statearr_31987[(31)] = inst_31908);

return statearr_31987;
})();
if(inst_31909){
var statearr_31988_32052 = state_31922__$1;
(statearr_31988_32052[(1)] = (42));

} else {
var statearr_31989_32053 = state_31922__$1;
(statearr_31989_32053[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (16))){
var inst_31823 = (state_31922[(7)]);
var inst_31825 = cljs.core.chunked_seq_QMARK_.call(null,inst_31823);
var state_31922__$1 = state_31922;
if(inst_31825){
var statearr_31990_32054 = state_31922__$1;
(statearr_31990_32054[(1)] = (19));

} else {
var statearr_31991_32055 = state_31922__$1;
(statearr_31991_32055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (38))){
var inst_31901 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31992_32056 = state_31922__$1;
(statearr_31992_32056[(2)] = inst_31901);

(statearr_31992_32056[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (30))){
var state_31922__$1 = state_31922;
var statearr_31993_32057 = state_31922__$1;
(statearr_31993_32057[(2)] = null);

(statearr_31993_32057[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (10))){
var inst_31806 = (state_31922[(15)]);
var inst_31804 = (state_31922[(17)]);
var inst_31812 = cljs.core._nth.call(null,inst_31804,inst_31806);
var inst_31813 = cljs.core.nth.call(null,inst_31812,(0),null);
var inst_31814 = cljs.core.nth.call(null,inst_31812,(1),null);
var state_31922__$1 = (function (){var statearr_31994 = state_31922;
(statearr_31994[(26)] = inst_31813);

return statearr_31994;
})();
if(cljs.core.truth_(inst_31814)){
var statearr_31995_32058 = state_31922__$1;
(statearr_31995_32058[(1)] = (13));

} else {
var statearr_31996_32059 = state_31922__$1;
(statearr_31996_32059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (18))){
var inst_31847 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31997_32060 = state_31922__$1;
(statearr_31997_32060[(2)] = inst_31847);

(statearr_31997_32060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (42))){
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31922__$1,(45),dchan);
} else {
if((state_val_31923 === (37))){
var inst_31794 = (state_31922[(10)]);
var inst_31881 = (state_31922[(25)]);
var inst_31890 = (state_31922[(23)]);
var inst_31890__$1 = cljs.core.first.call(null,inst_31881);
var inst_31891 = cljs.core.async.put_BANG_.call(null,inst_31890__$1,inst_31794,done);
var state_31922__$1 = (function (){var statearr_31998 = state_31922;
(statearr_31998[(23)] = inst_31890__$1);

return statearr_31998;
})();
if(cljs.core.truth_(inst_31891)){
var statearr_31999_32061 = state_31922__$1;
(statearr_31999_32061[(1)] = (39));

} else {
var statearr_32000_32062 = state_31922__$1;
(statearr_32000_32062[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (8))){
var inst_31805 = (state_31922[(14)]);
var inst_31806 = (state_31922[(15)]);
var inst_31808 = (inst_31806 < inst_31805);
var inst_31809 = inst_31808;
var state_31922__$1 = state_31922;
if(cljs.core.truth_(inst_31809)){
var statearr_32001_32063 = state_31922__$1;
(statearr_32001_32063[(1)] = (10));

} else {
var statearr_32002_32064 = state_31922__$1;
(statearr_32002_32064[(1)] = (11));

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
});})(c__18620__auto___32010,cs,m,dchan,dctr,done))
;
return ((function (switch__18564__auto__,c__18620__auto___32010,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_32006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32006[(0)] = state_machine__18565__auto__);

(statearr_32006[(1)] = (1));

return statearr_32006;
});
var state_machine__18565__auto____1 = (function (state_31922){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_31922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e32007){if((e32007 instanceof Object)){
var ex__18568__auto__ = e32007;
var statearr_32008_32065 = state_31922;
(statearr_32008_32065[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32066 = state_31922;
state_31922 = G__32066;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_31922){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_31922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___32010,cs,m,dchan,dctr,done))
})();
var state__18622__auto__ = (function (){var statearr_32009 = f__18621__auto__.call(null);
(statearr_32009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___32010);

return statearr_32009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___32010,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj32068 = {};
return obj32068;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32069){
var map__32074 = p__32069;
var map__32074__$1 = ((cljs.core.seq_QMARK_.call(null,map__32074))?cljs.core.apply.call(null,cljs.core.hash_map,map__32074):map__32074);
var opts = map__32074__$1;
var statearr_32075_32078 = state;
(statearr_32075_32078[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32074,map__32074__$1,opts){
return (function (val){
var statearr_32076_32079 = state;
(statearr_32076_32079[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32074,map__32074__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32077_32080 = state;
(statearr_32077_32080[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32069 = null;
if (arguments.length > 3) {
var G__32081__i = 0, G__32081__a = new Array(arguments.length -  3);
while (G__32081__i < G__32081__a.length) {G__32081__a[G__32081__i] = arguments[G__32081__i + 3]; ++G__32081__i;}
  p__32069 = new cljs.core.IndexedSeq(G__32081__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32069);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32082){
var state = cljs.core.first(arglist__32082);
arglist__32082 = cljs.core.next(arglist__32082);
var cont_block = cljs.core.first(arglist__32082);
arglist__32082 = cljs.core.next(arglist__32082);
var ports = cljs.core.first(arglist__32082);
var p__32069 = cljs.core.rest(arglist__32082);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32069);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
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
if(typeof cljs.core.async.t32202 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32202 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32203){
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
this.meta32203 = meta32203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32202.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32202.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32202.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32202.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32202.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32202.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32202.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32204){
var self__ = this;
var _32204__$1 = this;
return self__.meta32203;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32204,meta32203__$1){
var self__ = this;
var _32204__$1 = this;
return (new cljs.core.async.t32202(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32203__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32202.cljs$lang$type = true;

cljs.core.async.t32202.cljs$lang$ctorStr = "cljs.core.async/t32202";

cljs.core.async.t32202.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32202");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32202 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32202(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32203){
return (new cljs.core.async.t32202(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32203));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32202(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18620__auto___32321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___32321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___32321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32274){
var state_val_32275 = (state_32274[(1)]);
if((state_val_32275 === (7))){
var inst_32218 = (state_32274[(7)]);
var inst_32223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32218);
var state_32274__$1 = state_32274;
var statearr_32276_32322 = state_32274__$1;
(statearr_32276_32322[(2)] = inst_32223);

(statearr_32276_32322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (20))){
var inst_32233 = (state_32274[(8)]);
var state_32274__$1 = state_32274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32274__$1,(23),out,inst_32233);
} else {
if((state_val_32275 === (1))){
var inst_32208 = (state_32274[(9)]);
var inst_32208__$1 = calc_state.call(null);
var inst_32209 = cljs.core.seq_QMARK_.call(null,inst_32208__$1);
var state_32274__$1 = (function (){var statearr_32277 = state_32274;
(statearr_32277[(9)] = inst_32208__$1);

return statearr_32277;
})();
if(inst_32209){
var statearr_32278_32323 = state_32274__$1;
(statearr_32278_32323[(1)] = (2));

} else {
var statearr_32279_32324 = state_32274__$1;
(statearr_32279_32324[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (24))){
var inst_32226 = (state_32274[(10)]);
var inst_32218 = inst_32226;
var state_32274__$1 = (function (){var statearr_32280 = state_32274;
(statearr_32280[(7)] = inst_32218);

return statearr_32280;
})();
var statearr_32281_32325 = state_32274__$1;
(statearr_32281_32325[(2)] = null);

(statearr_32281_32325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (4))){
var inst_32208 = (state_32274[(9)]);
var inst_32214 = (state_32274[(2)]);
var inst_32215 = cljs.core.get.call(null,inst_32214,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32216 = cljs.core.get.call(null,inst_32214,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32217 = cljs.core.get.call(null,inst_32214,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32218 = inst_32208;
var state_32274__$1 = (function (){var statearr_32282 = state_32274;
(statearr_32282[(11)] = inst_32216);

(statearr_32282[(12)] = inst_32217);

(statearr_32282[(7)] = inst_32218);

(statearr_32282[(13)] = inst_32215);

return statearr_32282;
})();
var statearr_32283_32326 = state_32274__$1;
(statearr_32283_32326[(2)] = null);

(statearr_32283_32326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (15))){
var state_32274__$1 = state_32274;
var statearr_32284_32327 = state_32274__$1;
(statearr_32284_32327[(2)] = null);

(statearr_32284_32327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (21))){
var inst_32226 = (state_32274[(10)]);
var inst_32218 = inst_32226;
var state_32274__$1 = (function (){var statearr_32285 = state_32274;
(statearr_32285[(7)] = inst_32218);

return statearr_32285;
})();
var statearr_32286_32328 = state_32274__$1;
(statearr_32286_32328[(2)] = null);

(statearr_32286_32328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (13))){
var inst_32270 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32287_32329 = state_32274__$1;
(statearr_32287_32329[(2)] = inst_32270);

(statearr_32287_32329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (22))){
var inst_32268 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32288_32330 = state_32274__$1;
(statearr_32288_32330[(2)] = inst_32268);

(statearr_32288_32330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (6))){
var inst_32272 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32274__$1,inst_32272);
} else {
if((state_val_32275 === (25))){
var state_32274__$1 = state_32274;
var statearr_32289_32331 = state_32274__$1;
(statearr_32289_32331[(2)] = null);

(statearr_32289_32331[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (17))){
var inst_32248 = (state_32274[(14)]);
var state_32274__$1 = state_32274;
var statearr_32290_32332 = state_32274__$1;
(statearr_32290_32332[(2)] = inst_32248);

(statearr_32290_32332[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (3))){
var inst_32208 = (state_32274[(9)]);
var state_32274__$1 = state_32274;
var statearr_32291_32333 = state_32274__$1;
(statearr_32291_32333[(2)] = inst_32208);

(statearr_32291_32333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (12))){
var inst_32229 = (state_32274[(15)]);
var inst_32234 = (state_32274[(16)]);
var inst_32248 = (state_32274[(14)]);
var inst_32248__$1 = inst_32229.call(null,inst_32234);
var state_32274__$1 = (function (){var statearr_32292 = state_32274;
(statearr_32292[(14)] = inst_32248__$1);

return statearr_32292;
})();
if(cljs.core.truth_(inst_32248__$1)){
var statearr_32293_32334 = state_32274__$1;
(statearr_32293_32334[(1)] = (17));

} else {
var statearr_32294_32335 = state_32274__$1;
(statearr_32294_32335[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (2))){
var inst_32208 = (state_32274[(9)]);
var inst_32211 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32208);
var state_32274__$1 = state_32274;
var statearr_32295_32336 = state_32274__$1;
(statearr_32295_32336[(2)] = inst_32211);

(statearr_32295_32336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (23))){
var inst_32259 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
if(cljs.core.truth_(inst_32259)){
var statearr_32296_32337 = state_32274__$1;
(statearr_32296_32337[(1)] = (24));

} else {
var statearr_32297_32338 = state_32274__$1;
(statearr_32297_32338[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (19))){
var inst_32256 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
if(cljs.core.truth_(inst_32256)){
var statearr_32298_32339 = state_32274__$1;
(statearr_32298_32339[(1)] = (20));

} else {
var statearr_32299_32340 = state_32274__$1;
(statearr_32299_32340[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (11))){
var inst_32233 = (state_32274[(8)]);
var inst_32239 = (inst_32233 == null);
var state_32274__$1 = state_32274;
if(cljs.core.truth_(inst_32239)){
var statearr_32300_32341 = state_32274__$1;
(statearr_32300_32341[(1)] = (14));

} else {
var statearr_32301_32342 = state_32274__$1;
(statearr_32301_32342[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (9))){
var inst_32226 = (state_32274[(10)]);
var inst_32226__$1 = (state_32274[(2)]);
var inst_32227 = cljs.core.get.call(null,inst_32226__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32228 = cljs.core.get.call(null,inst_32226__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32229 = cljs.core.get.call(null,inst_32226__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32274__$1 = (function (){var statearr_32302 = state_32274;
(statearr_32302[(15)] = inst_32229);

(statearr_32302[(10)] = inst_32226__$1);

(statearr_32302[(17)] = inst_32228);

return statearr_32302;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32274__$1,(10),inst_32227);
} else {
if((state_val_32275 === (5))){
var inst_32218 = (state_32274[(7)]);
var inst_32221 = cljs.core.seq_QMARK_.call(null,inst_32218);
var state_32274__$1 = state_32274;
if(inst_32221){
var statearr_32303_32343 = state_32274__$1;
(statearr_32303_32343[(1)] = (7));

} else {
var statearr_32304_32344 = state_32274__$1;
(statearr_32304_32344[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (14))){
var inst_32234 = (state_32274[(16)]);
var inst_32241 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32234);
var state_32274__$1 = state_32274;
var statearr_32305_32345 = state_32274__$1;
(statearr_32305_32345[(2)] = inst_32241);

(statearr_32305_32345[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (26))){
var inst_32264 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32306_32346 = state_32274__$1;
(statearr_32306_32346[(2)] = inst_32264);

(statearr_32306_32346[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (16))){
var inst_32244 = (state_32274[(2)]);
var inst_32245 = calc_state.call(null);
var inst_32218 = inst_32245;
var state_32274__$1 = (function (){var statearr_32307 = state_32274;
(statearr_32307[(7)] = inst_32218);

(statearr_32307[(18)] = inst_32244);

return statearr_32307;
})();
var statearr_32308_32347 = state_32274__$1;
(statearr_32308_32347[(2)] = null);

(statearr_32308_32347[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (10))){
var inst_32234 = (state_32274[(16)]);
var inst_32233 = (state_32274[(8)]);
var inst_32232 = (state_32274[(2)]);
var inst_32233__$1 = cljs.core.nth.call(null,inst_32232,(0),null);
var inst_32234__$1 = cljs.core.nth.call(null,inst_32232,(1),null);
var inst_32235 = (inst_32233__$1 == null);
var inst_32236 = cljs.core._EQ_.call(null,inst_32234__$1,change);
var inst_32237 = (inst_32235) || (inst_32236);
var state_32274__$1 = (function (){var statearr_32309 = state_32274;
(statearr_32309[(16)] = inst_32234__$1);

(statearr_32309[(8)] = inst_32233__$1);

return statearr_32309;
})();
if(cljs.core.truth_(inst_32237)){
var statearr_32310_32348 = state_32274__$1;
(statearr_32310_32348[(1)] = (11));

} else {
var statearr_32311_32349 = state_32274__$1;
(statearr_32311_32349[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (18))){
var inst_32229 = (state_32274[(15)]);
var inst_32234 = (state_32274[(16)]);
var inst_32228 = (state_32274[(17)]);
var inst_32251 = cljs.core.empty_QMARK_.call(null,inst_32229);
var inst_32252 = inst_32228.call(null,inst_32234);
var inst_32253 = cljs.core.not.call(null,inst_32252);
var inst_32254 = (inst_32251) && (inst_32253);
var state_32274__$1 = state_32274;
var statearr_32312_32350 = state_32274__$1;
(statearr_32312_32350[(2)] = inst_32254);

(statearr_32312_32350[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (8))){
var inst_32218 = (state_32274[(7)]);
var state_32274__$1 = state_32274;
var statearr_32313_32351 = state_32274__$1;
(statearr_32313_32351[(2)] = inst_32218);

(statearr_32313_32351[(1)] = (9));


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
});})(c__18620__auto___32321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18564__auto__,c__18620__auto___32321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_32317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32317[(0)] = state_machine__18565__auto__);

(statearr_32317[(1)] = (1));

return statearr_32317;
});
var state_machine__18565__auto____1 = (function (state_32274){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_32274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e32318){if((e32318 instanceof Object)){
var ex__18568__auto__ = e32318;
var statearr_32319_32352 = state_32274;
(statearr_32319_32352[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32353 = state_32274;
state_32274 = G__32353;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_32274){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_32274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___32321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18622__auto__ = (function (){var statearr_32320 = f__18621__auto__.call(null);
(statearr_32320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___32321);

return statearr_32320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___32321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj32355 = {};
return obj32355;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16145__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16145__auto__,mults){
return (function (p1__32356_SHARP_){
if(cljs.core.truth_(p1__32356_SHARP_.call(null,topic))){
return p1__32356_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32356_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32479 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32479 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32480){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32480 = meta32480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32479.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32479.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32479.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t32479.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32479.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32479.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32481){
var self__ = this;
var _32481__$1 = this;
return self__.meta32480;
});})(mults,ensure_mult))
;

cljs.core.async.t32479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32481,meta32480__$1){
var self__ = this;
var _32481__$1 = this;
return (new cljs.core.async.t32479(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32480__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32479.cljs$lang$type = true;

cljs.core.async.t32479.cljs$lang$ctorStr = "cljs.core.async/t32479";

cljs.core.async.t32479.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32479");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32479 = ((function (mults,ensure_mult){
return (function __GT_t32479(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32480){
return (new cljs.core.async.t32479(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32480));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32479(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18620__auto___32601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___32601,mults,ensure_mult,p){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___32601,mults,ensure_mult,p){
return (function (state_32553){
var state_val_32554 = (state_32553[(1)]);
if((state_val_32554 === (7))){
var inst_32549 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32555_32602 = state_32553__$1;
(statearr_32555_32602[(2)] = inst_32549);

(statearr_32555_32602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (20))){
var state_32553__$1 = state_32553;
var statearr_32556_32603 = state_32553__$1;
(statearr_32556_32603[(2)] = null);

(statearr_32556_32603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (1))){
var state_32553__$1 = state_32553;
var statearr_32557_32604 = state_32553__$1;
(statearr_32557_32604[(2)] = null);

(statearr_32557_32604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (24))){
var inst_32532 = (state_32553[(7)]);
var inst_32541 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32532);
var state_32553__$1 = state_32553;
var statearr_32558_32605 = state_32553__$1;
(statearr_32558_32605[(2)] = inst_32541);

(statearr_32558_32605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (4))){
var inst_32484 = (state_32553[(8)]);
var inst_32484__$1 = (state_32553[(2)]);
var inst_32485 = (inst_32484__$1 == null);
var state_32553__$1 = (function (){var statearr_32559 = state_32553;
(statearr_32559[(8)] = inst_32484__$1);

return statearr_32559;
})();
if(cljs.core.truth_(inst_32485)){
var statearr_32560_32606 = state_32553__$1;
(statearr_32560_32606[(1)] = (5));

} else {
var statearr_32561_32607 = state_32553__$1;
(statearr_32561_32607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (15))){
var inst_32526 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32562_32608 = state_32553__$1;
(statearr_32562_32608[(2)] = inst_32526);

(statearr_32562_32608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (21))){
var inst_32546 = (state_32553[(2)]);
var state_32553__$1 = (function (){var statearr_32563 = state_32553;
(statearr_32563[(9)] = inst_32546);

return statearr_32563;
})();
var statearr_32564_32609 = state_32553__$1;
(statearr_32564_32609[(2)] = null);

(statearr_32564_32609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (13))){
var inst_32508 = (state_32553[(10)]);
var inst_32510 = cljs.core.chunked_seq_QMARK_.call(null,inst_32508);
var state_32553__$1 = state_32553;
if(inst_32510){
var statearr_32565_32610 = state_32553__$1;
(statearr_32565_32610[(1)] = (16));

} else {
var statearr_32566_32611 = state_32553__$1;
(statearr_32566_32611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (22))){
var inst_32538 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
if(cljs.core.truth_(inst_32538)){
var statearr_32567_32612 = state_32553__$1;
(statearr_32567_32612[(1)] = (23));

} else {
var statearr_32568_32613 = state_32553__$1;
(statearr_32568_32613[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (6))){
var inst_32534 = (state_32553[(11)]);
var inst_32532 = (state_32553[(7)]);
var inst_32484 = (state_32553[(8)]);
var inst_32532__$1 = topic_fn.call(null,inst_32484);
var inst_32533 = cljs.core.deref.call(null,mults);
var inst_32534__$1 = cljs.core.get.call(null,inst_32533,inst_32532__$1);
var state_32553__$1 = (function (){var statearr_32569 = state_32553;
(statearr_32569[(11)] = inst_32534__$1);

(statearr_32569[(7)] = inst_32532__$1);

return statearr_32569;
})();
if(cljs.core.truth_(inst_32534__$1)){
var statearr_32570_32614 = state_32553__$1;
(statearr_32570_32614[(1)] = (19));

} else {
var statearr_32571_32615 = state_32553__$1;
(statearr_32571_32615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (25))){
var inst_32543 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32572_32616 = state_32553__$1;
(statearr_32572_32616[(2)] = inst_32543);

(statearr_32572_32616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (17))){
var inst_32508 = (state_32553[(10)]);
var inst_32517 = cljs.core.first.call(null,inst_32508);
var inst_32518 = cljs.core.async.muxch_STAR_.call(null,inst_32517);
var inst_32519 = cljs.core.async.close_BANG_.call(null,inst_32518);
var inst_32520 = cljs.core.next.call(null,inst_32508);
var inst_32494 = inst_32520;
var inst_32495 = null;
var inst_32496 = (0);
var inst_32497 = (0);
var state_32553__$1 = (function (){var statearr_32573 = state_32553;
(statearr_32573[(12)] = inst_32494);

(statearr_32573[(13)] = inst_32519);

(statearr_32573[(14)] = inst_32496);

(statearr_32573[(15)] = inst_32495);

(statearr_32573[(16)] = inst_32497);

return statearr_32573;
})();
var statearr_32574_32617 = state_32553__$1;
(statearr_32574_32617[(2)] = null);

(statearr_32574_32617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (3))){
var inst_32551 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32553__$1,inst_32551);
} else {
if((state_val_32554 === (12))){
var inst_32528 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32575_32618 = state_32553__$1;
(statearr_32575_32618[(2)] = inst_32528);

(statearr_32575_32618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (2))){
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32553__$1,(4),ch);
} else {
if((state_val_32554 === (23))){
var state_32553__$1 = state_32553;
var statearr_32576_32619 = state_32553__$1;
(statearr_32576_32619[(2)] = null);

(statearr_32576_32619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (19))){
var inst_32534 = (state_32553[(11)]);
var inst_32484 = (state_32553[(8)]);
var inst_32536 = cljs.core.async.muxch_STAR_.call(null,inst_32534);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32553__$1,(22),inst_32536,inst_32484);
} else {
if((state_val_32554 === (11))){
var inst_32494 = (state_32553[(12)]);
var inst_32508 = (state_32553[(10)]);
var inst_32508__$1 = cljs.core.seq.call(null,inst_32494);
var state_32553__$1 = (function (){var statearr_32577 = state_32553;
(statearr_32577[(10)] = inst_32508__$1);

return statearr_32577;
})();
if(inst_32508__$1){
var statearr_32578_32620 = state_32553__$1;
(statearr_32578_32620[(1)] = (13));

} else {
var statearr_32579_32621 = state_32553__$1;
(statearr_32579_32621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (9))){
var inst_32530 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32580_32622 = state_32553__$1;
(statearr_32580_32622[(2)] = inst_32530);

(statearr_32580_32622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (5))){
var inst_32491 = cljs.core.deref.call(null,mults);
var inst_32492 = cljs.core.vals.call(null,inst_32491);
var inst_32493 = cljs.core.seq.call(null,inst_32492);
var inst_32494 = inst_32493;
var inst_32495 = null;
var inst_32496 = (0);
var inst_32497 = (0);
var state_32553__$1 = (function (){var statearr_32581 = state_32553;
(statearr_32581[(12)] = inst_32494);

(statearr_32581[(14)] = inst_32496);

(statearr_32581[(15)] = inst_32495);

(statearr_32581[(16)] = inst_32497);

return statearr_32581;
})();
var statearr_32582_32623 = state_32553__$1;
(statearr_32582_32623[(2)] = null);

(statearr_32582_32623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (14))){
var state_32553__$1 = state_32553;
var statearr_32586_32624 = state_32553__$1;
(statearr_32586_32624[(2)] = null);

(statearr_32586_32624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (16))){
var inst_32508 = (state_32553[(10)]);
var inst_32512 = cljs.core.chunk_first.call(null,inst_32508);
var inst_32513 = cljs.core.chunk_rest.call(null,inst_32508);
var inst_32514 = cljs.core.count.call(null,inst_32512);
var inst_32494 = inst_32513;
var inst_32495 = inst_32512;
var inst_32496 = inst_32514;
var inst_32497 = (0);
var state_32553__$1 = (function (){var statearr_32587 = state_32553;
(statearr_32587[(12)] = inst_32494);

(statearr_32587[(14)] = inst_32496);

(statearr_32587[(15)] = inst_32495);

(statearr_32587[(16)] = inst_32497);

return statearr_32587;
})();
var statearr_32588_32625 = state_32553__$1;
(statearr_32588_32625[(2)] = null);

(statearr_32588_32625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (10))){
var inst_32494 = (state_32553[(12)]);
var inst_32496 = (state_32553[(14)]);
var inst_32495 = (state_32553[(15)]);
var inst_32497 = (state_32553[(16)]);
var inst_32502 = cljs.core._nth.call(null,inst_32495,inst_32497);
var inst_32503 = cljs.core.async.muxch_STAR_.call(null,inst_32502);
var inst_32504 = cljs.core.async.close_BANG_.call(null,inst_32503);
var inst_32505 = (inst_32497 + (1));
var tmp32583 = inst_32494;
var tmp32584 = inst_32496;
var tmp32585 = inst_32495;
var inst_32494__$1 = tmp32583;
var inst_32495__$1 = tmp32585;
var inst_32496__$1 = tmp32584;
var inst_32497__$1 = inst_32505;
var state_32553__$1 = (function (){var statearr_32589 = state_32553;
(statearr_32589[(17)] = inst_32504);

(statearr_32589[(12)] = inst_32494__$1);

(statearr_32589[(14)] = inst_32496__$1);

(statearr_32589[(15)] = inst_32495__$1);

(statearr_32589[(16)] = inst_32497__$1);

return statearr_32589;
})();
var statearr_32590_32626 = state_32553__$1;
(statearr_32590_32626[(2)] = null);

(statearr_32590_32626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (18))){
var inst_32523 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32591_32627 = state_32553__$1;
(statearr_32591_32627[(2)] = inst_32523);

(statearr_32591_32627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (8))){
var inst_32496 = (state_32553[(14)]);
var inst_32497 = (state_32553[(16)]);
var inst_32499 = (inst_32497 < inst_32496);
var inst_32500 = inst_32499;
var state_32553__$1 = state_32553;
if(cljs.core.truth_(inst_32500)){
var statearr_32592_32628 = state_32553__$1;
(statearr_32592_32628[(1)] = (10));

} else {
var statearr_32593_32629 = state_32553__$1;
(statearr_32593_32629[(1)] = (11));

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
});})(c__18620__auto___32601,mults,ensure_mult,p))
;
return ((function (switch__18564__auto__,c__18620__auto___32601,mults,ensure_mult,p){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_32597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32597[(0)] = state_machine__18565__auto__);

(statearr_32597[(1)] = (1));

return statearr_32597;
});
var state_machine__18565__auto____1 = (function (state_32553){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_32553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e32598){if((e32598 instanceof Object)){
var ex__18568__auto__ = e32598;
var statearr_32599_32630 = state_32553;
(statearr_32599_32630[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32631 = state_32553;
state_32553 = G__32631;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_32553){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_32553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___32601,mults,ensure_mult,p))
})();
var state__18622__auto__ = (function (){var statearr_32600 = f__18621__auto__.call(null);
(statearr_32600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___32601);

return statearr_32600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___32601,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
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
var c__18620__auto___32768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___32768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___32768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32738){
var state_val_32739 = (state_32738[(1)]);
if((state_val_32739 === (7))){
var state_32738__$1 = state_32738;
var statearr_32740_32769 = state_32738__$1;
(statearr_32740_32769[(2)] = null);

(statearr_32740_32769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (1))){
var state_32738__$1 = state_32738;
var statearr_32741_32770 = state_32738__$1;
(statearr_32741_32770[(2)] = null);

(statearr_32741_32770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (4))){
var inst_32702 = (state_32738[(7)]);
var inst_32704 = (inst_32702 < cnt);
var state_32738__$1 = state_32738;
if(cljs.core.truth_(inst_32704)){
var statearr_32742_32771 = state_32738__$1;
(statearr_32742_32771[(1)] = (6));

} else {
var statearr_32743_32772 = state_32738__$1;
(statearr_32743_32772[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (15))){
var inst_32734 = (state_32738[(2)]);
var state_32738__$1 = state_32738;
var statearr_32744_32773 = state_32738__$1;
(statearr_32744_32773[(2)] = inst_32734);

(statearr_32744_32773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (13))){
var inst_32727 = cljs.core.async.close_BANG_.call(null,out);
var state_32738__$1 = state_32738;
var statearr_32745_32774 = state_32738__$1;
(statearr_32745_32774[(2)] = inst_32727);

(statearr_32745_32774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (6))){
var state_32738__$1 = state_32738;
var statearr_32746_32775 = state_32738__$1;
(statearr_32746_32775[(2)] = null);

(statearr_32746_32775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (3))){
var inst_32736 = (state_32738[(2)]);
var state_32738__$1 = state_32738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32738__$1,inst_32736);
} else {
if((state_val_32739 === (12))){
var inst_32724 = (state_32738[(8)]);
var inst_32724__$1 = (state_32738[(2)]);
var inst_32725 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32724__$1);
var state_32738__$1 = (function (){var statearr_32747 = state_32738;
(statearr_32747[(8)] = inst_32724__$1);

return statearr_32747;
})();
if(cljs.core.truth_(inst_32725)){
var statearr_32748_32776 = state_32738__$1;
(statearr_32748_32776[(1)] = (13));

} else {
var statearr_32749_32777 = state_32738__$1;
(statearr_32749_32777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (2))){
var inst_32701 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32702 = (0);
var state_32738__$1 = (function (){var statearr_32750 = state_32738;
(statearr_32750[(7)] = inst_32702);

(statearr_32750[(9)] = inst_32701);

return statearr_32750;
})();
var statearr_32751_32778 = state_32738__$1;
(statearr_32751_32778[(2)] = null);

(statearr_32751_32778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (11))){
var inst_32702 = (state_32738[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32738,(10),Object,null,(9));
var inst_32711 = chs__$1.call(null,inst_32702);
var inst_32712 = done.call(null,inst_32702);
var inst_32713 = cljs.core.async.take_BANG_.call(null,inst_32711,inst_32712);
var state_32738__$1 = state_32738;
var statearr_32752_32779 = state_32738__$1;
(statearr_32752_32779[(2)] = inst_32713);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32738__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (9))){
var inst_32702 = (state_32738[(7)]);
var inst_32715 = (state_32738[(2)]);
var inst_32716 = (inst_32702 + (1));
var inst_32702__$1 = inst_32716;
var state_32738__$1 = (function (){var statearr_32753 = state_32738;
(statearr_32753[(7)] = inst_32702__$1);

(statearr_32753[(10)] = inst_32715);

return statearr_32753;
})();
var statearr_32754_32780 = state_32738__$1;
(statearr_32754_32780[(2)] = null);

(statearr_32754_32780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (5))){
var inst_32722 = (state_32738[(2)]);
var state_32738__$1 = (function (){var statearr_32755 = state_32738;
(statearr_32755[(11)] = inst_32722);

return statearr_32755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32738__$1,(12),dchan);
} else {
if((state_val_32739 === (14))){
var inst_32724 = (state_32738[(8)]);
var inst_32729 = cljs.core.apply.call(null,f,inst_32724);
var state_32738__$1 = state_32738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32738__$1,(16),out,inst_32729);
} else {
if((state_val_32739 === (16))){
var inst_32731 = (state_32738[(2)]);
var state_32738__$1 = (function (){var statearr_32756 = state_32738;
(statearr_32756[(12)] = inst_32731);

return statearr_32756;
})();
var statearr_32757_32781 = state_32738__$1;
(statearr_32757_32781[(2)] = null);

(statearr_32757_32781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (10))){
var inst_32706 = (state_32738[(2)]);
var inst_32707 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32738__$1 = (function (){var statearr_32758 = state_32738;
(statearr_32758[(13)] = inst_32706);

return statearr_32758;
})();
var statearr_32759_32782 = state_32738__$1;
(statearr_32759_32782[(2)] = inst_32707);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32738__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32739 === (8))){
var inst_32720 = (state_32738[(2)]);
var state_32738__$1 = state_32738;
var statearr_32760_32783 = state_32738__$1;
(statearr_32760_32783[(2)] = inst_32720);

(statearr_32760_32783[(1)] = (5));


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
});})(c__18620__auto___32768,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18564__auto__,c__18620__auto___32768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_32764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32764[(0)] = state_machine__18565__auto__);

(statearr_32764[(1)] = (1));

return statearr_32764;
});
var state_machine__18565__auto____1 = (function (state_32738){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_32738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e32765){if((e32765 instanceof Object)){
var ex__18568__auto__ = e32765;
var statearr_32766_32784 = state_32738;
(statearr_32766_32784[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32785 = state_32738;
state_32738 = G__32785;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_32738){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_32738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___32768,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18622__auto__ = (function (){var statearr_32767 = f__18621__auto__.call(null);
(statearr_32767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___32768);

return statearr_32767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___32768,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18620__auto___32893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___32893,out){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___32893,out){
return (function (state_32869){
var state_val_32870 = (state_32869[(1)]);
if((state_val_32870 === (7))){
var inst_32849 = (state_32869[(7)]);
var inst_32848 = (state_32869[(8)]);
var inst_32848__$1 = (state_32869[(2)]);
var inst_32849__$1 = cljs.core.nth.call(null,inst_32848__$1,(0),null);
var inst_32850 = cljs.core.nth.call(null,inst_32848__$1,(1),null);
var inst_32851 = (inst_32849__$1 == null);
var state_32869__$1 = (function (){var statearr_32871 = state_32869;
(statearr_32871[(7)] = inst_32849__$1);

(statearr_32871[(9)] = inst_32850);

(statearr_32871[(8)] = inst_32848__$1);

return statearr_32871;
})();
if(cljs.core.truth_(inst_32851)){
var statearr_32872_32894 = state_32869__$1;
(statearr_32872_32894[(1)] = (8));

} else {
var statearr_32873_32895 = state_32869__$1;
(statearr_32873_32895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (1))){
var inst_32840 = cljs.core.vec.call(null,chs);
var inst_32841 = inst_32840;
var state_32869__$1 = (function (){var statearr_32874 = state_32869;
(statearr_32874[(10)] = inst_32841);

return statearr_32874;
})();
var statearr_32875_32896 = state_32869__$1;
(statearr_32875_32896[(2)] = null);

(statearr_32875_32896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (4))){
var inst_32841 = (state_32869[(10)]);
var state_32869__$1 = state_32869;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32869__$1,(7),inst_32841);
} else {
if((state_val_32870 === (6))){
var inst_32865 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32876_32897 = state_32869__$1;
(statearr_32876_32897[(2)] = inst_32865);

(statearr_32876_32897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (3))){
var inst_32867 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32869__$1,inst_32867);
} else {
if((state_val_32870 === (2))){
var inst_32841 = (state_32869[(10)]);
var inst_32843 = cljs.core.count.call(null,inst_32841);
var inst_32844 = (inst_32843 > (0));
var state_32869__$1 = state_32869;
if(cljs.core.truth_(inst_32844)){
var statearr_32878_32898 = state_32869__$1;
(statearr_32878_32898[(1)] = (4));

} else {
var statearr_32879_32899 = state_32869__$1;
(statearr_32879_32899[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (11))){
var inst_32841 = (state_32869[(10)]);
var inst_32858 = (state_32869[(2)]);
var tmp32877 = inst_32841;
var inst_32841__$1 = tmp32877;
var state_32869__$1 = (function (){var statearr_32880 = state_32869;
(statearr_32880[(10)] = inst_32841__$1);

(statearr_32880[(11)] = inst_32858);

return statearr_32880;
})();
var statearr_32881_32900 = state_32869__$1;
(statearr_32881_32900[(2)] = null);

(statearr_32881_32900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (9))){
var inst_32849 = (state_32869[(7)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32869__$1,(11),out,inst_32849);
} else {
if((state_val_32870 === (5))){
var inst_32863 = cljs.core.async.close_BANG_.call(null,out);
var state_32869__$1 = state_32869;
var statearr_32882_32901 = state_32869__$1;
(statearr_32882_32901[(2)] = inst_32863);

(statearr_32882_32901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (10))){
var inst_32861 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32883_32902 = state_32869__$1;
(statearr_32883_32902[(2)] = inst_32861);

(statearr_32883_32902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (8))){
var inst_32849 = (state_32869[(7)]);
var inst_32850 = (state_32869[(9)]);
var inst_32848 = (state_32869[(8)]);
var inst_32841 = (state_32869[(10)]);
var inst_32853 = (function (){var c = inst_32850;
var v = inst_32849;
var vec__32846 = inst_32848;
var cs = inst_32841;
return ((function (c,v,vec__32846,cs,inst_32849,inst_32850,inst_32848,inst_32841,state_val_32870,c__18620__auto___32893,out){
return (function (p1__32786_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32786_SHARP_);
});
;})(c,v,vec__32846,cs,inst_32849,inst_32850,inst_32848,inst_32841,state_val_32870,c__18620__auto___32893,out))
})();
var inst_32854 = cljs.core.filterv.call(null,inst_32853,inst_32841);
var inst_32841__$1 = inst_32854;
var state_32869__$1 = (function (){var statearr_32884 = state_32869;
(statearr_32884[(10)] = inst_32841__$1);

return statearr_32884;
})();
var statearr_32885_32903 = state_32869__$1;
(statearr_32885_32903[(2)] = null);

(statearr_32885_32903[(1)] = (2));


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
});})(c__18620__auto___32893,out))
;
return ((function (switch__18564__auto__,c__18620__auto___32893,out){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_32889 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32889[(0)] = state_machine__18565__auto__);

(statearr_32889[(1)] = (1));

return statearr_32889;
});
var state_machine__18565__auto____1 = (function (state_32869){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_32869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e32890){if((e32890 instanceof Object)){
var ex__18568__auto__ = e32890;
var statearr_32891_32904 = state_32869;
(statearr_32891_32904[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32905 = state_32869;
state_32869 = G__32905;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_32869){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_32869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___32893,out))
})();
var state__18622__auto__ = (function (){var statearr_32892 = f__18621__auto__.call(null);
(statearr_32892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___32893);

return statearr_32892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___32893,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18620__auto___32998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___32998,out){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___32998,out){
return (function (state_32975){
var state_val_32976 = (state_32975[(1)]);
if((state_val_32976 === (7))){
var inst_32957 = (state_32975[(7)]);
var inst_32957__$1 = (state_32975[(2)]);
var inst_32958 = (inst_32957__$1 == null);
var inst_32959 = cljs.core.not.call(null,inst_32958);
var state_32975__$1 = (function (){var statearr_32977 = state_32975;
(statearr_32977[(7)] = inst_32957__$1);

return statearr_32977;
})();
if(inst_32959){
var statearr_32978_32999 = state_32975__$1;
(statearr_32978_32999[(1)] = (8));

} else {
var statearr_32979_33000 = state_32975__$1;
(statearr_32979_33000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (1))){
var inst_32952 = (0);
var state_32975__$1 = (function (){var statearr_32980 = state_32975;
(statearr_32980[(8)] = inst_32952);

return statearr_32980;
})();
var statearr_32981_33001 = state_32975__$1;
(statearr_32981_33001[(2)] = null);

(statearr_32981_33001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (4))){
var state_32975__$1 = state_32975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32975__$1,(7),ch);
} else {
if((state_val_32976 === (6))){
var inst_32970 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
var statearr_32982_33002 = state_32975__$1;
(statearr_32982_33002[(2)] = inst_32970);

(statearr_32982_33002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (3))){
var inst_32972 = (state_32975[(2)]);
var inst_32973 = cljs.core.async.close_BANG_.call(null,out);
var state_32975__$1 = (function (){var statearr_32983 = state_32975;
(statearr_32983[(9)] = inst_32972);

return statearr_32983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32975__$1,inst_32973);
} else {
if((state_val_32976 === (2))){
var inst_32952 = (state_32975[(8)]);
var inst_32954 = (inst_32952 < n);
var state_32975__$1 = state_32975;
if(cljs.core.truth_(inst_32954)){
var statearr_32984_33003 = state_32975__$1;
(statearr_32984_33003[(1)] = (4));

} else {
var statearr_32985_33004 = state_32975__$1;
(statearr_32985_33004[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (11))){
var inst_32952 = (state_32975[(8)]);
var inst_32962 = (state_32975[(2)]);
var inst_32963 = (inst_32952 + (1));
var inst_32952__$1 = inst_32963;
var state_32975__$1 = (function (){var statearr_32986 = state_32975;
(statearr_32986[(8)] = inst_32952__$1);

(statearr_32986[(10)] = inst_32962);

return statearr_32986;
})();
var statearr_32987_33005 = state_32975__$1;
(statearr_32987_33005[(2)] = null);

(statearr_32987_33005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (9))){
var state_32975__$1 = state_32975;
var statearr_32988_33006 = state_32975__$1;
(statearr_32988_33006[(2)] = null);

(statearr_32988_33006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (5))){
var state_32975__$1 = state_32975;
var statearr_32989_33007 = state_32975__$1;
(statearr_32989_33007[(2)] = null);

(statearr_32989_33007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (10))){
var inst_32967 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
var statearr_32990_33008 = state_32975__$1;
(statearr_32990_33008[(2)] = inst_32967);

(statearr_32990_33008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (8))){
var inst_32957 = (state_32975[(7)]);
var state_32975__$1 = state_32975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32975__$1,(11),out,inst_32957);
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
});})(c__18620__auto___32998,out))
;
return ((function (switch__18564__auto__,c__18620__auto___32998,out){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_32994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32994[(0)] = state_machine__18565__auto__);

(statearr_32994[(1)] = (1));

return statearr_32994;
});
var state_machine__18565__auto____1 = (function (state_32975){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_32975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e32995){if((e32995 instanceof Object)){
var ex__18568__auto__ = e32995;
var statearr_32996_33009 = state_32975;
(statearr_32996_33009[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33010 = state_32975;
state_32975 = G__33010;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_32975){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_32975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___32998,out))
})();
var state__18622__auto__ = (function (){var statearr_32997 = f__18621__auto__.call(null);
(statearr_32997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___32998);

return statearr_32997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___32998,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t33018 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33018 = (function (ch,f,map_LT_,meta33019){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33019 = meta33019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33018.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33018.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33018.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33018.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33021 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33021 = (function (fn1,_,meta33019,map_LT_,f,ch,meta33022){
this.fn1 = fn1;
this._ = _;
this.meta33019 = meta33019;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33022 = meta33022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33021.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33011_SHARP_){
return f1.call(null,(((p1__33011_SHARP_ == null))?null:self__.f.call(null,p1__33011_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33023){
var self__ = this;
var _33023__$1 = this;
return self__.meta33022;
});})(___$1))
;

cljs.core.async.t33021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33023,meta33022__$1){
var self__ = this;
var _33023__$1 = this;
return (new cljs.core.async.t33021(self__.fn1,self__._,self__.meta33019,self__.map_LT_,self__.f,self__.ch,meta33022__$1));
});})(___$1))
;

cljs.core.async.t33021.cljs$lang$type = true;

cljs.core.async.t33021.cljs$lang$ctorStr = "cljs.core.async/t33021";

cljs.core.async.t33021.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t33021");
});})(___$1))
;

cljs.core.async.__GT_t33021 = ((function (___$1){
return (function __GT_t33021(fn1__$1,___$2,meta33019__$1,map_LT___$1,f__$1,ch__$1,meta33022){
return (new cljs.core.async.t33021(fn1__$1,___$2,meta33019__$1,map_LT___$1,f__$1,ch__$1,meta33022));
});})(___$1))
;

}

return (new cljs.core.async.t33021(fn1,___$1,self__.meta33019,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16133__auto__ = ret;
if(cljs.core.truth_(and__16133__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16133__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t33018.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33018.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33018.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33020){
var self__ = this;
var _33020__$1 = this;
return self__.meta33019;
});

cljs.core.async.t33018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33020,meta33019__$1){
var self__ = this;
var _33020__$1 = this;
return (new cljs.core.async.t33018(self__.ch,self__.f,self__.map_LT_,meta33019__$1));
});

cljs.core.async.t33018.cljs$lang$type = true;

cljs.core.async.t33018.cljs$lang$ctorStr = "cljs.core.async/t33018";

cljs.core.async.t33018.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t33018");
});

cljs.core.async.__GT_t33018 = (function __GT_t33018(ch__$1,f__$1,map_LT___$1,meta33019){
return (new cljs.core.async.t33018(ch__$1,f__$1,map_LT___$1,meta33019));
});

}

return (new cljs.core.async.t33018(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33027 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33027 = (function (ch,f,map_GT_,meta33028){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33028 = meta33028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33027.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33027.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33027.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33029){
var self__ = this;
var _33029__$1 = this;
return self__.meta33028;
});

cljs.core.async.t33027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33029,meta33028__$1){
var self__ = this;
var _33029__$1 = this;
return (new cljs.core.async.t33027(self__.ch,self__.f,self__.map_GT_,meta33028__$1));
});

cljs.core.async.t33027.cljs$lang$type = true;

cljs.core.async.t33027.cljs$lang$ctorStr = "cljs.core.async/t33027";

cljs.core.async.t33027.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t33027");
});

cljs.core.async.__GT_t33027 = (function __GT_t33027(ch__$1,f__$1,map_GT___$1,meta33028){
return (new cljs.core.async.t33027(ch__$1,f__$1,map_GT___$1,meta33028));
});

}

return (new cljs.core.async.t33027(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33033 = (function (ch,p,filter_GT_,meta33034){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33034 = meta33034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33033.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33033.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33033.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33033.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33035){
var self__ = this;
var _33035__$1 = this;
return self__.meta33034;
});

cljs.core.async.t33033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33035,meta33034__$1){
var self__ = this;
var _33035__$1 = this;
return (new cljs.core.async.t33033(self__.ch,self__.p,self__.filter_GT_,meta33034__$1));
});

cljs.core.async.t33033.cljs$lang$type = true;

cljs.core.async.t33033.cljs$lang$ctorStr = "cljs.core.async/t33033";

cljs.core.async.t33033.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t33033");
});

cljs.core.async.__GT_t33033 = (function __GT_t33033(ch__$1,p__$1,filter_GT___$1,meta33034){
return (new cljs.core.async.t33033(ch__$1,p__$1,filter_GT___$1,meta33034));
});

}

return (new cljs.core.async.t33033(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18620__auto___33118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___33118,out){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___33118,out){
return (function (state_33097){
var state_val_33098 = (state_33097[(1)]);
if((state_val_33098 === (7))){
var inst_33093 = (state_33097[(2)]);
var state_33097__$1 = state_33097;
var statearr_33099_33119 = state_33097__$1;
(statearr_33099_33119[(2)] = inst_33093);

(statearr_33099_33119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (1))){
var state_33097__$1 = state_33097;
var statearr_33100_33120 = state_33097__$1;
(statearr_33100_33120[(2)] = null);

(statearr_33100_33120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (4))){
var inst_33079 = (state_33097[(7)]);
var inst_33079__$1 = (state_33097[(2)]);
var inst_33080 = (inst_33079__$1 == null);
var state_33097__$1 = (function (){var statearr_33101 = state_33097;
(statearr_33101[(7)] = inst_33079__$1);

return statearr_33101;
})();
if(cljs.core.truth_(inst_33080)){
var statearr_33102_33121 = state_33097__$1;
(statearr_33102_33121[(1)] = (5));

} else {
var statearr_33103_33122 = state_33097__$1;
(statearr_33103_33122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (6))){
var inst_33079 = (state_33097[(7)]);
var inst_33084 = p.call(null,inst_33079);
var state_33097__$1 = state_33097;
if(cljs.core.truth_(inst_33084)){
var statearr_33104_33123 = state_33097__$1;
(statearr_33104_33123[(1)] = (8));

} else {
var statearr_33105_33124 = state_33097__$1;
(statearr_33105_33124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (3))){
var inst_33095 = (state_33097[(2)]);
var state_33097__$1 = state_33097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33097__$1,inst_33095);
} else {
if((state_val_33098 === (2))){
var state_33097__$1 = state_33097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33097__$1,(4),ch);
} else {
if((state_val_33098 === (11))){
var inst_33087 = (state_33097[(2)]);
var state_33097__$1 = state_33097;
var statearr_33106_33125 = state_33097__$1;
(statearr_33106_33125[(2)] = inst_33087);

(statearr_33106_33125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (9))){
var state_33097__$1 = state_33097;
var statearr_33107_33126 = state_33097__$1;
(statearr_33107_33126[(2)] = null);

(statearr_33107_33126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (5))){
var inst_33082 = cljs.core.async.close_BANG_.call(null,out);
var state_33097__$1 = state_33097;
var statearr_33108_33127 = state_33097__$1;
(statearr_33108_33127[(2)] = inst_33082);

(statearr_33108_33127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (10))){
var inst_33090 = (state_33097[(2)]);
var state_33097__$1 = (function (){var statearr_33109 = state_33097;
(statearr_33109[(8)] = inst_33090);

return statearr_33109;
})();
var statearr_33110_33128 = state_33097__$1;
(statearr_33110_33128[(2)] = null);

(statearr_33110_33128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33098 === (8))){
var inst_33079 = (state_33097[(7)]);
var state_33097__$1 = state_33097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33097__$1,(11),out,inst_33079);
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
});})(c__18620__auto___33118,out))
;
return ((function (switch__18564__auto__,c__18620__auto___33118,out){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_33114 = [null,null,null,null,null,null,null,null,null];
(statearr_33114[(0)] = state_machine__18565__auto__);

(statearr_33114[(1)] = (1));

return statearr_33114;
});
var state_machine__18565__auto____1 = (function (state_33097){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_33097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e33115){if((e33115 instanceof Object)){
var ex__18568__auto__ = e33115;
var statearr_33116_33129 = state_33097;
(statearr_33116_33129[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33130 = state_33097;
state_33097 = G__33130;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_33097){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_33097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___33118,out))
})();
var state__18622__auto__ = (function (){var statearr_33117 = f__18621__auto__.call(null);
(statearr_33117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___33118);

return statearr_33117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___33118,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__){
return (function (state_33296){
var state_val_33297 = (state_33296[(1)]);
if((state_val_33297 === (7))){
var inst_33292 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33298_33339 = state_33296__$1;
(statearr_33298_33339[(2)] = inst_33292);

(statearr_33298_33339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (20))){
var inst_33262 = (state_33296[(7)]);
var inst_33273 = (state_33296[(2)]);
var inst_33274 = cljs.core.next.call(null,inst_33262);
var inst_33248 = inst_33274;
var inst_33249 = null;
var inst_33250 = (0);
var inst_33251 = (0);
var state_33296__$1 = (function (){var statearr_33299 = state_33296;
(statearr_33299[(8)] = inst_33251);

(statearr_33299[(9)] = inst_33273);

(statearr_33299[(10)] = inst_33249);

(statearr_33299[(11)] = inst_33248);

(statearr_33299[(12)] = inst_33250);

return statearr_33299;
})();
var statearr_33300_33340 = state_33296__$1;
(statearr_33300_33340[(2)] = null);

(statearr_33300_33340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (1))){
var state_33296__$1 = state_33296;
var statearr_33301_33341 = state_33296__$1;
(statearr_33301_33341[(2)] = null);

(statearr_33301_33341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (4))){
var inst_33237 = (state_33296[(13)]);
var inst_33237__$1 = (state_33296[(2)]);
var inst_33238 = (inst_33237__$1 == null);
var state_33296__$1 = (function (){var statearr_33302 = state_33296;
(statearr_33302[(13)] = inst_33237__$1);

return statearr_33302;
})();
if(cljs.core.truth_(inst_33238)){
var statearr_33303_33342 = state_33296__$1;
(statearr_33303_33342[(1)] = (5));

} else {
var statearr_33304_33343 = state_33296__$1;
(statearr_33304_33343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (15))){
var state_33296__$1 = state_33296;
var statearr_33308_33344 = state_33296__$1;
(statearr_33308_33344[(2)] = null);

(statearr_33308_33344[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (21))){
var state_33296__$1 = state_33296;
var statearr_33309_33345 = state_33296__$1;
(statearr_33309_33345[(2)] = null);

(statearr_33309_33345[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (13))){
var inst_33251 = (state_33296[(8)]);
var inst_33249 = (state_33296[(10)]);
var inst_33248 = (state_33296[(11)]);
var inst_33250 = (state_33296[(12)]);
var inst_33258 = (state_33296[(2)]);
var inst_33259 = (inst_33251 + (1));
var tmp33305 = inst_33249;
var tmp33306 = inst_33248;
var tmp33307 = inst_33250;
var inst_33248__$1 = tmp33306;
var inst_33249__$1 = tmp33305;
var inst_33250__$1 = tmp33307;
var inst_33251__$1 = inst_33259;
var state_33296__$1 = (function (){var statearr_33310 = state_33296;
(statearr_33310[(8)] = inst_33251__$1);

(statearr_33310[(10)] = inst_33249__$1);

(statearr_33310[(14)] = inst_33258);

(statearr_33310[(11)] = inst_33248__$1);

(statearr_33310[(12)] = inst_33250__$1);

return statearr_33310;
})();
var statearr_33311_33346 = state_33296__$1;
(statearr_33311_33346[(2)] = null);

(statearr_33311_33346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (22))){
var state_33296__$1 = state_33296;
var statearr_33312_33347 = state_33296__$1;
(statearr_33312_33347[(2)] = null);

(statearr_33312_33347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (6))){
var inst_33237 = (state_33296[(13)]);
var inst_33246 = f.call(null,inst_33237);
var inst_33247 = cljs.core.seq.call(null,inst_33246);
var inst_33248 = inst_33247;
var inst_33249 = null;
var inst_33250 = (0);
var inst_33251 = (0);
var state_33296__$1 = (function (){var statearr_33313 = state_33296;
(statearr_33313[(8)] = inst_33251);

(statearr_33313[(10)] = inst_33249);

(statearr_33313[(11)] = inst_33248);

(statearr_33313[(12)] = inst_33250);

return statearr_33313;
})();
var statearr_33314_33348 = state_33296__$1;
(statearr_33314_33348[(2)] = null);

(statearr_33314_33348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (17))){
var inst_33262 = (state_33296[(7)]);
var inst_33266 = cljs.core.chunk_first.call(null,inst_33262);
var inst_33267 = cljs.core.chunk_rest.call(null,inst_33262);
var inst_33268 = cljs.core.count.call(null,inst_33266);
var inst_33248 = inst_33267;
var inst_33249 = inst_33266;
var inst_33250 = inst_33268;
var inst_33251 = (0);
var state_33296__$1 = (function (){var statearr_33315 = state_33296;
(statearr_33315[(8)] = inst_33251);

(statearr_33315[(10)] = inst_33249);

(statearr_33315[(11)] = inst_33248);

(statearr_33315[(12)] = inst_33250);

return statearr_33315;
})();
var statearr_33316_33349 = state_33296__$1;
(statearr_33316_33349[(2)] = null);

(statearr_33316_33349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (3))){
var inst_33294 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33296__$1,inst_33294);
} else {
if((state_val_33297 === (12))){
var inst_33282 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33317_33350 = state_33296__$1;
(statearr_33317_33350[(2)] = inst_33282);

(statearr_33317_33350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (2))){
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33296__$1,(4),in$);
} else {
if((state_val_33297 === (23))){
var inst_33290 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33318_33351 = state_33296__$1;
(statearr_33318_33351[(2)] = inst_33290);

(statearr_33318_33351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (19))){
var inst_33277 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33319_33352 = state_33296__$1;
(statearr_33319_33352[(2)] = inst_33277);

(statearr_33319_33352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (11))){
var inst_33248 = (state_33296[(11)]);
var inst_33262 = (state_33296[(7)]);
var inst_33262__$1 = cljs.core.seq.call(null,inst_33248);
var state_33296__$1 = (function (){var statearr_33320 = state_33296;
(statearr_33320[(7)] = inst_33262__$1);

return statearr_33320;
})();
if(inst_33262__$1){
var statearr_33321_33353 = state_33296__$1;
(statearr_33321_33353[(1)] = (14));

} else {
var statearr_33322_33354 = state_33296__$1;
(statearr_33322_33354[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (9))){
var inst_33284 = (state_33296[(2)]);
var inst_33285 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33296__$1 = (function (){var statearr_33323 = state_33296;
(statearr_33323[(15)] = inst_33284);

return statearr_33323;
})();
if(cljs.core.truth_(inst_33285)){
var statearr_33324_33355 = state_33296__$1;
(statearr_33324_33355[(1)] = (21));

} else {
var statearr_33325_33356 = state_33296__$1;
(statearr_33325_33356[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (5))){
var inst_33240 = cljs.core.async.close_BANG_.call(null,out);
var state_33296__$1 = state_33296;
var statearr_33326_33357 = state_33296__$1;
(statearr_33326_33357[(2)] = inst_33240);

(statearr_33326_33357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (14))){
var inst_33262 = (state_33296[(7)]);
var inst_33264 = cljs.core.chunked_seq_QMARK_.call(null,inst_33262);
var state_33296__$1 = state_33296;
if(inst_33264){
var statearr_33327_33358 = state_33296__$1;
(statearr_33327_33358[(1)] = (17));

} else {
var statearr_33328_33359 = state_33296__$1;
(statearr_33328_33359[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (16))){
var inst_33280 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33329_33360 = state_33296__$1;
(statearr_33329_33360[(2)] = inst_33280);

(statearr_33329_33360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (10))){
var inst_33251 = (state_33296[(8)]);
var inst_33249 = (state_33296[(10)]);
var inst_33256 = cljs.core._nth.call(null,inst_33249,inst_33251);
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33296__$1,(13),out,inst_33256);
} else {
if((state_val_33297 === (18))){
var inst_33262 = (state_33296[(7)]);
var inst_33271 = cljs.core.first.call(null,inst_33262);
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33296__$1,(20),out,inst_33271);
} else {
if((state_val_33297 === (8))){
var inst_33251 = (state_33296[(8)]);
var inst_33250 = (state_33296[(12)]);
var inst_33253 = (inst_33251 < inst_33250);
var inst_33254 = inst_33253;
var state_33296__$1 = state_33296;
if(cljs.core.truth_(inst_33254)){
var statearr_33330_33361 = state_33296__$1;
(statearr_33330_33361[(1)] = (10));

} else {
var statearr_33331_33362 = state_33296__$1;
(statearr_33331_33362[(1)] = (11));

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
});})(c__18620__auto__))
;
return ((function (switch__18564__auto__,c__18620__auto__){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_33335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33335[(0)] = state_machine__18565__auto__);

(statearr_33335[(1)] = (1));

return statearr_33335;
});
var state_machine__18565__auto____1 = (function (state_33296){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_33296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e33336){if((e33336 instanceof Object)){
var ex__18568__auto__ = e33336;
var statearr_33337_33363 = state_33296;
(statearr_33337_33363[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33364 = state_33296;
state_33296 = G__33364;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_33296){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_33296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__))
})();
var state__18622__auto__ = (function (){var statearr_33338 = f__18621__auto__.call(null);
(statearr_33338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_33338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__))
);

return c__18620__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18620__auto___33461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___33461,out){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___33461,out){
return (function (state_33436){
var state_val_33437 = (state_33436[(1)]);
if((state_val_33437 === (7))){
var inst_33431 = (state_33436[(2)]);
var state_33436__$1 = state_33436;
var statearr_33438_33462 = state_33436__$1;
(statearr_33438_33462[(2)] = inst_33431);

(statearr_33438_33462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33437 === (1))){
var inst_33413 = null;
var state_33436__$1 = (function (){var statearr_33439 = state_33436;
(statearr_33439[(7)] = inst_33413);

return statearr_33439;
})();
var statearr_33440_33463 = state_33436__$1;
(statearr_33440_33463[(2)] = null);

(statearr_33440_33463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33437 === (4))){
var inst_33416 = (state_33436[(8)]);
var inst_33416__$1 = (state_33436[(2)]);
var inst_33417 = (inst_33416__$1 == null);
var inst_33418 = cljs.core.not.call(null,inst_33417);
var state_33436__$1 = (function (){var statearr_33441 = state_33436;
(statearr_33441[(8)] = inst_33416__$1);

return statearr_33441;
})();
if(inst_33418){
var statearr_33442_33464 = state_33436__$1;
(statearr_33442_33464[(1)] = (5));

} else {
var statearr_33443_33465 = state_33436__$1;
(statearr_33443_33465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33437 === (6))){
var state_33436__$1 = state_33436;
var statearr_33444_33466 = state_33436__$1;
(statearr_33444_33466[(2)] = null);

(statearr_33444_33466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33437 === (3))){
var inst_33433 = (state_33436[(2)]);
var inst_33434 = cljs.core.async.close_BANG_.call(null,out);
var state_33436__$1 = (function (){var statearr_33445 = state_33436;
(statearr_33445[(9)] = inst_33433);

return statearr_33445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33436__$1,inst_33434);
} else {
if((state_val_33437 === (2))){
var state_33436__$1 = state_33436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33436__$1,(4),ch);
} else {
if((state_val_33437 === (11))){
var inst_33416 = (state_33436[(8)]);
var inst_33425 = (state_33436[(2)]);
var inst_33413 = inst_33416;
var state_33436__$1 = (function (){var statearr_33446 = state_33436;
(statearr_33446[(7)] = inst_33413);

(statearr_33446[(10)] = inst_33425);

return statearr_33446;
})();
var statearr_33447_33467 = state_33436__$1;
(statearr_33447_33467[(2)] = null);

(statearr_33447_33467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33437 === (9))){
var inst_33416 = (state_33436[(8)]);
var state_33436__$1 = state_33436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33436__$1,(11),out,inst_33416);
} else {
if((state_val_33437 === (5))){
var inst_33413 = (state_33436[(7)]);
var inst_33416 = (state_33436[(8)]);
var inst_33420 = cljs.core._EQ_.call(null,inst_33416,inst_33413);
var state_33436__$1 = state_33436;
if(inst_33420){
var statearr_33449_33468 = state_33436__$1;
(statearr_33449_33468[(1)] = (8));

} else {
var statearr_33450_33469 = state_33436__$1;
(statearr_33450_33469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33437 === (10))){
var inst_33428 = (state_33436[(2)]);
var state_33436__$1 = state_33436;
var statearr_33451_33470 = state_33436__$1;
(statearr_33451_33470[(2)] = inst_33428);

(statearr_33451_33470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33437 === (8))){
var inst_33413 = (state_33436[(7)]);
var tmp33448 = inst_33413;
var inst_33413__$1 = tmp33448;
var state_33436__$1 = (function (){var statearr_33452 = state_33436;
(statearr_33452[(7)] = inst_33413__$1);

return statearr_33452;
})();
var statearr_33453_33471 = state_33436__$1;
(statearr_33453_33471[(2)] = null);

(statearr_33453_33471[(1)] = (2));


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
});})(c__18620__auto___33461,out))
;
return ((function (switch__18564__auto__,c__18620__auto___33461,out){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_33457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33457[(0)] = state_machine__18565__auto__);

(statearr_33457[(1)] = (1));

return statearr_33457;
});
var state_machine__18565__auto____1 = (function (state_33436){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_33436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e33458){if((e33458 instanceof Object)){
var ex__18568__auto__ = e33458;
var statearr_33459_33472 = state_33436;
(statearr_33459_33472[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33473 = state_33436;
state_33436 = G__33473;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_33436){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_33436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___33461,out))
})();
var state__18622__auto__ = (function (){var statearr_33460 = f__18621__auto__.call(null);
(statearr_33460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___33461);

return statearr_33460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___33461,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18620__auto___33608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___33608,out){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___33608,out){
return (function (state_33578){
var state_val_33579 = (state_33578[(1)]);
if((state_val_33579 === (7))){
var inst_33574 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33580_33609 = state_33578__$1;
(statearr_33580_33609[(2)] = inst_33574);

(statearr_33580_33609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (1))){
var inst_33541 = (new Array(n));
var inst_33542 = inst_33541;
var inst_33543 = (0);
var state_33578__$1 = (function (){var statearr_33581 = state_33578;
(statearr_33581[(7)] = inst_33543);

(statearr_33581[(8)] = inst_33542);

return statearr_33581;
})();
var statearr_33582_33610 = state_33578__$1;
(statearr_33582_33610[(2)] = null);

(statearr_33582_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (4))){
var inst_33546 = (state_33578[(9)]);
var inst_33546__$1 = (state_33578[(2)]);
var inst_33547 = (inst_33546__$1 == null);
var inst_33548 = cljs.core.not.call(null,inst_33547);
var state_33578__$1 = (function (){var statearr_33583 = state_33578;
(statearr_33583[(9)] = inst_33546__$1);

return statearr_33583;
})();
if(inst_33548){
var statearr_33584_33611 = state_33578__$1;
(statearr_33584_33611[(1)] = (5));

} else {
var statearr_33585_33612 = state_33578__$1;
(statearr_33585_33612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (15))){
var inst_33568 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33586_33613 = state_33578__$1;
(statearr_33586_33613[(2)] = inst_33568);

(statearr_33586_33613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (13))){
var state_33578__$1 = state_33578;
var statearr_33587_33614 = state_33578__$1;
(statearr_33587_33614[(2)] = null);

(statearr_33587_33614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (6))){
var inst_33543 = (state_33578[(7)]);
var inst_33564 = (inst_33543 > (0));
var state_33578__$1 = state_33578;
if(cljs.core.truth_(inst_33564)){
var statearr_33588_33615 = state_33578__$1;
(statearr_33588_33615[(1)] = (12));

} else {
var statearr_33589_33616 = state_33578__$1;
(statearr_33589_33616[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (3))){
var inst_33576 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33578__$1,inst_33576);
} else {
if((state_val_33579 === (12))){
var inst_33542 = (state_33578[(8)]);
var inst_33566 = cljs.core.vec.call(null,inst_33542);
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33578__$1,(15),out,inst_33566);
} else {
if((state_val_33579 === (2))){
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33578__$1,(4),ch);
} else {
if((state_val_33579 === (11))){
var inst_33558 = (state_33578[(2)]);
var inst_33559 = (new Array(n));
var inst_33542 = inst_33559;
var inst_33543 = (0);
var state_33578__$1 = (function (){var statearr_33590 = state_33578;
(statearr_33590[(7)] = inst_33543);

(statearr_33590[(10)] = inst_33558);

(statearr_33590[(8)] = inst_33542);

return statearr_33590;
})();
var statearr_33591_33617 = state_33578__$1;
(statearr_33591_33617[(2)] = null);

(statearr_33591_33617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (9))){
var inst_33542 = (state_33578[(8)]);
var inst_33556 = cljs.core.vec.call(null,inst_33542);
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33578__$1,(11),out,inst_33556);
} else {
if((state_val_33579 === (5))){
var inst_33543 = (state_33578[(7)]);
var inst_33551 = (state_33578[(11)]);
var inst_33546 = (state_33578[(9)]);
var inst_33542 = (state_33578[(8)]);
var inst_33550 = (inst_33542[inst_33543] = inst_33546);
var inst_33551__$1 = (inst_33543 + (1));
var inst_33552 = (inst_33551__$1 < n);
var state_33578__$1 = (function (){var statearr_33592 = state_33578;
(statearr_33592[(11)] = inst_33551__$1);

(statearr_33592[(12)] = inst_33550);

return statearr_33592;
})();
if(cljs.core.truth_(inst_33552)){
var statearr_33593_33618 = state_33578__$1;
(statearr_33593_33618[(1)] = (8));

} else {
var statearr_33594_33619 = state_33578__$1;
(statearr_33594_33619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (14))){
var inst_33571 = (state_33578[(2)]);
var inst_33572 = cljs.core.async.close_BANG_.call(null,out);
var state_33578__$1 = (function (){var statearr_33596 = state_33578;
(statearr_33596[(13)] = inst_33571);

return statearr_33596;
})();
var statearr_33597_33620 = state_33578__$1;
(statearr_33597_33620[(2)] = inst_33572);

(statearr_33597_33620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (10))){
var inst_33562 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33598_33621 = state_33578__$1;
(statearr_33598_33621[(2)] = inst_33562);

(statearr_33598_33621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (8))){
var inst_33551 = (state_33578[(11)]);
var inst_33542 = (state_33578[(8)]);
var tmp33595 = inst_33542;
var inst_33542__$1 = tmp33595;
var inst_33543 = inst_33551;
var state_33578__$1 = (function (){var statearr_33599 = state_33578;
(statearr_33599[(7)] = inst_33543);

(statearr_33599[(8)] = inst_33542__$1);

return statearr_33599;
})();
var statearr_33600_33622 = state_33578__$1;
(statearr_33600_33622[(2)] = null);

(statearr_33600_33622[(1)] = (2));


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
});})(c__18620__auto___33608,out))
;
return ((function (switch__18564__auto__,c__18620__auto___33608,out){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_33604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33604[(0)] = state_machine__18565__auto__);

(statearr_33604[(1)] = (1));

return statearr_33604;
});
var state_machine__18565__auto____1 = (function (state_33578){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_33578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e33605){if((e33605 instanceof Object)){
var ex__18568__auto__ = e33605;
var statearr_33606_33623 = state_33578;
(statearr_33606_33623[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33624 = state_33578;
state_33578 = G__33624;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_33578){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_33578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___33608,out))
})();
var state__18622__auto__ = (function (){var statearr_33607 = f__18621__auto__.call(null);
(statearr_33607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___33608);

return statearr_33607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___33608,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18620__auto___33767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___33767,out){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___33767,out){
return (function (state_33737){
var state_val_33738 = (state_33737[(1)]);
if((state_val_33738 === (7))){
var inst_33733 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33739_33768 = state_33737__$1;
(statearr_33739_33768[(2)] = inst_33733);

(statearr_33739_33768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (1))){
var inst_33696 = [];
var inst_33697 = inst_33696;
var inst_33698 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33737__$1 = (function (){var statearr_33740 = state_33737;
(statearr_33740[(7)] = inst_33698);

(statearr_33740[(8)] = inst_33697);

return statearr_33740;
})();
var statearr_33741_33769 = state_33737__$1;
(statearr_33741_33769[(2)] = null);

(statearr_33741_33769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (4))){
var inst_33701 = (state_33737[(9)]);
var inst_33701__$1 = (state_33737[(2)]);
var inst_33702 = (inst_33701__$1 == null);
var inst_33703 = cljs.core.not.call(null,inst_33702);
var state_33737__$1 = (function (){var statearr_33742 = state_33737;
(statearr_33742[(9)] = inst_33701__$1);

return statearr_33742;
})();
if(inst_33703){
var statearr_33743_33770 = state_33737__$1;
(statearr_33743_33770[(1)] = (5));

} else {
var statearr_33744_33771 = state_33737__$1;
(statearr_33744_33771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (15))){
var inst_33727 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33745_33772 = state_33737__$1;
(statearr_33745_33772[(2)] = inst_33727);

(statearr_33745_33772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (13))){
var state_33737__$1 = state_33737;
var statearr_33746_33773 = state_33737__$1;
(statearr_33746_33773[(2)] = null);

(statearr_33746_33773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (6))){
var inst_33697 = (state_33737[(8)]);
var inst_33722 = inst_33697.length;
var inst_33723 = (inst_33722 > (0));
var state_33737__$1 = state_33737;
if(cljs.core.truth_(inst_33723)){
var statearr_33747_33774 = state_33737__$1;
(statearr_33747_33774[(1)] = (12));

} else {
var statearr_33748_33775 = state_33737__$1;
(statearr_33748_33775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (3))){
var inst_33735 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33737__$1,inst_33735);
} else {
if((state_val_33738 === (12))){
var inst_33697 = (state_33737[(8)]);
var inst_33725 = cljs.core.vec.call(null,inst_33697);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33737__$1,(15),out,inst_33725);
} else {
if((state_val_33738 === (2))){
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33737__$1,(4),ch);
} else {
if((state_val_33738 === (11))){
var inst_33705 = (state_33737[(10)]);
var inst_33701 = (state_33737[(9)]);
var inst_33715 = (state_33737[(2)]);
var inst_33716 = [];
var inst_33717 = inst_33716.push(inst_33701);
var inst_33697 = inst_33716;
var inst_33698 = inst_33705;
var state_33737__$1 = (function (){var statearr_33749 = state_33737;
(statearr_33749[(11)] = inst_33715);

(statearr_33749[(7)] = inst_33698);

(statearr_33749[(12)] = inst_33717);

(statearr_33749[(8)] = inst_33697);

return statearr_33749;
})();
var statearr_33750_33776 = state_33737__$1;
(statearr_33750_33776[(2)] = null);

(statearr_33750_33776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (9))){
var inst_33697 = (state_33737[(8)]);
var inst_33713 = cljs.core.vec.call(null,inst_33697);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33737__$1,(11),out,inst_33713);
} else {
if((state_val_33738 === (5))){
var inst_33705 = (state_33737[(10)]);
var inst_33698 = (state_33737[(7)]);
var inst_33701 = (state_33737[(9)]);
var inst_33705__$1 = f.call(null,inst_33701);
var inst_33706 = cljs.core._EQ_.call(null,inst_33705__$1,inst_33698);
var inst_33707 = cljs.core.keyword_identical_QMARK_.call(null,inst_33698,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33708 = (inst_33706) || (inst_33707);
var state_33737__$1 = (function (){var statearr_33751 = state_33737;
(statearr_33751[(10)] = inst_33705__$1);

return statearr_33751;
})();
if(cljs.core.truth_(inst_33708)){
var statearr_33752_33777 = state_33737__$1;
(statearr_33752_33777[(1)] = (8));

} else {
var statearr_33753_33778 = state_33737__$1;
(statearr_33753_33778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (14))){
var inst_33730 = (state_33737[(2)]);
var inst_33731 = cljs.core.async.close_BANG_.call(null,out);
var state_33737__$1 = (function (){var statearr_33755 = state_33737;
(statearr_33755[(13)] = inst_33730);

return statearr_33755;
})();
var statearr_33756_33779 = state_33737__$1;
(statearr_33756_33779[(2)] = inst_33731);

(statearr_33756_33779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (10))){
var inst_33720 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33757_33780 = state_33737__$1;
(statearr_33757_33780[(2)] = inst_33720);

(statearr_33757_33780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (8))){
var inst_33705 = (state_33737[(10)]);
var inst_33701 = (state_33737[(9)]);
var inst_33697 = (state_33737[(8)]);
var inst_33710 = inst_33697.push(inst_33701);
var tmp33754 = inst_33697;
var inst_33697__$1 = tmp33754;
var inst_33698 = inst_33705;
var state_33737__$1 = (function (){var statearr_33758 = state_33737;
(statearr_33758[(14)] = inst_33710);

(statearr_33758[(7)] = inst_33698);

(statearr_33758[(8)] = inst_33697__$1);

return statearr_33758;
})();
var statearr_33759_33781 = state_33737__$1;
(statearr_33759_33781[(2)] = null);

(statearr_33759_33781[(1)] = (2));


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
});})(c__18620__auto___33767,out))
;
return ((function (switch__18564__auto__,c__18620__auto___33767,out){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_33763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33763[(0)] = state_machine__18565__auto__);

(statearr_33763[(1)] = (1));

return statearr_33763;
});
var state_machine__18565__auto____1 = (function (state_33737){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_33737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e33764){if((e33764 instanceof Object)){
var ex__18568__auto__ = e33764;
var statearr_33765_33782 = state_33737;
(statearr_33765_33782[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33783 = state_33737;
state_33737 = G__33783;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_33737){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_33737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___33767,out))
})();
var state__18622__auto__ = (function (){var statearr_33766 = f__18621__auto__.call(null);
(statearr_33766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___33767);

return statearr_33766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___33767,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1427852721507