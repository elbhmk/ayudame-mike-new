'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { StarIcon, ArrowLeftIcon, ArrowRightIcon } from './icons';

type Testimonial = { text: string; author: string; case: string };

export default function TestimonialsCarousel() {
  const t = useTranslations('Testimonials');
  const items = t.raw('items') as Testimonial[];
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 768) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const total = items.length;
  const totalPages = Math.max(1, total - perView + 1);

  useEffect(() => {
    if (current > totalPages - 1) setCurrent(totalPages - 1);
    if (current < 0) setCurrent(0);
  }, [current, totalPages]);

  useEffect(() => {
    if (!trackRef.current) return;
    const itemWidth = trackRef.current.children[0]?.getBoundingClientRect().width ?? 0;
    const gap = 20;
    trackRef.current.style.transform = `translateX(-${current * (itemWidth + gap)}px)`;
  }, [current, perView]);

  const move = (dir: number) => setCurrent((c) => Math.max(0, Math.min(totalPages - 1, c + dir)));

  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  return (
    <section className="py-24 md:py-32 px-5 md:px-8 relative z-10 bg-bg" id="testimonios">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block text-xs text-gold font-semibold tracking-[0.25em] uppercase mb-4">
            {t('eyebrow')}
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tighter leading-tight text-white mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-2.5 justify-end mb-8">
            <button
              onClick={() => move(-1)}
              disabled={current === 0}
              aria-label="Anterior"
              className="w-12 h-12 rounded-full bg-white/6 border border-white/15 grid place-items-center text-white transition-all hover:bg-gold/12 hover:border-gold/50 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                backdropFilter: 'blur(10px) saturate(180%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={() => move(1)}
              disabled={current >= totalPages - 1}
              aria-label="Siguiente"
              className="w-12 h-12 rounded-full bg-white/6 border border-white/15 grid place-items-center text-white transition-all hover:bg-gold/12 hover:border-gold/50 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                backdropFilter: 'blur(10px) saturate(180%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <ArrowRightIcon />
            </button>
          </div>

          <div
            className="overflow-hidden"
            style={{
              maskImage: 'linear-gradient(90deg, transparent 0, #000 5%, #000 95%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent 0, #000 5%, #000 95%, transparent 100%)',
            }}
            onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
            onTouchMove={(e) => (touchEnd.current = e.touches[0].clientX)}
            onTouchEnd={() => {
              const diff = touchStart.current - touchEnd.current;
              if (Math.abs(diff) > 50) move(diff > 0 ? 1 : -1);
            }}
          >
            <div
              ref={trackRef}
              className="flex gap-5 transition-transform duration-700 ease-out will-change-transform"
            >
              {items.map((item, i) => {
                const widthClass =
                  perView === 1
                    ? 'flex-[0_0_100%]'
                    : perView === 2
                      ? 'flex-[0_0_calc((100%-20px)/2)]'
                      : 'flex-[0_0_calc((100%-40px)/3)]';
                return (
                  <div
                    key={i}
                    className={`${widthClass} glass-panel glass-panel-hover rounded-[20px] p-8 md:p-9 transition-all duration-500 hover:-translate-y-1 flex flex-col`}
                  >
                    <div className="flex gap-1 text-gold mb-5">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <StarIcon key={k} size={16} />
                      ))}
                    </div>
                    <p className="text-base text-white/88 leading-[1.65] mb-6 flex-1">
                      “{item.text}”
                    </p>
                    <div className="font-display text-[15px] font-semibold text-white">
                      {item.author}
                    </div>
                    <div className="text-xs text-gold mt-1 font-medium">{item.case}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-2 justify-center mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'w-7 bg-gold' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
