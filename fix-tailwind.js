#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('========== Tailwind CSS 4 Fix Script ==========');
console.log('Starting Tailwind CSS 4 compatibility fix process...');

// Install tailwind postcss package
try {
  console.log('Installing @tailwindcss/postcss...');
  execSync('npm install @tailwindcss/postcss', { stdio: 'inherit' });
  console.log('Successfully installed @tailwindcss/postcss');
} catch (error) {
  console.error('Failed to install @tailwindcss/postcss:', error);
  // Don't exit, try to proceed with fixing the CSS classes
}

// Create a comprehensive list of class updates
const classUpdates = {
  // Basic colors
  'bg-background': 'bg-background-DEFAULT',
  'text-foreground': 'text-foreground-DEFAULT',
  'border-border': 'border-border-DEFAULT',
  
  // Primary
  'text-primary': 'text-primary-DEFAULT',
  'bg-primary': 'bg-primary-DEFAULT',
  'border-primary': 'border-primary-DEFAULT',
  'ring-primary': 'ring-primary-DEFAULT',
  'focus:ring-primary': 'focus:ring-primary-DEFAULT',
  'hover:text-primary': 'hover:text-primary-DEFAULT',
  'hover:bg-primary': 'hover:bg-primary-DEFAULT',
  'from-primary': 'from-primary-DEFAULT',
  'to-primary': 'to-primary-DEFAULT',
  
  // Secondary
  'text-secondary': 'text-secondary-DEFAULT',
  'bg-secondary': 'bg-secondary-DEFAULT',
  'border-secondary': 'border-secondary-DEFAULT',
  'ring-secondary': 'ring-secondary-DEFAULT',
  'focus:ring-secondary': 'focus:ring-secondary-DEFAULT',
  'hover:text-secondary': 'hover:text-secondary-DEFAULT',
  'hover:bg-secondary': 'hover:bg-secondary-DEFAULT',
  'from-secondary': 'from-secondary-DEFAULT',
  'to-secondary': 'to-secondary-DEFAULT',
  
  // Accent
  'text-accent': 'text-accent-DEFAULT',
  'bg-accent': 'bg-accent-DEFAULT',
  'border-accent': 'border-accent-DEFAULT',
  'ring-accent': 'ring-accent-DEFAULT',
  'focus:ring-accent': 'focus:ring-accent-DEFAULT',
  'hover:text-accent': 'hover:text-accent-DEFAULT',
  'hover:bg-accent': 'hover:bg-accent-DEFAULT',
  'from-accent': 'from-accent-DEFAULT',
  'to-accent': 'to-accent-DEFAULT',
  
  // Muted
  'text-muted': 'text-muted-DEFAULT',
  'bg-muted': 'bg-muted-DEFAULT',
  'border-muted': 'border-muted-DEFAULT',
  
  // Destructive
  'bg-destructive': 'bg-destructive-DEFAULT',
  'text-destructive': 'text-destructive-DEFAULT',
  'border-destructive': 'border-destructive-DEFAULT',
  
  // Card
  'bg-card': 'bg-card-DEFAULT',
  'text-card': 'text-card-DEFAULT',
  'border-card': 'border-card-DEFAULT',
  
  // Popover
  'bg-popover': 'bg-popover-DEFAULT',
  'text-popover': 'text-popover-DEFAULT',
  'border-popover': 'border-popover-DEFAULT',
  
  // Input
  'bg-input': 'bg-input-DEFAULT',
  'border-input': 'border-input-DEFAULT',
  
  // Ring
  'ring-ring': 'ring-ring-DEFAULT',
  'focus-visible:ring-ring': 'focus-visible:ring-ring-DEFAULT',
};

