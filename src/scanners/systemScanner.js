import { cpus, totalmem, freemem, platform, release } from 'os';

export async function scanSystem() {
  const results = {
    platform: platform(),
    release: release(),
    cpuCount: cpus().length,
    totalMemory: Math.round(totalmem() / 1024 / 1024) + 'MB',
    freeMemory: Math.round(freemem() / 1024 / 1024) + 'MB',
    nodeVersion: process.version,
    warnings: []
  };

  // Check memory usage
  const memoryUsagePercent = (1 - freemem() / totalmem()) * 100;
  if (memoryUsagePercent > 90) {
    results.warnings.push('High memory usage detected');
  }

  return results;
}