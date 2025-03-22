export async function onRequest(context) {
  const { request, next } = context;
  
  try {
    return await next();
  } catch (err) {
    // If an error is thrown because the page wasn't found, serve the index page
    if (err.status === 404) {
      // Create a new request to the index page
      const indexRequest = new Request(`${new URL(request.url).origin}/index.html`, request);
      return await context.env.ASSETS.fetch(indexRequest);
    }
    
    throw err;
  }
} 