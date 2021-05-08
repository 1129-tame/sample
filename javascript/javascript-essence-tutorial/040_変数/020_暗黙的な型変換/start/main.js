// 変数の型が自動的に変換されること
// 動的型付け言語

function printTypeAndValue(val) {
    console.log(typeof val, val);
}

let a = 0;

printTypeAndValue(a);

let b = parseInt('1') + a;

printTypeAndValue(b);

let c = 15 - b;

printTypeAndValue(c);

let d = c - null;

printTypeAndValue(d);

let e = d - true;
// true-> 1とみなされる

printTypeAndValue(e);