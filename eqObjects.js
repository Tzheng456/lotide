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

// let objA = { a: 1, b: 2, c: { d: 3, e: 4, f: { g: 123 } } };
// let objB = { a: 1, c: { f: { g: 123 }, d: 3, e: 4 }, b: 2 };
// let objC = { a: 1, b: 2, c: { d: 3, e: 4 }, f: 0 };
// let objD = { a: 1, b: 2, c: { d: 3, z: 4 } };

// console.log("test1:", eqObjects(objA, objB)); // => true
// console.log("test2:", eqObjects(objA, objC)); // => false, length of keys diff
// console.log("test3:", eqObjects(objA, objD)); // => false, undefined keyA in expected
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
