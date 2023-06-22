import _ from 'lodash';

const getRightValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const toPlain = (diff, parents = []) => {
  const diffWithoutUnchangedStatus = diff.filter(({ status }) => status !== 'unchanged');
  const result = diffWithoutUnchangedStatus.map(({ key, status, value }) => {
    const newParents = parents.concat(key);
    const newParentsStr = newParents.join('.');
    switch (status) {
      case 'update':
        return `Property '${newParentsStr}' was updated. From ${getRightValue(value.oldValue)} to ${getRightValue(value.newValue)}`;
      case 'removed':
        return `Property '${newParentsStr}' was removed`;
      case 'added':
        return `Property '${newParentsStr}' was added with value: ${getRightValue(value)}`;
      case 'object':
        return toPlain(value, newParents);
      default:
        return 'Error!';
    }
  });
  return result.join('\n');
};

export default toPlain;
