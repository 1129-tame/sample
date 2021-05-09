function a(name, name1) {
    console.log('hello ' + name + name1);
}

const tim = {name: 'Tim'};

// bind
const b = a.bind(tim);
b();
// apply(thisの値, nameの値, name1の値)
a.apply(tim, ['Tim', 'Bob']);
a.call(tim, 'Tim', 'Bob');

const arry = [1,2,3,4,5];

// ES5の使い方
// const result = Math.max.apply(null, arry);
const result = Math.max(...arry);
console.log(result);

// bind->使用時点で実行はしない
// call,apply->同時に関数を実行する




