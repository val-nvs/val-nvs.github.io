// ═══════════════════════════════════════════════════════════
// PORTFOLIO DATA - Edit your photos here!
// ═══════════════════════════════════════════════════════════

// Lens definitions - define once, use everywhere
var lenses = {
  '7artf095': {
    name: '"35mm f/0.95"',
    image: 'media/7artf095.png',
    extra: ' 7artisans 35mm f/0.95'
  },
  'sonykit': {
    name: '"16-50mm f/3.5-5.6"',
    image: 'media/sonykit.png',
    extra: ' Sony 16-50mm f/3.5-5.6'
  },
  'pentaxf4': {
    name: '"35-80mm f/4"',
    image: 'media/pentaxf4.png',
    extra: ' Pentax 35-80mm f/4'
  }
};

// Camera definitions - define once, use everywhere
var cameras = {
  'a6400': {
    name: 'APS-C',
    image: 'media/a6400.png',
    extra: ' Sony a6400'
  },
  'p30t': {
    name: 'Full Frame',
    image: 'media/p30t.png',
    extra: ' Pentax P30T'
  }
};

var categories = {
  main: [
    { 
      base: 'beach.jpg',
      lens: 'pentaxf4',
      camera: 'p30t',
      stock: 'Kodak Kodacolor 200',
      date: '2021',
      focal: '',
      aperture: '',
      iso: '200',
      shutter: '',
      place: '',
      city: '',
      country: 'Brazil',
      subject: '',
      developing: 'C-41 at home',
      description: 'A serene beach captured on film'
    },
    { 
      base: 'a2.jpg',
      lens: 'pentaxf4',
      camera: 'p30t',
      stock: 'Kodak Ultramax 400',
      date: '2025-11-27',
      focal: '',
      aperture: '',
      iso: '400',
      shutter: '',
      place: 'Kreatori',
      city: 'Lisboa',
      country: 'Portugal',
      subject: '',
      developing: 'Carmencita Lisboa',
      description: 'An evening at Kreatori'
    },
    { 
      base: 'a3.jpg',
      lens: 'pentaxf4',
      camera: 'p30t',
      stock: 'Kodak Ultramax 400',
      date: '2025-10-31',
      focal: '',
      aperture: '',
      iso: '400',
      shutter: '',
      place: 'Alvalaxia',
      city: 'Lisboa',
      country: 'Portugal',
      subject: 'Fairy',
      developing: 'Carmencita Lisboa',
      description: 'Fairy at Alvalaxia on Halloween night'
    },
    { 
      base: 'seine.jpg',
      lens: '7artf095',
      camera: 'a6400',
      stock: '',
      date: '2024-07-28',
      focal: '35mm',
      aperture: '?',
      iso: '100',
      shutter: '1/1000s',
      place: 'Seine',
      city: 'Paris',
      country: 'France',
      subject: '',
      developing: '',
      description: 'Along the Seine river in summer'
    },
    { 
      base: 'a4.jpg',
      lens: 'sonykit',
      camera: 'a6400',
      stock: '',
      date: '2022-04-15',
      focal: '20mm',
      aperture: 'f/4',
      iso: '2000',
      shutter: '1/30s',
      place: 'Galveston',
      city: 'Galveston',
      country: 'USA',
      subject: '',
      developing: '',
      description: 'Night photography in Galveston'
    },
    { 
      base: 'a5.jpg',
      lens: '',
      camera: '',
      stock: '',
      date: '',
      focal: '',
      aperture: '',
      iso: '',
      shutter: '',
      place: 'Recife',
      city: 'Recife',
      country: 'Brazil',
      subject: '',
      developing: '',
      description: 'Views of Recife'
    },
  ],
  
  portraits: [
    { 
      base: 'b1.jpg',
      lens: 'sonykit',
      camera: 'a6400',
      stock: '',
      date: '2022-04-15',
      focal: '26mm',
      aperture: 'f/4.5',
      iso: '1250',
      shutter: '1/40s',
      place: 'Galveston',
      city: 'Galveston',
      country: 'USA',
      subject: '',
      developing: '',
      description: 'Portrait in Galveston'
    },
    { 
      base: 'b2.jpg',
      lens: '',
      camera: 'a6400',
      stock: '',
      date: '2000-01-01',
      focal: '',
      aperture: '',
      iso: '',
      shutter: '',
      place: 'EPI ETIC',
      city: 'Lisboa',
      country: 'Portugal',
      subject: 'Charlie',
      developing: '',
      description: 'Charlie at EPI ETIC'
    },
    { 
      base: 'b3.jpg',
      lens: '7artf095',
      camera: 'a6400',
      stock: '',
      date: '2025-10-03',
      focal: '35mm',
      aperture: '~f/1',
      iso: '400',
      shutter: '1/160s',
      place: 'Fundação Oriente',
      city: 'Lisboa',
      country: 'Portugal',
      subject: 'NUNCHI',
      developing: '',
      description: 'NUNCHI performing at Fundação Oriente'
    },
  ],
  
  landscapes: [
    { 
      base: 'bridge-moon.jpg',
      lens: '',
      camera: 'a6400',
      stock: '',
      date: '2000-01-01',
      focal: '',
      aperture: '',
      iso: '100',
      shutter: '',
      place: 'Belém',
      city: 'Lisboa',
      country: 'Portugal',
      subject: '',
      developing: '',
      description: 'Moonlight over the bridge in Belém'
    },
    { 
      base: 'c2.jpg',
      lens: '',
      camera: '',
      stock: '',
      date: '',
      focal: '',
      aperture: '',
      iso: '',
      shutter: '',
      place: 'Recife',
      city: 'Recife',
      country: 'Brazil',
      subject: '',
      developing: '',
      description: 'Coastal views of Recife'
    },
    { 
      base: 'c3.jpg',
      lens: '7artf095',
      camera: 'a6400',
      stock: '',
      date: '2025-12-20',
      focal: '',
      aperture: '',
      iso: '100',
      shutter: '1/80s',
      place: 'NARRATIVA',
      city: 'Lisboa',
      country: 'Portugal',
      subject: 'Jiani',
      developing: '',
      description: 'Jiani at NARRATIVA gallery'
    },
  ]
};

