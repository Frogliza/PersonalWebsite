import type { ImageMetadata } from 'astro';

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
  { category: 'astro', key: 'galaxies', label: 'Galaxies', cover: 'astro/whirlpool-galaxy.jpg' },
  { category: 'astro', key: 'nebulae', label: 'Nebulae', cover: 'astro/north-america-and-pelican-nebulae.jpg' },
  { category: 'astro', key: 'more', label: 'More', cover: 'astro/milkyway-over-elbert.jpg' },
  { category: 'nature', key: 'birds', label: 'Birds', cover: 'nature/charming-hummingbird.jpg' },
  { category: 'nature', key: 'mammals', label: 'Mammals', cover: 'nature/central-american-white-faced-capuchin-portrait.jpg' },
  { category: 'nature', key: 'reptiles-and-amphibians', label: 'Reptiles & Amphibians', cover: 'nature/tropical-flat-snake-wide-portrait.jpg' },
  { category: 'nature', key: 'arthropods', label: 'Arthropods', cover: 'nature/green-sweat-bee.jpg' },
  { category: 'nature', key: 'rocks-and-minerals', label: 'Rocks & Minerals', cover: 'nature/yellow-crystal-macro.jpg' },
  { category: 'misc', key: 'hot-air-balloons', label: 'Hot Air Balloons', cover: 'misc/colorful-balloons.jpg' },
];

/* DETAILS for each photo, keyed by 'category/filename'. Every field is optional.
     subject:    the name shown with the photo (defaults to the filename)
     scientific: an animal's scientific name, shown in small italic text under the name
     catalog:    a galaxy or nebula's catalog name (e.g. M101), shown in small text under the name
     (Grouping is automatic: photos with the same scientific name, or the same catalog name, show
     as ONE tile, and the photo page lists them all in a column. The name, scientific/catalog name
     and top date come from the lead photo.)
     lead:       true on the photo that represents its group (default: the newest one)
     collection: which collection it belongs to (a key from the list above)
     date:       month and year, e.g. 'March 2026' ('March 14, 2026' or '2026-03-14' also work).
                 Photos are shown newest first. In a group, the other photos show their own date
                 above them only when it differs from the lead photo's date.
     full:       public Google Drive link for the "Full resolution" button */
