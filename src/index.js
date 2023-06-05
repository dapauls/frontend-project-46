import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';

export default (filepath1, filepath2) => {
  const typeOf = (fp) => {
    const arra = fp.split('.');
    const result = arra[arra.length - 1];
    return result;
  };
  if (typeOf(filepath1) !== 'json' || typeOf(filepath2) !== 'json') {
    return 'incorrect format';
  }
  const getFilePath = (file) => path.resolve(process.cwd(), file);
  const readFile = (filePath) => readFileSync(filePath, 'utf8');

  const path1 = getFilePath(filepath1);
  const data1 = readFile(path1);

  const path2 = getFilePath(filepath2);
  const data2 = readFile(path2);

  const dataOfFileOne = JSON.parse(data1);
  const dataOfFileTwo = JSON.parse(data2);

  const keysOfFileOne = _.keys(dataOfFileOne);
  const keysOfFileTwo = _.keys(dataOfFileTwo);
  const arraOfKeys = _.union(keysOfFileOne, keysOfFileTwo);
  const sortedArraOfKeys = _.sortBy(arraOfKeys);

  const objOfKeysInfo = {};
  sortedArraOfKeys.forEach((key) => {
    const filesInfo = { 'file1': false, 'file2': false };
    if (_.has(dataOfFileOne, key)) {
      filesInfo['file1'] = true;
    }
    if (_.has(dataOfFileTwo, key)) {
      filesInfo['file2'] = true;
    }
    objOfKeysInfo[key] = filesInfo;
  });

  const keysState = {};
  sortedArraOfKeys.forEach((key) => {
    const keysInfo = { 'status': null };
    if (objOfKeysInfo[key]['file1'] === true && objOfKeysInfo[key]['file2'] === true) { // есть в обоих файлах
      if (dataOfFileOne[key] === dataOfFileTwo[key]) {
        keysInfo['status'] = 'unchanged';
      } else {
        keysInfo['status'] = 'changed';
      }
    } else if (objOfKeysInfo[key]['file1'] === true) { // только в первом
      keysInfo['status'] = 'minus';
    } else if (objOfKeysInfo[key]['file2'] === true) { // только во втором
      keysInfo['status'] = 'plus';
    }
    keysState[key] = keysInfo;
  });

  const result = sortedArraOfKeys.map((key) => {
    let string;
    switch (keysState[key]['status']) {
      case 'minus':
        string = `  - ${key}: ${dataOfFileOne[key]}`;
        break;
      case 'plus':
        string = `  + ${key}: ${dataOfFileTwo[key]}`;
        break;
      case 'unchanged':
        string = `    ${key}: ${dataOfFileOne[key]}`;
        break;
      case 'changed':
        string = `  - ${key}: ${dataOfFileOne[key]} \n  + ${key}: ${dataOfFileTwo[key]}`;
        break;
      default:
        string = null;
    }
    return string;
  });
  return `{\n${result.join('\n')}\n}`;
  // не уверена, что пути правильно работают
};
