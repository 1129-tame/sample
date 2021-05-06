

// グローバルコンテキスト
// ->ファイル直下のコード
let a = 0;
function b() {
    // 関数コンテキスト
    console.log(a);
    console.log(this, arguments, a);
}

b();