import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import mime from "mime-types";

// 🔑 CONFIG
const ACCOUNT_ID = "13ef2bc5faf2a3e8279221662549cd60";
const ACCESS_KEY = "dad4596e393d977760a75c065bc9a3a5";
const SECRET_KEY = "699f7c47b6b21a25704c075f789b0293dd2641a00474cd2bb419752a46ab1fbc";
const BUCKET = "highways26";

// 📂 FOLDERS TO UPLOAD (IMPORTANT)
const ROOT_FOLDERS = ["./public", "./src"];

// 🎯 Allowed file types (images + videos)
const ALLOWED_EXTENSIONS = [
  ".jpg", ".jpeg", ".png", ".webp", ".gif",
  ".mp4", ".mov", ".webm", ".avi"
];

// S3 client (R2)
const client = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  },
});

// 🔍 Check if file is media
function isMediaFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ALLOWED_EXTENSIONS.includes(ext);
}

// 🔁 Recursive upload
async function uploadDirectory(baseDir, currentDir) {
  const files = fs.readdirSync(currentDir);

  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await uploadDirectory(baseDir, fullPath);
    } else {
      if (!isMediaFile(fullPath)) continue;

      const fileStream = fs.createReadStream(fullPath);

      // Clean + preserve path
      let key = path.relative(baseDir, fullPath).replace(/\\/g, "/");

      // OPTIONAL: normalize spaces (recommended)
      key = key.replace(/\s+/g, "-");

      const contentType = mime.lookup(fullPath) || "application/octet-stream";

      try {
        await client.send(
          new PutObjectCommand({
            Bucket: BUCKET,
            Key: key,
            Body: fileStream,
            ContentType: contentType,
            CacheControl: "public, max-age=31536000",
          })
        );

        console.log("✅ Uploaded:", key);
      } catch (err) {
        console.error("❌ Failed:", key, err.message);
      }
    }
  }
}

// 🚀 MAIN
async function main() {
  for (const folder of ROOT_FOLDERS) {
    console.log(`📂 Processing: ${folder}`);
    await uploadDirectory(folder, folder);
  }

  console.log("🔥 ALL MEDIA UPLOADED");
}

main();