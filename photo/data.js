// ═══════════════════════════════════════════════════════════
// PORTFOLIO DATA - Edit your photos here!
// ═══════════════════════════════════════════════════════════

// Lens definitions - define once, use everywhere
var lenses = {
  '7art_35_f095': {
    name: '35mm f/0.95',
    image: 'media/f095.png',
    extra: ' 7artisans'
  },
  'pentax_35_80_f4': {
    name: '35-80mm f/4',
    image: 'media/pentax.png',
    extra: ' Pentax'
  }
};

// Camera definitions - define once, use everywhere
var cameras = {
  'a6400': {
    name: 'APS-C',
    image: 'media/a6400.png',
    extra: ' Sony a6400'
  },
  'pentax': {
    name: 'Full Frame',
    image: 'media/pentax.png',
    extra: ' Pentax P30T'
  }
};

var categories = {
  main: [
    { 
      base: 'a1.jpg',
      lens: '7art_35_f095',
      camera: 'a6400',
      stock: '',
      date: '2023-03-15',
      focal: '35mm',
      aperture: 'f/8',
      iso: '100',
      shutter: '1/50s'
    },
    { 
      base: 'a2.jpg',
      lens: 'pentax_35_80_f4',
      camera: 'pentax',
      stock: 'kodak portra 400',
      date: '2023-06-22',
      focal: '50mm',
      aperture: 'f/5.6',
      iso: '400',
      shutter: '1/125s'
    },
    { 
      base: 'a3.jpg',
      lens: '7art_35_f095',
      camera: 'a6400',
      stock: '',
      date: '2023-09-10',
      focal: '35mm',
      aperture: 'f/2.8',
      iso: '200',
      shutter: '1/100s'
    },
    { 
      base: 'a4.jpg',
      lens: 'pentax_35_80_f4',
      camera: 'pentax',
      stock: 'kodak gold 200',
      date: '2023-11-03',
      focal: '80mm',
      aperture: 'f/8',
      iso: '200',
      shutter: '1/250s'
    },
    { 
      base: 'a5.jpg',
      lens: '7art_35_f095',
      camera: 'a6400',
      stock: '',
      date: '2023-12-28',
      focal: '35mm',
      aperture: 'f/4',
      iso: '800',
      shutter: '1/60s'
    },
  ],
  
  portraits: [
    { 
      base: 'b1.jpg',
      lens: '7art_35_f095',
      camera: 'pentax',
      stock: 'kodak portra 800',
      date: '2024-01-14',
      focal: '35mm',
      aperture: 'f/1.4',
      iso: '800',
      shutter: '1/125s'
    },
    { 
      base: 'b2.jpg',
      lens: 'pentax_35_80_f4',
      camera: 'pentax',
      stock: 'fuji pro 400h',
      date: '2024-02-20',
      focal: '80mm',
      aperture: 'f/4',
      iso: '400',
      shutter: '1/250s'
    },
    { 
      base: 'b3.jpg',
      lens: '7art_35_f095',
      camera: 'a6400',
      stock: '',
      date: '2024-04-05',
      focal: '35mm',
      aperture: 'f/2',
      iso: '400',
      shutter: '1/160s'
    },
  ],
  
  landscapes: [
    { 
      base: 'c1.jpg',
      lens: 'pentax_35_80_f4',
      camera: 'pentax',
      stock: 'kodak ektar 100',
      date: '2024-05-17',
      focal: '35mm',
      aperture: 'f/11',
      iso: '100',
      shutter: '1/125s'
    },
    { 
      base: 'c2.jpg',
      lens: 'pentax_35_80_f4',
      camera: 'pentax',
      stock: 'kodak gold 200',
      date: '2024-07-09',
      focal: '50mm',
      aperture: 'f/8',
      iso: '200',
      shutter: '1/500s'
    },
    { 
      base: 'c3.jpg',
      lens: '7art_35_f095',
      camera: 'a6400',
      stock: '',
      date: '2024-08-30',
      focal: '35mm',
      aperture: 'f/5.6',
      iso: '100',
      shutter: '1/320s'
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
  'c1.jpg',
  'c2.jpg',
  'c3.jpg',
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
//      lens: '7art_35_f095',          // Reference lens key (for hover)
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