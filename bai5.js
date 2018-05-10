/**
 * Nhập một sâu ký tự. Đếm số từ của sâu đó
 * (mỗi từ cách nhau bởi một khoảng trắng có thể là một hoặc nhiều dấu cách, tab, xuống dòng). 
 * Ví dụ ” hoc java co ban den nang cao ” có 7 từ.
 */
let a = '  Nhập   Một sâu   ký tự     Đếm   số    từ của   Sâu     đó    ';
// chuan hoa chuoi
a.trim();
let a1 = a.toLowerCase();
let arr = a1.split(' ');

function xoaDauCach() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            arr.splice(i, 1);
            i--;
        }

    }
    return arr;
}
let arr2 = xoaDauCach(arr).join(' ');
console.log(arr2);

let d = 0;

console.log(arr2);

function dem() {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === ' ')
            d++;
    }
    return d + 1;
}
//let a = dem(arr3);
console.log(`so tu trong xau la ${dem(arr2)}`);