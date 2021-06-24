function Person(name,age){
    let person = Object.create(Person.prototype)
    person.name=name;
    person.age=age;

    return person;

} 

Person.prototype={
    eat(){
        console.log(`Person is Eating`);
    },  
    sleep(){
        console.log(`Person is sleeping`);
    },
    play(){
       console.log(`Person is playing`);
    }
}

const imtiaz = Person("Imtiaz",21);
imtiaz.play();