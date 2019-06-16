// The == operator compares objects by identity.
// But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true
// only if they are the same value or are objects with the same properties,
// where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that)
// or have their properties compared, you can use the typeof operator.
// If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.


const deepEqual = (obj1, obj2) => {

    if (obj1 === obj2) {
	return true;
    }

    if (obj1 == null || obj2 == null || typeof obj1 != "object" || typeof obj2 != "object") {
	return false;
    }

    let keysobj1 = Object.keys(obj1);
    let keysobj2 = Object.keys(obj2);

    if (keysobj1.length != keysobj2.length) {
	return false;
    }

    for (let key of keysobj1){
	if(!keysobj2.includes(key)) {
	    return false;
	}

	if (!deepEqual(obj1[key], obj2[key])){
	    return false;
	}
    }

    return true;
    
};

