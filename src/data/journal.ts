import type { ImageMetadata } from 'astro';

/* Journal entries. Each body item is one paragraph. */
const list = [
  { slug: 'the-equipment', title: 'The Equipment', summary: 'Coming soon...', body: ['Coming soon...'] },
  { slug: 'the-process', title: 'The Process', summary: 'Coming soon...', body: ['Coming soon...'] },
];

/* Thumbnails: put an image named after the entry's slug in src/assets/journal/
   (for example the-equipment.jpg). Entries without one show a gray placeholder. */
const thumbs = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/journal/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true }
);
const thumbFor = (slug: string) => {
  const key = Object.keys(thumbs).find((k) => k.split('/').pop()!.replace(/\.[^.]+$/, '') === slug);
  return key ? thumbs[key].default : undefined;
};

export const entries = list.map((e) => ({ ...e, thumb: thumbFor(e.slug) }));
