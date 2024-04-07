type DisgustingSum = (x: number) => DisgustingSum;

function disgustingSum(x: number): DisgustingSum {
    let sum: number = x;

    function f(y: number): DisgustingSum {
        sum += y;
        return f;
    }

    f.toString = function (): number {
        return sum;
    };

    return f;
}

// @ts-ignore
console.log(`${disgustingSum(2)(3)(9)(-3) + 9}`);
