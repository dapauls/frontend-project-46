import _ from 'lodash';

const getRightValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const toPlain = (diff, parents = []) => {
  const diffWithoutUnchangedStatus = diff.filter(({ status }) => status !== 'unchanged');
  const result = diffWithoutUnchangedStatus.map(({ key, status, value }) => {
    const newParents = parents.concat(key);
    const newParentsStr = newParents.join('.');
    let string;
    switch (status) {
      case 'update':
        string = `Property '${newParentsStr}' was updated. From ${getRightValue(value.oldValue)} to ${getRightValue(value.newValue)}`;
        break;
      case 'removed':
        string = `Property '${newParentsStr}' was removed`;
        break;
      case 'added':
        string = `Property '${newParentsStr}' was added with value: ${getRightValue(value)}`;
        break;
      case 'object':
        return toPlain(value, newParents);
      default:
        string = 'Error!';
    }
    return string;
  });
  return result.join('\n');
};

export default toPlain;
