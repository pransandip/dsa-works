// * O(1) space
export function sum(arr: Array<number>): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sum([1, 2, 3]));

// * O(n) space
export function double(arr: Array<number>): number[] {
  let newArr: number[] = [];
  for (let index = 0; index < arr.length; index++) {
    const element = 2 * arr[index];
    newArr.push(element);
  }
  return newArr;
}

console.log(double([1, 2, 3]));
