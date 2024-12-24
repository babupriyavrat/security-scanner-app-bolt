import { networkInterfaces } from 'os';

export async function scanNetwork() {
  const results = {
    interfaces: [],
    warnings: []
  };

  const nets = networkInterfaces();
  
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip internal interfaces
      if (!net.internal) {
        results.interfaces.push({
          name,
          address: net.address,
          family: net.family,
          mac: net.mac
        });
      }
    }
  }

  // Check for potentially problematic network configurations
  if (results.interfaces.length === 0) {
    results.warnings.push('No external network interfaces detected');
  }

  return results;
}