'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowLeftIcon, PhoneIcon, WhatsAppIcon } from './icons';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  heroImage?: string;
};

export default function PageHeader({ eyebrow, title, subtitle, heroImage }: Props) {
  const tCommon = useTranslations('Common');

  return (
    <section className="relative overflow-hidden pt-[140px] md:pt-[180px] pb-20 md:pb-28 px-5 md:px-8">
      {heroImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.85) 70%, #0a0a0a 100%)',
            }}
          />
        </div>
      )}
      <div
        className="absolute -top-[10%] -right-[5%] w-[700px] h-[700px] z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 199, 87, 0.15) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold mb-8 transition-colors"
        >
          <ArrowLeftIcon size={14} /> {tCommon('back')}
        </Link>
        {eyebrow && (
          <div className="inline-block text-xs text-gold font-semibold tracking-[0.25em] uppercase mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tightest leading-[1.05] text-white mb-5 max-w-[900px]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-white/70 max-w-[720px] leading-relaxed mb-9">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3.5">
          <a
            href={`tel:${tCommon('phoneRaw')}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-bg transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 199, 87, 0.95), rgba(255, 167, 38, 0.95))',
              boxShadow:
                'inset 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 10px 40px -8px rgba(255, 199, 87, 0.55)',
            }}
          >
            <PhoneIcon size={14} />
            {tCommon('freeConsultation')}
          </a>
          <a
            href={tCommon('whatsappLink')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-white/8 border border-white/18 transition-all hover:bg-gold/12 hover:border-gold/55 hover:text-gold"
            style={{ backdropFilter: 'blur(20px) saturate(180%)' }}
          >
            <WhatsAppIcon size={14} />
            {tCommon('whatsapp')}
          </a>
        </div>
      </div>
    </section>
  );
}
