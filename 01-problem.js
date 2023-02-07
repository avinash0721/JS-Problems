// source: https://www.fullstack.cafe/blog/javascript-code-interview-questions

//? 1. Explain what a callback function is and provide a simple example

// Answer :  A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed.

// Below is an example of a simple callback function that logs to the console after some operations have been completed.

const modifyArray = (arr, callback) => {
  arr.push(100);
  callback();
};
let arr = [1, 2, 3, 4];

modifyArray(arr, function () {
  console.log("array changed", arr);
});
