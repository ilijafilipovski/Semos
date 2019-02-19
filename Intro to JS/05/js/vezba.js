function proverka(niza, ime){
    var najdeno=false;
    var pozicija;
    for(let i=0; i<niza.length; i++){
        if (niza[i]===ime){
            najdeno = true;
            pozicija = i;
            break;
        }
    }
    if (najdeno){
        alert("Imeto postoi vo nizata");
        return pozicija;
    }
    else{
        alert("Imeto ne e del od nizata");
        return "Elementot ne e pronajden, nema pozicija";      
    }
    
}

var grupa = ["Ile", "Bojan", "Stojan", "Goran"];
var papak = "Babus";
var p = proverka(grupa, papak);
console.log(p);