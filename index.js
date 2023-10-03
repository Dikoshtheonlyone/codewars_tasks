// Codewars tasks for 8 kyu

// 1 Stringy Strings
function stringy(size) {
  let result = "";
  for (let i = 1; i <= size; i++) {
    result += i % 2;
  }
  return result;
}

// 2 Bin to Decimal
function binToDec(num) {
  let dec = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[num.length - (i + 1)] === "1") {
      dec += 2 ** i;
    }
  }
  return dec;
}

// 3 Is the string uppercase?
String.prototype.isUpperCase = function () {
  return this.toString() === this.toUpperCase();
};

// 4 Remove duplicates from list
function distinct(a) {
  return [...new Set(a)];
}

// 5 Is your period late?
function periodIsLate(last, today, cycleLength) {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((today - last) / oneDay));
  return diffDays > cycleLength ? true : false;
}

// 6 Aspect Ratio Cropping - Part 1
function aspectRatio(x, y) {
  return [Math.ceil((y * 16) / 9), y];
}

// 7 Sum of positive
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// 8 Fake Binary
function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

// 9 Return Negative
function makeNegative(num) {
  return -Math.abs(num);
}

// Get Planet Name By ID
function getPlanetName(id) {
  switch (id) {
    case 1:
      return "Mercury";
    case 2:
      return "Venus";
    case 3:
      return "Earth";
    case 4:
      return "Mars";
    case 5:
      return "Jupiter";
    case 6:
      return "Saturn";
    case 7:
      return "Uranus";
    case 8:
      return "Neptune";
  }
}

// Convert a Number to a String!
function numberToString(num) {
  return String(num);
}

// Merging sorted integer arrays (without duplicates)
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
}
