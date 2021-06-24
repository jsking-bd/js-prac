function isColor(arrValue){
   for(let color of arrValue){
       if(color.toUpperCase() === "PINK" || color ==="BLUE"){
           return true;
       }
       return false;
   }
}

console.log(isColor(["pink"]));
