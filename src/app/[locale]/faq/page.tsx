import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.faq' });
  return { title: `${t('title')} — Ayúdame Mike`, description: t('subtitle') };
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Pages.faq' });
  const tF = await getTranslations({ locale, namespace: 'FAQ' });

  return (
    <main>
      <Nav />
      <PageHeader eyebrow={tF('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
