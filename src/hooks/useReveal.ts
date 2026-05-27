import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function useCounter(target: number, ref: React.RefObject<HTMLElement | null>, duration = 1600) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target * eased;
            el.textContent = target % 1 === 0 ? Math.floor(val).toString() : val.toFixed(1);
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target.toString();
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, ref, duration]);
}
