'use client';

import { useTranslations } from 'next-intl';
import { PhoneIcon, ClipboardCheckIcon, HandshakeIcon } from './icons';

export default function HowItWorks() {
  const t = useTranslations('HowItWorks');

  const steps = [
    { num: '01', icon: <PhoneIcon size={28} />, titleKey: 'step1Title', descKey: 'step1Desc' },
    {
      num: '02',
      icon: <ClipboardCheckIcon size={28} />,
      titleKey: 'step2Title',
      descKey: 'step2Desc',
    },
    {
      num: '03',
      icon: <HandshakeIcon size={28} />,
      titleKey: 'step3Title',
      descKey: 'step3Desc',
    },
  ];

  return (
    <section className="py-24 md:py-32 px-5 md:px-8 relative z-10 bg-bg" id="como-funciona">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[600px] lg:max-w-none mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass-panel glass-panel-hover rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden"
            >
              <div className="font-display font-semibold text-[72px] leading-[0.9] tracking-[-0.05em] text-gradient-gold italic mb-4">
                {step.num}
              </div>
              <div
                className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/40 grid place-items-center mb-5 text-gold"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                {step.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-3.5 tracking-tight">
                {t(step.titleKey)}
              </h3>
              <p className="text-[15px] text-white/70 leading-relaxed">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
