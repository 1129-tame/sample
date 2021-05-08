function hello(name) {
    name = name || 'trou';
    // trueの値があれば入るなければトムになる
    console.log('Hello ' + name);
}

hello();

let name = 'Bob';

name && hello(name);

// デフォルト引数が多くなる