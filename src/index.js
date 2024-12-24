import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { scanSystem } from './scanners/systemScanner.js';
import { scanNetwork } from './scanners/networkScanner.js';
import { scanFiles } from './scanners/fileScanner.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log(chalk.blue('🔒 Starting Security Scanner'));
  
  try {
    // Run system scan
    console.log(chalk.yellow('\n📊 Running System Scan...'));
    const systemResults = await scanSystem();
    console.log(chalk.green('✓ System scan complete'));

    // Run network scan
    console.log(chalk.yellow('\n🌐 Running Network Scan...'));
    const networkResults = await scanNetwork();
    console.log(chalk.green('✓ Network scan complete'));

    // Run file scan
    console.log(chalk.yellow('\n📁 Running File Scan...'));
    const fileResults = await scanFiles();
    console.log(chalk.green('✓ File scan complete'));

    // Print summary
    console.log(chalk.blue('\n📋 Scan Summary:'));
    console.log('System:', systemResults);
    console.log('Network:', networkResults);
    console.log('Files:', fileResults);
  } catch (error) {
    console.error(chalk.red('Error during scan:'), error);
    process.exit(1);
  }
}

main();