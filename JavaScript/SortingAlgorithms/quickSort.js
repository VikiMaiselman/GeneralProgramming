import { myArr } from "../data";

function quickSort(arr) {
  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];

  if (arr.length === 0) return arr;

  arr.forEach((elem) => {
    if (elem > pivot) rightArr.push(elem);
    if (elem < pivot) leftArr.push(elem);
  });

  return quickSort(leftArr).concat(pivot).concat(quickSort(rightArr));
}

console.log(quickSort(myArr));
