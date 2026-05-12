const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "img");
const exts = [".webp", ".webp", ".webp"];

async function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await walk(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (!exts.includes(ext)) continue;

    const outPath = fullPath.slice(0, -ext.length) + ".webp";

    console.log("Converting:", fullPath);

    await sharp(fullPath).webp({ quality: 70 }).toFile(outPath);
  }
}

walk(root)
  .then(() => console.log("Done"))
  .catch((err) => console.error(err));

