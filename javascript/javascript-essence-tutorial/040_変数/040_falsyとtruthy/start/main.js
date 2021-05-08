// falsy -> Booleanで真偽値に変換した場合にfalseになる値のこと
// false null 0 0n NaN
// truthy -> それ以外

let a = parseInt("");
console.log(Boolean(a));
console.log(a);

if(!a) {
    console.log('hello');
} else {
    console.log('bye');
}

