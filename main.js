// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2) {
  // Your answer here
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(max(10, 70));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3) {
  // Your answer here
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  } else {
    return "You done screwed up fool!!!";
  }

}

console.log(maxOfThree(11, 12, 13));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
  // Your answer here
  if (char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U") {
    return true;
  } else {
    return false;
  }
}

console.log(isVowel("z"));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(num1, num2) {
  sum = num1 + num2;
  return sum;
}

console.log(sum(10, 7));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num1, num2, num3) {
  avg = (num1 + num2 + num3) / avg.length;
  return avg;
}

console.log(avg(3, 5, 10));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(p1) {
  // getLength = p1.length;
  // return getLength;
  return getLength = p1.length;
  //Above: just trying to see what can be simplified.

}

console.log(getLength("tacobell"));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(p1, p2) {
  if (p2 > p1) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan(3, 5));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(p1) {
  greet = "Hello, " + p1 + "!";
  return greet;
}

console.log(greet("Tom"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(p1, p2, p3, p4) {
  madlib = "Today I woke " + p1 + " to the " + p2 + " " + p3 + " beating down the " + p4 + "!";
  return madlib;
}

console.log(madlib("up", "large", "chicken", "door"));
// p1 = direction, p2 = size, p3 = barn animal, p4 = part of a house
