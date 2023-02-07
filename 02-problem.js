//? 2. Given a string, reverse each word in the sentence

// For example "Hello" to "olleH"

const reverseString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
    console.log(newString);
  }

  return newString;
};

const greet = "Hello";
const string = reverseString(greet);
console.log(string);

console.log("This is 2 Example");
//example2

const reverseString2 = (str) => {
  console.log(str);
  // converting string to Array
  const arrayStrings = str.split("");
  console.log(arrayStrings);

  // reverse the new array to new variable
  const reverseArray = arrayStrings.reverse();
  console.log(reverseArray);

  //joining all elements into a string

  const joinArray = reverseArray.join("");
  console.log(joinArray);

  // returning reversed string
  return joinArray;
};

const greet1 = "world";
const string1 = reverseString2(greet1);
console.log(string1);
