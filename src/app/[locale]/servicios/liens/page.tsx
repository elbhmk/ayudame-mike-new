import type { Metadata } from 'next';
import ServiceDetailLayout, { generateMetadataForService } from '@/components/ServiceDetailLayout';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateMetadataForService(locale, 'liens');
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <ServiceDetailLayout locale={locale} slug="liens" />;
}
