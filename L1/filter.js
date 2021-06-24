const arr = [1,2,3,4,5];
const newArray = arr.filter(i => i%2 == 0);
console.log(newArray);

var heroes = [
    {name: "Batman", franchise: "DC"},
    {name: "Ironman", franchise: "Marvel"},
    {name: "Thor", franchise: "Marvel"},
    {name: "Superman", franchise: "DC"}
];

var marvelHeroes =  heroes.filter((hero)=> {
    return hero.franchise == "Marvel+" || hero.name=="Batman";
});

console.log("Marvel Heroes",marvelHeroes);

