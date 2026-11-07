import sharp from 'sharp';

const files = ['university', 'hallway', 'hero_illustration'];
for (const name of files) {
  await sharp(`public/images/${name}.png`)
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`public/images/${name}.webp`);
  console.log('selesai:', name);
}