'use strict';

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    const quizset = shuffle([
        {
            q: '世界で一番大きな湖は？',
            c: ['カスピ海', 'カリブ海', '琵琶湖']
        },
        {
            q: 'タイタニックで主演を務めた俳優は？',
            c: ['レオナルド・ディカプリオ', 'キアヌ・リーブス', 'ジュード・ロウ']
        },
        {
            q: 'ニュー・シネマ・パラダイスの日本劇場公開年はいつか？',
            c: ['1989年', '1979年', '1999年']
        },
    ]);
    let currentNum = 0;
    let isAnswered;
    let score = 0;
    console.log(quizset);
    

    function shuffle(arr) {
        // 最後の要素のインデックスにする
        for ( let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    function checkAnswer(li) {
        // if (isAnswered === true) {
        if (isAnswered) {
            return; // 処理終了
        }
        isAnswered = true;
        if (li.textContent === quizset[currentNum].c[0]) {
            console.log('collect');
            li.classList.add('collect');
            score++;
        } else {
            console.log('wrong');
            li.classList.add('wrong');
        }

        btn.classList.remove('disabled');
    }
    
    
    function setQuiz() {
        isAnswered = false;
        question.textContent = quizset[currentNum].q; // タイトル
    
        while(choices.firstChild) {
            choices.removeChild(choices.firstChild);
        }
        // const shuffledChoices = shuffle(quizset[currentNum].c); // 元の配列の順番も変わってしまう。配列やオブジェクトはコピーではなく参照のため
        const shuffledChoices = shuffle([...quizset[currentNum].c]);
        console.log(quizset[currentNum].c);
        shuffledChoices.forEach(choice => {
            const li = document.createElement('li'); // タグ生成
            li.textContent = choice; // タグの中にテキストを入れる
            li.addEventListener('click', () => {
                checkAnswer(li); // 正誤判定
            })
            choices.appendChild(li); // 子要素に入れる
        })

        // 最後の問題に到達した場合
        if (currentNum === quizset.length - 1) {
            btn.textContent = 'Show Score';
        }
    }

    setQuiz();

    btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) {
            return;
        }
        btn.classList.add('disabled');

        // 最後の問題だったらスコア表示
        if (currentNum === quizset.length - 1) {
            // console.log(`Score: ${score} / ${quizset.length}`);
            scoreLabel.textContent = `Score: ${score} / ${quizset.length}`;
            result.classList.remove('hidden');
        } else {
            currentNum++;
            setQuiz();
        }
        
    })
}