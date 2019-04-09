var studenti = [
    {ime: "Pero", prezime: "Perovski", prosek: 7.2},
    {ime: "Ivan", prezime: "Ivanovski", prosek: 9.3},
    {ime: "Aleksandar", prezime: "Aleksandrov", prosek: 7.1},
    {ime: "Ana", prezime: "Aneva", prosek: 9.7}
];

var najdolgoPrezime;
var najkratkoIme;
var sredenProsek=0;
var c = 0;

var prezime1 = 0;
var ime1 = 100;

for(var i in studenti){

    if(studenti[i].prezime.length > prezime1){
        prezime1 = studenti[i].prezime.length;
        najdolgoPrezime = studenti[i].prezime;
    }
    if(studenti[i].ime.length < ime1){
        ime1 = studenti[i].ime.length;
        najkratkoIme = studenti[i].ime;
    }

    sredenProsek = (sredenProsek + studenti[i].prosek);
    c++;

}
sredenProsek = sredenProsek/c;
console.log("Najdolgo prezime = " + najdolgoPrezime);
console.log('Najkratko ime = ' + najkratkoIme);
console.log("Sreden prosek = " + sredenProsek);


