/**
 * Nhập một sâu ký tự. Đếm số từ của sâu đó
 * (mỗi từ cách nhau bởi một khoảng trắng có thể là một hoặc nhiều dấu cách, tab, xuống dòng). 
 * Ví dụ ” hoc java co ban den nang cao ” có 7 từ.
 */
const str = '  Nhập   Một sâu   ký tự     Đếm   số    từ của   Sâu     đó    ';
// chuan hoa chuoi
const str1 = str.trim().toLowerCase();

const arr = str1.split(' ');

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '') {
        arr.splice(i, 1);
        i--;
    }
}

console.log(`so tu trong xau la ${arr.length}`);