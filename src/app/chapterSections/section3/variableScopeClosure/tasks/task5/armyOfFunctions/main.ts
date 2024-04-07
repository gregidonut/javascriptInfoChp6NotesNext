function makeArmy(): Array<() => void> {
    const shooters: Array<() => void> = [];

    let i = 0;
    while (i < 10) {
        const j = i;
        const shooter = function (): void {
            console.log(j);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

const army = makeArmy();

for (const f of army) {
    f();
}
