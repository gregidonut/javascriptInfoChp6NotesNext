type delayFuncArg = (arg: string) => void;

function delay(f: delayFuncArg, ms: number): delayFuncArg {
    return function (arg: string): void {
        setTimeout((): void => {
            f(arg);
        }, ms);
    };
}

function f(x: string): void {
    console.log(x);
}

const f1000 = delay(f, 1000);
const f1500 = delay(f, 1500);

f1000("test");
f1500("test2");
