import { readFileSync } from 'fs';
import path from 'path';
import makeDiff from './makeDiff.js';
import parse from './parsers.js';
import getRigthFormatResult from './formatters/index.js';

const getFilePath = (file) => path.resolve(process.cwd(), file);
const readFile = (filePath) => readFileSync(filePath, 'utf8');
const getFileFormat = (file) => path.extname(file).slice(1);

const typeOf = (fp) => {
  const type = getFileFormat(fp);
  if (type === 'json' || type === 'yml' || type === 'yaml') {
    return true;
  }
  return false;
};

export default (filepath1, filepath2, format = 'stylish') => {
  if (typeOf(filepath1) === false || typeOf(filepath2) === false) {
    throw new Error('Incorrect format.');
  }

  const path1 = getFilePath(filepath1);
  const data1 = parse(readFile(path1), getFileFormat(filepath1));

  const path2 = getFilePath(filepath2);
  const data2 = parse(readFile(path2), getFileFormat(filepath2));

  const diff = makeDiff(data1, data2);
  return getRigthFormatResult(diff, format);
};
