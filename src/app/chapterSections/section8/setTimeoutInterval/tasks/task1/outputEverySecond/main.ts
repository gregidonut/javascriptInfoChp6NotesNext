const timerIDST = setTimeout(
    function printNumbersST(from: number, to: number): void {
        if (from > to) {
            clearTimeout(timerIDST);
            return;
        }
        console.log("from setTimeout:", from++);
        setTimeout(printNumbersST, 500, from++, to);
    },
    500,
    8,
    14,
);

(function (from: number, to: number): void {
    let currentNumber = from;

    (function (): void {
        const timerIDSI = setInterval(function (): void {
            if (currentNumber > to) {
                clearInterval(timerIDSI);
                return;
            }
            console.log("from setInterval", currentNumber);
            currentNumber++;
        }, 500);
    })();
})(3, 8);
