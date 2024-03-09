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

