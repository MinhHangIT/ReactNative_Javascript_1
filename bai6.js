/**
 * Bài 6. Nhập một sâu ký tự. Liệt kê số lần xuất hiện của các từ của sâu đó.
 */
const str = 'Nhập một sâu ký tự. Liệt kê số lần xuất xuất xuất xuất hiện'

const str1 = str.trim().toLowerCase();

const arr = str1.split(' ');

const result = {};

arr.forEach((item,index) => {
    if(!result[item])
        result[item] = 1;
    else
        result[item]++;
});

console.log(result);