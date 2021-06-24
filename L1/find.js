let allValue = [
    { name: "Imtiaz Khandoker", age: 30 },
    { name: "Khandoker Imtiaz", age: 30 },
    { name: "Jerin Khandoker", age: 30 },
    { name: "Sunil Chandra ", age: 31 },
];

let findValue = allValue.find(index => index.age == 31);
console.log(findValue);