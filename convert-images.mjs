import sharp from "sharp";
import { globSync } from "glob";
import path from "path";
import fs from "fs";

const QUALITY = 100;

const files = globSync("./src/assets/images/project/**/*.png");

console.log(` ${files.length}개 이미지 변환 시작\n`);

for (const file of files) {
  const originalSize = fs.statSync(file).size;
  const webpPath = file.replace(/\.png$/, ".webp");

  try {
    await sharp(file)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const newSize = fs.statSync(webpPath).size;
    const saved = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    console.log(` ${path.basename(file)} → webp (${saved}% 감소)`);
  } catch (e) { 
    console.log(` ${path.basename(file)}: ${e.message}`);
  }
}


//pnpm install sharp glob -D 
//node convert-images.mjs
