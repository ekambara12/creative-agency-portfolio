#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('Installing @tailwindcss/postcss...');
try {
  execSync('npm install @tailwindcss/postcss', { stdio: 'inherit' });
} catch (error) {
  console.error('Error installing @tailwindcss/postcss:', error);
  process.exit(1);
}

// Update PostCSS config
const postcssConfig = `/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
`;

console.log('Writing PostCSS config...');
try {
  fs.writeFileSync('./postcss.config.mjs', postcssConfig);
  console.log('PostCSS config updated successfully.');
} catch (error) {
  console.error('Error updating PostCSS config:', error);
  process.exit(1);
}

console.log('Tailwind CSS setup completed!'); 