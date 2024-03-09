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


//ex2
let x;
x = 1;
if (typeof x === 'number') {
    console.log ('x — число')
}
else if (typeof x === 'string') {
    console.log ('x — строка')
}
else if (typeof x === 'boolean') {
    console.log ('x — булев')
}
else {
    console.log ('Тип x не определён')
}

//ex3

let str = 'Hello';
str = str.split("").reverse().join("");
console.log(str);

//ex4
Math.floor(Math.random() * 101)

//ex5
let numbers = [12, 17, 8, 10];
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

//ex6
let arr = [3, 9, 3, 4, 9, 5, 10, 4, 1]
let prov = [];
for (let i = 0; i < arr.length; i++) {
    for (let c = 0; c < i; c++)
        if (arr[c] === arr[i]) {
            prov.push(arr[i])
        }
}

console.log(prov)

//ex7
const arr1 = [1, 2, 'a', null, 0, 5, 6, 'b', 0, 8];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

arr1.forEach(element => {
    if (typeof element === 'number') {
        if (element === 0) {
            zeroCount++;
        } else if (element % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
});

console.log(`Количество чётных элементов: ${evenCount}`);
console.log(`Количество нечётных элементов: ${oddCount}`);
console.log(`Количество нулевых элементов: ${zeroCount}`);

//ex8
let myMap = new Map();
myMap.set('key', 'yellow');
myMap.set(1, 'prop');
myMap.set(true, 123);

for (let name of myMap.keys()){
    console.log(`Ключ - ${name}`)
}

for (let name2 of myMap.values()){
    console.log(`Значение - ${name2}`)
}