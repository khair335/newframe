# Squarespace Integration Guide

Your React Card Swap component is now ready to use in Squarespace! Here's how to integrate it:

## 📁 Generated Files

After running `npm run build:squarespace`, you'll find these files in the `/squarespace-build/` folder:

- **`squarespace-complete.html`** - Complete standalone HTML file for testing
- **`squarespace-css.css`** - CSS styles only
- **`squarespace-js.js`** - JavaScript only
- **`squarespace-code-block.html`** - Ready-to-use HTML for Squarespace Code Block

## 🚀 Quick Start (Recommended Method)

### Method 1: Code Block (Easiest)
1. Go to your Squarespace page editor
2. Click the "+" to add a new block
3. Select "Code" from the block options
4. Copy the entire content from `squarespace-code-block.html`
5. Paste it into the Code block
6. Save and publish your page

### Method 2: Code Injection (More Control)
1. Go to **Settings** → **Advanced** → **Code Injection**
2. In the **Header** section, add the CSS from `squarespace-css.css`
3. In the **Footer** section, add:
   ```html
   <script crossorigin src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
   <script src="https://unpkg.com/gsap@3.13.0/dist/gsap.min.js"></script>
   <script>
   [Content from squarespace-js.js]
   </script>
   <script>
   if (window.CardStackComponent && window.React && window.ReactDOM) {
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(React.createElement(window.CardStackComponent));
   }
   </script>
   ```
4. Add `<div id="root"></div>` where you want the component to appear

## 🧪 Testing

Before adding to Squarespace:
1. Open `squarespace-complete.html` in your browser
2. Verify the card swap animation works correctly
3. Test on different screen sizes

## 📱 Responsive Design

The component is fully responsive and will work on:
- Desktop computers
- Tablets
- Mobile phones

## ⚠️ Important Notes

- **Squarespace Plan**: Make sure your Squarespace plan supports custom code blocks
- **Dependencies**: React, ReactDOM, and GSAP are loaded from CDN
- **Performance**: The component is optimized for production use
- **Updates**: Re-run `npm run build:squarespace` when you make changes to your React code

## 🔧 Troubleshooting

If the component doesn't appear:
1. Check your browser's console for errors
2. Ensure all CDN scripts are loading properly
3. Verify the `root` div is present on the page
4. Make sure your Squarespace plan allows custom code

## 🎨 Customization

To customize the component:
1. Modify your React code in `src/App.jsx`
2. Update styles in `src/App.css` or `ReactBits/CardSwap/CardSwap.css`
3. Re-run `npm run build:squarespace`
4. Update the code in your Squarespace site

## 📞 Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all files are properly loaded
3. Test with the standalone HTML file first
4. Ensure your Squarespace plan supports the features you're using