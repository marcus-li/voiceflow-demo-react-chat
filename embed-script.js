// embed-script.js

const fs = require('fs');

// Replace with the URL of your CDN-hosted React app bundle


// Create the embedding script
const embeddingScript = `
<script type="module">

// Create a function to load the React app bundle
function loadReactApp() {
  const reactAppURL = 'https://your-cdn.com/path-to/your-react-app.js';
 //TODO: sync with the marcus github public 
  const script = document.createElement('script');
  script.src = reactAppURL;
  script.type = 'module'; // Adjust this if needed (e.g., 'text/javascript')
  script.async = true;
  script.onload = () => {
    // Customize the script as needed for embedding
    const rootContainer = document.getElementById('root');
    if (!rootContainer) {
      // If it doesn't exist, create it and add it to the body
      const newRootContainer = document.createElement('div');
      newRootContainer.id = 'root';
      document.body.appendChild(newRootContainer);
    }
    // Example: Inject the React app into a specific div with an ID
    const container = document.getElementById('embedding-container');
    // if (container && typeof ReactApp !== 'undefined') {
    //   ReactApp.render({}, container);
    // }
  };

  document.body.appendChild(script);
}

// Load the React app when the page is ready
if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  loadReactApp();
} else {
  document.addEventListener('DOMContentLoaded', loadReactApp);
}
</script>
`;

// Write the embedding script to an HTML file
fs.writeFileSync('embedding-script.html', embeddingScript);

console.log('Embedding script generated: embedding-script.html');
