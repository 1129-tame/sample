function addNumberFactory(num) {
    function addNumber(value) {
        return num + value;
    }
    return addNumber;
}

const add5 = addNumberFactory(5); // numに値代入した状態
const add10 = addNumberFactory(10);
const result = add10(10);// 10+5
console.log(result);