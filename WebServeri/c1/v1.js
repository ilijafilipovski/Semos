var ime = "Ilija" // String
var godini = 23 // Number - Integer
var visina = 1.82 // Number - Float
var vikend = false // Boolean

// var condition = true && (true || false) || false;
// if(condition){
//     console.log("TRUE");
// } else {
//     console.log("FALSE");
// }

// var bukva = "A";
// switch(bukva){
//     case "A":
//         console.log("bukva A");
//         break;
//     case "B":
//         console.log("bukva B");
//         break;
//     case "C":
//         console.log("bukva C");
//         break;
//     default:
//         console.log("nepoznata bukva");
//         break;        
    
// }

// function zdravo(){
//     console.log("Zdravo" + ime);
// }
// var pozdrav = function(){
//     console.log("Zdravo" + ime);
// }

// var hello = () => {
//     console.log("Zdravo" + ime);

// }

// var calc = (a,b) => {
//     return a+b;
// }

// var rez = calc(2,6);

var call = (a, b, fn) => {
    fn(a+b);
}   

call(4, 7, (r)=>{
    console.log(r*2);
})


var calc = (a,b,op,cb) => {
    let r = a + b;
    cb(r, op);
}

var math = (r, op) => {
    switch(op){
        case "div":
            console.log(r/2);
            break;
        case "mul":
            console.log(r*2);
            break;
        case "sub":
            console.log(r - 1);
            break;
        case "add":
            console.log(r + 2);
            break;
        default:
            console.log("vnesi validna operacija");
            break;
    }
}

var rez = calc(2,7,"div",math);

console.log(rez);

var ime = "Pero";

var vetuvanje = () => {
    return new Promise((succ, fail)=>{
        if(ime === "Pero"){
            return succ(ime);
        }
        return fail(ime);
        }
    )
}

vetuvanje()
.then(i=> {
    console.log(i);
});


















