interface Counter {
    (): number;
    count: number;
    set(value: number): void;
    decrease(value: number): void;
}
function makeCounter(): Counter {
    function counter(): number {
        return counter.count++;
    }
    counter.count = 0;

    counter.set = function (value: number): void {
        counter.count = value;
    };

    counter.decrease = function (value: number): void {
        counter.count -= value;
    };

    return counter;
}

const count = makeCounter();

for (let i = 0; i < 20; i++) {
    console.log(count());
}

count.set(10);
console.log(count());
console.log(count());

count.decrease(8);
console.log(count());
