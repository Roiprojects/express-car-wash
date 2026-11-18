const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

// Deterministic pseudo-random number generator
function sfc32(a, b, c, d) {
  return function() {
    a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
    let t = (a + b | 0) + d | 0;
    d = d + 1 | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = c << 21 | c >>> 11;
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  }
}

async function createPaintPolishBefore() {
  console.log('Processing polish-before.jpg...');
  const img = await Jimp.read('public/images/before-after/polish-after.jpg');
  const w = img.bitmap.width;
  const h = img.bitmap.height;
  const rand = sfc32(1337, 42, 9999, 12345);

  // Generate swirl scratches map
  const swirls = [];
  for (let i = 0; i < 40; i++) {
    swirls.push({
      cx: (0.15 + rand() * 0.7) * w,
      cy: (0.2 + rand() * 0.6) * h,
      radius: 40 + rand() * 120,
      intensity: 0.35 + rand() * 0.35,
    });
  }

  // Pre-generate scratch lines
  const scratchLines = [];
  for (let i = 0; i < 120; i++) {
    const x0 = rand() * w;
    const y0 = (0.2 + rand() * 0.6) * h;
    const len = 30 + rand() * 70;
    const angle = (rand() - 0.5) * Math.PI * 0.5;
    scratchLines.push({
      x0, y0,
      dx: Math.cos(angle),
      dy: Math.sin(angle),
      len
    });
  }

  img.scan(0, 0, w, h, (x, y, idx) => {
    let r = img.bitmap.data[idx];
    let g = img.bitmap.data[idx + 1];
    let b = img.bitmap.data[idx + 2];

    // 1. Oxidation & haze: lift blacks (makes deep paint look chalky/oxidized), flatten highlights
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    
    // Mute contrast and lift darks
    r = r * 0.78 + 32;
    g = g * 0.78 + 30;
    b = b * 0.75 + 24; // Slight yellowish/road-grime cast

    // 2. Road dust film texture
    const noise = (rand() - 0.5) * 18;
    r += noise + 8;
    g += noise + 7;
    b += noise + 2;

    // 3. Spiderweb swirl marks visible in clearcoat
    for (let s = 0; s < swirls.length; s++) {
      const sw = swirls[s];
      const dist = Math.hypot(x - sw.cx, y - sw.cy);
      const ringDist = Math.abs(dist - sw.radius);
      if (ringDist < 2.2) {
        const scratchGlint = Math.sin((x + y) * 0.15) * 28 * sw.intensity;
        if (scratchGlint > 10) {
          r = Math.min(255, r + scratchGlint);
          g = Math.min(255, g + scratchGlint);
          b = Math.min(255, b + scratchGlint);
        }
      }
    }

    // 4. Fine random micro-scratches
    if (rand() < 0.003) {
      const scratch = 35 + rand() * 40;
      r = Math.min(255, r + scratch);
      g = Math.min(255, g + scratch);
      b = Math.min(255, b + scratch);
    }

    img.bitmap.data[idx] = Math.min(255, Math.max(0, r));
    img.bitmap.data[idx + 1] = Math.min(255, Math.max(0, g));
    img.bitmap.data[idx + 2] = Math.min(255, Math.max(0, b));
  });

  await img.write('public/images/before-after/polish-before.jpg');
  console.log('Saved polish-before.jpg');
}

