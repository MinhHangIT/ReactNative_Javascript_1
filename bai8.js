const arr = [3,4,5,2,5,2,65,7,24,3,6];
const result = {};

arr.forEach((item, index) => {
    if (result[item]) {
        result[item] ++;
    } else {
        result[item] = 1;
    }
});

console.log(result);