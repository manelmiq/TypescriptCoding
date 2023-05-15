type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn, t) {
  return async function (...args) {
    let timerId;
    const timeoutPromise = new Promise((_, reject) => {
      timerId = setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });
    try {
      const resultPromise = fn(...args);
      return await Promise.race([resultPromise, timeoutPromise]);
    } finally {
      clearTimeout(timerId);
    }
  };
}
const fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
}

const limited = timeLimit(fn(3), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

console.time('fetchData'); // start the timer
limited(90).then(console.log) // "Time Limit Exceeded" at t=100ms
console.timeEnd('fetchData');


