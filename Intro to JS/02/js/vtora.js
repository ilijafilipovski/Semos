/* var broj1 = 10;
var broj2 = 30;

if (broj1 > broj2) {
    console.log("Prviot broj e pogolem od vtoriot.");
    alert("Prviot broj e pogolem od vtoriot.");
} else if (broj2 > broj1) {
    alert("Vtoriot broj e pogolem od prviot.");
} else {
    alert("Dvata broja se isti");
} */

var den = prompt("Vnesi den:")

switch (den) {
    case "1": {
        console.log("denot e ponedelnik");
        break;
    }

    case "2": {
        console.log("denot e vtornik");
        break;
    }

    case "3": {
        console.log("denot e sreda");
        break;
    }

    case "4": {
        console.log("denot e cetvrtok");
        break;
    }

    case "5": {
        console.log("denot e petok");
        break;
    }

    case "6": {
        console.log("denot e sabota");
        break;
    }

    case "7": {
        console.log("denot e nedela");
        break;
    }

    default: {
        console.log("nevaliden den od nedelata");
    }
}
