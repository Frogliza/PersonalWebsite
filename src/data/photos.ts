import type { ImageMetadata } from 'astro';
import { species } from './species';
import { objects } from './objects';
import datesText from './dates.txt?raw';

export type Category = 'astro' | 'nature' | 'misc';

/* Buttons shown above the gallery. "All Photos" is the home page. */
export const categories = [
  { key: 'all', label: 'All Photos', href: '/' },
  { key: 'astro', label: 'Astro', href: '/astro/' },
  { key: 'nature', label: 'Nature', href: '/nature/' },
  { key: 'misc', label: 'Misc', href: '/misc/' },
] as const;

/* Turns '/photo/x/' into the right address, even if the site lives in a sub-folder. */
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;

/* COLLECTIONS shown on the Astro, Nature and Misc pages.
   cover: the photo used as the collection's thumbnail, written as 'category/filename',
          e.g. cover: 'nature/great-blue-heron-in-flight.jpg'. Leave '' to use the newest photo. */
export const collections: { category: Category; key: string; label: string; cover?: string }[] = [
  { category: 'astro', key: 'galaxies', label: 'Galaxies', cover: 'whirlpool-galaxy.jpg' },
  { category: 'astro', key: 'nebulae', label: 'Nebulae', cover: 'north-america-and-pelican-nebulae.jpg' },
  { category: 'astro', key: 'more', label: 'More', cover: 'milkyway-over-elbert.jpg' },
  { category: 'nature', key: 'birds', label: 'Birds', cover: 'charming-hummingbird.jpg' },
  { category: 'nature', key: 'mammals', label: 'Mammals', cover: 'central-american-white-faced-capuchin-portrait.jpg' },
  { category: 'nature', key: 'reptiles-and-amphibians', label: 'Reptiles & Amphibians', cover: 'tropical-flat-snake-wide-portrait.jpg' },
  { category: 'nature', key: 'arthropods', label: 'Arthropods', cover: 'green-sweat-bee.jpg' },
  { category: 'nature', key: 'rocks-and-minerals', label: 'Rocks & Minerals', cover: 'yellow-crystal-macro.jpg' },
  { category: 'misc', key: 'hot-air-balloons', label: 'Hot Air Balloons', cover: 'colorful-balloons.jpg' },
];

/* DETAILS for each photo, keyed by 'category/filename'. Every field is optional.
     subject:    name shown above the photo (defaults to the filename)
     collection: which collection it belongs to (a key from the list above)
     species:    key from species.ts. Photos with the same species show as ONE tile, and the
                 photo page shows all of them in a column.
     object:     key from objects.ts, for galaxies and nebulae (adds a catalog name like M101).
                 Photos with the same object are grouped the same way.
     lead:       true on the photo that should represent its species (default: the newest)
     date:       optional. Dates normally go in dates.txt; a date written here takes priority.
                 Photos are shown newest first; photos without a readable date come last.
     full:       public Google Drive link for the "Full resolution" button
   The photo page shows the name, scientific name and date only, without labels. */
