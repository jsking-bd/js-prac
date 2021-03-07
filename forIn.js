const myObj = {
    name: "Imtiaz Khandoker",
    id: "ft0115",
    email: "mohsin.khondoker@upaybd.com",
    admin: "Admin"
}

for (property in myObj) {
    console.log(property);
}

const inArray = Object.values(myObj);

for (var i = 0; i <= inArray.length; i++) {
    while (inArray[i] === "Admin") {
        console.log("Found");
        break;
    }
}

