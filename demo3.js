const person = {
    personName: "Ria",
    age: 21,
    job: "Waifu"
};

person["homeCountry"] = "Japan";

console.log(person);

let val1 = null; //purposlfully has no value. 
let val2; //just doesn't have one, never did. Never existed.

console.log(`val1 is ${val1}`, typeof(val1));
console.log(`val2 is ${val2}`, typeof(val2));