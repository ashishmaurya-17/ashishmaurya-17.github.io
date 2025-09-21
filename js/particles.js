/* Using particles.js library */
particlesJS('particles-js', {
  "particles": {
    "number": {"value": 120, "density": {"enable": true, "value_area": 800}},
    "color": {"value": ["#ff0080","#00ffcc"]},
    "shape": {"type": "circle"},
    "opacity": {"value": 0.7, "random": true},
    "size": {"value": 3, "random": true},
    "line_linked": {"enable": true, "distance": 150, "color": "#00ffcc", "opacity": 0.3, "width": 1},
    "move": {"enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "bounce": false}
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {"enable": true, "mode": "grab"},
      "onclick": {"enable": true, "mode": "push"}
    },
    "modes": {
      "grab": {"distance": 140, "line_linked": {"opacity": 0.5}},
      "push": {"particles_nb": 4}
    }
  },
  "retina_detect": true
});
