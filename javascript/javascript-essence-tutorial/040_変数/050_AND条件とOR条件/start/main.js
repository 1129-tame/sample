// && trueかfalse
// falseの値がなかった場合は一番最後の値が入る、falseがあればその値が入る
// ||
// trueの値がなければ最後の値が入る、trueがあればその値が入る

const a = 0;
const b = 1;
const c = 3;
const d = 0;
console.log(a && b && c);
console.log(a || b || c);
console.log((a || b) && c);
console.log((a || b) && (c || d));