import _ from 'lodash';

const getIndent = (depth) => {
  const quantityofSpaces = depth * 4 - 2;
  return ' '.repeat(quantityofSpaces);
};

const getSign = (sign, key, value) => `${sign}${key}: ${value}\n`;

const getCloseBracket = (depth) => `${' '.repeat(4).repeat(depth)}`;

const getBrackets = (depth, objContent) => `{\n${objContent}${getCloseBracket(depth)}}`;

const signs = { added: '+ ', removed: '- ', unchanged: '  ' };

const getRightValue = (value, depth) => {
  if (_.isObject(value)) {
    const arraOfEntries = Object.entries(value);
    const result = arraOfEntries.map(([key, val]) => `${getIndent(depth + 1)}${getSign(signs.unchanged, key, getRightValue(val, depth + 1))}`);
    return getBrackets(depth, result.join(''));
  }
  return value;
};

const getAnswer = (diff, depth) => {
  const result = diff.map(({ key, value, status }) => {
    if (status === 'update') {
      const firstStr = `${getIndent(depth)}${getSign(signs.removed, key, getRightValue(value.oldValue, depth))}`;
      const secondStr = `${getIndent(depth)}${getSign(signs.added, key, getRightValue(value.newValue, depth))}`;
      return `${firstStr}${secondStr}`;
    }
    if (status === 'object') {
      return `${getIndent(depth)}${getSign(signs.unchanged, key, getAnswer(value, depth + 1))}`;
    }
    return `${getIndent(depth)}${getSign(signs[status], key, getRightValue(value, depth))}`;
  });
  return getBrackets(depth - 1, result.join(''));
};

const toStylish = (diff) => getAnswer(diff, 1);

export default toStylish;
