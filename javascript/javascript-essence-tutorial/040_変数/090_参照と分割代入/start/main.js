const a = {
    prop: 0
}

// let { prop: b } = a;
// 分割代入の方法
let { prop } = a; // プロパティの名前と同じにする必要
prop = 1;
console.log(a, prop);

 // 関数の場合
function fn( { prop }) {
    // 分割代入でpropを抽出、値を変えてももとのは変わらない
    prop = 1;
    console.log(a, prop);
}
fn(a);

// 階層が下の場合
const c = {
    prop1: {
        prop2: 0
    }
}
let { prop1 } = c;
console.log(prop1);

prop1.prop2 = 1;
console.log(c, prop1);

// 分割した代入先がオブジェクトだった場合、オブジェクトの参照がコピーされるため、もとの値も変更される