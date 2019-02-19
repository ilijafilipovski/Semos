console.log("Hello from homework1");
var array = [10,23,34,24,54, 18, 27];
var max = 0;
for(let i=0;i<array.length;i++) {
    if(array[i]>max){
        max = array[i];
    }
}
console.log(max);

function biggestNumber(niza) {
    var max=0;
    for(let i=0;i<niza.length;i++) {
        if(niza[i]>max){
            max = niza[i];
        }
    }
    return max;
}

console.log(biggestNumber(array));