import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import AttorneysCarousel from '@/components/AttorneysCarousel';
import FAQ from '@/components/FAQ';
import Urgency from '@/components/Urgency';
import { BOROUGHS, type BoroughSlug } from '@/lib/data';

export async function generateMetadataForBorough(
  locale: string,
  slug: BoroughSlug
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Coverage' });
  return {
    title: `Abogados en ${t(`${slug}.name`)} — Ayúdame Mike`,
    description: t(`${slug}.long`),
  };
}

type Props = { locale: string; slug: BoroughSlug };

export default async function BoroughDetailLayout({ locale, slug }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Coverage' });
  const borough = BOROUGHS.find((b) => b.slug === slug)!;

  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t(`${slug}.name`)}
        subtitle={t(`${slug}.neighborhoods`)}
        heroImage={borough.image}
      />
      <section className="py-20 px-5 md:px-8 relative z-10 bg-bg">
        <div className="max-w-[880px] mx-auto">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
            {t(`${slug}.long`)}
          </p>
        </div>
      </section>
      <AttorneysCarousel />
      <FAQ />
      <Urgency />
      <FinalCTA />
      <Footer />
    </main>
  );
}
