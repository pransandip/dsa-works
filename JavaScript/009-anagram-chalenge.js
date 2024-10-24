function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of first) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of second) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key of Object.keys(frequencyCounter1)) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }
  return true;
}

console.log(validAnagram("cinema", "iceman"));
