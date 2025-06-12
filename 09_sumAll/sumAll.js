const sumAll = function(a,b) {
    return Array.from({length: b + 1 - a}, (x, i) => i + a)
    .reduce((acc, curr) => acc + curr, 0);
};

// Do not edit below this line
module.exports = sumAll;
