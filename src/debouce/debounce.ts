// type F = (...p: any[]) => any;
// const util = require("util");
//
// function debounce(fn: F, t: number): F {
//   const list = [fn];
//   list.push(fn);
//   console.log(" list" + list.length);
//   return function (...args) {
//     let promises = new Promise((resolve, reject) => {
//       setTimeout(() => resolve(fn(...args)), t);
//     });
//     const delayed = setTimeout(() => fn(...args), 0);
//     setTimeout(() => {
//       clearTimeout(delayed);
//     }, t);
//   };
// }
//
// /**
//  * const log = debounce(console.log, 100);
//  * log('Hello'); // cancelled
//  * log('Hello'); // cancelled
//  * log('Hello'); // Logged at t=100ms
//  */
//
// const log = debounce(console.log, 100);
// log("Hello"); // cancelled
// console.log(util.inspect(log, { showHidden: true, depth: null }));
// log("Hello"); // cancelled
// console.log(util.inspect(log, { showHidden: true, depth: null }));
// log("Hello"); // Logged at t=100ms
// console.log(util.inspect(log, { showHidden: true, depth: null }));
//
// console.log(util.inspect(log, { showHidden: true, depth: null }));
