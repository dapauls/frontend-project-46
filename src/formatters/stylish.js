// import _ from 'lodash';

const getIndent = (depth) => {
  const quantityofSpaces = depth * 4 - 2;
  return ' '.repeat(quantityofSpaces);
};

const getSign = (sign, key, value) => `${sign} ${key}: ${value}\n`;

const getAnswer = (diff, depth) => {
  const result = diff.map(({ key, value, status }) => {
    let sign;
    switch (status) {
      case 'added':
        sign = '+';
        break;
      case 'removed':
        sign = '-';
        break;
      case 'unchanged':
        sign = ' ';
        break;
      case 'update':
        sign = `- ${key}: ${value}\n+${key}: ${value}`;
        break;
      case 'complex':
        sign = `${getIndent(depth)}${key}: ${getAnswer(value, depth + 1)}`;
        break;
      default:
        throw new Error();
    }
    return `${getIndent(depth)}${getSign(sign, key, value)}`;
  });
  return `{\n${result.join('')}}\n`;
};

const toStylish = (diff) => getAnswer(diff, 1);

export default toStylish;

// value тоже надо мэпать? это тоже массив