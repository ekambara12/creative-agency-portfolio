#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install tailwind postcss package
try {
  console.log('Installing @tailwindcss/postcss...');
  execSync('npm install @tailwindcss/postcss', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to install @tailwindcss/postcss:', error);
  process.exit(1);
}

// Fix all CSS class references in the codebase
const updateCssClasses = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules and .git directories
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        updateCssClasses(entryPath);
      }
    } else if (
      entry.name.endsWith('.jsx') || 
      entry.name.endsWith('.js') || 
      entry.name.endsWith('.tsx') || 
      entry.name.endsWith('.ts') || 
      entry.name.endsWith('.css')
    ) {
      try {
        let content = fs.readFileSync(entryPath, 'utf8');
        
        // Update common class names according to Tailwind CSS 4 format
        const classUpdates = {
          'bg-background': 'bg-background-DEFAULT',
          'text-foreground': 'text-foreground-DEFAULT',
          'border-border': 'border-border-DEFAULT',
          'text-primary': 'text-primary-DEFAULT',
          'bg-primary': 'bg-primary-DEFAULT',
          'text-secondary': 'text-secondary-DEFAULT',
          'bg-secondary': 'bg-secondary-DEFAULT',
          'text-accent': 'text-accent-DEFAULT',
          'bg-accent': 'bg-accent-DEFAULT',
          'text-muted': 'text-muted-DEFAULT',
          'bg-muted': 'bg-muted-DEFAULT',
          'bg-destructive': 'bg-destructive-DEFAULT',
          'text-destructive': 'text-destructive-DEFAULT',
          'bg-card': 'bg-card-DEFAULT',
          'text-card': 'text-card-DEFAULT',
          'bg-popover': 'bg-popover-DEFAULT',
          'text-popover': 'text-popover-DEFAULT',
          'ring-ring': 'ring-ring-DEFAULT',
          'placeholder-muted-foreground': 'placeholder-muted-foreground',
          'focus-visible:ring-ring': 'focus-visible:ring-ring-DEFAULT',
        };
        
        let updated = false;
        for (const [oldClass, newClass] of Object.entries(classUpdates)) {
          if (content.includes(oldClass)) {
            content = content.replace(new RegExp(oldClass, 'g'), newClass);
            updated = true;
          }
        }
        
        if (updated) {
          fs.writeFileSync(entryPath, content, 'utf8');
          console.log(`Updated classes in ${entryPath}`);
        }
      } catch (error) {
        console.error(`Error processing ${entryPath}:`, error);
      }
    }
  }
};

// Update postcss.config.mjs
const updatePostcssConfig = () => {
  const postcssConfigPath = path.join(process.cwd(), 'postcss.config.mjs');
  
  if (!fs.existsSync(postcssConfigPath)) {
    console.log('Creating postcss.config.mjs...');
    const postcssConfig = `export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
`;
    fs.writeFileSync(postcssConfigPath, postcssConfig, 'utf8');
    return;
  }
  
  try {
    let content = fs.readFileSync(postcssConfigPath, 'utf8');
    
    // Replace tailwindcss with @tailwindcss/postcss
    if (content.includes('tailwindcss')) {
      content = content.replace(/['"]tailwindcss['"]/, "'@tailwindcss/postcss'");
      fs.writeFileSync(postcssConfigPath, content, 'utf8');
      console.log('Updated postcss.config.mjs');
    }
  } catch (error) {
    console.error('Failed to update postcss.config.mjs:', error);
  }
};

console.log('Starting Tailwind CSS 4 fix process...');
updatePostcssConfig();
updateCssClasses(process.cwd());
console.log('Tailwind CSS 4 fix process completed successfully!'); 