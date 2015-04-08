// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29994_SHARP_,p2__29995_SHARP_){
var and__16133__auto__ = p1__29994_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__29995_SHARP_;
} else {
return and__16133__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__16145__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16145__auto__){
return or__16145__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29997_SHARP_,p2__29996_SHARP_){
return [cljs.core.str(p2__29996_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16145__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16145__auto__){
return or__16145__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16145__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29998){
var map__29999 = p__29998;
var map__29999__$1 = ((cljs.core.seq_QMARK_.call(null,map__29999))?cljs.core.apply.call(null,cljs.core.hash_map,map__29999):map__29999);
var file = cljs.core.get.call(null,map__29999__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30000){
var map__30001 = p__30000;
var map__30001__$1 = ((cljs.core.seq_QMARK_.call(null,map__30001))?cljs.core.apply.call(null,cljs.core.hash_map,map__30001):map__30001);
var namespace = cljs.core.get.call(null,map__30001__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e30002){if((e30002 instanceof Error)){
var e = e30002;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30002;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__30003,callback){
var map__30005 = p__30003;
var map__30005__$1 = ((cljs.core.seq_QMARK_.call(null,map__30005))?cljs.core.apply.call(null,cljs.core.hash_map,map__30005):map__30005);
var file_msg = map__30005__$1;
var request_url = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30005,map__30005__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30005,map__30005__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__30006){
var map__30008 = p__30006;
var map__30008__$1 = ((cljs.core.seq_QMARK_.call(null,map__30008))?cljs.core.apply.call(null,cljs.core.hash_map,map__30008):map__30008);
var file_msg = map__30008__$1;
var meta_data = cljs.core.get.call(null,map__30008__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__30008__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__16145__auto__ = meta_data;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16133__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16133__auto__){
var or__16145__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16145__auto____$1)){
return or__16145__auto____$1;
} else {
var and__16133__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16133__auto____$1){
var or__16145__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16145__auto____$2){
return or__16145__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16133__auto____$1;
}
}
}
} else {
return and__16133__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__30009,callback){
var map__30011 = p__30009;
var map__30011__$1 = ((cljs.core.seq_QMARK_.call(null,map__30011))?cljs.core.apply.call(null,cljs.core.hash_map,map__30011):map__30011);
var file_msg = map__30011__$1;
var namespace = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18620__auto___30098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto___30098,out){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto___30098,out){
return (function (state_30080){
var state_val_30081 = (state_30080[(1)]);
if((state_val_30081 === (7))){
var inst_30064 = (state_30080[(7)]);
var inst_30070 = (state_30080[(2)]);
var inst_30071 = cljs.core.async.put_BANG_.call(null,out,inst_30070);
var inst_30060 = inst_30064;
var state_30080__$1 = (function (){var statearr_30082 = state_30080;
(statearr_30082[(8)] = inst_30060);

(statearr_30082[(9)] = inst_30071);

return statearr_30082;
})();
var statearr_30083_30099 = state_30080__$1;
(statearr_30083_30099[(2)] = null);

(statearr_30083_30099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (6))){
var inst_30076 = (state_30080[(2)]);
var state_30080__$1 = state_30080;
var statearr_30084_30100 = state_30080__$1;
(statearr_30084_30100[(2)] = inst_30076);

(statearr_30084_30100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (5))){
var inst_30074 = cljs.core.async.close_BANG_.call(null,out);
var state_30080__$1 = state_30080;
var statearr_30085_30101 = state_30080__$1;
(statearr_30085_30101[(2)] = inst_30074);

(statearr_30085_30101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (4))){
var inst_30063 = (state_30080[(10)]);
var inst_30068 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30063);
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30080__$1,(7),inst_30068);
} else {
if((state_val_30081 === (3))){
var inst_30078 = (state_30080[(2)]);
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30080__$1,inst_30078);
} else {
if((state_val_30081 === (2))){
var inst_30063 = (state_30080[(10)]);
var inst_30060 = (state_30080[(8)]);
var inst_30063__$1 = cljs.core.nth.call(null,inst_30060,(0),null);
var inst_30064 = cljs.core.nthnext.call(null,inst_30060,(1));
var inst_30065 = (inst_30063__$1 == null);
var inst_30066 = cljs.core.not.call(null,inst_30065);
var state_30080__$1 = (function (){var statearr_30086 = state_30080;
(statearr_30086[(10)] = inst_30063__$1);

(statearr_30086[(7)] = inst_30064);

return statearr_30086;
})();
if(inst_30066){
var statearr_30087_30102 = state_30080__$1;
(statearr_30087_30102[(1)] = (4));

} else {
var statearr_30088_30103 = state_30080__$1;
(statearr_30088_30103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (1))){
var inst_30058 = cljs.core.nth.call(null,files,(0),null);
var inst_30059 = cljs.core.nthnext.call(null,files,(1));
var inst_30060 = files;
var state_30080__$1 = (function (){var statearr_30089 = state_30080;
(statearr_30089[(8)] = inst_30060);

(statearr_30089[(11)] = inst_30058);

(statearr_30089[(12)] = inst_30059);

return statearr_30089;
})();
var statearr_30090_30104 = state_30080__$1;
(statearr_30090_30104[(2)] = null);

(statearr_30090_30104[(1)] = (2));


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
});})(c__18620__auto___30098,out))
;
return ((function (switch__18564__auto__,c__18620__auto___30098,out){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_30094 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30094[(0)] = state_machine__18565__auto__);

(statearr_30094[(1)] = (1));

return statearr_30094;
});
var state_machine__18565__auto____1 = (function (state_30080){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_30080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e30095){if((e30095 instanceof Object)){
var ex__18568__auto__ = e30095;
var statearr_30096_30105 = state_30080;
(statearr_30096_30105[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30106 = state_30080;
state_30080 = G__30106;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_30080){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_30080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto___30098,out))
})();
var state__18622__auto__ = (function (){var statearr_30097 = f__18621__auto__.call(null);
(statearr_30097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto___30098);

return statearr_30097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto___30098,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__30107,p__30108){
var map__30111 = p__30107;
var map__30111__$1 = ((cljs.core.seq_QMARK_.call(null,map__30111))?cljs.core.apply.call(null,cljs.core.hash_map,map__30111):map__30111);
var opts = map__30111__$1;
var url_rewriter = cljs.core.get.call(null,map__30111__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30112 = p__30108;
var map__30112__$1 = ((cljs.core.seq_QMARK_.call(null,map__30112))?cljs.core.apply.call(null,cljs.core.hash_map,map__30112):map__30112);
var file_msg = map__30112__$1;
var file = cljs.core.get.call(null,map__30112__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__30113){
var map__30116 = p__30113;
var map__30116__$1 = ((cljs.core.seq_QMARK_.call(null,map__30116))?cljs.core.apply.call(null,cljs.core.hash_map,map__30116):map__30116);
var file = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__16133__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16133__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16133__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e30117){var e = e30117;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__30122,p__30123){
var map__30324 = p__30122;
var map__30324__$1 = ((cljs.core.seq_QMARK_.call(null,map__30324))?cljs.core.apply.call(null,cljs.core.hash_map,map__30324):map__30324);
var opts = map__30324__$1;
var load_unchanged_files = cljs.core.get.call(null,map__30324__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__30324__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__30324__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__30325 = p__30123;
var map__30325__$1 = ((cljs.core.seq_QMARK_.call(null,map__30325))?cljs.core.apply.call(null,cljs.core.hash_map,map__30325):map__30325);
var msg = map__30325__$1;
var files = cljs.core.get.call(null,map__30325__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files){
return (function (state_30449){
var state_val_30450 = (state_30449[(1)]);
if((state_val_30450 === (7))){
var inst_30337 = (state_30449[(7)]);
var inst_30339 = (state_30449[(8)]);
var inst_30338 = (state_30449[(9)]);
var inst_30336 = (state_30449[(10)]);
var inst_30344 = cljs.core._nth.call(null,inst_30337,inst_30339);
var inst_30345 = figwheel.client.file_reloading.eval_body.call(null,inst_30344);
var inst_30346 = (inst_30339 + (1));
var tmp30451 = inst_30337;
var tmp30452 = inst_30338;
var tmp30453 = inst_30336;
var inst_30336__$1 = tmp30453;
var inst_30337__$1 = tmp30451;
var inst_30338__$1 = tmp30452;
var inst_30339__$1 = inst_30346;
var state_30449__$1 = (function (){var statearr_30454 = state_30449;
(statearr_30454[(7)] = inst_30337__$1);

(statearr_30454[(8)] = inst_30339__$1);

(statearr_30454[(11)] = inst_30345);

(statearr_30454[(9)] = inst_30338__$1);

(statearr_30454[(10)] = inst_30336__$1);

return statearr_30454;
})();
var statearr_30455_30524 = state_30449__$1;
(statearr_30455_30524[(2)] = null);

(statearr_30455_30524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (20))){
var inst_30382 = (state_30449[(12)]);
var inst_30381 = (state_30449[(13)]);
var inst_30388 = (state_30449[(14)]);
var inst_30385 = (state_30449[(15)]);
var inst_30386 = (state_30449[(16)]);
var inst_30391 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30393 = (function (){var files_not_loaded = inst_30388;
var res = inst_30386;
var res_SINGLEQUOTE_ = inst_30385;
var files_SINGLEQUOTE_ = inst_30382;
var all_files = inst_30381;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30382,inst_30381,inst_30388,inst_30385,inst_30386,inst_30391,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files){
return (function (p__30392){
var map__30456 = p__30392;
var map__30456__$1 = ((cljs.core.seq_QMARK_.call(null,map__30456))?cljs.core.apply.call(null,cljs.core.hash_map,map__30456):map__30456);
var file = cljs.core.get.call(null,map__30456__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__30456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30382,inst_30381,inst_30388,inst_30385,inst_30386,inst_30391,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files))
})();
var inst_30394 = cljs.core.map.call(null,inst_30393,inst_30386);
var inst_30395 = cljs.core.pr_str.call(null,inst_30394);
var inst_30396 = figwheel.client.utils.log.call(null,inst_30395);
var inst_30397 = (function (){var files_not_loaded = inst_30388;
var res = inst_30386;
var res_SINGLEQUOTE_ = inst_30385;
var files_SINGLEQUOTE_ = inst_30382;
var all_files = inst_30381;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30382,inst_30381,inst_30388,inst_30385,inst_30386,inst_30391,inst_30393,inst_30394,inst_30395,inst_30396,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30382,inst_30381,inst_30388,inst_30385,inst_30386,inst_30391,inst_30393,inst_30394,inst_30395,inst_30396,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files))
})();
var inst_30398 = setTimeout(inst_30397,(10));
var state_30449__$1 = (function (){var statearr_30457 = state_30449;
(statearr_30457[(17)] = inst_30396);

(statearr_30457[(18)] = inst_30391);

return statearr_30457;
})();
var statearr_30458_30525 = state_30449__$1;
(statearr_30458_30525[(2)] = inst_30398);

(statearr_30458_30525[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (27))){
var inst_30408 = (state_30449[(19)]);
var state_30449__$1 = state_30449;
var statearr_30459_30526 = state_30449__$1;
(statearr_30459_30526[(2)] = inst_30408);

(statearr_30459_30526[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (1))){
var inst_30328 = (state_30449[(20)]);
var inst_30326 = before_jsload.call(null,files);
var inst_30327 = (function (){return ((function (inst_30328,inst_30326,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files){
return (function (p1__30118_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30118_SHARP_);
});
;})(inst_30328,inst_30326,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files))
})();
var inst_30328__$1 = cljs.core.filter.call(null,inst_30327,files);
var inst_30329 = cljs.core.not_empty.call(null,inst_30328__$1);
var state_30449__$1 = (function (){var statearr_30460 = state_30449;
(statearr_30460[(21)] = inst_30326);

(statearr_30460[(20)] = inst_30328__$1);

return statearr_30460;
})();
if(cljs.core.truth_(inst_30329)){
var statearr_30461_30527 = state_30449__$1;
(statearr_30461_30527[(1)] = (2));

} else {
var statearr_30462_30528 = state_30449__$1;
(statearr_30462_30528[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (24))){
var state_30449__$1 = state_30449;
var statearr_30463_30529 = state_30449__$1;
(statearr_30463_30529[(2)] = null);

(statearr_30463_30529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (4))){
var inst_30373 = (state_30449[(2)]);
var inst_30374 = (function (){return ((function (inst_30373,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files){
return (function (p1__30119_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30119_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30119_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_30373,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files))
})();
var inst_30375 = cljs.core.filter.call(null,inst_30374,files);
var state_30449__$1 = (function (){var statearr_30464 = state_30449;
(statearr_30464[(22)] = inst_30375);

(statearr_30464[(23)] = inst_30373);

return statearr_30464;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_30465_30530 = state_30449__$1;
(statearr_30465_30530[(1)] = (16));

} else {
var statearr_30466_30531 = state_30449__$1;
(statearr_30466_30531[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (15))){
var inst_30363 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30467_30532 = state_30449__$1;
(statearr_30467_30532[(2)] = inst_30363);

(statearr_30467_30532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (21))){
var state_30449__$1 = state_30449;
var statearr_30468_30533 = state_30449__$1;
(statearr_30468_30533[(2)] = null);

(statearr_30468_30533[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (31))){
var inst_30416 = (state_30449[(24)]);
var inst_30426 = (state_30449[(2)]);
var inst_30427 = cljs.core.not_empty.call(null,inst_30416);
var state_30449__$1 = (function (){var statearr_30469 = state_30449;
(statearr_30469[(25)] = inst_30426);

return statearr_30469;
})();
if(cljs.core.truth_(inst_30427)){
var statearr_30470_30534 = state_30449__$1;
(statearr_30470_30534[(1)] = (32));

} else {
var statearr_30471_30535 = state_30449__$1;
(statearr_30471_30535[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (32))){
var inst_30416 = (state_30449[(24)]);
var inst_30429 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30416);
var inst_30430 = cljs.core.pr_str.call(null,inst_30429);
var inst_30431 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30430)].join('');
var inst_30432 = figwheel.client.utils.log.call(null,inst_30431);
var state_30449__$1 = state_30449;
var statearr_30472_30536 = state_30449__$1;
(statearr_30472_30536[(2)] = inst_30432);

(statearr_30472_30536[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (33))){
var state_30449__$1 = state_30449;
var statearr_30473_30537 = state_30449__$1;
(statearr_30473_30537[(2)] = null);

(statearr_30473_30537[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (13))){
var inst_30349 = (state_30449[(26)]);
var inst_30353 = cljs.core.chunk_first.call(null,inst_30349);
var inst_30354 = cljs.core.chunk_rest.call(null,inst_30349);
var inst_30355 = cljs.core.count.call(null,inst_30353);
var inst_30336 = inst_30354;
var inst_30337 = inst_30353;
var inst_30338 = inst_30355;
var inst_30339 = (0);
var state_30449__$1 = (function (){var statearr_30474 = state_30449;
(statearr_30474[(7)] = inst_30337);

(statearr_30474[(8)] = inst_30339);

(statearr_30474[(9)] = inst_30338);

(statearr_30474[(10)] = inst_30336);

return statearr_30474;
})();
var statearr_30475_30538 = state_30449__$1;
(statearr_30475_30538[(2)] = null);

(statearr_30475_30538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (22))){
var inst_30388 = (state_30449[(14)]);
var inst_30401 = (state_30449[(2)]);
var inst_30402 = cljs.core.not_empty.call(null,inst_30388);
var state_30449__$1 = (function (){var statearr_30476 = state_30449;
(statearr_30476[(27)] = inst_30401);

return statearr_30476;
})();
if(cljs.core.truth_(inst_30402)){
var statearr_30477_30539 = state_30449__$1;
(statearr_30477_30539[(1)] = (23));

} else {
var statearr_30478_30540 = state_30449__$1;
(statearr_30478_30540[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (36))){
var state_30449__$1 = state_30449;
var statearr_30479_30541 = state_30449__$1;
(statearr_30479_30541[(2)] = null);

(statearr_30479_30541[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (29))){
var inst_30417 = (state_30449[(28)]);
var inst_30420 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30417);
var inst_30421 = cljs.core.pr_str.call(null,inst_30420);
var inst_30422 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30421)].join('');
var inst_30423 = figwheel.client.utils.log.call(null,inst_30422);
var state_30449__$1 = state_30449;
var statearr_30480_30542 = state_30449__$1;
(statearr_30480_30542[(2)] = inst_30423);

(statearr_30480_30542[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (6))){
var inst_30370 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30481_30543 = state_30449__$1;
(statearr_30481_30543[(2)] = inst_30370);

(statearr_30481_30543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (28))){
var inst_30417 = (state_30449[(28)]);
var inst_30414 = (state_30449[(2)]);
var inst_30415 = cljs.core.get.call(null,inst_30414,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30416 = cljs.core.get.call(null,inst_30414,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_30417__$1 = cljs.core.get.call(null,inst_30414,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30418 = cljs.core.not_empty.call(null,inst_30417__$1);
var state_30449__$1 = (function (){var statearr_30482 = state_30449;
(statearr_30482[(24)] = inst_30416);

(statearr_30482[(29)] = inst_30415);

(statearr_30482[(28)] = inst_30417__$1);

return statearr_30482;
})();
if(cljs.core.truth_(inst_30418)){
var statearr_30483_30544 = state_30449__$1;
(statearr_30483_30544[(1)] = (29));

} else {
var statearr_30484_30545 = state_30449__$1;
(statearr_30484_30545[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (25))){
var inst_30447 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30449__$1,inst_30447);
} else {
if((state_val_30450 === (34))){
var inst_30415 = (state_30449[(29)]);
var inst_30435 = (state_30449[(2)]);
var inst_30436 = cljs.core.not_empty.call(null,inst_30415);
var state_30449__$1 = (function (){var statearr_30485 = state_30449;
(statearr_30485[(30)] = inst_30435);

return statearr_30485;
})();
if(cljs.core.truth_(inst_30436)){
var statearr_30486_30546 = state_30449__$1;
(statearr_30486_30546[(1)] = (35));

} else {
var statearr_30487_30547 = state_30449__$1;
(statearr_30487_30547[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (17))){
var inst_30375 = (state_30449[(22)]);
var state_30449__$1 = state_30449;
var statearr_30488_30548 = state_30449__$1;
(statearr_30488_30548[(2)] = inst_30375);

(statearr_30488_30548[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (3))){
var state_30449__$1 = state_30449;
var statearr_30489_30549 = state_30449__$1;
(statearr_30489_30549[(2)] = null);

(statearr_30489_30549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (12))){
var inst_30366 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30490_30550 = state_30449__$1;
(statearr_30490_30550[(2)] = inst_30366);

(statearr_30490_30550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (2))){
var inst_30328 = (state_30449[(20)]);
var inst_30335 = cljs.core.seq.call(null,inst_30328);
var inst_30336 = inst_30335;
var inst_30337 = null;
var inst_30338 = (0);
var inst_30339 = (0);
var state_30449__$1 = (function (){var statearr_30491 = state_30449;
(statearr_30491[(7)] = inst_30337);

(statearr_30491[(8)] = inst_30339);

(statearr_30491[(9)] = inst_30338);

(statearr_30491[(10)] = inst_30336);

return statearr_30491;
})();
var statearr_30492_30551 = state_30449__$1;
(statearr_30492_30551[(2)] = null);

(statearr_30492_30551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (23))){
var inst_30382 = (state_30449[(12)]);
var inst_30381 = (state_30449[(13)]);
var inst_30408 = (state_30449[(19)]);
var inst_30388 = (state_30449[(14)]);
var inst_30385 = (state_30449[(15)]);
var inst_30386 = (state_30449[(16)]);
var inst_30404 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30407 = (function (){var files_not_loaded = inst_30388;
var res = inst_30386;
var res_SINGLEQUOTE_ = inst_30385;
var files_SINGLEQUOTE_ = inst_30382;
var all_files = inst_30381;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30382,inst_30381,inst_30408,inst_30388,inst_30385,inst_30386,inst_30404,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files){
return (function (p__30406){
var map__30493 = p__30406;
var map__30493__$1 = ((cljs.core.seq_QMARK_.call(null,map__30493))?cljs.core.apply.call(null,cljs.core.hash_map,map__30493):map__30493);
var meta_data = cljs.core.get.call(null,map__30493__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30382,inst_30381,inst_30408,inst_30388,inst_30385,inst_30386,inst_30404,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files))
})();
var inst_30408__$1 = cljs.core.group_by.call(null,inst_30407,inst_30388);
var inst_30409 = cljs.core.seq_QMARK_.call(null,inst_30408__$1);
var state_30449__$1 = (function (){var statearr_30494 = state_30449;
(statearr_30494[(31)] = inst_30404);

(statearr_30494[(19)] = inst_30408__$1);

return statearr_30494;
})();
if(inst_30409){
var statearr_30495_30552 = state_30449__$1;
(statearr_30495_30552[(1)] = (26));

} else {
var statearr_30496_30553 = state_30449__$1;
(statearr_30496_30553[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (35))){
var inst_30415 = (state_30449[(29)]);
var inst_30438 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30415);
var inst_30439 = cljs.core.pr_str.call(null,inst_30438);
var inst_30440 = [cljs.core.str("not required: "),cljs.core.str(inst_30439)].join('');
var inst_30441 = figwheel.client.utils.log.call(null,inst_30440);
var state_30449__$1 = state_30449;
var statearr_30497_30554 = state_30449__$1;
(statearr_30497_30554[(2)] = inst_30441);

(statearr_30497_30554[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (19))){
var inst_30382 = (state_30449[(12)]);
var inst_30381 = (state_30449[(13)]);
var inst_30385 = (state_30449[(15)]);
var inst_30386 = (state_30449[(16)]);
var inst_30385__$1 = (state_30449[(2)]);
var inst_30386__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30385__$1);
var inst_30387 = (function (){var res = inst_30386__$1;
var res_SINGLEQUOTE_ = inst_30385__$1;
var files_SINGLEQUOTE_ = inst_30382;
var all_files = inst_30381;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30382,inst_30381,inst_30385,inst_30386,inst_30385__$1,inst_30386__$1,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files){
return (function (p1__30121_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30121_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30382,inst_30381,inst_30385,inst_30386,inst_30385__$1,inst_30386__$1,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files))
})();
var inst_30388 = cljs.core.filter.call(null,inst_30387,inst_30385__$1);
var inst_30389 = cljs.core.not_empty.call(null,inst_30386__$1);
var state_30449__$1 = (function (){var statearr_30498 = state_30449;
(statearr_30498[(14)] = inst_30388);

(statearr_30498[(15)] = inst_30385__$1);

(statearr_30498[(16)] = inst_30386__$1);

return statearr_30498;
})();
if(cljs.core.truth_(inst_30389)){
var statearr_30499_30555 = state_30449__$1;
(statearr_30499_30555[(1)] = (20));

} else {
var statearr_30500_30556 = state_30449__$1;
(statearr_30500_30556[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (11))){
var state_30449__$1 = state_30449;
var statearr_30501_30557 = state_30449__$1;
(statearr_30501_30557[(2)] = null);

(statearr_30501_30557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (9))){
var inst_30368 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30502_30558 = state_30449__$1;
(statearr_30502_30558[(2)] = inst_30368);

(statearr_30502_30558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (5))){
var inst_30339 = (state_30449[(8)]);
var inst_30338 = (state_30449[(9)]);
var inst_30341 = (inst_30339 < inst_30338);
var inst_30342 = inst_30341;
var state_30449__$1 = state_30449;
if(cljs.core.truth_(inst_30342)){
var statearr_30503_30559 = state_30449__$1;
(statearr_30503_30559[(1)] = (7));

} else {
var statearr_30504_30560 = state_30449__$1;
(statearr_30504_30560[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (14))){
var inst_30349 = (state_30449[(26)]);
var inst_30358 = cljs.core.first.call(null,inst_30349);
var inst_30359 = figwheel.client.file_reloading.eval_body.call(null,inst_30358);
var inst_30360 = cljs.core.next.call(null,inst_30349);
var inst_30336 = inst_30360;
var inst_30337 = null;
var inst_30338 = (0);
var inst_30339 = (0);
var state_30449__$1 = (function (){var statearr_30505 = state_30449;
(statearr_30505[(7)] = inst_30337);

(statearr_30505[(8)] = inst_30339);

(statearr_30505[(9)] = inst_30338);

(statearr_30505[(32)] = inst_30359);

(statearr_30505[(10)] = inst_30336);

return statearr_30505;
})();
var statearr_30506_30561 = state_30449__$1;
(statearr_30506_30561[(2)] = null);

(statearr_30506_30561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (26))){
var inst_30408 = (state_30449[(19)]);
var inst_30411 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30408);
var state_30449__$1 = state_30449;
var statearr_30507_30562 = state_30449__$1;
(statearr_30507_30562[(2)] = inst_30411);

(statearr_30507_30562[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (16))){
var inst_30375 = (state_30449[(22)]);
var inst_30377 = (function (){var all_files = inst_30375;
return ((function (all_files,inst_30375,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files){
return (function (p1__30120_SHARP_){
return cljs.core.update_in.call(null,p1__30120_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_30375,state_val_30450,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files))
})();
var inst_30378 = cljs.core.map.call(null,inst_30377,inst_30375);
var state_30449__$1 = state_30449;
var statearr_30508_30563 = state_30449__$1;
(statearr_30508_30563[(2)] = inst_30378);

(statearr_30508_30563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (30))){
var state_30449__$1 = state_30449;
var statearr_30509_30564 = state_30449__$1;
(statearr_30509_30564[(2)] = null);

(statearr_30509_30564[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (10))){
var inst_30349 = (state_30449[(26)]);
var inst_30351 = cljs.core.chunked_seq_QMARK_.call(null,inst_30349);
var state_30449__$1 = state_30449;
if(inst_30351){
var statearr_30510_30565 = state_30449__$1;
(statearr_30510_30565[(1)] = (13));

} else {
var statearr_30511_30566 = state_30449__$1;
(statearr_30511_30566[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (18))){
var inst_30382 = (state_30449[(12)]);
var inst_30381 = (state_30449[(13)]);
var inst_30381__$1 = (state_30449[(2)]);
var inst_30382__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_30381__$1);
var inst_30383 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30382__$1);
var state_30449__$1 = (function (){var statearr_30512 = state_30449;
(statearr_30512[(12)] = inst_30382__$1);

(statearr_30512[(13)] = inst_30381__$1);

return statearr_30512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30449__$1,(19),inst_30383);
} else {
if((state_val_30450 === (37))){
var inst_30444 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30513_30567 = state_30449__$1;
(statearr_30513_30567[(2)] = inst_30444);

(statearr_30513_30567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (8))){
var inst_30336 = (state_30449[(10)]);
var inst_30349 = (state_30449[(26)]);
var inst_30349__$1 = cljs.core.seq.call(null,inst_30336);
var state_30449__$1 = (function (){var statearr_30514 = state_30449;
(statearr_30514[(26)] = inst_30349__$1);

return statearr_30514;
})();
if(inst_30349__$1){
var statearr_30515_30568 = state_30449__$1;
(statearr_30515_30568[(1)] = (10));

} else {
var statearr_30516_30569 = state_30449__$1;
(statearr_30516_30569[(1)] = (11));

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
});})(c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files))
;
return ((function (switch__18564__auto__,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_30520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30520[(0)] = state_machine__18565__auto__);

(statearr_30520[(1)] = (1));

return statearr_30520;
});
var state_machine__18565__auto____1 = (function (state_30449){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_30449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e30521){if((e30521 instanceof Object)){
var ex__18568__auto__ = e30521;
var statearr_30522_30570 = state_30449;
(statearr_30522_30570[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30571 = state_30449;
state_30449 = G__30571;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_30449){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_30449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files))
})();
var state__18622__auto__ = (function (){var statearr_30523 = f__18621__auto__.call(null);
(statearr_30523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_30523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__,map__30324,map__30324__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30325,map__30325__$1,msg,files))
);

return c__18620__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__30574,link){
var map__30576 = p__30574;
var map__30576__$1 = ((cljs.core.seq_QMARK_.call(null,map__30576))?cljs.core.apply.call(null,cljs.core.hash_map,map__30576):map__30576);
var file = cljs.core.get.call(null,map__30576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__30576,map__30576__$1,file){
return (function (p1__30572_SHARP_,p2__30573_SHARP_){
if(cljs.core._EQ_.call(null,p1__30572_SHARP_,p2__30573_SHARP_)){
return p1__30572_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__30576,map__30576__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30580){
var map__30581 = p__30580;
var map__30581__$1 = ((cljs.core.seq_QMARK_.call(null,map__30581))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);
var current_url_length = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30577_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30577_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__30582){
var map__30584 = p__30582;
var map__30584__$1 = ((cljs.core.seq_QMARK_.call(null,map__30584))?cljs.core.apply.call(null,cljs.core.hash_map,map__30584):map__30584);
var f_data = map__30584__$1;
var request_url = cljs.core.get.call(null,map__30584__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16145__auto__ = request_url;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__30585,files_msg){
var map__30607 = p__30585;
var map__30607__$1 = ((cljs.core.seq_QMARK_.call(null,map__30607))?cljs.core.apply.call(null,cljs.core.hash_map,map__30607):map__30607);
var opts = map__30607__$1;
var on_cssload = cljs.core.get.call(null,map__30607__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30608_30628 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30609_30629 = null;
var count__30610_30630 = (0);
var i__30611_30631 = (0);
while(true){
if((i__30611_30631 < count__30610_30630)){
var f_30632 = cljs.core._nth.call(null,chunk__30609_30629,i__30611_30631);
figwheel.client.file_reloading.reload_css_file.call(null,f_30632);

var G__30633 = seq__30608_30628;
var G__30634 = chunk__30609_30629;
var G__30635 = count__30610_30630;
var G__30636 = (i__30611_30631 + (1));
seq__30608_30628 = G__30633;
chunk__30609_30629 = G__30634;
count__30610_30630 = G__30635;
i__30611_30631 = G__30636;
continue;
} else {
var temp__4126__auto___30637 = cljs.core.seq.call(null,seq__30608_30628);
if(temp__4126__auto___30637){
var seq__30608_30638__$1 = temp__4126__auto___30637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30608_30638__$1)){
var c__16932__auto___30639 = cljs.core.chunk_first.call(null,seq__30608_30638__$1);
var G__30640 = cljs.core.chunk_rest.call(null,seq__30608_30638__$1);
var G__30641 = c__16932__auto___30639;
var G__30642 = cljs.core.count.call(null,c__16932__auto___30639);
var G__30643 = (0);
seq__30608_30628 = G__30640;
chunk__30609_30629 = G__30641;
count__30610_30630 = G__30642;
i__30611_30631 = G__30643;
continue;
} else {
var f_30644 = cljs.core.first.call(null,seq__30608_30638__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30644);

var G__30645 = cljs.core.next.call(null,seq__30608_30638__$1);
var G__30646 = null;
var G__30647 = (0);
var G__30648 = (0);
seq__30608_30628 = G__30645;
chunk__30609_30629 = G__30646;
count__30610_30630 = G__30647;
i__30611_30631 = G__30648;
continue;
}
} else {
}
}
break;
}

var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__,map__30607,map__30607__$1,opts,on_cssload){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__,map__30607,map__30607__$1,opts,on_cssload){
return (function (state_30618){
var state_val_30619 = (state_30618[(1)]);
if((state_val_30619 === (2))){
var inst_30614 = (state_30618[(2)]);
var inst_30615 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30616 = on_cssload.call(null,inst_30615);
var state_30618__$1 = (function (){var statearr_30620 = state_30618;
(statearr_30620[(7)] = inst_30614);

return statearr_30620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30618__$1,inst_30616);
} else {
if((state_val_30619 === (1))){
var inst_30612 = cljs.core.async.timeout.call(null,(100));
var state_30618__$1 = state_30618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30618__$1,(2),inst_30612);
} else {
return null;
}
}
});})(c__18620__auto__,map__30607,map__30607__$1,opts,on_cssload))
;
return ((function (switch__18564__auto__,c__18620__auto__,map__30607,map__30607__$1,opts,on_cssload){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_30624 = [null,null,null,null,null,null,null,null];
(statearr_30624[(0)] = state_machine__18565__auto__);

(statearr_30624[(1)] = (1));

return statearr_30624;
});
var state_machine__18565__auto____1 = (function (state_30618){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_30618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e30625){if((e30625 instanceof Object)){
var ex__18568__auto__ = e30625;
var statearr_30626_30649 = state_30618;
(statearr_30626_30649[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30650 = state_30618;
state_30618 = G__30650;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_30618){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_30618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__,map__30607,map__30607__$1,opts,on_cssload))
})();
var state__18622__auto__ = (function (){var statearr_30627 = f__18621__auto__.call(null);
(statearr_30627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_30627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__,map__30607,map__30607__$1,opts,on_cssload))
);

return c__18620__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1427852718297