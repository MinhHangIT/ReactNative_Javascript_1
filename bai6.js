/**
 * Bài 6. Nhập một sâu ký tự. Liệt kê số lần xuất hiện của các từ của sâu đó.
 */
const str = 'Nhập một sâu ký tự. Liệt kê số lần xuất xuất xuất xuất hiện'


let str1 = str.trim().toLowerCase();

let arr = str1.split(' ');

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '') {
//         arr.splice(i, 1);
//         i--;
//     }

// }

let result = {};

arr.forEach((item,index) => {
    if(!result[item])
        result[item] = 1;
    else
        result[item]++;
});

console.log(result);