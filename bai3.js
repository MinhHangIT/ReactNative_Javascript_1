/**
 * Viết chương trình thực hiện chuẩn hoá một xâu ký tự nhập từ bàn phím
 * (loại bỏ các dấu cách thừa, chuyển ký tự đầu mỗi từ thành chữ hoa, các ký tự khác thành chữ thường)
 */
let str = 'chương trình tHực hiện chuẩn hoá một xâu ký     tự nhập từ bàn phím';
str.trim();
str = str.toLowerCase();
let arr = str.split(' ');

function xoaDauCach() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            arr.splice(i, 1);
            //arr.length--;
            i--;
        }

    }
    return arr;
}
let arr1 = xoaDauCach(arr);

//console.log(arr1);

function vietHoa() {
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
    }
    return arr1;
}
let arr3 = vietHoa(arr1);
console.log(`chuoi sau khi chuan hoa: ${arr3.join(' ')} `);