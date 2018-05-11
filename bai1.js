const hoTen = 'Hap Thi Minh Hang';

const arr = hoTen.split(' ');

const ho = arr[0];    

const ten = arr[arr.length - 1];

const dem = arr[1].concat(' ', arr[arr.length - 2]);

console.log(`chuoi sau khi dao la: ${ten} ${dem} ${ho}`);
