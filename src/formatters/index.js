import toStylish from './stylish.js';
/* import toPlain from './plain.js';
import toJSON from './json.js'; */

export default (diff, format) => {
  let result;
  switch (format) {
    case 'stylish':
      result = toStylish(diff);
      break;
    default:
      result = 'error';
  }
  return result;
};
