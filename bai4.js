/**
 * Nhập số liệu cho dãy số thực a0, a1,..., an-1. Hãy liệt kê các phần tử xuất hiện trong dãy đúng một lần.
 */
let a = [3.6, 4.2, 5.4, 4.2, 3.1, 10.3, 5.4, 4.2, 3.6, 4.2, 3.6, 2.1, 4.5, 6.4];

function sapxep(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] >= a[j]) {
                let tg = a[i];
                a[i] = a[j];
                a[j] = tg;
            }
        }
    }
    return a;
}

let a2 = sapxep(a);

function xoaPtGiong(a2) {
    for (let i = 0; i < a2.length - 1; i++) {
        for (let j = i + 1; j < a2.length; j++) {
            if (a[i] == a[j]) {
                a[j] = a[j + 1];
                a2.length--;
                i--;
            }
        }
    }
    return a2;
}

function xoaPtGiong2(a) {
    for (let i = 0; i < a.length; i++) {
        let j = i + 1;
        while (a[i] === a[j]) {
            j++;
        }
        if (j !== i + 1) {
            for (let jj = j; jj < a.length; jj++) {
                a[i + (jj - j)] = a[jj];
            }
            a.length -= (j - i);
            i--;
        }
    }
    return a;
}

let a3 = xoaPtGiong2(a2);
console.log(`So phan tu xuat hien dung 1 lan : ${a3}`);