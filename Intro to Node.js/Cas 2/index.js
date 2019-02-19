// Objects

var property1 = {
    type: "house",
    m2: "100",
    balcony: "5",
    price: "1000",

    getFullPrice: function(){
        return (parseInt(this.m2) + parseInt(this.balcony)) * parseInt(this.price)
    }
}

var property2 = {
    type: "apartment",
    m2: "120",
    balcony: "5",
    price: "1100",

    getFullPrice: function(){
        return (parseInt(this.m2) + parseInt(this.balcony)) * parseInt(this.price)
    }
}

var property3 = {
    type: "house",
    m2: "130",
    balcony: "20",
    price: "900",

    getFullPrice: function(){
        return (parseInt(this.m2) + parseInt(this.balcony)) * parseInt(this.price)
    }
}

var niza = [];

niza.push(property1, property2, property3);

for(let i = 0 ; i< niza.length ; i++) {
    if(niza[i].type === "house" && niza[i].getFullPrice() < 100000) {
        console.log(niza[i])
    }
}