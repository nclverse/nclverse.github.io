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
return cljs.core.reduce.call(null,(function (p1__29999_SHARP_,p2__30000_SHARP_){
var and__16133__auto__ = p1__29999_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__30000_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30002_SHARP_,p2__30001_SHARP_){
return [cljs.core.str(p2__30001_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30003){
var map__30004 = p__30003;
var map__30004__$1 = ((cljs.core.seq_QMARK_.call(null,map__30004))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);
var file = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30005){
var map__30006 = p__30005;
var map__30006__$1 = ((cljs.core.seq_QMARK_.call(null,map__30006))?cljs.core.apply.call(null,cljs.core.hash_map,map__30006):map__30006);
var namespace = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e30007){if((e30007 instanceof Error)){
var e = e30007;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30007;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__30008,callback){
var map__30010 = p__30008;
var map__30010__$1 = ((cljs.core.seq_QMARK_.call(null,map__30010))?cljs.core.apply.call(null,cljs.core.hash_map,map__30010):map__30010);
var file_msg = map__30010__$1;
var request_url = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30010,map__30010__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30010,map__30010__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__30011){
var map__30013 = p__30011;
var map__30013__$1 = ((cljs.core.seq_QMARK_.call(null,map__30013))?cljs.core.apply.call(null,cljs.core.hash_map,map__30013):map__30013);
var file_msg = map__30013__$1;
var meta_data = cljs.core.get.call(null,map__30013__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__30013__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__30014,callback){
var map__30016 = p__30014;
var map__30016__$1 = ((cljs.core.seq_QMARK_.call(null,map__30016))?cljs.core.apply.call(null,cljs.core.hash_map,map__30016):map__30016);
var file_msg = map__30016__$1;
var namespace = cljs.core.get.call(null,map__30016__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30016__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__18619__auto___30103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto___30103,out){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto___30103,out){
return (function (state_30085){
var state_val_30086 = (state_30085[(1)]);
if((state_val_30086 === (7))){
var inst_30069 = (state_30085[(7)]);
var inst_30075 = (state_30085[(2)]);
var inst_30076 = cljs.core.async.put_BANG_.call(null,out,inst_30075);
var inst_30065 = inst_30069;
var state_30085__$1 = (function (){var statearr_30087 = state_30085;
(statearr_30087[(8)] = inst_30065);

(statearr_30087[(9)] = inst_30076);

return statearr_30087;
})();
var statearr_30088_30104 = state_30085__$1;
(statearr_30088_30104[(2)] = null);

(statearr_30088_30104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (6))){
var inst_30081 = (state_30085[(2)]);
var state_30085__$1 = state_30085;
var statearr_30089_30105 = state_30085__$1;
(statearr_30089_30105[(2)] = inst_30081);

(statearr_30089_30105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (5))){
var inst_30079 = cljs.core.async.close_BANG_.call(null,out);
var state_30085__$1 = state_30085;
var statearr_30090_30106 = state_30085__$1;
(statearr_30090_30106[(2)] = inst_30079);

(statearr_30090_30106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (4))){
var inst_30068 = (state_30085[(10)]);
var inst_30073 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30068);
var state_30085__$1 = state_30085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30085__$1,(7),inst_30073);
} else {
if((state_val_30086 === (3))){
var inst_30083 = (state_30085[(2)]);
var state_30085__$1 = state_30085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30085__$1,inst_30083);
} else {
if((state_val_30086 === (2))){
var inst_30065 = (state_30085[(8)]);
var inst_30068 = (state_30085[(10)]);
var inst_30068__$1 = cljs.core.nth.call(null,inst_30065,(0),null);
var inst_30069 = cljs.core.nthnext.call(null,inst_30065,(1));
var inst_30070 = (inst_30068__$1 == null);
var inst_30071 = cljs.core.not.call(null,inst_30070);
var state_30085__$1 = (function (){var statearr_30091 = state_30085;
(statearr_30091[(10)] = inst_30068__$1);

(statearr_30091[(7)] = inst_30069);

return statearr_30091;
})();
if(inst_30071){
var statearr_30092_30107 = state_30085__$1;
(statearr_30092_30107[(1)] = (4));

} else {
var statearr_30093_30108 = state_30085__$1;
(statearr_30093_30108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30086 === (1))){
var inst_30063 = cljs.core.nth.call(null,files,(0),null);
var inst_30064 = cljs.core.nthnext.call(null,files,(1));
var inst_30065 = files;
var state_30085__$1 = (function (){var statearr_30094 = state_30085;
(statearr_30094[(11)] = inst_30063);

(statearr_30094[(8)] = inst_30065);

(statearr_30094[(12)] = inst_30064);

return statearr_30094;
})();
var statearr_30095_30109 = state_30085__$1;
(statearr_30095_30109[(2)] = null);

(statearr_30095_30109[(1)] = (2));


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
});})(c__18619__auto___30103,out))
;
return ((function (switch__18563__auto__,c__18619__auto___30103,out){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_30099 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30099[(0)] = state_machine__18564__auto__);

(statearr_30099[(1)] = (1));

return statearr_30099;
});
var state_machine__18564__auto____1 = (function (state_30085){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_30085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e30100){if((e30100 instanceof Object)){
var ex__18567__auto__ = e30100;
var statearr_30101_30110 = state_30085;
(statearr_30101_30110[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30111 = state_30085;
state_30085 = G__30111;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_30085){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_30085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto___30103,out))
})();
var state__18621__auto__ = (function (){var statearr_30102 = f__18620__auto__.call(null);
(statearr_30102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto___30103);

return statearr_30102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto___30103,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__30112,p__30113){
var map__30116 = p__30112;
var map__30116__$1 = ((cljs.core.seq_QMARK_.call(null,map__30116))?cljs.core.apply.call(null,cljs.core.hash_map,map__30116):map__30116);
var opts = map__30116__$1;
var url_rewriter = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30117 = p__30113;
var map__30117__$1 = ((cljs.core.seq_QMARK_.call(null,map__30117))?cljs.core.apply.call(null,cljs.core.hash_map,map__30117):map__30117);
var file_msg = map__30117__$1;
var file = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__30118){
var map__30121 = p__30118;
var map__30121__$1 = ((cljs.core.seq_QMARK_.call(null,map__30121))?cljs.core.apply.call(null,cljs.core.hash_map,map__30121):map__30121);
var file = cljs.core.get.call(null,map__30121__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__30121__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e30122){var e = e30122;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__30127,p__30128){
var map__30329 = p__30127;
var map__30329__$1 = ((cljs.core.seq_QMARK_.call(null,map__30329))?cljs.core.apply.call(null,cljs.core.hash_map,map__30329):map__30329);
var opts = map__30329__$1;
var load_unchanged_files = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__30329__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__30330 = p__30128;
var map__30330__$1 = ((cljs.core.seq_QMARK_.call(null,map__30330))?cljs.core.apply.call(null,cljs.core.hash_map,map__30330):map__30330);
var msg = map__30330__$1;
var files = cljs.core.get.call(null,map__30330__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files){
return (function (state_30454){
var state_val_30455 = (state_30454[(1)]);
if((state_val_30455 === (7))){
var inst_30344 = (state_30454[(7)]);
var inst_30343 = (state_30454[(8)]);
var inst_30342 = (state_30454[(9)]);
var inst_30341 = (state_30454[(10)]);
var inst_30349 = cljs.core._nth.call(null,inst_30342,inst_30344);
var inst_30350 = figwheel.client.file_reloading.eval_body.call(null,inst_30349);
var inst_30351 = (inst_30344 + (1));
var tmp30456 = inst_30343;
var tmp30457 = inst_30342;
var tmp30458 = inst_30341;
var inst_30341__$1 = tmp30458;
var inst_30342__$1 = tmp30457;
var inst_30343__$1 = tmp30456;
var inst_30344__$1 = inst_30351;
var state_30454__$1 = (function (){var statearr_30459 = state_30454;
(statearr_30459[(7)] = inst_30344__$1);

(statearr_30459[(8)] = inst_30343__$1);

(statearr_30459[(9)] = inst_30342__$1);

(statearr_30459[(11)] = inst_30350);

(statearr_30459[(10)] = inst_30341__$1);

return statearr_30459;
})();
var statearr_30460_30529 = state_30454__$1;
(statearr_30460_30529[(2)] = null);

(statearr_30460_30529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (20))){
var inst_30387 = (state_30454[(12)]);
var inst_30393 = (state_30454[(13)]);
var inst_30390 = (state_30454[(14)]);
var inst_30391 = (state_30454[(15)]);
var inst_30386 = (state_30454[(16)]);
var inst_30396 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30398 = (function (){var files_not_loaded = inst_30393;
var res = inst_30391;
var res_SINGLEQUOTE_ = inst_30390;
var files_SINGLEQUOTE_ = inst_30387;
var all_files = inst_30386;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30387,inst_30393,inst_30390,inst_30391,inst_30386,inst_30396,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files){
return (function (p__30397){
var map__30461 = p__30397;
var map__30461__$1 = ((cljs.core.seq_QMARK_.call(null,map__30461))?cljs.core.apply.call(null,cljs.core.hash_map,map__30461):map__30461);
var file = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30387,inst_30393,inst_30390,inst_30391,inst_30386,inst_30396,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files))
})();
var inst_30399 = cljs.core.map.call(null,inst_30398,inst_30391);
var inst_30400 = cljs.core.pr_str.call(null,inst_30399);
var inst_30401 = figwheel.client.utils.log.call(null,inst_30400);
var inst_30402 = (function (){var files_not_loaded = inst_30393;
var res = inst_30391;
var res_SINGLEQUOTE_ = inst_30390;
var files_SINGLEQUOTE_ = inst_30387;
var all_files = inst_30386;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30387,inst_30393,inst_30390,inst_30391,inst_30386,inst_30396,inst_30398,inst_30399,inst_30400,inst_30401,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30387,inst_30393,inst_30390,inst_30391,inst_30386,inst_30396,inst_30398,inst_30399,inst_30400,inst_30401,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files))
})();
var inst_30403 = setTimeout(inst_30402,(10));
var state_30454__$1 = (function (){var statearr_30462 = state_30454;
(statearr_30462[(17)] = inst_30396);

(statearr_30462[(18)] = inst_30401);

return statearr_30462;
})();
var statearr_30463_30530 = state_30454__$1;
(statearr_30463_30530[(2)] = inst_30403);

(statearr_30463_30530[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (27))){
var inst_30413 = (state_30454[(19)]);
var state_30454__$1 = state_30454;
var statearr_30464_30531 = state_30454__$1;
(statearr_30464_30531[(2)] = inst_30413);

(statearr_30464_30531[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (1))){
var inst_30333 = (state_30454[(20)]);
var inst_30331 = before_jsload.call(null,files);
var inst_30332 = (function (){return ((function (inst_30333,inst_30331,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files){
return (function (p1__30123_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30123_SHARP_);
});
;})(inst_30333,inst_30331,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files))
})();
var inst_30333__$1 = cljs.core.filter.call(null,inst_30332,files);
var inst_30334 = cljs.core.not_empty.call(null,inst_30333__$1);
var state_30454__$1 = (function (){var statearr_30465 = state_30454;
(statearr_30465[(20)] = inst_30333__$1);

(statearr_30465[(21)] = inst_30331);

return statearr_30465;
})();
if(cljs.core.truth_(inst_30334)){
var statearr_30466_30532 = state_30454__$1;
(statearr_30466_30532[(1)] = (2));

} else {
var statearr_30467_30533 = state_30454__$1;
(statearr_30467_30533[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (24))){
var state_30454__$1 = state_30454;
var statearr_30468_30534 = state_30454__$1;
(statearr_30468_30534[(2)] = null);

(statearr_30468_30534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (4))){
var inst_30378 = (state_30454[(2)]);
var inst_30379 = (function (){return ((function (inst_30378,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files){
return (function (p1__30124_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30124_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30124_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_30378,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files))
})();
var inst_30380 = cljs.core.filter.call(null,inst_30379,files);
var state_30454__$1 = (function (){var statearr_30469 = state_30454;
(statearr_30469[(22)] = inst_30380);

(statearr_30469[(23)] = inst_30378);

return statearr_30469;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_30470_30535 = state_30454__$1;
(statearr_30470_30535[(1)] = (16));

} else {
var statearr_30471_30536 = state_30454__$1;
(statearr_30471_30536[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (15))){
var inst_30368 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
var statearr_30472_30537 = state_30454__$1;
(statearr_30472_30537[(2)] = inst_30368);

(statearr_30472_30537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (21))){
var state_30454__$1 = state_30454;
var statearr_30473_30538 = state_30454__$1;
(statearr_30473_30538[(2)] = null);

(statearr_30473_30538[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (31))){
var inst_30421 = (state_30454[(24)]);
var inst_30431 = (state_30454[(2)]);
var inst_30432 = cljs.core.not_empty.call(null,inst_30421);
var state_30454__$1 = (function (){var statearr_30474 = state_30454;
(statearr_30474[(25)] = inst_30431);

return statearr_30474;
})();
if(cljs.core.truth_(inst_30432)){
var statearr_30475_30539 = state_30454__$1;
(statearr_30475_30539[(1)] = (32));

} else {
var statearr_30476_30540 = state_30454__$1;
(statearr_30476_30540[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (32))){
var inst_30421 = (state_30454[(24)]);
var inst_30434 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30421);
var inst_30435 = cljs.core.pr_str.call(null,inst_30434);
var inst_30436 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30435)].join('');
var inst_30437 = figwheel.client.utils.log.call(null,inst_30436);
var state_30454__$1 = state_30454;
var statearr_30477_30541 = state_30454__$1;
(statearr_30477_30541[(2)] = inst_30437);

(statearr_30477_30541[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (33))){
var state_30454__$1 = state_30454;
var statearr_30478_30542 = state_30454__$1;
(statearr_30478_30542[(2)] = null);

(statearr_30478_30542[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (13))){
var inst_30354 = (state_30454[(26)]);
var inst_30358 = cljs.core.chunk_first.call(null,inst_30354);
var inst_30359 = cljs.core.chunk_rest.call(null,inst_30354);
var inst_30360 = cljs.core.count.call(null,inst_30358);
var inst_30341 = inst_30359;
var inst_30342 = inst_30358;
var inst_30343 = inst_30360;
var inst_30344 = (0);
var state_30454__$1 = (function (){var statearr_30479 = state_30454;
(statearr_30479[(7)] = inst_30344);

(statearr_30479[(8)] = inst_30343);

(statearr_30479[(9)] = inst_30342);

(statearr_30479[(10)] = inst_30341);

return statearr_30479;
})();
var statearr_30480_30543 = state_30454__$1;
(statearr_30480_30543[(2)] = null);

(statearr_30480_30543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (22))){
var inst_30393 = (state_30454[(13)]);
var inst_30406 = (state_30454[(2)]);
var inst_30407 = cljs.core.not_empty.call(null,inst_30393);
var state_30454__$1 = (function (){var statearr_30481 = state_30454;
(statearr_30481[(27)] = inst_30406);

return statearr_30481;
})();
if(cljs.core.truth_(inst_30407)){
var statearr_30482_30544 = state_30454__$1;
(statearr_30482_30544[(1)] = (23));

} else {
var statearr_30483_30545 = state_30454__$1;
(statearr_30483_30545[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (36))){
var state_30454__$1 = state_30454;
var statearr_30484_30546 = state_30454__$1;
(statearr_30484_30546[(2)] = null);

(statearr_30484_30546[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (29))){
var inst_30422 = (state_30454[(28)]);
var inst_30425 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30422);
var inst_30426 = cljs.core.pr_str.call(null,inst_30425);
var inst_30427 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30426)].join('');
var inst_30428 = figwheel.client.utils.log.call(null,inst_30427);
var state_30454__$1 = state_30454;
var statearr_30485_30547 = state_30454__$1;
(statearr_30485_30547[(2)] = inst_30428);

(statearr_30485_30547[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (6))){
var inst_30375 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
var statearr_30486_30548 = state_30454__$1;
(statearr_30486_30548[(2)] = inst_30375);

(statearr_30486_30548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (28))){
var inst_30422 = (state_30454[(28)]);
var inst_30419 = (state_30454[(2)]);
var inst_30420 = cljs.core.get.call(null,inst_30419,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30421 = cljs.core.get.call(null,inst_30419,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_30422__$1 = cljs.core.get.call(null,inst_30419,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30423 = cljs.core.not_empty.call(null,inst_30422__$1);
var state_30454__$1 = (function (){var statearr_30487 = state_30454;
(statearr_30487[(29)] = inst_30420);

(statearr_30487[(28)] = inst_30422__$1);

(statearr_30487[(24)] = inst_30421);

return statearr_30487;
})();
if(cljs.core.truth_(inst_30423)){
var statearr_30488_30549 = state_30454__$1;
(statearr_30488_30549[(1)] = (29));

} else {
var statearr_30489_30550 = state_30454__$1;
(statearr_30489_30550[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (25))){
var inst_30452 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30454__$1,inst_30452);
} else {
if((state_val_30455 === (34))){
var inst_30420 = (state_30454[(29)]);
var inst_30440 = (state_30454[(2)]);
var inst_30441 = cljs.core.not_empty.call(null,inst_30420);
var state_30454__$1 = (function (){var statearr_30490 = state_30454;
(statearr_30490[(30)] = inst_30440);

return statearr_30490;
})();
if(cljs.core.truth_(inst_30441)){
var statearr_30491_30551 = state_30454__$1;
(statearr_30491_30551[(1)] = (35));

} else {
var statearr_30492_30552 = state_30454__$1;
(statearr_30492_30552[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (17))){
var inst_30380 = (state_30454[(22)]);
var state_30454__$1 = state_30454;
var statearr_30493_30553 = state_30454__$1;
(statearr_30493_30553[(2)] = inst_30380);

(statearr_30493_30553[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (3))){
var state_30454__$1 = state_30454;
var statearr_30494_30554 = state_30454__$1;
(statearr_30494_30554[(2)] = null);

(statearr_30494_30554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (12))){
var inst_30371 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
var statearr_30495_30555 = state_30454__$1;
(statearr_30495_30555[(2)] = inst_30371);

(statearr_30495_30555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (2))){
var inst_30333 = (state_30454[(20)]);
var inst_30340 = cljs.core.seq.call(null,inst_30333);
var inst_30341 = inst_30340;
var inst_30342 = null;
var inst_30343 = (0);
var inst_30344 = (0);
var state_30454__$1 = (function (){var statearr_30496 = state_30454;
(statearr_30496[(7)] = inst_30344);

(statearr_30496[(8)] = inst_30343);

(statearr_30496[(9)] = inst_30342);

(statearr_30496[(10)] = inst_30341);

return statearr_30496;
})();
var statearr_30497_30556 = state_30454__$1;
(statearr_30497_30556[(2)] = null);

(statearr_30497_30556[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (23))){
var inst_30413 = (state_30454[(19)]);
var inst_30387 = (state_30454[(12)]);
var inst_30393 = (state_30454[(13)]);
var inst_30390 = (state_30454[(14)]);
var inst_30391 = (state_30454[(15)]);
var inst_30386 = (state_30454[(16)]);
var inst_30409 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30412 = (function (){var files_not_loaded = inst_30393;
var res = inst_30391;
var res_SINGLEQUOTE_ = inst_30390;
var files_SINGLEQUOTE_ = inst_30387;
var all_files = inst_30386;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30413,inst_30387,inst_30393,inst_30390,inst_30391,inst_30386,inst_30409,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files){
return (function (p__30411){
var map__30498 = p__30411;
var map__30498__$1 = ((cljs.core.seq_QMARK_.call(null,map__30498))?cljs.core.apply.call(null,cljs.core.hash_map,map__30498):map__30498);
var meta_data = cljs.core.get.call(null,map__30498__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30413,inst_30387,inst_30393,inst_30390,inst_30391,inst_30386,inst_30409,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files))
})();
var inst_30413__$1 = cljs.core.group_by.call(null,inst_30412,inst_30393);
var inst_30414 = cljs.core.seq_QMARK_.call(null,inst_30413__$1);
var state_30454__$1 = (function (){var statearr_30499 = state_30454;
(statearr_30499[(31)] = inst_30409);

(statearr_30499[(19)] = inst_30413__$1);

return statearr_30499;
})();
if(inst_30414){
var statearr_30500_30557 = state_30454__$1;
(statearr_30500_30557[(1)] = (26));

} else {
var statearr_30501_30558 = state_30454__$1;
(statearr_30501_30558[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (35))){
var inst_30420 = (state_30454[(29)]);
var inst_30443 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30420);
var inst_30444 = cljs.core.pr_str.call(null,inst_30443);
var inst_30445 = [cljs.core.str("not required: "),cljs.core.str(inst_30444)].join('');
var inst_30446 = figwheel.client.utils.log.call(null,inst_30445);
var state_30454__$1 = state_30454;
var statearr_30502_30559 = state_30454__$1;
(statearr_30502_30559[(2)] = inst_30446);

(statearr_30502_30559[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (19))){
var inst_30387 = (state_30454[(12)]);
var inst_30390 = (state_30454[(14)]);
var inst_30391 = (state_30454[(15)]);
var inst_30386 = (state_30454[(16)]);
var inst_30390__$1 = (state_30454[(2)]);
var inst_30391__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30390__$1);
var inst_30392 = (function (){var res = inst_30391__$1;
var res_SINGLEQUOTE_ = inst_30390__$1;
var files_SINGLEQUOTE_ = inst_30387;
var all_files = inst_30386;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30387,inst_30390,inst_30391,inst_30386,inst_30390__$1,inst_30391__$1,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files){
return (function (p1__30126_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30126_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30387,inst_30390,inst_30391,inst_30386,inst_30390__$1,inst_30391__$1,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files))
})();
var inst_30393 = cljs.core.filter.call(null,inst_30392,inst_30390__$1);
var inst_30394 = cljs.core.not_empty.call(null,inst_30391__$1);
var state_30454__$1 = (function (){var statearr_30503 = state_30454;
(statearr_30503[(13)] = inst_30393);

(statearr_30503[(14)] = inst_30390__$1);

(statearr_30503[(15)] = inst_30391__$1);

return statearr_30503;
})();
if(cljs.core.truth_(inst_30394)){
var statearr_30504_30560 = state_30454__$1;
(statearr_30504_30560[(1)] = (20));

} else {
var statearr_30505_30561 = state_30454__$1;
(statearr_30505_30561[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (11))){
var state_30454__$1 = state_30454;
var statearr_30506_30562 = state_30454__$1;
(statearr_30506_30562[(2)] = null);

(statearr_30506_30562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (9))){
var inst_30373 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
var statearr_30507_30563 = state_30454__$1;
(statearr_30507_30563[(2)] = inst_30373);

(statearr_30507_30563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (5))){
var inst_30344 = (state_30454[(7)]);
var inst_30343 = (state_30454[(8)]);
var inst_30346 = (inst_30344 < inst_30343);
var inst_30347 = inst_30346;
var state_30454__$1 = state_30454;
if(cljs.core.truth_(inst_30347)){
var statearr_30508_30564 = state_30454__$1;
(statearr_30508_30564[(1)] = (7));

} else {
var statearr_30509_30565 = state_30454__$1;
(statearr_30509_30565[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (14))){
var inst_30354 = (state_30454[(26)]);
var inst_30363 = cljs.core.first.call(null,inst_30354);
var inst_30364 = figwheel.client.file_reloading.eval_body.call(null,inst_30363);
var inst_30365 = cljs.core.next.call(null,inst_30354);
var inst_30341 = inst_30365;
var inst_30342 = null;
var inst_30343 = (0);
var inst_30344 = (0);
var state_30454__$1 = (function (){var statearr_30510 = state_30454;
(statearr_30510[(7)] = inst_30344);

(statearr_30510[(8)] = inst_30343);

(statearr_30510[(9)] = inst_30342);

(statearr_30510[(10)] = inst_30341);

(statearr_30510[(32)] = inst_30364);

return statearr_30510;
})();
var statearr_30511_30566 = state_30454__$1;
(statearr_30511_30566[(2)] = null);

(statearr_30511_30566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (26))){
var inst_30413 = (state_30454[(19)]);
var inst_30416 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30413);
var state_30454__$1 = state_30454;
var statearr_30512_30567 = state_30454__$1;
(statearr_30512_30567[(2)] = inst_30416);

(statearr_30512_30567[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (16))){
var inst_30380 = (state_30454[(22)]);
var inst_30382 = (function (){var all_files = inst_30380;
return ((function (all_files,inst_30380,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files){
return (function (p1__30125_SHARP_){
return cljs.core.update_in.call(null,p1__30125_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_30380,state_val_30455,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files))
})();
var inst_30383 = cljs.core.map.call(null,inst_30382,inst_30380);
var state_30454__$1 = state_30454;
var statearr_30513_30568 = state_30454__$1;
(statearr_30513_30568[(2)] = inst_30383);

(statearr_30513_30568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (30))){
var state_30454__$1 = state_30454;
var statearr_30514_30569 = state_30454__$1;
(statearr_30514_30569[(2)] = null);

(statearr_30514_30569[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (10))){
var inst_30354 = (state_30454[(26)]);
var inst_30356 = cljs.core.chunked_seq_QMARK_.call(null,inst_30354);
var state_30454__$1 = state_30454;
if(inst_30356){
var statearr_30515_30570 = state_30454__$1;
(statearr_30515_30570[(1)] = (13));

} else {
var statearr_30516_30571 = state_30454__$1;
(statearr_30516_30571[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (18))){
var inst_30387 = (state_30454[(12)]);
var inst_30386 = (state_30454[(16)]);
var inst_30386__$1 = (state_30454[(2)]);
var inst_30387__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_30386__$1);
var inst_30388 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30387__$1);
var state_30454__$1 = (function (){var statearr_30517 = state_30454;
(statearr_30517[(12)] = inst_30387__$1);

(statearr_30517[(16)] = inst_30386__$1);

return statearr_30517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30454__$1,(19),inst_30388);
} else {
if((state_val_30455 === (37))){
var inst_30449 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
var statearr_30518_30572 = state_30454__$1;
(statearr_30518_30572[(2)] = inst_30449);

(statearr_30518_30572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (8))){
var inst_30354 = (state_30454[(26)]);
var inst_30341 = (state_30454[(10)]);
var inst_30354__$1 = cljs.core.seq.call(null,inst_30341);
var state_30454__$1 = (function (){var statearr_30519 = state_30454;
(statearr_30519[(26)] = inst_30354__$1);

return statearr_30519;
})();
if(inst_30354__$1){
var statearr_30520_30573 = state_30454__$1;
(statearr_30520_30573[(1)] = (10));

} else {
var statearr_30521_30574 = state_30454__$1;
(statearr_30521_30574[(1)] = (11));

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
});})(c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files))
;
return ((function (switch__18563__auto__,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_30525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30525[(0)] = state_machine__18564__auto__);

(statearr_30525[(1)] = (1));

return statearr_30525;
});
var state_machine__18564__auto____1 = (function (state_30454){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_30454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e30526){if((e30526 instanceof Object)){
var ex__18567__auto__ = e30526;
var statearr_30527_30575 = state_30454;
(statearr_30527_30575[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30576 = state_30454;
state_30454 = G__30576;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_30454){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_30454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files))
})();
var state__18621__auto__ = (function (){var statearr_30528 = f__18620__auto__.call(null);
(statearr_30528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto__);

return statearr_30528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto__,map__30329,map__30329__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30330,map__30330__$1,msg,files))
);

return c__18619__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__30579,link){
var map__30581 = p__30579;
var map__30581__$1 = ((cljs.core.seq_QMARK_.call(null,map__30581))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);
var file = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__30581,map__30581__$1,file){
return (function (p1__30577_SHARP_,p2__30578_SHARP_){
if(cljs.core._EQ_.call(null,p1__30577_SHARP_,p2__30578_SHARP_)){
return p1__30577_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__30581,map__30581__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30585){
var map__30586 = p__30585;
var map__30586__$1 = ((cljs.core.seq_QMARK_.call(null,map__30586))?cljs.core.apply.call(null,cljs.core.hash_map,map__30586):map__30586);
var current_url_length = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30582_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30582_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__30587){
var map__30589 = p__30587;
var map__30589__$1 = ((cljs.core.seq_QMARK_.call(null,map__30589))?cljs.core.apply.call(null,cljs.core.hash_map,map__30589):map__30589);
var f_data = map__30589__$1;
var request_url = cljs.core.get.call(null,map__30589__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30589__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__30590,files_msg){
var map__30612 = p__30590;
var map__30612__$1 = ((cljs.core.seq_QMARK_.call(null,map__30612))?cljs.core.apply.call(null,cljs.core.hash_map,map__30612):map__30612);
var opts = map__30612__$1;
var on_cssload = cljs.core.get.call(null,map__30612__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30613_30633 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30614_30634 = null;
var count__30615_30635 = (0);
var i__30616_30636 = (0);
while(true){
if((i__30616_30636 < count__30615_30635)){
var f_30637 = cljs.core._nth.call(null,chunk__30614_30634,i__30616_30636);
figwheel.client.file_reloading.reload_css_file.call(null,f_30637);

var G__30638 = seq__30613_30633;
var G__30639 = chunk__30614_30634;
var G__30640 = count__30615_30635;
var G__30641 = (i__30616_30636 + (1));
seq__30613_30633 = G__30638;
chunk__30614_30634 = G__30639;
count__30615_30635 = G__30640;
i__30616_30636 = G__30641;
continue;
} else {
var temp__4126__auto___30642 = cljs.core.seq.call(null,seq__30613_30633);
if(temp__4126__auto___30642){
var seq__30613_30643__$1 = temp__4126__auto___30642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30613_30643__$1)){
var c__16932__auto___30644 = cljs.core.chunk_first.call(null,seq__30613_30643__$1);
var G__30645 = cljs.core.chunk_rest.call(null,seq__30613_30643__$1);
var G__30646 = c__16932__auto___30644;
var G__30647 = cljs.core.count.call(null,c__16932__auto___30644);
var G__30648 = (0);
seq__30613_30633 = G__30645;
chunk__30614_30634 = G__30646;
count__30615_30635 = G__30647;
i__30616_30636 = G__30648;
continue;
} else {
var f_30649 = cljs.core.first.call(null,seq__30613_30643__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30649);

var G__30650 = cljs.core.next.call(null,seq__30613_30643__$1);
var G__30651 = null;
var G__30652 = (0);
var G__30653 = (0);
seq__30613_30633 = G__30650;
chunk__30614_30634 = G__30651;
count__30615_30635 = G__30652;
i__30616_30636 = G__30653;
continue;
}
} else {
}
}
break;
}

var c__18619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18619__auto__,map__30612,map__30612__$1,opts,on_cssload){
return (function (){
var f__18620__auto__ = (function (){var switch__18563__auto__ = ((function (c__18619__auto__,map__30612,map__30612__$1,opts,on_cssload){
return (function (state_30623){
var state_val_30624 = (state_30623[(1)]);
if((state_val_30624 === (2))){
var inst_30619 = (state_30623[(2)]);
var inst_30620 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30621 = on_cssload.call(null,inst_30620);
var state_30623__$1 = (function (){var statearr_30625 = state_30623;
(statearr_30625[(7)] = inst_30619);

return statearr_30625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30623__$1,inst_30621);
} else {
if((state_val_30624 === (1))){
var inst_30617 = cljs.core.async.timeout.call(null,(100));
var state_30623__$1 = state_30623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30623__$1,(2),inst_30617);
} else {
return null;
}
}
});})(c__18619__auto__,map__30612,map__30612__$1,opts,on_cssload))
;
return ((function (switch__18563__auto__,c__18619__auto__,map__30612,map__30612__$1,opts,on_cssload){
return (function() {
var state_machine__18564__auto__ = null;
var state_machine__18564__auto____0 = (function (){
var statearr_30629 = [null,null,null,null,null,null,null,null];
(statearr_30629[(0)] = state_machine__18564__auto__);

(statearr_30629[(1)] = (1));

return statearr_30629;
});
var state_machine__18564__auto____1 = (function (state_30623){
while(true){
var ret_value__18565__auto__ = (function (){try{while(true){
var result__18566__auto__ = switch__18563__auto__.call(null,state_30623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18566__auto__;
}
break;
}
}catch (e30630){if((e30630 instanceof Object)){
var ex__18567__auto__ = e30630;
var statearr_30631_30654 = state_30623;
(statearr_30631_30654[(5)] = ex__18567__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30655 = state_30623;
state_30623 = G__30655;
continue;
} else {
return ret_value__18565__auto__;
}
break;
}
});
state_machine__18564__auto__ = function(state_30623){
switch(arguments.length){
case 0:
return state_machine__18564__auto____0.call(this);
case 1:
return state_machine__18564__auto____1.call(this,state_30623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18564__auto____0;
state_machine__18564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18564__auto____1;
return state_machine__18564__auto__;
})()
;})(switch__18563__auto__,c__18619__auto__,map__30612,map__30612__$1,opts,on_cssload))
})();
var state__18621__auto__ = (function (){var statearr_30632 = f__18620__auto__.call(null);
(statearr_30632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18619__auto__);

return statearr_30632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18621__auto__);
});})(c__18619__auto__,map__30612,map__30612__$1,opts,on_cssload))
);

return c__18619__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1429167308647