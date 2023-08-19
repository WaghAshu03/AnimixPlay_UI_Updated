const filterShowList = (NewArr, PrevArr) => {
  const filteredArray = PrevArr.filter((value) => {
    return !NewArr.includes(value);
  });
  return filteredArray;
};

const removeValues = (arr1, arr2) => {
  const filteredArray = arr1.filter((value) => {
    return !arr2.includes(value);
  });
  return filteredArray;
};

// Example usage:
const prevArr = [1, 2, 3, 4, 5];
const newArr = [3, 4, 6, 7, 5];

const result2 = removeValues(prevArr, filterShowList(newArr, prevArr));

result3 = [...new Set([...newArr, ...result2])];

console.log(result3); // [1, 2, 5]
