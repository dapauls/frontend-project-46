import _ from 'lodash';

const getRightValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return value;
};

const toPlain = (diff) => {
  const diffWithoutUnchangedStatus = diff.filter(({ status }) => status !== 'unchanged');
  const result = diffWithoutUnchangedStatus.map(({ key, status, value }) => {
    let string;
    switch (status) {
      case 'update':
        string = `Property '${key}' was updated. From ${getRightValue(value.oldValue)} to ${getRightValue(value.NewValue)}\n`;
        break;
      case 'removed':
        string = `Property '${key}' was removed\n`;
        break;
      case 'added':
        string = `Property '${key}' was added with value: ${getRightValue(value)}\n`;
        break;
      case 'object':
        return toPlain(value);
      default:
        string = 'Error!\n';
    }
    return string;
  });
  return result.join('');
};

export default toPlain;