type Details = {
  subject?: string; scientific?: string; catalog?: string; lead?: boolean;
  collection?: string; date?: string; full?: string;
};
const details: Record<string, Details> = {
  // ---------- astro / galaxies
  'astro/pinwheel-galaxy.jpg': { subject: 'Pinwheel Galaxy', catalog: 'M101', collection: 'galaxies', date: 'May 2024', full: '' },
  'astro/whirlpool-galaxy.jpg': { subject: 'Whirlpool Galaxy', catalog: 'M51', collection: 'galaxies', date: 'May 2023', full: '' },

  // ---------- astro / nebulae
  'astro/crescent-nebula.jpg': { subject: 'Crescent Nebula', catalog: 'NGC 6888', collection: 'nebulae', date: 'December 2023', full: '' },
  'astro/elephant-trunk-nebula.jpg': { subject: 'Elephant Trunk Nebula', catalog: 'IC 1396', collection: 'nebulae', date: 'September 2026', full: '' },
  'astro/gecko-nebula.jpg': { subject: 'Gecko Nebula', catalog: 'LBN 437', collection: 'nebulae', date: 'June 2024', full: '' },
  'astro/nebulae-of-cygnus.jpg': { subject: 'Nebulae of Cygnus', catalog: 'Cygnus', collection: 'nebulae', date: 'July 2024', full: '' },
  'astro/nebulae-of-monoceros.jpg': { subject: 'Nebulae of Monoceros', catalog: 'Monoceros', collection: 'nebulae', date: 'November 2023', full: '' },
  'astro/north-america-and-pelican-nebulae.jpg': { subject: 'North America and Pelican Nebulae', catalog: 'NGC 7000 & IC 5070', lead: true, collection: 'nebulae', date: 'June 2024', full: '' },
  'astro/north-america-and-pelican-nebulae-starless.jpg': { subject: 'North America and Pelican Nebulae', catalog: 'NGC 7000 & IC 5070', collection: 'nebulae', date: 'June 2024', full: '' },
  'astro/orion-nebula.jpg': { subject: 'Orion Nebula', catalog: 'M42', collection: 'nebulae', date: 'November 2024', full: 'https://drive.google.com/file/d/1HXRJZqom2ueJr-fdzx898qJWd0JgYULw/view?usp=sharing' },
  'astro/snr-g653-57.jpg': { subject: 'The "Other" Veil Nebula', catalog: 'SNR G65.3+5.7', collection: 'nebulae', date: 'August 2024', full: '' },
  'astro/veil-nebula.jpg': { subject: 'Veil Nebula (The Cygnus Loop)', catalog: 'SNR G074.0-08.6', collection: 'nebulae', date: 'June 2023', full: '' },

  // ---------- astro / more
  'astro/2024-solar-eclipse.jpg': { subject: '2024 Solar Eclipse', collection: 'more', date: 'April 2024', full: '' },
  'astro/aurora-pillars.jpg': { subject: 'Light Pillar', catalog: 'Aurora Borealis', collection: 'more', date: 'October 2024', full: '' },
  'astro/aurora-pine.jpg': { subject: 'Aurorae in Pennsylvania', catalog: 'Aurora Borealis', lead: true, collection: 'more', date: 'October 2024', full: '' },
  'astro/coathanger-asterism.jpg': { subject: 'Coathanger Asterism', collection: 'more', date: 'June 2024', full: '' },
  'astro/milkyway-over-elbert.jpg': { subject: 'Milkyway Over Elbert', collection: 'more', date: 'August 2024', full: '' },

  // ---------- nature / birds
  'nature/anhinga.jpg': { subject: 'Anhinga', scientific: 'Anhinga anhinga', collection: 'birds', date: 'August 2023', full: '' },
  'nature/bananaquit.jpg': { subject: 'Bananaquit', scientific: 'Coereba flaveola', collection: 'birds', date: 'November 2025', full: '' },
  'nature/black-bellied-whistling-ducks-in-flight.jpg': { subject: 'Black-bellied Whistling Duck', scientific: 'Dendrocygna autumnalis', collection: 'birds', date: 'August 2023', full: '' },
  'nature/chachalaca-in-a-tree.jpg': { subject: 'Gray Chachalaca', scientific: 'Ortalis cinereiceps', collection: 'birds', date: 'November 2025', full: '' },
  'nature/charming-hummingbird.jpg': { subject: 'Charming Hummingbird', scientific: 'Amazilia decora', collection: 'birds', date: 'November 2025', full: '' },
  'nature/common-black-hawk-in-flight.jpg': { subject: 'Common Black Hawk', scientific: 'Buteogallus anthracinus', collection: 'birds', date: 'November 2025', full: '' },
  'nature/common-black-hawk.jpg': { subject: 'Common Black Hawk', scientific: 'Buteogallus anthracinus', lead: true, collection: 'birds', date: 'November 2025', full: '' },
  'nature/common-loon.jpg': { subject: 'Common Loon', scientific: 'Gavia immer', collection: 'birds', date: 'August 2023', full: '' },
  'nature/crested-guan.jpg': { subject: 'Crested Guan', scientific: 'Penelope purpurascens', collection: 'birds', date: 'November 2025', full: '' },
  'nature/fly-catcher.jpg': { subject: 'Eastern Wood-Pewee', scientific: 'Contopus virens', collection: 'birds', date: 'July 2023', full: '' },
  'nature/great-blue-heron-environment.jpg': { subject: 'Great Blue Heron', scientific: 'Ardea herodias', lead: true, collection: 'birds', date: 'April 2026', full: '' },
  'nature/great-blue-heron-in-flight.jpg': { subject: 'Great Blue Heron', scientific: 'Ardea herodias', collection: 'birds', date: 'April 2026', full: '' },
  'nature/reddish-egret.jpg': { subject: 'Reddish Egret', scientific: 'Egretta rufescens', collection: 'birds', date: 'May 2024', full: '' },
  'nature/road-hawk.jpg': { subject: 'Road Hawk', scientific: 'Rupornis magnirostris', collection: 'birds', date: 'November 2025', full: '' },
  'nature/scarlet-rumped-tanager.jpg': { subject: 'Scarlet-rumped Tanager', scientific: 'Ramphocelus passerinii', collection: 'birds', date: 'November 2025', full: '' },
  'nature/slaty-tailed-trogan.jpg': { subject: 'Slaty-tailed Trogan', scientific: 'Trogon massena', collection: 'birds', date: 'November 2025', full: '' },
  'nature/summer-tanager.jpg': { subject: 'Summer Tanager', scientific: 'Piranga rubra', collection: 'birds', date: 'November 2025', full: '' },
  'nature/thick-billed-euphonia.jpg': { subject: 'Thick-billed Euphonia', scientific: 'Euphonia laniirostris', collection: 'birds', date: 'November 2025', full: '' },
  'nature/turkey-vulture.jpg': { subject: 'Turkey Vulture', scientific: 'Cathartes aura', collection: 'birds', date: 'August 2023', full: '' },
  'nature/yellow-throated-toucan.jpg': { subject: 'Yellow-throated Toucan', scientific: 'Ramphastos ambiguus', collection: 'birds', date: 'November 2025', full: '' },

  // ---------- nature / mammals
  'nature/big-horn-sheep.jpg': { subject: 'Big-horn Sheep', scientific: 'Ovis canadensis', collection: 'mammals', date: 'September 2025', full: '' },
  'nature/central-american-spider-monkey-mother.jpg': { subject: 'Central American Spider Monkey', scientific: 'Ateles geoffroyi', collection: 'mammals', date: 'November 2025', full: '' },
  'nature/central-american-squirrel-monkey.jpg': { subject: 'Central American Squirrel Monkey', scientific: 'Saimiri oerstedii', collection: 'mammals', date: 'November 2025', full: '' },
  'nature/central-american-white-faced-capuchin-looking-up.jpg': { subject: 'Central American White-faced Capuchin', scientific: 'Cebus imitator', collection: 'mammals', date: 'November 2025', full: '' },
  'nature/central-american-white-faced-capuchin-portrait.jpg': { subject: 'Central American White-faced Capuchin', scientific: 'Cebus imitator', lead: true, collection: 'mammals', date: 'November 2025', full: '' },
  'nature/central-american-white-faced-capuchin.jpg': { subject: 'Central American White-faced Capuchin', scientific: 'Cebus imitator', collection: 'mammals', date: 'November 2025', full: '' },
  'nature/howler-monkey.jpg': { subject: 'Mantled Howler Monkey', scientific: 'Alouatta palliata', collection: 'mammals', date: 'November 2025', full: '' },
  'nature/humpback-whale-with-calf.jpg': { subject: 'Humpback Whale', scientific: 'Megaptera novaeangliae', collection: 'mammals', date: 'November 2025', full: '' },
  'nature/northern-tamandua.jpg': { subject: 'Northern Tamandua', scientific: 'Tamandua mexicana', collection: 'mammals', date: 'November 2025', full: '' },
  'nature/squirrel.jpg': { subject: 'Rock Squirrel', scientific: 'Otospermophilus variegatus', collection: 'mammals', date: 'September 2025', full: '' },

  // ---------- nature / reptiles-and-amphibians
  'nature/alligator-environment.jpg': { subject: 'American Alligator', scientific: 'Alligator mississippiensis', lead: true, collection: 'reptiles-and-amphibians', date: 'August 2023', full: '' },
  'nature/alligator-mother.jpg': { subject: 'American Alligator', scientific: 'Alligator mississippiensis', collection: 'reptiles-and-amphibians', date: 'May 2024', full: '' },
  'nature/black-spiny-tailed-iguana-portrait.jpg': { subject: 'Black Spiny-tailed Iguana', scientific: 'Ctenosaura similis', collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/common-blunt-headed-tree-snake-close.jpg': { subject: 'Common Blunt-headed Tree Snake', scientific: 'Imantodes cenchoa', collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/common-blunt-headed-tree-snake-periscope.jpg': { subject: 'Common Blunt-headed Tree Snake', scientific: 'Imantodes cenchoa', collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/common-blunt-headed-tree-snake-portrait.jpg': { subject: 'Common Blunt-headed Tree Snake', scientific: 'Imantodes cenchoa', lead: true, collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/eastern-garter-portrait.jpg': { subject: 'Eastern Garter Snake', scientific: 'Thamnophis sirtalis', collection: 'reptiles-and-amphibians', date: 'October 2025', full: '' },
  'nature/gopher-tortoise.jpg': { subject: 'Gopher Tortoise', scientific: 'Gopherus polyphemus', collection: 'reptiles-and-amphibians', date: 'May 2024', full: '' },
  'nature/granular-poison-frog.jpg': { subject: 'Granular Poison Frog', scientific: 'Oophaga granulifera', collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/ornate-cat-eyed-snake-portrait.jpg': { subject: 'Ornate Cat-eyed Snake', scientific: 'Leptodeira ornata', lead: true, collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/ornate-cat-eyed-snake.jpg': { subject: 'Ornate Cat-eyed Snake', scientific: 'Leptodeira ornata', collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/prairie-lizard.jpg': { subject: 'Prairie Lizard', scientific: 'Sceloporus consobrinus', collection: 'reptiles-and-amphibians', date: 'September 2025', full: '' },
  'nature/rainforest-toad.jpg': { subject: 'Rainforest Toad', scientific: 'Incilius aucoinae', collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/terciopelo-baby.jpg': { subject: 'Terciopelo', scientific: 'Bothrops asper', collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/terciopelo-through-the-grass.jpg': { subject: 'Terciopelo', scientific: 'Bothrops asper', lead: true, collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/tropical-flat-snake-gaze.jpg': { subject: 'Tropical Flat Snake', scientific: 'Siphlophis compressus', collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/tropical-flat-snake-portrait.jpg': { subject: 'Tropical Flat Snake', scientific: 'Siphlophis compressus', collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },
  'nature/tropical-flat-snake-wide-portrait.jpg': { subject: 'Tropical Flat Snake', scientific: 'Siphlophis compressus', lead: true, collection: 'reptiles-and-amphibians', date: 'November 2025', full: '' },

  // ---------- nature / arthropods
  'nature/blue-morpho-wing.jpg': { subject: 'Amathonte Morpho Wing', scientific: 'Morpho amathonte', collection: 'arthropods', date: 'November 2025', full: '' },
  'nature/fly-on-yellow-flower.jpg': { subject: 'Swift Feather-legged Fly', scientific: 'Trichopoda pennipes', collection: 'arthropods', date: 'October 2025', full: '' },
  'nature/green-sweat-bee.jpg': { subject: 'Pure Green Sweat Bee', scientific: 'Augochlora pura', collection: 'arthropods', date: 'October 2025', full: '' },
  'nature/katydid-munching-leaf.jpg': { subject: 'Katydid', scientific: 'Family Tettigoniidae', collection: 'arthropods', date: 'October 2025', full: '' },
  'nature/leaf-cutter-ant-focus.jpg': { subject: 'Leaf Cutter Ants', scientific: 'Atta', lead: true, collection: 'arthropods', date: 'November 2025', full: '' },
  'nature/leaf-cutter-ant-march.jpg': { subject: 'Leaf Cutter Ants', scientific: 'Atta', collection: 'arthropods', date: 'November 2025', full: '' },
  'nature/leaf-cutter-ant-standoff.jpg': { subject: 'Leaf Cutter Ants', scientific: 'Atta', collection: 'arthropods', date: 'November 2025', full: '' },
  'nature/orange-butterfly.jpg': { subject: 'Butterfly (No Common Name)', scientific: 'Heliconius ismenius ssp. clarescens', collection: 'arthropods', date: 'November 2025', full: '' },
  'nature/red-thighed-bromeliad-spider.jpg': { subject: 'Red-thighed Bromeliad Spider', scientific: 'Cupiennius coccineus', collection: 'arthropods', date: 'November 2025', full: '' },
  'nature/rocky-mountain-parnassian.jpg': { subject: 'Rocky Mountain Parnassian', scientific: 'Parnassius smintheus', collection: 'arthropods', date: 'September 2025', full: '' },
  'nature/sunlight-through-the-bee-wing.jpg': { subject: 'Eastern Carpenter Bee', scientific: 'Xylocopa virginica', collection: 'arthropods', date: 'April 2026', full: '' },
  'nature/tityus-scorpion.jpg': { subject: 'Scorpion (No Common Name)', scientific: 'Tityus dedoslargos', collection: 'arthropods', date: 'November 2025', full: '' },
  'nature/nurseryspider.jpg': {subject: 'American Nursery Web Spider', scientific:'Pisaurina mira', collection: 'arthropods', date: 'August 2026', full: '' },
  'nature/weevil.jpg': {subject: 'Rugged Flower Weevil', scientific:'Odontocorynus salebrosus', collection: 'arthropods', date: 'August 2026', full: '' },
  'nature/steelerscaterpillar.jpg': {subject: 'Orange-tipped Oakworm Moth', scientific:'Anisota senatoria', collection: 'arthropods', date: 'August 2026', full: '' },
  'nature/smallcamospider3.jpg': {subject: 'Northern Crab Spider', scientific:'Mecaphesa asperata', collection: 'arthropods', date: 'August 2026', full: '' },
  'nature/smallcamospider2.jpg': {subject: 'Northern Crab Spider', scientific:'Mecaphesa asperata', collection: 'arthropods', date: 'August 2026', full: '' },
  'nature/smallcamospider.jpg': {subject: 'Northern Crab Spider', scientific:'Mecaphesa asperata', lead: true, collection: 'arthropods', date: 'August 2026', full: '' },
  'nature/rainbowbeetle.jpg': {subject: 'Dogbane Leaf Beetle', scientific:'Chrysochus auratus', collection: 'arthropods', date: 'August 2026', full: '' },
  'nature/blackspottedyellowbeetle.jpg': {subject: 'Spotted Cucumber Beetle', scientific:'Diabrotica undecimpunctata', collection: 'arthropods', date: 'August 2026', full: '' },

  // ---------- nature / rocks-and-minerals
  'nature/yellow-crystal-macro.jpg': { subject: 'Orange Crystals', scientific: 'Unknown', collection: 'rocks-and-minerals', date: 'August 2026', full: '' },

  // ---------- misc / hot-air-balloons
  'misc/blue-balloon.jpg': { subject: 'Blue Balloon', collection: 'hot-air-balloons', date: 'June 2023', full: '' },
  'misc/colorful-balloons.jpg': { subject: 'Colorful Balloons', collection: 'hot-air-balloons', date: 'June 2023', full: '' },
  'misc/rainbow-balloon.jpg': { subject: 'Rainbow Balloon', collection: 'hot-air-balloons', date: 'June 2023', full: '' },
  'misc/two-balloons.jpg': { subject: 'Two Balloons', collection: 'hot-air-balloons', date: 'June 2023', full: '' },
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

/* Warn (in the build log) about dates that can't be read. */
for (const p of photos) {
  if (p.date && Number.isNaN(Date.parse(p.date))) console.warn(`[photos.ts] Can't read the date "${p.date}" for ${p.file}. Use a format like "March 2026".`);
}

/* ITEMS: what the galleries show. Photos with the same scientific or catalog name become one item. */
export type Item = {
  slug: string; category: Category; collection: string; name: string;
  scientific?: string; catalog?: string; date?: string; photos: Photo[]; lead: Photo;
};

/* Grouping is automatic: same scientific name (or same catalog name) = same group. */
const clean = (s?: string) => (s ?? '').trim().toLowerCase();
const groupKey = (p: Photo) => (clean(p.scientific) ? 's:' + clean(p.scientific) : clean(p.catalog) ? 'c:' + clean(p.catalog) : 'p:' + p.slug);
const groups = new Map<string, Photo[]>();
for (const p of photos) {
  const key = groupKey(p);
  groups.set(key, [...(groups.get(key) ?? []), p]);
}

export const items: Item[] = [...groups.entries()].map(([key, list]) => {
  const lead = list.find((p) => p.lead) ?? list[0];
  const pick = (f: 'scientific' | 'catalog') => lead[f] || list.find((p) => p[f])?.[f] || undefined;
  return {
    slug: list.length > 1 ? key.slice(2).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : lead.slug,
    category: lead.category,
    collection: lead.collection ?? '',
    name: lead.subject,
    scientific: pick('scientific'),
    catalog: pick('catalog'),
    date: lead.date || undefined,
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
