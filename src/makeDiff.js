import _ from 'lodash';

const makeDiff = (objOne, objTwo) => {
  const keys = _.sortBy(_.union(_.keys(objOne), _.keys(objTwo)));
  const diff = keys.map((key) => {
    if (_.isObject(objOne[key]) && _.isObject(objTwo[key])) {
      return { key, value: makeDiff(objOne[key], objTwo[key]) };
    }
    if (!_.has(objOne, key)) {
      return { key, value: objTwo[key], status: 'plus' };
    }
    if (!_.has(objTwo, key)) {
      return { key, value: objOne[key], status: 'minus' };
    }
    if (objOne[key] === objTwo[key]) {
      return { key, value: objOne[key], status: 'unchanged' };
    }
    return { key, value: { oldValue: objOne[key], newValue: objTwo[key] }, status: 'changed' };
  });
  return diff;
};

export default makeDiff;
