/** Creating a memoize function that remembers previous inputs and stores them in cache so that itwon’t have to compute the same inputs more than once. The function will take an unspecifiednumber of integer inputs and a reducer method. **/

//function to do caching
function memorize(fn){       
    const cache = new Map();
    return function (...args){
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key)
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}

//addition function
function add(a, b){
    return a + b;
}

//assesing time complexity
function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

//memorize(add) returns a function and creates the closure
const addM = memorize(add);

//in second computation with same value time will be reduced
time(() => addM(3, 5));
time(() => addM(3, 5));
time(() => addM(3, 5));