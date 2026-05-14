import type { Metadata } from 'next';
import AttorneyDetailLayout, { generateMetadataForAttorney } from '@/components/AttorneyDetailLayout';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateMetadataForAttorney(locale, 'gabriel');
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <AttorneyDetailLayout locale={locale} slug="gabriel" />;
}
