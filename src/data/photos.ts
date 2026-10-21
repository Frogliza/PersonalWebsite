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
     date:    when it was taken, worded how you want it shown, e.g. 'March 2026',
              'March 14, 2026' or '2026-03-14'. Photos are shown newest first by this date;
              photos without a readable date come after the dated ones, in filename order.
     full:    public Google Drive link for the "Full resolution" button
   The photo page shows the subject and date only, without labels. */
type Details = { subject?: string; date?: string; full?: string };
const details: Record<string, Details> = {
  // 'astro/orion-nebula.jpg': {
  //   subject: 'Orion Nebula',
  //   date: 'March 2026',
  //   full: 'https://drive.google.com/file/d/FILE_ID/view?usp=sharing',
  // },

  // astro
  'astro/2024-solar-eclipse.jpg': { subject: '2024 Solar Eclipse', date: '', full: '' },
  'astro/aurora-pillars.jpg': { subject: 'Aurora Pillars', date: '', full: '' },
  'astro/aurora-pine.jpg': { subject: 'Aurora Pine', date: '', full: '' },
  'astro/coathanger-asterism.jpg': { subject: 'Coathanger Asterism', date: '', full: '' },
  'astro/crescent-nebula.jpg': { subject: 'Crescent Nebula', date: '', full: '' },
  'astro/elephant-trunk-nebula.jpg': { subject: 'Elephant Trunk Nebula', date: '', full: '' },
  'astro/gecko-nebula.jpg': { subject: 'Gecko Nebula', date: '', full: '' },
  'astro/milkyway-over-elbert.jpg': { subject: 'Milkyway Over Elbert', date: '', full: '' },
  'astro/nebulae-of-cygnus.jpg': { subject: 'Nebulae Of Cygnus', date: '', full: '' },
  'astro/nebulae-of-monoceros.jpg': { subject: 'Nebulae Of Monoceros', date: '', full: '' },
  'astro/north-america-and-pelican-nebulae.jpg': { subject: 'North America And Pelican Nebulae', date: '', full: '' },
  'astro/orion-nebula.jpg': { subject: 'Orion Nebula', date: 'November 2024', full: 'https://drive.google.com/file/d/1HXRJZqom2ueJr-fdzx898qJWd0JgYULw/view?usp=sharing' },
  'astro/pinwheel-galaxy.jpg': { subject: 'Pinwheel Galaxy', date: '', full: '' },
  'astro/snr-g653-57.jpg': { subject: 'SNR G65.3+5.7', date: '', full: '' },
  'astro/veil-nebula.jpg': { subject: 'Veil Nebula', date: '', full: '' },
  'astro/whirlpool-galaxy.jpg': { subject: 'Whirlpool Galaxy', date: '', full: '' },

  // nature
  'nature/alligator-environment.jpg': { subject: 'Alligator Environment', date: '', full: '' },
  'nature/alligator-mother.jpg': { subject: 'Alligator Mother', date: '', full: '' },
  'nature/anhinga.jpg': { subject: 'Anhinga', date: '', full: '' },
  'nature/bananaquit.jpg': { subject: 'Bananaquit', date: '', full: '' },
  'nature/big-horn-sheep.jpg': { subject: 'Big Horn Sheep', date: '', full: '' },
  'nature/black-bellied-whistling-ducks-in-flight.jpg': { subject: 'Black Bellied Whistling Ducks In Flight', date: '', full: '' },
  'nature/black-spiny-tailed-iguana-portrait.jpg': { subject: 'Black Spiny Tailed Iguana Portrait', date: '', full: '' },
  'nature/blue-morpho-wing.jpg': { subject: 'Blue Morpho Wing', date: '', full: '' },
  'nature/central-american-spider-monkey-mother.jpg': { subject: 'Central American Spider Monkey Mother', date: '', full: '' },
  'nature/central-american-squirrel-monkey.jpg': { subject: 'Central American Squirrel Monkey', date: '', full: '' },
  'nature/central-american-white-faced-capuchin.jpg': { subject: 'Central American White Faced Capuchin', date: '', full: '' },
  'nature/central-american-white-faced-capuchin-looking.jpg': { subject: 'Central American White Faced Capuchin Looking', date: '', full: '' },  // CHECK: filename was cut off in the screenshot
  'nature/central-american-white-faced-capuchin-portrait.jpg': { subject: 'Central American White Faced Capuchin Portrait', date: '', full: '' },  // CHECK: filename was cut off in the screenshot
  'nature/chachalaca-in-a-tree.jpg': { subject: 'Chachalaca In A Tree', date: '', full: '' },
  'nature/charming-hummingbird.jpg': { subject: 'Charming Hummingbird', date: '', full: '' },
  'nature/common-black-hawk.jpg': { subject: 'Common Black Hawk', date: '', full: '' },
  'nature/common-black-hawk-in-flight.jpg': { subject: 'Common Black Hawk In Flight', date: '', full: '' },
  'nature/common-blunt-headed-tree-snake-close.jpg': { subject: 'Common Blunt Headed Tree Snake Close', date: '', full: '' },
  'nature/common-blunt-headed-tree-snake-periscope.jpg': { subject: 'Common Blunt Headed Tree Snake Periscope', date: '', full: '' },  // CHECK: filename was cut off in the screenshot
  'nature/common-blunt-headed-tree-snake-portrait.jpg': { subject: 'Common Blunt Headed Tree Snake Portrait', date: '', full: '' },  // CHECK: filename was cut off in the screenshot
  'nature/common-loon.jpg': { subject: 'Common Loon', date: '', full: '' },
  'nature/crested-guan.jpg': { subject: 'Crested Guan', date: '', full: '' },
  'nature/eastern-garter-portrait.jpg': { subject: 'Eastern Garter Portrait', date: '', full: '' },
  'nature/fly-catcher.jpg': { subject: 'Fly Catcher', date: '', full: '' },
  'nature/fly-on-yellow-flower.jpg': { subject: 'Fly On Yellow Flower', date: '', full: '' },
  'nature/gopher-tortoise.jpg': { subject: 'Gopher Tortoise', date: '', full: '' },
  'nature/granular-poison-frog.jpg': { subject: 'Granular Poison Frog', date: '', full: '' },
  'nature/great-blue-heron-environment.jpg': { subject: 'Great Blue Heron Environment', date: '', full: '' },
  'nature/great-blue-heron-in-flight.jpg': { subject: 'Great Blue Heron In Flight', date: '', full: '' },
  'nature/green-sweat-bee.jpg': { subject: 'Green Sweat Bee', date: '', full: '' },
  'nature/howler-monkey.jpg': { subject: 'Howler Monkey', date: '', full: '' },
  'nature/humpback-whale-with-calf.jpg': { subject: 'Humpback Whale With Calf', date: '', full: '' },
  'nature/katydid-munching-leaf.jpg': { subject: 'Katydid Munching Leaf', date: '', full: '' },
  'nature/leaf-cutter-ant-focus.jpg': { subject: 'Leaf Cutter Ant Focus', date: '', full: '' },
  'nature/leaf-cutter-ant-march.jpg': { subject: 'Leaf Cutter Ant March', date: '', full: '' },
  'nature/leaf-cutter-ant-standoff.jpg': { subject: 'Leaf Cutter Ant Standoff', date: '', full: '' },
  'nature/northern-tamandua.jpg': { subject: 'Northern Tamandua', date: '', full: '' },
  'nature/orange-butterfly.jpg': { subject: 'Orange Butterfly', date: '', full: '' },
  'nature/ornate-cat-eyed-snake.jpg': { subject: 'Ornate Cat Eyed Snake', date: '', full: '' },
  'nature/ornate-cat-eyed-snake-portrait.jpg': { subject: 'Ornate Cat Eyed Snake Portrait', date: '', full: '' },
  'nature/prairie-lizard.jpg': { subject: 'Prairie Lizard', date: '', full: '' },
  'nature/rainforest-toad.jpg': { subject: 'Rainforest Toad', date: '', full: '' },
  'nature/red-thighed-bromeliad-spider.jpg': { subject: 'Red Thighed Bromeliad Spider', date: '', full: '' },
  'nature/reddish-egret.jpg': { subject: 'Reddish Egret', date: '', full: '' },
  'nature/road-hawk.jpg': { subject: 'Road Hawk', date: '', full: '' },
  'nature/rocky-mountain-parnassian.jpg': { subject: 'Rocky Mountain Parnassian', date: '', full: '' },
  'nature/scarlet-rumped-tanager.jpg': { subject: 'Scarlet Rumped Tanager', date: '', full: '' },
  'nature/slaty-tailed-trogan.jpg': { subject: 'Slaty Tailed Trogan', date: '', full: '' },
  'nature/squirrel.jpg': { subject: 'Squirrel', date: '', full: '' },
  'nature/summer-tanager.jpg': { subject: 'Summer Tanager', date: '', full: '' },
  'nature/sunlight-through-the-bee-wing.jpg': { subject: 'Sunlight Through The Bee Wing', date: '', full: '' },
  'nature/terciopelo-baby.jpg': { subject: 'Terciopelo Baby', date: '', full: '' },
  'nature/terciopelo-through-the-grass.jpg': { subject: 'Terciopelo Through The Grass', date: '', full: '' },
  'nature/thick-billed-euphonia.jpg': { subject: 'Thick Billed Euphonia', date: '', full: '' },
  'nature/tityus-scorpion.jpg': { subject: 'Tityus Scorpion', date: '', full: '' },
  'nature/tropical-flat-snake-gaze.jpg': { subject: 'Tropical Flat Snake Gaze', date: '', full: '' },
  'nature/tropical-flat-snake-portrait.jpg': { subject: 'Tropical Flat Snake Portrait', date: '', full: '' },
  'nature/tropical-flat-snake-wide-portrait.jpg': { subject: 'Tropical Flat Snake Wide Portrait', date: '', full: '' },
  'nature/turkey-vulture.jpg': { subject: 'Turkey Vulture', date: '', full: '' },
  'nature/yellow-crystal-macro.jpg': { subject: 'Yellow Crystal Macro', date: '', full: '' },
  'nature/yellow-throated-toucan.jpg': { subject: 'Yellow Throated Toucan', date: '', full: '' },

  // misc
  'misc/blue-balloon.jpg': { subject: 'Blue Balloon', date: '', full: '' },
  'misc/colorful-balloons.jpg': { subject: 'Colorful Balloons', date: '', full: '' },
  'misc/rainbow-balloon.jpg': { subject: 'Rainbow Balloon', date: '', full: '' },
  'misc/two-balloons.jpg': { subject: 'Two Balloons', date: '', full: '' },
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
  .filter((p) => categories.some((c) => c.key === p.category))
  .sort((a, b) => time(b) - time(a) || a.file.localeCompare(b.file));
