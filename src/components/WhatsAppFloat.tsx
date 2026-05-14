'use client';

import { useTranslations } from 'next-intl';
import { WhatsAppIcon } from './icons';

export default function WhatsAppFloat() {
  const tCommon = useTranslations('Common');

  return (
    
      href={tCommon('whatsappLink')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full items-center justify-center text-white transition-all hover:scale-110"
      style={{
        background: 'linear-gradient(135deg, #25D366, #20BD5A)',
        boxShadow:
          '0 10px 30px -4px rgba(37, 211, 102, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        animation: 'wa-float-pulse 2.4s ease-in-out infinite',
      }}
    >
      <WhatsAppIcon size={26} />
      <style jsx>{`
        @keyframes wa-float-pulse {
          0%, 100% {
            box-shadow: 0 10px 30px -4px rgba(37, 211, 102, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 0 0 0 rgba(37, 211, 102, 0.55);
          }
          50% {
            box-shadow: 0 10px 30px -4px rgba(37, 211, 102, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 0 0 14px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </a>
  );
}
