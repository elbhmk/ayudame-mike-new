'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { BOROUGHS } from '@/lib/data';
import type { Pathnames } from '@/i18n/routing';

export default function CoverageGrid() {
  const t = useTranslations('Coverage');

  return (
    <section className="py-24 md:py-32 px-5 md:px-8 relative z-10 bg-bg" id="cobertura">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BOROUGHS.map((b) => (
            <Link
              key={b.slug}
              href={b.pathKey as Pathnames}
              className="aspect-[3/4] rounded-[20px] overflow-hidden relative cursor-pointer transition-all duration-500 hover:-translate-y-1.5 border border-white/10 group"
              style={{
                boxShadow:
                  'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 20px 50px -20px rgba(0, 0, 0, 0.6)',
              }}
            >
              <Image
                src={b.image}
                alt={t(`${b.slug}.name`)}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.2) 40%, rgba(10, 10, 10, 0.88) 100%)',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="font-display text-[26px] font-semibold text-white tracking-tight mb-2">
                  {t(`${b.slug}.name`)}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {t(`${b.slug}.neighborhoods`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
