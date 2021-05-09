const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
// this-> 呼び出し元へのオブジェクトへの参照

person.hello();