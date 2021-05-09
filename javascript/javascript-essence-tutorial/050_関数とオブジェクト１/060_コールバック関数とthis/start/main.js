window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

function fn(ref) {
    ref();
}

// コールバックに関数を入れた場合参照先は変わる/関数として実行・グローバルオブジェクト
fn(person.hello);