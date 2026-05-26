const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "img");

function walk(folder) {
  let files = [];

  for (const item of fs.readdirSync(folder)) {
    const full = path.join(folder, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      files = files.concat(walk(full));
    } else if (item.toLowerCase().endsWith(".webp")) {
      files.push(full);
    }
  }

  return files;
}

async function main() {
  const files = walk(dir);

  for (const file of files) {
    const meta = await sharp(file).metadata();
    const sizeKb = fs.statSync(file).size / 1024;

    console.log(
      `${path.relative(dir, file)} | ${meta.width}x${meta.height} | ${sizeKb.toFixed(1)} KB`,
    );
  }
}

main();
