'use strict';

{
    // 使う定数の定義
    const question = document.getElementById('question');
    const btn = document.getElementById('nextBtn');
    const button = document.getElementById('choices');
    const button2 = button.getElementsByTagName("button");
    const scoreLabel = document.querySelector('#result > p');

    const quizset = shuffle([
        {
            q: '「ファイトクラブ」「セブン」を監督したのは次のうちだれか？',
            c: ['デヴィッド・フィンチャー', 'マーティン・スコセッシ', 'リドリー・スコット', 'スパイク・リー']
        },
        {
            q: 'タイタニックで主演を務めた俳優は？',
            c: ['レオナルド・ディカプリオ', 'キアヌ・リーブス', 'ジュード・ロウ', 'ルシウス・マルフォイ']
        },
        {
            q: 'ニュー・シネマ・パラダイスの日本劇場公開年はいつか？',
            c: ['1989年', '1979年', '1999年', '2009年']
        },
    ]);
    
    let buttonIndex = 0;
    let currentNum = 0;
    let isAnswered;
    let score = 0;

    function shuffle(arr) {
        // 最後の要素のインデックスにする
        for ( let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    function checkAnswer(li) {
        if (isAnswered) {
            return; // 処理終了
        }
        isAnswered = true;
        if (li.textContent === quizset[currentNum].c[0]) {
            console.log('btn-success');
            li.classList.add('btn-success');
            score++;
        } else {
            console.log('btn-danger');
            li.classList.add('btn-danger');
        }
    }

    function setQuiz() {
        isAnswered = false;
        question.textContent = quizset[currentNum].q; // タイトル

        const shuffledChoices = shuffle([...quizset[currentNum].c]);
        console.log(quizset[currentNum].c);
        shuffledChoices.forEach(choice => {
            const btnbtn = button2[buttonIndex];
            btnbtn.classList.remove('btn-success');
            btnbtn.classList.remove('btn-danger');
            btnbtn.textContent = choice;
            btnbtn.addEventListener('click', () => {
                checkAnswer(btnbtn); // 正誤判定
            })
            buttonIndex++;
        })

        // 最後の問題に到達した場合
        if (currentNum === quizset.length - 1) {
            btn.textContent = 'スコアを見る';
        }
    }

    setQuiz();

    console.log(btn);
    btn.addEventListener('click', () => {
        // 最後の問題だったらスコア表示
        if (currentNum === quizset.length - 1) {
            console.log(`Score: ${score} / ${quizset.length}`);
            scoreLabel.textContent = `Score: ${score} / ${quizset.length}`;
            result.classList.remove('hidden');
        } else {
            currentNum++;
            buttonIndex = 0;
            setQuiz();
        }
        
    })
}
