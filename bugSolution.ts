function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function printBoolean(bool: boolean): void {
  console.log(bool);
}

printNumber(5);
printString("hello");
printBoolean(true);
//This line will cause a compile-time error if uncomment.
//printNumber("hello");
//This line will cause a compile-time error if uncomment.
//printString(true);