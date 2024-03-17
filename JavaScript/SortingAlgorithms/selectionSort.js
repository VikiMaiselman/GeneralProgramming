/** 
 * 
 * Selection sort is a simple sorting algorithm that 
 * repeatedly finds the min element from the unsorted part of the array 
 * && swaps it with the element at the beginning of the unsorted part
 * 
 * 
 * **/

import myArr from "./../data.js";

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

function selectionSort2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        
        // Find the index of the minimum element in the unsorted part
        for (let j = i + 1; j <  arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the minimum element with the first element of unsorted subarray
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    return arr;
}

// Example usage:
console.log("Original array:", myArr);
const sortedArray = selectionSort(myArr);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]

const sortedArray2 = selectionSort2(myArr);
console.log("Sorted array2:", sortedArray2);