type Details = { subject?: string; collection?: string; species?: string; object?: string; lead?: boolean; date?: string; full?: string };
const details: Record<string, Details> = {
  // ---------- astro
  'astro/2024-solar-eclipse.jpg': { subject: '2024 Solar Eclipse', collection: 'more', full: '' },
  'astro/aurora-pillars.jpg': { subject: 'Light Pillar', collection: 'more', full: '' },
  'astro/aurora-pine.jpg': { subject: 'Red & Green Aurorae and a Pine', collection: 'more', full: '' },
  'astro/coathanger-asterism.jpg': { subject: 'Coathanger Asterism', collection: 'more', full: '' },
  'astro/crescent-nebula.jpg': { subject: 'Crescent Nebula', collection: 'nebulae', object: 'crescent-nebula', full: '' },
  'astro/elephant-trunk-nebula.jpg': { subject: 'Elephant Trunk Nebula', collection: 'nebulae', object: 'elephant-trunk-nebula', full: '' },
  'astro/gecko-nebula.jpg': { subject: 'Gecko Nebula', collection: 'nebulae', object: 'gecko-nebula', full: '' },
  'astro/milkyway-over-elbert.jpg': { subject: 'Milkyway over Mount Elbert', collection: 'more', full: '' },
  'astro/nebulae-of-cygnus.jpg': { subject: 'Nebulae Of Cygnus', collection: 'nebulae', object: 'nebulae-of-cygnus', full: '' },
  'astro/nebulae-of-monoceros.jpg': { subject: 'Nebulae Of Monoceros', collection: 'nebulae', object: 'nebulae-of-monoceros', full: '' },
  'astro/north-america-and-pelican-nebulae.jpg': { subject: 'North America And Pelican Nebulae', collection: 'nebulae', object: 'north-america-and-pelican-nebulae', full: '' },
  'astro/orion-nebula.jpg': { subject: 'Orion Nebula', collection: 'nebulae', object: 'orion-nebula', full: 'https://drive.google.com/file/d/1HXRJZqom2ueJr-fdzx898qJWd0JgYULw/view?usp=sharing' },
  'astro/pinwheel-galaxy.jpg': { subject: 'Pinwheel Galaxy', collection: 'galaxies', object: 'pinwheel-galaxy', full: '' },
  'astro/snr-g653-57.jpg': { subject: 'The "Other" Veil Nebula', collection: 'nebulae', object: 'snr-g653-57', full: '' },
  'astro/veil-nebula.jpg': { subject: 'Veil Nebula (The Cygnus Loop)', collection: 'nebulae', object: 'veil-nebula', full: '' },
  'astro/whirlpool-galaxy.jpg': { subject: 'Whirlpool Galaxy', collection: 'galaxies', object: 'whirlpool-galaxy', full: '' },

  // ---------- nature
  'nature/alligator-environment.jpg': { subject: 'Alligator Environment', collection: 'reptiles-and-amphibians', species: 'alligator', full: '' },
  'nature/alligator-mother.jpg': { subject: 'Alligator Mother', collection: 'reptiles-and-amphibians', species: 'alligator', full: '' },
  'nature/anhinga.jpg': { subject: 'Anhinga', collection: 'birds', species: 'anhinga', full: '' },
  'nature/bananaquit.jpg': { subject: 'Bananaquit', collection: 'birds', species: 'bananaquit', full: '' },
  'nature/big-horn-sheep.jpg': { subject: 'Big-horn Sheep', collection: 'mammals', species: 'big-horn-sheep', full: '' },
  'nature/black-bellied-whistling-ducks-in-flight.jpg': { subject: 'Black-bellied Whistling Ducks', collection: 'birds', species: 'black-bellied-whistling-duck', full: '' },
  'nature/black-spiny-tailed-iguana-portrait.jpg': { subject: 'Black Spiny-tailed Iguana Portrait', collection: 'reptiles-and-amphibians', species: 'black-spiny-tailed-iguana', full: '' },
  'nature/blue-morpho-wing.jpg': { subject: 'Amathonte Morpho Wing', collection: 'arthropods', species: 'blue-morpho-wing', full: '' },
  'nature/central-american-spider-monkey-mother.jpg': { subject: 'Central American Spider Monkey Mother & Baby', collection: 'mammals', species: 'central-american-spider-monkey', full: '' },
  'nature/central-american-squirrel-monkey.jpg': { subject: 'Central American Squirrel Monkey', collection: 'mammals', species: 'central-american-squirrel-monkey', full: '' },
  'nature/central-american-white-faced-capuchin.jpg': { subject: 'Central American White-faced Capuchin 3', collection: 'mammals', species: 'central-american-white-faced-capuchin', full: '' },
  'nature/central-american-white-faced-capuchin-looking-up.jpg': { subject: 'Central American White Faced Capuchin 2', collection: 'mammals', species: 'central-american-white-faced-capuchin', full: '' },  // CHECK: filename was cut off in a screenshot
  'nature/central-american-white-faced-capuchin-portrait.jpg': { subject: 'Central American White Faced Capuchin 1', collection: 'mammals', species: 'central-american-white-faced-capuchin', full: '' },  // CHECK: filename was cut off in a screenshot
  'nature/chachalaca-in-a-tree.jpg': { subject: 'Gray Chachalaca', collection: 'birds', species: 'chachalaca-in-a-tree', full: '' },
  'nature/charming-hummingbird.jpg': { subject: 'Charming Hummingbird', collection: 'birds', species: 'charming-hummingbird', full: '' },
  'nature/common-black-hawk.jpg': { subject: 'Common Black Hawk', collection: 'birds', species: 'common-black-hawk', full: '' },
  'nature/common-black-hawk-in-flight.jpg': { subject: 'Common Black Hawk In Flight', collection: 'birds', species: 'common-black-hawk', full: '' },
  'nature/common-blunt-headed-tree-snake-close.jpg': { subject: 'Common Blunt Headed Tree Snake Close', collection: 'reptiles-and-amphibians', species: 'common-blunt-headed-tree-snake', full: '' },
  'nature/common-blunt-headed-tree-snake-periscope.jpg': { subject: 'Common Blunt Headed Tree Snake Periscope', collection: 'reptiles-and-amphibians', species: 'common-blunt-headed-tree-snake', full: '' },  // CHECK: filename was cut off in a screenshot
  'nature/common-blunt-headed-tree-snake-portrait.jpg': { subject: 'Common Blunt Headed Tree Snake Portrait', collection: 'reptiles-and-amphibians', species: 'common-blunt-headed-tree-snake', full: '' },  // CHECK: filename was cut off in a screenshot
  'nature/common-loon.jpg': { subject: 'Common Loon', collection: 'birds', species: 'common-loon', full: '' },
  'nature/crested-guan.jpg': { subject: 'Crested Guan', collection: 'birds', species: 'crested-guan', full: '' },
  'nature/eastern-garter-portrait.jpg': { subject: 'Eastern Garter Snake', collection: 'reptiles-and-amphibians', species: 'eastern-garter', full: '' },
  'nature/fly-catcher.jpg': { subject: 'Eastern Wood-Pewee', collection: 'birds', species: 'fly-catcher', full: '' },
  'nature/fly-on-yellow-flower.jpg': { subject: 'Swift Feather-legged Fly', collection: 'arthropods', species: 'fly-on-yellow-flower', full: '' },
  'nature/gopher-tortoise.jpg': { subject: 'Gopher Tortoise', collection: 'reptiles-and-amphibians', species: 'gopher-tortoise', full: '' },
  'nature/granular-poison-frog.jpg': { subject: 'Granular Poison Frog', collection: 'reptiles-and-amphibians', species: 'granular-poison-frog', full: '' },
  'nature/great-blue-heron-environment.jpg': { subject: 'Great Blue Heron Environment', collection: 'birds', species: 'great-blue-heron', full: '' },
  'nature/great-blue-heron-in-flight.jpg': { subject: 'Great Blue Heron In Flight', collection: 'birds', species: 'great-blue-heron', full: '' },
  'nature/green-sweat-bee.jpg': { subject: 'Pure Green Sweat Bee', collection: 'arthropods', species: 'green-sweat-bee', full: '' },
  'nature/howler-monkey.jpg': { subject: 'Mantled Howler Monkey', collection: 'mammals', species: 'howler-monkey', full: '' },
  'nature/humpback-whale-with-calf.jpg': { subject: 'Humpback Whale Mother & Calf', collection: 'mammals', species: 'humpback-whale', full: '' },
  'nature/katydid-munching-leaf.jpg': { subject: 'Katydid', collection: 'arthropods', species: 'katydid-munching-leaf', full: '' },
  'nature/leaf-cutter-ant-focus.jpg': { subject: 'Leaf Cutter Ant Focus', collection: 'arthropods', species: 'leaf-cutter-ant', full: '' },
  'nature/leaf-cutter-ant-march.jpg': { subject: 'Leaf Cutter Ant March', collection: 'arthropods', species: 'leaf-cutter-ant', full: '' },
  'nature/leaf-cutter-ant-standoff.jpg': { subject: 'Leaf Cutter Ant Standoff', collection: 'arthropods', species: 'leaf-cutter-ant', full: '' },
  'nature/northern-tamandua.jpg': { subject: 'Northern Tamandua', collection: 'mammals', species: 'northern-tamandua', full: '' },
  'nature/orange-butterfly.jpg': { subject: 'Butterfly (No Common Name)', collection: 'arthropods', species: 'orange-butterfly', full: '' },
  'nature/ornate-cat-eyed-snake.jpg': { subject: 'Ornate Cat Eyed Snake', collection: 'reptiles-and-amphibians', species: 'ornate-cat-eyed-snake', full: '' },
  'nature/ornate-cat-eyed-snake-portrait.jpg': { subject: 'Ornate Cat Eyed Snake Portrait', collection: 'reptiles-and-amphibians', species: 'ornate-cat-eyed-snake', full: '' },
  'nature/prairie-lizard.jpg': { subject: 'Prairie Lizard', collection: 'reptiles-and-amphibians', species: 'prairie-lizard', full: '' },
  'nature/rainforest-toad.jpg': { subject: 'Rainforest Toad', collection: 'reptiles-and-amphibians', species: 'rainforest-toad', full: '' },
  'nature/red-thighed-bromeliad-spider.jpg': { subject: 'Red-thighed Bromeliad Spider', collection: 'arthropods', species: 'red-thighed-bromeliad-spider', full: '' },
  'nature/reddish-egret.jpg': { subject: 'Reddish Egret', collection: 'birds', species: 'reddish-egret', full: '' },
  'nature/road-hawk.jpg': { subject: 'Road Hawk', collection: 'birds', species: 'road-hawk', full: '' },
  'nature/rocky-mountain-parnassian.jpg': { subject: 'Rocky Mountain Parnassian', collection: 'arthropods', species: 'rocky-mountain-parnassian', full: '' },
  'nature/scarlet-rumped-tanager.jpg': { subject: 'Scarlet-rumped Tanager', collection: 'birds', species: 'scarlet-rumped-tanager', full: '' },
  'nature/slaty-tailed-trogan.jpg': { subject: 'Slaty-tailed Trogan', collection: 'birds', species: 'slaty-tailed-trogan', full: '' },
  'nature/squirrel.jpg': { subject: 'Rock Squirrel', collection: 'mammals', species: 'squirrel', full: '' },
  'nature/summer-tanager.jpg': { subject: 'Summer Tanager', collection: 'birds', species: 'summer-tanager', full: '' },
  'nature/sunlight-through-the-bee-wing.jpg': { subject: 'Eastern Carpenter Bee', collection: 'arthropods', species: 'sunlight-through-the-bee-wing', full: '' },
  'nature/terciopelo-baby.jpg': { subject: 'Terciopelo Baby', collection: 'reptiles-and-amphibians', species: 'terciopelo', full: '' },
  'nature/terciopelo-through-the-grass.jpg': { subject: 'Terciopelo Through The Grass', collection: 'reptiles-and-amphibians', species: 'terciopelo', full: '' },
  'nature/thick-billed-euphonia.jpg': { subject: 'Thick-billed Euphonia', collection: 'birds', species: 'thick-billed-euphonia', full: '' },
  'nature/tityus-scorpion.jpg': { subject: 'Scorpion (No Common Name)', collection: 'arthropods', species: 'tityus-scorpion', full: '' },
  'nature/tropical-flat-snake-gaze.jpg': { subject: 'Tropical Flat Snake Gaze', collection: 'reptiles-and-amphibians', species: 'tropical-flat-snake', full: '' },
  'nature/tropical-flat-snake-portrait.jpg': { subject: 'Tropical Flat Snake Portrait', collection: 'reptiles-and-amphibians', species: 'tropical-flat-snake', full: '' },
  'nature/tropical-flat-snake-wide-portrait.jpg': { subject: 'Tropical Flat Snake Wide Portrait', collection: 'reptiles-and-amphibians', species: 'tropical-flat-snake', full: '' },
  'nature/turkey-vulture.jpg': { subject: 'Turkey Vulture', collection: 'birds', species: 'turkey-vulture', full: '' },
  'nature/yellow-crystal-macro.jpg': { subject: 'Orange Crystals', collection: 'rocks-and-minerals', species:'yellow-crystal-macro', full: '' },
  'nature/yellow-throated-toucan.jpg': { subject: 'Yellow-throated Toucan', collection: 'birds', species: 'yellow-throated-toucan', full: '' },

  // ---------- misc
  'misc/blue-balloon.jpg': { subject: 'Blue Balloon', collection: 'hot-air-balloons', full: '' },
  'misc/colorful-balloons.jpg': { subject: 'Colorful Balloons', collection: 'hot-air-balloons', full: '' },
  'misc/rainbow-balloon.jpg': { subject: 'Rainbow Balloon', collection: 'hot-air-balloons', full: '' },
  'misc/two-balloons.jpg': { subject: 'More Balloons', collection: 'hot-air-balloons', full: '' },
};

