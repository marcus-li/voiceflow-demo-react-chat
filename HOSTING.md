Embedding a React app in another site via a script typically involves creating a bundle of your React app and then providing a script tag in the host site's HTML to load and render your app. Here are the general steps to achieve this:

1. **Build Your React App:**
    - Ensure that your React app is complete and ready for deployment.

2. **Create a Production Build:**
    - Generate a production-ready build of your React app. You can do this using a build tool like Webpack, Create React App, or Vite. Run the appropriate build command for your project. For example, with Create React App, you would run `npm run build` or `yarn build`.

3. **Host Your Bundle:**
    - After building your app, you'll have a set of static files (HTML, CSS, JavaScript, and assets) in a `build` or `dist` directory. Host these files on a web server or a content delivery network (CDN). Make sure these files are publicly accessible.

4. **Create an Embedding Script:**
    - Create a JavaScript file that will be used as the embedding script. This script will load your React app into the host site's HTML.
    - Within the embedding script, you'll use JavaScript to dynamically create HTML elements, inject the React app's bundle (JavaScript and CSS), and render it.

   Here's a simplified example of what the embedding script might look like:

   ```javascript
   // EmbeddingScript.js

   // Create a container element for your React app
   const container = document.createElement('div');
   container.id = 'my-react-app'; // You can customize the ID

   // Append the container to the host site's HTML
   document.body.appendChild(container);

   // Load the React app's bundle (JavaScript)
   const script = document.createElement('script');
   script.src = 'https://your-domain.com/path-to-your-react-app-bundle.js';
   document.head.appendChild(script);

   // Optionally, load the React app's CSS
   const link = document.createElement('link');
   link.rel = 'stylesheet';
   link.href = 'https://your-domain.com/path-to-your-react-app.css';
   document.head.appendChild(link);
   ```

5. **Embed in Host Site:**
    - Provide the embedding script in the host site's HTML by adding a script tag that references it. For example:

   ```html
   <!-- Host Site's HTML -->

   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Host Site</title>
     <!-- Include your embedding script -->
     <script src="path-to-embedding-script.js"></script>
   </head>
   <body>
     <!-- Any content on the host site -->
   </body>
   </html>
   ```

6. **Customize and Initialize:**
    - In your embedding script, you can customize the appearance and behavior of the embedded React app as needed. You might want to specify where and how it should be rendered within the host site's HTML.

7. **Test and Debug:**
    - Test your embedded React app on the host site to ensure it works as expected. Use browser developer tools for debugging if necessary.

8. **Documentation:**
    - Provide clear documentation for others who may want to embed your React app, including instructions for adding the embedding script to their site.

9. **Security Considerations:**
    - Be cautious about security. Ensure that your embedding script and React app do not introduce security vulnerabilities. Avoid accessing sensitive data or performing unauthorized actions within the host site's context.

Keep in mind that this is a simplified example, and the specific implementation details may vary depending on your React app's complexity and requirements. Be sure to follow best practices and consider security implications when embedding a React app on other websites.