// Analogous to the some method, arrays also have an every method.
// This one returns true when the given function returns true for every element in the array.
// In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as parameters.
// Write two versions, one using a loop and one using the some method.

function everyLoopVersion(arr, pred) {
    for (let elem of arr) {
	if (! pred(elem)){
	    return false;
	}
    }

    return true;
}


function everySomeVersion(arr, pred) {
    if (arr.length == 0) {
	return true;
    }

    if (pred(arr[0])){
	return everySomeVersion(arr.slice(1), pred);
    } else {
	return false;
    }
}
