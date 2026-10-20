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
   A photo with no entry still appears; its title comes from the filename.
   `full` is the public Google Drive link that powers the "Full resolution" button. */
type Details = {
  title?: string;
  date?: string;
  location?: string;
  camera?: string;
  settings?: string;
  info?: string;
  full?: string;
};
const details: Record<string, Details> = {
  // 'astro/orion-nebula.jpg': {
  //   title: 'Orion Nebula',
  //   date: 'March 2026',
  //   location: 'Location',
  //   camera: 'Camera and lens',
  //   settings: 'Exposure settings',
  //   info: 'A few sentences about the photo.',
  //   full: 'https://drive.google.com/file/d/FILE_ID/view?usp=sharing',
  // },
};

/* Every image in src/assets/photos/<category>/ becomes a photo automatically. */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true }
);

export type Photo = Details & { slug: string; category: Category; file: string; title: string; img: ImageMetadata };

export const photos: Photo[] = Object.entries(modules)
  .map(([path, mod]) => {
    const file = path.replace('/src/assets/photos/', '');
    const category = file.split('/')[0] as Category;
    const name = file.split('/')[1].replace(/\.[^.]+$/, '');
    const d = details[file] ?? {};
    return { ...d, slug: `${category}-${name}`, category, file, img: mod.default, title: d.title ?? name.replace(/[-_]+/g, ' ') };
  })
  .filter((p) => categories.some((c) => c.key === p.category))
  .sort((a, b) => a.file.localeCompare(b.file));
