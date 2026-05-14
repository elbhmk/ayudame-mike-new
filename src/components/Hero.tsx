'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { PhoneIcon, WhatsAppIcon } from './icons';

export default function Hero() {
  const t = useTranslations('Hero');
  const tCommon = useTranslations('Common');
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (bgRef.current && scrolled < window.innerHeight) {
            bgRef.current.style.transform = `translateY(${scrolled * 0.45}px) scale(1.08)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-[120px] pb-[100px] px-5 md:px-8">
      <div
        ref={bgRef}
        className="absolute inset-[-5%] z-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/hero-nyc-night.jpg')",
          transition: 'transform 0.1s linear',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 10, 10, 0.35) 0%, rgba(10, 10, 10, 0.55) 60%, rgba(10, 10, 10, 0.97) 100%), linear-gradient(90deg, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.4) 50%, rgba(10, 10, 10, 0.2) 100%)',
          }}
        />
      </div>

      <div
        className="absolute -top-[10%] -right-[5%] w-[900px] h-[900px] z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 199, 87, 0.18) 0%, rgba(255, 199, 87, 0.04) 35%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto">
        <div className="inline-flex items-center gap-2.5 text-xs text-gold bg-gold/10 border border-gold/28 px-4 py-2 rounded-full mb-9 font-medium tracking-wide backdrop-blur-md">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
            style={{ boxShadow: '0 0 10px rgba(74, 222, 128, 0.6)' }}
          />
          {tCommon('online247')}
        </div>

        <h1 className="font-display font-semibold text-[44px] sm:text-[64px] lg:text-[82px] xl:text-[92px] leading-[1.02] tracking-tightest mb-7 max-w-[1000px] text-white">
          {t('titleStart')}
          <br />
          <span className="text-gradient-gold italic font-medium">{t('titleAccent')}</span>
          <br />
          {t('titleEnd')}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-white/78 max-w-[640px] mb-11 leading-snug">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-wrap">
          <a
            href={`tel:${tCommon('phoneRaw')}`}
            className="gold-pulse inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-[15px] text-bg transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 199, 87, 0.95), rgba(255, 167, 38, 0.95))',
              backdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            <PhoneIcon size={15} />
            {tCommon('freeConsultation')}
          </a>
          <a
            href={tCommon('whatsappLink')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-medium text-[15px] text-white bg-white/8 border border-white/18 transition-all hover:bg-gold/12 hover:border-gold/55 hover:text-gold"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 4px 20px -4px rgba(0, 0, 0, 0.3)',
            }}
          >
            <WhatsAppIcon size={15} />
            {tCommon('whatsapp')}
          </a>
        </div>
      </div>
    </section>
  );
}
