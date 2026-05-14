import type { Metadata } from 'next';
import BoroughDetailLayout, { generateMetadataForBorough } from '@/components/BoroughDetailLayout';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateMetadataForBorough(locale, 'manhattan');
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <BoroughDetailLayout locale={locale} slug="manhattan" />;
}
