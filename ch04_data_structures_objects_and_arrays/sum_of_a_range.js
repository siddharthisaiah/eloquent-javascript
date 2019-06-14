/*
Write a range function that takes two arguments, start and end,
and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
    Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.
If no step is given, the elements go up by increments of one, corresponding to the old behavior.
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/


const range = (start, end, step=1) => {
    let res = [];

    if (step < 0) {
	for (let i = start; i >= end; i -= Math.abs(step)) {
	    res.push(i);
	}
    } else {
	for (let i = start; i <= end; i += step) {
	    res.push(i);
	}
    }

    return res;
};


const sum = (an) => {
    let result = 0;

    for (let n of an) {
	result += n;
    }

    return result;
};
