/* particles.js config for Blossoming Flowers Night Effect */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": { "enable": true, "value_area": 1000 }
    },
    "color": { "value": ["#ff0080", "#ff66b2", "#ffffff", "#00ffcc"] }, // pink, light-pink, white, teal
    "shape": {
      "type": ["circle", "star"],
      "stroke": { "width": 0, "color": "#000" }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.2, "sync": false }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": { "enable": true, "speed": 2, "size_min": 1, "sync": false }
    },
    "line_linked": { "enable": false }, // no lines, looks cleaner
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": { "enable": false }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" }, // repel effect
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 100, "duration": 0.4 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
