// DOMASNO: 2 proizvolni nizi, da se napravi treta niza. na neparnite mesta od 3tata niza da bidat elementite od prvata niza, a na parnite od vtorata niza);
// if (niza1.length%2===1 && niza2.length%2===1) {
//     i=niza1.length + 0.5;

// }

var niza1 = ["a", "b", "c"];
var niza2 = ["A", "B", "C", "D", "E", "F", "G", ];
var niza3 = [];
var i=0;
while(i<=niza1.length-1 || i<=niza2.length-1 ){
    if (i<=niza1.length-1){
        niza3.push(niza1[i]);
    }
    if (i<=niza2.length-1){
        niza3.push(niza2[i]);
    }
    i++;
}
console.log(niza3);
