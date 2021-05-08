// ソースコードが記載している場所
// 静的スコープ

let a = 2;
function fn1() {
    let b = 1;
   function fn2() {
        let c = 3;
        console.log(b);
    }
    fn2();
}
fn1();

// レキシカルスコープ
// ->外部スコープのこと
// ->どのようにしてスコープを決定するかの仕様のこと