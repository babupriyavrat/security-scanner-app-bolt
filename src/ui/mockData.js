// Mock data for browser display since we can't access Node.js APIs
export const mockResults = {
  system: {
    platform: "Browser",
    nodeVersion: "N/A (Browser Environment)",
    totalMemory: "Browser Memory API Not Available",
    freeMemory: "Browser Memory API Not Available",
    warnings: ["Running in browser environment - limited system access"]
  },
  network: {
    interfaces: [],
    warnings: ["Network information not available in browser environment"]
  },
  files: {
    scannedFiles: 0,
    suspiciousFiles: [],
    warnings: ["File system access not available in browser environment"]
  }
};