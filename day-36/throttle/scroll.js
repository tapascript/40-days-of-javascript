  function throttle(fn, delay) {
      let lastCall = 0;
      return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
          lastCall = now;
          fn.apply(this, args);
        }
      };
    }


function handleScroll() {
    const scrollY = window.scrollY;
    document.getElementById("tracker").textContent = `Scroll Y: ${scrollY}`;
    console.log("Scroll event fired at", new Date().toLocaleTimeString());
}

const throttledScroll = throttle(handleScroll, 400);

window.addEventListener("scroll", throttledScroll);
