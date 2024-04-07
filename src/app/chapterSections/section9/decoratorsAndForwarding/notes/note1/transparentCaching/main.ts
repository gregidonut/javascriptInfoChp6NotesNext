import { cachingDecorator } from "../../utils/cachingDecorator";

let slow = (x: number): number => {
    console.log(`slow called with ${x}`);
    return x;
};

slow = cachingDecorator(slow);

console.log(slow(1));
console.log("Again:", slow(1));

console.log(slow(2));
console.log("Again:", slow(2));
