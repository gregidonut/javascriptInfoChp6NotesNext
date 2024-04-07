function inBetween<T>(a: T, b: T): (element: T) => boolean {
    let payload = false;
    return function (element: T): boolean {
        switch (true) {
            case element === a:
                payload = true;
                break;
            case element === b:
                payload = false;
                break;
        }
        return payload;
    };
}

function inArray<T>(arr: T[]): (filterElement: T) => boolean {
    return function (filterElement: T): boolean {
        for (const inArrayElement of arr) {
            if (inArrayElement !== filterElement) {
                continue;
            }
            return true;
        }
        return false;
    };
}

const numArray: Array<number> = [1, 2, 3, 4, 5, 6, 7];

console.log(numArray.filter(inBetween<number>(3, 6)));
console.log(numArray.filter(inArray<number>([1, 2, 10, 7])));
