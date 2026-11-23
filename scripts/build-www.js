// Kopiert die Web-App nach www/ (Eingabe für die Android-App). Der Service Worker wird nicht gebraucht.
const fs = require("fs"), path = require("path");
const out = path.join(__dirname, "..", "www");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const f of ["index.html", "manifest.json", "data.enc.json"]) fs.copyFileSync(path.join(__dirname, "..", f), path.join(out, f));
fs.cpSync(path.join(__dirname, "..", "icons"), path.join(out, "icons"), { recursive: true });
console.log("www bereit");
