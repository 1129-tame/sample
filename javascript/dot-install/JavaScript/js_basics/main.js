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

    // const prices = [180, 190, 200];

    // const updatePrices = prices.map(element => element + 20);
    // console.log(updatePrices);
}

{
    // filter() 配列の要素の抽出
    // const numbers = [1, 4, 7, 8, 10];

    // // const evenNumbers = numbers.filter(number => {
    // //     if (number % 2 === 0) {
    // //         return true;
    // //     } else {
    // //         return false;
    // //     }
    // // });

    // const evenNumbers = numbers.filter(number => number % 2 === 0);

    // console.log(evenNumbers);

    // const d = ['フルメタル', 2342, 324];

    // const d2 = d.filter(d => d === 'フルメタル' || d === 324);
    // console.log(d2);
}

{
    // const point = {
    //     x: 100,
    //     y: 180,
    //     werw: function() {
    //         console.log(223);
    //     }
    // };

    // point.x = 120;
    
    // console.log(point['x']);

    // point.z = 90;
    // delete point.y;
    // console.log(point);
}

{
    // const otherProps = {
    //     r: 4,
    //     color: 'red',
    // }

    // const point = {
    //     x: 100,
    //     y: 180,
    //     ...otherProps,
    // };
    // console.log(point);

    // const {x, r, ...others} = point;
    // console.log(x, r);
}

{
    // 配列の操作
    // const point = {
    //     x: 100,
    //     y: 180,
    // };

    // const keys = Object.keys(point);
    // keys.forEach(keys => {
    //     console.log(`key: ${keys} Value: ${point[keys]}`); // 文字列の中でドット記法は使えない
    // })

    // // 配列の中にオブジェクトを作る
    // const point2 = [
    //     {x: 30, y: 20},
    //     {x: 10, y: 50},
    //     {x: 40, y: 40},
    // ];
    // console.log(point2[2].y);
}

{
    // オブジェクトの参照
    // let x = 1;
    // let y = x;
    // x = 5;
    // console.log(x);
    // console.log(y);

    // let x = [1, 2];
    // let y = x;
    // x[0] = 5;
    // console.log(x);
    // console.log(y);

//     let x = [1, 2];
//     let y = [...x];
//     x[0] = 5;
//     console.log(x);
//     console.log(y);
// }
// {
//     const str = 'hello';

    // console.log(str.length);

    // str.substring(開始位置, 終了位置);
    // console.log(str.substring(1, 4));

    // console.log(str[1]); // e

}

{
    // const d = [2019, 11, 14];

    // console.log(d.join());

    // const t = '17:08:24';
    // // console.log(t.split(':'));
    // const [hour, minute, second] = t.split(':');
    // // console.log(hour);
    // // console.log(minute);
    // // console.log(second);
}

{
    // 数値を操作してみよう
    // const scores = [10, 3, 9];
    // let sum = 0;

    // scores.forEach(score => {
    //     sum += score;
    // })
    // const avg = sum / scores.length;
    // console.log(sum);
    // console.log(avg);

    // console.log(Math.floor(avg)); // 7 切り捨て
    // console.log(Math.ceil(avg)); // 8 切り上げ
    // console.log(Math.round(avg)); // 7 四捨五入
    // console.log(avg.toFixed(3)); // 7.333 小数点指定

    // console.log(Math.floor(Math.random() * 6) + 1);
}

{
    // const d = new Date();
    // const hour = d.getHours();
    // const min = d.getMinutes();
    // const month = d.getUTCMonth() + 1;
    // const date = d.getDate();
    // console.log(`${month}月${date}日`);
    // console.log(hour + ':' + min);
}

{
    // const d = new Date(2019, 10); // 2019/11/1 00:00:00
    // d.setHours(10, 20, 30);
    // d.setDate(31); // 2019/12/01
    // console.log(d);
}

{
    // alert('hello');

    // const answer = confirm('削除しますか？');
    // if (answer) {
    //     console.log('削除しました。');
    // } else {
    //     console.log('削除しませんでした。');
    // }
}

{
    // 同じ感覚で実行し続ける
    // let i = 0
    // function showTime() {
    //     console.log(new Date());
    //     i++;
    //     if (i > 4) {
    //         clearInterval(intervallId);
    //     }
    // }
    // const intervallId = setInterval(showTime, 1000);

    // showTime();
}

{
    // 処理を一回だけ実行する
    // let i = 0;
    // function showTime() {
    //     console.log(new Date());
    //     const timeoutId = setTimeout(showTime, 1000);
    //     i++;
    //     if (i > 2) {
    //         clearTimeout(timeoutId);
    //     }
    // }

    // showTime();
    
}

{
    // setIntervalとsetTimeoutの違い
    // setInterval
    // -> setInterval関数が実行されてからのミリ秒を計測する
    // 処理が長い関数の場合重複する恐れアリ

    // setTimeout
    // ->関数実行後の時間を計測する
    // システムに負荷をかけずに繰り返し処理を実行することが可能になる。
}

{
    // 例外処理
    // 大文字に変える処理
    // const name = 1234;

    // try {
    //     console.log(name.toUpperCase());
    // } catch (e) {
    //     console.log(e); // プログラムが強制終了することがなくなる
    // }
    

    // console.log('Finish!');
}

{
    const posts = [
        {
            text: 'Javascriptの勉強中…',
            likeCount: 0,
            show() {
                console.log(`${this.text} - ${this.likeCount}いいね`);
            },
        },
        {
            text: 'プログラミング楽しい！',
            likeCount: 0,
        },
    ];

    // function show(post) {
    //     console.log(`${post.text} - ${post.likeCount}いいね`);
    // }

    // posts[0].show();
    // posts[1].show();
    
}

{
    // クラスの作り方
    // プロパティは直接操作しない！
    class Post { // 親クラス
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }

        show() {
            console.log(`${this.text} - ${this.likeCount}いいね`);
        }

        like() {
            this.likeCount++;
            this.show();
        }
        // 静的メソッド thisは使えない
        static showInfo() {
            console.log('Post class version 1.0');
        }
    }

    class SponsoredPost extends Post { // 小クラス
        constructor(text, sponsor) {
            super(text);
            this.sponsor = sponsor;
        }

        show() {
            super.show();
            console.log(`... sponsored by ${this.sponsor}`);
        }
    }



    const posts = [
        new Post('Javascriptの勉強中…'),
        new Post('プログラミング楽しい！'),
        new SponsoredPost('3分動画でマスター', 'dotinstall'),
    ] 

    posts[0].like();
    // Post.showInfo();
    posts[2].show();

}

