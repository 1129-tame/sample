window.name = 'John';


const person = {
    name: 'Tom',
    hello() {
        console.log('Hello ' + this.name);
        const a = () => console.log('Bye ' + this.name);
        a();
    }
}
person.hello();
// アロー関数はグローバルコンテキスト
// this,argumentを取ることが出来ない
// スコープチェーンをたどってレキシカルスコープに探しに行く

const person2 = {
    name: 'Tom',
    hello: () => {
        console.log('Hello ' + this.name);
        const a = () => console.log('Bye ' + this.name);
        a();
    }
}

person2.hello();


function b() {
    const a = () => console.log('Bye ' + this.name);
    a();
}

b();


