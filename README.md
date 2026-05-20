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
├── src/
│   ├── components/          # navbar, banner, footer, tarjetas, búsqueda
│   ├── contents/
│   │   ├── posts/           # publicaciones del sitio
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

## Limpieza aplicada

Se retiró la documentación genérica de plantilla y contenido tutorial sin uso.

## Licencia

Se conserva el archivo `LICENSE` existente como rastro de atribución del código base original sobre el que se hicieron modificaciones.
