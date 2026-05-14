'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  const text = t('text', { brand: t('brandHighlight') });
  const brand = t('brandHighlight');
  const parts = text.split(brand);

  return (
    <section className="py-24 md:py-32 px-5 md:px-8 text-center relative z-10 border-t border-gold/8">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 199, 87, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="max-w-[760px] mx-auto relative z-10">
        <Image
          src="/logo.png"
          alt="Ayúdame Mike"
          width={88}
          height={88}
          className="mx-auto mb-7 w-16 h-16 md:w-22 md:h-22"
        />
        <p className="font-display text-lg md:text-2xl lg:text-[26px] leading-[1.45] text-white/92 font-normal tracking-tight">
          {parts[0]}
          <span className="text-gradient-gold italic">{brand}</span>
          {parts[1]}
        </p>
      </div>
    </section>
  );
}
