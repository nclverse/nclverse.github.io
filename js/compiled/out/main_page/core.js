// Compiled by ClojureScript 0.0-2850 {}
goog.provide('main_page.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
* @param {...*} var_args
*/
main_page.core.debug = (function() { 
var debug__delegate = function (el){
return document.getElementById("debug").innerHTML = cljs.core.apply.call(null,cljs.core.str,el);
};
var debug = function (var_args){
var el = null;
if (arguments.length > 0) {
var G__18525__i = 0, G__18525__a = new Array(arguments.length -  0);
while (G__18525__i < G__18525__a.length) {G__18525__a[G__18525__i] = arguments[G__18525__i + 0]; ++G__18525__i;}
  el = new cljs.core.IndexedSeq(G__18525__a,0);
} 
return debug__delegate.call(this,el);};
debug.cljs$lang$maxFixedArity = 0;
debug.cljs$lang$applyTo = (function (arglist__18526){
var el = cljs.core.seq(arglist__18526);
return debug__delegate(el);
});
debug.cljs$core$IFn$_invoke$arity$variadic = debug__delegate;
return debug;
})()
;
main_page.core.ctx = (function ctx(canvasId){
return document.getElementById(canvasId).getContext("2d");
});
main_page.core.getWidth = (function getWidth(ctx){
return ctx.canvas.width;
});
main_page.core.getHeight = (function getHeight(ctx){
return ctx.canvas.height;
});
main_page.core.percent__GT_px = (function percent__GT_px(percent,val){
return ((percent / (100)) * val);
});
main_page.core.radial_gradient = (function radial_gradient(ctx,x0,y0,r0,x1,y1,r1){
var width = main_page.core.getWidth.call(null,ctx);
var height = main_page.core.getHeight.call(null,ctx);
var x0__$1 = main_page.core.percent__GT_px.call(null,x0,width);
var x1__$1 = main_page.core.percent__GT_px.call(null,x1,width);
var r0__$1 = main_page.core.percent__GT_px.call(null,r0,width);
var r1__$1 = main_page.core.percent__GT_px.call(null,r1,width);
var y0__$1 = main_page.core.percent__GT_px.call(null,y0,height);
var y1__$1 = main_page.core.percent__GT_px.call(null,y1,height);
return ctx.createRadialGradient(x0__$1,y0__$1,r0__$1,x1__$1,y1__$1,r1__$1);
});
main_page.core.add_stop = (function add_stop(grd,loc,color){
return grd.addColorStop(loc,color);
});
main_page.core.set_fill_style = (function set_fill_style(ctx,style){
return ctx.fillStyle = style;
});
main_page.core.fillRect = (function() {
var fillRect = null;
var fillRect__1 = (function (ctx){
return ctx.fillRect((0),(0),ctx.canvas.width,ctx.canvas.height);
});
var fillRect__5 = (function (ctx,x,y,w,h){
return ctx.fillRect(x,y,w,h);
});
fillRect = function(ctx,x,y,w,h){
switch(arguments.length){
case 1:
return fillRect__1.call(this,ctx);
case 5:
return fillRect__5.call(this,ctx,x,y,w,h);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fillRect.cljs$core$IFn$_invoke$arity$1 = fillRect__1;
fillRect.cljs$core$IFn$_invoke$arity$5 = fillRect__5;
return fillRect;
})()
;
main_page.core.clearRect = (function clearRect(ctx){
return ctx.clearRect((0),(0),ctx.canvas.width,ctx.canvas.height);
});
main_page.core.fillWindow = (function fillWindow(ctx){
ctx.canvas.width = window.innerWidth;

return ctx.canvas.height = window.innerHeight;
});
main_page.core.canvasId = "universe";
main_page.core.drawboard = main_page.core.ctx.call(null,main_page.core.canvasId);
main_page.core.clearRect.call(null,main_page.core.drawboard);
main_page.core.fillWindow.call(null,main_page.core.drawboard);
main_page.core.night_sky = (function night_sky(){
var grad = main_page.core.radial_gradient.call(null,main_page.core.drawboard,(50),(110),(10),(50),(80),(50));
var light = "#99424E";
var strobe = "#491B3A";
var rest = "#060117";
main_page.core.add_stop.call(null,grad,(0),light);

main_page.core.add_stop.call(null,grad,0.5,strobe);

main_page.core.add_stop.call(null,grad,(1),rest);

return grad;
});
main_page.core.draw_star = (function draw_star(ctx,x,y,radius,color){
main_page.core.set_fill_style.call(null,ctx,color);

ctx.beginPath();

ctx.arc(x,y,radius,(0),(Math.PI * (2)),true);

ctx.closePath();

return ctx.fill();
});
/**
* Takes a value between [0,1) and maps it to [m,n)
*/
main_page.core.offset = (function offset(val,m,n){
return ((val * (n - m)) + m);
});
main_page.core.random = (function random(m,n){
return main_page.core.offset.call(null,Math.random(),m,n);
});
main_page.core.clock = (function clock(){
return Date.now();
});
main_page.core.PI = Math.PI;
main_page.core.sin_wave = (function sin_wave(x,m,n){
return main_page.core.offset.call(null,((Math.sin(x) + (1)) / (2)),m,n);
});
main_page.core.timed_sinewave = (function timed_sinewave(m,n,time,amplitude){
var offset_time = (function (p1__18527_SHARP_){
return main_page.core.sin_wave.call(null,(- (((3) * (main_page.core.PI / (2))) * p1__18527_SHARP_)),m,n);
});
return offset_time.call(null,(time / amplitude));
});
main_page.core.gen = (function gen(count,x){
return cljs.core.take.call(null,count,cljs.core.repeatedly.call(null,(function (){
return main_page.core.random.call(null,(0),x);
})));
});
main_page.core.generate_coords = (function generate_coords(ctx,count){
var width = main_page.core.getWidth.call(null,ctx);
var height = main_page.core.getHeight.call(null,ctx);
var gen = cljs.core.partial.call(null,main_page.core.gen,count);
return cljs.core.map.call(null,((function (width,height,gen){
return (function (x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});})(width,height,gen))
,gen.call(null,width),gen.call(null,height));
});
main_page.core.clamp = (function clamp(val,x,y){
if((val < x)){
return val;
} else {
if(((x <= val)) && ((val <= y))){
return val;
} else {
return y;

}
}
});
main_page.core.locate = (function locate(time,els,amplitude){
return Math.ceil(cljs.core.rem.call(null,(time / amplitude),(els * amplitude)));
});
main_page.core.starfield = (function starfield(ctx,time,coords,amp,r0,r1){
var amount = cljs.core.count.call(null,coords);
var amplitude = (amp * (1000));
var selected = main_page.core.locate.call(null,time,amount,amplitude);
var sine = ((function (amount,amplitude,selected){
return (function (p1__18528_SHARP_){
return main_page.core.timed_sinewave.call(null,r0,r1,(time + (p1__18528_SHARP_ * (100))),amplitude);
});})(amount,amplitude,selected))
;
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (amount,amplitude,selected,sine){
return (function (idx,itm){
return main_page.core.draw_star.call(null,ctx,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(itm),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(itm),(((((0) <= (idx - selected))) && (((idx - selected) <= (10))))?sine.call(null,idx):r0),"white");
});})(amount,amplitude,selected,sine))
,coords));
});
main_page.core.coords = main_page.core.generate_coords.call(null,main_page.core.drawboard,(600));
main_page.core.x = (function x(time){
main_page.core.clearRect.call(null,main_page.core.drawboard);

main_page.core.set_fill_style.call(null,main_page.core.drawboard,main_page.core.night_sky.call(null));

main_page.core.fillRect.call(null,main_page.core.drawboard);

return main_page.core.starfield.call(null,main_page.core.drawboard,time,main_page.core.coords,(4),0.25,(5));
});
main_page.core.x.call(null,(0));

//# sourceMappingURL=core.js.map?rel=1428526720629