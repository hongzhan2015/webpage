#!/usr/bin/env bash
set -euo pipefail

OUT_DIR="export/changed-files"
ZIP_PATH="changed-files.zip"

rm -rf "$OUT_DIR" "$ZIP_PATH"
mkdir -p "$OUT_DIR/scripts" "$OUT_DIR/styles"

cp README.md "$OUT_DIR/README.md"
cp index.html "$OUT_DIR/index.html"
cp scripts/main.js "$OUT_DIR/scripts/main.js"
cp styles/main.css "$OUT_DIR/styles/main.css"

zip -r "$ZIP_PATH" "$OUT_DIR" >/dev/null

echo "Created $ZIP_PATH with the changed files:"
echo "- $OUT_DIR/README.md"
echo "- $OUT_DIR/index.html"
echo "- $OUT_DIR/scripts/main.js"
echo "- $OUT_DIR/styles/main.css"
