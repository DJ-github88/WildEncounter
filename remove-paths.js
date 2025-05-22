// This is a temporary script to help us remove path references from class-data.js
// We'll run this script and then use the output to update class-data.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the class-data.js file
const filePath = path.join(__dirname, 'src', 'data', 'class-data.js');
let content = fs.readFileSync(filePath, 'utf8');

// Remove path references
content = content.replace(/path: '[^']+',\n/g, '');

// Remove path comments
content = content.replace(/\/\/ [A-Za-z]+ Path\n/g, '');

// Write the updated content to a new file
fs.writeFileSync('updated-class-data.js', content);

console.log('Path references removed successfully!');
