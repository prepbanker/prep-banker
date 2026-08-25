// PATH: scripts/measure-homepage-size.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../.next/server/app/index.html');
if (fs.existsSync(filePath)) {
  const stats = fs.statSync(filePath);
  console.log('Homepage HTML path:', filePath);
  console.log('Size:', (stats.size / 1024).toFixed(2), 'KB');
} else {
  console.log('Homepage html file not found at:', filePath);
  // Let's search in .next for any index.html files
  const searchDir = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const full = path.join(dir, file);
      if (fs.statSync(full).isDirectory()) {
        if (file !== 'node_modules' && file !== '.git') {
          searchDir(full);
        }
      } else if (file === 'index.html' || file.endsWith('.html')) {
        console.log('Found HTML file:', full, (fs.statSync(full).size / 1024).toFixed(2), 'KB');
      }
    }
  };
  searchDir(path.join(__dirname, '../.next'));
}
