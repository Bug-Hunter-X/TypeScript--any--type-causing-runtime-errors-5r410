# TypeScript 'any' type causing runtime errors

This repository demonstrates a common TypeScript error involving the overuse of the `any` type.  The `any` type defeats TypeScript's type checking system.  While convenient, it introduces risks of runtime type errors that could otherwise have been prevented by using more specific types.

The `bug.ts` file shows how a function accepting `any` type could lead to runtime errors. The solution `bugSolution.ts` file demonstrates better error handling through more specific typing.