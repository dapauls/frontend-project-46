import _ from 'lodash';

const toStylish = (diff) => {
  const result = diff.map((obj) => {
    if (obj.status === 'plus') {
      return `+ ${obj.key}: ${obj.value}\n`;
    }
    if (obj.status === 'minus') {
      return `- ${obj.key}: ${obj.value}\n`;
    }
    if (obj.status === 'unchanged') {
      return `${obj.key}: ${obj.value}\n`;
    }
    if (obj.status === 'object') { // попадает верно
      return `this is obj.value ${obj.value}`;
    }
    return `- ${obj.key}: ${obj.value.oldValue} \n + ${obj.key}: ${obj.value.newValue}\n`;
  });
  return result.join('\n');
};

export default toStylish;

// value тоже надо мэпать? это тоже массив
