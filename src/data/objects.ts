/* Sky objects (galaxies, nebulae), used for catalog names and for grouping photos of the same object.
   To use one, add  object: 'key'  to the photo's line in photos.ts.
   - name:    the name shown above the photos when an object has more than one photo
   - catalog: shown in smaller text under the name, e.g. 'M101' or 'NGC 6888' (leave out if none) */
export const objects: Record<string, { name: string; catalog?: string }> = {
  'pinwheel-galaxy': { name: 'Pinwheel Galaxy', catalog: 'M101' },
  'whirlpool-galaxy': { name: 'Whirlpool Galaxy', catalog: 'M51' },
  'crescent-nebula': { name: 'Crescent Nebula', catalog: 'NGC 6888' },
  'elephant-trunk-nebula': { name: 'Elephant Trunk Nebula', catalog: 'IC 1396' },
  'north-america-and-pelican-nebulae': { name: 'North America and Pelican Nebulae', catalog: 'NGC 7000 & IC 5070' },
  'orion-nebula': { name: 'Orion Nebula', catalog: 'M42' },
  'nebulae-of-cygnus': { name: 'Nebulae of Cygnus', catalog: 'Cygnus' },
  'nebulae-of-monoceros': { name: 'Nebulae of Monoceros', catalog: 'Monoceros' },
  'snr-g653-57': { name: 'The "Other" Veil Nebula', catalog: 'SNR G65.3+5.7' },
  'gecko-nebula': { name: 'Gecko Nebula', catalog: 'LBN 437' },
  'veil-nebula': { name: 'Veil Nebula (The Cygnus Loop)', catalog: 'SNR G074.0-08.6' },
};
