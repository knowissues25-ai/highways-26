import fs from "fs";
import path from "path";

const ROOT_DIR = "./src";

// old + new domain
const OLD = "https://cdn.highways26.com";
const NEW = "https://cdn.svcehighways.in";

// file types
const VALID_EXT = [".ts", ".tsx", ".js", ".jsx"];

// backup folder
const BACKUP_DIR = "./backup_domain_fix";

if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  if (!content.includes(OLD)) return;

  const updated = content.replaceAll(OLD, NEW);

  // backup
  const backupPath = path.join(
    BACKUP_DIR,
    filePath.replace(/[\/\\]/g, "_")
  );
  fs.writeFileSync(backupPath, content);

  // write updated
  fs.writeFileSync(filePath, updated);

  console.log("✅ Fixed:", filePath);
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

console.log("🔥 Domain updated safely");