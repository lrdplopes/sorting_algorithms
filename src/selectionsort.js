import { defaultCompare, swap, Compare } from "./util.js";
import { createNonSortedArray } from "./bubbleSort.js";

// Algoritmo abaixo não recomendado - Complexidade de O(n²);
function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexMin;

  for (let i = 0; i < length - 1; i++) {
    indexMin = i;

    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }

    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }

  return array;
}

// let array = createNonSortedArray(5);
// console.log(array.join());
// array = selectionSort(array);
// console.log(array.join());
