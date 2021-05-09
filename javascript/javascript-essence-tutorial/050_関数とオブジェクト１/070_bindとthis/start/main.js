window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello(); // Hello Tom

// bindの例 thisの参照先を決める
const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}

fn(helloTom); // Heloo Tom

function a(name) {
    console.log('hello ' + name);
}

const b = a.bind(null, 'Tim');

b(); // Hello Tim
// まとめ
// bindによってthisや引数を固定した新しい関数を作成
// ->bindによるthisの拘束