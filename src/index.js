import { readFileSync } from 'fs';
import path from 'path';
import lodash from 'lodash';

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

    const filepath1Parse = JSON.parse(data1);
    const filepath2Parse = JSON.parse(data2);

    
};