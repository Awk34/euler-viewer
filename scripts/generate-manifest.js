import { readdirSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

// In ESM, __dirname is not available by default. We can get the project root
// directory since the script is run from there via npm.
const projectRoot = resolve();

// Paths to source directories
const problemsDir = join(projectRoot, 'euler-scraper/scraped');
const jsSolutionsDir = join(projectRoot, 'src/solutions/ts');
const rustSolutionsDir = join(projectRoot, 'src/solutions/rs/src/problems');
const javaSolutionsDir = join(projectRoot, 'src/solutions/java/problems');
const paperSolutionsDir = join(projectRoot, 'src/solutions/paper');

// Path where the output JSON manifest will be saved (inside your assets folder)
const manifestPath = join(projectRoot, 'public/problems-manifest.json');

/**
 * Extracts unique, sorted numbers from a list of filenames based on a regex.
 * @param {string[]} files - The list of filenames.
 * @param {RegExp} regex - A regex with a capturing group for the number.
 * @returns {number[]} - A sorted array of unique numbers.
 */
const extractSortedNumbers = (files, regex) => {
  const numbers = new Set();
  for (const file of files) {
    const match = file.match(regex);
    if (match && match[1]) {
      const num = parseInt(match[1], 10);
      if (!isNaN(num)) {
        numbers.add(num);
      }
    }
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

try {
  const problemsDirs = readdirSync(problemsDir);
  const jsSolutionsFiles = readdirSync(jsSolutionsDir);
  const rustSolutionsFiles = readdirSync(rustSolutionsDir);
  const javaSolutionsFiles = readdirSync(javaSolutionsDir);
  const paperSolutionsFiles = readdirSync(paperSolutionsDir);

  const problemFiles = problemsDirs.map(name => parseInt(name, 10)).filter(num => !isNaN(num)).sort((a, b) => a - b);

  const tsSolutions = extractSortedNumbers(jsSolutionsFiles, /^(\d+)\.(js|ts)$/);
  const rustSolutions = extractSortedNumbers(rustSolutionsFiles, /^problem_(\d+)\.rs$/);
  const javaSolutions = extractSortedNumbers(javaSolutionsFiles, /^euler(\d+)\.java$/);
  const paperSolutions = extractSortedNumbers(paperSolutionsFiles, /^(\d+)\.md$/);

  const manifest = {
    problems: problemFiles,
    tsSolutions,
    rustSolutions,
    javaSolutions,
    paperSolutions,
  };

  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ Successfully generated problem manifest at: ${manifestPath}`);
} catch (error) {
  console.error('❌ Error generating problem manifest:', error);
  process.exit(1); // Exit with an error code
}
