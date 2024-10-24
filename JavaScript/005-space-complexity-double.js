//* O(n) space
function double(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
console.log(double([1, 2, 3]));

//* O(n) space
const arr = [1, 2, 3];
console.log(Array.from(arr, (it) => it * 2));

/*---- Array.form() ----*/
console.log(Array.from("sandy"));

let s = new Set([1, 2, 2]);
console.log(s);
console.log(Array.from(s));

console.log(Array.from({ length: 4 }, (it, i) => i * 2));
