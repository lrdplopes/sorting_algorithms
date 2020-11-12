import { defaultCompare, swap, Compare } from "./util.js";

// Algoritmo abaixo não recomendado - Complexidade de O(n²);
export function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

export function createNonSortedArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

// let array = createNonSortedArray(5);
// console.log(array.join());
// array = bubbleSort(array);
// console.log(array.join());
