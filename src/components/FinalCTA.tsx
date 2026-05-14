'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PhoneIcon, WhatsAppIcon } from './icons';

export default function FinalCTA() {
  const t = useTranslations('FinalCTA');
  const tCommon = useTranslations('Common');

  return (
    <section className="py-24 md:py-32 px-5 md:px-8 text-center relative overflow-hidden z-10">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 199, 87, 0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      <div className="relative z-10 max-w-[760px] mx-auto">
        <Image
          src="/logo.png"
          alt="Ayúdame Mike"
          width={90}
          height={90}
          className="mx-auto mb-8 w-20 h-20 md:w-[90px] md:h-[90px]"
        />
        <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-tight tracking-tighter mb-5">
          {t('titleStart')}{' '}
          <span className="text-gradient-gold italic">{t('titleAccent')}</span>
          {t('titleEnd')}
        </h2>
        <p className="text-base md:text-lg text-white/70 mb-9">{t('subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
          <a
            href={`tel:${tCommon('phoneRaw')}`}
            className="gold-pulse inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-[15px] text-bg transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 199, 87, 0.95), rgba(255, 167, 38, 0.95))',
              backdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            <PhoneIcon size={15} />
            {tCommon('phone')}
          </a>
          <a
            href={tCommon('whatsappLink')}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-pulse inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-[15px] text-white transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.95), rgba(32, 189, 90, 0.95))',
              backdropFilter: 'blur(20px) saturate(180%)',
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
