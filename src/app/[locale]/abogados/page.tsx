import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import { Link } from '@/i18n/routing';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { ATTORNEYS, ATTORNEY_SLUG_TO_PATH, type AttorneySlug } from '@/lib/data';
import { ArrowExternalIcon } from '@/components/icons';
import type { Pathnames } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.attorneys' });
  return { title: `${t('title')} — Ayúdame Mike`, description: t('subtitle') };
}

export default async function AttorneysPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Pages.attorneys' });
  const tA = await getTranslations({ locale, namespace: 'Attorneys' });
  const tCommon = await getTranslations({ locale, namespace: 'Common' });

  return (
    <main>
      <Nav />
      <PageHeader eyebrow={tA('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
      <section className="py-20 px-5 md:px-8 relative z-10 bg-bg">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {ATTORNEYS.map((att) => {
            const slug = att.slug as AttorneySlug;
            const path = ATTORNEY_SLUG_TO_PATH[slug] as Pathnames;
            return (
              <Link
                key={slug}
                href={path}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col md:flex-row cursor-pointer transition-all duration-500 hover:-translate-y-1.5 no-underline text-inherit"
              >
                <div className="md:w-[40%] aspect-[4/5] md:aspect-auto relative overflow-hidden">
                  <Image
                    src={att.image}
                    alt={tA(`${slug}.name`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="flex-1 p-7 md:p-9 flex flex-col gap-3">
                  <span className="inline-block self-start text-[10px] text-gold bg-gold/10 border border-gold/30 px-3 py-1 rounded-full font-semibold tracking-wide w-fit">
                    {tA(`${slug}.tag`)}
                  </span>
                  <h2 className="font-display text-2xl md:text-[28px] font-semibold text-white tracking-tight leading-tight">
                    {tA(`${slug}.name`)}
                  </h2>
                  <p className="text-sm text-white/55">{tA(`${slug}.role`)}</p>
                  <p className="text-[15px] text-white/75 leading-relaxed mt-2">
                    {tA(`${slug}.bio`)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {(tA.raw(`${slug}.specs`) as string[]).map((s) => (
                      <span
                        key={s}
                        className="text-[11px] text-gold bg-gold/8 border border-gold/20 px-2.5 py-1 rounded-full font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="text-gold text-sm font-semibold mt-auto pt-4 inline-flex items-center gap-1.5">
                    {tCommon('learnMore')} <ArrowExternalIcon size={12} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <FinalCTA />
      <Footer />
    </main>
  );
}
