const a1=[1,1,1,2,2,3,3,3,3,3,3,9,99]
const a2=[1,7,7,1,2,2,3,3,3,3,3,3,9,98]
const a3=[6,7,7,1,6,2,3,3,6,3,3,3,9,99]
const JoinAllA = [...a1,...a2,...a3];
const arr = [1,1,1,1,1,2,2,2,2,3,3,3,3,3];
const removeDuplicatNumbers = [...new Set(JoinAllA)];
// Descending 
console.log(removeDuplicatNumbers.sort((a, b)=> {return b-a}));