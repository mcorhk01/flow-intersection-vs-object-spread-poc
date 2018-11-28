// @flow

// example 3 use object type spread but achieve the same result
type A = { foo: string };
type ExactB = {| bar: number, ...$Exact<A> |};
// $ExpectError
const wrongExactB: ExactB = { bar: 456 };
const correctExactB: ExactB = { foo: "foo", bar: 678 };
// $ExpectError
const invalidExactB: ExactB = { foo: "foo", bar: 678, haha: true };
