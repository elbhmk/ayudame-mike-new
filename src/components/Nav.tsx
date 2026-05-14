'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { PhoneIcon } from './icons';

export default function Nav() {
  const t = useTranslations('Nav');
  const tCommon = useTranslations('Common');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLocale = () => {
    const next = locale === 'es' ? 'en' : 'es';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace(pathname as any, { locale: next });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 border-b ${
        scrolled
          ? 'h-16 bg-bg/85 border-gold/15'
          : 'h-[72px] bg-bg/55 border-gold/10'
      }`}
      style={{ backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)' }}
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/logo.png"
            alt="Ayúdame Mike — Abogados NY"
            width={44}
            height={44}
            priority
            className="w-9 h-9 md:w-11 md:h-11 object-contain"
          />
          <div className="font-display font-semibold text-[17px] md:text-[20px] tracking-tight leading-none">
            Ayúdame <span className="text-gold">Mike</span>
            <small className="block text-[8px] md:text-[10px] text-white/50 tracking-[0.15em] font-medium mt-1 uppercase font-sans">
              Abogados NY
            </small>
          </div>
        </Link>

        <div className="hidden lg:flex gap-9 text-sm text-white/75 font-medium">
          <Link href="/como-funciona" className="hover:text-gold transition-colors">
            {t('howItWorks')}
          </Link>
          <Link href="/servicios" className="hover:text-gold transition-colors">
            {t('services')}
          </Link>
          <Link href="/abogados" className="hover:text-gold transition-colors">
            {t('attorneys')}
          </Link>
          <Link href="/cobertura" className="hover:text-gold transition-colors">
            {t('coverage')}
          </Link>
          <Link href="/faq" className="hover:text-gold transition-colors">
            {t('faq')}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="hidden md:inline-flex text-xs text-white/70 bg-white/5 border border-white/12 px-3.5 py-1.5 rounded-full font-medium tracking-wider hover:border-gold/50 hover:text-gold hover:bg-gold/8 transition-all"
            style={{ backdropFilter: 'blur(10px) saturate(180%)' }}
          >
            {locale === 'es' ? 'ES · EN' : 'EN · ES'}
          </button>
          <a
            href={`tel:${tCommon('phoneRaw')}`}
            className="inline-flex items-center gap-2 px-3.5 md:px-5 py-2 md:py-2.5 rounded-full font-semibold text-xs md:text-sm text-bg transition-all hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 199, 87, 0.95), rgba(255, 167, 38, 0.95))',
              backdropFilter: 'blur(10px) saturate(180%)',
              boxShadow:
                'inset 0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 6px 24px -4px rgba(255, 199, 87, 0.5)',
            }}
          >
            <PhoneIcon size={13} />
            <span>{tCommon('freeConsultationShort')}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
