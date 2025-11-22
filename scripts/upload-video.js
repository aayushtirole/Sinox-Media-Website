// scripts/upload-video.js
// Usage: node scripts/upload-video.js "C:\path\to\video.mp4"
// Requires: npm i @supabase/supabase-js dotenv

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE) {
  console.error("ERROR: Set SUPABASE_URL and SUPABASE_SERVICE_ROLE in .env");
  process.exit(1);
}

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
  auth: { persistSession: false },
});

// 🔥 Filename sanitizer (fixes emoji, spaces, &, etc.)
function sanitizeFilename(filename) {
  return filename
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
}

async function uploadVideo(localFilePath) {
  if (!fs.existsSync(localFilePath)) {
    console.error("❌ File not found:", localFilePath);
    return null;
  }

  const bucket = "videos"; // ensure bucket exists in Supabase
  const originalName = path.basename(localFilePath);
  const safeName = sanitizeFilename(originalName);

  const remotePath = `uploads/${Date.now()}-${safeName}`;

  console.log("📁 Original filename:", originalName);
  console.log("✅ Sanitized filename:", safeName);
  console.log("⬆️ Uploading to:", remotePath);

  const stream = fs.createReadStream(localFilePath);

  const { data, error } = await supabaseAdmin.storage
    .from(bucket)
    .upload(remotePath, stream, {
      contentType: "video/mp4",
      upsert: false,
    });

  if (error) {
    console.error("❌ Upload error:", error);
    return null;
  }

  console.log("🎉 Uploaded successfully!");
  console.log("📦 Storage path:", data.path);

  // Signed URL (valid 10 minutes)
  const { data: signed, error: sErr } = await supabaseAdmin.storage
    .from(bucket)
    .createSignedUrl(data.path, 60 * 10);

  if (sErr) {
    console.error("❌ Signed URL error:", sErr);
  } else {
    console.log("🔗 Signed URL (10 min):", signed.signedUrl);
  }

  return data.path;
}

async function main() {
  const argPath = process.argv[2];
  if (!argPath) {
    console.error('Usage: node scripts/upload-video.js "C:\\path\\to\\video.mp4"');
    process.exit(1);
  }

  const remote = await uploadVideo(argPath);

  if (!remote) process.exit(1);

  process.exit(0);
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
