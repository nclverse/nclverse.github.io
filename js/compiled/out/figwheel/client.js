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
var G__28933__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28934__i = 0, G__28934__a = new Array(arguments.length -  0);
while (G__28934__i < G__28934__a.length) {G__28934__a[G__28934__i] = arguments[G__28934__i + 0]; ++G__28934__i;}
  args = new cljs.core.IndexedSeq(G__28934__a,0);
} 
return G__28933__delegate.call(this,args);};
G__28933.cljs$lang$maxFixedArity = 0;
G__28933.cljs$lang$applyTo = (function (arglist__28935){
var args = cljs.core.seq(arglist__28935);
return G__28933__delegate(args);
});
G__28933.cljs$core$IFn$_invoke$arity$variadic = G__28933__delegate;
return G__28933;
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
figwheel.client.error_msg_format = (function error_msg_format(p__28936){
var map__28938 = p__28936;
var map__28938__$1 = ((cljs.core.seq_QMARK_.call(null,map__28938))?cljs.core.apply.call(null,cljs.core.hash_map,map__28938):map__28938);
var class$ = cljs.core.get.call(null,map__28938__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28938__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__18619__auto___29067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___29067,ch){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___29067,ch){
return (function (state_29041){
var state_val_29042 = (state_29041[(1)]);
if((state_val_29042 === (7))){
var inst_29037 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29043_29068 = state_29041__$1;
(statearr_29043_29068[(2)] = inst_29037);

(statearr_29043_29068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (1))){
var state_29041__$1 = state_29041;
var statearr_29044_29069 = state_29041__$1;
(statearr_29044_29069[(2)] = null);

(statearr_29044_29069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (4))){
var inst_29005 = (state_29041[(7)]);
var inst_29005__$1 = (state_29041[(2)]);
var state_29041__$1 = (function (){var statearr_29045 = state_29041;
(statearr_29045[(7)] = inst_29005__$1);

return statearr_29045;
})();
if(cljs.core.truth_(inst_29005__$1)){
var statearr_29046_29070 = state_29041__$1;
(statearr_29046_29070[(1)] = (5));

} else {
var statearr_29047_29071 = state_29041__$1;
(statearr_29047_29071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (13))){
var state_29041__$1 = state_29041;
var statearr_29048_29072 = state_29041__$1;
(statearr_29048_29072[(2)] = null);

(statearr_29048_29072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (6))){
var state_29041__$1 = state_29041;
var statearr_29049_29073 = state_29041__$1;
(statearr_29049_29073[(2)] = null);

(statearr_29049_29073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (3))){
var inst_29039 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29041__$1,inst_29039);
} else {
if((state_val_29042 === (12))){
var inst_29012 = (state_29041[(8)]);
var inst_29025 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29012);
var inst_29026 = cljs.core.first.call(null,inst_29025);
var inst_29027 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29026);
var inst_29028 = console.warn("Figwheel: Not loading code with warnings - ",inst_29027);
var state_29041__$1 = state_29041;
var statearr_29050_29074 = state_29041__$1;
(statearr_29050_29074[(2)] = inst_29028);

(statearr_29050_29074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (2))){
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29041__$1,(4),ch);
} else {
if((state_val_29042 === (11))){
var inst_29021 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29051_29075 = state_29041__$1;
(statearr_29051_29075[(2)] = inst_29021);

(statearr_29051_29075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (9))){
var inst_29011 = (state_29041[(9)]);
var inst_29023 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29011,opts);
var state_29041__$1 = state_29041;
if(inst_29023){
var statearr_29052_29076 = state_29041__$1;
(statearr_29052_29076[(1)] = (12));

} else {
var statearr_29053_29077 = state_29041__$1;
(statearr_29053_29077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (5))){
var inst_29005 = (state_29041[(7)]);
var inst_29011 = (state_29041[(9)]);
var inst_29007 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29008 = (new cljs.core.PersistentArrayMap(null,2,inst_29007,null));
var inst_29009 = (new cljs.core.PersistentHashSet(null,inst_29008,null));
var inst_29010 = figwheel.client.focus_msgs.call(null,inst_29009,inst_29005);
var inst_29011__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29010);
var inst_29012 = cljs.core.first.call(null,inst_29010);
var inst_29013 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29011__$1,opts);
var state_29041__$1 = (function (){var statearr_29054 = state_29041;
(statearr_29054[(9)] = inst_29011__$1);

(statearr_29054[(8)] = inst_29012);

return statearr_29054;
})();
if(cljs.core.truth_(inst_29013)){
var statearr_29055_29078 = state_29041__$1;
(statearr_29055_29078[(1)] = (8));

} else {
var statearr_29056_29079 = state_29041__$1;
(statearr_29056_29079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (14))){
var inst_29031 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29057_29080 = state_29041__$1;
(statearr_29057_29080[(2)] = inst_29031);

(statearr_29057_29080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (10))){
var inst_29033 = (state_29041[(2)]);
var state_29041__$1 = (function (){var statearr_29058 = state_29041;
(statearr_29058[(10)] = inst_29033);

return statearr_29058;
})();
var statearr_29059_29081 = state_29041__$1;
(statearr_29059_29081[(2)] = null);

(statearr_29059_29081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (8))){
var inst_29012 = (state_29041[(8)]);
var inst_29015 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29016 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29012);
var inst_29017 = cljs.core.async.timeout.call(null,(1000));
var inst_29018 = [inst_29016,inst_29017];
var inst_29019 = (new cljs.core.PersistentVector(null,2,(5),inst_29015,inst_29018,null));
var state_29041__$1 = state_29041;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29041__$1,(11),inst_29019);
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
});})(c__18619__auto___29067,ch))
;
return ((function (switch__18563__auto__,c__18619__auto___29067,ch){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_29063 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29063[(0)] = state_machine__18564__auto__);

(statearr_29063[(1)] = (1));

return statearr_29063;
});
var state_machine__18564__auto____1 = (function (state_29041){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_29041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e29064){if((e29064 instanceof Object)){
var ex__18567__auto__ = e29064;
var statearr_29065_29082 = state_29041;
(statearr_29065_29082[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29083 = state_29041;
state_29041 = G__29083;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_29041){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_29041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___29067,ch))
})();
var state__18621__auto__ = (function (){var statearr_29066 = f__18620__auto__.call(null);
(statearr_29066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___29067);

return statearr_29066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___29067,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29084_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29084_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29093 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29086_SHARP_,p2__29085_SHARP_){
return [cljs.core.str(p2__29085_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29093){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29091 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29092 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29091,_STAR_print_newline_STAR_29092,base_path_29093){
return (function() { 
var G__29094__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29095__i = 0, G__29095__a = new Array(arguments.length -  0);
while (G__29095__i < G__29095__a.length) {G__29095__a[G__29095__i] = arguments[G__29095__i + 0]; ++G__29095__i;}
  args = new cljs.core.IndexedSeq(G__29095__a,0);
} 
return G__29094__delegate.call(this,args);};
G__29094.cljs$lang$maxFixedArity = 0;
G__29094.cljs$lang$applyTo = (function (arglist__29096){
var args = cljs.core.seq(arglist__29096);
return G__29094__delegate(args);
});
G__29094.cljs$core$IFn$_invoke$arity$variadic = G__29094__delegate;
return G__29094;
})()
;})(_STAR_print_fn_STAR_29091,_STAR_print_newline_STAR_29092,base_path_29093))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29092;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29091;
}}catch (e29090){if((e29090 instanceof Error)){
var e = e29090;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29093], null));
} else {
var e = e29090;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29093))
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
figwheel.client.repl_plugin = (function repl_plugin(p__29097){
var map__29102 = p__29097;
var map__29102__$1 = ((cljs.core.seq_QMARK_.call(null,map__29102))?cljs.core.apply.call(null,cljs.core.hash_map,map__29102):map__29102);
var opts = map__29102__$1;
var build_id = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29102,map__29102__$1,opts,build_id){
return (function (p__29103){
var vec__29104 = p__29103;
var map__29105 = cljs.core.nth.call(null,vec__29104,(0),null);
var map__29105__$1 = ((cljs.core.seq_QMARK_.call(null,map__29105))?cljs.core.apply.call(null,cljs.core.hash_map,map__29105):map__29105);
var msg = map__29105__$1;
var msg_name = cljs.core.get.call(null,map__29105__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29104,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29104,map__29105,map__29105__$1,msg,msg_name,_,map__29102,map__29102__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29104,map__29105,map__29105__$1,msg,msg_name,_,map__29102,map__29102__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29102,map__29102__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__29109){
var vec__29110 = p__29109;
var map__29111 = cljs.core.nth.call(null,vec__29110,(0),null);
var map__29111__$1 = ((cljs.core.seq_QMARK_.call(null,map__29111))?cljs.core.apply.call(null,cljs.core.hash_map,map__29111):map__29111);
var msg = map__29111__$1;
var msg_name = cljs.core.get.call(null,map__29111__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29110,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__29112){
var map__29120 = p__29112;
var map__29120__$1 = ((cljs.core.seq_QMARK_.call(null,map__29120))?cljs.core.apply.call(null,cljs.core.hash_map,map__29120):map__29120);
var on_compile_fail = cljs.core.get.call(null,map__29120__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__29120__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__29120,map__29120__$1,on_compile_fail,on_compile_warning){
return (function (p__29121){
var vec__29122 = p__29121;
var map__29123 = cljs.core.nth.call(null,vec__29122,(0),null);
var map__29123__$1 = ((cljs.core.seq_QMARK_.call(null,map__29123))?cljs.core.apply.call(null,cljs.core.hash_map,map__29123):map__29123);
var msg = map__29123__$1;
var msg_name = cljs.core.get.call(null,map__29123__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29122,(1));
var pred__29124 = cljs.core._EQ_;
var expr__29125 = msg_name;
if(cljs.core.truth_(pred__29124.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29125))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29124.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29125))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29120,map__29120__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto__,msg_hist,msg_names,msg){
return (function (state_29322){
var state_val_29323 = (state_29322[(1)]);
if((state_val_29323 === (7))){
var inst_29258 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29324_29365 = state_29322__$1;
(statearr_29324_29365[(2)] = inst_29258);

(statearr_29324_29365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (20))){
var inst_29284 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29322__$1 = state_29322;
if(inst_29284){
var statearr_29325_29366 = state_29322__$1;
(statearr_29325_29366[(1)] = (22));

} else {
var statearr_29326_29367 = state_29322__$1;
(statearr_29326_29367[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (27))){
var inst_29296 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29297 = figwheel.client.heads_up.display_warning.call(null,inst_29296);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(30),inst_29297);
} else {
if((state_val_29323 === (1))){
var inst_29246 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29322__$1 = state_29322;
if(cljs.core.truth_(inst_29246)){
var statearr_29327_29368 = state_29322__$1;
(statearr_29327_29368[(1)] = (2));

} else {
var statearr_29328_29369 = state_29322__$1;
(statearr_29328_29369[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (24))){
var inst_29312 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29329_29370 = state_29322__$1;
(statearr_29329_29370[(2)] = inst_29312);

(statearr_29329_29370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (4))){
var inst_29320 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29322__$1,inst_29320);
} else {
if((state_val_29323 === (15))){
var inst_29273 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29274 = figwheel.client.format_messages.call(null,inst_29273);
var inst_29275 = figwheel.client.heads_up.display_error.call(null,inst_29274);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(18),inst_29275);
} else {
if((state_val_29323 === (21))){
var inst_29314 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29330_29371 = state_29322__$1;
(statearr_29330_29371[(2)] = inst_29314);

(statearr_29330_29371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (31))){
var inst_29303 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(34),inst_29303);
} else {
if((state_val_29323 === (32))){
var state_29322__$1 = state_29322;
var statearr_29331_29372 = state_29322__$1;
(statearr_29331_29372[(2)] = null);

(statearr_29331_29372[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (33))){
var inst_29308 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29332_29373 = state_29322__$1;
(statearr_29332_29373[(2)] = inst_29308);

(statearr_29332_29373[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (13))){
var inst_29264 = (state_29322[(2)]);
var inst_29265 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29266 = figwheel.client.format_messages.call(null,inst_29265);
var inst_29267 = figwheel.client.heads_up.display_error.call(null,inst_29266);
var state_29322__$1 = (function (){var statearr_29333 = state_29322;
(statearr_29333[(7)] = inst_29264);

return statearr_29333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(14),inst_29267);
} else {
if((state_val_29323 === (22))){
var inst_29286 = figwheel.client.heads_up.clear.call(null);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(25),inst_29286);
} else {
if((state_val_29323 === (29))){
var inst_29310 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29334_29374 = state_29322__$1;
(statearr_29334_29374[(2)] = inst_29310);

(statearr_29334_29374[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (6))){
var inst_29254 = figwheel.client.heads_up.clear.call(null);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(9),inst_29254);
} else {
if((state_val_29323 === (28))){
var inst_29301 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29322__$1 = state_29322;
if(inst_29301){
var statearr_29335_29375 = state_29322__$1;
(statearr_29335_29375[(1)] = (31));

} else {
var statearr_29336_29376 = state_29322__$1;
(statearr_29336_29376[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (25))){
var inst_29288 = (state_29322[(2)]);
var inst_29289 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29290 = figwheel.client.heads_up.display_warning.call(null,inst_29289);
var state_29322__$1 = (function (){var statearr_29337 = state_29322;
(statearr_29337[(8)] = inst_29288);

return statearr_29337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(26),inst_29290);
} else {
if((state_val_29323 === (34))){
var inst_29305 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29338_29377 = state_29322__$1;
(statearr_29338_29377[(2)] = inst_29305);

(statearr_29338_29377[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (17))){
var inst_29316 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29339_29378 = state_29322__$1;
(statearr_29339_29378[(2)] = inst_29316);

(statearr_29339_29378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (3))){
var inst_29260 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29322__$1 = state_29322;
if(inst_29260){
var statearr_29340_29379 = state_29322__$1;
(statearr_29340_29379[(1)] = (10));

} else {
var statearr_29341_29380 = state_29322__$1;
(statearr_29341_29380[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (12))){
var inst_29318 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29342_29381 = state_29322__$1;
(statearr_29342_29381[(2)] = inst_29318);

(statearr_29342_29381[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (2))){
var inst_29248 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29322__$1 = state_29322;
if(cljs.core.truth_(inst_29248)){
var statearr_29343_29382 = state_29322__$1;
(statearr_29343_29382[(1)] = (5));

} else {
var statearr_29344_29383 = state_29322__$1;
(statearr_29344_29383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (23))){
var inst_29294 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29322__$1 = state_29322;
if(inst_29294){
var statearr_29345_29384 = state_29322__$1;
(statearr_29345_29384[(1)] = (27));

} else {
var statearr_29346_29385 = state_29322__$1;
(statearr_29346_29385[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (19))){
var inst_29281 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29282 = figwheel.client.heads_up.append_message.call(null,inst_29281);
var state_29322__$1 = state_29322;
var statearr_29347_29386 = state_29322__$1;
(statearr_29347_29386[(2)] = inst_29282);

(statearr_29347_29386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (11))){
var inst_29271 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29322__$1 = state_29322;
if(inst_29271){
var statearr_29348_29387 = state_29322__$1;
(statearr_29348_29387[(1)] = (15));

} else {
var statearr_29349_29388 = state_29322__$1;
(statearr_29349_29388[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (9))){
var inst_29256 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29350_29389 = state_29322__$1;
(statearr_29350_29389[(2)] = inst_29256);

(statearr_29350_29389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (5))){
var inst_29250 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(8),inst_29250);
} else {
if((state_val_29323 === (14))){
var inst_29269 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29351_29390 = state_29322__$1;
(statearr_29351_29390[(2)] = inst_29269);

(statearr_29351_29390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (26))){
var inst_29292 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29352_29391 = state_29322__$1;
(statearr_29352_29391[(2)] = inst_29292);

(statearr_29352_29391[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (16))){
var inst_29279 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29322__$1 = state_29322;
if(inst_29279){
var statearr_29353_29392 = state_29322__$1;
(statearr_29353_29392[(1)] = (19));

} else {
var statearr_29354_29393 = state_29322__$1;
(statearr_29354_29393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (30))){
var inst_29299 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29355_29394 = state_29322__$1;
(statearr_29355_29394[(2)] = inst_29299);

(statearr_29355_29394[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (10))){
var inst_29262 = figwheel.client.heads_up.clear.call(null);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(13),inst_29262);
} else {
if((state_val_29323 === (18))){
var inst_29277 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29356_29395 = state_29322__$1;
(statearr_29356_29395[(2)] = inst_29277);

(statearr_29356_29395[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (8))){
var inst_29252 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29357_29396 = state_29322__$1;
(statearr_29357_29396[(2)] = inst_29252);

(statearr_29357_29396[(1)] = (7));


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
});})(c__18619__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18563__auto__,c__18619__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_29361 = [null,null,null,null,null,null,null,null,null];
(statearr_29361[(0)] = state_machine__18564__auto__);

(statearr_29361[(1)] = (1));

return statearr_29361;
});
var state_machine__18564__auto____1 = (function (state_29322){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_29322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e29362){if((e29362 instanceof Object)){
var ex__18567__auto__ = e29362;
var statearr_29363_29397 = state_29322;
(statearr_29363_29397[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29398 = state_29322;
state_29322 = G__29398;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_29322){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_29322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto__,msg_hist,msg_names,msg))
})();
var state__18621__auto__ = (function (){var statearr_29364 = f__18620__auto__.call(null);
(statearr_29364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto__);

return statearr_29364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto__,msg_hist,msg_names,msg))
);

return c__18619__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18619__auto___29461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___29461,ch){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___29461,ch){
return (function (state_29444){
var state_val_29445 = (state_29444[(1)]);
if((state_val_29445 === (8))){
var inst_29436 = (state_29444[(2)]);
var state_29444__$1 = (function (){var statearr_29446 = state_29444;
(statearr_29446[(7)] = inst_29436);

return statearr_29446;
})();
var statearr_29447_29462 = state_29444__$1;
(statearr_29447_29462[(2)] = null);

(statearr_29447_29462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29445 === (7))){
var inst_29440 = (state_29444[(2)]);
var state_29444__$1 = state_29444;
var statearr_29448_29463 = state_29444__$1;
(statearr_29448_29463[(2)] = inst_29440);

(statearr_29448_29463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29445 === (6))){
var state_29444__$1 = state_29444;
var statearr_29449_29464 = state_29444__$1;
(statearr_29449_29464[(2)] = null);

(statearr_29449_29464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29445 === (5))){
var inst_29432 = (state_29444[(8)]);
var inst_29434 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29432);
var state_29444__$1 = state_29444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29444__$1,(8),inst_29434);
} else {
if((state_val_29445 === (4))){
var inst_29432 = (state_29444[(8)]);
var inst_29432__$1 = (state_29444[(2)]);
var state_29444__$1 = (function (){var statearr_29450 = state_29444;
(statearr_29450[(8)] = inst_29432__$1);

return statearr_29450;
})();
if(cljs.core.truth_(inst_29432__$1)){
var statearr_29451_29465 = state_29444__$1;
(statearr_29451_29465[(1)] = (5));

} else {
var statearr_29452_29466 = state_29444__$1;
(statearr_29452_29466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29445 === (3))){
var inst_29442 = (state_29444[(2)]);
var state_29444__$1 = state_29444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29444__$1,inst_29442);
} else {
if((state_val_29445 === (2))){
var state_29444__$1 = state_29444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29444__$1,(4),ch);
} else {
if((state_val_29445 === (1))){
var state_29444__$1 = state_29444;
var statearr_29453_29467 = state_29444__$1;
(statearr_29453_29467[(2)] = null);

(statearr_29453_29467[(1)] = (2));


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
});})(c__18619__auto___29461,ch))
;
return ((function (switch__18563__auto__,c__18619__auto___29461,ch){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_29457 = [null,null,null,null,null,null,null,null,null];
(statearr_29457[(0)] = state_machine__18564__auto__);

(statearr_29457[(1)] = (1));

return statearr_29457;
});
var state_machine__18564__auto____1 = (function (state_29444){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_29444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e29458){if((e29458 instanceof Object)){
var ex__18567__auto__ = e29458;
var statearr_29459_29468 = state_29444;
(statearr_29459_29468[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29469 = state_29444;
state_29444 = G__29469;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_29444){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_29444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___29461,ch))
})();
var state__18621__auto__ = (function (){var statearr_29460 = f__18620__auto__.call(null);
(statearr_29460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___29461);

return statearr_29460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___29461,ch))
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
var c__18619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto__){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto__){
return (function (state_29490){
var state_val_29491 = (state_29490[(1)]);
if((state_val_29491 === (2))){
var inst_29487 = (state_29490[(2)]);
var inst_29488 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29490__$1 = (function (){var statearr_29492 = state_29490;
(statearr_29492[(7)] = inst_29487);

return statearr_29492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29490__$1,inst_29488);
} else {
if((state_val_29491 === (1))){
var inst_29485 = cljs.core.async.timeout.call(null,(3000));
var state_29490__$1 = state_29490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29490__$1,(2),inst_29485);
} else {
return null;
}
}
});})(c__18619__auto__))
;
return ((function (switch__18563__auto__,c__18619__auto__){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_29496 = [null,null,null,null,null,null,null,null];
(statearr_29496[(0)] = state_machine__18564__auto__);

(statearr_29496[(1)] = (1));

return statearr_29496;
});
var state_machine__18564__auto____1 = (function (state_29490){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_29490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e29497){if((e29497 instanceof Object)){
var ex__18567__auto__ = e29497;
var statearr_29498_29500 = state_29490;
(statearr_29498_29500[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29501 = state_29490;
state_29490 = G__29501;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_29490){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_29490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto__))
})();
var state__18621__auto__ = (function (){var statearr_29499 = f__18620__auto__.call(null);
(statearr_29499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto__);

return statearr_29499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto__))
);

return c__18619__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj29505 = {"detail":url};
return obj29505;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__29506){
var map__29512 = p__29506;
var map__29512__$1 = ((cljs.core.seq_QMARK_.call(null,map__29512))?cljs.core.apply.call(null,cljs.core.hash_map,map__29512):map__29512);
var ed = map__29512__$1;
var exception_data = cljs.core.get.call(null,map__29512__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__29512__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29513_29517 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29514_29518 = null;
var count__29515_29519 = (0);
var i__29516_29520 = (0);
while(true){
if((i__29516_29520 < count__29515_29519)){
var msg_29521 = cljs.core._nth.call(null,chunk__29514_29518,i__29516_29520);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29521);

var G__29522 = seq__29513_29517;
var G__29523 = chunk__29514_29518;
var G__29524 = count__29515_29519;
var G__29525 = (i__29516_29520 + (1));
seq__29513_29517 = G__29522;
chunk__29514_29518 = G__29523;
count__29515_29519 = G__29524;
i__29516_29520 = G__29525;
continue;
} else {
var temp__4126__auto___29526 = cljs.core.seq.call(null,seq__29513_29517);
if(temp__4126__auto___29526){
var seq__29513_29527__$1 = temp__4126__auto___29526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29513_29527__$1)){
var c__16932__auto___29528 = cljs.core.chunk_first.call(null,seq__29513_29527__$1);
var G__29529 = cljs.core.chunk_rest.call(null,seq__29513_29527__$1);
var G__29530 = c__16932__auto___29528;
var G__29531 = cljs.core.count.call(null,c__16932__auto___29528);
var G__29532 = (0);
seq__29513_29517 = G__29529;
chunk__29514_29518 = G__29530;
count__29515_29519 = G__29531;
i__29516_29520 = G__29532;
continue;
} else {
var msg_29533 = cljs.core.first.call(null,seq__29513_29527__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29533);

var G__29534 = cljs.core.next.call(null,seq__29513_29527__$1);
var G__29535 = null;
var G__29536 = (0);
var G__29537 = (0);
seq__29513_29517 = G__29534;
chunk__29514_29518 = G__29535;
count__29515_29519 = G__29536;
i__29516_29520 = G__29537;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__29538){
var map__29540 = p__29538;
var map__29540__$1 = ((cljs.core.seq_QMARK_.call(null,map__29540))?cljs.core.apply.call(null,cljs.core.hash_map,map__29540):map__29540);
var w = map__29540__$1;
var message = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29547 = cljs.core.seq.call(null,plugins);
var chunk__29548 = null;
var count__29549 = (0);
var i__29550 = (0);
while(true){
if((i__29550 < count__29549)){
var vec__29551 = cljs.core._nth.call(null,chunk__29548,i__29550);
var k = cljs.core.nth.call(null,vec__29551,(0),null);
var plugin = cljs.core.nth.call(null,vec__29551,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29553 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29547,chunk__29548,count__29549,i__29550,pl_29553,vec__29551,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29553.call(null,msg_hist);
});})(seq__29547,chunk__29548,count__29549,i__29550,pl_29553,vec__29551,k,plugin))
);
} else {
}

var G__29554 = seq__29547;
var G__29555 = chunk__29548;
var G__29556 = count__29549;
var G__29557 = (i__29550 + (1));
seq__29547 = G__29554;
chunk__29548 = G__29555;
count__29549 = G__29556;
i__29550 = G__29557;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29547);
if(temp__4126__auto__){
var seq__29547__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29547__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__29547__$1);
var G__29558 = cljs.core.chunk_rest.call(null,seq__29547__$1);
var G__29559 = c__16932__auto__;
var G__29560 = cljs.core.count.call(null,c__16932__auto__);
var G__29561 = (0);
seq__29547 = G__29558;
chunk__29548 = G__29559;
count__29549 = G__29560;
i__29550 = G__29561;
continue;
} else {
var vec__29552 = cljs.core.first.call(null,seq__29547__$1);
var k = cljs.core.nth.call(null,vec__29552,(0),null);
var plugin = cljs.core.nth.call(null,vec__29552,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29562 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29547,chunk__29548,count__29549,i__29550,pl_29562,vec__29552,k,plugin,seq__29547__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29562.call(null,msg_hist);
});})(seq__29547,chunk__29548,count__29549,i__29550,pl_29562,vec__29552,k,plugin,seq__29547__$1,temp__4126__auto__))
);
} else {
}

var G__29563 = cljs.core.next.call(null,seq__29547__$1);
var G__29564 = null;
var G__29565 = (0);
var G__29566 = (0);
seq__29547 = G__29563;
chunk__29548 = G__29564;
count__29549 = G__29565;
i__29550 = G__29566;
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
var watch_and_reload__delegate = function (p__29567){
var map__29569 = p__29567;
var map__29569__$1 = ((cljs.core.seq_QMARK_.call(null,map__29569))?cljs.core.apply.call(null,cljs.core.hash_map,map__29569):map__29569);
var opts = map__29569__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__29567 = null;
if (arguments.length > 0) {
var G__29570__i = 0, G__29570__a = new Array(arguments.length -  0);
while (G__29570__i < G__29570__a.length) {G__29570__a[G__29570__i] = arguments[G__29570__i + 0]; ++G__29570__i;}
  p__29567 = new cljs.core.IndexedSeq(G__29570__a,0);
} 
return watch_and_reload__delegate.call(this,p__29567);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__29571){
var p__29567 = cljs.core.seq(arglist__29571);
return watch_and_reload__delegate(p__29567);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1429167305039