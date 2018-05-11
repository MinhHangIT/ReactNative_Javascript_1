const str = 'chuong trinh nhap vao mot xau ki tu hangsjdskjdjk';
const arr = str.split(' ');
let MAX = arr[0];
let MaxIndex = 0;

arr.forEach((item,index) => {
    if(MAX.length < item.length){
        MAX = item;
        MaxIndex = index + 1;
    }
});

console.log(MAX, MaxIndex);