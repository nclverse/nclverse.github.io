// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29718_29726 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29719_29727 = null;
var count__29720_29728 = (0);
var i__29721_29729 = (0);
while(true){
if((i__29721_29729 < count__29720_29728)){
var k_29730 = cljs.core._nth.call(null,chunk__29719_29727,i__29721_29729);
e.setAttribute(cljs.core.name.call(null,k_29730),cljs.core.get.call(null,attrs,k_29730));

var G__29731 = seq__29718_29726;
var G__29732 = chunk__29719_29727;
var G__29733 = count__29720_29728;
var G__29734 = (i__29721_29729 + (1));
seq__29718_29726 = G__29731;
chunk__29719_29727 = G__29732;
count__29720_29728 = G__29733;
i__29721_29729 = G__29734;
continue;
} else {
var temp__4126__auto___29735 = cljs.core.seq.call(null,seq__29718_29726);
if(temp__4126__auto___29735){
var seq__29718_29736__$1 = temp__4126__auto___29735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29718_29736__$1)){
var c__16932__auto___29737 = cljs.core.chunk_first.call(null,seq__29718_29736__$1);
var G__29738 = cljs.core.chunk_rest.call(null,seq__29718_29736__$1);
var G__29739 = c__16932__auto___29737;
var G__29740 = cljs.core.count.call(null,c__16932__auto___29737);
var G__29741 = (0);
seq__29718_29726 = G__29738;
chunk__29719_29727 = G__29739;
count__29720_29728 = G__29740;
i__29721_29729 = G__29741;
continue;
} else {
var k_29742 = cljs.core.first.call(null,seq__29718_29736__$1);
e.setAttribute(cljs.core.name.call(null,k_29742),cljs.core.get.call(null,attrs,k_29742));

var G__29743 = cljs.core.next.call(null,seq__29718_29736__$1);
var G__29744 = null;
var G__29745 = (0);
var G__29746 = (0);
seq__29718_29726 = G__29743;
chunk__29719_29727 = G__29744;
count__29720_29728 = G__29745;
i__29721_29729 = G__29746;
continue;
}
} else {
}
}
break;
}

