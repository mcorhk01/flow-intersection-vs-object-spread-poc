// @flow

// example 1 comparing object type spread and intersection
type A = { foo: string }
type WrongB = { bar: number, ...A }
type CorrectB = { bar: number } & A

const a: A = { foo: "foo" } // This work of coz
const wrongB: WrongB = { bar: 123 } // This does not show error! Not what you expect
// $ExpectError
const incorrectB: CorrectB = { bar: 456 } // This will show error if your remove the above comment
const correctB: CorrectB = { foo: "foo", bar: 678 } // This is correct!
const correctB2: CorrectB = { foo: "foo", bar: 678, haha: true } // This is correct too due to width subtyping!!

// example 2 using exact type and object type spread together
type ExactA = {| foo: string |}
type ExactB = {| ...ExactA, ...{| bar: number |} |}
// $ExpectError
const wrongExactB: ExactB = { bar: 456 }; // This will show error if your remove the above comment
const exactB: ExactB = { foo: "foo", bar: 678 }; // This is correct!
// $ExpectError
const wrongExactB2: ExactB = { foo: "foo", bar: 678, haha: true }; // This is wrong since ExactB is an exact type

// example 3 use object type spread but achieve the same result
type AnotherExactB = {| bar: number, ...$Exact<A> |}
// $ExpectError
const wrongAnotherExactB: AnotherExactB = { bar: 456 }
const anotherExactB: AnotherExactB = { foo: "foo", bar: 678 } // This is correct!
// $ExpectError
const wrongAnotherExactB2: AnotherExactB = { foo: "foo", bar: 678, haha: true };
