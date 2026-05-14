import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import About from '@/components/About';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.about' });
  return { title: `${t('title')} — Ayúdame Mike`, description: t('subtitle') };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Pages.about' });

  return (
    <main>
      <Nav />
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
