'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ATTORNEYS } from '@/lib/data';
import { ArrowLeftIcon, ArrowRightIcon, ArrowExternalIcon } from './icons';

export default function AttorneysCarousel() {
  const t = useTranslations('Attorneys');
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 768) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(4);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const total = ATTORNEYS.length;
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
    <section className="py-24 md:py-32 px-5 md:px-8 relative z-10 bg-bg" id="abogados">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block text-xs text-gold font-semibold tracking-[0.25em] uppercase mb-4">
            {t('eyebrow')}
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tighter leading-tight text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-[600px] mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
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
              {ATTORNEYS.map((att) => {
                const widthClass =
                  perView === 1
                    ? 'flex-[0_0_100%]'
                    : perView === 2
                      ? 'flex-[0_0_calc((100%-20px)/2)]'
                      : 'flex-[0_0_calc((100%-60px)/4)]';
                return (
                  <a
                    key={att.slug}
                    href={att.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${widthClass} glass-panel glass-panel-hover rounded-[20px] overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:-translate-y-1.5 no-underline text-inherit`}
                  >
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <div className="absolute top-3.5 left-3.5 bg-bg/70 backdrop-blur-md text-gold text-[10px] px-3 py-1.5 rounded-full font-semibold tracking-wide z-10 border border-gold/40">
                        {t(`${att.slug}.tag`)}
                      </div>
                      <Image
                        src={att.image}
                        alt={t(`${att.slug}.name`)}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(180deg, transparent 50%, rgba(10, 10, 10, 0.6) 100%)',
                        }}
                      />
                    </div>
                    <div className="p-5 pt-5.5 pb-6 flex flex-col gap-2.5 flex-1">
                      <h3 className="font-display text-[19px] font-semibold text-white leading-tight tracking-tight">
                        {t(`${att.slug}.name`)}
                      </h3>
                      <p className="text-xs text-white/50 leading-snug">{t(`${att.slug}.role`)}</p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {(t.raw(`${att.slug}.specs`) as string[]).map((s) => (
                          <span
                            key={s}
                            className="text-[10px] text-gold bg-gold/8 border border-gold/20 px-2.5 py-0.5 rounded-full font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="text-gold text-xs font-semibold mt-auto pt-2 inline-flex items-center gap-1.5">
                        {/* Translation key shared */}
                        <span>
                          {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                          {/* using t directly */}
                          {/* keep simple */}
                        </span>
                        <span>↗</span>
                      </div>
                    </div>
                  </a>
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
