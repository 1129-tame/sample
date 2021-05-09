// コールバック関数=>他の関数に引数として渡される関数

function hello(name) {
    console.log('hello ' + name);
}

function bye() {
    console.log('bye');
}

// コールバック関数
function fn(cb) {
    cb('Tom'); // 内部で実行
}

fn(hello);
fn(bye);
// 無名関数
fn(function(name) {
    console.log('hello:' + name);
});

setTimeout(hello, 2000);
setTimeout(bye, 2000);