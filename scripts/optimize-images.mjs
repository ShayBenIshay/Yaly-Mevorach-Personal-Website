import sharp from "sharp";
import { mkdir, copyFile, unlink, stat } from "node:fs/promises";
import path from "node:path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const SOURCES_DIR = path.join(process.cwd(), "sources");

// maxWidth is the largest size the image is ever rendered at (accounting for
// retina); quality is the WebP quality (0-100).
const IMAGES = {
  "background-hero.png": { maxWidth: 2400, quality: 78 },
  "background-whale.png": { maxWidth: 2400, quality: 78 },
  "bg-jumping-whale.png": { maxWidth: 2400, quality: 78 },
  "ConventionBackground.png": { maxWidth: 1600, quality: 80 },
  "publications-image-1.jpg": { maxWidth: 1600, quality: 80 },
  "publications-image-2.jpg": { maxWidth: 1600, quality: 80 },
  "YalySpeech-image.png": { maxWidth: 1200, quality: 82 },
  "YalyMevorach-personal-image.png": { maxWidth: 1200, quality: 82 },
  "graduation-image.png": { maxWidth: 1200, quality: 82 },
  "project-image-1.png": { maxWidth: 1000, quality: 82 },
  "project-image-2.png": { maxWidth: 1000, quality: 82 },
};

async function optimize(filename, { maxWidth, quality }) {
  const inputPath = path.join(IMAGES_DIR, filename);
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  const outputPath = path.join(IMAGES_DIR, `${base}.webp`);

  await copyFile(inputPath, path.join(SOURCES_DIR, filename));

  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath);

  const before = (await stat(inputPath)).size;
  const after = (await stat(outputPath)).size;
  const pct = (100 * (1 - after / before)).toFixed(0);
  console.log(
    `${filename} -> ${base}.webp  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)`
  );

  await unlink(inputPath);
}

async function main() {
  await mkdir(SOURCES_DIR, { recursive: true });

  for (const [filename, opts] of Object.entries(IMAGES)) {
    await optimize(filename, opts);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
