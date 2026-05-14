'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SERVICES } from '@/lib/data';
import type { Pathnames } from '@/i18n/routing';

export default function ServicesGrid() {
  const t = useTranslations('Services');

  return (
    <section className="py-24 md:py-32 px-5 md:px-8 relative z-10 bg-bg" id="servicios">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc) => (
            <Link
              key={svc.slug}
              href={svc.pathKey as Pathnames}
              className="glass-panel glass-panel-hover relative aspect-[4/5] rounded-[22px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1.5 group"
            >
              <div
                className="absolute -inset-[8%] bg-cover bg-center will-change-transform group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${svc.image})` }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.15) 35%, rgba(10, 10, 10, 0.9) 95%)',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                <h3 className="font-display text-[26px] font-semibold text-white mb-3 tracking-tight leading-tight">
                  {t(`${svc.slug}.name`)}
                </h3>
                <p className="text-sm text-white/78 leading-relaxed">
                  {t(`${svc.slug}.short`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
