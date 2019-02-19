function soberi(){
    var broj1 = document.getElementById("prv_broj").value;
    var broj2 = document.getElementById("vtor_broj").value;
    var rezultat = Number(broj1) + Number(broj2);
    document.getElementById("rezultat").value = rezultat;
}
document.getElementById("soberi").onclick = soberi;
function odzemi(){
    var broj1 = document.getElementById("prv_broj").value;
    var broj2 = document.getElementById("vtor_broj").value;
    var rezultat = (broj1) - (broj2);
    document.getElementById("rezultat").value = rezultat;
}
document.getElementById("odzemi").onclick = odzemi;

function pomnozi(){
    var broj1 = document.getElementById("prv_broj").value;
    var broj2 = document.getElementById("vtor_broj").value;
    var rezultat = (broj1) * (broj2);
    document.getElementById("rezultat").value = rezultat;
}
document.getElementById("pomnozi").onclick = pomnozi;

function podeli(){
    var broj1 = document.getElementById("prv_broj").value;
    var broj2 = document.getElementById("vtor_broj").value;
    var rezultat = (broj1) / (broj2);
    document.getElementById("rezultat").value = rezultat;
}
document.getElementById("podeli").onclick = podeli;

