import type { ImageMetadata } from 'astro';

/* Categories shown in the row above the gallery. The first one is the home page. */
export const categories = [
  { key: 'astro', label: 'Astro', href: '/' },
  { key: 'nature', label: 'Nature', href: '/nature/' },
  { key: 'misc', label: 'Misc', href: '/misc/' },
] as const;
export type Category = (typeof categories)[number]['key'];

/* Turns '/photo/x/' into the right address, even if the site lives in a sub-folder. */
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;

/* OPTIONAL details for a photo, keyed by 'category/filename'. Every field is optional.
     subject: name of the subject (defaults to the filename)
     date:    when it was taken, worded how you want it shown (e.g. 'March 2026')
     notes:   a short optional note
     full:    public Google Drive link for the "Full resolution" button
   The photo page shows the values only, without labels. */
type Details = { subject?: string; date?: string; notes?: string; full?: string };
const details: Record<string, Details> = {
  // 'astro/orion-nebula.jpg': {
  //   subject: 'Orion Nebula',
  //   date: 'March 2026',
  //   notes: 'Optional short note.',
  //   full: 'https://drive.google.com/file/d/FILE_ID/view?usp=sharing',
  // },
};

/* Every image in src/assets/photos/<category>/ becomes a photo automatically. */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true }
);

export type Photo = Details & { slug: string; category: Category; file: string; subject: string; img: ImageMetadata };

export const photos: Photo[] = Object.entries(modules)
  .map(([path, mod]) => {
    const file = path.replace('/src/assets/photos/', '');
    const category = file.split('/')[0] as Category;
    const name = file.split('/')[1].replace(/\.[^.]+$/, '');
    const d = details[file] ?? {};
    return { ...d, slug: `${category}-${name}`, category, file, img: mod.default, subject: d.subject ?? name.replace(/[-_]+/g, ' ') };
  })
  .filter((p) => categories.some((c) => c.key === p.category))
  .sort((a, b) => a.file.localeCompare(b.file));
