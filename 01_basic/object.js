

let symb = Symbol("khan"); //symbol is a primitive data type in JavaScript that is used to create unique identifiers for object properties.

// console.log(typeof symb);



let jsuser = {
    name : "BILAL AHMED",
    age : 25,
    [symb] : 1,
    address : "Ghazi Khanay",
    Login : false,
    logindays : {  // nested object
        sunday : false,
        monday : true,
        tuesday : true,
        wednesday : false,
        thursday : true,
        friday : true,
        saturday : false
    }
}

// console.log(jsuser.logindays.sunday)
// console.log(jsuser["logindays"] ["sunday"])
// console.log(jsuser.logindays["sunday"])

// console.log(jsuser[symb]);
// console.log(typeof jsuser[symb]);

jsuser.name = "BILAL AHMED KHAN"; //change the name
console.log(jsuser.name); // console.log(jsuser["name"]); //accessing the name property using bracket notation

Object.freeze(jsuser);  // lock the object
// jsuser.name = "BILAL AHMED KHAN 2"; // This will not change the name because the object is frozen
jsuser.name = "BILAL AHMED KHAN 2";
console.log(jsuser.name);





