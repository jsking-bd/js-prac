// Global Scope 

var name = "Imtiaz";
console.log("Var from Global Scope",name);

function NameFunction(){
    var name = "Imtiaz Changed";
    console.log("Var from Global Scope In A Function",name);
    console.log("Var Updated",name);
}

NameFunction();