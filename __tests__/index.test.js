import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('json files', () => {
  const fileOne = getFixturePath('file1.json');
  const fileTwo = getFixturePath('file2.json');
  const resultFile = getFixturePath('result.txt');
  const contentOfResultFile = readFileSync(resultFile, 'utf8');
  expect(genDiff(fileOne, fileTwo)).toBe(contentOfResultFile);
});
