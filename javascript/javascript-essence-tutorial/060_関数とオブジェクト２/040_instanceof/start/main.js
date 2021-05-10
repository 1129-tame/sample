function F(a, b) {
    this.a = a;
    this.b = b;
    // return {a: 1};
}

F.prototype.c = function() {}

// instanceof
// ->どのコンストラクターから生成されたオブジェクトか確認する

const instance = new F(1,2);
console.log(instance); // F {a: 1, b: 2}
console.log(instance instanceof F); // true

function E(a, b) {
    this.a = a;
    this.b = b;
    return {a: 1};
}

const instance2 = new E(1,2);
console.log(instance2); // {a: 1}
console.log(instance2 instanceof E); // false
console.log(instance2.__proto__ === E.prototype); // false
console.log(instance2.__proto__ === Object.prototype); // true
console.log(instance2.__proto__);


function fn(arg) {
    if(arg instanceof Array) {
        arg.push('value');
    } else {
        arg['key'] = value;
    }
    console.log(arg);
}

fn([]);