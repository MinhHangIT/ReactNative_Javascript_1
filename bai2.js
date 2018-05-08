let str = 'chuong trinh nhap vao mot xau ki tu hangsjdskjdjk';
str.trim(' ');
let arr = str.split(' ');
let MAX = arr[0].length;
let MAXstr = '';
let i;
let vt = 0;
for (i = 0; i < arr.length; i++) {
    if (MAX < arr[i].length) {
        MAX = arr[i].length;
    }
}
for (i = 0; i < arr.length; i++) {
    if (arr[i].length == MAX) {
        MAXstr = arr[i];
        vt = i + 1;
    }
}
console.log(`tu co so ki tu nhieu nha la: ${MAXstr} co vi tri trong chuoi la: ${vt}`);