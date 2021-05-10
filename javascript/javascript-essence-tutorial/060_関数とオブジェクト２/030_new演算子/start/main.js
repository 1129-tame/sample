// new演算子
// コンストラクター関数からインスタンスをさくせいするために使用する演算子

function F(a, b) {
    this.a = a;
    this.b = b;
    return {};
}

F.prototype.c = function() {}

const instance = new F(1, 2);
console.log(instance); // リターンがオブジェクト以外ならF {a: 1, b: 2}
console.log(instance); // リターンがオブジェクトならオブジェクトだけ返すプロトタイプも無視

function newOpe(C, ...args) {
    const _this = Object.create(C.prototype); // 空のオブジェクトを生成し関数を引き継ぐ
    const result = C.apply(_this, args); // C.apply(this, 配列)
    console.log(result); // {} undefined
    console.log(_this); // {} F {a: 1, b: 2}
    console.log(typeof result); // Object undefined
    if (typeof result === "object" && result !== null) {
        return result;
    }
    console.log(args); // (2) [1, 2] (2) [1, 2]
    return _this;
}

const instance2 = newOpe(F, 1, 2);
console.log(instance2); // {} F {a: 1, b: 2}