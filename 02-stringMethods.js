// String Methods

//1. Access String Characters
//!  2 ways to access

const access1 = "Hello";
console.log(access1[1]);

const access2 = "World";
console.log(access2.charAt(0));

// strings are immutable, That means the characters of a string cannot be changed. For example,

let example1 = "Hello";
console.log(example1[0]);
example1[0] = "h";
console.log(example1);

// string Length

let greet = "hello";
console.log(greet, greet.length);

// JavaScript String Methods
// Here are the commonly used JavaScript String methods:

//!  Method       	           Description

// 1. charAt(index)	=>       returns the character at the specified index

// 2. concat()	=>           joins two or more strings

// 3. replace()	 =>          replaces a string with another string

// 4. split()	=>               converts the string to an array of strings

// 5. substr(start, length)	=>   returns a part of a string

// 6. substring(start,end)	=>     returns a part of a string

// 7. slice(start, end)	=>        returns a part of a string

// 8. toLowerCase()	=>          returns the passed string in lower case

// 9. toUpperCase()	=>          returns the passed string in upper case

// 10. trim()     	=>            removes whitespace from the strings

// 11. includes()	   =>         searches for a string and returns a boolean value

// 12. search()     =>	      searches for a string and returns a position of a match

let country = "germany";
let city = "berlin";

let method1 = country.charAt(0);
console.log(method1);

let method2 = `${country} is country and  ${city} is city`;
console.log(method2);

let method3 = country.concat("  and  ", city);
console.log(method3);

let method4 = country.replace("germany", "netherlands");
console.log(method4);

let method5 = country.split();
console.log(country, typeof country);
console.log(method5, typeof method5);

let method6 = country.substring(1, 3);
console.log(method6);

let method7 = country.slice(1, 3);
console.log(method7);

let method8 = city.toUpperCase();
console.log(method8);

// String function() converts data type in to strings

let num = 21;
console.log(num, typeof num);
let numToString = String(num);

let bool = true;
console.log(bool, typeof bool);
let boolToString = String(bool);

console.log(numToString, typeof numToString);
console.log(boolToString, typeof boolToString);
