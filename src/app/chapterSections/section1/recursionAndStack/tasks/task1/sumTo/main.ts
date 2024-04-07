function sumTo(n: number): number {
    let sum = 0;
    (function summer(num: number): void {
        if (num === 0) {
            return;
        }
        sum += num;
        summer(num - 1);
    })(n);

    return sum;
}

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));
