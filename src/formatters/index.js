import toStylish from './stylish.js';
import toPlain from './plain.js';
import toJSON from './JSON.js';

export default (diff, format) => {
  let result;
  switch (format) {
    case 'stylish':
      result = toStylish(diff);
      break;
    case 'plain':
      result = toPlain(diff);
      break;
    case 'json':
      result = toJSON(diff);
      break;
    default:
      result = 'error';
  }
  return result;
};
