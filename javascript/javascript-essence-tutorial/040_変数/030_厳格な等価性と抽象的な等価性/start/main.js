// 厳格な等価性 a === b
// 抽象的な等価性 a == b

function printEquality(a, b) {
    console.log(`厳格な等価性：${a}と${b}は`, a === b);
    console.log(`抽象的な等価性：${a}と${b}は`,  a == b);
}

let a = '1';
let b = 1;

let c = true;

console.log(b === Number(c));
printEquality(b, c);

let e = "";
let f = 0;
let g = "0";

printEquality(g, f);