//ex1
let result = prompt("Write a number");
let res = +result;
typeof res;

if (!isNaN(res)){
    if(res % 2 == 0){
        console.log("ЧЕТНОЕ")
    }
    else {
        console.log("НЕЧЕТНОЕ")
    }
}
else{
    console.log("Упс, кажется вы ошиблись")
}
