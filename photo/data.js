// ═══════════════════════════════════════════════════════════
// PORTFOLIO DATA - Edit your photos here!
// ═══════════════════════════════════════════════════════════

// Site branding
var siteTitle = "Val's Photofolio";
var heroTitle = "Photo Portfolio";
var heroSubtitle = "by Valdir Neves";

// About section paragraphs
var aboutText = [
  'Brazilian living in Lisbon, Portugal.',
  'Passionate about filmmaking, photography, optics, architecture and engineering.',
  'Fluent in English & Portuguese.',
  'Looking to collaborate or share ideas? Drop me a message — I\'d love to connect.',
  '<a href="#" data-copy="valdir.nvs@outlook.com">valdir.nvs@outlook.com</a> · <a href="tel:+351930946697" data-copy="(+351) 930 946 697">(+351) 930 946 697</a>',
  '<a href="https://instagram.com/val.nevs" target="_blank">Instagram @val.nevs</a> · <a href="https://linkedin.com/in/valdir-neves/" target="_blank">LinkedIn profile</a>'
];

// Category cans - order determines left-to-right display
var categoryConfig = [
  { key: 'main',       label: 'Main',       canColor: 'rgb(47, 72, 142)',  stripColor: 'rgb(80, 140, 255)',  labelColor: 'rgba(255,255,255,0.9)' },
  { key: 'portraits',  label: 'Portraits',  canColor: 'rgb(191, 191, 191)', stripColor: 'rgb(200, 200, 200)', labelColor: 'rgba(0,0,0,0.9)' },
  { key: 'landscapes', label: 'Experiments', canColor: 'rgb(110, 55, 16)',  stripColor: 'rgb(255, 140, 60)',  labelColor: 'rgba(255,255,255,0.9)' }
];

// Lens definitions - define once, use everywhere
var lenses = {
  '7artf095': {
    name: '[35mm f/0.95]',
    image: 'media/7artf095.png',
    extra: ' 7artisans 35mm f/0.95'
  },
  'sonykit': {
    name: '[16-50mm f/3.5-5.6]',
    image: 'media/sonykit.png',
    extra: ' Sony 16-50mm f/3.5-5.6'
  },
  'telephoto': {
    name: '[55-210mm f/4.5-6.3]',
    image: 'media/telephoto.png',
    extra: ' Sony 55-210mm f/4.5-6.3'
  },
  'pentaxf4': {
    name: '[35-80mm f/4]',
    image: 'media/pentaxf4.png',
    extra: ' Pentax 35-80mm f/4'
  },
  'cctv': {
    name: '[3.6-10mm f/1.4]',
    image: 'media/pentaxf4.png',
    extra: ' CCTV 3.6-10mm f/1.4'
  },
  'fisheye': {
    name: '[7.5mm f/2.8]',
    image: 'media/pentaxf4.png',
    extra: ' 7artisans 7.5mm f/2.8'
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
    name: '8 Perforations',
    image: 'media/p30t.png',
    extra: ' Pentax P30T'
  }
};

// Film stock definitions - define once, use everywhere
var stocks = {
  'kodacolor200': {
    name: 'Kodak Kodacolor 200',
    image: 'media/oldkodacolor.png',
    extra: ' Kodak Kodacolor 200'
  },
  'ultramax400': {
    name: 'Kodak Ultramax 400',
    image: 'media/ultramax.png',
    extra: ' Kodak Ultramax 400'
  },
  'portra800': {
    name: 'Kodak Portra 800',
    image: 'media/portra800.png',
    extra: ' Kodak Portra 800'
  },
  'lucky50': {
    name: 'Lucky SHD50',
    image: 'media/lucky50.png',
    extra: ' Lucky SHD50'
  }
};

