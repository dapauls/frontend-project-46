import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let contentOfResultFile;
let resultFile;
beforeEach(() => {
  resultFile = getFixturePath('result.txt');
  contentOfResultFile = readFileSync(resultFile, 'utf8');
});

test('json files', () => {
  const fileOne = getFixturePath('file1.json');
  const fileTwo = getFixturePath('file2.json');
  expect(genDiff(fileOne, fileTwo)).toBe(contentOfResultFile);
});

test('yaml files', () => {
  const fileOne = getFixturePath('file1.yml');
  const fileTwo = getFixturePath('file2.yml');
  expect(genDiff(fileOne, fileTwo)).toBe(contentOfResultFile);
});
