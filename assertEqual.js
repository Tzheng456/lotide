// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return (actual === expected) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : 
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("test", "test");
assertEqual("test", "nottest");
assertEqual(5, 5);
assertEqual(5, 6);