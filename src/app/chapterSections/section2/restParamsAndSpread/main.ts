function sumAll(...args: number[]): number {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    console.log("args size: ", arguments.length);
    return sum;
}

console.log(sumAll(1, 3, 3));

const myArray = [2, 3, 5, 7];
const anotherArr = [3, 5, 32];

console.log(sumAll(...myArray, ...anotherArr));