// Additional class patterns that might appear in template literals or className expressions
const classPatterns = [
  { 
    pattern: /(\w+:)?border-(border)(?!-DEFAULT)/g, 
    replacement: '$1border-$2-DEFAULT' 
  },
  { 
    pattern: /(\w+:)?bg-(background|primary|secondary|accent|muted|destructive|card|popover|input)(?!-DEFAULT|-foreground)/g,
    replacement: '$1bg-$2-DEFAULT' 
  },
  { 
    pattern: /(\w+:)?text-(foreground|primary|secondary|accent|muted|destructive|card|popover)(?!-DEFAULT|-foreground)/g,
    replacement: '$1text-$2-DEFAULT' 
  },
  { 
    pattern: /(\w+:)?from-(primary|secondary|accent|background)(?!-DEFAULT|-foreground)/g,
    replacement: '$1from-$2-DEFAULT' 
  },
  { 
    pattern: /(\w+:)?to-(primary|secondary|accent|background)(?!-DEFAULT|-foreground)/g,
    replacement: '$1to-$2-DEFAULT' 
  },
  { 
    pattern: /(\w+:)?ring-(primary|secondary|accent|ring)(?!-DEFAULT|-foreground)/g,
    replacement: '$1ring-$2-DEFAULT' 
  },
];

// Fix all CSS class references in the codebase
const updateCssClasses = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules and .git directories
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== '.next') {
        updateCssClasses(entryPath);
      }
    } else if (
      entry.name.endsWith('.jsx') || 
      entry.name.endsWith('.js') || 
      entry.name.endsWith('.tsx') || 
      entry.name.endsWith('.ts') || 
      entry.name.endsWith('.css') || 
      entry.name.endsWith('.html') || 
      entry.name.endsWith('.mdx')
    ) {
      try {
        let content = fs.readFileSync(entryPath, 'utf8');
        let updated = false;
        
        // First, apply direct class name replacements
        for (const [oldClass, newClass] of Object.entries(classUpdates)) {
          if (content.includes(oldClass)) {
            // Make sure we don't replace if it's already fixed with DEFAULT
            const regex = new RegExp(`\\b${oldClass}\\b(?!-DEFAULT)`, 'g');
            const originalContent = content;
            content = content.replace(regex, newClass);
            if (content !== originalContent) {
              updated = true;
            }
          }
        }
        
        // Then apply the regex pattern replacements for more complex cases
        for (const { pattern, replacement } of classPatterns) {
          const originalContent = content;
          content = content.replace(pattern, replacement);
          if (content !== originalContent) {
            updated = true;
          }
        }
        
        if (updated) {
          fs.writeFileSync(entryPath, content, 'utf8');
          console.log(`Updated Tailwind classes in ${entryPath}`);
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
    console.log('Created new postcss.config.mjs file');
    return;
  }
  
  try {
    let content = fs.readFileSync(postcssConfigPath, 'utf8');
    
    // Replace tailwindcss with @tailwindcss/postcss
    if (content.includes('tailwindcss')) {
      content = content.replace(/['"]tailwindcss['"]/, "'@tailwindcss/postcss'");
      fs.writeFileSync(postcssConfigPath, content, 'utf8');
      console.log('Updated postcss.config.mjs');
    } else if (content.includes('@tailwindcss/postcss')) {
      console.log('postcss.config.mjs already using @tailwindcss/postcss');
    }
  } catch (error) {
    console.error('Failed to update postcss.config.mjs:', error);
    
    // If we couldn't update, create a new one
    try {
      console.log('Creating new postcss.config.mjs...');
      const postcssConfig = `export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
`;
      fs.writeFileSync(postcssConfigPath, postcssConfig, 'utf8');
      console.log('Created new postcss.config.mjs file');
    } catch (e) {
      console.error('Failed to create postcss.config.mjs:', e);
    }
  }
};

console.log('Updating PostCSS configuration...');
updatePostcssConfig();

console.log('Updating CSS class references...');
updateCssClasses(process.cwd());

console.log('Tailwind CSS 4 compatibility fix process completed!');
console.log('=================================================') 