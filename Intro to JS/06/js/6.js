class Korisnik {
    constructor (username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    
}

function submitData () {
    var ime = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    ime = ime.replace(" ", "");

    /* if (email.indexOf("@") > -1 && email.indexOf(".com") > -1) {
        // ok
    } else {
        alert("Emailot e nevaliden")
    } */

    // ime = ime.toUpperCase();

    // var niza = ime.split("")

    // ime = ime.replace("-", "")

    /* brojac = 0;
    for (let i =0; i < niza.length; i++) {
        if(niza[i] === niza[i].toUpperCase()) {
            brojac++;
            alert("Korisnickoto ime ne moze da sodrzi golemi bukvi.");
            break
        }
        if (brojac === 0) {

        }
    } */

    var NovKorisnik = new Korisnik(ime, password, email);

    console.log(NovKorisnik);

    // treba da se napravi do baza
}

class Pravoagolnik {
    constructor (visina, shirina) {
        this.visina = visina;
        this.shirina = shirina;
    }

    smeniVisina (visina) {
        this.visina = visina;
    }

    presmetajPloshtina () {
        return this.visina * this.shirina;
    }

}

var MojPravoagolnik = new Pravoagolnik("70", "33");

MojPravoagolnik.smeniVisina("100");
MojPravoagolnik.visina = "100";

var plostina = MojPravoagolnik.presmetajPloshtina()


console.log("Plostinata e " + plostina)