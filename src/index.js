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
        return 'incorrect format'
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
        const filesInfo = { 'file1': 'no', 'file2': 'no' };
        if (_.has(dataOfFileOne, key)) {
            filesInfo['file1'] = 'yes';
        }
        if (_.has(dataOfFileTwo, key)) {
            filesInfo['file2'] = 'yes';
        }
        objOfKeysInfo[key] = filesInfo; 
    });
    
    // получаю инфу о том, находится ли ключ внутри первого или второго объекта
    // следующим шагом должна сравнить значения ключей, которые есть и там, и там - пишу программу, которая присваивает ключу статус "минус"
    // или "плюс", если он есть только в одном файле или статусы "изменено" (если значения отличаются) или "неизменено" (если значение не изменилось)
    // след. шаг - построение строки на основании данных и засовывание этой строки в результатирующий объект
    return objOfKeysInfo

};