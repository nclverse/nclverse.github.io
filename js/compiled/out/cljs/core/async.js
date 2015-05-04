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
if(typeof cljs.core.async.t30702 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30702 = (function (f,fn_handler,meta30703){
this.f = f;
this.fn_handler = fn_handler;
this.meta30703 = meta30703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30702.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30704){
var self__ = this;
var _30704__$1 = this;
return self__.meta30703;
});

cljs.core.async.t30702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30704,meta30703__$1){
var self__ = this;
var _30704__$1 = this;
return (new cljs.core.async.t30702(self__.f,self__.fn_handler,meta30703__$1));
});

cljs.core.async.t30702.cljs$lang$type = true;

cljs.core.async.t30702.cljs$lang$ctorStr = "cljs.core.async/t30702";

cljs.core.async.t30702.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30702");
});

cljs.core.async.__GT_t30702 = (function __GT_t30702(f__$1,fn_handler__$1,meta30703){
return (new cljs.core.async.t30702(f__$1,fn_handler__$1,meta30703));
});

}

return (new cljs.core.async.t30702(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30706 = buff;
if(G__30706){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__30706.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30706.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30706);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30706);
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
var val_30707 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30707);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30707,ret){
return (function (){
return fn1.call(null,val_30707);
});})(val_30707,ret))
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
var n__17032__auto___30708 = n;
var x_30709 = (0);
while(true){
if((x_30709 < n__17032__auto___30708)){
(a[x_30709] = (0));

var G__30710 = (x_30709 + (1));
x_30709 = G__30710;
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

var G__30711 = (i + (1));
i = G__30711;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30715 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30715 = (function (flag,alt_flag,meta30716){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30716 = meta30716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30715.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30717){
var self__ = this;
var _30717__$1 = this;
return self__.meta30716;
});})(flag))
;

cljs.core.async.t30715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30717,meta30716__$1){
var self__ = this;
var _30717__$1 = this;
return (new cljs.core.async.t30715(self__.flag,self__.alt_flag,meta30716__$1));
});})(flag))
;

cljs.core.async.t30715.cljs$lang$type = true;

cljs.core.async.t30715.cljs$lang$ctorStr = "cljs.core.async/t30715";

cljs.core.async.t30715.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30715");
});})(flag))
;

cljs.core.async.__GT_t30715 = ((function (flag){
return (function __GT_t30715(flag__$1,alt_flag__$1,meta30716){
return (new cljs.core.async.t30715(flag__$1,alt_flag__$1,meta30716));
});})(flag))
;

}

return (new cljs.core.async.t30715(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t30721 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30721 = (function (cb,flag,alt_handler,meta30722){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30722 = meta30722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30721.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30723){
var self__ = this;
var _30723__$1 = this;
return self__.meta30722;
});

cljs.core.async.t30721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30723,meta30722__$1){
var self__ = this;
var _30723__$1 = this;
return (new cljs.core.async.t30721(self__.cb,self__.flag,self__.alt_handler,meta30722__$1));
});

cljs.core.async.t30721.cljs$lang$type = true;

cljs.core.async.t30721.cljs$lang$ctorStr = "cljs.core.async/t30721";

cljs.core.async.t30721.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30721");
});

cljs.core.async.__GT_t30721 = (function __GT_t30721(cb__$1,flag__$1,alt_handler__$1,meta30722){
return (new cljs.core.async.t30721(cb__$1,flag__$1,alt_handler__$1,meta30722));
});

}

