import type { ImageMetadata } from 'astro';
import { species } from './species';

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
  { category: 'astro', key: 'galaxies', label: 'Galaxies', cover: '' },
  { category: 'astro', key: 'nebulae', label: 'Nebulae', cover: '' },
  { category: 'astro', key: 'more', label: 'More', cover: '' },
  { category: 'nature', key: 'birds', label: 'Birds', cover: '' },
  { category: 'nature', key: 'mammals', label: 'Mammals', cover: '' },
  { category: 'nature', key: 'reptiles-and-amphibians', label: 'Reptiles & Amphibians', cover: '' },
  { category: 'nature', key: 'arthropods', label: 'Arthropods', cover: '' },
  { category: 'nature', key: 'rocks-and-minerals', label: 'Rocks & Minerals', cover: '' },
  { category: 'misc', key: 'hot-air-balloons', label: 'Hot Air Balloons', cover: '' },
];

/* DETAILS for each photo, keyed by 'category/filename'. Every field is optional.
     subject:    name shown above the photo (defaults to the filename)
     collection: which collection it belongs to (a key from the list above)
     species:    key from species.ts. Photos with the same species show as ONE tile, and the
                 photo page shows all of them in a column.
     lead:       true on the photo that should represent its species (default: the newest)
     date:       when it was taken, e.g. 'March 2026', 'March 14, 2026' or '2026-03-14'.
                 Photos are shown newest first; photos without a readable date come last.
     full:       public Google Drive link for the "Full resolution" button
   The photo page shows the name, scientific name and date only, without labels. */
