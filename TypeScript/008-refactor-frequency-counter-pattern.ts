// check second array is same as first
//  array but square

// Time Complexity - O(n)
export function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1: { [key: string]: number } = {};
  let frequencyCounter2: { [key: string]: number } = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1); // check frequency of num
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(parseInt(key) ** 2 in frequencyCounter2)) return false; // check keys
    if (frequencyCounter2[parseInt(key) ** 2] !== frequencyCounter1[key]) {
      // check values
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 4, 1, 4]));
