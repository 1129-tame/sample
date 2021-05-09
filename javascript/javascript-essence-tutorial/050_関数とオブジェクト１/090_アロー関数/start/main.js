// アロー関数
// ->無名関数を記述しやすくした省略記法

function a(name) {
    return 'hello ' + name;
}
// 無名関数
const b = function(name) {
    return 'hello ' + name;
}
// アロー関数
const c = () => 'hello ';
const d = name => 'hello ' + name;
const e = (name, name1) => 'hello ' + name + name1;

console.log(c('Tom', 'Bob'));