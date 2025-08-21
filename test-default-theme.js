// Simple test to verify default theme is dark mode
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the built HTML file
const htmlPath = path.join(__dirname, 'dist', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Check if the HTML contains the dark mode class
const hasDarkClass = html.includes('class="dark"');
const hasLightClass = html.includes('class="light"');

console.log('=== Default Theme Test Results ===');
console.log('HTML contains dark class:', hasDarkClass);
console.log('HTML contains light class:', hasLightClass);
console.log('=====================================');

if (hasDarkClass && !hasLightClass) {
    console.log('✅ SUCCESS: Default theme is set to dark mode');
    process.exit(0);
} else {
    console.log('❌ FAILED: Default theme is not dark mode');
    process.exit(1);
}