/* DATES from dates.txt: one "folder/filename = Month Year" per line. */
const dates: Record<string, string> = {};
for (const line of datesText.split(/\r?\n/)) {
  const t = line.trim();
  const i = t.indexOf('=');
  if (!t || t.startsWith('#') || i < 0) continue;
  const date = t.slice(i + 1).trim();
  if (date) dates[t.slice(0, i).trim()] = date;
}

/* Every image in src/assets/photos/<category>/ becomes a photo automatically. */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true }
);

export type Photo = Details & { slug: string; category: Category; file: string; subject: string; img: ImageMetadata };

/* Newest first: photos with no readable date sort last. */
const time = (p: { date?: string }) => {
  const t = Date.parse(p.date ?? '');
  return Number.isNaN(t) ? -Infinity : t;
};

export const photos: Photo[] = Object.entries(modules)
  .map(([path, mod]) => {
    const file = path.replace('/src/assets/photos/', '');
    const category = file.split('/')[0] as Category;
    const name = file.split('/')[1].replace(/\.[^.]+$/, '');
    const d = details[file] ?? {};
    return { ...d, date: d.date || dates[file], slug: `${category}-${name}`, category, file, img: mod.default, subject: d.subject ?? name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) };
  })
  .filter((p) => ['astro', 'nature', 'misc'].includes(p.category))
  .sort((a, b) => time(b) - time(a) || a.file.localeCompare(b.file));