// Hero grid images (thumbnails auto-generated with -small suffix)
var heroPhotoUrls = [
  'a1.jpg',
  'a2.jpg',
  'a3.jpg',
  'a4.jpg',
  'a5.jpg',
  'b1.jpg',
  'b2.jpg',
  'b3.jpg',
  'bridge-moon.jpg',
  'c2.jpg',
  'c3.jpg',
];

// Search category order - customize which categories appear and in what order
var searchCategories = [
  'ISO',
  'Aperture', 
  'Focal Length',
  'Shutter Speed',
  'Camera',
  'Lens',
  'Film Stock',
  'Place',
  'City',
  'Country',
  'Subject',
  'Developing',
  'Date'
];

// ═══════════════════════════════════════════════════════════
// HOW TO ADD/EDIT PHOTOS:
// ═══════════════════════════════════════════════════════════
//
// 1. Add your photo files to the /photos folder:
//    - Full size: photos/myPhoto.jpg
//    - Thumbnail: photos/myPhoto-small.jpg (auto-detected)
//
// 2. Define your gear in the lenses/cameras objects above (if not already defined)
//
// 3. Add entry to the appropriate category:
//    { 
//      base: 'myPhoto.jpg',           // Just the filename!
//      lens: '7artf095',          // Reference lens key (for hover)
//      camera: 'a6400',               // Reference camera key
//      stock: '',                     // Film stock (blank for digital)
//      date: '2023-03-15',            // YYYY-MM-DD format
//      focal: '35mm',                 // Focal length used for this shot
//      aperture: 'f/8',               // Aperture used for this shot
//      iso: '100',                    // ISO used
//      shutter: '1/50s'               // Shutter speed used
//    },
//
// 4. Add filename to heroPhotoUrls array for hero grid
//
// WHAT DISPLAYS WHERE:
// 
// Bottom-left info shows:
//   Line 1: [focal] [aperture]       e.g., "35mm f/8"
//   Line 2: [shutter]                e.g., "1/50s"
//   Line 3: [camera name]            e.g., "APS-C"
//   Line 4: [stock] @ [iso]          e.g., "kodak portra 400 @ 100" or "@ 100"
//   Line 5: [year]                   e.g., "2023"
//
// On hover:
//   Line 1 shows: [focal] [aperture] [lens brand]
//   Line 3 shows: [camera name] [camera model]
//   Line 5 shows: [day] [month] [year]
//
// ADDING NEW LENSES/CAMERAS:
// 
// To add a new lens:
//   '24mm_f28': {
//     name: '24mm f/2.8',              // Not displayed (focal/aperture shown instead)
//     image: 'media/lens24.png',       // Hover image
//     extra: ' Sony'                   // Brand shown on hover
//   }
//
// To add a new camera:
//   'pentax': {
//     name: 'Full Frame',
//     image: 'media/pentax.png',
//     extra: ' Pentax P30T'
//   }
//
// Notes:
// - "photos/" prefix is added automatically
// - Thumbnails auto-generated as: filename-small.jpg
// - Date format: YYYY-MM-DD (hover shows full date)
// - Lens/camera keys can be any text (use underscores, no spaces)
// - Stock can be blank ('') for digital photos
//
// ═══════════════════════════════════════════════════════════
// SEARCH CATEGORIES:
// Edit the searchCategories array above to customize which tags appear in search:
// - Change the order by rearranging items
// - Remove categories you don't want
// - Category names must match photo field names (place, country, subject, developing, etc.)