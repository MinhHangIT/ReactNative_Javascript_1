let hoTen = 'Hap Thi Minh Hang';

hoTen.trim();

let str = hoTen.split(' ');

let ho = str[0];

let ten = str[str.length - 1];

let dem = str[1].concat(' ', str[str.length - 2]);

console.log(`chuoi sau khi dao la: ${ten} ${dem} ${ho}`);
