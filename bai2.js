const str = 'chuong trinh nhap vao mot xau ki tu hangsjdskjdjk';
const arr = str.split(' ');
let max = arr[0];
let maxIndex = 0;

arr.forEach((item,index) => {
    if(max.length < item.length){
        max = item;
        maxIndex = index + 1;
    }
});

console.log(max, maxIndex);