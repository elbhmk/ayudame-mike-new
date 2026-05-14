import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Urgency from '@/components/Urgency';
import AttorneysCarousel from '@/components/AttorneysCarousel';
import FAQ from '@/components/FAQ';
import { SERVICES, type ServiceSlug } from '@/lib/data';

export async function generateMetadataForService(locale: string, slug: ServiceSlug): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Services' });
  return {
    title: `${t(`${slug}.name`)} — Ayúdame Mike`,
    description: t(`${slug}.short`),
  };
}

type Props = {
  locale: string;
  slug: ServiceSlug;
};

export default async function ServiceDetailLayout({ locale, slug }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Services' });
  const service = SERVICES.find((s) => s.slug === slug)!;

  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t(`${slug}.name`)}
        subtitle={t(`${slug}.short`)}
        heroImage={service.image}
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
