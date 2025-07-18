const fs = require('fs');
const path = require('path');

const outDir = 'out';

// Ensure the 'out' directory exists, as 'next build' should create it.
if (fs.existsSync(outDir)) {
  const noJekyllFile = path.join(outDir, '.nojekyll');
  fs.writeFileSync(noJekyllFile, '');
  console.log(`Created ${noJekyllFile}`);
} else {
  console.error(`Error: '${outDir}' directory not found. Run 'next build' before this script.`);
  // process.exit(1); // next build creates the dir, so this shouldn't be necessary
}
