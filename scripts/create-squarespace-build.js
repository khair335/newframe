import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the built files
const distPath = path.join(__dirname, '../dist');
const jsPath = path.join(distPath, 'card-stack-component.umd.js');
const cssPath = path.join(distPath, 'vite-react-starter.css');

// Read the built files
const jsContent = fs.readFileSync(jsPath, 'utf8');
const cssContent = fs.readFileSync(cssPath, 'utf8');

// Create Squarespace-compatible HTML
const squarespaceHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Swap Component</title>
    <style>${cssContent}</style>
</head>
<body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/gsap@3.13.0/dist/gsap.min.js"></script>
    <script>${jsContent}</script>
    <script>
      if (window.CardStackComponent && window.React && window.ReactDOM) {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(React.createElement(window.CardStackComponent));
      }
    </script>
</body>
</html>`;

// Create Code Block version
const squarespaceCodeBlockHTML = `<div id="root"></div>
<script crossorigin src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/gsap@3.13.0/dist/gsap.min.js"></script>
<script>${jsContent}</script>
<script>
  if (window.CardStackComponent && window.React && window.ReactDOM) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(window.CardStackComponent));
  }
</script>`;

// Write the files
const squarespaceDir = path.join(__dirname, '../squarespace-build');
if (!fs.existsSync(squarespaceDir)) {
  fs.mkdirSync(squarespaceDir);
}

fs.writeFileSync(path.join(squarespaceDir, 'squarespace-complete.html'), squarespaceHTML);
fs.writeFileSync(path.join(squarespaceDir, 'squarespace-css.css'), cssContent);
fs.writeFileSync(path.join(squarespaceDir, 'squarespace-js.js'), jsContent);
fs.writeFileSync(path.join(squarespaceDir, 'squarespace-code-block.html'), squarespaceCodeBlockHTML);

console.log('✅ Squarespace build files created in /squarespace-build/');
console.log('📁 Files: squarespace-complete.html, squarespace-css.css, squarespace-js.js, squarespace-code-block.html');
console.log('📋 Quick Start: Copy squarespace-code-block.html content into a Squarespace Code block');