/* Warn (in the build log) about typos in dates.txt. */
for (const [file, date] of Object.entries(dates)) {
  if (!photos.some((p) => p.file === file)) console.warn(`[dates.txt] No photo named "${file}"`);
  else if (Number.isNaN(Date.parse(date))) console.warn(`[dates.txt] Can't read the date "${date}" for ${file}. Use a format like "March 2026".`);
}

/* ITEMS: what the galleries show. Photos of the same species become one item. */
export type Item = {
  slug: string; category: Category; collection: string; name: string;
  scientific?: string; catalog?: string; date?: string; photos: Photo[]; lead: Photo;
};

const groups = new Map<string, Photo[]>();
for (const p of photos) {
  const key = p.species ? 's:' + p.species : p.object ? 'o:' + p.object : 'p:' + p.slug;
  groups.set(key, [...(groups.get(key) ?? []), p]);
}

export const items: Item[] = [...groups.values()].map((list) => {
  const lead = list.find((p) => p.lead) ?? list[0];
  const sp = lead.species ? species[lead.species] : undefined;
  const ob = lead.object ? objects[lead.object] : undefined;
  const shown = [...new Set(list.map((p) => p.date).filter(Boolean))] as string[];
  return {
    slug: lead.species ?? lead.object ?? lead.slug,
    category: lead.category,
    collection: lead.collection ?? '',
    name: list.length > 1 ? (sp?.name ?? ob?.name ?? lead.subject) : lead.subject,
    scientific: sp?.scientific || undefined,
    catalog: ob?.catalog || undefined,
    date: shown.length === 1 ? shown[0] : undefined,
    photos: [lead, ...list.filter((p) => p !== lead)],
    lead,
  };
});

/* Collections with their photo count and thumbnail. */
export const collectionList = collections.map((c) => {
  const inCollection = (p: Photo) => p.category === c.category && (p.collection ?? '') === c.key;
  const cover = (c.cover && photos.find((p) => p.file === c.cover)) || items.find((i) => i.category === c.category && i.collection === c.key)?.lead;
  return { ...c, count: photos.filter(inCollection).length, coverImg: cover?.img };
});
