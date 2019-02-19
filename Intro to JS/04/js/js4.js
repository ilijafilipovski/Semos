var iminja = ["Vlatko", "Angela", "Filip", "Jordan"];
var lista = document.getElementById("listaNaKorisnici");
for (let i=0; i<iminja.length;i++){
var item = document.createElement("LI");
var listitem = document.createTextNode(iminja[i]);
item.appendChild(listitem);
item.setAttribute("id", "item_" +i);
lista.appendChild(item);
}
lista.classList.add("float-right", "red");
console.log(lista.getElementsByTagName("LI"))
console.log(lista.getElementsByClassName("red"))

