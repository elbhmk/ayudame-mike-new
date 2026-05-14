'use client';

import { useTranslations } from 'next-intl';
import { ClockIcon } from './icons';

export default function Urgency() {
  const t = useTranslations('Urgency');

  return (
    <section
      className="py-20 px-5 md:px-8 relative overflow-hidden border-y border-gold/10"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #14110d 100%)' }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255, 199, 87, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="max-w-[900px] mx-auto flex flex-wrap items-center gap-10 relative z-10">
        <div
          className="flex-shrink-0 w-14 h-14 md:w-18 md:h-18 rounded-2xl bg-gold/15 border border-gold/40 grid place-items-center text-gold"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <ClockIcon size={36} />
        </div>
        <div className="flex-1 min-w-[280px]">
          <div className="text-xs text-gold font-semibold tracking-[0.25em] uppercase mb-2.5">
            {t('eyebrow')}
          </div>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-tight mb-3">
            {t('titleStart')} <span className="text-gradient-gold italic">{t('titleAccent')}</span>{' '}
            {t('titleEnd')}
          </h3>
          <p className="text-base text-white/70 leading-snug">{t('text')}</p>
        </div>
      </div>
    </section>
  );
}
