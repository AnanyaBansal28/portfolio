const { compile } = require("@tailwindcss/node");
const { Scanner } = require("@tailwindcss/oxide");
const fs = require("fs");
const path = require("path");

async function run() {
  const css = '@import "tailwindcss";\n';
  const compiler = await compile(css, {
    base: path.resolve(__dirname, ".."),
    onDependency: () => {},
  });

  const scanner = new Scanner({
    sources: [{ base: path.resolve(__dirname, ".."), pattern: "**/*", negated: false }],
  });

  const candidates = [...scanner.scan()];
  console.log("Scanned candidates count:", candidates.length);

  const builtCss = compiler.build(candidates);
  console.log("Generated CSS length:", builtCss.length);
  fs.writeFileSync(path.join(__dirname, "../app/generated-tailwind.css"), builtCss);
  console.log("Wrote generated-tailwind.css successfully!");
}

run().catch(console.error);