return (new cljs.core.async.t30721(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30724_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30724_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30725_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30725_SHARP_,port], null));
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
var G__30726 = (i + (1));
i = G__30726;
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
var alts_BANG___delegate = function (ports,p__30727){
var map__30729 = p__30727;
var map__30729__$1 = ((cljs.core.seq_QMARK_.call(null,map__30729))?cljs.core.apply.call(null,cljs.core.hash_map,map__30729):map__30729);
var opts = map__30729__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30727 = null;
if (arguments.length > 1) {
var G__30730__i = 0, G__30730__a = new Array(arguments.length -  1);
while (G__30730__i < G__30730__a.length) {G__30730__a[G__30730__i] = arguments[G__30730__i + 1]; ++G__30730__i;}
  p__30727 = new cljs.core.IndexedSeq(G__30730__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__30727);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30731){
var ports = cljs.core.first(arglist__30731);
var p__30727 = cljs.core.rest(arglist__30731);
return alts_BANG___delegate(ports,p__30727);
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
var c__18619__auto___30826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___30826){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___30826){
return (function (state_30802){
var state_val_30803 = (state_30802[(1)]);
if((state_val_30803 === (7))){
var inst_30798 = (state_30802[(2)]);
var state_30802__$1 = state_30802;
var statearr_30804_30827 = state_30802__$1;
(statearr_30804_30827[(2)] = inst_30798);

(statearr_30804_30827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30803 === (1))){
var state_30802__$1 = state_30802;
var statearr_30805_30828 = state_30802__$1;
(statearr_30805_30828[(2)] = null);

(statearr_30805_30828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30803 === (4))){
var inst_30781 = (state_30802[(7)]);
var inst_30781__$1 = (state_30802[(2)]);
var inst_30782 = (inst_30781__$1 == null);
var state_30802__$1 = (function (){var statearr_30806 = state_30802;
(statearr_30806[(7)] = inst_30781__$1);

return statearr_30806;
})();
if(cljs.core.truth_(inst_30782)){
var statearr_30807_30829 = state_30802__$1;
(statearr_30807_30829[(1)] = (5));

} else {
var statearr_30808_30830 = state_30802__$1;
(statearr_30808_30830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30803 === (13))){
var state_30802__$1 = state_30802;
var statearr_30809_30831 = state_30802__$1;
(statearr_30809_30831[(2)] = null);

(statearr_30809_30831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30803 === (6))){
var inst_30781 = (state_30802[(7)]);
var state_30802__$1 = state_30802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30802__$1,(11),to,inst_30781);
} else {
if((state_val_30803 === (3))){
var inst_30800 = (state_30802[(2)]);
var state_30802__$1 = state_30802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30802__$1,inst_30800);
} else {
if((state_val_30803 === (12))){
var state_30802__$1 = state_30802;
var statearr_30810_30832 = state_30802__$1;
(statearr_30810_30832[(2)] = null);

(statearr_30810_30832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30803 === (2))){
var state_30802__$1 = state_30802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30802__$1,(4),from);
} else {
if((state_val_30803 === (11))){
var inst_30791 = (state_30802[(2)]);
var state_30802__$1 = state_30802;
if(cljs.core.truth_(inst_30791)){
var statearr_30811_30833 = state_30802__$1;
(statearr_30811_30833[(1)] = (12));

} else {
var statearr_30812_30834 = state_30802__$1;
(statearr_30812_30834[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30803 === (9))){
var state_30802__$1 = state_30802;
var statearr_30813_30835 = state_30802__$1;
(statearr_30813_30835[(2)] = null);

(statearr_30813_30835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30803 === (5))){
var state_30802__$1 = state_30802;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30814_30836 = state_30802__$1;
(statearr_30814_30836[(1)] = (8));

} else {
var statearr_30815_30837 = state_30802__$1;
(statearr_30815_30837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30803 === (14))){
var inst_30796 = (state_30802[(2)]);
var state_30802__$1 = state_30802;
var statearr_30816_30838 = state_30802__$1;
(statearr_30816_30838[(2)] = inst_30796);

(statearr_30816_30838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30803 === (10))){
var inst_30788 = (state_30802[(2)]);
var state_30802__$1 = state_30802;
var statearr_30817_30839 = state_30802__$1;
(statearr_30817_30839[(2)] = inst_30788);

(statearr_30817_30839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30803 === (8))){
var inst_30785 = cljs.core.async.close_BANG_.call(null,to);
var state_30802__$1 = state_30802;
var statearr_30818_30840 = state_30802__$1;
(statearr_30818_30840[(2)] = inst_30785);

(statearr_30818_30840[(1)] = (10));


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
});})(c__18619__auto___30826))
;
return ((function (switch__18563__auto__,c__18619__auto___30826){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_30822 = [null,null,null,null,null,null,null,null];
(statearr_30822[(0)] = state_machine__18564__auto__);

(statearr_30822[(1)] = (1));

return statearr_30822;
});
var state_machine__18564__auto____1 = (function (state_30802){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_30802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e30823){if((e30823 instanceof Object)){
var ex__18567__auto__ = e30823;
var statearr_30824_30841 = state_30802;
(statearr_30824_30841[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30842 = state_30802;
state_30802 = G__30842;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_30802){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_30802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___30826))
})();
var state__18621__auto__ = (function (){var statearr_30825 = f__18620__auto__.call(null);
(statearr_30825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___30826);

return statearr_30825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___30826))
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
return (function (p__31026){
var vec__31027 = p__31026;
var v = cljs.core.nth.call(null,vec__31027,(0),null);
var p = cljs.core.nth.call(null,vec__31027,(1),null);
var job = vec__31027;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18619__auto___31209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___31209,res,vec__31027,v,p,job,jobs,results){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___31209,res,vec__31027,v,p,job,jobs,results){
return (function (state_31032){
var state_val_31033 = (state_31032[(1)]);
if((state_val_31033 === (2))){
var inst_31029 = (state_31032[(2)]);
var inst_31030 = cljs.core.async.close_BANG_.call(null,res);
var state_31032__$1 = (function (){var statearr_31034 = state_31032;
(statearr_31034[(7)] = inst_31029);

return statearr_31034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31032__$1,inst_31030);
} else {
if((state_val_31033 === (1))){
var state_31032__$1 = state_31032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31032__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18619__auto___31209,res,vec__31027,v,p,job,jobs,results))
;
return ((function (switch__18563__auto__,c__18619__auto___31209,res,vec__31027,v,p,job,jobs,results){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_31038 = [null,null,null,null,null,null,null,null];
(statearr_31038[(0)] = state_machine__18564__auto__);

(statearr_31038[(1)] = (1));

return statearr_31038;
});
var state_machine__18564__auto____1 = (function (state_31032){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_31032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e31039){if((e31039 instanceof Object)){
var ex__18567__auto__ = e31039;
var statearr_31040_31210 = state_31032;
(statearr_31040_31210[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31211 = state_31032;
state_31032 = G__31211;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_31032){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_31032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___31209,res,vec__31027,v,p,job,jobs,results))
})();
var state__18621__auto__ = (function (){var statearr_31041 = f__18620__auto__.call(null);
(statearr_31041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___31209);

return statearr_31041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___31209,res,vec__31027,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31042){
var vec__31043 = p__31042;
var v = cljs.core.nth.call(null,vec__31043,(0),null);
var p = cljs.core.nth.call(null,vec__31043,(1),null);
var job = vec__31043;
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
var n__17032__auto___31212 = n;
var __31213 = (0);
while(true){
if((__31213 < n__17032__auto___31212)){
var G__31044_31214 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31044_31214) {
case "async":
var c__18619__auto___31216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31213,c__18619__auto___31216,G__31044_31214,n__17032__auto___31212,jobs,results,process,async){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (__31213,c__18619__auto___31216,G__31044_31214,n__17032__auto___31212,jobs,results,process,async){
return (function (state_31057){
var state_val_31058 = (state_31057[(1)]);
if((state_val_31058 === (7))){
var inst_31053 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31059_31217 = state_31057__$1;
(statearr_31059_31217[(2)] = inst_31053);

(statearr_31059_31217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (6))){
var state_31057__$1 = state_31057;
var statearr_31060_31218 = state_31057__$1;
(statearr_31060_31218[(2)] = null);

(statearr_31060_31218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (5))){
var state_31057__$1 = state_31057;
var statearr_31061_31219 = state_31057__$1;
(statearr_31061_31219[(2)] = null);

(statearr_31061_31219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (4))){
var inst_31047 = (state_31057[(2)]);
var inst_31048 = async.call(null,inst_31047);
var state_31057__$1 = state_31057;
if(cljs.core.truth_(inst_31048)){
var statearr_31062_31220 = state_31057__$1;
(statearr_31062_31220[(1)] = (5));

} else {
var statearr_31063_31221 = state_31057__$1;
(statearr_31063_31221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (3))){
var inst_31055 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31057__$1,inst_31055);
} else {
if((state_val_31058 === (2))){
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31057__$1,(4),jobs);
} else {
if((state_val_31058 === (1))){
var state_31057__$1 = state_31057;
var statearr_31064_31222 = state_31057__$1;
(statearr_31064_31222[(2)] = null);

(statearr_31064_31222[(1)] = (2));


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
});})(__31213,c__18619__auto___31216,G__31044_31214,n__17032__auto___31212,jobs,results,process,async))
;
return ((function (__31213,switch__18563__auto__,c__18619__auto___31216,G__31044_31214,n__17032__auto___31212,jobs,results,process,async){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_31068 = [null,null,null,null,null,null,null];
(statearr_31068[(0)] = state_machine__18564__auto__);

(statearr_31068[(1)] = (1));

return statearr_31068;
});
var state_machine__18564__auto____1 = (function (state_31057){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_31057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e31069){if((e31069 instanceof Object)){
var ex__18567__auto__ = e31069;
var statearr_31070_31223 = state_31057;
(statearr_31070_31223[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31224 = state_31057;
state_31057 = G__31224;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_31057){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_31057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(__31213,switch__18563__auto__,c__18619__auto___31216,G__31044_31214,n__17032__auto___31212,jobs,results,process,async))
})();
var state__18621__auto__ = (function (){var statearr_31071 = f__18620__auto__.call(null);
(statearr_31071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___31216);

return statearr_31071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(__31213,c__18619__auto___31216,G__31044_31214,n__17032__auto___31212,jobs,results,process,async))
);


break;
case "compute":
var c__18619__auto___31225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31213,c__18619__auto___31225,G__31044_31214,n__17032__auto___31212,jobs,results,process,async){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (__31213,c__18619__auto___31225,G__31044_31214,n__17032__auto___31212,jobs,results,process,async){
return (function (state_31084){
var state_val_31085 = (state_31084[(1)]);
if((state_val_31085 === (7))){
var inst_31080 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31086_31226 = state_31084__$1;
(statearr_31086_31226[(2)] = inst_31080);

(statearr_31086_31226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (6))){
var state_31084__$1 = state_31084;
var statearr_31087_31227 = state_31084__$1;
(statearr_31087_31227[(2)] = null);

(statearr_31087_31227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (5))){
var state_31084__$1 = state_31084;
var statearr_31088_31228 = state_31084__$1;
(statearr_31088_31228[(2)] = null);

(statearr_31088_31228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (4))){
var inst_31074 = (state_31084[(2)]);
var inst_31075 = process.call(null,inst_31074);
var state_31084__$1 = state_31084;
if(cljs.core.truth_(inst_31075)){
var statearr_31089_31229 = state_31084__$1;
(statearr_31089_31229[(1)] = (5));

} else {
var statearr_31090_31230 = state_31084__$1;
(statearr_31090_31230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (3))){
var inst_31082 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31084__$1,inst_31082);
} else {
if((state_val_31085 === (2))){
var state_31084__$1 = state_31084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31084__$1,(4),jobs);
} else {
if((state_val_31085 === (1))){
var state_31084__$1 = state_31084;
var statearr_31091_31231 = state_31084__$1;
(statearr_31091_31231[(2)] = null);

(statearr_31091_31231[(1)] = (2));


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
});})(__31213,c__18619__auto___31225,G__31044_31214,n__17032__auto___31212,jobs,results,process,async))
;
return ((function (__31213,switch__18563__auto__,c__18619__auto___31225,G__31044_31214,n__17032__auto___31212,jobs,results,process,async){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_31095 = [null,null,null,null,null,null,null];
(statearr_31095[(0)] = state_machine__18564__auto__);

(statearr_31095[(1)] = (1));

return statearr_31095;
});
var state_machine__18564__auto____1 = (function (state_31084){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_31084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e31096){if((e31096 instanceof Object)){
var ex__18567__auto__ = e31096;
var statearr_31097_31232 = state_31084;
(statearr_31097_31232[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31233 = state_31084;
state_31084 = G__31233;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_31084){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_31084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(__31213,switch__18563__auto__,c__18619__auto___31225,G__31044_31214,n__17032__auto___31212,jobs,results,process,async))
})();
var state__18621__auto__ = (function (){var statearr_31098 = f__18620__auto__.call(null);
(statearr_31098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___31225);

return statearr_31098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(__31213,c__18619__auto___31225,G__31044_31214,n__17032__auto___31212,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31234 = (__31213 + (1));
__31213 = G__31234;
continue;
} else {
}
break;
}

var c__18619__auto___31235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___31235,jobs,results,process,async){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___31235,jobs,results,process,async){
return (function (state_31120){
var state_val_31121 = (state_31120[(1)]);
if((state_val_31121 === (9))){
var inst_31113 = (state_31120[(2)]);
var state_31120__$1 = (function (){var statearr_31122 = state_31120;
(statearr_31122[(7)] = inst_31113);

return statearr_31122;
})();
var statearr_31123_31236 = state_31120__$1;
(statearr_31123_31236[(2)] = null);

(statearr_31123_31236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31121 === (8))){
var inst_31106 = (state_31120[(8)]);
var inst_31111 = (state_31120[(2)]);
var state_31120__$1 = (function (){var statearr_31124 = state_31120;
(statearr_31124[(9)] = inst_31111);

return statearr_31124;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31120__$1,(9),results,inst_31106);
} else {
if((state_val_31121 === (7))){
var inst_31116 = (state_31120[(2)]);
var state_31120__$1 = state_31120;
var statearr_31125_31237 = state_31120__$1;
(statearr_31125_31237[(2)] = inst_31116);

(statearr_31125_31237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31121 === (6))){
var inst_31101 = (state_31120[(10)]);
var inst_31106 = (state_31120[(8)]);
var inst_31106__$1 = cljs.core.async.chan.call(null,(1));
var inst_31107 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31108 = [inst_31101,inst_31106__$1];
var inst_31109 = (new cljs.core.PersistentVector(null,2,(5),inst_31107,inst_31108,null));
var state_31120__$1 = (function (){var statearr_31126 = state_31120;
(statearr_31126[(8)] = inst_31106__$1);

return statearr_31126;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31120__$1,(8),jobs,inst_31109);
} else {
if((state_val_31121 === (5))){
var inst_31104 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31120__$1 = state_31120;
var statearr_31127_31238 = state_31120__$1;
(statearr_31127_31238[(2)] = inst_31104);

(statearr_31127_31238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31121 === (4))){
var inst_31101 = (state_31120[(10)]);
var inst_31101__$1 = (state_31120[(2)]);
var inst_31102 = (inst_31101__$1 == null);
var state_31120__$1 = (function (){var statearr_31128 = state_31120;
(statearr_31128[(10)] = inst_31101__$1);

return statearr_31128;
})();
if(cljs.core.truth_(inst_31102)){
var statearr_31129_31239 = state_31120__$1;
(statearr_31129_31239[(1)] = (5));

} else {
var statearr_31130_31240 = state_31120__$1;
(statearr_31130_31240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31121 === (3))){
var inst_31118 = (state_31120[(2)]);
var state_31120__$1 = state_31120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31120__$1,inst_31118);
} else {
if((state_val_31121 === (2))){
var state_31120__$1 = state_31120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31120__$1,(4),from);
} else {
if((state_val_31121 === (1))){
var state_31120__$1 = state_31120;
var statearr_31131_31241 = state_31120__$1;
(statearr_31131_31241[(2)] = null);

(statearr_31131_31241[(1)] = (2));


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
});})(c__18619__auto___31235,jobs,results,process,async))
;
return ((function (switch__18563__auto__,c__18619__auto___31235,jobs,results,process,async){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_31135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31135[(0)] = state_machine__18564__auto__);

(statearr_31135[(1)] = (1));

return statearr_31135;
});
var state_machine__18564__auto____1 = (function (state_31120){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_31120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e31136){if((e31136 instanceof Object)){
var ex__18567__auto__ = e31136;
var statearr_31137_31242 = state_31120;
(statearr_31137_31242[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31243 = state_31120;
state_31120 = G__31243;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_31120){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_31120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___31235,jobs,results,process,async))
})();
var state__18621__auto__ = (function (){var statearr_31138 = f__18620__auto__.call(null);
(statearr_31138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___31235);

return statearr_31138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___31235,jobs,results,process,async))
);


var c__18619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto__,jobs,results,process,async){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto__,jobs,results,process,async){
return (function (state_31176){
var state_val_31177 = (state_31176[(1)]);
if((state_val_31177 === (7))){
var inst_31172 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
var statearr_31178_31244 = state_31176__$1;
(statearr_31178_31244[(2)] = inst_31172);

(statearr_31178_31244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (20))){
var state_31176__$1 = state_31176;
var statearr_31179_31245 = state_31176__$1;
(statearr_31179_31245[(2)] = null);

(statearr_31179_31245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (1))){
var state_31176__$1 = state_31176;
var statearr_31180_31246 = state_31176__$1;
(statearr_31180_31246[(2)] = null);

(statearr_31180_31246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (4))){
var inst_31141 = (state_31176[(7)]);
var inst_31141__$1 = (state_31176[(2)]);
var inst_31142 = (inst_31141__$1 == null);
var state_31176__$1 = (function (){var statearr_31181 = state_31176;
(statearr_31181[(7)] = inst_31141__$1);

return statearr_31181;
})();
if(cljs.core.truth_(inst_31142)){
var statearr_31182_31247 = state_31176__$1;
(statearr_31182_31247[(1)] = (5));

} else {
var statearr_31183_31248 = state_31176__$1;
(statearr_31183_31248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (15))){
var inst_31154 = (state_31176[(8)]);
var state_31176__$1 = state_31176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31176__$1,(18),to,inst_31154);
} else {
if((state_val_31177 === (21))){
var inst_31167 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
var statearr_31184_31249 = state_31176__$1;
(statearr_31184_31249[(2)] = inst_31167);

(statearr_31184_31249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (13))){
var inst_31169 = (state_31176[(2)]);
var state_31176__$1 = (function (){var statearr_31185 = state_31176;
(statearr_31185[(9)] = inst_31169);

return statearr_31185;
})();
var statearr_31186_31250 = state_31176__$1;
(statearr_31186_31250[(2)] = null);

(statearr_31186_31250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (6))){
var inst_31141 = (state_31176[(7)]);
var state_31176__$1 = state_31176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31176__$1,(11),inst_31141);
} else {
if((state_val_31177 === (17))){
var inst_31162 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
if(cljs.core.truth_(inst_31162)){
var statearr_31187_31251 = state_31176__$1;
(statearr_31187_31251[(1)] = (19));

} else {
var statearr_31188_31252 = state_31176__$1;
(statearr_31188_31252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (3))){
var inst_31174 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31176__$1,inst_31174);
} else {
if((state_val_31177 === (12))){
var inst_31151 = (state_31176[(10)]);
var state_31176__$1 = state_31176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31176__$1,(14),inst_31151);
} else {
if((state_val_31177 === (2))){
var state_31176__$1 = state_31176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31176__$1,(4),results);
} else {
if((state_val_31177 === (19))){
var state_31176__$1 = state_31176;
var statearr_31189_31253 = state_31176__$1;
(statearr_31189_31253[(2)] = null);

(statearr_31189_31253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (11))){
var inst_31151 = (state_31176[(2)]);
var state_31176__$1 = (function (){var statearr_31190 = state_31176;
(statearr_31190[(10)] = inst_31151);

return statearr_31190;
})();
var statearr_31191_31254 = state_31176__$1;
(statearr_31191_31254[(2)] = null);

(statearr_31191_31254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (9))){
var state_31176__$1 = state_31176;
var statearr_31192_31255 = state_31176__$1;
(statearr_31192_31255[(2)] = null);

(statearr_31192_31255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (5))){
var state_31176__$1 = state_31176;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31193_31256 = state_31176__$1;
(statearr_31193_31256[(1)] = (8));

} else {
var statearr_31194_31257 = state_31176__$1;
(statearr_31194_31257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (14))){
var inst_31156 = (state_31176[(11)]);
var inst_31154 = (state_31176[(8)]);
var inst_31154__$1 = (state_31176[(2)]);
var inst_31155 = (inst_31154__$1 == null);
var inst_31156__$1 = cljs.core.not.call(null,inst_31155);
var state_31176__$1 = (function (){var statearr_31195 = state_31176;
(statearr_31195[(11)] = inst_31156__$1);

(statearr_31195[(8)] = inst_31154__$1);

return statearr_31195;
})();
if(inst_31156__$1){
var statearr_31196_31258 = state_31176__$1;
(statearr_31196_31258[(1)] = (15));

} else {
var statearr_31197_31259 = state_31176__$1;
(statearr_31197_31259[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (16))){
var inst_31156 = (state_31176[(11)]);
var state_31176__$1 = state_31176;
var statearr_31198_31260 = state_31176__$1;
(statearr_31198_31260[(2)] = inst_31156);

(statearr_31198_31260[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (10))){
var inst_31148 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
var statearr_31199_31261 = state_31176__$1;
(statearr_31199_31261[(2)] = inst_31148);

(statearr_31199_31261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (18))){
var inst_31159 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
var statearr_31200_31262 = state_31176__$1;
(statearr_31200_31262[(2)] = inst_31159);

(statearr_31200_31262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (8))){
var inst_31145 = cljs.core.async.close_BANG_.call(null,to);
var state_31176__$1 = state_31176;
var statearr_31201_31263 = state_31176__$1;
(statearr_31201_31263[(2)] = inst_31145);

(statearr_31201_31263[(1)] = (10));


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
});})(c__18619__auto__,jobs,results,process,async))
;
return ((function (switch__18563__auto__,c__18619__auto__,jobs,results,process,async){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_31205 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31205[(0)] = state_machine__18564__auto__);

(statearr_31205[(1)] = (1));

return statearr_31205;
});
var state_machine__18564__auto____1 = (function (state_31176){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_31176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e31206){if((e31206 instanceof Object)){
var ex__18567__auto__ = e31206;
var statearr_31207_31264 = state_31176;
(statearr_31207_31264[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31265 = state_31176;
state_31176 = G__31265;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_31176){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_31176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto__,jobs,results,process,async))
})();
var state__18621__auto__ = (function (){var statearr_31208 = f__18620__auto__.call(null);
(statearr_31208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto__);

return statearr_31208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto__,jobs,results,process,async))
);

return c__18619__auto__;
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
var c__18619__auto___31366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___31366,tc,fc){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___31366,tc,fc){
return (function (state_31341){
var state_val_31342 = (state_31341[(1)]);
if((state_val_31342 === (7))){
var inst_31337 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
var statearr_31343_31367 = state_31341__$1;
(statearr_31343_31367[(2)] = inst_31337);

(statearr_31343_31367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (1))){
var state_31341__$1 = state_31341;
var statearr_31344_31368 = state_31341__$1;
(statearr_31344_31368[(2)] = null);

(statearr_31344_31368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (4))){
var inst_31318 = (state_31341[(7)]);
var inst_31318__$1 = (state_31341[(2)]);
var inst_31319 = (inst_31318__$1 == null);
var state_31341__$1 = (function (){var statearr_31345 = state_31341;
(statearr_31345[(7)] = inst_31318__$1);

return statearr_31345;
})();
if(cljs.core.truth_(inst_31319)){
var statearr_31346_31369 = state_31341__$1;
(statearr_31346_31369[(1)] = (5));

} else {
var statearr_31347_31370 = state_31341__$1;
(statearr_31347_31370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (13))){
var state_31341__$1 = state_31341;
var statearr_31348_31371 = state_31341__$1;
(statearr_31348_31371[(2)] = null);

(statearr_31348_31371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (6))){
var inst_31318 = (state_31341[(7)]);
var inst_31324 = p.call(null,inst_31318);
var state_31341__$1 = state_31341;
if(cljs.core.truth_(inst_31324)){
var statearr_31349_31372 = state_31341__$1;
(statearr_31349_31372[(1)] = (9));

} else {
var statearr_31350_31373 = state_31341__$1;
(statearr_31350_31373[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (3))){
var inst_31339 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31341__$1,inst_31339);
} else {
if((state_val_31342 === (12))){
var state_31341__$1 = state_31341;
var statearr_31351_31374 = state_31341__$1;
(statearr_31351_31374[(2)] = null);

(statearr_31351_31374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (2))){
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31341__$1,(4),ch);
} else {
if((state_val_31342 === (11))){
var inst_31318 = (state_31341[(7)]);
var inst_31328 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31341__$1,(8),inst_31328,inst_31318);
} else {
if((state_val_31342 === (9))){
var state_31341__$1 = state_31341;
var statearr_31352_31375 = state_31341__$1;
(statearr_31352_31375[(2)] = tc);

(statearr_31352_31375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (5))){
var inst_31321 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31322 = cljs.core.async.close_BANG_.call(null,fc);
var state_31341__$1 = (function (){var statearr_31353 = state_31341;
(statearr_31353[(8)] = inst_31321);

return statearr_31353;
})();
var statearr_31354_31376 = state_31341__$1;
(statearr_31354_31376[(2)] = inst_31322);

(statearr_31354_31376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (14))){
var inst_31335 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
var statearr_31355_31377 = state_31341__$1;
(statearr_31355_31377[(2)] = inst_31335);

(statearr_31355_31377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (10))){
var state_31341__$1 = state_31341;
var statearr_31356_31378 = state_31341__$1;
(statearr_31356_31378[(2)] = fc);

(statearr_31356_31378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (8))){
var inst_31330 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
if(cljs.core.truth_(inst_31330)){
var statearr_31357_31379 = state_31341__$1;
(statearr_31357_31379[(1)] = (12));

} else {
var statearr_31358_31380 = state_31341__$1;
(statearr_31358_31380[(1)] = (13));

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
});})(c__18619__auto___31366,tc,fc))
;
return ((function (switch__18563__auto__,c__18619__auto___31366,tc,fc){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_31362 = [null,null,null,null,null,null,null,null,null];
(statearr_31362[(0)] = state_machine__18564__auto__);

(statearr_31362[(1)] = (1));

return statearr_31362;
});
var state_machine__18564__auto____1 = (function (state_31341){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_31341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e31363){if((e31363 instanceof Object)){
var ex__18567__auto__ = e31363;
var statearr_31364_31381 = state_31341;
(statearr_31364_31381[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31382 = state_31341;
state_31341 = G__31382;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_31341){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_31341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___31366,tc,fc))
})();
var state__18621__auto__ = (function (){var statearr_31365 = f__18620__auto__.call(null);
(statearr_31365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___31366);

return statearr_31365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___31366,tc,fc))
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
var c__18619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto__){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto__){
return (function (state_31429){
var state_val_31430 = (state_31429[(1)]);
if((state_val_31430 === (7))){
var inst_31425 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31431_31447 = state_31429__$1;
(statearr_31431_31447[(2)] = inst_31425);

(statearr_31431_31447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (6))){
var inst_31418 = (state_31429[(7)]);
var inst_31415 = (state_31429[(8)]);
var inst_31422 = f.call(null,inst_31415,inst_31418);
var inst_31415__$1 = inst_31422;
var state_31429__$1 = (function (){var statearr_31432 = state_31429;
(statearr_31432[(8)] = inst_31415__$1);

return statearr_31432;
})();
var statearr_31433_31448 = state_31429__$1;
(statearr_31433_31448[(2)] = null);

(statearr_31433_31448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (5))){
var inst_31415 = (state_31429[(8)]);
var state_31429__$1 = state_31429;
var statearr_31434_31449 = state_31429__$1;
(statearr_31434_31449[(2)] = inst_31415);

(statearr_31434_31449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (4))){
var inst_31418 = (state_31429[(7)]);
var inst_31418__$1 = (state_31429[(2)]);
var inst_31419 = (inst_31418__$1 == null);
var state_31429__$1 = (function (){var statearr_31435 = state_31429;
(statearr_31435[(7)] = inst_31418__$1);

return statearr_31435;
})();
if(cljs.core.truth_(inst_31419)){
var statearr_31436_31450 = state_31429__$1;
(statearr_31436_31450[(1)] = (5));

} else {
var statearr_31437_31451 = state_31429__$1;
(statearr_31437_31451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (3))){
var inst_31427 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31429__$1,inst_31427);
} else {
if((state_val_31430 === (2))){
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31429__$1,(4),ch);
} else {
if((state_val_31430 === (1))){
var inst_31415 = init;
var state_31429__$1 = (function (){var statearr_31438 = state_31429;
(statearr_31438[(8)] = inst_31415);

return statearr_31438;
})();
var statearr_31439_31452 = state_31429__$1;
(statearr_31439_31452[(2)] = null);

(statearr_31439_31452[(1)] = (2));


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
});})(c__18619__auto__))
;
return ((function (switch__18563__auto__,c__18619__auto__){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_31443 = [null,null,null,null,null,null,null,null,null];
(statearr_31443[(0)] = state_machine__18564__auto__);

(statearr_31443[(1)] = (1));

return statearr_31443;
});
var state_machine__18564__auto____1 = (function (state_31429){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_31429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e31444){if((e31444 instanceof Object)){
var ex__18567__auto__ = e31444;
var statearr_31445_31453 = state_31429;
(statearr_31445_31453[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31454 = state_31429;
state_31429 = G__31454;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_31429){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_31429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto__))
})();
var state__18621__auto__ = (function (){var statearr_31446 = f__18620__auto__.call(null);
(statearr_31446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto__);

return statearr_31446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto__))
);

return c__18619__auto__;
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
var c__18619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto__){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto__){
return (function (state_31528){
var state_val_31529 = (state_31528[(1)]);
if((state_val_31529 === (7))){
var inst_31510 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31530_31553 = state_31528__$1;
(statearr_31530_31553[(2)] = inst_31510);

(statearr_31530_31553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (1))){
var inst_31504 = cljs.core.seq.call(null,coll);
var inst_31505 = inst_31504;
var state_31528__$1 = (function (){var statearr_31531 = state_31528;
(statearr_31531[(7)] = inst_31505);

return statearr_31531;
})();
var statearr_31532_31554 = state_31528__$1;
(statearr_31532_31554[(2)] = null);

(statearr_31532_31554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (4))){
var inst_31505 = (state_31528[(7)]);
var inst_31508 = cljs.core.first.call(null,inst_31505);
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31528__$1,(7),ch,inst_31508);
} else {
if((state_val_31529 === (13))){
var inst_31522 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31533_31555 = state_31528__$1;
(statearr_31533_31555[(2)] = inst_31522);

(statearr_31533_31555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (6))){
var inst_31513 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
if(cljs.core.truth_(inst_31513)){
var statearr_31534_31556 = state_31528__$1;
(statearr_31534_31556[(1)] = (8));

} else {
var statearr_31535_31557 = state_31528__$1;
(statearr_31535_31557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (3))){
var inst_31526 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31528__$1,inst_31526);
} else {
if((state_val_31529 === (12))){
var state_31528__$1 = state_31528;
var statearr_31536_31558 = state_31528__$1;
(statearr_31536_31558[(2)] = null);

(statearr_31536_31558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (2))){
var inst_31505 = (state_31528[(7)]);
var state_31528__$1 = state_31528;
if(cljs.core.truth_(inst_31505)){
var statearr_31537_31559 = state_31528__$1;
(statearr_31537_31559[(1)] = (4));

} else {
var statearr_31538_31560 = state_31528__$1;
(statearr_31538_31560[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (11))){
var inst_31519 = cljs.core.async.close_BANG_.call(null,ch);
var state_31528__$1 = state_31528;
var statearr_31539_31561 = state_31528__$1;
(statearr_31539_31561[(2)] = inst_31519);

(statearr_31539_31561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (9))){
var state_31528__$1 = state_31528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31540_31562 = state_31528__$1;
(statearr_31540_31562[(1)] = (11));

} else {
var statearr_31541_31563 = state_31528__$1;
(statearr_31541_31563[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (5))){
var inst_31505 = (state_31528[(7)]);
var state_31528__$1 = state_31528;
var statearr_31542_31564 = state_31528__$1;
(statearr_31542_31564[(2)] = inst_31505);

(statearr_31542_31564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (10))){
var inst_31524 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31543_31565 = state_31528__$1;
(statearr_31543_31565[(2)] = inst_31524);

(statearr_31543_31565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (8))){
var inst_31505 = (state_31528[(7)]);
var inst_31515 = cljs.core.next.call(null,inst_31505);
var inst_31505__$1 = inst_31515;
var state_31528__$1 = (function (){var statearr_31544 = state_31528;
(statearr_31544[(7)] = inst_31505__$1);

return statearr_31544;
})();
var statearr_31545_31566 = state_31528__$1;
(statearr_31545_31566[(2)] = null);

(statearr_31545_31566[(1)] = (2));


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
});})(c__18619__auto__))
;
return ((function (switch__18563__auto__,c__18619__auto__){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_31549 = [null,null,null,null,null,null,null,null];
(statearr_31549[(0)] = state_machine__18564__auto__);

(statearr_31549[(1)] = (1));

return statearr_31549;
});
var state_machine__18564__auto____1 = (function (state_31528){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_31528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e31550){if((e31550 instanceof Object)){
var ex__18567__auto__ = e31550;
var statearr_31551_31567 = state_31528;
(statearr_31551_31567[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31568 = state_31528;
state_31528 = G__31568;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_31528){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_31528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto__))
})();
var state__18621__auto__ = (function (){var statearr_31552 = f__18620__auto__.call(null);
(statearr_31552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto__);

return statearr_31552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto__))
);

return c__18619__auto__;
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

cljs.core.async.Mux = (function (){var obj31570 = {};
return obj31570;
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


cljs.core.async.Mult = (function (){var obj31572 = {};
return obj31572;
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
if(typeof cljs.core.async.t31794 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31794 = (function (cs,ch,mult,meta31795){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31795 = meta31795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31794.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31794.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31794.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31794.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31794.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31796){
var self__ = this;
var _31796__$1 = this;
return self__.meta31795;
});})(cs))
;

cljs.core.async.t31794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31796,meta31795__$1){
var self__ = this;
var _31796__$1 = this;
return (new cljs.core.async.t31794(self__.cs,self__.ch,self__.mult,meta31795__$1));
});})(cs))
;

cljs.core.async.t31794.cljs$lang$type = true;

cljs.core.async.t31794.cljs$lang$ctorStr = "cljs.core.async/t31794";

cljs.core.async.t31794.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31794");
});})(cs))
;

cljs.core.async.__GT_t31794 = ((function (cs){
return (function __GT_t31794(cs__$1,ch__$1,mult__$1,meta31795){
return (new cljs.core.async.t31794(cs__$1,ch__$1,mult__$1,meta31795));
});})(cs))
;

}

return (new cljs.core.async.t31794(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18619__auto___32015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___32015,cs,m,dchan,dctr,done){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___32015,cs,m,dchan,dctr,done){
return (function (state_31927){
var state_val_31928 = (state_31927[(1)]);
if((state_val_31928 === (7))){
var inst_31923 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31929_32016 = state_31927__$1;
(statearr_31929_32016[(2)] = inst_31923);

(statearr_31929_32016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (20))){
var inst_31828 = (state_31927[(7)]);
var inst_31838 = cljs.core.first.call(null,inst_31828);
var inst_31839 = cljs.core.nth.call(null,inst_31838,(0),null);
var inst_31840 = cljs.core.nth.call(null,inst_31838,(1),null);
var state_31927__$1 = (function (){var statearr_31930 = state_31927;
(statearr_31930[(8)] = inst_31839);

return statearr_31930;
})();
if(cljs.core.truth_(inst_31840)){
var statearr_31931_32017 = state_31927__$1;
(statearr_31931_32017[(1)] = (22));

} else {
var statearr_31932_32018 = state_31927__$1;
(statearr_31932_32018[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (27))){
var inst_31875 = (state_31927[(9)]);
var inst_31870 = (state_31927[(10)]);
var inst_31799 = (state_31927[(11)]);
var inst_31868 = (state_31927[(12)]);
var inst_31875__$1 = cljs.core._nth.call(null,inst_31868,inst_31870);
var inst_31876 = cljs.core.async.put_BANG_.call(null,inst_31875__$1,inst_31799,done);
var state_31927__$1 = (function (){var statearr_31933 = state_31927;
(statearr_31933[(9)] = inst_31875__$1);

return statearr_31933;
})();
if(cljs.core.truth_(inst_31876)){
var statearr_31934_32019 = state_31927__$1;
(statearr_31934_32019[(1)] = (30));

} else {
var statearr_31935_32020 = state_31927__$1;
(statearr_31935_32020[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (1))){
var state_31927__$1 = state_31927;
var statearr_31936_32021 = state_31927__$1;
(statearr_31936_32021[(2)] = null);

(statearr_31936_32021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (24))){
var inst_31828 = (state_31927[(7)]);
var inst_31845 = (state_31927[(2)]);
var inst_31846 = cljs.core.next.call(null,inst_31828);
var inst_31808 = inst_31846;
var inst_31809 = null;
var inst_31810 = (0);
var inst_31811 = (0);
var state_31927__$1 = (function (){var statearr_31937 = state_31927;
(statearr_31937[(13)] = inst_31810);

(statearr_31937[(14)] = inst_31811);

(statearr_31937[(15)] = inst_31809);

(statearr_31937[(16)] = inst_31845);

(statearr_31937[(17)] = inst_31808);

return statearr_31937;
})();
var statearr_31938_32022 = state_31927__$1;
(statearr_31938_32022[(2)] = null);

(statearr_31938_32022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (39))){
var state_31927__$1 = state_31927;
var statearr_31942_32023 = state_31927__$1;
(statearr_31942_32023[(2)] = null);

(statearr_31942_32023[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (4))){
var inst_31799 = (state_31927[(11)]);
var inst_31799__$1 = (state_31927[(2)]);
var inst_31800 = (inst_31799__$1 == null);
var state_31927__$1 = (function (){var statearr_31943 = state_31927;
(statearr_31943[(11)] = inst_31799__$1);

return statearr_31943;
})();
if(cljs.core.truth_(inst_31800)){
var statearr_31944_32024 = state_31927__$1;
(statearr_31944_32024[(1)] = (5));

} else {
var statearr_31945_32025 = state_31927__$1;
(statearr_31945_32025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (15))){
var inst_31810 = (state_31927[(13)]);
var inst_31811 = (state_31927[(14)]);
var inst_31809 = (state_31927[(15)]);
var inst_31808 = (state_31927[(17)]);
var inst_31824 = (state_31927[(2)]);
var inst_31825 = (inst_31811 + (1));
var tmp31939 = inst_31810;
var tmp31940 = inst_31809;
var tmp31941 = inst_31808;
var inst_31808__$1 = tmp31941;
var inst_31809__$1 = tmp31940;
var inst_31810__$1 = tmp31939;
var inst_31811__$1 = inst_31825;
var state_31927__$1 = (function (){var statearr_31946 = state_31927;
(statearr_31946[(13)] = inst_31810__$1);

(statearr_31946[(14)] = inst_31811__$1);

(statearr_31946[(15)] = inst_31809__$1);

(statearr_31946[(18)] = inst_31824);

(statearr_31946[(17)] = inst_31808__$1);

return statearr_31946;
})();
var statearr_31947_32026 = state_31927__$1;
(statearr_31947_32026[(2)] = null);

(statearr_31947_32026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (21))){
var inst_31849 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31951_32027 = state_31927__$1;
(statearr_31951_32027[(2)] = inst_31849);

(statearr_31951_32027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (31))){
var inst_31875 = (state_31927[(9)]);
var inst_31879 = done.call(null,null);
var inst_31880 = cljs.core.async.untap_STAR_.call(null,m,inst_31875);
var state_31927__$1 = (function (){var statearr_31952 = state_31927;
(statearr_31952[(19)] = inst_31879);

return statearr_31952;
})();
var statearr_31953_32028 = state_31927__$1;
(statearr_31953_32028[(2)] = inst_31880);

(statearr_31953_32028[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (32))){
var inst_31869 = (state_31927[(20)]);
var inst_31867 = (state_31927[(21)]);
var inst_31870 = (state_31927[(10)]);
var inst_31868 = (state_31927[(12)]);
var inst_31882 = (state_31927[(2)]);
var inst_31883 = (inst_31870 + (1));
var tmp31948 = inst_31869;
var tmp31949 = inst_31867;
var tmp31950 = inst_31868;
var inst_31867__$1 = tmp31949;
var inst_31868__$1 = tmp31950;
var inst_31869__$1 = tmp31948;
var inst_31870__$1 = inst_31883;
var state_31927__$1 = (function (){var statearr_31954 = state_31927;
(statearr_31954[(20)] = inst_31869__$1);

(statearr_31954[(21)] = inst_31867__$1);

(statearr_31954[(10)] = inst_31870__$1);

(statearr_31954[(22)] = inst_31882);

(statearr_31954[(12)] = inst_31868__$1);

return statearr_31954;
})();
var statearr_31955_32029 = state_31927__$1;
(statearr_31955_32029[(2)] = null);

(statearr_31955_32029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (40))){
var inst_31895 = (state_31927[(23)]);
var inst_31899 = done.call(null,null);
var inst_31900 = cljs.core.async.untap_STAR_.call(null,m,inst_31895);
var state_31927__$1 = (function (){var statearr_31956 = state_31927;
(statearr_31956[(24)] = inst_31899);

return statearr_31956;
})();
var statearr_31957_32030 = state_31927__$1;
(statearr_31957_32030[(2)] = inst_31900);

(statearr_31957_32030[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (33))){
var inst_31886 = (state_31927[(25)]);
var inst_31888 = cljs.core.chunked_seq_QMARK_.call(null,inst_31886);
var state_31927__$1 = state_31927;
if(inst_31888){
var statearr_31958_32031 = state_31927__$1;
(statearr_31958_32031[(1)] = (36));

} else {
var statearr_31959_32032 = state_31927__$1;
(statearr_31959_32032[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (13))){
var inst_31818 = (state_31927[(26)]);
var inst_31821 = cljs.core.async.close_BANG_.call(null,inst_31818);
var state_31927__$1 = state_31927;
var statearr_31960_32033 = state_31927__$1;
(statearr_31960_32033[(2)] = inst_31821);

(statearr_31960_32033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (22))){
var inst_31839 = (state_31927[(8)]);
var inst_31842 = cljs.core.async.close_BANG_.call(null,inst_31839);
var state_31927__$1 = state_31927;
var statearr_31961_32034 = state_31927__$1;
(statearr_31961_32034[(2)] = inst_31842);

(statearr_31961_32034[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (36))){
var inst_31886 = (state_31927[(25)]);
var inst_31890 = cljs.core.chunk_first.call(null,inst_31886);
var inst_31891 = cljs.core.chunk_rest.call(null,inst_31886);
var inst_31892 = cljs.core.count.call(null,inst_31890);
var inst_31867 = inst_31891;
var inst_31868 = inst_31890;
var inst_31869 = inst_31892;
var inst_31870 = (0);
var state_31927__$1 = (function (){var statearr_31962 = state_31927;
(statearr_31962[(20)] = inst_31869);

(statearr_31962[(21)] = inst_31867);

(statearr_31962[(10)] = inst_31870);

(statearr_31962[(12)] = inst_31868);

return statearr_31962;
})();
var statearr_31963_32035 = state_31927__$1;
(statearr_31963_32035[(2)] = null);

(statearr_31963_32035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (41))){
var inst_31886 = (state_31927[(25)]);
var inst_31902 = (state_31927[(2)]);
var inst_31903 = cljs.core.next.call(null,inst_31886);
var inst_31867 = inst_31903;
var inst_31868 = null;
var inst_31869 = (0);
var inst_31870 = (0);
var state_31927__$1 = (function (){var statearr_31964 = state_31927;
(statearr_31964[(27)] = inst_31902);

(statearr_31964[(20)] = inst_31869);

(statearr_31964[(21)] = inst_31867);

(statearr_31964[(10)] = inst_31870);

(statearr_31964[(12)] = inst_31868);

return statearr_31964;
})();
var statearr_31965_32036 = state_31927__$1;
(statearr_31965_32036[(2)] = null);

(statearr_31965_32036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (43))){
var state_31927__$1 = state_31927;
var statearr_31966_32037 = state_31927__$1;
(statearr_31966_32037[(2)] = null);

(statearr_31966_32037[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (29))){
var inst_31911 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31967_32038 = state_31927__$1;
(statearr_31967_32038[(2)] = inst_31911);

(statearr_31967_32038[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (44))){
var inst_31920 = (state_31927[(2)]);
var state_31927__$1 = (function (){var statearr_31968 = state_31927;
(statearr_31968[(28)] = inst_31920);

return statearr_31968;
})();
var statearr_31969_32039 = state_31927__$1;
(statearr_31969_32039[(2)] = null);

(statearr_31969_32039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (6))){
var inst_31859 = (state_31927[(29)]);
var inst_31858 = cljs.core.deref.call(null,cs);
var inst_31859__$1 = cljs.core.keys.call(null,inst_31858);
var inst_31860 = cljs.core.count.call(null,inst_31859__$1);
var inst_31861 = cljs.core.reset_BANG_.call(null,dctr,inst_31860);
var inst_31866 = cljs.core.seq.call(null,inst_31859__$1);
var inst_31867 = inst_31866;
var inst_31868 = null;
var inst_31869 = (0);
var inst_31870 = (0);
var state_31927__$1 = (function (){var statearr_31970 = state_31927;
(statearr_31970[(20)] = inst_31869);

(statearr_31970[(29)] = inst_31859__$1);

(statearr_31970[(21)] = inst_31867);

(statearr_31970[(30)] = inst_31861);

(statearr_31970[(10)] = inst_31870);

(statearr_31970[(12)] = inst_31868);

return statearr_31970;
})();
var statearr_31971_32040 = state_31927__$1;
(statearr_31971_32040[(2)] = null);

(statearr_31971_32040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (28))){
var inst_31886 = (state_31927[(25)]);
var inst_31867 = (state_31927[(21)]);
var inst_31886__$1 = cljs.core.seq.call(null,inst_31867);
var state_31927__$1 = (function (){var statearr_31972 = state_31927;
(statearr_31972[(25)] = inst_31886__$1);

return statearr_31972;
})();
if(inst_31886__$1){
var statearr_31973_32041 = state_31927__$1;
(statearr_31973_32041[(1)] = (33));

} else {
var statearr_31974_32042 = state_31927__$1;
(statearr_31974_32042[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (25))){
var inst_31869 = (state_31927[(20)]);
var inst_31870 = (state_31927[(10)]);
var inst_31872 = (inst_31870 < inst_31869);
var inst_31873 = inst_31872;
var state_31927__$1 = state_31927;
if(cljs.core.truth_(inst_31873)){
var statearr_31975_32043 = state_31927__$1;
(statearr_31975_32043[(1)] = (27));

} else {
var statearr_31976_32044 = state_31927__$1;
(statearr_31976_32044[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (34))){
var state_31927__$1 = state_31927;
var statearr_31977_32045 = state_31927__$1;
(statearr_31977_32045[(2)] = null);

(statearr_31977_32045[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (17))){
var state_31927__$1 = state_31927;
var statearr_31978_32046 = state_31927__$1;
(statearr_31978_32046[(2)] = null);

(statearr_31978_32046[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (3))){
var inst_31925 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31927__$1,inst_31925);
} else {
if((state_val_31928 === (12))){
var inst_31854 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31979_32047 = state_31927__$1;
(statearr_31979_32047[(2)] = inst_31854);

(statearr_31979_32047[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (2))){
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31927__$1,(4),ch);
} else {
if((state_val_31928 === (23))){
var state_31927__$1 = state_31927;
var statearr_31980_32048 = state_31927__$1;
(statearr_31980_32048[(2)] = null);

(statearr_31980_32048[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (35))){
var inst_31909 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31981_32049 = state_31927__$1;
(statearr_31981_32049[(2)] = inst_31909);

(statearr_31981_32049[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (19))){
var inst_31828 = (state_31927[(7)]);
var inst_31832 = cljs.core.chunk_first.call(null,inst_31828);
var inst_31833 = cljs.core.chunk_rest.call(null,inst_31828);
var inst_31834 = cljs.core.count.call(null,inst_31832);
var inst_31808 = inst_31833;
var inst_31809 = inst_31832;
var inst_31810 = inst_31834;
var inst_31811 = (0);
var state_31927__$1 = (function (){var statearr_31982 = state_31927;
(statearr_31982[(13)] = inst_31810);

(statearr_31982[(14)] = inst_31811);

(statearr_31982[(15)] = inst_31809);

(statearr_31982[(17)] = inst_31808);

return statearr_31982;
})();
var statearr_31983_32050 = state_31927__$1;
(statearr_31983_32050[(2)] = null);

(statearr_31983_32050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (11))){
var inst_31828 = (state_31927[(7)]);
var inst_31808 = (state_31927[(17)]);
var inst_31828__$1 = cljs.core.seq.call(null,inst_31808);
var state_31927__$1 = (function (){var statearr_31984 = state_31927;
(statearr_31984[(7)] = inst_31828__$1);

return statearr_31984;
})();
if(inst_31828__$1){
var statearr_31985_32051 = state_31927__$1;
(statearr_31985_32051[(1)] = (16));

} else {
var statearr_31986_32052 = state_31927__$1;
(statearr_31986_32052[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (9))){
var inst_31856 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31987_32053 = state_31927__$1;
(statearr_31987_32053[(2)] = inst_31856);

(statearr_31987_32053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (5))){
var inst_31806 = cljs.core.deref.call(null,cs);
var inst_31807 = cljs.core.seq.call(null,inst_31806);
var inst_31808 = inst_31807;
var inst_31809 = null;
var inst_31810 = (0);
var inst_31811 = (0);
var state_31927__$1 = (function (){var statearr_31988 = state_31927;
(statearr_31988[(13)] = inst_31810);

(statearr_31988[(14)] = inst_31811);

(statearr_31988[(15)] = inst_31809);

(statearr_31988[(17)] = inst_31808);

return statearr_31988;
})();
var statearr_31989_32054 = state_31927__$1;
(statearr_31989_32054[(2)] = null);

(statearr_31989_32054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (14))){
var state_31927__$1 = state_31927;
var statearr_31990_32055 = state_31927__$1;
(statearr_31990_32055[(2)] = null);

(statearr_31990_32055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (45))){
var inst_31917 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31991_32056 = state_31927__$1;
(statearr_31991_32056[(2)] = inst_31917);

(statearr_31991_32056[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (26))){
var inst_31859 = (state_31927[(29)]);
var inst_31913 = (state_31927[(2)]);
var inst_31914 = cljs.core.seq.call(null,inst_31859);
var state_31927__$1 = (function (){var statearr_31992 = state_31927;
(statearr_31992[(31)] = inst_31913);

return statearr_31992;
})();
if(inst_31914){
var statearr_31993_32057 = state_31927__$1;
(statearr_31993_32057[(1)] = (42));

} else {
var statearr_31994_32058 = state_31927__$1;
(statearr_31994_32058[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (16))){
var inst_31828 = (state_31927[(7)]);
var inst_31830 = cljs.core.chunked_seq_QMARK_.call(null,inst_31828);
var state_31927__$1 = state_31927;
if(inst_31830){
var statearr_31995_32059 = state_31927__$1;
(statearr_31995_32059[(1)] = (19));

} else {
var statearr_31996_32060 = state_31927__$1;
(statearr_31996_32060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (38))){
var inst_31906 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31997_32061 = state_31927__$1;
(statearr_31997_32061[(2)] = inst_31906);

(statearr_31997_32061[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (30))){
var state_31927__$1 = state_31927;
var statearr_31998_32062 = state_31927__$1;
(statearr_31998_32062[(2)] = null);

(statearr_31998_32062[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (10))){
var inst_31811 = (state_31927[(14)]);
var inst_31809 = (state_31927[(15)]);
var inst_31817 = cljs.core._nth.call(null,inst_31809,inst_31811);
var inst_31818 = cljs.core.nth.call(null,inst_31817,(0),null);
var inst_31819 = cljs.core.nth.call(null,inst_31817,(1),null);
var state_31927__$1 = (function (){var statearr_31999 = state_31927;
(statearr_31999[(26)] = inst_31818);

return statearr_31999;
})();
if(cljs.core.truth_(inst_31819)){
var statearr_32000_32063 = state_31927__$1;
(statearr_32000_32063[(1)] = (13));

} else {
var statearr_32001_32064 = state_31927__$1;
(statearr_32001_32064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (18))){
var inst_31852 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_32002_32065 = state_31927__$1;
(statearr_32002_32065[(2)] = inst_31852);

(statearr_32002_32065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (42))){
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31927__$1,(45),dchan);
} else {
if((state_val_31928 === (37))){
var inst_31886 = (state_31927[(25)]);
var inst_31799 = (state_31927[(11)]);
var inst_31895 = (state_31927[(23)]);
var inst_31895__$1 = cljs.core.first.call(null,inst_31886);
var inst_31896 = cljs.core.async.put_BANG_.call(null,inst_31895__$1,inst_31799,done);
var state_31927__$1 = (function (){var statearr_32003 = state_31927;
(statearr_32003[(23)] = inst_31895__$1);

return statearr_32003;
})();
if(cljs.core.truth_(inst_31896)){
var statearr_32004_32066 = state_31927__$1;
(statearr_32004_32066[(1)] = (39));

} else {
var statearr_32005_32067 = state_31927__$1;
(statearr_32005_32067[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (8))){
var inst_31810 = (state_31927[(13)]);
var inst_31811 = (state_31927[(14)]);
var inst_31813 = (inst_31811 < inst_31810);
var inst_31814 = inst_31813;
var state_31927__$1 = state_31927;
if(cljs.core.truth_(inst_31814)){
var statearr_32006_32068 = state_31927__$1;
(statearr_32006_32068[(1)] = (10));

} else {
var statearr_32007_32069 = state_31927__$1;
(statearr_32007_32069[(1)] = (11));

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
});})(c__18619__auto___32015,cs,m,dchan,dctr,done))
;
return ((function (switch__18563__auto__,c__18619__auto___32015,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_32011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32011[(0)] = state_machine__18564__auto__);

(statearr_32011[(1)] = (1));

return statearr_32011;
});
var state_machine__18564__auto____1 = (function (state_31927){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_31927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e32012){if((e32012 instanceof Object)){
var ex__18567__auto__ = e32012;
var statearr_32013_32070 = state_31927;
(statearr_32013_32070[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32071 = state_31927;
state_31927 = G__32071;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_31927){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_31927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___32015,cs,m,dchan,dctr,done))
})();
var state__18621__auto__ = (function (){var statearr_32014 = f__18620__auto__.call(null);
(statearr_32014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___32015);

return statearr_32014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___32015,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj32073 = {};
return obj32073;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32074){
var map__32079 = p__32074;
var map__32079__$1 = ((cljs.core.seq_QMARK_.call(null,map__32079))?cljs.core.apply.call(null,cljs.core.hash_map,map__32079):map__32079);
var opts = map__32079__$1;
var statearr_32080_32083 = state;
(statearr_32080_32083[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32079,map__32079__$1,opts){
return (function (val){
var statearr_32081_32084 = state;
(statearr_32081_32084[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32079,map__32079__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32082_32085 = state;
(statearr_32082_32085[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32074 = null;
if (arguments.length > 3) {
var G__32086__i = 0, G__32086__a = new Array(arguments.length -  3);
while (G__32086__i < G__32086__a.length) {G__32086__a[G__32086__i] = arguments[G__32086__i + 3]; ++G__32086__i;}
  p__32074 = new cljs.core.IndexedSeq(G__32086__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32074);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32087){
var state = cljs.core.first(arglist__32087);
arglist__32087 = cljs.core.next(arglist__32087);
var cont_block = cljs.core.first(arglist__32087);
arglist__32087 = cljs.core.next(arglist__32087);
var ports = cljs.core.first(arglist__32087);
var p__32074 = cljs.core.rest(arglist__32087);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32074);
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
if(typeof cljs.core.async.t32207 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32207 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32208){
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
this.meta32208 = meta32208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32207.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32207.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32207.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32207.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32207.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32207.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t32207.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32209){
var self__ = this;
var _32209__$1 = this;
return self__.meta32208;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32209,meta32208__$1){
var self__ = this;
var _32209__$1 = this;
return (new cljs.core.async.t32207(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32208__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32207.cljs$lang$type = true;

cljs.core.async.t32207.cljs$lang$ctorStr = "cljs.core.async/t32207";

cljs.core.async.t32207.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32207");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32207 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32207(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32208){
return (new cljs.core.async.t32207(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32208));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32207(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18619__auto___32326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___32326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___32326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32279){
var state_val_32280 = (state_32279[(1)]);
if((state_val_32280 === (7))){
var inst_32223 = (state_32279[(7)]);
var inst_32228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32223);
var state_32279__$1 = state_32279;
var statearr_32281_32327 = state_32279__$1;
(statearr_32281_32327[(2)] = inst_32228);

(statearr_32281_32327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (20))){
var inst_32238 = (state_32279[(8)]);
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32279__$1,(23),out,inst_32238);
} else {
if((state_val_32280 === (1))){
var inst_32213 = (state_32279[(9)]);
var inst_32213__$1 = calc_state.call(null);
var inst_32214 = cljs.core.seq_QMARK_.call(null,inst_32213__$1);
var state_32279__$1 = (function (){var statearr_32282 = state_32279;
(statearr_32282[(9)] = inst_32213__$1);

return statearr_32282;
})();
if(inst_32214){
var statearr_32283_32328 = state_32279__$1;
(statearr_32283_32328[(1)] = (2));

} else {
var statearr_32284_32329 = state_32279__$1;
(statearr_32284_32329[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (24))){
var inst_32231 = (state_32279[(10)]);
var inst_32223 = inst_32231;
var state_32279__$1 = (function (){var statearr_32285 = state_32279;
(statearr_32285[(7)] = inst_32223);

return statearr_32285;
})();
var statearr_32286_32330 = state_32279__$1;
(statearr_32286_32330[(2)] = null);

(statearr_32286_32330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (4))){
var inst_32213 = (state_32279[(9)]);
var inst_32219 = (state_32279[(2)]);
var inst_32220 = cljs.core.get.call(null,inst_32219,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32221 = cljs.core.get.call(null,inst_32219,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32222 = cljs.core.get.call(null,inst_32219,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32223 = inst_32213;
var state_32279__$1 = (function (){var statearr_32287 = state_32279;
(statearr_32287[(11)] = inst_32221);

(statearr_32287[(7)] = inst_32223);

(statearr_32287[(12)] = inst_32222);

(statearr_32287[(13)] = inst_32220);

return statearr_32287;
})();
var statearr_32288_32331 = state_32279__$1;
(statearr_32288_32331[(2)] = null);

(statearr_32288_32331[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (15))){
var state_32279__$1 = state_32279;
var statearr_32289_32332 = state_32279__$1;
(statearr_32289_32332[(2)] = null);

(statearr_32289_32332[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (21))){
var inst_32231 = (state_32279[(10)]);
var inst_32223 = inst_32231;
var state_32279__$1 = (function (){var statearr_32290 = state_32279;
(statearr_32290[(7)] = inst_32223);

return statearr_32290;
})();
var statearr_32291_32333 = state_32279__$1;
(statearr_32291_32333[(2)] = null);

(statearr_32291_32333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (13))){
var inst_32275 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32292_32334 = state_32279__$1;
(statearr_32292_32334[(2)] = inst_32275);

(statearr_32292_32334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (22))){
var inst_32273 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32293_32335 = state_32279__$1;
(statearr_32293_32335[(2)] = inst_32273);

(statearr_32293_32335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (6))){
var inst_32277 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32279__$1,inst_32277);
} else {
if((state_val_32280 === (25))){
var state_32279__$1 = state_32279;
var statearr_32294_32336 = state_32279__$1;
(statearr_32294_32336[(2)] = null);

(statearr_32294_32336[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (17))){
var inst_32253 = (state_32279[(14)]);
var state_32279__$1 = state_32279;
var statearr_32295_32337 = state_32279__$1;
(statearr_32295_32337[(2)] = inst_32253);

(statearr_32295_32337[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (3))){
var inst_32213 = (state_32279[(9)]);
var state_32279__$1 = state_32279;
var statearr_32296_32338 = state_32279__$1;
(statearr_32296_32338[(2)] = inst_32213);

(statearr_32296_32338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (12))){
var inst_32234 = (state_32279[(15)]);
var inst_32253 = (state_32279[(14)]);
var inst_32239 = (state_32279[(16)]);
var inst_32253__$1 = inst_32234.call(null,inst_32239);
var state_32279__$1 = (function (){var statearr_32297 = state_32279;
(statearr_32297[(14)] = inst_32253__$1);

return statearr_32297;
})();
if(cljs.core.truth_(inst_32253__$1)){
var statearr_32298_32339 = state_32279__$1;
(statearr_32298_32339[(1)] = (17));

} else {
var statearr_32299_32340 = state_32279__$1;
(statearr_32299_32340[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (2))){
var inst_32213 = (state_32279[(9)]);
var inst_32216 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32213);
var state_32279__$1 = state_32279;
var statearr_32300_32341 = state_32279__$1;
(statearr_32300_32341[(2)] = inst_32216);

(statearr_32300_32341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (23))){
var inst_32264 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32264)){
var statearr_32301_32342 = state_32279__$1;
(statearr_32301_32342[(1)] = (24));

} else {
var statearr_32302_32343 = state_32279__$1;
(statearr_32302_32343[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (19))){
var inst_32261 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32261)){
var statearr_32303_32344 = state_32279__$1;
(statearr_32303_32344[(1)] = (20));

} else {
var statearr_32304_32345 = state_32279__$1;
(statearr_32304_32345[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (11))){
var inst_32238 = (state_32279[(8)]);
var inst_32244 = (inst_32238 == null);
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32244)){
var statearr_32305_32346 = state_32279__$1;
(statearr_32305_32346[(1)] = (14));

} else {
var statearr_32306_32347 = state_32279__$1;
(statearr_32306_32347[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (9))){
var inst_32231 = (state_32279[(10)]);
var inst_32231__$1 = (state_32279[(2)]);
var inst_32232 = cljs.core.get.call(null,inst_32231__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32233 = cljs.core.get.call(null,inst_32231__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32234 = cljs.core.get.call(null,inst_32231__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32279__$1 = (function (){var statearr_32307 = state_32279;
(statearr_32307[(15)] = inst_32234);

(statearr_32307[(17)] = inst_32233);

(statearr_32307[(10)] = inst_32231__$1);

return statearr_32307;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32279__$1,(10),inst_32232);
} else {
if((state_val_32280 === (5))){
var inst_32223 = (state_32279[(7)]);
var inst_32226 = cljs.core.seq_QMARK_.call(null,inst_32223);
var state_32279__$1 = state_32279;
if(inst_32226){
var statearr_32308_32348 = state_32279__$1;
(statearr_32308_32348[(1)] = (7));

} else {
var statearr_32309_32349 = state_32279__$1;
(statearr_32309_32349[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (14))){
var inst_32239 = (state_32279[(16)]);
var inst_32246 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32239);
var state_32279__$1 = state_32279;
var statearr_32310_32350 = state_32279__$1;
(statearr_32310_32350[(2)] = inst_32246);

(statearr_32310_32350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (26))){
var inst_32269 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32311_32351 = state_32279__$1;
(statearr_32311_32351[(2)] = inst_32269);

(statearr_32311_32351[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (16))){
var inst_32249 = (state_32279[(2)]);
var inst_32250 = calc_state.call(null);
var inst_32223 = inst_32250;
var state_32279__$1 = (function (){var statearr_32312 = state_32279;
(statearr_32312[(7)] = inst_32223);

(statearr_32312[(18)] = inst_32249);

return statearr_32312;
})();
var statearr_32313_32352 = state_32279__$1;
(statearr_32313_32352[(2)] = null);

(statearr_32313_32352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (10))){
var inst_32238 = (state_32279[(8)]);
var inst_32239 = (state_32279[(16)]);
var inst_32237 = (state_32279[(2)]);
var inst_32238__$1 = cljs.core.nth.call(null,inst_32237,(0),null);
var inst_32239__$1 = cljs.core.nth.call(null,inst_32237,(1),null);
var inst_32240 = (inst_32238__$1 == null);
var inst_32241 = cljs.core._EQ_.call(null,inst_32239__$1,change);
var inst_32242 = (inst_32240) || (inst_32241);
var state_32279__$1 = (function (){var statearr_32314 = state_32279;
(statearr_32314[(8)] = inst_32238__$1);

(statearr_32314[(16)] = inst_32239__$1);

return statearr_32314;
})();
if(cljs.core.truth_(inst_32242)){
var statearr_32315_32353 = state_32279__$1;
(statearr_32315_32353[(1)] = (11));

} else {
var statearr_32316_32354 = state_32279__$1;
(statearr_32316_32354[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (18))){
var inst_32234 = (state_32279[(15)]);
var inst_32233 = (state_32279[(17)]);
var inst_32239 = (state_32279[(16)]);
var inst_32256 = cljs.core.empty_QMARK_.call(null,inst_32234);
var inst_32257 = inst_32233.call(null,inst_32239);
var inst_32258 = cljs.core.not.call(null,inst_32257);
var inst_32259 = (inst_32256) && (inst_32258);
var state_32279__$1 = state_32279;
var statearr_32317_32355 = state_32279__$1;
(statearr_32317_32355[(2)] = inst_32259);

(statearr_32317_32355[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (8))){
var inst_32223 = (state_32279[(7)]);
var state_32279__$1 = state_32279;
var statearr_32318_32356 = state_32279__$1;
(statearr_32318_32356[(2)] = inst_32223);

(statearr_32318_32356[(1)] = (9));


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
});})(c__18619__auto___32326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18563__auto__,c__18619__auto___32326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_32322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32322[(0)] = state_machine__18564__auto__);

(statearr_32322[(1)] = (1));

return statearr_32322;
});
var state_machine__18564__auto____1 = (function (state_32279){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_32279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e32323){if((e32323 instanceof Object)){
var ex__18567__auto__ = e32323;
var statearr_32324_32357 = state_32279;
(statearr_32324_32357[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32358 = state_32279;
state_32279 = G__32358;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_32279){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_32279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___32326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18621__auto__ = (function (){var statearr_32325 = f__18620__auto__.call(null);
(statearr_32325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___32326);

return statearr_32325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___32326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj32360 = {};
return obj32360;
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
return (function (p1__32361_SHARP_){
if(cljs.core.truth_(p1__32361_SHARP_.call(null,topic))){
return p1__32361_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32361_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32484 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32484 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32485){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32485 = meta32485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32484.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32484.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32484.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t32484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32484.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32486){
var self__ = this;
var _32486__$1 = this;
return self__.meta32485;
});})(mults,ensure_mult))
;

cljs.core.async.t32484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32486,meta32485__$1){
var self__ = this;
var _32486__$1 = this;
return (new cljs.core.async.t32484(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32485__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32484.cljs$lang$type = true;

cljs.core.async.t32484.cljs$lang$ctorStr = "cljs.core.async/t32484";

cljs.core.async.t32484.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32484");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32484 = ((function (mults,ensure_mult){
return (function __GT_t32484(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32485){
return (new cljs.core.async.t32484(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32485));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32484(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18619__auto___32606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___32606,mults,ensure_mult,p){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___32606,mults,ensure_mult,p){
return (function (state_32558){
var state_val_32559 = (state_32558[(1)]);
if((state_val_32559 === (7))){
var inst_32554 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32560_32607 = state_32558__$1;
(statearr_32560_32607[(2)] = inst_32554);

(statearr_32560_32607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (20))){
var state_32558__$1 = state_32558;
var statearr_32561_32608 = state_32558__$1;
(statearr_32561_32608[(2)] = null);

(statearr_32561_32608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (1))){
var state_32558__$1 = state_32558;
var statearr_32562_32609 = state_32558__$1;
(statearr_32562_32609[(2)] = null);

(statearr_32562_32609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (24))){
var inst_32537 = (state_32558[(7)]);
var inst_32546 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32537);
var state_32558__$1 = state_32558;
var statearr_32563_32610 = state_32558__$1;
(statearr_32563_32610[(2)] = inst_32546);

(statearr_32563_32610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (4))){
var inst_32489 = (state_32558[(8)]);
var inst_32489__$1 = (state_32558[(2)]);
var inst_32490 = (inst_32489__$1 == null);
var state_32558__$1 = (function (){var statearr_32564 = state_32558;
(statearr_32564[(8)] = inst_32489__$1);

return statearr_32564;
})();
if(cljs.core.truth_(inst_32490)){
var statearr_32565_32611 = state_32558__$1;
(statearr_32565_32611[(1)] = (5));

} else {
var statearr_32566_32612 = state_32558__$1;
(statearr_32566_32612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (15))){
var inst_32531 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32567_32613 = state_32558__$1;
(statearr_32567_32613[(2)] = inst_32531);

(statearr_32567_32613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (21))){
var inst_32551 = (state_32558[(2)]);
var state_32558__$1 = (function (){var statearr_32568 = state_32558;
(statearr_32568[(9)] = inst_32551);

return statearr_32568;
})();
var statearr_32569_32614 = state_32558__$1;
(statearr_32569_32614[(2)] = null);

(statearr_32569_32614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (13))){
var inst_32513 = (state_32558[(10)]);
var inst_32515 = cljs.core.chunked_seq_QMARK_.call(null,inst_32513);
var state_32558__$1 = state_32558;
if(inst_32515){
var statearr_32570_32615 = state_32558__$1;
(statearr_32570_32615[(1)] = (16));

} else {
var statearr_32571_32616 = state_32558__$1;
(statearr_32571_32616[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (22))){
var inst_32543 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
if(cljs.core.truth_(inst_32543)){
var statearr_32572_32617 = state_32558__$1;
(statearr_32572_32617[(1)] = (23));

} else {
var statearr_32573_32618 = state_32558__$1;
(statearr_32573_32618[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (6))){
var inst_32537 = (state_32558[(7)]);
var inst_32539 = (state_32558[(11)]);
var inst_32489 = (state_32558[(8)]);
var inst_32537__$1 = topic_fn.call(null,inst_32489);
var inst_32538 = cljs.core.deref.call(null,mults);
var inst_32539__$1 = cljs.core.get.call(null,inst_32538,inst_32537__$1);
var state_32558__$1 = (function (){var statearr_32574 = state_32558;
(statearr_32574[(7)] = inst_32537__$1);

(statearr_32574[(11)] = inst_32539__$1);

return statearr_32574;
})();
if(cljs.core.truth_(inst_32539__$1)){
var statearr_32575_32619 = state_32558__$1;
(statearr_32575_32619[(1)] = (19));

} else {
var statearr_32576_32620 = state_32558__$1;
(statearr_32576_32620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (25))){
var inst_32548 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32577_32621 = state_32558__$1;
(statearr_32577_32621[(2)] = inst_32548);

(statearr_32577_32621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (17))){
var inst_32513 = (state_32558[(10)]);
var inst_32522 = cljs.core.first.call(null,inst_32513);
var inst_32523 = cljs.core.async.muxch_STAR_.call(null,inst_32522);
var inst_32524 = cljs.core.async.close_BANG_.call(null,inst_32523);
var inst_32525 = cljs.core.next.call(null,inst_32513);
var inst_32499 = inst_32525;
var inst_32500 = null;
var inst_32501 = (0);
var inst_32502 = (0);
var state_32558__$1 = (function (){var statearr_32578 = state_32558;
(statearr_32578[(12)] = inst_32524);

(statearr_32578[(13)] = inst_32502);

(statearr_32578[(14)] = inst_32500);

(statearr_32578[(15)] = inst_32499);

(statearr_32578[(16)] = inst_32501);

return statearr_32578;
})();
var statearr_32579_32622 = state_32558__$1;
(statearr_32579_32622[(2)] = null);

(statearr_32579_32622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (3))){
var inst_32556 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32558__$1,inst_32556);
} else {
if((state_val_32559 === (12))){
var inst_32533 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32580_32623 = state_32558__$1;
(statearr_32580_32623[(2)] = inst_32533);

(statearr_32580_32623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (2))){
var state_32558__$1 = state_32558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32558__$1,(4),ch);
} else {
if((state_val_32559 === (23))){
var state_32558__$1 = state_32558;
var statearr_32581_32624 = state_32558__$1;
(statearr_32581_32624[(2)] = null);

(statearr_32581_32624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (19))){
var inst_32539 = (state_32558[(11)]);
var inst_32489 = (state_32558[(8)]);
var inst_32541 = cljs.core.async.muxch_STAR_.call(null,inst_32539);
var state_32558__$1 = state_32558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32558__$1,(22),inst_32541,inst_32489);
} else {
if((state_val_32559 === (11))){
var inst_32499 = (state_32558[(15)]);
var inst_32513 = (state_32558[(10)]);
var inst_32513__$1 = cljs.core.seq.call(null,inst_32499);
var state_32558__$1 = (function (){var statearr_32582 = state_32558;
(statearr_32582[(10)] = inst_32513__$1);

return statearr_32582;
})();
if(inst_32513__$1){
var statearr_32583_32625 = state_32558__$1;
(statearr_32583_32625[(1)] = (13));

} else {
var statearr_32584_32626 = state_32558__$1;
(statearr_32584_32626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (9))){
var inst_32535 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32585_32627 = state_32558__$1;
(statearr_32585_32627[(2)] = inst_32535);

(statearr_32585_32627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (5))){
var inst_32496 = cljs.core.deref.call(null,mults);
var inst_32497 = cljs.core.vals.call(null,inst_32496);
var inst_32498 = cljs.core.seq.call(null,inst_32497);
var inst_32499 = inst_32498;
var inst_32500 = null;
var inst_32501 = (0);
var inst_32502 = (0);
var state_32558__$1 = (function (){var statearr_32586 = state_32558;
(statearr_32586[(13)] = inst_32502);

(statearr_32586[(14)] = inst_32500);

(statearr_32586[(15)] = inst_32499);

(statearr_32586[(16)] = inst_32501);

return statearr_32586;
})();
var statearr_32587_32628 = state_32558__$1;
(statearr_32587_32628[(2)] = null);

(statearr_32587_32628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (14))){
var state_32558__$1 = state_32558;
var statearr_32591_32629 = state_32558__$1;
(statearr_32591_32629[(2)] = null);

(statearr_32591_32629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (16))){
var inst_32513 = (state_32558[(10)]);
var inst_32517 = cljs.core.chunk_first.call(null,inst_32513);
var inst_32518 = cljs.core.chunk_rest.call(null,inst_32513);
var inst_32519 = cljs.core.count.call(null,inst_32517);
var inst_32499 = inst_32518;
var inst_32500 = inst_32517;
var inst_32501 = inst_32519;
var inst_32502 = (0);
var state_32558__$1 = (function (){var statearr_32592 = state_32558;
(statearr_32592[(13)] = inst_32502);

(statearr_32592[(14)] = inst_32500);

(statearr_32592[(15)] = inst_32499);

(statearr_32592[(16)] = inst_32501);

return statearr_32592;
})();
var statearr_32593_32630 = state_32558__$1;
(statearr_32593_32630[(2)] = null);

(statearr_32593_32630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (10))){
var inst_32502 = (state_32558[(13)]);
var inst_32500 = (state_32558[(14)]);
var inst_32499 = (state_32558[(15)]);
var inst_32501 = (state_32558[(16)]);
var inst_32507 = cljs.core._nth.call(null,inst_32500,inst_32502);
var inst_32508 = cljs.core.async.muxch_STAR_.call(null,inst_32507);
var inst_32509 = cljs.core.async.close_BANG_.call(null,inst_32508);
var inst_32510 = (inst_32502 + (1));
var tmp32588 = inst_32500;
var tmp32589 = inst_32499;
var tmp32590 = inst_32501;
var inst_32499__$1 = tmp32589;
var inst_32500__$1 = tmp32588;
var inst_32501__$1 = tmp32590;
var inst_32502__$1 = inst_32510;
var state_32558__$1 = (function (){var statearr_32594 = state_32558;
(statearr_32594[(13)] = inst_32502__$1);

(statearr_32594[(14)] = inst_32500__$1);

(statearr_32594[(17)] = inst_32509);

(statearr_32594[(15)] = inst_32499__$1);

(statearr_32594[(16)] = inst_32501__$1);

return statearr_32594;
})();
var statearr_32595_32631 = state_32558__$1;
(statearr_32595_32631[(2)] = null);

(statearr_32595_32631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (18))){
var inst_32528 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32596_32632 = state_32558__$1;
(statearr_32596_32632[(2)] = inst_32528);

(statearr_32596_32632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (8))){
var inst_32502 = (state_32558[(13)]);
var inst_32501 = (state_32558[(16)]);
var inst_32504 = (inst_32502 < inst_32501);
var inst_32505 = inst_32504;
var state_32558__$1 = state_32558;
if(cljs.core.truth_(inst_32505)){
var statearr_32597_32633 = state_32558__$1;
(statearr_32597_32633[(1)] = (10));

} else {
var statearr_32598_32634 = state_32558__$1;
(statearr_32598_32634[(1)] = (11));

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
});})(c__18619__auto___32606,mults,ensure_mult,p))
;
return ((function (switch__18563__auto__,c__18619__auto___32606,mults,ensure_mult,p){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_32602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32602[(0)] = state_machine__18564__auto__);

(statearr_32602[(1)] = (1));

return statearr_32602;
});
var state_machine__18564__auto____1 = (function (state_32558){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_32558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e32603){if((e32603 instanceof Object)){
var ex__18567__auto__ = e32603;
var statearr_32604_32635 = state_32558;
(statearr_32604_32635[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32636 = state_32558;
state_32558 = G__32636;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_32558){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_32558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___32606,mults,ensure_mult,p))
})();
var state__18621__auto__ = (function (){var statearr_32605 = f__18620__auto__.call(null);
(statearr_32605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___32606);

return statearr_32605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___32606,mults,ensure_mult,p))
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
var c__18619__auto___32773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32743){
var state_val_32744 = (state_32743[(1)]);
if((state_val_32744 === (7))){
var state_32743__$1 = state_32743;
var statearr_32745_32774 = state_32743__$1;
(statearr_32745_32774[(2)] = null);

(statearr_32745_32774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (1))){
var state_32743__$1 = state_32743;
var statearr_32746_32775 = state_32743__$1;
(statearr_32746_32775[(2)] = null);

(statearr_32746_32775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (4))){
var inst_32707 = (state_32743[(7)]);
var inst_32709 = (inst_32707 < cnt);
var state_32743__$1 = state_32743;
if(cljs.core.truth_(inst_32709)){
var statearr_32747_32776 = state_32743__$1;
(statearr_32747_32776[(1)] = (6));

} else {
var statearr_32748_32777 = state_32743__$1;
(statearr_32748_32777[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (15))){
var inst_32739 = (state_32743[(2)]);
var state_32743__$1 = state_32743;
var statearr_32749_32778 = state_32743__$1;
(statearr_32749_32778[(2)] = inst_32739);

(statearr_32749_32778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (13))){
var inst_32732 = cljs.core.async.close_BANG_.call(null,out);
var state_32743__$1 = state_32743;
var statearr_32750_32779 = state_32743__$1;
(statearr_32750_32779[(2)] = inst_32732);

(statearr_32750_32779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (6))){
var state_32743__$1 = state_32743;
var statearr_32751_32780 = state_32743__$1;
(statearr_32751_32780[(2)] = null);

(statearr_32751_32780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (3))){
var inst_32741 = (state_32743[(2)]);
var state_32743__$1 = state_32743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32743__$1,inst_32741);
} else {
if((state_val_32744 === (12))){
var inst_32729 = (state_32743[(8)]);
var inst_32729__$1 = (state_32743[(2)]);
var inst_32730 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32729__$1);
var state_32743__$1 = (function (){var statearr_32752 = state_32743;
(statearr_32752[(8)] = inst_32729__$1);

return statearr_32752;
})();
if(cljs.core.truth_(inst_32730)){
var statearr_32753_32781 = state_32743__$1;
(statearr_32753_32781[(1)] = (13));

} else {
var statearr_32754_32782 = state_32743__$1;
(statearr_32754_32782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (2))){
var inst_32706 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32707 = (0);
var state_32743__$1 = (function (){var statearr_32755 = state_32743;
(statearr_32755[(7)] = inst_32707);

(statearr_32755[(9)] = inst_32706);

return statearr_32755;
})();
var statearr_32756_32783 = state_32743__$1;
(statearr_32756_32783[(2)] = null);

(statearr_32756_32783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (11))){
var inst_32707 = (state_32743[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32743,(10),Object,null,(9));
var inst_32716 = chs__$1.call(null,inst_32707);
var inst_32717 = done.call(null,inst_32707);
var inst_32718 = cljs.core.async.take_BANG_.call(null,inst_32716,inst_32717);
var state_32743__$1 = state_32743;
var statearr_32757_32784 = state_32743__$1;
(statearr_32757_32784[(2)] = inst_32718);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32743__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (9))){
var inst_32707 = (state_32743[(7)]);
var inst_32720 = (state_32743[(2)]);
var inst_32721 = (inst_32707 + (1));
var inst_32707__$1 = inst_32721;
var state_32743__$1 = (function (){var statearr_32758 = state_32743;
(statearr_32758[(7)] = inst_32707__$1);

(statearr_32758[(10)] = inst_32720);

return statearr_32758;
})();
var statearr_32759_32785 = state_32743__$1;
(statearr_32759_32785[(2)] = null);

(statearr_32759_32785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (5))){
var inst_32727 = (state_32743[(2)]);
var state_32743__$1 = (function (){var statearr_32760 = state_32743;
(statearr_32760[(11)] = inst_32727);

return statearr_32760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32743__$1,(12),dchan);
} else {
if((state_val_32744 === (14))){
var inst_32729 = (state_32743[(8)]);
var inst_32734 = cljs.core.apply.call(null,f,inst_32729);
var state_32743__$1 = state_32743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32743__$1,(16),out,inst_32734);
} else {
if((state_val_32744 === (16))){
var inst_32736 = (state_32743[(2)]);
var state_32743__$1 = (function (){var statearr_32761 = state_32743;
(statearr_32761[(12)] = inst_32736);

return statearr_32761;
})();
var statearr_32762_32786 = state_32743__$1;
(statearr_32762_32786[(2)] = null);

(statearr_32762_32786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (10))){
var inst_32711 = (state_32743[(2)]);
var inst_32712 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32743__$1 = (function (){var statearr_32763 = state_32743;
(statearr_32763[(13)] = inst_32711);

return statearr_32763;
})();
var statearr_32764_32787 = state_32743__$1;
(statearr_32764_32787[(2)] = inst_32712);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32743__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32744 === (8))){
var inst_32725 = (state_32743[(2)]);
var state_32743__$1 = state_32743;
var statearr_32765_32788 = state_32743__$1;
(statearr_32765_32788[(2)] = inst_32725);

(statearr_32765_32788[(1)] = (5));


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
});})(c__18619__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18563__auto__,c__18619__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_32769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32769[(0)] = state_machine__18564__auto__);

(statearr_32769[(1)] = (1));

return statearr_32769;
});
var state_machine__18564__auto____1 = (function (state_32743){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_32743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e32770){if((e32770 instanceof Object)){
var ex__18567__auto__ = e32770;
var statearr_32771_32789 = state_32743;
(statearr_32771_32789[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32790 = state_32743;
state_32743 = G__32790;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_32743){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_32743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18621__auto__ = (function (){var statearr_32772 = f__18620__auto__.call(null);
(statearr_32772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___32773);

return statearr_32772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__18619__auto___32898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___32898,out){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___32898,out){
return (function (state_32874){
var state_val_32875 = (state_32874[(1)]);
if((state_val_32875 === (7))){
var inst_32854 = (state_32874[(7)]);
var inst_32853 = (state_32874[(8)]);
var inst_32853__$1 = (state_32874[(2)]);
var inst_32854__$1 = cljs.core.nth.call(null,inst_32853__$1,(0),null);
var inst_32855 = cljs.core.nth.call(null,inst_32853__$1,(1),null);
var inst_32856 = (inst_32854__$1 == null);
var state_32874__$1 = (function (){var statearr_32876 = state_32874;
(statearr_32876[(7)] = inst_32854__$1);

(statearr_32876[(8)] = inst_32853__$1);

(statearr_32876[(9)] = inst_32855);

return statearr_32876;
})();
if(cljs.core.truth_(inst_32856)){
var statearr_32877_32899 = state_32874__$1;
(statearr_32877_32899[(1)] = (8));

} else {
var statearr_32878_32900 = state_32874__$1;
(statearr_32878_32900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (1))){
var inst_32845 = cljs.core.vec.call(null,chs);
var inst_32846 = inst_32845;
var state_32874__$1 = (function (){var statearr_32879 = state_32874;
(statearr_32879[(10)] = inst_32846);

return statearr_32879;
})();
var statearr_32880_32901 = state_32874__$1;
(statearr_32880_32901[(2)] = null);

(statearr_32880_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (4))){
var inst_32846 = (state_32874[(10)]);
var state_32874__$1 = state_32874;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32874__$1,(7),inst_32846);
} else {
if((state_val_32875 === (6))){
var inst_32870 = (state_32874[(2)]);
var state_32874__$1 = state_32874;
var statearr_32881_32902 = state_32874__$1;
(statearr_32881_32902[(2)] = inst_32870);

(statearr_32881_32902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (3))){
var inst_32872 = (state_32874[(2)]);
var state_32874__$1 = state_32874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32874__$1,inst_32872);
} else {
if((state_val_32875 === (2))){
var inst_32846 = (state_32874[(10)]);
var inst_32848 = cljs.core.count.call(null,inst_32846);
var inst_32849 = (inst_32848 > (0));
var state_32874__$1 = state_32874;
if(cljs.core.truth_(inst_32849)){
var statearr_32883_32903 = state_32874__$1;
(statearr_32883_32903[(1)] = (4));

} else {
var statearr_32884_32904 = state_32874__$1;
(statearr_32884_32904[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (11))){
var inst_32846 = (state_32874[(10)]);
var inst_32863 = (state_32874[(2)]);
var tmp32882 = inst_32846;
var inst_32846__$1 = tmp32882;
var state_32874__$1 = (function (){var statearr_32885 = state_32874;
(statearr_32885[(10)] = inst_32846__$1);

(statearr_32885[(11)] = inst_32863);

return statearr_32885;
})();
var statearr_32886_32905 = state_32874__$1;
(statearr_32886_32905[(2)] = null);

(statearr_32886_32905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (9))){
var inst_32854 = (state_32874[(7)]);
var state_32874__$1 = state_32874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32874__$1,(11),out,inst_32854);
} else {
if((state_val_32875 === (5))){
var inst_32868 = cljs.core.async.close_BANG_.call(null,out);
var state_32874__$1 = state_32874;
var statearr_32887_32906 = state_32874__$1;
(statearr_32887_32906[(2)] = inst_32868);

(statearr_32887_32906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (10))){
var inst_32866 = (state_32874[(2)]);
var state_32874__$1 = state_32874;
var statearr_32888_32907 = state_32874__$1;
(statearr_32888_32907[(2)] = inst_32866);

(statearr_32888_32907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (8))){
var inst_32846 = (state_32874[(10)]);
var inst_32854 = (state_32874[(7)]);
var inst_32853 = (state_32874[(8)]);
var inst_32855 = (state_32874[(9)]);
var inst_32858 = (function (){var c = inst_32855;
var v = inst_32854;
var vec__32851 = inst_32853;
var cs = inst_32846;
return ((function (c,v,vec__32851,cs,inst_32846,inst_32854,inst_32853,inst_32855,state_val_32875,c__18619__auto___32898,out){
return (function (p1__32791_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32791_SHARP_);
});
;})(c,v,vec__32851,cs,inst_32846,inst_32854,inst_32853,inst_32855,state_val_32875,c__18619__auto___32898,out))
})();
var inst_32859 = cljs.core.filterv.call(null,inst_32858,inst_32846);
var inst_32846__$1 = inst_32859;
var state_32874__$1 = (function (){var statearr_32889 = state_32874;
(statearr_32889[(10)] = inst_32846__$1);

return statearr_32889;
})();
var statearr_32890_32908 = state_32874__$1;
(statearr_32890_32908[(2)] = null);

(statearr_32890_32908[(1)] = (2));


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
});})(c__18619__auto___32898,out))
;
return ((function (switch__18563__auto__,c__18619__auto___32898,out){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_32894 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32894[(0)] = state_machine__18564__auto__);

(statearr_32894[(1)] = (1));

return statearr_32894;
});
var state_machine__18564__auto____1 = (function (state_32874){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_32874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e32895){if((e32895 instanceof Object)){
var ex__18567__auto__ = e32895;
var statearr_32896_32909 = state_32874;
(statearr_32896_32909[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32910 = state_32874;
state_32874 = G__32910;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_32874){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_32874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___32898,out))
})();
var state__18621__auto__ = (function (){var statearr_32897 = f__18620__auto__.call(null);
(statearr_32897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___32898);

return statearr_32897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___32898,out))
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
var c__18619__auto___33003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___33003,out){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___33003,out){
return (function (state_32980){
var state_val_32981 = (state_32980[(1)]);
if((state_val_32981 === (7))){
var inst_32962 = (state_32980[(7)]);
var inst_32962__$1 = (state_32980[(2)]);
var inst_32963 = (inst_32962__$1 == null);
var inst_32964 = cljs.core.not.call(null,inst_32963);
var state_32980__$1 = (function (){var statearr_32982 = state_32980;
(statearr_32982[(7)] = inst_32962__$1);

return statearr_32982;
})();
if(inst_32964){
var statearr_32983_33004 = state_32980__$1;
(statearr_32983_33004[(1)] = (8));

} else {
var statearr_32984_33005 = state_32980__$1;
(statearr_32984_33005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (1))){
var inst_32957 = (0);
var state_32980__$1 = (function (){var statearr_32985 = state_32980;
(statearr_32985[(8)] = inst_32957);

return statearr_32985;
})();
var statearr_32986_33006 = state_32980__$1;
(statearr_32986_33006[(2)] = null);

(statearr_32986_33006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (4))){
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32980__$1,(7),ch);
} else {
if((state_val_32981 === (6))){
var inst_32975 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_32987_33007 = state_32980__$1;
(statearr_32987_33007[(2)] = inst_32975);

(statearr_32987_33007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (3))){
var inst_32977 = (state_32980[(2)]);
var inst_32978 = cljs.core.async.close_BANG_.call(null,out);
var state_32980__$1 = (function (){var statearr_32988 = state_32980;
(statearr_32988[(9)] = inst_32977);

return statearr_32988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32980__$1,inst_32978);
} else {
if((state_val_32981 === (2))){
var inst_32957 = (state_32980[(8)]);
var inst_32959 = (inst_32957 < n);
var state_32980__$1 = state_32980;
if(cljs.core.truth_(inst_32959)){
var statearr_32989_33008 = state_32980__$1;
(statearr_32989_33008[(1)] = (4));

} else {
var statearr_32990_33009 = state_32980__$1;
(statearr_32990_33009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (11))){
var inst_32957 = (state_32980[(8)]);
var inst_32967 = (state_32980[(2)]);
var inst_32968 = (inst_32957 + (1));
var inst_32957__$1 = inst_32968;
var state_32980__$1 = (function (){var statearr_32991 = state_32980;
(statearr_32991[(8)] = inst_32957__$1);

(statearr_32991[(10)] = inst_32967);

return statearr_32991;
})();
var statearr_32992_33010 = state_32980__$1;
(statearr_32992_33010[(2)] = null);

(statearr_32992_33010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (9))){
var state_32980__$1 = state_32980;
var statearr_32993_33011 = state_32980__$1;
(statearr_32993_33011[(2)] = null);

(statearr_32993_33011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (5))){
var state_32980__$1 = state_32980;
var statearr_32994_33012 = state_32980__$1;
(statearr_32994_33012[(2)] = null);

(statearr_32994_33012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (10))){
var inst_32972 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_32995_33013 = state_32980__$1;
(statearr_32995_33013[(2)] = inst_32972);

(statearr_32995_33013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32981 === (8))){
var inst_32962 = (state_32980[(7)]);
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32980__$1,(11),out,inst_32962);
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
});})(c__18619__auto___33003,out))
;
return ((function (switch__18563__auto__,c__18619__auto___33003,out){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_32999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32999[(0)] = state_machine__18564__auto__);

(statearr_32999[(1)] = (1));

return statearr_32999;
});
var state_machine__18564__auto____1 = (function (state_32980){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_32980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e33000){if((e33000 instanceof Object)){
var ex__18567__auto__ = e33000;
var statearr_33001_33014 = state_32980;
(statearr_33001_33014[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33015 = state_32980;
state_32980 = G__33015;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_32980){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_32980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___33003,out))
})();
var state__18621__auto__ = (function (){var statearr_33002 = f__18620__auto__.call(null);
(statearr_33002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___33003);

return statearr_33002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___33003,out))
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
if(typeof cljs.core.async.t33023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33023 = (function (ch,f,map_LT_,meta33024){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33024 = meta33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33023.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33023.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33026 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33026 = (function (fn1,_,meta33024,map_LT_,f,ch,meta33027){
this.fn1 = fn1;
this._ = _;
this.meta33024 = meta33024;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33027 = meta33027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33026.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33016_SHARP_){
return f1.call(null,(((p1__33016_SHARP_ == null))?null:self__.f.call(null,p1__33016_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33028){
var self__ = this;
var _33028__$1 = this;
return self__.meta33027;
});})(___$1))
;

cljs.core.async.t33026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33028,meta33027__$1){
var self__ = this;
var _33028__$1 = this;
return (new cljs.core.async.t33026(self__.fn1,self__._,self__.meta33024,self__.map_LT_,self__.f,self__.ch,meta33027__$1));
});})(___$1))
;

cljs.core.async.t33026.cljs$lang$type = true;

cljs.core.async.t33026.cljs$lang$ctorStr = "cljs.core.async/t33026";

cljs.core.async.t33026.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t33026");
});})(___$1))
;

cljs.core.async.__GT_t33026 = ((function (___$1){
return (function __GT_t33026(fn1__$1,___$2,meta33024__$1,map_LT___$1,f__$1,ch__$1,meta33027){
return (new cljs.core.async.t33026(fn1__$1,___$2,meta33024__$1,map_LT___$1,f__$1,ch__$1,meta33027));
});})(___$1))
;

}

return (new cljs.core.async.t33026(fn1,___$1,self__.meta33024,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t33023.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33025){
var self__ = this;
var _33025__$1 = this;
return self__.meta33024;
});

cljs.core.async.t33023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33025,meta33024__$1){
var self__ = this;
var _33025__$1 = this;
return (new cljs.core.async.t33023(self__.ch,self__.f,self__.map_LT_,meta33024__$1));
});

cljs.core.async.t33023.cljs$lang$type = true;

cljs.core.async.t33023.cljs$lang$ctorStr = "cljs.core.async/t33023";

cljs.core.async.t33023.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t33023");
});

cljs.core.async.__GT_t33023 = (function __GT_t33023(ch__$1,f__$1,map_LT___$1,meta33024){
return (new cljs.core.async.t33023(ch__$1,f__$1,map_LT___$1,meta33024));
});

}

return (new cljs.core.async.t33023(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33032 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33032 = (function (ch,f,map_GT_,meta33033){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33033 = meta33033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33032.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33032.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33032.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33032.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33032.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33032.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33034){
var self__ = this;
var _33034__$1 = this;
return self__.meta33033;
});

cljs.core.async.t33032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33034,meta33033__$1){
var self__ = this;
var _33034__$1 = this;
return (new cljs.core.async.t33032(self__.ch,self__.f,self__.map_GT_,meta33033__$1));
});

cljs.core.async.t33032.cljs$lang$type = true;

cljs.core.async.t33032.cljs$lang$ctorStr = "cljs.core.async/t33032";

cljs.core.async.t33032.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t33032");
});

cljs.core.async.__GT_t33032 = (function __GT_t33032(ch__$1,f__$1,map_GT___$1,meta33033){
return (new cljs.core.async.t33032(ch__$1,f__$1,map_GT___$1,meta33033));
});

}

return (new cljs.core.async.t33032(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33038 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33038 = (function (ch,p,filter_GT_,meta33039){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33039 = meta33039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33038.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33038.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33038.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33038.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33040){
var self__ = this;
var _33040__$1 = this;
return self__.meta33039;
});

cljs.core.async.t33038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33040,meta33039__$1){
var self__ = this;
var _33040__$1 = this;
return (new cljs.core.async.t33038(self__.ch,self__.p,self__.filter_GT_,meta33039__$1));
});

cljs.core.async.t33038.cljs$lang$type = true;

cljs.core.async.t33038.cljs$lang$ctorStr = "cljs.core.async/t33038";

cljs.core.async.t33038.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t33038");
});

cljs.core.async.__GT_t33038 = (function __GT_t33038(ch__$1,p__$1,filter_GT___$1,meta33039){
return (new cljs.core.async.t33038(ch__$1,p__$1,filter_GT___$1,meta33039));
});

}

return (new cljs.core.async.t33038(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18619__auto___33123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___33123,out){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___33123,out){
return (function (state_33102){
var state_val_33103 = (state_33102[(1)]);
if((state_val_33103 === (7))){
var inst_33098 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
var statearr_33104_33124 = state_33102__$1;
(statearr_33104_33124[(2)] = inst_33098);

(statearr_33104_33124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (1))){
var state_33102__$1 = state_33102;
var statearr_33105_33125 = state_33102__$1;
(statearr_33105_33125[(2)] = null);

(statearr_33105_33125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (4))){
var inst_33084 = (state_33102[(7)]);
var inst_33084__$1 = (state_33102[(2)]);
var inst_33085 = (inst_33084__$1 == null);
var state_33102__$1 = (function (){var statearr_33106 = state_33102;
(statearr_33106[(7)] = inst_33084__$1);

return statearr_33106;
})();
if(cljs.core.truth_(inst_33085)){
var statearr_33107_33126 = state_33102__$1;
(statearr_33107_33126[(1)] = (5));

} else {
var statearr_33108_33127 = state_33102__$1;
(statearr_33108_33127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (6))){
var inst_33084 = (state_33102[(7)]);
var inst_33089 = p.call(null,inst_33084);
var state_33102__$1 = state_33102;
if(cljs.core.truth_(inst_33089)){
var statearr_33109_33128 = state_33102__$1;
(statearr_33109_33128[(1)] = (8));

} else {
var statearr_33110_33129 = state_33102__$1;
(statearr_33110_33129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (3))){
var inst_33100 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33102__$1,inst_33100);
} else {
if((state_val_33103 === (2))){
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33102__$1,(4),ch);
} else {
if((state_val_33103 === (11))){
var inst_33092 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
var statearr_33111_33130 = state_33102__$1;
(statearr_33111_33130[(2)] = inst_33092);

(statearr_33111_33130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (9))){
var state_33102__$1 = state_33102;
var statearr_33112_33131 = state_33102__$1;
(statearr_33112_33131[(2)] = null);

(statearr_33112_33131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (5))){
var inst_33087 = cljs.core.async.close_BANG_.call(null,out);
var state_33102__$1 = state_33102;
var statearr_33113_33132 = state_33102__$1;
(statearr_33113_33132[(2)] = inst_33087);

(statearr_33113_33132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (10))){
var inst_33095 = (state_33102[(2)]);
var state_33102__$1 = (function (){var statearr_33114 = state_33102;
(statearr_33114[(8)] = inst_33095);

return statearr_33114;
})();
var statearr_33115_33133 = state_33102__$1;
(statearr_33115_33133[(2)] = null);

(statearr_33115_33133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (8))){
var inst_33084 = (state_33102[(7)]);
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33102__$1,(11),out,inst_33084);
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
});})(c__18619__auto___33123,out))
;
return ((function (switch__18563__auto__,c__18619__auto___33123,out){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_33119 = [null,null,null,null,null,null,null,null,null];
(statearr_33119[(0)] = state_machine__18564__auto__);

(statearr_33119[(1)] = (1));

return statearr_33119;
});
var state_machine__18564__auto____1 = (function (state_33102){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_33102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e33120){if((e33120 instanceof Object)){
var ex__18567__auto__ = e33120;
var statearr_33121_33134 = state_33102;
(statearr_33121_33134[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33135 = state_33102;
state_33102 = G__33135;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_33102){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_33102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___33123,out))
})();
var state__18621__auto__ = (function (){var statearr_33122 = f__18620__auto__.call(null);
(statearr_33122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___33123);

return statearr_33122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___33123,out))
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
var c__18619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto__){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto__){
return (function (state_33301){
var state_val_33302 = (state_33301[(1)]);
if((state_val_33302 === (7))){
var inst_33297 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33303_33344 = state_33301__$1;
(statearr_33303_33344[(2)] = inst_33297);

(statearr_33303_33344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (20))){
var inst_33267 = (state_33301[(7)]);
var inst_33278 = (state_33301[(2)]);
var inst_33279 = cljs.core.next.call(null,inst_33267);
var inst_33253 = inst_33279;
var inst_33254 = null;
var inst_33255 = (0);
var inst_33256 = (0);
var state_33301__$1 = (function (){var statearr_33304 = state_33301;
(statearr_33304[(8)] = inst_33255);

(statearr_33304[(9)] = inst_33256);

(statearr_33304[(10)] = inst_33254);

(statearr_33304[(11)] = inst_33278);

(statearr_33304[(12)] = inst_33253);

return statearr_33304;
})();
var statearr_33305_33345 = state_33301__$1;
(statearr_33305_33345[(2)] = null);

(statearr_33305_33345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (1))){
var state_33301__$1 = state_33301;
var statearr_33306_33346 = state_33301__$1;
(statearr_33306_33346[(2)] = null);

(statearr_33306_33346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (4))){
var inst_33242 = (state_33301[(13)]);
var inst_33242__$1 = (state_33301[(2)]);
var inst_33243 = (inst_33242__$1 == null);
var state_33301__$1 = (function (){var statearr_33307 = state_33301;
(statearr_33307[(13)] = inst_33242__$1);

return statearr_33307;
})();
if(cljs.core.truth_(inst_33243)){
var statearr_33308_33347 = state_33301__$1;
(statearr_33308_33347[(1)] = (5));

} else {
var statearr_33309_33348 = state_33301__$1;
(statearr_33309_33348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (15))){
var state_33301__$1 = state_33301;
var statearr_33313_33349 = state_33301__$1;
(statearr_33313_33349[(2)] = null);

(statearr_33313_33349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (21))){
var state_33301__$1 = state_33301;
var statearr_33314_33350 = state_33301__$1;
(statearr_33314_33350[(2)] = null);

(statearr_33314_33350[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (13))){
var inst_33255 = (state_33301[(8)]);
var inst_33256 = (state_33301[(9)]);
var inst_33254 = (state_33301[(10)]);
var inst_33253 = (state_33301[(12)]);
var inst_33263 = (state_33301[(2)]);
var inst_33264 = (inst_33256 + (1));
var tmp33310 = inst_33255;
var tmp33311 = inst_33254;
var tmp33312 = inst_33253;
var inst_33253__$1 = tmp33312;
var inst_33254__$1 = tmp33311;
var inst_33255__$1 = tmp33310;
var inst_33256__$1 = inst_33264;
var state_33301__$1 = (function (){var statearr_33315 = state_33301;
(statearr_33315[(14)] = inst_33263);

(statearr_33315[(8)] = inst_33255__$1);

(statearr_33315[(9)] = inst_33256__$1);

(statearr_33315[(10)] = inst_33254__$1);

(statearr_33315[(12)] = inst_33253__$1);

return statearr_33315;
})();
var statearr_33316_33351 = state_33301__$1;
(statearr_33316_33351[(2)] = null);

(statearr_33316_33351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (22))){
var state_33301__$1 = state_33301;
var statearr_33317_33352 = state_33301__$1;
(statearr_33317_33352[(2)] = null);

(statearr_33317_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (6))){
var inst_33242 = (state_33301[(13)]);
var inst_33251 = f.call(null,inst_33242);
var inst_33252 = cljs.core.seq.call(null,inst_33251);
var inst_33253 = inst_33252;
var inst_33254 = null;
var inst_33255 = (0);
var inst_33256 = (0);
var state_33301__$1 = (function (){var statearr_33318 = state_33301;
(statearr_33318[(8)] = inst_33255);

(statearr_33318[(9)] = inst_33256);

(statearr_33318[(10)] = inst_33254);

(statearr_33318[(12)] = inst_33253);

return statearr_33318;
})();
var statearr_33319_33353 = state_33301__$1;
(statearr_33319_33353[(2)] = null);

(statearr_33319_33353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (17))){
var inst_33267 = (state_33301[(7)]);
var inst_33271 = cljs.core.chunk_first.call(null,inst_33267);
var inst_33272 = cljs.core.chunk_rest.call(null,inst_33267);
var inst_33273 = cljs.core.count.call(null,inst_33271);
var inst_33253 = inst_33272;
var inst_33254 = inst_33271;
var inst_33255 = inst_33273;
var inst_33256 = (0);
var state_33301__$1 = (function (){var statearr_33320 = state_33301;
(statearr_33320[(8)] = inst_33255);

(statearr_33320[(9)] = inst_33256);

(statearr_33320[(10)] = inst_33254);

(statearr_33320[(12)] = inst_33253);

return statearr_33320;
})();
var statearr_33321_33354 = state_33301__$1;
(statearr_33321_33354[(2)] = null);

(statearr_33321_33354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (3))){
var inst_33299 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33301__$1,inst_33299);
} else {
if((state_val_33302 === (12))){
var inst_33287 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33322_33355 = state_33301__$1;
(statearr_33322_33355[(2)] = inst_33287);

(statearr_33322_33355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (2))){
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33301__$1,(4),in$);
} else {
if((state_val_33302 === (23))){
var inst_33295 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33323_33356 = state_33301__$1;
(statearr_33323_33356[(2)] = inst_33295);

(statearr_33323_33356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (19))){
var inst_33282 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33324_33357 = state_33301__$1;
(statearr_33324_33357[(2)] = inst_33282);

(statearr_33324_33357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (11))){
var inst_33267 = (state_33301[(7)]);
var inst_33253 = (state_33301[(12)]);
var inst_33267__$1 = cljs.core.seq.call(null,inst_33253);
var state_33301__$1 = (function (){var statearr_33325 = state_33301;
(statearr_33325[(7)] = inst_33267__$1);

return statearr_33325;
})();
if(inst_33267__$1){
var statearr_33326_33358 = state_33301__$1;
(statearr_33326_33358[(1)] = (14));

} else {
var statearr_33327_33359 = state_33301__$1;
(statearr_33327_33359[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (9))){
var inst_33289 = (state_33301[(2)]);
var inst_33290 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33301__$1 = (function (){var statearr_33328 = state_33301;
(statearr_33328[(15)] = inst_33289);

return statearr_33328;
})();
if(cljs.core.truth_(inst_33290)){
var statearr_33329_33360 = state_33301__$1;
(statearr_33329_33360[(1)] = (21));

} else {
var statearr_33330_33361 = state_33301__$1;
(statearr_33330_33361[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (5))){
var inst_33245 = cljs.core.async.close_BANG_.call(null,out);
var state_33301__$1 = state_33301;
var statearr_33331_33362 = state_33301__$1;
(statearr_33331_33362[(2)] = inst_33245);

(statearr_33331_33362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (14))){
var inst_33267 = (state_33301[(7)]);
var inst_33269 = cljs.core.chunked_seq_QMARK_.call(null,inst_33267);
var state_33301__$1 = state_33301;
if(inst_33269){
var statearr_33332_33363 = state_33301__$1;
(statearr_33332_33363[(1)] = (17));

} else {
var statearr_33333_33364 = state_33301__$1;
(statearr_33333_33364[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (16))){
var inst_33285 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33334_33365 = state_33301__$1;
(statearr_33334_33365[(2)] = inst_33285);

(statearr_33334_33365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (10))){
var inst_33256 = (state_33301[(9)]);
var inst_33254 = (state_33301[(10)]);
var inst_33261 = cljs.core._nth.call(null,inst_33254,inst_33256);
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33301__$1,(13),out,inst_33261);
} else {
if((state_val_33302 === (18))){
var inst_33267 = (state_33301[(7)]);
var inst_33276 = cljs.core.first.call(null,inst_33267);
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33301__$1,(20),out,inst_33276);
} else {
if((state_val_33302 === (8))){
var inst_33255 = (state_33301[(8)]);
var inst_33256 = (state_33301[(9)]);
var inst_33258 = (inst_33256 < inst_33255);
var inst_33259 = inst_33258;
var state_33301__$1 = state_33301;
if(cljs.core.truth_(inst_33259)){
var statearr_33335_33366 = state_33301__$1;
(statearr_33335_33366[(1)] = (10));

} else {
var statearr_33336_33367 = state_33301__$1;
(statearr_33336_33367[(1)] = (11));

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
});})(c__18619__auto__))
;
return ((function (switch__18563__auto__,c__18619__auto__){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_33340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33340[(0)] = state_machine__18564__auto__);

(statearr_33340[(1)] = (1));

return statearr_33340;
});
var state_machine__18564__auto____1 = (function (state_33301){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_33301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e33341){if((e33341 instanceof Object)){
var ex__18567__auto__ = e33341;
var statearr_33342_33368 = state_33301;
(statearr_33342_33368[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33369 = state_33301;
state_33301 = G__33369;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_33301){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_33301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto__))
})();
var state__18621__auto__ = (function (){var statearr_33343 = f__18620__auto__.call(null);
(statearr_33343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto__);

return statearr_33343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto__))
);

return c__18619__auto__;
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
var c__18619__auto___33466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___33466,out){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___33466,out){
return (function (state_33441){
var state_val_33442 = (state_33441[(1)]);
if((state_val_33442 === (7))){
var inst_33436 = (state_33441[(2)]);
var state_33441__$1 = state_33441;
var statearr_33443_33467 = state_33441__$1;
(statearr_33443_33467[(2)] = inst_33436);

(statearr_33443_33467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33442 === (1))){
var inst_33418 = null;
var state_33441__$1 = (function (){var statearr_33444 = state_33441;
(statearr_33444[(7)] = inst_33418);

return statearr_33444;
})();
var statearr_33445_33468 = state_33441__$1;
(statearr_33445_33468[(2)] = null);

(statearr_33445_33468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33442 === (4))){
var inst_33421 = (state_33441[(8)]);
var inst_33421__$1 = (state_33441[(2)]);
var inst_33422 = (inst_33421__$1 == null);
var inst_33423 = cljs.core.not.call(null,inst_33422);
var state_33441__$1 = (function (){var statearr_33446 = state_33441;
(statearr_33446[(8)] = inst_33421__$1);

return statearr_33446;
})();
if(inst_33423){
var statearr_33447_33469 = state_33441__$1;
(statearr_33447_33469[(1)] = (5));

} else {
var statearr_33448_33470 = state_33441__$1;
(statearr_33448_33470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33442 === (6))){
var state_33441__$1 = state_33441;
var statearr_33449_33471 = state_33441__$1;
(statearr_33449_33471[(2)] = null);

(statearr_33449_33471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33442 === (3))){
var inst_33438 = (state_33441[(2)]);
var inst_33439 = cljs.core.async.close_BANG_.call(null,out);
var state_33441__$1 = (function (){var statearr_33450 = state_33441;
(statearr_33450[(9)] = inst_33438);

return statearr_33450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33441__$1,inst_33439);
} else {
if((state_val_33442 === (2))){
var state_33441__$1 = state_33441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33441__$1,(4),ch);
} else {
if((state_val_33442 === (11))){
var inst_33421 = (state_33441[(8)]);
var inst_33430 = (state_33441[(2)]);
var inst_33418 = inst_33421;
var state_33441__$1 = (function (){var statearr_33451 = state_33441;
(statearr_33451[(10)] = inst_33430);

(statearr_33451[(7)] = inst_33418);

return statearr_33451;
})();
var statearr_33452_33472 = state_33441__$1;
(statearr_33452_33472[(2)] = null);

(statearr_33452_33472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33442 === (9))){
var inst_33421 = (state_33441[(8)]);
var state_33441__$1 = state_33441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33441__$1,(11),out,inst_33421);
} else {
if((state_val_33442 === (5))){
var inst_33421 = (state_33441[(8)]);
var inst_33418 = (state_33441[(7)]);
var inst_33425 = cljs.core._EQ_.call(null,inst_33421,inst_33418);
var state_33441__$1 = state_33441;
if(inst_33425){
var statearr_33454_33473 = state_33441__$1;
(statearr_33454_33473[(1)] = (8));

} else {
var statearr_33455_33474 = state_33441__$1;
(statearr_33455_33474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33442 === (10))){
var inst_33433 = (state_33441[(2)]);
var state_33441__$1 = state_33441;
var statearr_33456_33475 = state_33441__$1;
(statearr_33456_33475[(2)] = inst_33433);

(statearr_33456_33475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33442 === (8))){
var inst_33418 = (state_33441[(7)]);
var tmp33453 = inst_33418;
var inst_33418__$1 = tmp33453;
var state_33441__$1 = (function (){var statearr_33457 = state_33441;
(statearr_33457[(7)] = inst_33418__$1);

return statearr_33457;
})();
var statearr_33458_33476 = state_33441__$1;
(statearr_33458_33476[(2)] = null);

(statearr_33458_33476[(1)] = (2));


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
});})(c__18619__auto___33466,out))
;
return ((function (switch__18563__auto__,c__18619__auto___33466,out){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_33462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33462[(0)] = state_machine__18564__auto__);

(statearr_33462[(1)] = (1));

return statearr_33462;
});
var state_machine__18564__auto____1 = (function (state_33441){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_33441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e33463){if((e33463 instanceof Object)){
var ex__18567__auto__ = e33463;
var statearr_33464_33477 = state_33441;
(statearr_33464_33477[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33478 = state_33441;
state_33441 = G__33478;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_33441){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_33441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___33466,out))
})();
var state__18621__auto__ = (function (){var statearr_33465 = f__18620__auto__.call(null);
(statearr_33465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___33466);

return statearr_33465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___33466,out))
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
var c__18619__auto___33613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___33613,out){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___33613,out){
return (function (state_33583){
var state_val_33584 = (state_33583[(1)]);
if((state_val_33584 === (7))){
var inst_33579 = (state_33583[(2)]);
var state_33583__$1 = state_33583;
var statearr_33585_33614 = state_33583__$1;
(statearr_33585_33614[(2)] = inst_33579);

(statearr_33585_33614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33584 === (1))){
var inst_33546 = (new Array(n));
var inst_33547 = inst_33546;
var inst_33548 = (0);
var state_33583__$1 = (function (){var statearr_33586 = state_33583;
(statearr_33586[(7)] = inst_33548);

(statearr_33586[(8)] = inst_33547);

return statearr_33586;
})();
var statearr_33587_33615 = state_33583__$1;
(statearr_33587_33615[(2)] = null);

(statearr_33587_33615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33584 === (4))){
var inst_33551 = (state_33583[(9)]);
var inst_33551__$1 = (state_33583[(2)]);
var inst_33552 = (inst_33551__$1 == null);
var inst_33553 = cljs.core.not.call(null,inst_33552);
var state_33583__$1 = (function (){var statearr_33588 = state_33583;
(statearr_33588[(9)] = inst_33551__$1);

return statearr_33588;
})();
if(inst_33553){
var statearr_33589_33616 = state_33583__$1;
(statearr_33589_33616[(1)] = (5));

} else {
var statearr_33590_33617 = state_33583__$1;
(statearr_33590_33617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33584 === (15))){
var inst_33573 = (state_33583[(2)]);
var state_33583__$1 = state_33583;
var statearr_33591_33618 = state_33583__$1;
(statearr_33591_33618[(2)] = inst_33573);

(statearr_33591_33618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33584 === (13))){
var state_33583__$1 = state_33583;
var statearr_33592_33619 = state_33583__$1;
(statearr_33592_33619[(2)] = null);

(statearr_33592_33619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33584 === (6))){
var inst_33548 = (state_33583[(7)]);
var inst_33569 = (inst_33548 > (0));
var state_33583__$1 = state_33583;
if(cljs.core.truth_(inst_33569)){
var statearr_33593_33620 = state_33583__$1;
(statearr_33593_33620[(1)] = (12));

} else {
var statearr_33594_33621 = state_33583__$1;
(statearr_33594_33621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33584 === (3))){
var inst_33581 = (state_33583[(2)]);
var state_33583__$1 = state_33583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33583__$1,inst_33581);
} else {
if((state_val_33584 === (12))){
var inst_33547 = (state_33583[(8)]);
var inst_33571 = cljs.core.vec.call(null,inst_33547);
var state_33583__$1 = state_33583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33583__$1,(15),out,inst_33571);
} else {
if((state_val_33584 === (2))){
var state_33583__$1 = state_33583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33583__$1,(4),ch);
} else {
if((state_val_33584 === (11))){
var inst_33563 = (state_33583[(2)]);
var inst_33564 = (new Array(n));
var inst_33547 = inst_33564;
var inst_33548 = (0);
var state_33583__$1 = (function (){var statearr_33595 = state_33583;
(statearr_33595[(7)] = inst_33548);

(statearr_33595[(10)] = inst_33563);

(statearr_33595[(8)] = inst_33547);

return statearr_33595;
})();
var statearr_33596_33622 = state_33583__$1;
(statearr_33596_33622[(2)] = null);

(statearr_33596_33622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33584 === (9))){
var inst_33547 = (state_33583[(8)]);
var inst_33561 = cljs.core.vec.call(null,inst_33547);
var state_33583__$1 = state_33583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33583__$1,(11),out,inst_33561);
} else {
if((state_val_33584 === (5))){
var inst_33548 = (state_33583[(7)]);
var inst_33551 = (state_33583[(9)]);
var inst_33556 = (state_33583[(11)]);
var inst_33547 = (state_33583[(8)]);
var inst_33555 = (inst_33547[inst_33548] = inst_33551);
var inst_33556__$1 = (inst_33548 + (1));
var inst_33557 = (inst_33556__$1 < n);
var state_33583__$1 = (function (){var statearr_33597 = state_33583;
(statearr_33597[(12)] = inst_33555);

(statearr_33597[(11)] = inst_33556__$1);

return statearr_33597;
})();
if(cljs.core.truth_(inst_33557)){
var statearr_33598_33623 = state_33583__$1;
(statearr_33598_33623[(1)] = (8));

} else {
var statearr_33599_33624 = state_33583__$1;
(statearr_33599_33624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33584 === (14))){
var inst_33576 = (state_33583[(2)]);
var inst_33577 = cljs.core.async.close_BANG_.call(null,out);
var state_33583__$1 = (function (){var statearr_33601 = state_33583;
(statearr_33601[(13)] = inst_33576);

return statearr_33601;
})();
var statearr_33602_33625 = state_33583__$1;
(statearr_33602_33625[(2)] = inst_33577);

(statearr_33602_33625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33584 === (10))){
var inst_33567 = (state_33583[(2)]);
var state_33583__$1 = state_33583;
var statearr_33603_33626 = state_33583__$1;
(statearr_33603_33626[(2)] = inst_33567);

(statearr_33603_33626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33584 === (8))){
var inst_33556 = (state_33583[(11)]);
var inst_33547 = (state_33583[(8)]);
var tmp33600 = inst_33547;
var inst_33547__$1 = tmp33600;
var inst_33548 = inst_33556;
var state_33583__$1 = (function (){var statearr_33604 = state_33583;
(statearr_33604[(7)] = inst_33548);

(statearr_33604[(8)] = inst_33547__$1);

return statearr_33604;
})();
var statearr_33605_33627 = state_33583__$1;
(statearr_33605_33627[(2)] = null);

(statearr_33605_33627[(1)] = (2));


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
});})(c__18619__auto___33613,out))
;
return ((function (switch__18563__auto__,c__18619__auto___33613,out){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_33609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33609[(0)] = state_machine__18564__auto__);

(statearr_33609[(1)] = (1));

return statearr_33609;
});
var state_machine__18564__auto____1 = (function (state_33583){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_33583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e33610){if((e33610 instanceof Object)){
var ex__18567__auto__ = e33610;
var statearr_33611_33628 = state_33583;
(statearr_33611_33628[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33629 = state_33583;
state_33583 = G__33629;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_33583){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_33583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___33613,out))
})();
var state__18621__auto__ = (function (){var statearr_33612 = f__18620__auto__.call(null);
(statearr_33612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___33613);

return statearr_33612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___33613,out))
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
var c__18619__auto___33772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___33772,out){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___33772,out){
return (function (state_33742){
var state_val_33743 = (state_33742[(1)]);
if((state_val_33743 === (7))){
var inst_33738 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33744_33773 = state_33742__$1;
(statearr_33744_33773[(2)] = inst_33738);

(statearr_33744_33773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (1))){
var inst_33701 = [];
var inst_33702 = inst_33701;
var inst_33703 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33742__$1 = (function (){var statearr_33745 = state_33742;
(statearr_33745[(7)] = inst_33702);

(statearr_33745[(8)] = inst_33703);

return statearr_33745;
})();
var statearr_33746_33774 = state_33742__$1;
(statearr_33746_33774[(2)] = null);

(statearr_33746_33774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (4))){
var inst_33706 = (state_33742[(9)]);
var inst_33706__$1 = (state_33742[(2)]);
var inst_33707 = (inst_33706__$1 == null);
var inst_33708 = cljs.core.not.call(null,inst_33707);
var state_33742__$1 = (function (){var statearr_33747 = state_33742;
(statearr_33747[(9)] = inst_33706__$1);

return statearr_33747;
})();
if(inst_33708){
var statearr_33748_33775 = state_33742__$1;
(statearr_33748_33775[(1)] = (5));

} else {
var statearr_33749_33776 = state_33742__$1;
(statearr_33749_33776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (15))){
var inst_33732 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33750_33777 = state_33742__$1;
(statearr_33750_33777[(2)] = inst_33732);

(statearr_33750_33777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (13))){
var state_33742__$1 = state_33742;
var statearr_33751_33778 = state_33742__$1;
(statearr_33751_33778[(2)] = null);

(statearr_33751_33778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (6))){
var inst_33702 = (state_33742[(7)]);
var inst_33727 = inst_33702.length;
var inst_33728 = (inst_33727 > (0));
var state_33742__$1 = state_33742;
if(cljs.core.truth_(inst_33728)){
var statearr_33752_33779 = state_33742__$1;
(statearr_33752_33779[(1)] = (12));

} else {
var statearr_33753_33780 = state_33742__$1;
(statearr_33753_33780[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (3))){
var inst_33740 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33742__$1,inst_33740);
} else {
if((state_val_33743 === (12))){
var inst_33702 = (state_33742[(7)]);
var inst_33730 = cljs.core.vec.call(null,inst_33702);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33742__$1,(15),out,inst_33730);
} else {
if((state_val_33743 === (2))){
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33742__$1,(4),ch);
} else {
if((state_val_33743 === (11))){
var inst_33706 = (state_33742[(9)]);
var inst_33710 = (state_33742[(10)]);
var inst_33720 = (state_33742[(2)]);
var inst_33721 = [];
var inst_33722 = inst_33721.push(inst_33706);
var inst_33702 = inst_33721;
var inst_33703 = inst_33710;
var state_33742__$1 = (function (){var statearr_33754 = state_33742;
(statearr_33754[(11)] = inst_33722);

(statearr_33754[(7)] = inst_33702);

(statearr_33754[(8)] = inst_33703);

(statearr_33754[(12)] = inst_33720);

return statearr_33754;
})();
var statearr_33755_33781 = state_33742__$1;
(statearr_33755_33781[(2)] = null);

(statearr_33755_33781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (9))){
var inst_33702 = (state_33742[(7)]);
var inst_33718 = cljs.core.vec.call(null,inst_33702);
var state_33742__$1 = state_33742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33742__$1,(11),out,inst_33718);
} else {
if((state_val_33743 === (5))){
var inst_33706 = (state_33742[(9)]);
var inst_33710 = (state_33742[(10)]);
var inst_33703 = (state_33742[(8)]);
var inst_33710__$1 = f.call(null,inst_33706);
var inst_33711 = cljs.core._EQ_.call(null,inst_33710__$1,inst_33703);
var inst_33712 = cljs.core.keyword_identical_QMARK_.call(null,inst_33703,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33713 = (inst_33711) || (inst_33712);
var state_33742__$1 = (function (){var statearr_33756 = state_33742;
(statearr_33756[(10)] = inst_33710__$1);

return statearr_33756;
})();
if(cljs.core.truth_(inst_33713)){
var statearr_33757_33782 = state_33742__$1;
(statearr_33757_33782[(1)] = (8));

} else {
var statearr_33758_33783 = state_33742__$1;
(statearr_33758_33783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (14))){
var inst_33735 = (state_33742[(2)]);
var inst_33736 = cljs.core.async.close_BANG_.call(null,out);
var state_33742__$1 = (function (){var statearr_33760 = state_33742;
(statearr_33760[(13)] = inst_33735);

return statearr_33760;
})();
var statearr_33761_33784 = state_33742__$1;
(statearr_33761_33784[(2)] = inst_33736);

(statearr_33761_33784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (10))){
var inst_33725 = (state_33742[(2)]);
var state_33742__$1 = state_33742;
var statearr_33762_33785 = state_33742__$1;
(statearr_33762_33785[(2)] = inst_33725);

(statearr_33762_33785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (8))){
var inst_33706 = (state_33742[(9)]);
var inst_33710 = (state_33742[(10)]);
var inst_33702 = (state_33742[(7)]);
var inst_33715 = inst_33702.push(inst_33706);
var tmp33759 = inst_33702;
var inst_33702__$1 = tmp33759;
var inst_33703 = inst_33710;
var state_33742__$1 = (function (){var statearr_33763 = state_33742;
(statearr_33763[(14)] = inst_33715);

(statearr_33763[(7)] = inst_33702__$1);

(statearr_33763[(8)] = inst_33703);

return statearr_33763;
})();
var statearr_33764_33786 = state_33742__$1;
(statearr_33764_33786[(2)] = null);

(statearr_33764_33786[(1)] = (2));


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
});})(c__18619__auto___33772,out))
;
return ((function (switch__18563__auto__,c__18619__auto___33772,out){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_33768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33768[(0)] = state_machine__18564__auto__);

(statearr_33768[(1)] = (1));

return statearr_33768;
});
var state_machine__18564__auto____1 = (function (state_33742){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_33742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e33769){if((e33769 instanceof Object)){
var ex__18567__auto__ = e33769;
var statearr_33770_33787 = state_33742;
(statearr_33770_33787[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33788 = state_33742;
state_33742 = G__33788;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_33742){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_33742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___33772,out))
})();
var state__18621__auto__ = (function (){var statearr_33771 = f__18620__auto__.call(null);
(statearr_33771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___33772);

return statearr_33771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___33772,out))
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

//# sourceMappingURL=async.js.map?rel=1429167313048