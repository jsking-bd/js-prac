let users = [
    { name: "Imtiaz", age: 27 },
    { name: "Bondhon", age: 20 },
    { name: "KheX", age: 28 },
]

let anyMatch = users.some(user => user.age <= 20)
let values = anyMatch && anyMatch === true ? "Got it" : "Not Found";
console.log(values);