/**
 *
 * Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.
 *
 * It iterates through the input array, removing one element at a time and inserting it into the correct position
 * in the sorted part of the array.
 *
 * **/
import myArr from "../data.js";

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;

    // Move elements of arr[0..i-1], that are greater than current,
    // to one position ahead of their current position
    while (j - 1 >= 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}

// Example usage:
console.log("Original array:", myArr);
const sortedArray = insertionSort(myArr);
console.log("Sorted array:", sortedArray);
