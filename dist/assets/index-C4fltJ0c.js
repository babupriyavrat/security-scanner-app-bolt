(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const i={system:{platform:"Browser",nodeVersion:"N/A (Browser Environment)",totalMemory:"Browser Memory API Not Available",freeMemory:"Browser Memory API Not Available",warnings:["Running in browser environment - limited system access"]},network:{interfaces:[],warnings:["Network information not available in browser environment"]},files:{scannedFiles:0,suspiciousFiles:[],warnings:["File system access not available in browser environment"]}};function l(t,s,o){return`
        <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-4">${s} ${t}</h2>
            <pre class="bg-gray-50 p-4 rounded-md overflow-x-auto">${JSON.stringify(o,null,2)}</pre>
        </div>
    `}function d(){const t=document.getElementById("results");try{t.innerHTML=`
            ${l("System Information","📊",i.system)}
            ${l("Network Status","🌐",i.network)}
            ${l("File Analysis","📁",i.files)}
        `,t.innerHTML+=`
            <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mt-4">
                <p class="font-medium">⚠️ Browser Preview Mode</p>
                <p>This is a preview with mock data. For full system scanning capabilities, please run the Node.js version using 'node src/index.js'.</p>
            </div>
        `}catch(s){t.innerHTML=`
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Error: ${s.message}
            </div>
        `}}d();
