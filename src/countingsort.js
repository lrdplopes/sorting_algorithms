import { defaultCompare, swap, Compare } from "./util.js";
import { createNonSortedArray } from "./bubbleSort.js";
import { findMaxValue, findMinValue } from "./maxsearch.js";

function countingSort(array) {
  if (array.length < 2) {
    return array;
  }

  const maxValue = findMaxValue(array);
  const counts = new Array(maxValue + 1);
  array.forEach((element) => {
    if (!counts[element]) {
      counts[element] = 0;
    }

    counts[element]++;
  });

  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });

  return array;
}

// let array = createNonSortedArray(30);
// console.log(array.join());
// array = countingSort(array);
// console.log(array.join());
