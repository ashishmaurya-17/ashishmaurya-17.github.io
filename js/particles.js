/* Using particles.js library */
particlesJS('particles-js', {
  "particles": {
    "number": {"value": 150, "density": {"enable": true, "value_area": 800}},
    "color": {"value": "#ffffff"},
    "shape": {"type": "circle"},
    "opacity": {"value": 0.8, "random": true, "anim": {"enable": true, "speed": 1, "opacity_min": 0.1, "sync": false}},
    "size": {"value": 2.5, "random": true, "anim": {"enable": true, "speed": 2, "size_min": 0.5, "sync": false}},
    "line_linked": {"enable": false},
    "move": {"enable": true, "speed": 1, "direction": "top", "random": true, "straight": false, "out_mode": "out", "bounce": false}
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {"enable": true, "mode": "bubble"},
      "onclick": {"enable": true, "mode": "push"}
    },
    "modes": {
      "bubble": {"distance": 200, "size": 6, "duration": 2},
      "push": {"particles_nb": 4}
    }
  },
  "retina_detect": true
});
