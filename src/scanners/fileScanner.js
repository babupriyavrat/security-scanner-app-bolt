import { readdir, stat } from 'fs/promises';
import { join } from 'path';

export async function scanFiles(directory = process.cwd()) {
  const results = {
    scannedFiles: 0,
    suspiciousFiles: [],
    warnings: []
  };

  try {
    const files = await readdir(directory);
    
    for (const file of files) {
      const path = join(directory, file);
      const stats = await stat(path);
      
      results.scannedFiles++;

      // Check for suspicious file permissions
      if (process.platform !== 'win32' && (stats.mode & 0o777) === 0o777) {
        results.warnings.push(`File with full permissions (777) detected: ${file}`);
      }

      // Check for suspicious file extensions
      if (file.match(/\.(exe|dll|sh|bat)$/i)) {
        results.suspiciousFiles.push(file);
      }
    }
  } catch (error) {
    results.warnings.push(`Error scanning directory: ${error.message}`);
  }

  return results;
}