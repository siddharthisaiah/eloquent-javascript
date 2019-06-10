// Here’s another way to define whether a positive whole number is even or odd:
// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description.

const isEven = (n) => {

    if(Math.abs(n) > 1) {
	return isEven(Math.abs(n) - 2);
    }

    return Math.abs(n) == 0;
};
