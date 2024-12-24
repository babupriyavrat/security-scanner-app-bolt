import { mockResults } from './mockData.js';

function createCard(title, emoji, content) {
    return `
        <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-4">${emoji} ${title}</h2>
            <pre class="bg-gray-50 p-4 rounded-md overflow-x-auto">${JSON.stringify(content, null, 2)}</pre>
        </div>
    `;
}

function displayResults() {
    const resultsDiv = document.getElementById('results');
    
    try {
        // Display mock results for browser preview
        resultsDiv.innerHTML = `
            ${createCard('System Information', '📊', mockResults.system)}
            ${createCard('Network Status', '🌐', mockResults.network)}
            ${createCard('File Analysis', '📁', mockResults.files)}
        `;

        // Add note about browser limitations
        resultsDiv.innerHTML += `
            <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mt-4">
                <p class="font-medium">⚠️ Browser Preview Mode</p>
                <p>This is a preview with mock data. For full system scanning capabilities, please run the Node.js version using 'node src/index.js'.</p>
            </div>
        `;
    } catch (error) {
        resultsDiv.innerHTML = `
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Error: ${error.message}
            </div>
        `;
    }
}

displayResults();