//* O(n) space
export let arr: Array<number> = [1, 2, 3];
console.log(Array.from(arr, (it) => it * 2));

/*---- Array.form() ----*/
console.log(Array.from("sandy"));
console.log(Array.from({ length: 4 }, (it, i) => i * 2));
console.log(Array.from("sandy", (item, index) => `${item}:${index}`));

// Set
let s = new Set([1, 2, 2]);
console.log(s);
console.log(Array.from(s));

//print unique items
console.log(Array.from(new Set(["love", "money", "love"])));
