// O(n)
export function addUpTo(n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
console.log(addUpTo(10_000));
let t2 = performance.now();
console.log(`Time Elapsed ${(t2 - t1) / 1000} Seconds`);
