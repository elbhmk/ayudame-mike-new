'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { PlusIcon } from './icons';

type FAQItem = { q: string; a: string };

export default function FAQ() {
  const t = useTranslations('FAQ');
  const items = t.raw('items') as FAQItem[];
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className="py-24 md:py-32 px-5 md:px-8 relative z-10 bg-bg" id="faq">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block text-xs text-gold font-semibold tracking-[0.25em] uppercase mb-4">
            {t('eyebrow')}
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tighter leading-tight text-white mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="max-w-[880px] mx-auto flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`glass-panel rounded-[18px] overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-gold/40' : 'hover:border-gold/25'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full bg-transparent border-0 cursor-pointer px-7 py-6 flex items-center justify-between gap-4 text-white text-left transition-colors hover:text-gold"
                  type="button"
                >
                  <span className="font-display text-base md:text-lg font-semibold tracking-tight leading-tight">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full bg-gold/12 border border-gold/40 text-gold grid place-items-center transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <PlusIcon size={14} />
                  </span>
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[i] = el;
                  }}
                  style={{
                    maxHeight: isOpen ? `${contentRefs.current[i]?.scrollHeight ?? 0}px` : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div className="px-7 pb-6 text-sm md:text-[15px] text-white/75 leading-[1.65]">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
