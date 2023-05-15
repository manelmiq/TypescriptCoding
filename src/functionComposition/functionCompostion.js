/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, elem) => {
            console.log(acc);
            return elem(acc)
        }, x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const fn = compose([x => x + 1, x => 3 * x, x => 4 + x])
const fn2 = compose([x => x + 1, x => x * x, x => 2 * x]);
// fn(4) // 9
// console.log(fn(4))
console.log(fn2(4))
