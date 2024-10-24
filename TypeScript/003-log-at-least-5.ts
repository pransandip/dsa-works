// * O(n) linear runtime
export const logAtLeast5 = (n: number) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};
// logAtLeast5(1);

// * O(1) constant runtime
export const logAtMost5 = (n: number) => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};
logAtMost5(10);
// logAtMost5(-1);
