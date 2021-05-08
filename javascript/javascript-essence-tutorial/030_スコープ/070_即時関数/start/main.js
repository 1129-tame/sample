//即時関数 IIFE
//関数定義と同時に一度だけ実行される関数
//実行結果が呼び出し元に返却される

function a() {
    console.log('called');
}

a();
// = (a)();

// 一度だけ実行するため、カッコを付ける
// 関数の中で定義
let c = (function(e) {
    let privateVal = 0;
    let publicVal = 10;

    function privateFn() {
        console.log('privateFn is called');
    }
    function publicFn() {
        console.log('publicFn is called:' + privateVal++);
    }

    return {
        publicVal, 
        publicFn
    };
})();

c.publicFn();
c.publicFn();

console.log(c.publicVal);


let b = 1 + 2 * 3;
console.log(b);
console.log(c);