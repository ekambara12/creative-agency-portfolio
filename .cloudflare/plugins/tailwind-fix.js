// This file helps with Tailwind CSS 4 integration
module.exports = {
  name: 'tailwind-fix',
  setup: (build) => {
    build.onLoad({ filter: /globals\.css$/ }, async (args) => {
      // Install @tailwindcss/postcss if needed
      try {
        require('@tailwindcss/postcss');
      } catch (e) {
        console.log('Installing @tailwindcss/postcss...');
        require('child_process').execSync('npm install @tailwindcss/postcss');
      }
    });
  }
}; 