# Raptors Morelia

Portal web de Raptors Morelia construido con Astro, Tailwind, Svelte y contenido en Markdown.

## Stack

- `Astro 5`
- `Tailwind CSS`
- `Svelte`
- `astro-pagefind` para búsqueda
- `@swup/astro` para transiciones

## Requisitos

- `Node.js 22+`
- `pnpm 9+`

## Comandos clave

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm check
```

Qué hace cada uno:

- `pnpm dev`: levanta el entorno local.
- `pnpm build`: genera el sitio estático en `dist/` y reconstruye el índice de búsqueda.
- `pnpm preview`: sirve localmente la versión compilada.
- `pnpm check`: valida tipos e integración Astro.

## Flujo normal de trabajo

1. Editar contenido, configuración o estilos.
2. Ejecutar `pnpm dev`.
3. Validar con `pnpm build`.
4. Subir cambios al repositorio.

## Despliegue en Vercel

Flujo recomendado si el repositorio ya está conectado a Vercel:

```bash
git add .
git commit -m "Actualiza portal"
git push origin main
```

Con ese `push`, Vercel normalmente genera el deploy automático a producción o al branch configurado.

Flujo manual con CLI, solo si ya tienes Vercel instalado y el proyecto enlazado:

```bash
vercel
vercel --prod
```

Comandos útiles de primera configuración si alguna vez hace falta relinkear:

```bash
vercel login
vercel link
```

## Dónde se edita cada cosa

- Contenido de publicaciones: `src/contents/posts/`
- Texto de la página “About”: `src/contents/specs/about.md`
- Configuración general del portal: `raptors.config.ts`
- Imágenes del carrusel del home: `src/assets/home-carousel/`
- Cada post vive en su propia carpeta dentro de `src/contents/posts/`
- Assets públicos por evento: `public/posts/`
- Branding global del sitio: `public/site/`
- Metadatos, fuentes y favicon: `src/components/BaseHead.astro`
- Estilo global y tokens de color: `src/components/GlobalStyles.astro`
- Hero y carrusel principal: `src/components/Banner.astro`
- Navegación: `src/components/NavBar.astro`
- Tarjetas de portada: `src/components/PostCard.astro`
- Archivos públicos directos: `public/`

## Estructura rápida

```text
.
├── public/                  # archivos estáticos, imágenes, GPX, HTML auxiliares
│   ├── posts/               # archivos públicos agrupados por evento/post
│   └── site/                # branding e iconos globales del sitio
├── src/
│   ├── components/          # navbar, banner, footer, tarjetas, búsqueda
│   ├── assets/
│   │   ├── home-carousel/   # imágenes exclusivas del hero/carrusel del home
│   ├── contents/
│   │   ├── posts/           # cada post en su carpeta con md + cover
│   │   └── specs/           # contenido fijo, por ejemplo about
│   ├── layouts/             # layouts base y de posts
│   ├── locales/             # textos i18n
│   ├── pages/               # rutas Astro
│   ├── plugins/             # plugins markdown
│   ├── styles/              # estilos globales
│   ├── types/               # tipos del proyecto
│   └── utils/               # helpers de contenido, fechas, hash, cover
├── astro.config.mjs
├── package.json
└── raptors.config.ts
```

## Notas operativas

- El sitio usa `src/contents/posts/` como fuente principal de publicaciones.
- `pnpm build` también actualiza la búsqueda, así que conviene correrlo antes de publicar.
- Los archivos en `public/` se sirven tal cual, sin pasar por el pipeline de Astro.
- Si cambias branding, colores o tipografías, empieza por `raptors.config.ts` y `src/components/GlobalStyles.astro`.
- El carrusel del home carga automáticamente todas las imágenes dentro de `src/assets/home-carousel/`.
- Para un post nuevo, crea una carpeta en `src/contents/posts/` con este patrón: `Nombre del post/Nombre del post.md` y coloca ahí mismo su `cover.jpg`, `cover.png`, `cover.webp` o `cover.avif`.
- Si un post necesita descargas, HTML auxiliares o imágenes públicas adicionales, guárdalas en `public/posts/<slug-del-evento>/`.

## Limpieza aplicada

Se retiró la documentación genérica de plantilla y contenido tutorial sin uso.

## Siguientes fases

Mejoras sugeridas para las próximas iteraciones del proyecto:

- Definir una guía editorial corta para posts:
  usar una misma estructura de `title`, `description`, fecha, portada y tono de redacción para que archivo y home se sientan consistentes.
- Formalizar una convención de nombres para assets:
  especialmente en `src/assets/home-carousel/`, `public/posts/` y `public/site/` para evitar mezclas entre branding, eventos y contenido temporal.
- Afinar la experiencia móvil completa:
  revisar spacing, alturas, overlays y navegación en pantallas pequeñas después de cada cambio visual fuerte.
- Revisar accesibilidad visual:
  contraste de textos, foco visible en enlaces y botones, estados hover/focus, y lectura real en modo claro y oscuro.
- Unificar la identidad del aniversario:
  decidir qué elementos son permanentes del sitio y cuáles son solo de campaña para poder activarlos o retirarlos sin tocar muchos componentes.
- Optimizar imágenes:
  normalizar pesos, dimensiones y formatos de portadas y carrusel para mejorar carga en móvil.
- Mejorar SEO básico del contenido:
  revisar títulos, descripciones, `og:` metadata e imagen social compartida por post.
- Preparar una pauta de despliegue:
  documentar un mini checklist antes de hacer `git push` a producción, por ejemplo `pnpm check`, `pnpm build`, revisión de links, revisión móvil y revisión de assets nuevos.
- Revisar dependencias cada cierto tiempo:
  especialmente `Browserslist`, Astro y plugins de búsqueda/transiciones para evitar deuda técnica silenciosa.
- Considerar una fase de componentes reutilizables:
  si el sitio sigue creciendo, conviene separar mejor patrones como cards, badges, bloques editoriales y hero campaigns para no repetir estilos.

## Licencia

Se conserva el archivo `LICENSE` existente como rastro de atribución del código base original sobre el que se hicieron modificaciones.
