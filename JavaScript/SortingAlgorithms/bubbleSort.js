/** 
 * 
 * Bubble sort is a simple sorting algorithm that repeatedly steps through the list, 
 * compares adjacent elements, and swaps them if they are in the wrong order. 
 * 
 * The pass through the list is repeated until the list is sorted.
 * 
 * **/

import myArr from "./../data.js";

function bubbleSort(arr) {
  const n = arr.length;
  let swapped = true;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements if they are in the wrong order
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Example usage:
console.log("Original array:", myArr);
const sortedArray = bubbleSort(myArr);
console.log("Sorted array:", sortedArray);
