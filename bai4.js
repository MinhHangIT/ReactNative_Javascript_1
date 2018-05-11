/**
 * Nhập số liệu cho dãy số thực a0, a1,..., an-1. Hãy liệt kê các phần tử xuất hiện trong dãy đúng một lần.
 */
const arr = [3.6, 4.2, 5.4, 4.2, 3.1, 10.3, 5.4, 4.2, 3.6, 4.2, 3.6, 2.1, 4.5, 6.4];

const arr1 = arr;

for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] >= arr1[j]) {
            let tg = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = tg;
        }
    }
}

for (let i = 0; i < arr1.length; i++) {
    let j = i + 1;
    while (arr1[i] === arr1[j]) {
        j++;
    }
    if (j !== i + 1) {
        for (let jj = j; jj < arr1.length; jj++) {
            arr1[i + (jj - j)] = arr1[jj];
        }
        arr1.length -= (j - i);
        i--;
    }
}


console.log(`So phan tu xuat hien dung 1 lan : ${arr1}`);