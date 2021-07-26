const eqObjects = (actual, expected) => {
  let result = false;
  //if the number of keys is the same
  if (Object.keys(actual).length === Object.keys(expected).length) {
    // loop through the keys of the actual object
    for (const keyA in actual) {
      // only proceed if keyA exists in both actual and expected (not undefined)
      if (expected[keyA] !== undefined) {
        // check if both key in actual object and key in expected are objects (DeMorgans Law: (!p ^ !q) === !(p v q) )
        if (!(checkIfObject(actual[keyA]) || checkIfObject(expected[keyA]))) {
          //not both actual[keyA] and expected[keyA] are objects, compare primitives
          if (actual[keyA] === expected[keyA]) {
            result = true;
          }
        } else {
          // if both keys are objects, do recursive call
          result = eqObjects(actual[keyA], expected[keyA]);
          // if the recursive call returns false, should break out of loop and return result (false)
          if (!result) {
            return result;
          }
        }
      } else {
        // a key in actual is undefined in expected; return false
        return false;
      }
    }
  } else {
    // objects are of different length; return false
    return false;
  }
  // final result
  return result;
};

// FUNCTION: checks if an element is an object
const checkIfObject = (arg) => {
  if (typeof arg === "object" && typeof arg !== null && !Array.isArray(arg)) {
    return true;
  }
  return false;
};
