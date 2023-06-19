import toStylish from './stylish.js';
import toPlain from './plain.js';
import toJSON from './JSON.js';

export default (diff, format) => {
  switch (format) {
    case 'stylish':
      return toStylish(diff);
    case 'plain':
      return toPlain(diff);
    case 'json':
      return toJSON(diff);
    default:
      return 'error';
  }
};
