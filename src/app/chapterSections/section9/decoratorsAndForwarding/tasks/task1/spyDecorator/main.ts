interface WorkFunc {
    (a: number, b: number): void;
    calls?: Array<readonly [number, number]>;
}

let work: WorkFunc = function (a: number, b: number): void {
    console.log(a + b);
};

work = workBuilder(work);

work(1, 2);
work(4, 5);

function workBuilder(wf: WorkFunc): WorkFunc {
    const workCalls: WorkFunc["calls"] = [];
    const payload: WorkFunc = function (
        this: WorkFunc,
        x: number,
        y: number,
    ): void {
        wf.call(this, x, y);
        workCalls.push([x, y]);
    };

    payload.calls = workCalls;
    return payload;
}

// console.log(work);

for (const args of work.calls!) {
    console.log("call:" + args.join(",")); // "call:1,2", "call:4,5"
}
