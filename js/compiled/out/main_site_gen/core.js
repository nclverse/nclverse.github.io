// Compiled by ClojureScript 0.0-2850 {}
goog.provide('main_site_gen.core');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
main_site_gen.core.debug = (function() { 
var debug__delegate = function (el){
return document.getElementById("debug").innerHTML = cljs.core.apply.call(null,cljs.core.str,el);
};
var debug = function (var_args){
var el = null;
if (arguments.length > 0) {
var G__4827__i = 0, G__4827__a = new Array(arguments.length -  0);
while (G__4827__i < G__4827__a.length) {G__4827__a[G__4827__i] = arguments[G__4827__i + 0]; ++G__4827__i;}
  el = new cljs.core.IndexedSeq(G__4827__a,0);
} 
return debug__delegate.call(this,el);};
debug.cljs$lang$maxFixedArity = 0;
debug.cljs$lang$applyTo = (function (arglist__4828){
var el = cljs.core.seq(arglist__4828);
return debug__delegate(el);
});
debug.cljs$core$IFn$_invoke$arity$variadic = debug__delegate;
return debug;
})()
;
main_site_gen.core.ctx = (function ctx(canvasId){
return document.getElementById(canvasId).getContext("2d");
});
main_site_gen.core.getWidth = (function getWidth(ctx){
return ctx.canvas.width;
});
main_site_gen.core.getHeight = (function getHeight(ctx){
return ctx.canvas.height;
});
main_site_gen.core.percent__GT_px = (function percent__GT_px(percent,val){
return ((percent / (100)) * val);
});
main_site_gen.core.radial_gradient = (function radial_gradient(ctx,x0,y0,r0,x1,y1,r1){
var width = main_site_gen.core.getWidth.call(null,ctx);
var height = main_site_gen.core.getHeight.call(null,ctx);
var x0__$1 = main_site_gen.core.percent__GT_px.call(null,x0,width);
var x1__$1 = main_site_gen.core.percent__GT_px.call(null,x1,width);
var r0__$1 = main_site_gen.core.percent__GT_px.call(null,r0,width);
var r1__$1 = main_site_gen.core.percent__GT_px.call(null,r1,width);
var y0__$1 = main_site_gen.core.percent__GT_px.call(null,y0,height);
var y1__$1 = main_site_gen.core.percent__GT_px.call(null,y1,height);
return ctx.createRadialGradient(x0__$1,y0__$1,r0__$1,x1__$1,y1__$1,r1__$1);
});
main_site_gen.core.add_stop = (function add_stop(grd,loc,color){
return grd.addColorStop(loc,color);
});
main_site_gen.core.set_fill_style = (function set_fill_style(ctx,style){
return ctx.fillStyle = style;
});
main_site_gen.core.fillRect = (function() {
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
main_site_gen.core.clearRect = (function clearRect(ctx){
return ctx.clearRect((0),(0),ctx.canvas.width,ctx.canvas.height);
});
main_site_gen.core.fillWindow = (function fillWindow(ctx){
ctx.canvas.width = window.innerWidth;

return ctx.canvas.height = window.innerHeight;
});
main_site_gen.core.canvasId = "universe";
main_site_gen.core.drawboard = main_site_gen.core.ctx.call(null,main_site_gen.core.canvasId);
main_site_gen.core.clearRect.call(null,main_site_gen.core.drawboard);
main_site_gen.core.fillWindow.call(null,main_site_gen.core.drawboard);
main_site_gen.core.night_sky = (function night_sky(){
var grad = main_site_gen.core.radial_gradient.call(null,main_site_gen.core.drawboard,(50),(110),(10),(50),(80),(50));
var light = "#99424E";
var strobe = "#491B3A";
var rest = "#060117";
main_site_gen.core.add_stop.call(null,grad,(0),light);

main_site_gen.core.add_stop.call(null,grad,0.5,strobe);

main_site_gen.core.add_stop.call(null,grad,(1),rest);

return grad;
});
main_site_gen.core.draw_star = (function draw_star(ctx,x,y,radius,color){
main_site_gen.core.set_fill_style.call(null,ctx,color);

ctx.beginPath();

ctx.arc(x,y,radius,(0),(Math.PI * (2)),true);

ctx.closePath();

return ctx.fill();
});
/**
* Takes a value between [0,1) and maps it to [m,n)
*/
main_site_gen.core.offset = (function offset(val,m,n){
return ((val * (n - m)) + m);
});
main_site_gen.core.random = (function random(m,n){
return main_site_gen.core.offset.call(null,Math.random(),m,n);
});
main_site_gen.core.clock = (function clock(){
return Date.now();
});
main_site_gen.core.PI = Math.PI;
main_site_gen.core.sin_wave = (function sin_wave(x,m,n){
return main_site_gen.core.offset.call(null,((Math.sin(x) + (1)) / (2)),m,n);
});
main_site_gen.core.timed_sinewave = (function timed_sinewave(m,n,time,amplitude){
var offset_time = (function (p1__4829_SHARP_){
return main_site_gen.core.sin_wave.call(null,(- (((3) * (main_site_gen.core.PI / (2))) * p1__4829_SHARP_)),m,n);
});
return offset_time.call(null,(time / amplitude));
});
main_site_gen.core.gen = (function gen(count,x){
return cljs.core.take.call(null,count,cljs.core.repeatedly.call(null,(function (){
return main_site_gen.core.random.call(null,(0),x);
})));
});
main_site_gen.core.generate_coords = (function generate_coords(ctx,count){
var width = main_site_gen.core.getWidth.call(null,ctx);
var height = main_site_gen.core.getHeight.call(null,ctx);
var gen = cljs.core.partial.call(null,main_site_gen.core.gen,count);
return cljs.core.map.call(null,((function (width,height,gen){
return (function (x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});})(width,height,gen))
,gen.call(null,width),gen.call(null,height));
});
main_site_gen.core.clamp = (function clamp(val,x,y){
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
main_site_gen.core.locate = (function locate(time,els,amplitude){
return Math.ceil(cljs.core.rem.call(null,(time / amplitude),(els * amplitude)));
});
main_site_gen.core.starfield = (function starfield(ctx,time,coords,amp,r0,r1){
var amount = cljs.core.count.call(null,coords);
var amplitude = (amp * (1000));
var selected = main_site_gen.core.locate.call(null,time,amount,amplitude);
var sine = ((function (amount,amplitude,selected){
return (function (p1__4830_SHARP_){
return main_site_gen.core.timed_sinewave.call(null,r0,r1,(time + (p1__4830_SHARP_ * (100))),amplitude);
});})(amount,amplitude,selected))
;
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (amount,amplitude,selected,sine){
return (function (idx,itm){
return main_site_gen.core.draw_star.call(null,ctx,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(itm),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(itm),(((((0) <= (idx - selected))) && (((idx - selected) <= (10))))?sine.call(null,idx):r0),"white");
});})(amount,amplitude,selected,sine))
,coords));
});
main_site_gen.core.coords = main_site_gen.core.generate_coords.call(null,main_site_gen.core.drawboard,(600));
main_site_gen.core.x = (function x(time){
main_site_gen.core.clearRect.call(null,main_site_gen.core.drawboard);

main_site_gen.core.set_fill_style.call(null,main_site_gen.core.drawboard,main_site_gen.core.night_sky.call(null));

main_site_gen.core.fillRect.call(null,main_site_gen.core.drawboard);

return main_site_gen.core.starfield.call(null,main_site_gen.core.drawboard,time,main_site_gen.core.coords,(4),0.3,(5));
});
main_site_gen.core.x.call(null,(0));

//# sourceMappingURL=core.js.map?rel=1430778962331