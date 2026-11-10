const fs = require("fs");
const path = require("path");

const generated = fs.readFileSync(path.join(__dirname, "../app/generated-tailwind.css"), "utf-8");

const customRules = `
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background-color: #0a090c;
  color: #f4f4f5;
}

body {
  background-color: #0a090c;
  color: #f4f4f5;
  overflow-x: hidden;
}

/* Custom subtle dark scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #0a090c;
}

::-webkit-scrollbar-thumb {
  background: #23232a;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #383844;
}

/* Hide scrollbar utility for reel */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
`;

const finalContent = `@import "tailwindcss";\n\n${generated}\n\n${customRules}`;
fs.writeFileSync(path.join(__dirname, "../app/globals.css"), finalContent);
console.log("Successfully wrote app/globals.css. Total length:", finalContent.length);