var categories = {
  main: [
    { 
      base: 'beach.jpg',
      lens: 'pentaxf4',
      camera: 'p30t',
      stock: 'kodacolor200',
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
      description: 'C-41 film developed at home'
    },
    { 
      base: 'seine.jpg',
      lens: '7artf095',
      camera: 'a6400',
      stock: '',
      date: '2024-07-28',
      focal: '',
      aperture: '',
      iso: '100',
      shutter: '1/1000s',
      place: 'Seine',
      city: 'Paris',
      country: 'France',
      subject: '',
      developing: '',
      description: 'Along the Seine river'
    },
    { 
      base: 'recife.jpg',
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
      description: 'Coastal view of Recife'
    },
    { 
      base: 'golden-gate.jpg',
      lens: '',
      camera: '',
      stock: '',
      date: '',
      focal: '',
      aperture: '',
      iso: '',
      shutter: '',
      place: 'Gpolden Gate',
      city: 'SF',
      country: 'USA',
      subject: '',
      developing: '',
      description: ''
    },
  ],
  
  portraits: [
    { 
      base: 'fairy.jpg',
      lens: 'pentaxf4',
      camera: 'p30t',
      stock: 'ultramax400',
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
      description: 'Film vs digital'
    },
    { 
      base: 'jellyfish.jpg',
      lens: 'sonykit',
      camera: 'a6400',
      stock: '',
      date: '2022-04-15',
      focal: '26mm',
      aperture: 'f/4.5',
      iso: '1250',
      shutter: '1/40s',
      place: 'Moody Gardens',
      city: 'Galveston',
      country: 'USA',
      subject: '',
      developing: '',
      description: ''
    },
    { 
      base: 'cctv.jpg',
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
      description: ''
    },
    { 
      base: 'charlie.jpg',
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
      description: ''
    },
    { 
      base: 'aquarium.jpg',
      lens: 'sonykit',
      camera: 'a6400',
      stock: '',
      date: '2022-04-15',
      focal: '20mm',
      aperture: 'f/4',
      iso: '2000',
      shutter: '1/30s',
      place: 'Moody Gardens',
      city: 'Galveston',
      country: 'USA',
      subject: '',
      developing: '',
      description: ''
    },
  ],
  
  landscapes: [
    { 
      base: 'toning.jpg',
      lens: 'sonykit',
      camera: 'a6400',
      stock: '',
      date: '2000-01-01',
      focal: '16mm',
      aperture: 'f/3.5',
      iso: '?',
      shutter: '1/30s',
      place: 'Oriente',
      city: 'Lisboa',
      country: 'Portugal',
      subject: '',
      developing: '',
      description: 'B&W to color'
    },
    { 
      base: 'kreatori.jpg',
      lens: 'pentaxf4',
      camera: 'p30t',
      stock: 'ultramax400',
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
      description: 'Club Benares x Cinecore at Kreatori'
    },
    { 
      base: 'narrativa.jpg',
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
      description: 'Kalabongó exhibition by Jorge Panchoaga'
    },
    { 
      base: 'pcb.jpg',
      lens: 'pentaxf4',
      camera: 'p30t',
      stock: 'kodacolor200',
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
      description: 'C-41 film developed at home'
    },
    { 
      base: 'lucky.jpg',
      lens: 'pentaxf4',
      camera: 'p30t',
      stock: 'lucky50',
      date: '2026',
      focal: '',
      aperture: '',
      iso: '50',
      shutter: '',
      place: '',
      city: '',
      country: 'Portugal',
      subject: '',
      developing: 'Rodinal at Atelier de Lisboa',
      description: '100ft of 35mm film bulk loaded into used cans'
    },
  ]
};

// Hero grid images - auto-generated from all category photos
var heroPhotoUrls = (function() {
  var all = [];
  var keys = Object.keys(categories);
  for (var i = 0; i < keys.length; i++) {
    var photos = categories[keys[i]];
    for (var j = 0; j < photos.length; j++) {
      if (all.indexOf(photos[j].base) === -1) {
        all.push(photos[j].base);
      }
    }
  }
  return all;
})();

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