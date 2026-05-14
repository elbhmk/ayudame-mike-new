import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import HowItWorks from '@/components/HowItWorks';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Urgency from '@/components/Urgency';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.howItWorks' });
  return { title: `${t('title')} — Ayúdame Mike`, description: t('subtitle') };
}

export default async function HowItWorksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Pages.howItWorks' });
  const tH = await getTranslations({ locale, namespace: 'HowItWorks' });

  return (
    <main>
      <Nav />
      <PageHeader eyebrow={tH('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
      <HowItWorks />
      <Urgency />
      <FinalCTA />
      <Footer />
    </main>
  );
}
