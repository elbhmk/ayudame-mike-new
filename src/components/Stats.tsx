'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

function Counter({
  target,
  prefix = '',
  suffix = '',
  duration = 1800,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !animated.current) {
            animated.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(target * eased));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="font-display text-[40px] md:text-5xl lg:text-[56px] font-semibold text-gold tracking-tightest leading-none mb-2.5">
      {prefix}
      {value.toLocaleString('en-US')}
      {suffix}
    </div>
  );
}

export default function Stats() {
  const t = useTranslations('Stats');

  return (
    <section className="bg-bg border-y border-gold/10 py-14 px-5 md:px-8 relative z-20">
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-16">
        <div className="text-center md:text-left">
          <Counter target={500} prefix="$" suffix="M+" />
          <p className="text-xs md:text-[13px] text-white/55 leading-snug">{t('recovered')}</p>
        </div>
        <div className="text-center md:text-left">
          <Counter target={10000} suffix="+" />
          <p className="text-xs md:text-[13px] text-white/55 leading-snug">{t('connected')}</p>
        </div>
        <div className="text-center md:text-left">
          <Counter target={20} suffix="+" />
          <p className="text-xs md:text-[13px] text-white/55 leading-snug">{t('years')}</p>
        </div>
      </div>
    </section>
  );
}
