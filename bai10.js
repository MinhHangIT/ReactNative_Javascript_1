const arr = [3, 5, 2, 15, 4, 6, 7, 3, 3, 2, 7, 9, 10];
const x =199;
arr.sort((a,b)=>a-b);

arr.every((item,index) => {
    if(x < arr[index]) 
        arr.splice(index, 0, x);
    if(x> arr[arr.length-1])
        arr.push(x);
});

console.log(...arr);