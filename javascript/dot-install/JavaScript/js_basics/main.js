'use strict';

{
    // function update() {
    //     document.getElementById('target').textContent = 'Changed!';
    // }

    // document.querySelector('button').addEventListener('click', () => {
    //     document.getElementById('target').textContent = 'Changed!';
    // })

    // const scores = [80, 90, 40];
    // scores.push(60, 70);
    // scores.shift(); // 先頭要素削除
    // scores.splice(1, 2);
    // scores.splice(1, 1, 30, 40);

    // console.log(`Score; ${scores[0]}`);
    // console.log(`Score; ${scores[1]}`);
    // console.log(`Score; ${scores[2]}`);
    // scores.forEach(element => {
    //     console.log('Scores: ', element);
    // });
    // for (let i = 0; i < scores.length; i++) {
    //     const element = scores[i];
    //     console.log(`Scores[${i}]: `, element);
        
    // }
    
}

{
    // const otherScores = [10, 20];
    // const scores = [80, 90, 40, 70, ...otherScores]; // スプレッド構文
    // console.log(scores);

    // function sum(a, b) {
    //     console.log(a + b);
    // }

    // sum(...otherScores);
}

{
    // 分割代入
    // const scores = [80, 90, 40, 70];

    // const [a, b, c, d] = scores;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);

    // const [f, e, ...others] = scores;
    // console.log(f);
    // console.log(e);
    // console.log(others);

    // let x = 30;
    // let y = 70;
    // [x, y] = [y, x];
    // console.log(x);
}

{
    // forEach
    // const scores = [80, 90, 40, 70];

    // scores.forEach((score, index) => {
    //     console.log(`Score${index}: ${score}`);
    // });
}

{
    // map() 配列の変更

    const prices = [180, 190, 200];

    const updatePrices = prices.map(element => element + 20);
    console.log(updatePrices);
}

{
    // filter() 配列の要素の抽出
    const numbers = [1, 4, 7, 8, 10];

    // const evenNumbers = numbers.filter(number => {
    //     if (number % 2 === 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });

    const evenNumbers = numbers.filter(number => number % 2 === 0);

    console.log(evenNumbers);

    const d = ['フルメタル', 2342, 324];

    const d2 = d.filter(d => d === 'フルメタル' || d === 324);
    console.log(d2);
}

