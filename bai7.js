let str1 = 'hahhdj jsdhfdj ksjdsf hihihi hahaha';
let str2 = 'hihihi hahaha';

let kq;

for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[0]) {
        let j = 1;
        let check = false;
        for (let j; j < str2.length; j++) {
            if (str1[i + 1] !== str2[j]) {
                check = true;
                break;
            }
        }
        if (check === false)
            kq = 'sau 2 co trong sau 1';
    }
}

console.log(kq);