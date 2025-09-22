// Flower Base Animation on Scroll
gsap.registerPlugin(ScrollTrigger);

const flowerBase = document.getElementById('flower-base');

gsap.to(flowerBase, {
  scale: 2, // Grow to 2 times its original size
  opacity: 1, // Full opacity
  scrollTrigger: {
    trigger: "#about", // Start animating when the #about section is visible
    start: "top 80%", // The animation starts when the top of #about is 80% from the top of the viewport
    end: "bottom 20%", // The animation ends when the bottom of #about is 20% from the bottom of the viewport
    scrub: true, // This links the animation progress to the scroll position
    markers: false // Set to true for debugging markers on the page
  }
});
