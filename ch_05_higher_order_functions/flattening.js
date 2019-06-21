// Use the reduce method in combination with the concat method
// to “flatten” an array of arrays into a single array that has
// all the elements of the original arrays.

// let arrays = [[1, 2, 3], [4, 5], [6]];
// // Your code here.
// // → [1, 2, 3, 4, 5, 6]


// function to take an array of arrays and flatten it

const flatten = (arrayOfArrays) => {
    return arrayOfArrays.reduce((a, b) => a.concat(b));
};
