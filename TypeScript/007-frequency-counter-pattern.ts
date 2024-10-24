// quadratic relationship O(n^2)
// It is not a frequency counter pattern, its a naive approach
export function same(
  arr1: Array<number> = [],
  arr2: Array<number> = []
): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    // console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [9, 1, 4]));
