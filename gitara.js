/* Fallback for missing @property support in Firefox  */
if (!CSS.registerProperty) {
    const root = document.querySelector(':root');
    const c1 = root.querySelector('#c1');
    const c2 = root.querySelector('#c1');
    
    const zero = document.timeline.currentTime;
    
    function step (timeStamp) {
      const value = timeStamp - zero;
      
      root.style.setProperty('--a', `${(value / 10000 *360) % 360}deg`);
      c1.style.setProperty('--a', `${(value / 8000 *360) % 360}deg`);
      c2.style.setProperty('--a', `${(value / 6000 *360) % 360}deg`);
      
      requestAnimationFrame(step);
    }
    
    requestAnimationFrame(step);
  }