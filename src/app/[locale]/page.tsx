import { setRequestLocale } from 'next-intl/server';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import HowItWorks from '@/components/HowItWorks';
import ServicesGrid from '@/components/ServicesGrid';
import AttorneysCarousel from '@/components/AttorneysCarousel';
import CoverageGrid from '@/components/CoverageGrid';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQ from '@/components/FAQ';
import Urgency from '@/components/Urgency';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Stats />
      <HowItWorks />
      <ServicesGrid />
      <AttorneysCarousel />
      <CoverageGrid />
      <TestimonialsCarousel />
      <FAQ />
      <Urgency />
      <FinalCTA />
      <Footer />
    </main>
  );
}
