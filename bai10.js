let a = [3, 5, 2, 15, 4, 6, 7, 3, 3, 2, 7, 9, 10];

let a1 = a.sort(function (a, b) {
    return a - b;
});

console.log(`mang sau khi sap la: ${a1}`);

// chen

//let x = 9;
//let x=1;
let x = 20;

for (let i = 0; i < a1.length; i++) {
    if (x >= a1[i] && x <= a1[i + 1]) {
        a1.splice(i + 1, 0, x);
        break;
    }
    if (x < a1[0]) {
        a1.unshift(x);
        break;
    }
    if (x > a1[a1.length - 1]) {
        a1.push(x);
        break;
    }
}


console.log(`mang sau khi chen la ${a1}`);