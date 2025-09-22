// Smooth Scroll Effect for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
});

// GSAP Animations (Scroll-triggered)
gsap.registerPlugin(ScrollTrigger);

gsap.from("#about p", {opacity:0, y:50, duration:1, scrollTrigger:{trigger:"#about", start:"top 80%"}});
gsap.from("#goals .card", {opacity:0, y:50, stagger:0.2, duration:1, scrollTrigger:{trigger:"#goals", start:"top 80%"}});
gsap.from("#philosophy ul li", {opacity:0, x:-50, stagger:0.2, duration:1, scrollTrigger:{trigger:"#philosophy", start:"top 80%"}});
gsap.from("#contact p, #contact a", {opacity:0, y:30, stagger:0.2, duration:1, scrollTrigger:{trigger:"#contact", start:"top 90%"}});

// Modal functionality
const modal = document.getElementById('achievementModal');
const btn = document.getElementById('achievementBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = () => modal.style.display = 'flex';
span.onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; }
