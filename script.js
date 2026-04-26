const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
};

const files = walk('.');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content
    .replace(/sky-300/g, 'sky-300')
    .replace(/sky-200/g, 'sky-200')
    .replace(/#7DD3FC/g, '#7DD3FC')
    .replace(/bg-pink-50\/20/g, 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10')
    .replace(/text-white/60/g, 'text-white/60')
    .replace(/text-white/80/g, 'text-white/80')
    .replace(/bg-[#0A0A0A]/g, 'bg-[#0A0A0A]');
    
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
  }
});
console.log('done');
