class Korisnik{
    constructor (username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;

    }
    
}

function submitData() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var novKorisnik = new Korisnik(username, password, email);
    console.log(novKorisnik);

    // resi za @, .com, username
}

class Pravoagolnik {
    constructor(visina, sirina) {
        this.visina = visina;
        this.sirina = sirina;

    }
    
    presmetajPlostina () {
        return this.visina * this.sirina;
    }
}

var MojPravoagolnik = new Pravoagolnik("10", "20")
console.log(MojPravoagolnik.presmetajPlostina());