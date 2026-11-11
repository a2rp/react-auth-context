const { copyFileSync } = require("node:fs");
const { resolve } = require("node:path");

const buildDirectory = resolve(__dirname, "..", "build");
copyFileSync(
    resolve(buildDirectory, "index.html"),
    resolve(buildDirectory, "404.html"),
);
