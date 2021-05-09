const person = {
    name: 'Tom',
    bye: () => {
        console.log('Bye ' + this.name);
    },
    hello: function (greeting) {
        console.log(greeting + ' ' + this.name);
        return greeting + ' ' + this.name;
    },
    /**
     * 問題４：
     * 1秒後に"hello Tom"
     * と出力されるような、メソッドを
     * personオブジェクトに追加してみてください。
     * 
     * 以下のように使用するものとします。
     * `person.hello1s()` 
     * -> 1秒後に"hello Tom"と出力
     * 
     * 3通りの方法で実装してみてください。
     * １．bind
     * ２．アロー関数
     * ３．thisを一旦変数に代入
     */
    hello1s: function () {
        setTimeout(this.hello.bind(this, 'hello1'), 1000);
    },
    // thisはレキシカルスコープを参照
    hello2s() {
        setTimeout(() => this.hello('hello2'), 1000);
    },
    hello3s() {
        const _this = this;
        setTimeout(function() {
            _this.hello('hello3');
        }, 1000)
    }

    
}
// bindを用いた方法
person.hello1s();
// アロー関数を用いた方法
person.hello2s();
// thisを一旦変数に代入する方法
person.hello3s();




/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
setTimeout(function () {
    person.hello('hello');
}, 1000);

setTimeout(person.hello.bind(person, 'hello!'), 1000)

/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
// alert(person.hello('hello')); // 引数は文字列

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
setTimeout(function() {
    const byeTom = person
    byeTom.bye = function() {
        console.log('Bye ' + this.name);
    }
    byeTom.bye();
}, 1000);