(ns main-page.core
    (:require))

(enable-console-print!)

(defn debug[& el]
  (set! (.-innerHTML (.getElementById js/document "debug")) (apply str el)))

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
light "#99424E"
strobe "#491B3A"
rest "#060117"]
(add-stop grad 0 light)
(add-stop grad 0.5 strobe)
(add-stop grad 1 rest) grad))

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

(defn clock [] (.now js/Date))

(def PI (.-PI js/Math))

(defn sin-wave [x m n] (offset (/ (+ (.sin js/Math x) 1) 2) m n))

(defn timed-sinewave [m n time amplitude]
  (let [offset-time #(sin-wave (- (* 3 (/ PI 2) %)) m n)]
    (offset-time (/ time amplitude))))

(defn gen [count x] (take count (repeatedly #(random 0 x))))

(defn generate-coords [ctx count]
  (let [width (getWidth ctx)
        height (getHeight ctx)
        gen (partial gen count)]
    (map (fn [x y] {:x x :y y}) (gen width) (gen height))))

(defn clamp [val x y]
  (cond
   (< val x) val
   (<= x val y) val
   :else y))

(defn locate [time els amplitude] (.ceil js/Math (rem (/ time amplitude) (* els amplitude))))

(defn starfield [ctx time coords amp r0 r1]
  (let [amount (count coords)
        amplitude (* amp 1000)
        selected (locate time amount amplitude)
        sine #(timed-sinewave r0 r1 (+ time (* % 100)) amplitude)]
    ;(debug "Time: " (.toFixed time 2) "Selection: " selected "Sine: " (.toFixed sine 2))
    (doall (map-indexed
            (fn [idx itm]
              (draw-star ctx (:x itm) (:y itm)
                         (if (<= 0 (- idx selected) 10) (sine idx) r0)
                           "white")) coords))))

;(starfield drawboard 600 0.8)

(def coords (generate-coords drawboard 600))

(defn x [time] (clearRect drawboard)


;(set! (.-globalCompositeOperation drawboard) "overlay")

(set-fill-style drawboard (night-sky))

(fillRect drawboard)

(starfield drawboard time coords 4 0.25 5)

 ;(.requestAnimationFrame js/window x)
)


(x 0)
