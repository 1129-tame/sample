// 実行中のコードから参照できる範囲
// グローバルスコープ　スクリプトスコープ
let a = 0;
var b = 0;
function c() {}
// debugger; // ここで実行が一時停止する

console.log(window.b);
console.log(b);

window.d = 12;
let d = 2;
console.log(d);

// winowオブジェクト = グローバルスコープ