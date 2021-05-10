function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.hello = function() {
    //     console.log('hello ' + this.name);
    // } // こっちでも動作はする　メモリの問題
}

// こちらのほうがメモリ効率が良い・参照のコピーのため、値のコピーではない
Person.prototype.hello = function() {
    console.log('hello ' + this.name);
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

// プロトタイプ
// ・オブジェクトに存在する特別なプロパティ
// ・コンストラクター関数と合わせて使用

bob.hello(); // hello Bob
tom.hello(); // hello Tom
 

// インスタンス化した際にはprototypeの参照が__proto__にコピーされる
