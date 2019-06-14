/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, 
which variant do you expect to be useful in more situations? Which one runs faster?

*/

const reverseArray = (ar) => {
    let ra = []

    for (let elem of ar) {
	ra.unshift(elem);
    }

    return ra;
};

const reverseArrayInPlace = (ar) => {
    for (let i = 0; i <= Math.floor(ar.length / 2); i++) {
	let first = ar[i];
	ar[i] = ar[ar.length - i - 1];
	ar[ar.length -i -1] = first
    }

    return ar;
};
