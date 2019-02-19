const person = require("./person.js")

var p1 = new person.create("Blazenka", "Parmakova", "24", "f")
var p2 = new person.create("John", "Doe", "23", "m")

console.log(p1.getFullName());