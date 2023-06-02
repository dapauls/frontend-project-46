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

    const dataOfFileOneArra = Object.entries(dataOfFileOne);
    //const dataOfFileTwoArra = Object.entries(dataOfFileTwo);

    const commonData = [];
    const commonKeysDiffrentValues = [];
    const justInData1 = [];
    const justInData2 = [];

    dataOfFileOneArra.forEach((property) => {
        if (_.has(dataOfFileTwo, property[0].property[1])) { // в двух файлах совпадают и ключи и значения
            commonData.push(property);
        } else if (_.has(dataOfFileTwo, property[0])) {  // ключи есть в обоих файлах, но их значения разные
            commonKeysDiffrentValues.push(property);
        } else {
            justInData1.push(property); // ключи есть только в первом файле
        }
    });  

    commonKeysDiffrentValues.forEach((property) => {
        if (_.has(dataOfFileTwo, property[0])) { // ключи есть только во втором файле
            justInData2.push(property)
        }
    });

    
};