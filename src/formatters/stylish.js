// import _ from 'lodash';

const toStylish = (diff) => {
  const result = diff.map(({ key, value, status }) => {
    let str;
    switch (status) {
      case 'added':
        str = `+ ${key}: ${value}\n`;
        break;
      case 'removed':
        str = `- ${key}: ${value}\n`;
        break;
      case 'unchanged':
        str = `  ${key}: ${value}\n`;
        break;
      case 'update':
        str = `- ${key}: ${value.oldValue}\n+ ${key}: ${value.newValue}\n`;
        break;
      case 'complex':
        str = `${key}: ${toStylish(value)}`;
        break;
      default:
        str = 'error';
    }
    return str;
  });
  return `{\n${result.join('')}}\n`;
};

export default toStylish;

// value тоже надо мэпать? это тоже массив
