var gradovi = ["Skopje", "Veles", "Tetovo", "Titov", "Pirin", "Pirej", "Kopan", "Stopan", "Resen", "Berovo", "Wow", "Nejke da cue", "Peer", "Coek", "Letovo"];
console.log(gradovi[3]+ " " + gradovi[1]);
var objekt = {prv: "Angela", vtor: "Vlatko", tret: gradovi };
console.log(gradovi.length);
var i;
if ((gradovi.length)%2===0){
    i=gradovi.length/2;
}
else if((gradovi.length)%2===1){
    i=gradovi.length/2 + 0.5;

}
while(i<=gradovi.length){
    console.log(gradovi[i-1]);
    i++;
}


var niza = [1,2,3,4,5,6,7,8,9,10];
var niza1=[];

console.log(niza);
var index = 0;
while(index<=niza.length-1){
    broj=niza[index]*2
    niza1.push(broj)
    index++;
}
console.log(niza1)



