import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import ServicesGrid from '@/components/ServicesGrid';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Urgency from '@/components/Urgency';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.services' });
  return { title: `${t('title')} — Ayúdame Mike`, description: t('subtitle') };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Pages.services' });
  const tS = await getTranslations({ locale, namespace: 'Services' });

  return (
    <main>
      <Nav />
      <PageHeader eyebrow={tS('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
      <ServicesGrid />
      <Urgency />
      <FinalCTA />
      <Footer />
    </main>
  );
}
