import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('stylish format', () => {
  const fileOneJSON = getFixturePath('file1.json');
  const fileTwoJSON = getFixturePath('file2.json');
  const fileOneYAML = getFixturePath('file1.yml');
  const fileTwoYAML = getFixturePath('file2.yml');
  const resultStylishFile = getFixturePath('stylish-result.txt');
  const contentOfResultStylishFile = readFileSync(resultStylishFile, 'utf8');
  expect(genDiff(fileOneJSON, fileTwoJSON)).toBe(contentOfResultStylishFile);
  expect(genDiff(fileOneYAML, fileTwoYAML)).toBe(contentOfResultStylishFile);
});

test('plain format', () => {
  const fileOneJSON = getFixturePath('file1.json');
  const fileTwoJSON = getFixturePath('file2.json');
  const fileOneYAML = getFixturePath('file1.yml');
  const fileTwoYAML = getFixturePath('file2.yml');
  const resultPlainFile = getFixturePath('plain-result.txt');
  const contentOfResultPlainFile = readFileSync(resultPlainFile, 'utf8');
  expect(genDiff(fileOneJSON, fileTwoJSON, 'plain')).toBe(contentOfResultPlainFile);
  expect(genDiff(fileOneYAML, fileTwoYAML, 'plain')).toBe(contentOfResultPlainFile);
});

test('json format', () => {
  const fileOneJSON = getFixturePath('file1.json');
  const fileTwoJSON = getFixturePath('file2.json');
  const fileOneYAML = getFixturePath('file1.yml');
  const fileTwoYAML = getFixturePath('file2.yml');
  const resultJSONFile = getFixturePath('json-result.txt');
  const contentOfResultJSONFile = readFileSync(resultJSONFile, 'utf8');
  expect(genDiff(fileOneJSON, fileTwoJSON, 'json')).toBe(contentOfResultJSONFile);
  expect(genDiff(fileOneYAML, fileTwoYAML, 'json')).toBe(contentOfResultJSONFile);
});
