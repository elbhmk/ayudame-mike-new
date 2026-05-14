import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Urgency from '@/components/Urgency';
import { ATTORNEYS, type AttorneySlug } from '@/lib/data';
import { ArrowExternalIcon, PhoneIcon } from '@/components/icons';

export async function generateMetadataForAttorney(
  locale: string,
  slug: AttorneySlug
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Attorneys' });
  return {
    title: `${t(`${slug}.name`)} — Ayúdame Mike`,
    description: t(`${slug}.bio`),
  };
}

type Props = {
  locale: string;
  slug: AttorneySlug;
};

export default async function AttorneyDetailLayout({ locale, slug }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Attorneys' });
  const tCommon = await getTranslations({ locale, namespace: 'Common' });
  const attorney = ATTORNEYS.find((a) => a.slug === slug)!;

  return (
    <main>
      <Nav />
      <PageHeader eyebrow={t('eyebrow')} title={t(`${slug}.name`)} subtitle={t(`${slug}.role`)} />
      <section className="py-20 px-5 md:px-8 relative z-10 bg-bg">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr,1.3fr] gap-10 lg:gap-14 items-start">
          <div className="aspect-[4/5] relative overflow-hidden rounded-3xl glass-panel">
            <Image
              src={attorney.image}
              alt={t(`${slug}.name`)}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute top-4 left-4 bg-bg/70 backdrop-blur-md text-gold text-xs px-3 py-1.5 rounded-full font-semibold tracking-wide z-10 border border-gold/40">
              {t(`${slug}.tag`)}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
              {t(`${slug}.bio`)}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {(t.raw(`${slug}.specs`) as string[]).map((s) => (
                <span
                  key={s}
                  className="text-xs text-gold bg-gold/8 border border-gold/20 px-3 py-1.5 rounded-full font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="glass-panel rounded-2xl p-6 mt-6 flex flex-col gap-3">
              <div className="text-xs text-gold font-semibold tracking-[0.25em] uppercase">
                {tCommon('phone')}
              </div>
              <div className="font-display text-2xl md:text-[28px] text-white font-semibold tracking-tight">
                {attorney.phone}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 mt-2">
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
                href={attorney.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm text-white bg-white/8 border border-white/18 transition-all hover:bg-gold/12 hover:border-gold/55 hover:text-gold"
                style={{ backdropFilter: 'blur(20px) saturate(180%)' }}
              >
                <ArrowExternalIcon size={14} />
                {tCommon('visitSite')}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Urgency />
      <FinalCTA />
      <Footer />
    </main>
  );
}
