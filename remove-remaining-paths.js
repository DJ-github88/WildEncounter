// This is a temporary script to help us remove the remaining path references from class-data.js

const pathsToRemove = [
  { line: 245, path: "path: 'hexer'," },
  { line: 260, path: "path: 'hexer'," },
  { line: 277, path: "path: 'reaver'," },
  { line: 292, path: "path: 'reaver'," },
  { line: 307, path: "path: 'reaver'," },
  { line: 324, path: "path: 'mercenary'," },
  { line: 339, path: "path: 'mercenary'," },
  { line: 354, path: "path: 'mercenary'," },
  { line: 371, path: "path: 'sentinel'," },
  { line: 386, path: "path: 'sentinel'," },
  { line: 401, path: "path: 'sentinel'," }
];

// Print the lines to remove
pathsToRemove.forEach(item => {
  console.log(`Remove line ${item.line}: ${item.path}`);
});
