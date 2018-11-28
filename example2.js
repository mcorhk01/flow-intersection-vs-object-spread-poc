// @flow

// example 2 using exact type and object type spread together
type ExactA = {| foo: string |};
type ExactB = {| ...ExactA, ...{| bar: number |} |};
// $ExpectError
const wrongExactB: ExactB = { bar: 456 }; // This will show error if your remove the above comment
const correctExactB: ExactB = { foo: "foo", bar: 678 }; // This is correct!
// $ExpectError
const invalidExactB: ExactB = { foo: "foo", bar: 678, haha: true }; // This is wrong since ExactB is an exact type
