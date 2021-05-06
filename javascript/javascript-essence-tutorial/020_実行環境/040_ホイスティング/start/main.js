a();
// 関数の作成
function a() {
    let c = 1;
    console.log(c);
    d();
    function d() {
        console.log('d is called');
    }
    console.log('a is called');
}

// 関数式 無名関数を変数化 変数のホスティングと同じ
// const a = function() {
//     console.log(c);
//     var c = 1;
//     d();
//     function d() {
//         console.log('d is called');
//     }
//     console.log('a is called');
// }


const b = 0;
console.log(b);
