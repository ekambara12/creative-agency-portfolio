export default {
  // Configure build settings
  build: {
    // Use this command to build the site
    command: "pnpm build",
    
    // The directory to serve static assets from
    outputDirectory: "out",

    // Base directory for all build commands
    baseDirectory: ".",
  },
  
  // Static assets that should be served
  assets: {
    favicon: "/favicon.ico"
  }
} 