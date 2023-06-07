import yaml from 'js-yaml';

export default (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }
  return yaml.load(data);
};
