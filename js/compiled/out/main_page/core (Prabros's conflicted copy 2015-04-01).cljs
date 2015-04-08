(ns main-page.core
    (:require))

(enable-console-print!)

(defn ctx [canvasId]
(.getContext (.getElementById js/document canvasId) "2d"))

(defn getWidth [ctx] (.-width (.-canvas ctx)))
(defn getHeight [ctx] (.-height (.-canvas ctx)))

(defn percent->px [percent val]
  (* (/ percent 100) val))

(defn radial-gradient [ctx x0 y0 r0 x1 y1 r1]
  (let [width (getWidth ctx)
        height (getHeight ctx)
        x0 (percent->px x0 width)
        x1 (percent->px x1 width)
        r0 (percent->px r0 width)
        r1 (percent->px r1 width)
        y0 (percent->px y0 height)
        y1 (percent->px y1 height)]
    (.createRadialGradient ctx x0 y0 r0 x1 y1 r1)))

(defn add-stop [grd loc color]
(.addColorStop grd loc color))

(defn set-fill-style [ctx style]
(set! (. ctx -fillStyle) style))

(defn fillRect ([ctx]
  (.fillRect ctx 0 0 (.-width (.-canvas ctx))
             (.-height (.-canvas ctx))))
  ([ctx x y w h]
  (.fillRect ctx x y w h)))

(defn clearRect ([ctx]
  (.clearRect ctx 0 0 (.-width (.-canvas ctx))
             (.-height (.-canvas ctx)))))

(defn fillWindow [ctx]
  (set! (.-width (.-canvas ctx)) (.-innerWidth js/window))
  (set! (.-height (.-canvas ctx)) (.-innerHeight js/window)))

(def canvasId "universe")

(def drawboard (ctx canvasId))

(clearRect drawboard)

;(println radial-gradient)

(fillWindow drawboard)

(defn night-sky []
  (let [grad (radial-gradient drawboard 50 110 10 50 80 50)
 light "#934F51"
strobe "#46243B"
darkness "#040317"]
(add-stop grad 0 light)
(add-stop grad 0.5 strobe)
(add-stop grad 1 darkness) grad))

(defn draw-star [ctx x y radius color]
  (set-fill-style ctx color)
  (.beginPath ctx)
  (.arc ctx x y radius 0 (* (.-PI js/Math) 2) true)
  (.closePath ctx)
  (.fill ctx))
  
(defn offset
  "Takes a value between [0,1) and maps it to [m,n)"
  [val m n] (+ (* val (- n m)) m))

(defn random [m n] (offset (.random js/Math) m n))

(defn starfield [ctx count radius]
  (let [width (getWidth ctx)
        height (getHeight ctx)
        x-locs (take count (repeatedly #(random 0 width)))
        y-locs (take count (repeatedly #(random 0 height)))
        radii (take count (repeatedly #(random 0 radius)))]
    (doall (map #(draw-star ctx %1 %2 %3 "white") x-locs y-locs radii))))

;(starfield drawboard 600 0.8)

(defn clock [] (.now js/Date))

(defn sin-wave [x m n]
  (offset (/ (+ (.sin js/Math x) 1) 2) m n))

(defn x []
(clearRect drawboard)
(set-fill-style drawboard (night-sky))
(fillRect drawboard)
(draw-star drawboard 300 300 (sin-wave (/ (clock) 1000) 0.2 0.5) "white")
  (.requestAnimationFrame js/window x))

(x)
