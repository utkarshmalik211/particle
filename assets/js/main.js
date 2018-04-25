document.addEventListener("DOMContentLoaded", function() {
    new SweetScroll( {} );
    particlesJS("particles-js", {
        particles: {
            number: {
                value:45, density: {
                    enable: !0, value_area: 800
                }
            }
            , color: {
                value: "#ffffff"
            }
            , shape: {
                type:"polygon", stroke: {
                    width: 0, color: "#000000"
                }
                , polygon: {
                    nb_sides: 5
                }
                , image: {
                    src: "img/github.svg", width: 100, height: 100
                }
            }
            , opacity: {
                value:.5, random:!1, anim: {
                    enable: !1, speed: 1, opacity_min: .1, sync: !1
                }
            }
            , size: {
                value:3, random:!0, anim: {
                    enable: !1, speed: 25, size_min: .1, sync: !1
                }
            }
            , line_linked: {
                enable: !0, distance: 150, color: "#ffffff", opacity: .4, width: 1
            }
            , move: {
                enable:!0, speed:4, direction:"none", random:!0, straight:!1, out_mode:"out", bounce:!1, attract: {
                    enable: !1, rotateX: 600, rotateY: 1200
                }
            }
            , nb:80
        }
        , interactivity: {
            detect_on:"window", events: {
                onhover: {
                    enable: !1, mode: "grab"
                }
                , onclick: {
                    enable: !1, mode: "push"
                }
                , resize:!0
            }
            , modes: {
                grab: {
                    distance:400, line_linked: {
                        opacity: 1
                    }
                }
                , bubble: {
                    distance: 400, size: 40, duration: 2, opacity: 8, speed: 3
                }
                , repulse: {
                    distance: 200, duration: .4
                }
                , push: {
                    particles_nb: 4
                }
                , remove: {
                    particles_nb: 2
                }
            }
        }
        , retina_detect:!0
    }
    )
var canvas = document.getElementById("particles-js");
var ctx = canvas.getContext("2d");
var _lt = Date.now();

var pen = {
  w:window.innerWidth,
  h:window.innerHeight
}

var circle = {
  visible: false,
  k: -10,
  b: -1,
  mass: 0.2,
  radius: 1,
  x: window.innerWidth/2,
  y: 0,
  vx: 0,
  vy: 0
}

var target = {
  x: pen.w/2 - circle.radius,
  y: pen.h/2 - circle.radius
}


function raf() {
  var now = Date.now();
  var dt = now - _lt;
  if(dt>100) dt = 0;
  _lt = now;
  ctx.clearRect(0,0,pen.w,pen.h);
  var spring_x = circle.k * ( (circle.x - target.x));
  var damper_x = circle.b * ( circle.vx );
  circle.ax = ( spring_x + damper_x ) / circle.mass;
  circle.vx += circle.ax * (dt/1000);
  circle.vx = Math.floor(circle.vx);
  circle.x += circle.vx * (dt/1000);
  var spring_y = circle.k * ( (circle.y - target.y));
  var damper_y = circle.b * ( circle.vy );
  circle.ay = ( spring_y + damper_y ) / circle.mass;
  circle.vy += circle.ay * (dt/1000);
  circle.vy = Math.floor(circle.vy);
  circle.y += circle.vy * (dt/1000);
  if(circle.visible){
    ang = Math.min(Math.max(circle.vx/10,-90),90)
    ang = ang + Math.min(Math.max(-circle.vy/10,-90),90)
    drawRotateImage(cursor, Math.floor(circle.x+5), Math.floor(circle.y+8),ang);
  }
  requestAnimationFrame(raf);
}

document.addEventListener("mousemove", function(e){
  if ( !circle.visible ){
    circle.visible = true
    circle.vx = 0
    circle.ax = 0
    circle.vy = 0
    circle.ay = 0
    circle.x = e.pageX - circle.radius;
    circle.y = e.pageY - circle.radius;
  }
  target.x = e.pageX - circle.radius;
  target.y = e.pageY - circle.radius;
})
var cursor = new Image();
cursor.onload = function() {
    resize();
    raf();
};




cursor.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAAUdEVYdENyZWF0aW9uIFRpbWUAOC83LzEwvsEqxgAAAe9JREFUOI2N081qE1EUB/Bz7teY3GEGRwYSELsQbBkLboTZFGaW4tZko4us8hozD+ADaBKMD2AK2eQBwmySbLIxCW6sIKEgQqMQQ9o6x02nTNU0OXC5m/O7By7/A57nca21JiKaz+c1y7IKnufxKIoQbivHcQwpZZmuajgcVkzTLG7FlmUVOOcPiYh83yciSnfCpmkWOef7REQAsDu+ggcZ3Bn/D+6EN8FNOI5j3ApvxdvgJrwTzOPxePzCtu07eZjmm/LNfx/DMO7+A33fp9ls9jHDrVbrS6/X+4CIrxDxGWPsiVLq3g2YTeh2u8fNZvMkP5UxdsQ5P5BSlrXWOp+clIhSRHyJiNXsIQCgdrv9aTKZvFZKudkSMMYYAcAFAABj7DkifkbEr0mSvK/X6ycAAI1G45Hruk+JCLXWl9VqNc22o8QYe8w535dSloUQDxhjR/mpRJQKIe47jmPEcYysVCpdGobxU0p5qpQ6LRaLZ0KIH4j4PUmSd4PBgIiIRqPRWwC4jpyoVCppp9NZL5fLc601ua5L0+k0XSwWZ2EYviGiYwAgRPwmhFgZhpHeCHsW4CiKMAgCZllWQSnlCiH2hBB72ccEQcAAAHgG+/3+9V2r1WC9Xv9erVbniPhLKbW0bXt1eHh4EYYh9ft9+ANDWHBBjehDcAAAAABJRU5ErkJggg==";

document.addEventListener("mouseout", function(e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == "HTML") {
        circle.visible = false
    }
});
function getAngle(p1x, p1y, p2x, p2y){
  return ( Math.atan2(p2y - p1y, p2x - p1x) * 180 / Math.PI )
}


function drawRotateImage(image, x, y, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle * Math.PI/180);
  ctx.drawImage(image, -(image.width/2), -(image.height/2));
  ctx.restore();
}

window.addEventListener("resize", resize);
function resize(){
  pen.w = window.innerWidth;
  pen.h = window.innerHeight;
  canvas.width = pen.w;
  setTimeout(function() { canvas.height = pen.h; }, 0);
}
  
}

, !1);
