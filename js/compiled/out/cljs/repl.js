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
var seq__29960_29964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29961_29965 = null;
var count__29962_29966 = (0);
var i__29963_29967 = (0);
while(true){
if((i__29963_29967 < count__29962_29966)){
var f_29968 = cljs.core._nth.call(null,chunk__29961_29965,i__29963_29967);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_29968);

var G__29969 = seq__29960_29964;
var G__29970 = chunk__29961_29965;
var G__29971 = count__29962_29966;
var G__29972 = (i__29963_29967 + (1));
seq__29960_29964 = G__29969;
chunk__29961_29965 = G__29970;
count__29962_29966 = G__29971;
i__29963_29967 = G__29972;
continue;
} else {
var temp__4126__auto___29973 = cljs.core.seq.call(null,seq__29960_29964);
if(temp__4126__auto___29973){
var seq__29960_29974__$1 = temp__4126__auto___29973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29960_29974__$1)){
var c__16932__auto___29975 = cljs.core.chunk_first.call(null,seq__29960_29974__$1);
var G__29976 = cljs.core.chunk_rest.call(null,seq__29960_29974__$1);
var G__29977 = c__16932__auto___29975;
var G__29978 = cljs.core.count.call(null,c__16932__auto___29975);
var G__29979 = (0);
seq__29960_29964 = G__29976;
chunk__29961_29965 = G__29977;
count__29962_29966 = G__29978;
i__29963_29967 = G__29979;
continue;
} else {
var f_29980 = cljs.core.first.call(null,seq__29960_29974__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_29980);

var G__29981 = cljs.core.next.call(null,seq__29960_29974__$1);
var G__29982 = null;
var G__29983 = (0);
var G__29984 = (0);
seq__29960_29964 = G__29981;
chunk__29961_29965 = G__29982;
count__29962_29966 = G__29983;
i__29963_29967 = G__29984;
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

//# sourceMappingURL=repl.js.map?rel=1429167307425