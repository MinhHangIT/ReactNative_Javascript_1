/**
 * Nhập một sâu ký tự. Đếm số từ của sâu đó
 * (mỗi từ cách nhau bởi một khoảng trắng có thể là một hoặc nhiều dấu cách, tab, xuống dòng). 
 * Ví dụ ” hoc java co ban den nang cao ” có 7 từ.
 */
let a = '  Nhập   Một sâu   ký tự.     Đếm   số    từ của   Sâu     đó    ';
// chuan hoa chuoi
a.trim();
let a1 = a.toLowerCase();
let arr = a1.split(' ');
function xoaDauCach() {
    
    for( let i = 0; i<arr.length; i++){
        
            arr[i] = arr[i].replace(/ /g,'');
        
    }
    return arr;
} 
console.log(xoaDauCach(arr));
// let str = a2.split(' ');
// console.log(str);
// xoa dau cach sau dem so tu trong cau. ys tuong:  xoa dau cach thau 2 dau, ro dem so dau cach trong chuoi
