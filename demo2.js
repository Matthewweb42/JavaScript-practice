
const words = ["nice, you, cool"]
words.length
words.push("hello"); //adds an element
words.pop; //takes one out
words.shift(); //takes out first and shifts it down.
words.unshift("FIRST!"); // adds to the front. 

const values = [10,20,30,40,50,60];
console.log(values);
values.splice(2,1,"apple","banna"); //parameter, location, then added items.
console.log(values); //splice edits an array

const newValues = values.slice(2,5) //start, and end
console.log(newValues) // slice returns new array based off unmodified original