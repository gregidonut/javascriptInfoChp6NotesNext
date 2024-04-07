import {
    Worker,
    cachingDecorator,
} from "../../utils/cachingDecorator";

const worker = new Worker();

console.log(worker.slow(2));

worker.slow = cachingDecorator(worker.slow);

console.log(worker.slow(3));
