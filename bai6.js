/**
 * Bài 6. Nhập một sâu ký tự. Liệt kê số lần xuất hiện của các từ của sâu đó.
 */
let str = 'Nhập một sâu ký   tự. Liệt kê số    lần xuất xuất xuất xuất hiện '


str.trim();
str.toLowerCase();

let arr = str.split(' ');

function xoaDauCach() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            arr.splice(i, 1);
            i--;
        }

    }
    return arr;
}

console.log(xoaDauCach(arr));