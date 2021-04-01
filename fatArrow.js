let objGroup = {
    name:"JS",
    libs : ['React','Vue','Angular'],
    printLibs : function (){ this.libs.forEach((val)=>{console.log(`${this.name} is ---${val}`);})}
}
objGroup.printLibs();