type Details = { subject?: string; collection?: string; species?: string; lead?: boolean; date?: string; full?: string };
const details: Record<string, Details> = {
  // ---------- astro
  'astro/2024-solar-eclipse.jpg': { subject: '2024 Solar Eclipse', collection: 'more', date: '', full: '' },
  'astro/aurora-pillars.jpg': { subject: 'Aurora Pillars', collection: 'more', date: '', full: '' },
  'astro/aurora-pine.jpg': { subject: 'Aurora Pine', collection: 'more', date: '', full: '' },
  'astro/coathanger-asterism.jpg': { subject: 'Coathanger Asterism', collection: 'more', date: '', full: '' },
  'astro/crescent-nebula.jpg': { subject: 'Crescent Nebula', collection: 'nebulae', date: '', full: '' },
  'astro/elephant-trunk-nebula.jpg': { subject: 'Elephant Trunk Nebula', collection: 'nebulae', date: '', full: '' },
  'astro/gecko-nebula.jpg': { subject: 'Gecko Nebula', collection: 'nebulae', date: '', full: '' },
  'astro/milkyway-over-elbert.jpg': { subject: 'Milkyway Over Elbert', collection: 'more', date: '', full: '' },
  'astro/nebulae-of-cygnus.jpg': { subject: 'Nebulae Of Cygnus', collection: 'nebulae', date: '', full: '' },
  'astro/nebulae-of-monoceros.jpg': { subject: 'Nebulae Of Monoceros', collection: 'nebulae', date: '', full: '' },
  'astro/north-america-and-pelican-nebulae.jpg': { subject: 'North America And Pelican Nebulae', collection: 'nebulae', date: '', full: '' },
  'astro/orion-nebula.jpg': { subject: 'Orion Nebula', collection: 'nebulae', date: 'November 2024', full: 'https://drive.google.com/file/d/1HXRJZqom2ueJr-fdzx898qJWd0JgYULw/view?usp=sharing' },
  'astro/pinwheel-galaxy.jpg': { subject: 'Pinwheel Galaxy', collection: 'galaxies', date: '', full: '' },
  'astro/snr-g653-57.jpg': { subject: 'SNR G65.3+5.7', collection: 'nebulae', date: '', full: '' },
  'astro/veil-nebula.jpg': { subject: 'Veil Nebula', collection: 'nebulae', date: '', full: '' },
  'astro/whirlpool-galaxy.jpg': { subject: 'Whirlpool Galaxy', collection: 'galaxies', date: '', full: '' },

  // ---------- nature
  'nature/alligator-environment.jpg': { subject: 'Alligator Environment', collection: 'reptiles-and-amphibians', species: 'alligator', date: '', full: '' },
  'nature/alligator-mother.jpg': { subject: 'Alligator Mother', collection: 'reptiles-and-amphibians', species: 'alligator', date: '', full: '' },
  'nature/anhinga.jpg': { subject: 'Anhinga', collection: 'birds', species: 'anhinga', date: '', full: '' },
  'nature/bananaquit.jpg': { subject: 'Bananaquit', collection: 'birds', species: 'bananaquit', date: '', full: '' },
  'nature/big-horn-sheep.jpg': { subject: 'Big Horn Sheep', collection: 'mammals', species: 'big-horn-sheep', date: '', full: '' },
  'nature/black-bellied-whistling-ducks-in-flight.jpg': { subject: 'Black Bellied Whistling Ducks In Flight', collection: 'birds', species: 'black-bellied-whistling-duck', date: '', full: '' },
  'nature/black-spiny-tailed-iguana-portrait.jpg': { subject: 'Black Spiny Tailed Iguana Portrait', collection: 'reptiles-and-amphibians', species: 'black-spiny-tailed-iguana', date: '', full: '' },
  'nature/blue-morpho-wing.jpg': { subject: 'Blue Morpho Wing', collection: 'arthropods', date: '', full: '' },
  'nature/central-american-spider-monkey-mother.jpg': { subject: 'Central American Spider Monkey Mother', collection: 'mammals', species: 'central-american-spider-monkey', date: '', full: '' },
  'nature/central-american-squirrel-monkey.jpg': { subject: 'Central American Squirrel Monkey', collection: 'mammals', species: 'central-american-squirrel-monkey', date: '', full: '' },
  'nature/central-american-white-faced-capuchin.jpg': { subject: 'Central American White Faced Capuchin', collection: 'mammals', species: 'central-american-white-faced-capuchin', date: '', full: '' },
  'nature/central-american-white-faced-capuchin-looking.jpg': { subject: 'Central American White Faced Capuchin Looking', collection: 'mammals', species: 'central-american-white-faced-capuchin', date: '', full: '' },  // CHECK: filename was cut off in a screenshot
  'nature/central-american-white-faced-capuchin-portrait.jpg': { subject: 'Central American White Faced Capuchin Portrait', collection: 'mammals', species: 'central-american-white-faced-capuchin', date: '', full: '' },  // CHECK: filename was cut off in a screenshot
  'nature/chachalaca-in-a-tree.jpg': { subject: 'Chachalaca In A Tree', collection: 'birds', date: '', full: '' },
  'nature/charming-hummingbird.jpg': { subject: 'Charming Hummingbird', collection: 'birds', species: 'charming-hummingbird', date: '', full: '' },
  'nature/common-black-hawk.jpg': { subject: 'Common Black Hawk', collection: 'birds', species: 'common-black-hawk', date: '', full: '' },
  'nature/common-black-hawk-in-flight.jpg': { subject: 'Common Black Hawk In Flight', collection: 'birds', species: 'common-black-hawk', date: '', full: '' },
  'nature/common-blunt-headed-tree-snake-close.jpg': { subject: 'Common Blunt Headed Tree Snake Close', collection: 'reptiles-and-amphibians', species: 'common-blunt-headed-tree-snake', date: '', full: '' },
  'nature/common-blunt-headed-tree-snake-periscope.jpg': { subject: 'Common Blunt Headed Tree Snake Periscope', collection: 'reptiles-and-amphibians', species: 'common-blunt-headed-tree-snake', date: '', full: '' },  // CHECK: filename was cut off in a screenshot
  'nature/common-blunt-headed-tree-snake-portrait.jpg': { subject: 'Common Blunt Headed Tree Snake Portrait', collection: 'reptiles-and-amphibians', species: 'common-blunt-headed-tree-snake', date: '', full: '' },  // CHECK: filename was cut off in a screenshot
  'nature/common-loon.jpg': { subject: 'Common Loon', collection: 'birds', species: 'common-loon', date: '', full: '' },
  'nature/crested-guan.jpg': { subject: 'Crested Guan', collection: 'birds', species: 'crested-guan', date: '', full: '' },
  'nature/eastern-garter-portrait.jpg': { subject: 'Eastern Garter Portrait', collection: 'reptiles-and-amphibians', species: 'eastern-garter', date: '', full: '' },
  'nature/fly-catcher.jpg': { subject: 'Fly Catcher', collection: 'birds', date: '', full: '' },
  'nature/fly-on-yellow-flower.jpg': { subject: 'Fly On Yellow Flower', collection: 'arthropods', date: '', full: '' },
  'nature/gopher-tortoise.jpg': { subject: 'Gopher Tortoise', collection: 'reptiles-and-amphibians', species: 'gopher-tortoise', date: '', full: '' },
  'nature/granular-poison-frog.jpg': { subject: 'Granular Poison Frog', collection: 'reptiles-and-amphibians', species: 'granular-poison-frog', date: '', full: '' },
  'nature/great-blue-heron-environment.jpg': { subject: 'Great Blue Heron Environment', collection: 'birds', species: 'great-blue-heron', date: '', full: '' },
  'nature/great-blue-heron-in-flight.jpg': { subject: 'Great Blue Heron In Flight', collection: 'birds', species: 'great-blue-heron', date: '', full: '' },
  'nature/green-sweat-bee.jpg': { subject: 'Green Sweat Bee', collection: 'arthropods', date: '', full: '' },
  'nature/howler-monkey.jpg': { subject: 'Howler Monkey', collection: 'mammals', date: '', full: '' },
  'nature/humpback-whale-with-calf.jpg': { subject: 'Humpback Whale With Calf', collection: 'mammals', species: 'humpback-whale', date: '', full: '' },
  'nature/katydid-munching-leaf.jpg': { subject: 'Katydid Munching Leaf', collection: 'arthropods', date: '', full: '' },
  'nature/leaf-cutter-ant-focus.jpg': { subject: 'Leaf Cutter Ant Focus', collection: 'arthropods', species: 'leaf-cutter-ant', date: '', full: '' },
  'nature/leaf-cutter-ant-march.jpg': { subject: 'Leaf Cutter Ant March', collection: 'arthropods', species: 'leaf-cutter-ant', date: '', full: '' },
  'nature/leaf-cutter-ant-standoff.jpg': { subject: 'Leaf Cutter Ant Standoff', collection: 'arthropods', species: 'leaf-cutter-ant', date: '', full: '' },
  'nature/northern-tamandua.jpg': { subject: 'Northern Tamandua', collection: 'mammals', species: 'northern-tamandua', date: '', full: '' },
  'nature/orange-butterfly.jpg': { subject: 'Orange Butterfly', collection: 'arthropods', date: '', full: '' },
  'nature/ornate-cat-eyed-snake.jpg': { subject: 'Ornate Cat Eyed Snake', collection: 'reptiles-and-amphibians', species: 'ornate-cat-eyed-snake', date: '', full: '' },
  'nature/ornate-cat-eyed-snake-portrait.jpg': { subject: 'Ornate Cat Eyed Snake Portrait', collection: 'reptiles-and-amphibians', species: 'ornate-cat-eyed-snake', date: '', full: '' },
  'nature/prairie-lizard.jpg': { subject: 'Prairie Lizard', collection: 'reptiles-and-amphibians', species: 'prairie-lizard', date: '', full: '' },
  'nature/rainforest-toad.jpg': { subject: 'Rainforest Toad', collection: 'reptiles-and-amphibians', date: '', full: '' },
  'nature/red-thighed-bromeliad-spider.jpg': { subject: 'Red Thighed Bromeliad Spider', collection: 'arthropods', date: '', full: '' },
  'nature/reddish-egret.jpg': { subject: 'Reddish Egret', collection: 'birds', species: 'reddish-egret', date: '', full: '' },
  'nature/road-hawk.jpg': { subject: 'Road Hawk', collection: 'birds', species: 'road-hawk', date: '', full: '' },
  'nature/rocky-mountain-parnassian.jpg': { subject: 'Rocky Mountain Parnassian', collection: 'arthropods', species: 'rocky-mountain-parnassian', date: '', full: '' },
  'nature/scarlet-rumped-tanager.jpg': { subject: 'Scarlet Rumped Tanager', collection: 'birds', species: 'scarlet-rumped-tanager', date: '', full: '' },
  'nature/slaty-tailed-trogan.jpg': { subject: 'Slaty Tailed Trogan', collection: 'birds', species: 'slaty-tailed-trogan', date: '', full: '' },
  'nature/squirrel.jpg': { subject: 'Squirrel', collection: 'mammals', date: '', full: '' },
  'nature/summer-tanager.jpg': { subject: 'Summer Tanager', collection: 'birds', species: 'summer-tanager', date: '', full: '' },
  'nature/sunlight-through-the-bee-wing.jpg': { subject: 'Sunlight Through The Bee Wing', collection: 'arthropods', date: '', full: '' },
  'nature/terciopelo-baby.jpg': { subject: 'Terciopelo Baby', collection: 'reptiles-and-amphibians', species: 'terciopelo', date: '', full: '' },
  'nature/terciopelo-through-the-grass.jpg': { subject: 'Terciopelo Through The Grass', collection: 'reptiles-and-amphibians', species: 'terciopelo', date: '', full: '' },
  'nature/thick-billed-euphonia.jpg': { subject: 'Thick Billed Euphonia', collection: 'birds', species: 'thick-billed-euphonia', date: '', full: '' },
  'nature/tityus-scorpion.jpg': { subject: 'Tityus Scorpion', collection: 'arthropods', date: '', full: '' },
  'nature/tropical-flat-snake-gaze.jpg': { subject: 'Tropical Flat Snake Gaze', collection: 'reptiles-and-amphibians', species: 'tropical-flat-snake', date: '', full: '' },
  'nature/tropical-flat-snake-portrait.jpg': { subject: 'Tropical Flat Snake Portrait', collection: 'reptiles-and-amphibians', species: 'tropical-flat-snake', date: '', full: '' },
  'nature/tropical-flat-snake-wide-portrait.jpg': { subject: 'Tropical Flat Snake Wide Portrait', collection: 'reptiles-and-amphibians', species: 'tropical-flat-snake', date: '', full: '' },
  'nature/turkey-vulture.jpg': { subject: 'Turkey Vulture', collection: 'birds', species: 'turkey-vulture', date: '', full: '' },
  'nature/yellow-crystal-macro.jpg': { subject: 'Yellow Crystal Macro', collection: 'rocks-and-minerals', date: '', full: '' },
  'nature/yellow-throated-toucan.jpg': { subject: 'Yellow Throated Toucan', collection: 'birds', species: 'yellow-throated-toucan', date: '', full: '' },

  // ---------- misc
  'misc/blue-balloon.jpg': { subject: 'Blue Balloon', collection: 'hot-air-balloons', date: '', full: '' },
  'misc/colorful-balloons.jpg': { subject: 'Colorful Balloons', collection: 'hot-air-balloons', date: '', full: '' },
  'misc/rainbow-balloon.jpg': { subject: 'Rainbow Balloon', collection: 'hot-air-balloons', date: '', full: '' },
  'misc/two-balloons.jpg': { subject: 'Two Balloons', collection: 'hot-air-balloons', date: '', full: '' },
};

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
    return { ...d, slug: `${category}-${name}`, category, file, img: mod.default, subject: d.subject ?? name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) };
  })
  .filter((p) => ['astro', 'nature', 'misc'].includes(p.category))
  .sort((a, b) => time(b) - time(a) || a.file.localeCompare(b.file));

/* ITEMS: what the galleries show. Photos of the same species become one item. */
export type Item = {
  slug: string; category: Category; collection: string; name: string;
  scientific?: string; date?: string; photos: Photo[]; lead: Photo;
};

const groups = new Map<string, Photo[]>();
for (const p of photos) {
  const key = p.species ? 's:' + p.species : 'p:' + p.slug;
  groups.set(key, [...(groups.get(key) ?? []), p]);
}

export const items: Item[] = [...groups.values()].map((list) => {
  const lead = list.find((p) => p.lead) ?? list[0];
  const sp = lead.species ? species[lead.species] : undefined;
  const dates = [...new Set(list.map((p) => p.date).filter(Boolean))] as string[];
  return {
    slug: lead.species ?? lead.slug,
    category: lead.category,
    collection: lead.collection ?? '',
    name: list.length > 1 ? (sp?.name ?? lead.subject) : lead.subject,
    scientific: sp?.scientific || undefined,
    date: dates.length === 1 ? dates[0] : undefined,
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
