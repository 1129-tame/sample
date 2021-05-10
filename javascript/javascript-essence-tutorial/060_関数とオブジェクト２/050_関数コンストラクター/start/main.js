// 関数コンストラクター
const fn1 = new Function('a', 'b', 'return a + b');

const result = fn1(1, 2);
console.log(result); // 3

let d = 0;
function fn() {
    let d = 1;
    const fn1second = new Function('a', 'b', 'return a + b * d');
    return fn1second;
}
const f = fn();
const result2 = f(1,2);
console.log(result2); // 1

function fn2(a, b) {
    return a + b;
}

console.log(fn2 instanceof Function);

// 無名関数からインスタンス化
const obj = new function() {
    this.a = 0;
}
const fn3 = new Function('return;');
console.log(obj, fn3);