var seq__29722_29747 = cljs.core.seq.call(null,children);
var chunk__29723_29748 = null;
var count__29724_29749 = (0);
var i__29725_29750 = (0);
while(true){
if((i__29725_29750 < count__29724_29749)){
var ch_29751 = cljs.core._nth.call(null,chunk__29723_29748,i__29725_29750);
e.appendChild(ch_29751);

var G__29752 = seq__29722_29747;
var G__29753 = chunk__29723_29748;
var G__29754 = count__29724_29749;
var G__29755 = (i__29725_29750 + (1));
seq__29722_29747 = G__29752;
chunk__29723_29748 = G__29753;
count__29724_29749 = G__29754;
i__29725_29750 = G__29755;
continue;
} else {
var temp__4126__auto___29756 = cljs.core.seq.call(null,seq__29722_29747);
if(temp__4126__auto___29756){
var seq__29722_29757__$1 = temp__4126__auto___29756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29722_29757__$1)){
var c__16932__auto___29758 = cljs.core.chunk_first.call(null,seq__29722_29757__$1);
var G__29759 = cljs.core.chunk_rest.call(null,seq__29722_29757__$1);
var G__29760 = c__16932__auto___29758;
var G__29761 = cljs.core.count.call(null,c__16932__auto___29758);
var G__29762 = (0);
seq__29722_29747 = G__29759;
chunk__29723_29748 = G__29760;
count__29724_29749 = G__29761;
i__29725_29750 = G__29762;
continue;
} else {
var ch_29763 = cljs.core.first.call(null,seq__29722_29757__$1);
e.appendChild(ch_29763);

var G__29764 = cljs.core.next.call(null,seq__29722_29757__$1);
var G__29765 = null;
var G__29766 = (0);
var G__29767 = (0);
seq__29722_29747 = G__29764;
chunk__29723_29748 = G__29765;
count__29724_29749 = G__29766;
i__29725_29750 = G__29767;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__29768__i = 0, G__29768__a = new Array(arguments.length -  2);
while (G__29768__i < G__29768__a.length) {G__29768__a[G__29768__i] = arguments[G__29768__i + 2]; ++G__29768__i;}
  children = new cljs.core.IndexedSeq(G__29768__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__29769){
var t = cljs.core.first(arglist__29769);
arglist__29769 = cljs.core.next(arglist__29769);
var attrs = cljs.core.first(arglist__29769);
var children = cljs.core.rest(arglist__29769);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__,hierarchy__17046__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__,hierarchy__17046__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29770 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29770.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29770.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_29770.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29770);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__29771,st_map){
var map__29775 = p__29771;
var map__29775__$1 = ((cljs.core.seq_QMARK_.call(null,map__29775))?cljs.core.apply.call(null,cljs.core.hash_map,map__29775):map__29775);
var container_el = cljs.core.get.call(null,map__29775__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29775,map__29775__$1,container_el){
return (function (p__29776){
var vec__29777 = p__29776;
var k = cljs.core.nth.call(null,vec__29777,(0),null);
var v = cljs.core.nth.call(null,vec__29777,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29775,map__29775__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__29778,dom_str){
var map__29780 = p__29778;
var map__29780__$1 = ((cljs.core.seq_QMARK_.call(null,map__29780))?cljs.core.apply.call(null,cljs.core.hash_map,map__29780):map__29780);
var c = map__29780__$1;
var content_area_el = cljs.core.get.call(null,map__29780__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__29781){
var map__29783 = p__29781;
var map__29783__$1 = ((cljs.core.seq_QMARK_.call(null,map__29783))?cljs.core.apply.call(null,cljs.core.hash_map,map__29783):map__29783);
var content_area_el = cljs.core.get.call(null,map__29783__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__){
return (function (state_29825){
var state_val_29826 = (state_29825[(1)]);
if((state_val_29826 === (2))){
var inst_29810 = (state_29825[(7)]);
var inst_29819 = (state_29825[(2)]);
var inst_29820 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29821 = ["auto"];
var inst_29822 = cljs.core.PersistentHashMap.fromArrays(inst_29820,inst_29821);
var inst_29823 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29810,inst_29822);
var state_29825__$1 = (function (){var statearr_29827 = state_29825;
(statearr_29827[(8)] = inst_29819);

return statearr_29827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29825__$1,inst_29823);
} else {
if((state_val_29826 === (1))){
var inst_29810 = (state_29825[(7)]);
var inst_29810__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29811 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29812 = ["10px","10px","100%","68px","1.0"];
var inst_29813 = cljs.core.PersistentHashMap.fromArrays(inst_29811,inst_29812);
var inst_29814 = cljs.core.merge.call(null,inst_29813,style);
var inst_29815 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29810__$1,inst_29814);
var inst_29816 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29810__$1,msg);
var inst_29817 = cljs.core.async.timeout.call(null,(300));
var state_29825__$1 = (function (){var statearr_29828 = state_29825;
(statearr_29828[(9)] = inst_29816);

(statearr_29828[(10)] = inst_29815);

(statearr_29828[(7)] = inst_29810__$1);

return statearr_29828;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29825__$1,(2),inst_29817);
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
var statearr_29832 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29832[(0)] = state_machine__18565__auto__);

(statearr_29832[(1)] = (1));

return statearr_29832;
});
var state_machine__18565__auto____1 = (function (state_29825){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_29825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e29833){if((e29833 instanceof Object)){
var ex__18568__auto__ = e29833;
var statearr_29834_29836 = state_29825;
(statearr_29834_29836[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29837 = state_29825;
state_29825 = G__29837;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_29825){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_29825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__))
})();
var state__18622__auto__ = (function (){var statearr_29835 = f__18621__auto__.call(null);
(statearr_29835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_29835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__))
);

return c__18620__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__29839 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__29839,(0),null);
var ln = cljs.core.nth.call(null,vec__29839,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__29842 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__29842,(0),null);
var file_line = cljs.core.nth.call(null,vec__29842,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29842,file_name,file_line){
return (function (p1__29840_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__29840_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__29842,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__29844 = figwheel.client.heads_up.ensure_container.call(null);
var map__29844__$1 = ((cljs.core.seq_QMARK_.call(null,map__29844))?cljs.core.apply.call(null,cljs.core.hash_map,map__29844):map__29844);
var content_area_el = cljs.core.get.call(null,map__29844__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__){
return (function (state_29891){
var state_val_29892 = (state_29891[(1)]);
if((state_val_29892 === (3))){
var inst_29874 = (state_29891[(7)]);
var inst_29888 = (state_29891[(2)]);
var inst_29889 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29874,"");
var state_29891__$1 = (function (){var statearr_29893 = state_29891;
(statearr_29893[(8)] = inst_29888);

return statearr_29893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29891__$1,inst_29889);
} else {
if((state_val_29892 === (2))){
var inst_29874 = (state_29891[(7)]);
var inst_29881 = (state_29891[(2)]);
var inst_29882 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29883 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29884 = cljs.core.PersistentHashMap.fromArrays(inst_29882,inst_29883);
var inst_29885 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29874,inst_29884);
var inst_29886 = cljs.core.async.timeout.call(null,(200));
var state_29891__$1 = (function (){var statearr_29894 = state_29891;
(statearr_29894[(9)] = inst_29885);

(statearr_29894[(10)] = inst_29881);

return statearr_29894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29891__$1,(3),inst_29886);
} else {
if((state_val_29892 === (1))){
var inst_29874 = (state_29891[(7)]);
var inst_29874__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29875 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29876 = ["0.0"];
var inst_29877 = cljs.core.PersistentHashMap.fromArrays(inst_29875,inst_29876);
var inst_29878 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29874__$1,inst_29877);
var inst_29879 = cljs.core.async.timeout.call(null,(300));
var state_29891__$1 = (function (){var statearr_29895 = state_29891;
(statearr_29895[(11)] = inst_29878);

(statearr_29895[(7)] = inst_29874__$1);

return statearr_29895;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29891__$1,(2),inst_29879);
} else {
return null;
}
}
}
});})(c__18620__auto__))
;
return ((function (switch__18564__auto__,c__18620__auto__){
return (function() {
var state_machine__18565__auto__ = null;
var state_machine__18565__auto____0 = (function (){
var statearr_29899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29899[(0)] = state_machine__18565__auto__);

(statearr_29899[(1)] = (1));

return statearr_29899;
});
var state_machine__18565__auto____1 = (function (state_29891){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_29891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e29900){if((e29900 instanceof Object)){
var ex__18568__auto__ = e29900;
var statearr_29901_29903 = state_29891;
(statearr_29901_29903[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29904 = state_29891;
state_29891 = G__29904;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_29891){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_29891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__))
})();
var state__18622__auto__ = (function (){var statearr_29902 = f__18621__auto__.call(null);
(statearr_29902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_29902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__))
);

return c__18620__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__18620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18620__auto__){
return (function (){
var f__18621__auto__ = (function (){var switch__18564__auto__ = ((function (c__18620__auto__){
return (function (state_29936){
var state_val_29937 = (state_29936[(1)]);
if((state_val_29937 === (4))){
var inst_29934 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29936__$1,inst_29934);
} else {
if((state_val_29937 === (3))){
var inst_29931 = (state_29936[(2)]);
var inst_29932 = figwheel.client.heads_up.clear.call(null);
var state_29936__$1 = (function (){var statearr_29938 = state_29936;
(statearr_29938[(7)] = inst_29931);

return statearr_29938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29936__$1,(4),inst_29932);
} else {
if((state_val_29937 === (2))){
var inst_29928 = (state_29936[(2)]);
var inst_29929 = cljs.core.async.timeout.call(null,(400));
var state_29936__$1 = (function (){var statearr_29939 = state_29936;
(statearr_29939[(8)] = inst_29928);

return statearr_29939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29936__$1,(3),inst_29929);
} else {
if((state_val_29937 === (1))){
var inst_29926 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29936__$1 = state_29936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29936__$1,(2),inst_29926);
} else {
return null;
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
var statearr_29943 = [null,null,null,null,null,null,null,null,null];
(statearr_29943[(0)] = state_machine__18565__auto__);

(statearr_29943[(1)] = (1));

return statearr_29943;
});
var state_machine__18565__auto____1 = (function (state_29936){
while(true){
var ret_value__18566__auto__ = (function (){try{while(true){
var result__18567__auto__ = switch__18564__auto__.call(null,state_29936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18567__auto__;
}
break;
}
}catch (e29944){if((e29944 instanceof Object)){
var ex__18568__auto__ = e29944;
var statearr_29945_29947 = state_29936;
(statearr_29945_29947[(5)] = ex__18568__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29948 = state_29936;
state_29936 = G__29948;
continue;
} else {
return ret_value__18566__auto__;
}
break;
}
});
state_machine__18565__auto__ = function(state_29936){
switch(arguments.length){
case 0:
return state_machine__18565__auto____0.call(this);
case 1:
return state_machine__18565__auto____1.call(this,state_29936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18565__auto____0;
state_machine__18565__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18565__auto____1;
return state_machine__18565__auto__;
})()
;})(switch__18564__auto__,c__18620__auto__))
})();
var state__18622__auto__ = (function (){var statearr_29946 = f__18621__auto__.call(null);
(statearr_29946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18620__auto__);

return statearr_29946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18622__auto__);
});})(c__18620__auto__))
);

return c__18620__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1427852717434