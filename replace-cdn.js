import fs from "fs";
import path from "path";

const ROOT_DIR = "./src";
const CDN = "https://cdn.svcehighways.in";


// file types to scan
const VALID_EXT = [".ts", ".tsx", ".js", ".jsx"];

// backup folder
const BACKUP_DIR = "./backup_before_cdn";

// ensure backup folder exists
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// regex to match "/assets/..."
const regex = /(["'`])\/assets\/(.*?)\1/g;

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  let changed = false;

  const updated = content.replace(regex, (match, quote, assetPath) => {
    changed = true;
    return `${quote}${CDN}/assets/${assetPath}${quote}`;
  });

  if (changed) {
    // backup original file
    const backupPath = path.join(
      BACKUP_DIR,
      filePath.replace(/[\/\\]/g, "_")
    );
    fs.writeFileSync(backupPath, content);

    // write updated file
    fs.writeFileSync(filePath, updated);

    console.log("✅ Updated:", filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
    } else {
      if (VALID_EXT.includes(path.extname(file))) {
        processFile(fullPath);
      }
    }
  }
}

// 🚀 RUN
walk(ROOT_DIR);

console.log("🔥 Done. Backup stored in:", BACKUP_DIR);
