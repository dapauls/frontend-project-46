import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let resultStylishFile;
let resultPlainFile;
let contentOfResultStylishFile;
let contentOfResultPlainFile;
let fileOneYAML;
let fileTwoYAML;
let fileOneJSON;
let fileTwoJSON;

beforeEach(() => {
  fileOneJSON = getFixturePath('file1.json');
  fileTwoJSON = getFixturePath('file2.json');
  fileOneYAML = getFixturePath('file1.yml');
  fileTwoYAML = getFixturePath('file2.yml');
  resultStylishFile = getFixturePath('stylish-result.txt');
  contentOfResultStylishFile = readFileSync(resultStylishFile, 'utf8');
  resultPlainFile = getFixturePath('plain-result.txt');
  contentOfResultPlainFile = readFileSync(resultPlainFile, 'utf8');
});

test('json files with stylish format', () => expect(genDiff(fileOneJSON, fileTwoJSON)).toBe(contentOfResultStylishFile));

test('yaml files with stylish format', () => expect(genDiff(fileOneYAML, fileTwoYAML)).toBe(contentOfResultStylishFile));

test('json files with plain format', () => expect(genDiff(fileOneJSON, fileTwoJSON, 'plain')).toBe(contentOfResultPlainFile));

test('yaml files with plain format', () => expect(genDiff(fileOneYAML, fileTwoYAML, 'plain')).toBe(contentOfResultPlainFile));
