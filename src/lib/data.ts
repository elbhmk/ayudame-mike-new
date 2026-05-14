export type AttorneySlug = 'gabriel' | 'koval' | 'tantleff' | 'guzman';
export type ServiceSlug =
  | 'carAccidents'
  | 'workAccidents'
  | 'medicalMalpractice'
  | 'slipAndFall'
  | 'liens';
export type BoroughSlug = 'manhattan' | 'brooklyn' | 'queens' | 'bronx';

export type AttorneyData = {
  slug: AttorneySlug;
  url: string;
  image: string;
  phone: string;
};

export const ATTORNEYS: AttorneyData[] = [
  {
    slug: 'gabriel',
    url: 'https://www.gabriellegal.com/',
    image: '/attorneys/gabriel-law.jpg',
    phone: '(212) 497-2421',
  },
  {
    slug: 'koval',
    url: 'https://kovalandassociates.com/',
    image: '/attorneys/koval.jpg',
    phone: '(718) 281-4200',
  },
  {
    slug: 'tantleff',
    url: 'https://honestattys.com/',
    image: '/attorneys/tantleff.jpg',
    phone: '(800) 689-4640',
  },
  {
    slug: 'guzman',
    url: 'https://sgmattorneys.net/',
    image: '/attorneys/guzman-miller.jpg',
    phone: '(516) 222-0099',
  },
];

export const ATTORNEY_SLUG_TO_PATH: Record<AttorneySlug, string> = {
  gabriel: '/abogados/gabriel-law',
  koval: '/abogados/koval-associates',
  tantleff: '/abogados/tantleff-kreinces',
  guzman: '/abogados/guzman-miller',
};

export type ServiceData = {
  slug: ServiceSlug;
  image: string;
  pathKey: string;
};

export const SERVICES: ServiceData[] = [
  {
    slug: 'carAccidents',
    image: '/services/car-accident.jpg',
    pathKey: '/servicios/accidentes-de-carro',
  },
  {
    slug: 'workAccidents',
    image: '/services/work-accident.jpg',
    pathKey: '/servicios/accidentes-laborales',
  },
  {
    slug: 'medicalMalpractice',
    image: '/services/medical.jpg',
    pathKey: '/servicios/mala-practica-medica',
  },
  {
    slug: 'slipAndFall',
    image: '/services/slip-fall.jpg',
    pathKey: '/servicios/caidas',
  },
  {
    slug: 'liens',
    image: '/services/liens.jpg',
    pathKey: '/servicios/liens',
  },
];

export type BoroughData = {
  slug: BoroughSlug;
  image: string;
  pathKey: string;
};

export const BOROUGHS: BoroughData[] = [
  { slug: 'manhattan', image: '/boroughs/manhattan.jpg', pathKey: '/cobertura/manhattan' },
  { slug: 'brooklyn', image: '/boroughs/brooklyn.jpg', pathKey: '/cobertura/brooklyn' },
  { slug: 'queens', image: '/boroughs/queens.jpg', pathKey: '/cobertura/queens' },
  { slug: 'bronx', image: '/boroughs/bronx.jpg', pathKey: '/cobertura/bronx' },
];
