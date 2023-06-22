import yaml from 'js-yaml';

const typeOf = (format) => {
  if (format === 'json' || format === 'yml' || format === 'yaml') {
    return true;
  }
  return false;
};

export default (data, format) => {
  if (typeOf(format) === false) {
    throw new Error('Incorrect format.');
  }
  if (format === 'json') {
    return JSON.parse(data);
  }
  return yaml.load(data);
};