async function createInteriorSteamBefore() {
  console.log('Processing interior-before.jpg...');
  const img = await Jimp.read('public/images/before-after/interior-after.jpg');
  const w = img.bitmap.width;
  const h = img.bitmap.height;
  const rand = sfc32(54321, 88, 1234, 7777);

  // Generate stain clusters (drink spill, mud track, grease spot)
  const stains = [
    { cx: w * 0.42, cy: h * 0.72, rx: 70, ry: 50, color: [45, 30, 20] }, // Seat cushion spill
    { cx: w * 0.58, cy: h * 0.78, rx: 90, ry: 60, color: [50, 38, 25] }, // Dirt stain
    { cx: w * 0.35, cy: h * 0.88, rx: 110, ry: 45, color: [30, 25, 20] }, // Footwell mud residue
    { cx: w * 0.65, cy: h * 0.55, rx: 40, ry: 30, color: [60, 45, 30] }, // Armrest grease
  ];

  img.scan(0, 0, w, h, (x, y, idx) => {
    let r = img.bitmap.data[idx];
    let g = img.bitmap.data[idx + 1];
    let b = img.bitmap.data[idx + 2];

    // 1. Overall interior dust film & dull faded plastics
    r = r * 0.82 + 25;
    g = g * 0.82 + 22;
    b = b * 0.80 + 18;

    // Dust particles on dashboard & console
    if (y < h * 0.65) {
      const dust = (rand() - 0.45) * 16;
      r += dust + 4;
      g += dust + 4;
      b += dust + 3;
    }

    // 2. Liquid stains / muddy spots on upholstery
    for (const stain of stains) {
      const dx = (x - stain.cx) / stain.rx;
      const dy = (y - stain.cy) / stain.ry;
      const d2 = dx * dx + dy * dy;
      if (d2 < 1.0) {
        const factor = Math.max(0, 1 - d2) * 0.55;
        r = r * (1 - factor) + stain.color[0] * factor;
        g = g * (1 - factor) + stain.color[1] * factor;
        b = b * (1 - factor) + stain.color[2] * factor;
      }
    }

    // 3. Crumbs / specks on seats and carpet
    if (y > h * 0.55 && rand() < 0.005) {
      r = Math.min(255, r + 45);
      g = Math.min(255, g + 40);
      b = Math.min(255, b + 30);
    }

    img.bitmap.data[idx] = Math.min(255, Math.max(0, r));
    img.bitmap.data[idx + 1] = Math.min(255, Math.max(0, g));
    img.bitmap.data[idx + 2] = Math.min(255, Math.max(0, b));
  });

  await img.write('public/images/before-after/interior-before.jpg');
  console.log('Saved interior-before.jpg');
}

async function createCeramicHydrophobicBefore() {
  console.log('Processing ceramic-before.jpg...');
  const img = await Jimp.read('public/images/before-after/ceramic-after.jpg');
  const w = img.bitmap.width;
  const h = img.bitmap.height;
  const rand = sfc32(9876, 555, 333, 111);

  // Generate hard water spot mineral deposits
  const waterSpots = [];
  for (let i = 0; i < 90; i++) {
    waterSpots.push({
      cx: rand() * w,
      cy: (0.15 + rand() * 0.75) * h,
      radius: 6 + rand() * 18,
      ringThickness: 1.5 + rand() * 1.5,
    });
  }

  img.scan(0, 0, w, h, (x, y, idx) => {
    let r = img.bitmap.data[idx];
    let g = img.bitmap.data[idx + 1];
    let b = img.bitmap.data[idx + 2];

    // 1. Loss of deep optical clarity: mute the mirror reflection & saturation
    r = r * 0.85 + 20;
    g = g * 0.85 + 18;
    b = b * 0.82 + 15;

    // 2. Grimy water sheet residue across lower panels
    if (y > h * 0.45) {
      const mudFilm = (y / h) * 12;
      r += mudFilm;
      g += mudFilm * 0.8;
      b += mudFilm * 0.5;
    }

    // 3. Etched hard-water spot mineral rings
    for (const spot of waterSpots) {
      const dist = Math.hypot(x - spot.cx, y - spot.cy);
      if (Math.abs(dist - spot.radius) < spot.ringThickness) {
        // Mineral deposit white ring
        r = Math.min(255, r + 30);
        g = Math.min(255, g + 30);
        b = Math.min(255, b + 32);
      } else if (dist < spot.radius) {
        // Faint dried water watermark interior
        r = Math.min(255, r + 10);
        g = Math.min(255, g + 10);
        b = Math.min(255, b + 12);
      }
    }

    img.bitmap.data[idx] = Math.min(255, Math.max(0, r));
    img.bitmap.data[idx + 1] = Math.min(255, Math.max(0, g));
    img.bitmap.data[idx + 2] = Math.min(255, Math.max(0, b));
  });

  await img.write('public/images/before-after/ceramic-before.jpg');
  console.log('Saved ceramic-before.jpg');
}

async function run() {
  await createPaintPolishBefore();
  await createInteriorSteamBefore();
  await createCeramicHydrophobicBefore();
  console.log('All Before images created successfully!');
}

run().catch(err => {
  console.error('Error generating before images:', err);
  process.exit(1);
});
