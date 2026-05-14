import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/sobre': { es: '/sobre', en: '/about' },
    '/como-funciona': { es: '/como-funciona', en: '/how-it-works' },
    '/servicios': { es: '/servicios', en: '/services' },
    '/servicios/accidentes-de-carro': {
      es: '/servicios/accidentes-de-carro',
      en: '/services/car-accidents',
    },
    '/servicios/accidentes-laborales': {
      es: '/servicios/accidentes-laborales',
      en: '/services/work-accidents',
    },
    '/servicios/mala-practica-medica': {
      es: '/servicios/mala-practica-medica',
      en: '/services/medical-malpractice',
    },
    '/servicios/caidas': { es: '/servicios/caidas', en: '/services/slip-and-fall' },
    '/servicios/liens': { es: '/servicios/liens', en: '/services/liens' },
    '/abogados': { es: '/abogados', en: '/attorneys' },
    '/abogados/gabriel-law': {
      es: '/abogados/gabriel-law',
      en: '/attorneys/gabriel-law',
    },
    '/abogados/koval-associates': {
      es: '/abogados/koval-associates',
      en: '/attorneys/koval-associates',
    },
    '/abogados/tantleff-kreinces': {
      es: '/abogados/tantleff-kreinces',
      en: '/attorneys/tantleff-kreinces',
    },
    '/abogados/guzman-miller': {
      es: '/abogados/guzman-miller',
      en: '/attorneys/guzman-miller',
    },
    '/cobertura': { es: '/cobertura', en: '/coverage' },
    '/cobertura/manhattan': { es: '/cobertura/manhattan', en: '/coverage/manhattan' },
    '/cobertura/brooklyn': { es: '/cobertura/brooklyn', en: '/coverage/brooklyn' },
    '/cobertura/queens': { es: '/cobertura/queens', en: '/coverage/queens' },
    '/cobertura/bronx': { es: '/cobertura/bronx', en: '/coverage/bronx' },
    '/faq': { es: '/faq', en: '/faq' },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
