// @flow

// example 1 comparing object type spread and intersection
type A = { foo: string };
type WrongB = { bar: number, ...A };
type CorrectB = { bar: number } & A;

const a: A = { foo: "foo" }; // This work of coz
const wrongB: WrongB = { bar: 123 }; // This does not show error! Not what you expect
// $ExpectError
const incorrectB: CorrectB = { bar: 456 }; // This will show error if your remove the above comment
const correctB: CorrectB = { foo: "foo", bar: 678 }; // This is correct!
const validB: CorrectB = { foo: "foo", bar: 678, haha: true }; // This is correct too due to width subtyping!!
