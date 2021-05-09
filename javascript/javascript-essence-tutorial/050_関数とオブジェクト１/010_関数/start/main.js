// const fn = function(a, b) {
//     console.log(a, b);
// }
// 同じ関数名は最後の関数が発動される
// function fn(a) {
//     console.log(2);
// }

function fn() {
    const a = arguments[0]; //argumentsには実引数が渡ってくる
    const b = arguments[1]; //このやり方は今はあまり使わない
    console.log(arguments);
    console.log(a, b);
    return a;
}

let c = null; // undifinedは使わない
let d = fn(1, null);
console.log(d);