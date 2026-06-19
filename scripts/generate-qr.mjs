import QRCode from "qrcode";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const URL = "https://saneed-weds-barza.vercel.app/";
const OUTPUT = resolve(__dirname, "../public/qr-wedding.png");

await QRCode.toFile(OUTPUT, URL, {
  type: "png",
  width: 1024,
  margin: 2,
  color: {
    dark: "#0A0906",   // deep dark matching site bg
    light: "#F5F0E8",  // warm beige matching site palette
  },
  errorCorrectionLevel: "H",
});

console.log(`QR code saved → public/qr-wedding.png`);
console.log(`URL: ${URL}`);
