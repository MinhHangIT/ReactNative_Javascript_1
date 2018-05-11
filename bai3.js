/**
 * Viết chương trình thực hiện chuẩn hoá một xâu ký tự nhập từ bàn phím
 * (loại bỏ các dấu cách thừa, chuyển ký tự đầu mỗi từ thành chữ hoa, các ký tự khác thành chữ thường)
 */
const str = 'chương trình tHực hiện chuẩn hoá một xâu ký     tự nhập từ bàn phím';
let str1 = str.trim().toLowerCase();
let arr = str1.split(' ');

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '') {
        arr.splice(i, 1);
        i--;
    }
}

arr.forEach((item, index) => {
    arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
});

let str2 = arr.join(' ');

console.log(str2);