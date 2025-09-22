// Robust loader: unpause animations and dynamically load optional scripts from /js/
// Place this file in the repo root (index.html expects "main.js").
(function () {
  'use strict';

  // Remove the "not-loaded" class to allow animations to run.
  function unpauseAnimations() {
    if (document && document.body && document.body.classList.contains('not-loaded')) {
      document.body.classList.remove('not-loaded');
      console.info('[main.js] Removed .not-loaded — animations allowed to run');
    }
  }

  // Promise-based script loader
  function loadScript(src, { async = true, timeout = 8000 } = {}) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      let timer = null;
      s.src = src;
      s.async = async;

      s.onload = () => {
        clearTimeout(timer);
        console.info(`[main.js] Loaded: ${src}`);
        resolve(src);
      };

      s.onerror = (err) => {
        clearTimeout(timer);
        console.error(`[main.js] Failed to load: ${src}`, err);
        reject(new Error(`Failed to load ${src}`));
      };

      // safety timeout in case the script never finishes
      timer = setTimeout(() => {
        s.onload = s.onerror = null;
        console.warn(`[main.js] Loading timed out: ${src}`);
        // Remove element (if attached) and reject
        if (s.parentNode) s.parentNode.removeChild(s);
        reject(new Error(`Timeout loading ${src}`));
      }, timeout);

      // append to body so scripts execute after DOM
      document.body.appendChild(s);
    });
  }

  // Load the optional scripts you keep in js/ folder.
  // Adjust this list if you add/remove files.
  const optionalScripts = [
    'js/particles.js',
    'js/blog.js',
    'js/projects.js',
    'js/skills.js'
  ];

  // On DOMContentLoaded/unload guard
  function init() {
    // Unpause immediately so users see something — main purpose is animations
    unpauseAnimations();

    // Also guarantee removal after a short delay even if scripts blocked
    const fallbackTimer = setTimeout(() => {
      unpauseAnimations();
      console.warn('[main.js] Fallback unpause triggered after timeout');
    }, 3000);

    // Try to load optional scripts in parallel, but tolerate failures
    Promise.allSettled(optionalScripts.map(src => loadScript(src).catch(err => { throw { src, err }; })))
      .then(results => {
        clearTimeout(fallbackTimer);
        results.forEach((r, i) => {
          if (r.status === 'fulfilled') {
            console.info(`[main.js] Script loaded: ${optionalScripts[i]}`);
          } else {
            console.warn(`[main.js] Script failed: ${optionalScripts[i]}`, r.reason);
          }
        });
      })
      .catch(err => {
        // This branch shouldn't be reached often because allSettled handles per-script failures,
        // but keep a defensive fallback.
        console.error('[main.js] Unexpected loader error', err);
      })
      .finally(() => {
        // Ensure animations are running
        unpauseAnimations();
      });
  }

  // Prefer 'load' so images/backgrounds are ready, but also run on DOMContentLoaded as a fallback
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init, { once: true });
    // In case 'load' never fires, also listen to DOMContentLoaded
    window.addEventListener('DOMContentLoaded', () => {
      // small delay so CSS/initial layout is ready
      setTimeout(init, 100);
    }, { once: true });
  }
})();
