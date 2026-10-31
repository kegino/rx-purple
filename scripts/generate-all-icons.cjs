const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const svgBuffer = fs.readFileSync(path.join(publicDir, 'favicon.svg'));

  console.log('Generating assets from favicon.svg...');

  // 1. favicon-512.png
  await sharp(svgBuffer)
    .resize(512, 512)
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'favicon-512.png'));
  console.log('✓ favicon-512.png');

  // 2. favicon-192.png
  await sharp(svgBuffer)
    .resize(192, 192)
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'favicon-192.png'));
  console.log('✓ favicon-192.png');

  // 3. apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png');

  // 4. favicon-32.png (32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'favicon-32.png'));
  console.log('✓ favicon-32.png');

  // 5. logo-rx.webp (512x512 WebP)
  await sharp(svgBuffer)
    .resize(512, 512)
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'logo-rx.webp'));
  console.log('✓ logo-rx.webp');

  // 6. favicon.ico (using PNG 32x32 buffer directly)
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), png32);
  console.log('✓ favicon.ico');

  console.log('Todos os ícones e logotipos atualizados com sucesso!');
}

main().catch(console.error);

