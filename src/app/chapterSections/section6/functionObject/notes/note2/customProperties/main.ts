function newCounter(): () => number {
    function counter(): number {
        return counter.count++;
    }
    counter.count = 0;

    return counter;
}

const counter = newCounter();

for (let i = 0; i < 100; i++) {
    console.log(counter());
}
