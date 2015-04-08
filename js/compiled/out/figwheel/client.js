// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28928__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28929__i = 0, G__28929__a = new Array(arguments.length -  0);
while (G__28929__i < G__28929__a.length) {G__28929__a[G__28929__i] = arguments[G__28929__i + 0]; ++G__28929__i;}
  args = new cljs.core.IndexedSeq(G__28929__a,0);
} 
return G__28928__delegate.call(this,args);};
G__28928.cljs$lang$maxFixedArity = 0;
G__28928.cljs$lang$applyTo = (function (arglist__28930){
var args = cljs.core.seq(arglist__28930);
return G__28928__delegate(args);
});
G__28928.cljs$core$IFn$_invoke$arity$variadic = G__28928__delegate;
return G__28928;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__28931){
var map__28933 = p__28931;
var map__28933__$1 = ((cljs.core.seq_QMARK_.call(null,map__28933))?cljs.core.apply.call(null,cljs.core.hash_map,map__28933):map__28933);
var class$ = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__16145__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__16133__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16133__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16133__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18620__auto___29062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___29062,ch){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___29062,ch){
return (function (state_29036){
var state_val_29037 = (state_29036[(1)]);
if((state_val_29037 === (7))){
var inst_29032 = (state_29036[(2)]);
var state_29036__$1 = state_29036;
var statearr_29038_29063 = state_29036__$1;
(statearr_29038_29063[(2)] = inst_29032);

(statearr_29038_29063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (1))){
var state_29036__$1 = state_29036;
var statearr_29039_29064 = state_29036__$1;
(statearr_29039_29064[(2)] = null);

(statearr_29039_29064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (4))){
var inst_29000 = (state_29036[(7)]);
var inst_29000__$1 = (state_29036[(2)]);
var state_29036__$1 = (function (){var statearr_29040 = state_29036;
(statearr_29040[(7)] = inst_29000__$1);

return statearr_29040;
})();
if(cljs.core.truth_(inst_29000__$1)){
var statearr_29041_29065 = state_29036__$1;
(statearr_29041_29065[(1)] = (5));

} else {
var statearr_29042_29066 = state_29036__$1;
(statearr_29042_29066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (13))){
var state_29036__$1 = state_29036;
var statearr_29043_29067 = state_29036__$1;
(statearr_29043_29067[(2)] = null);

(statearr_29043_29067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (6))){
var state_29036__$1 = state_29036;
var statearr_29044_29068 = state_29036__$1;
(statearr_29044_29068[(2)] = null);

(statearr_29044_29068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (3))){
var inst_29034 = (state_29036[(2)]);
var state_29036__$1 = state_29036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29036__$1,inst_29034);
} else {
if((state_val_29037 === (12))){
var inst_29007 = (state_29036[(8)]);
var inst_29020 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29007);
var inst_29021 = cljs.core.first.call(null,inst_29020);
var inst_29022 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29021);
var inst_29023 = console.warn("Figwheel: Not loading code with warnings - ",inst_29022);
var state_29036__$1 = state_29036;
var statearr_29045_29069 = state_29036__$1;
(statearr_29045_29069[(2)] = inst_29023);

(statearr_29045_29069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (2))){
var state_29036__$1 = state_29036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29036__$1,(4),ch);
} else {
if((state_val_29037 === (11))){
var inst_29016 = (state_29036[(2)]);
var state_29036__$1 = state_29036;
var statearr_29046_29070 = state_29036__$1;
(statearr_29046_29070[(2)] = inst_29016);

(statearr_29046_29070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (9))){
var inst_29006 = (state_29036[(9)]);
var inst_29018 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29006,opts);
var state_29036__$1 = state_29036;
if(inst_29018){
var statearr_29047_29071 = state_29036__$1;
(statearr_29047_29071[(1)] = (12));

} else {
var statearr_29048_29072 = state_29036__$1;
(statearr_29048_29072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (5))){
var inst_29000 = (state_29036[(7)]);
var inst_29006 = (state_29036[(9)]);
var inst_29002 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29003 = (new cljs.core.PersistentArrayMap(null,2,inst_29002,null));
var inst_29004 = (new cljs.core.PersistentHashSet(null,inst_29003,null));
var inst_29005 = figwheel.client.focus_msgs.call(null,inst_29004,inst_29000);
var inst_29006__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29005);
var inst_29007 = cljs.core.first.call(null,inst_29005);
var inst_29008 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29006__$1,opts);
var state_29036__$1 = (function (){var statearr_29049 = state_29036;
(statearr_29049[(8)] = inst_29007);

(statearr_29049[(9)] = inst_29006__$1);

return statearr_29049;
})();
if(cljs.core.truth_(inst_29008)){
var statearr_29050_29073 = state_29036__$1;
(statearr_29050_29073[(1)] = (8));

} else {
var statearr_29051_29074 = state_29036__$1;
(statearr_29051_29074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (14))){
var inst_29026 = (state_29036[(2)]);
var state_29036__$1 = state_29036;
var statearr_29052_29075 = state_29036__$1;
(statearr_29052_29075[(2)] = inst_29026);

(statearr_29052_29075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (10))){
var inst_29028 = (state_29036[(2)]);
var state_29036__$1 = (function (){var statearr_29053 = state_29036;
(statearr_29053[(10)] = inst_29028);

return statearr_29053;
})();
var statearr_29054_29076 = state_29036__$1;
(statearr_29054_29076[(2)] = null);

(statearr_29054_29076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29037 === (8))){
var inst_29007 = (state_29036[(8)]);
var inst_29010 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29011 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29007);
var inst_29012 = cljs.core.async.timeout.call(null,(1000));
var inst_29013 = [inst_29011,inst_29012];
var inst_29014 = (new cljs.core.PersistentVector(null,2,(5),inst_29010,inst_29013,null));
var state_29036__$1 = state_29036;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29036__$1,(11),inst_29014);
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
});})(c__18620__auto___29062,ch))
;
return ((function (switch__18564__auto__,c__18620__auto___29062,ch){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_29058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29058[(0)] = state_machine__18565__auto__);

(statearr_29058[(1)] = (1));

return statearr_29058;
});
var state_machine__18565__auto____1 = (function (state_29036){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_29036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e29059){if((e29059 instanceof Object)){
var ex__18568__auto__ = e29059;
var statearr_29060_29077 = state_29036;
(statearr_29060_29077[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29078 = state_29036;
state_29036 = G__29078;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_29036){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_29036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___29062,ch))
})();
var state__18622__auto__ = (function (){var statearr_29061 = f__18621__auto__.call(null);
(statearr_29061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___29062);

return statearr_29061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___29062,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29079_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29079_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29088 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29081_SHARP_,p2__29080_SHARP_){
return [cljs.core.str(p2__29080_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29088){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29086 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29087 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29086,_STAR_print_newline_STAR_29087,base_path_29088){
return (function() { 
var G__29089__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29090__i = 0, G__29090__a = new Array(arguments.length -  0);
while (G__29090__i < G__29090__a.length) {G__29090__a[G__29090__i] = arguments[G__29090__i + 0]; ++G__29090__i;}
  args = new cljs.core.IndexedSeq(G__29090__a,0);
} 
return G__29089__delegate.call(this,args);};
G__29089.cljs$lang$maxFixedArity = 0;
G__29089.cljs$lang$applyTo = (function (arglist__29091){
var args = cljs.core.seq(arglist__29091);
return G__29089__delegate(args);
});
G__29089.cljs$core$IFn$_invoke$arity$variadic = G__29089__delegate;
return G__29089;
})()
;})(_STAR_print_fn_STAR_29086,_STAR_print_newline_STAR_29087,base_path_29088))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29087;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29086;
}}catch (e29085){if((e29085 instanceof Error)){
var e = e29085;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29088], null));
} else {
var e = e29085;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29088))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__29092){
var map__29097 = p__29092;
var map__29097__$1 = ((cljs.core.seq_QMARK_.call(null,map__29097))?cljs.core.apply.call(null,cljs.core.hash_map,map__29097):map__29097);
var opts = map__29097__$1;
var build_id = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29097,map__29097__$1,opts,build_id){
return (function (p__29098){
var vec__29099 = p__29098;
var map__29100 = cljs.core.nth.call(null,vec__29099,(0),null);
var map__29100__$1 = ((cljs.core.seq_QMARK_.call(null,map__29100))?cljs.core.apply.call(null,cljs.core.hash_map,map__29100):map__29100);
var msg = map__29100__$1;
var msg_name = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29099,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29099,map__29100,map__29100__$1,msg,msg_name,_,map__29097,map__29097__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29099,map__29100,map__29100__$1,msg,msg_name,_,map__29097,map__29097__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29097,map__29097__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__29104){
var vec__29105 = p__29104;
var map__29106 = cljs.core.nth.call(null,vec__29105,(0),null);
var map__29106__$1 = ((cljs.core.seq_QMARK_.call(null,map__29106))?cljs.core.apply.call(null,cljs.core.hash_map,map__29106):map__29106);
var msg = map__29106__$1;
var msg_name = cljs.core.get.call(null,map__29106__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29105,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__29107){
var map__29115 = p__29107;
var map__29115__$1 = ((cljs.core.seq_QMARK_.call(null,map__29115))?cljs.core.apply.call(null,cljs.core.hash_map,map__29115):map__29115);
var on_compile_fail = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__29115,map__29115__$1,on_compile_fail,on_compile_warning){
return (function (p__29116){
var vec__29117 = p__29116;
var map__29118 = cljs.core.nth.call(null,vec__29117,(0),null);
var map__29118__$1 = ((cljs.core.seq_QMARK_.call(null,map__29118))?cljs.core.apply.call(null,cljs.core.hash_map,map__29118):map__29118);
var msg = map__29118__$1;
var msg_name = cljs.core.get.call(null,map__29118__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29117,(1));
var pred__29119 = cljs.core._EQ_;
var expr__29120 = msg_name;
if(cljs.core.truth_(pred__29119.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29120))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29119.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29120))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29115,map__29115__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__,msg_hist,msg_names,msg){
return (function (state_29317){
var state_val_29318 = (state_29317[(1)]);
if((state_val_29318 === (7))){
var inst_29253 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29319_29360 = state_29317__$1;
(statearr_29319_29360[(2)] = inst_29253);

(statearr_29319_29360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (20))){
var inst_29279 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29317__$1 = state_29317;
if(inst_29279){
var statearr_29320_29361 = state_29317__$1;
(statearr_29320_29361[(1)] = (22));

} else {
var statearr_29321_29362 = state_29317__$1;
(statearr_29321_29362[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (27))){
var inst_29291 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29292 = figwheel.client.heads_up.display_warning.call(null,inst_29291);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(30),inst_29292);
} else {
if((state_val_29318 === (1))){
var inst_29241 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29317__$1 = state_29317;
if(cljs.core.truth_(inst_29241)){
var statearr_29322_29363 = state_29317__$1;
(statearr_29322_29363[(1)] = (2));

} else {
var statearr_29323_29364 = state_29317__$1;
(statearr_29323_29364[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (24))){
var inst_29307 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29324_29365 = state_29317__$1;
(statearr_29324_29365[(2)] = inst_29307);

(statearr_29324_29365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (4))){
var inst_29315 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29317__$1,inst_29315);
} else {
if((state_val_29318 === (15))){
var inst_29268 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29269 = figwheel.client.format_messages.call(null,inst_29268);
var inst_29270 = figwheel.client.heads_up.display_error.call(null,inst_29269);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(18),inst_29270);
} else {
if((state_val_29318 === (21))){
var inst_29309 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29325_29366 = state_29317__$1;
(statearr_29325_29366[(2)] = inst_29309);

(statearr_29325_29366[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (31))){
var inst_29298 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(34),inst_29298);
} else {
if((state_val_29318 === (32))){
var state_29317__$1 = state_29317;
var statearr_29326_29367 = state_29317__$1;
(statearr_29326_29367[(2)] = null);

(statearr_29326_29367[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (33))){
var inst_29303 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29327_29368 = state_29317__$1;
(statearr_29327_29368[(2)] = inst_29303);

(statearr_29327_29368[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (13))){
var inst_29259 = (state_29317[(2)]);
var inst_29260 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29261 = figwheel.client.format_messages.call(null,inst_29260);
var inst_29262 = figwheel.client.heads_up.display_error.call(null,inst_29261);
var state_29317__$1 = (function (){var statearr_29328 = state_29317;
(statearr_29328[(7)] = inst_29259);

return statearr_29328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(14),inst_29262);
} else {
if((state_val_29318 === (22))){
var inst_29281 = figwheel.client.heads_up.clear.call(null);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(25),inst_29281);
} else {
if((state_val_29318 === (29))){
var inst_29305 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29329_29369 = state_29317__$1;
(statearr_29329_29369[(2)] = inst_29305);

(statearr_29329_29369[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (6))){
var inst_29249 = figwheel.client.heads_up.clear.call(null);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(9),inst_29249);
} else {
if((state_val_29318 === (28))){
var inst_29296 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29317__$1 = state_29317;
if(inst_29296){
var statearr_29330_29370 = state_29317__$1;
(statearr_29330_29370[(1)] = (31));

} else {
var statearr_29331_29371 = state_29317__$1;
(statearr_29331_29371[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (25))){
var inst_29283 = (state_29317[(2)]);
var inst_29284 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29285 = figwheel.client.heads_up.display_warning.call(null,inst_29284);
var state_29317__$1 = (function (){var statearr_29332 = state_29317;
(statearr_29332[(8)] = inst_29283);

return statearr_29332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(26),inst_29285);
} else {
if((state_val_29318 === (34))){
var inst_29300 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29333_29372 = state_29317__$1;
(statearr_29333_29372[(2)] = inst_29300);

(statearr_29333_29372[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (17))){
var inst_29311 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29334_29373 = state_29317__$1;
(statearr_29334_29373[(2)] = inst_29311);

(statearr_29334_29373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (3))){
var inst_29255 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29317__$1 = state_29317;
if(inst_29255){
var statearr_29335_29374 = state_29317__$1;
(statearr_29335_29374[(1)] = (10));

} else {
var statearr_29336_29375 = state_29317__$1;
(statearr_29336_29375[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (12))){
var inst_29313 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29337_29376 = state_29317__$1;
(statearr_29337_29376[(2)] = inst_29313);

(statearr_29337_29376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (2))){
var inst_29243 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29317__$1 = state_29317;
if(cljs.core.truth_(inst_29243)){
var statearr_29338_29377 = state_29317__$1;
(statearr_29338_29377[(1)] = (5));

} else {
var statearr_29339_29378 = state_29317__$1;
(statearr_29339_29378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (23))){
var inst_29289 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29317__$1 = state_29317;
if(inst_29289){
var statearr_29340_29379 = state_29317__$1;
(statearr_29340_29379[(1)] = (27));

} else {
var statearr_29341_29380 = state_29317__$1;
(statearr_29341_29380[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (19))){
var inst_29276 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29277 = figwheel.client.heads_up.append_message.call(null,inst_29276);
var state_29317__$1 = state_29317;
var statearr_29342_29381 = state_29317__$1;
(statearr_29342_29381[(2)] = inst_29277);

(statearr_29342_29381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (11))){
var inst_29266 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29317__$1 = state_29317;
if(inst_29266){
var statearr_29343_29382 = state_29317__$1;
(statearr_29343_29382[(1)] = (15));

} else {
var statearr_29344_29383 = state_29317__$1;
(statearr_29344_29383[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (9))){
var inst_29251 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29345_29384 = state_29317__$1;
(statearr_29345_29384[(2)] = inst_29251);

(statearr_29345_29384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (5))){
var inst_29245 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(8),inst_29245);
} else {
if((state_val_29318 === (14))){
var inst_29264 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29346_29385 = state_29317__$1;
(statearr_29346_29385[(2)] = inst_29264);

(statearr_29346_29385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (26))){
var inst_29287 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29347_29386 = state_29317__$1;
(statearr_29347_29386[(2)] = inst_29287);

(statearr_29347_29386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (16))){
var inst_29274 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29317__$1 = state_29317;
if(inst_29274){
var statearr_29348_29387 = state_29317__$1;
(statearr_29348_29387[(1)] = (19));

} else {
var statearr_29349_29388 = state_29317__$1;
(statearr_29349_29388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (30))){
var inst_29294 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29350_29389 = state_29317__$1;
(statearr_29350_29389[(2)] = inst_29294);

(statearr_29350_29389[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (10))){
var inst_29257 = figwheel.client.heads_up.clear.call(null);
var state_29317__$1 = state_29317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29317__$1,(13),inst_29257);
} else {
if((state_val_29318 === (18))){
var inst_29272 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29351_29390 = state_29317__$1;
(statearr_29351_29390[(2)] = inst_29272);

(statearr_29351_29390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29318 === (8))){
var inst_29247 = (state_29317[(2)]);
var state_29317__$1 = state_29317;
var statearr_29352_29391 = state_29317__$1;
(statearr_29352_29391[(2)] = inst_29247);

(statearr_29352_29391[(1)] = (7));


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
});})(c__18620__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18564__auto__,c__18620__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_29356 = [null,null,null,null,null,null,null,null,null];
(statearr_29356[(0)] = state_machine__18565__auto__);

(statearr_29356[(1)] = (1));

return statearr_29356;
});
var state_machine__18565__auto____1 = (function (state_29317){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_29317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e29357){if((e29357 instanceof Object)){
var ex__18568__auto__ = e29357;
var statearr_29358_29392 = state_29317;
(statearr_29358_29392[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29393 = state_29317;
state_29317 = G__29393;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_29317){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_29317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__,msg_hist,msg_names,msg))
})();
var state__18622__auto__ = (function (){var statearr_29359 = f__18621__auto__.call(null);
(statearr_29359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__,msg_hist,msg_names,msg))
);

return c__18620__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18620__auto___29456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___29456,ch){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___29456,ch){
return (function (state_29439){
var state_val_29440 = (state_29439[(1)]);
if((state_val_29440 === (8))){
var inst_29431 = (state_29439[(2)]);
var state_29439__$1 = (function (){var statearr_29441 = state_29439;
(statearr_29441[(7)] = inst_29431);

return statearr_29441;
})();
var statearr_29442_29457 = state_29439__$1;
(statearr_29442_29457[(2)] = null);

(statearr_29442_29457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (7))){
var inst_29435 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29443_29458 = state_29439__$1;
(statearr_29443_29458[(2)] = inst_29435);

(statearr_29443_29458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (6))){
var state_29439__$1 = state_29439;
var statearr_29444_29459 = state_29439__$1;
(statearr_29444_29459[(2)] = null);

(statearr_29444_29459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (5))){
var inst_29427 = (state_29439[(8)]);
var inst_29429 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29427);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(8),inst_29429);
} else {
if((state_val_29440 === (4))){
var inst_29427 = (state_29439[(8)]);
var inst_29427__$1 = (state_29439[(2)]);
var state_29439__$1 = (function (){var statearr_29445 = state_29439;
(statearr_29445[(8)] = inst_29427__$1);

return statearr_29445;
})();
if(cljs.core.truth_(inst_29427__$1)){
var statearr_29446_29460 = state_29439__$1;
(statearr_29446_29460[(1)] = (5));

} else {
var statearr_29447_29461 = state_29439__$1;
(statearr_29447_29461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (3))){
var inst_29437 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29439__$1,inst_29437);
} else {
if((state_val_29440 === (2))){
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(4),ch);
} else {
if((state_val_29440 === (1))){
var state_29439__$1 = state_29439;
var statearr_29448_29462 = state_29439__$1;
(statearr_29448_29462[(2)] = null);

(statearr_29448_29462[(1)] = (2));


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
});})(c__18620__auto___29456,ch))
;
return ((function (switch__18564__auto__,c__18620__auto___29456,ch){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_29452 = [null,null,null,null,null,null,null,null,null];
(statearr_29452[(0)] = state_machine__18565__auto__);

(statearr_29452[(1)] = (1));

return statearr_29452;
});
var state_machine__18565__auto____1 = (function (state_29439){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_29439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e29453){if((e29453 instanceof Object)){
var ex__18568__auto__ = e29453;
var statearr_29454_29463 = state_29439;
(statearr_29454_29463[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29464 = state_29439;
state_29439 = G__29464;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_29439){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_29439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___29456,ch))
})();
var state__18622__auto__ = (function (){var statearr_29455 = f__18621__auto__.call(null);
(statearr_29455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___29456);

return statearr_29455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___29456,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__){
return (function (state_29485){
var state_val_29486 = (state_29485[(1)]);
if((state_val_29486 === (2))){
var inst_29482 = (state_29485[(2)]);
var inst_29483 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29485__$1 = (function (){var statearr_29487 = state_29485;
(statearr_29487[(7)] = inst_29482);

return statearr_29487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29485__$1,inst_29483);
} else {
if((state_val_29486 === (1))){
var inst_29480 = cljs.core.async.timeout.call(null,(3000));
var state_29485__$1 = state_29485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29485__$1,(2),inst_29480);
} else {
return null;
}
}
});})(c__18620__auto__))
;
return ((function (switch__18564__auto__,c__18620__auto__){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_29491 = [null,null,null,null,null,null,null,null];
(statearr_29491[(0)] = state_machine__18565__auto__);

(statearr_29491[(1)] = (1));

return statearr_29491;
});
var state_machine__18565__auto____1 = (function (state_29485){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_29485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e29492){if((e29492 instanceof Object)){
var ex__18568__auto__ = e29492;
var statearr_29493_29495 = state_29485;
(statearr_29493_29495[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29496 = state_29485;
state_29485 = G__29496;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_29485){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_29485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__))
})();
var state__18622__auto__ = (function (){var statearr_29494 = f__18621__auto__.call(null);
(statearr_29494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_29494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__))
);

return c__18620__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__16133__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16133__auto__)){
return ("CustomEvent" in window);
} else {
return and__16133__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj29500 = {"detail":url};
return obj29500;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__29501){
var map__29507 = p__29501;
var map__29507__$1 = ((cljs.core.seq_QMARK_.call(null,map__29507))?cljs.core.apply.call(null,cljs.core.hash_map,map__29507):map__29507);
var ed = map__29507__$1;
var exception_data = cljs.core.get.call(null,map__29507__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__29507__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29508_29512 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29509_29513 = null;
var count__29510_29514 = (0);
var i__29511_29515 = (0);
while(true){
if((i__29511_29515 < count__29510_29514)){
var msg_29516 = cljs.core._nth.call(null,chunk__29509_29513,i__29511_29515);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29516);

var G__29517 = seq__29508_29512;
var G__29518 = chunk__29509_29513;
var G__29519 = count__29510_29514;
var G__29520 = (i__29511_29515 + (1));
seq__29508_29512 = G__29517;
chunk__29509_29513 = G__29518;
count__29510_29514 = G__29519;
i__29511_29515 = G__29520;
continue;
} else {
var temp__4126__auto___29521 = cljs.core.seq.call(null,seq__29508_29512);
if(temp__4126__auto___29521){
var seq__29508_29522__$1 = temp__4126__auto___29521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29508_29522__$1)){
var c__16932__auto___29523 = cljs.core.chunk_first.call(null,seq__29508_29522__$1);
var G__29524 = cljs.core.chunk_rest.call(null,seq__29508_29522__$1);
var G__29525 = c__16932__auto___29523;
var G__29526 = cljs.core.count.call(null,c__16932__auto___29523);
var G__29527 = (0);
seq__29508_29512 = G__29524;
chunk__29509_29513 = G__29525;
count__29510_29514 = G__29526;
i__29511_29515 = G__29527;
continue;
} else {
var msg_29528 = cljs.core.first.call(null,seq__29508_29522__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29528);

var G__29529 = cljs.core.next.call(null,seq__29508_29522__$1);
var G__29530 = null;
var G__29531 = (0);
var G__29532 = (0);
seq__29508_29512 = G__29529;
chunk__29509_29513 = G__29530;
count__29510_29514 = G__29531;
i__29511_29515 = G__29532;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__29533){
var map__29535 = p__29533;
var map__29535__$1 = ((cljs.core.seq_QMARK_.call(null,map__29535))?cljs.core.apply.call(null,cljs.core.hash_map,map__29535):map__29535);
var w = map__29535__$1;
var message = cljs.core.get.call(null,map__29535__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16133__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16133__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16133__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__29542 = cljs.core.seq.call(null,plugins);
var chunk__29543 = null;
var count__29544 = (0);
var i__29545 = (0);
while(true){
if((i__29545 < count__29544)){
var vec__29546 = cljs.core._nth.call(null,chunk__29543,i__29545);
var k = cljs.core.nth.call(null,vec__29546,(0),null);
var plugin = cljs.core.nth.call(null,vec__29546,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29548 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29542,chunk__29543,count__29544,i__29545,pl_29548,vec__29546,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29548.call(null,msg_hist);
});})(seq__29542,chunk__29543,count__29544,i__29545,pl_29548,vec__29546,k,plugin))
);
} else {
}

var G__29549 = seq__29542;
var G__29550 = chunk__29543;
var G__29551 = count__29544;
var G__29552 = (i__29545 + (1));
seq__29542 = G__29549;
chunk__29543 = G__29550;
count__29544 = G__29551;
i__29545 = G__29552;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29542);
if(temp__4126__auto__){
var seq__29542__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29542__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__29542__$1);
var G__29553 = cljs.core.chunk_rest.call(null,seq__29542__$1);
var G__29554 = c__16932__auto__;
var G__29555 = cljs.core.count.call(null,c__16932__auto__);
var G__29556 = (0);
seq__29542 = G__29553;
chunk__29543 = G__29554;
count__29544 = G__29555;
i__29545 = G__29556;
continue;
} else {
var vec__29547 = cljs.core.first.call(null,seq__29542__$1);
var k = cljs.core.nth.call(null,vec__29547,(0),null);
var plugin = cljs.core.nth.call(null,vec__29547,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29557 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29542,chunk__29543,count__29544,i__29545,pl_29557,vec__29547,k,plugin,seq__29542__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29557.call(null,msg_hist);
});})(seq__29542,chunk__29543,count__29544,i__29545,pl_29557,vec__29547,k,plugin,seq__29542__$1,temp__4126__auto__))
);
} else {
}

var G__29558 = cljs.core.next.call(null,seq__29542__$1);
var G__29559 = null;
var G__29560 = (0);
var G__29561 = (0);
seq__29542 = G__29558;
chunk__29543 = G__29559;
count__29544 = G__29560;
i__29545 = G__29561;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__29562){
var map__29564 = p__29562;
var map__29564__$1 = ((cljs.core.seq_QMARK_.call(null,map__29564))?cljs.core.apply.call(null,cljs.core.hash_map,map__29564):map__29564);
var opts = map__29564__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__29562 = null;
if (arguments.length > 0) {
var G__29565__i = 0, G__29565__a = new Array(arguments.length -  0);
while (G__29565__i < G__29565__a.length) {G__29565__a[G__29565__i] = arguments[G__29565__i + 0]; ++G__29565__i;}
  p__29562 = new cljs.core.IndexedSeq(G__29565__a,0);
} 
return watch_and_reload__delegate.call(this,p__29562);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__29566){
var p__29562 = cljs.core.seq(arglist__29566);
return watch_and_reload__delegate(p__29562);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1427852716247