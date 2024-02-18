import myArr from "./../data.js";

function mergeSort(arr) {
  // Base case: If the array has one or fewer elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Recursively divide each half, until each individual arr length gets 1
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from the left and right arrays and merge them into the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from the left and right arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
console.log("Original array:", myArr);
const sortedArray = mergeSort(myArr);
console.log("Sorted array:", sortedArray);
