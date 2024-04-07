export class Worker {
    private someMethod(): number {
        return 1;
    }
    slow(x: number): number {
        console.log("worker.slow called with:", x);
        return x * this.someMethod();
    }
}

export function cachingDecorator(
    func: Worker["slow"],
): Worker["slow"] {
    const cache: Map<number, number> = new Map();

    return function (this: Worker, x: number): number {
        if (cache.has(x)) {
            console.log("in cache returning from cache");
            return cache.get(x)!;
        }
        const result = func.call(this, x);

        cache.set(x, result);
        return result;
    };
}
