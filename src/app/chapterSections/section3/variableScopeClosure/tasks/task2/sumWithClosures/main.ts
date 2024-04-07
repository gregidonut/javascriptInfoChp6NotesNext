function sum(x: number): (y: number) => number {
    return function (y: number): number {
        return x + y;
    };
}

console.log(sum(8)(2));
