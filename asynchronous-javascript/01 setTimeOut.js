/* synchronous programming vs asynchronous programming

  • synchronous programming: ek hi order me one by one code execute hona..
  • JavaScript is a synchronous programming single threaded

  • setTimeOut(): it takes callback fn() and time(minimum time to hold execution)
  • clearTimeout(id): takes id of settimeout and terminates setTimeOut()
  • setTimeOut(), setTimeInterval(), clearTimeOut(), i.e., (Asynchronous programming) are features of browser not JavaScript.
*/

// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");


// setTimeout

console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("Script end");
