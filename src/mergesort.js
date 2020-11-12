import { defaultCompare, swap, Compare } from "./util.js";
import { createNonSortedArray } from "./bubbleSort.js";

// o "mergeSort" tem um bom desempenho - Apresentando complexidade O(n log n);
function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle), compareFn);
    const right = mergeSort(array.slice(middle, length), compareFn);
    array = merge(left, right, compareFn);
  }

  return array;
}

function merge(left, right, compareFn) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === Compare.LESS_THAN
        ? left[i++]
        : right[j++]
    );
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

// let array = createNonSortedArray(20);
// console.log(array.join());
// array = mergeSort(array);
// console.log(array.join());
