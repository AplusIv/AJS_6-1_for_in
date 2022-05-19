export default function orderByProps(obj, sortArray) {
  const objCopy = { ...obj };
  const sortedBySorter = [];
  const rest = [];

  for (const sorter of sortArray) {
    for (const prop in objCopy) {
      if (Object.prototype.hasOwnProperty.call(objCopy, prop)) {
        if (prop === sorter) {
          sortedBySorter.push({ key: prop, value: obj[prop] });
          delete objCopy[prop];
        }
      }
    }
  }

  for (const prop in objCopy) {
    if (objCopy[prop]) {
      rest.push({ key: prop, value: obj[prop] });
    }
  }

  const sortedRest = rest.sort((a, b) => {
    /* if (a.key < b.key) {
      return -1; // если первое значение меньше второго
    }
    if (a.key > b.key) {
      return 1; // если первое значение больше второго
    }
    return 0; // если значения равны */
    if (a.key < b.key) {
      return -1; // если первое значение меньше второго
    }
    return 1; // если первое значение больше второго
  });

  return [...sortedBySorter, ...sortedRest];
}
