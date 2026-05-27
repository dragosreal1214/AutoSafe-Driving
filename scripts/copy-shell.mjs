import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const shell = resolve("dist/client/_shell.html");
const index = resolve("dist/client/index.html");

if (!existsSync(shell)) {
  console.error(`[copy-shell] missing ${shell}`);
  process.exit(1);
}

copyFileSync(shell, index);
console.log(`[copy-shell] copied ${shell} -> ${index}`);
