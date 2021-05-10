// コンストラクター関数
// 新しくオブジェクトを作成するための雛形となる関数
// const obj = new A();
// A()=>コンストラクター関数
// インスタンス・インスタンス化

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const Bob = new Person('Bob', 18); // ボブというオブジェクトが生成
const Tom = new Person('Tom', 33); // Tomというオブジェクトが生成
const Sun = new Person('Sun', 20); // Sunというオブジェクトが生成

console.log(Bob); // Person {name: "Bob", age: 18}
console.log(Bob.name); // Bob

// 重要なキーワード
// コンストラクター関数
// インスタンス化
// インスタンス