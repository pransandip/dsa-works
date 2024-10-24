// version: 1
export function charCount(str: string): Object {
  // make object to return at the end
  const result: { [key: string]: number } = {};
  // loop over string, for each char
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      if (char !== " ") result[char] = 1;
    }
  }
  return result;
}
console.log(charCount("Sandy Roy"));

// version: 2
export function charCount2(str: string) {
  // make object to return at the end
  const result: { [key: string]: number } = {};
  // loop over string, for each char
  for (let char of str) {
    char = char.toLowerCase();
    // if alfa numeric then process
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}
console.log(charCount2("s@ndy 1233!"));

// version: 3
export function charCount3(str: string) {
  // make object to return at the end
  const result: { [key: string]: number } = {};
  // loop over string, for each char
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}
console.log(charCount3("sandy 1233!"));

/* ---- Example solution ----- */
//post-increment
let a = 1;
console.log("a >", a++);
console.log("a >", a);

// pre-increment like a = a + 1
let b = 1;
console.log("b >", ++b);
console.log("b >", b);

// Returns the Unicode value of the character at the specified location.
console.log("love".charCodeAt(1));
console.log("o".charCodeAt(0));
/* ----------- END ------------- */

export function isAlphaNumeric(char: string) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // Numeric (0-9)
    !(code > 64 && code < 91) && // Upper Alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

// version: 4
export function charCount4(str: string) {
  // make object to return at the end
  const result: { [key: string]: number } = {};
  // loop over string, for each char
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}
console.log(charCount4("sandy 32100!."));
