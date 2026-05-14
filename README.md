# Ayúdame Mike — Next.js + Vercel

Sitio web para [ayudamemike.com](https://ayudamemike.com) — agencia que conecta víctimas de accidentes con abogados aliados de lesiones personales en New York.

## Stack

- **Next.js 15** (App Router, SSG)
- **TypeScript** estricto
- **Tailwind CSS** con paleta dorada custom
- **next-intl** para i18n ES/EN con toggle en vivo
- **Vercel** para hosting (free tier)

## Estructura del proyecto

```
ayudamemike-next/
├── messages/                 # Traducciones
│   ├── es.json
│   └── en.json
├── public/                   # Assets (imágenes reales)
│   ├── logo.png
│   ├── hero-nyc-night.jpg
│   ├── attorneys/
│   ├── services/
│   └── boroughs/
├── src/
│   ├── app/
│   │   └── [locale]/        # Routing i18n
│   │       ├── layout.tsx
│   │       ├── page.tsx                       # Home
│   │       ├── sobre/                         # /sobre, /en/about
│   │       ├── como-funciona/                 # /como-funciona, /en/how-it-works
│   │       ├── servicios/                     # Hub + 5 landings
│   │       │   ├── accidentes-de-carro/
│   │       │   ├── accidentes-laborales/
│   │       │   ├── mala-practica-medica/
│   │       │   ├── caidas/
│   │       │   └── liens/
│   │       ├── abogados/                      # Hub + 4 landings
│   │       │   ├── gabriel-law/
│   │       │   ├── koval-associates/
│   │       │   ├── tantleff-kreinces/
│   │       │   └── guzman-miller/
│   │       ├── cobertura/                     # Hub + 4 landings
│   │       │   ├── manhattan/
│   │       │   ├── brooklyn/
│   │       │   ├── queens/
│   │       │   └── bronx/
│   │       └── faq/
│   ├── components/          # Componentes reutilizables
│   ├── i18n/                # Config de routing internacional
│   ├── lib/                 # Data centralizada
│   └── middleware.ts        # Detección de locale
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Cómo correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Cómo desplegar a Vercel

### 1) Subir el proyecto a GitHub

```bash
# Desde dentro de la carpeta ayudamemike-next
git init
git add .
git commit -m "Initial commit: Next.js 15 + i18n + glassmorphism"
git branch -M main

# Crear repo nuevo en GitHub primero (puede ser desde la web o con gh CLI):
# https://github.com/new → nombre: ayudamemike-next → private/public

# Conectar y push
git remote add origin https://github.com/elbhmk/ayudamemike-next.git
git push -u origin main
```

### 2) Conectar a Vercel

1. Entra a [vercel.com/new](https://vercel.com/new)
2. Selecciona el repo `ayudamemike-next`
3. Vercel detecta Next.js automáticamente — no cambies nada
4. Click **Deploy**
5. En ~2 minutos tienes un URL tipo `ayudamemike-next-xyz.vercel.app`

### 3) Probar en staging

- Visita `https://ayudamemike-next-xyz.vercel.app` (URL exacta la asigna Vercel)
- Prueba el toggle ES/EN en la nav
- Prueba navegación a `/servicios`, `/abogados`, `/cobertura`, etc.
- Verifica mobile

### 4) Cuando esté aprobado: cambiar el dominio

1. En el dashboard de Vercel del proyecto: **Settings → Domains**
2. Agregar `ayudamemike.com` y `www.ayudamemike.com`
3. Vercel te dará registros DNS (A + CNAME)
4. Ir al panel del registrador de dominio y actualizar DNS
5. Esperar propagación (5-60 min)
6. Eliminar el proyecto viejo de Lovable

## Rutas disponibles

### Español (default — sin prefijo)
- `/` Home
- `/sobre`
- `/como-funciona`
- `/servicios` → hub
- `/servicios/accidentes-de-carro`
- `/servicios/accidentes-laborales`
- `/servicios/mala-practica-medica`
- `/servicios/caidas`
- `/servicios/liens`
- `/abogados` → hub
- `/abogados/gabriel-law`
- `/abogados/koval-associates`
- `/abogados/tantleff-kreinces`
- `/abogados/guzman-miller`
- `/cobertura` → hub
- `/cobertura/manhattan`
- `/cobertura/brooklyn`
- `/cobertura/queens`
- `/cobertura/bronx`
- `/faq`

### Inglés (con prefijo `/en/`)
- `/en/` Home
- `/en/about`
- `/en/how-it-works`
- `/en/services`
- `/en/services/car-accidents`
- `/en/services/work-accidents`
- `/en/services/medical-malpractice`
- `/en/services/slip-and-fall`
- `/en/services/liens`
- `/en/attorneys`
- `/en/attorneys/gabriel-law`
- `/en/attorneys/koval-associates`
- `/en/attorneys/tantleff-kreinces`
- `/en/attorneys/guzman-miller`
- `/en/coverage`
- `/en/coverage/manhattan`
- `/en/coverage/brooklyn`
- `/en/coverage/queens`
- `/en/coverage/bronx`
- `/en/faq`

**Total: 38 páginas reales prerenderizadas para SEO**

## Modificar el contenido

Todo el texto está en `/messages/es.json` y `/messages/en.json`. Edita esos archivos y los cambios se reflejan automáticamente.

Para agregar/cambiar abogados, edita `/src/lib/data.ts`.

## Lighthouse esperado

- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## Contacto del negocio

- Phone: (347) 526-1359
- WhatsApp: https://api.whatsapp.com/send?phone=13475261359
- Dominio: ayudamemike.com
