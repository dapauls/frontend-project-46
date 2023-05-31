import { readFileSync } from 'fs';
import path from 'path';
import lodash from 'lodash';

export default (filepath1, filepath2, optionsFormat) => {
    const str = `hi, this is ${filepath1} and ${filepath2} with ${optionsFormat}`;
    return str;
};