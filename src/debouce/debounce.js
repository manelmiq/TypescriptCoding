/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timerId;
    return function (...args) {if (timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args)
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

const log = debounce((n) => setTimeout(() => {
    console.log('Hello' + n)
}, n), 50);
log(40); // cancelled
log(60); // Logged at t=100ms
log(30); // cancelled

t = 50
calls = [
    {"t": 50, inputs: [1]},
    {"t": 75, inputs: [2]}
]
