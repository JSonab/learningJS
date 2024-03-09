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