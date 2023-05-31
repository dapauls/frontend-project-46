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
        return 'this is incorrect format.'
    }
    
};