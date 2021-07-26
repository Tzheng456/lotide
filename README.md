# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tzheng/lotide`

**Require it:**

`const _ = require('@tzheng/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: assertion function to check if two arrays are equal
* `assertEqual(actual, expected)`: assertion function to check if two primitives are equal
* `assertObjectsEqual(actual, expected)`: assertion function to check if two objects are equal
* `countLetters(string)`: returns a count of the number of letters in input
* `countOnly(allItems, itemsToCount)`: maps a count of each unique element of itemsToCount in allItems
* `eqArrays(arr1, arr2)`: checks if two arrays are equal (deep check to be implemented)
* `eqObjects(actual, expected)`: deep checks if two objects are equal
* `findKey(object, callback)`: returns the key of the first object with key in object else returns undefined
* `findKeyByValue(object, value)`: returns the key of the first object with value in object else returns undefined
* `flatten(arr)`: returns a 1-dimentional array of flattened n-dimentional arrays of elements 
* `head(arr)`: returns the first element in an array
* `letterPositions(sentence)`: returns a map of letters (key) and array of positions that letter appears in sentence (value)
* `map(array, callback)`: returns a new array whose elements consist of each element of the original array after callback function
* `middle(array)`: returns an array of the middle element(s) in an array
* `tail(arr)`: returns an array of all the elements after the first element in arr
* `takeUntil(array, callback)`: returns an array of values from original array that until the first element that evaluates to false from the callback
* `without(source, itemsToRemove)`: returns a new array consisting of all elements in source without elements in itemsToRemove