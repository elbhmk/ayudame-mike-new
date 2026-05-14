'use client';

import { useTranslations } from 'next-intl';
import { PhoneIcon, WhatsAppIcon } from './icons';

export default function Footer() {
  const tFooter = useTranslations('Footer');
  const tCommon = useTranslations('Common');

  return (
    <>
      <footer className="bg-bg-deep py-12 md:py-16 px-5 md:px-8 border-t border-gold/8 relative z-10">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[11px] text-white/40 leading-[1.7] mb-6">
            {tFooter('disclaimer')}
          </p>
          <p className="text-xs text-white/30 border-t border-gold/6 pt-5">
            {tFooter('copyright')}
          </p>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 flex gap-2">
        <a
          href={`tel:${tCommon('phoneRaw')}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm text-bg bg-gold"
          style={{ boxShadow: '0 10px 30px -8px rgba(255, 199, 87, 0.5)', backdropFilter: 'blur(20px)' }}
        >
          <PhoneIcon size={14} />
          {tCommon('callButton')}
        </a>
        <a
          href={tCommon('whatsappLink')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm text-white bg-[#25D366]"
          style={{ backdropFilter: 'blur(20px)' }}
        >
          <WhatsAppIcon size={14} />
          {tCommon('whatsapp')}
        </a>
      </div>
    </>
  );
}
