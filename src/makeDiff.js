import _ from 'lodash';

const makeDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  const diff = keys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, value: data2[key], status: 'added' };
    }
    if (!_.has(data2, key)) {
      return { key, value: data1[key], status: 'removed' };
    }
    if (data1[key] === data2[key]) {
      return { key, value: data1[key], status: 'unchanged' }; // притом, что статусы ставятся правильно, не должны ли сюда попадать common и group1?
      // они ж равны... или оно так проверяет значения ключей, т.е. именно объекты?
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, value: makeDiff(data1[key], data2[key]), status: 'complex' };
    }
    return {
      key, value: { oldValue: data1[key], newValue: data2[key] }, status: 'update',
    };
  });
  return diff;
};
export default makeDiff;
