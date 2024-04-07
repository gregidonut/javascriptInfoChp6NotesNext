type User = {
    name: string;
    age: number;
    surname: string;
};

function byField<T, K extends keyof T>(
    field: K,
): (a: T, b: T) => 1 | -1 {
    return function (a: T, b: T): 1 | -1 {
        return a[field] >= b[field] ? 1 : -1;
    };
}

const users: Array<User> = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
];

console.log(JSON.stringify(users.sort(byField("name")), null, 4));
console.log(JSON.stringify(users.sort(byField("age")), null, 4));
