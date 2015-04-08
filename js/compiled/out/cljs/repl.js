// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29955_29959 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29956_29960 = null;
var count__29957_29961 = (0);
var i__29958_29962 = (0);
while(true){
if((i__29958_29962 < count__29957_29961)){
var f_29963 = cljs.core._nth.call(null,chunk__29956_29960,i__29958_29962);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_29963);

var G__29964 = seq__29955_29959;
var G__29965 = chunk__29956_29960;
var G__29966 = count__29957_29961;
var G__29967 = (i__29958_29962 + (1));
seq__29955_29959 = G__29964;
chunk__29956_29960 = G__29965;
count__29957_29961 = G__29966;
i__29958_29962 = G__29967;
continue;
} else {
var temp__4126__auto___29968 = cljs.core.seq.call(null,seq__29955_29959);
if(temp__4126__auto___29968){
var seq__29955_29969__$1 = temp__4126__auto___29968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29955_29969__$1)){
var c__16932__auto___29970 = cljs.core.chunk_first.call(null,seq__29955_29969__$1);
var G__29971 = cljs.core.chunk_rest.call(null,seq__29955_29969__$1);
var G__29972 = c__16932__auto___29970;
var G__29973 = cljs.core.count.call(null,c__16932__auto___29970);
var G__29974 = (0);
seq__29955_29959 = G__29971;
chunk__29956_29960 = G__29972;
count__29957_29961 = G__29973;
i__29958_29962 = G__29974;
continue;
} else {
var f_29975 = cljs.core.first.call(null,seq__29955_29969__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_29975);

var G__29976 = cljs.core.next.call(null,seq__29955_29969__$1);
var G__29977 = null;
var G__29978 = (0);
var G__29979 = (0);
seq__29955_29959 = G__29976;
chunk__29956_29960 = G__29977;
count__29957_29961 = G__29978;
i__29958_29962 = G__29979;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
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

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1427852717502