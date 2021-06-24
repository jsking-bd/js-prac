Array.prototype.myStyle=function (){
  for(i=0;i<this.length;i++){
      this[i]= this[i].toUpperCase()
  }
}
let arryName = ["Kamal","Jamal","Jodu","Modu"];

 arryName.myStyle();
console.log(arryName.myStyle());
