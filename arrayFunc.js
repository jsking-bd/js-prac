// constructor
// let foods= {
//     name:"Apple",

// }
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(foods.constructor);

// Prototype

Array.prototype.myStyle = () =>{
    for(i=0;i<this.length;i++){
        this[i]=this[i].toUpperCase();
    }
};
console.log(fruits.myStyle());