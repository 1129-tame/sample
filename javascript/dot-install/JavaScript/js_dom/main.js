'use strict';

{
    // function update() {
    //     // document.querySelector('#target').textContent = 'かえました。';
    //     // document.querySelectorAll('p')[2].textContent = '変わりました！';
        
    // }

    // // setTimeout(update, 1000);

    // document.getElementById('btn').onclick = update;
    
    // document.querySelector('button').addEventListener('click', () => {
    //     document.querySelectorAll('p').forEach((p, index) => {
    //         p.textContent = `${index}番目のpです。`;
    //     });
    // });
}

{
    
    // document.querySelector('button').addEventListener('click', () => {
    //     const targetNode = document.getElementById('target');

    //     // targetNode.classList.add('my-color');
    //     // targetNode.className = 'my-color';
    //     // if (targetNode.classList.contains('my-color')) {
    //     //     targetNode.classList.remove('my-color');
    //     // } else {
    //     //     targetNode.classList.add('my-color');
    //     // }
    //     // 上の処理と同じ処理を行う
    //     targetNode.classList.toggle('my-color');
    // });
}

{
    // カスタムデータ属性を使う
    // document.querySelector('button').addEventListener('click', () => {
    //     const targetNode = document.getElementById('target');

    //     // targetNode.textContent = 'Dotinstall';
    //     targetNode.textContent = targetNode.dataset.translation;
    // });
}

{
    // 要素の追加
    // li要素を作る->中身のテキストを設定する->DOMツリーに追加する
    // document.querySelector('button').addEventListener('click', () => {
    //     const item2 = document.createElement('li');
    //     item2.textContent = 'item 2';

    //     const ulNode = document.querySelector('ul');
    //     ulNode.appendChild(item2);
    // });
}

{
    // li要素を作成->DOMツリーに追加する
    // document.querySelector('button').addEventListener('click', () => {
    //     const item0 = document.querySelectorAll('li')[0];
    //     const copy = item0.cloneNode(true); //中のテキストもコピーするため

    //     const ul = document.querySelector('ul');
    //     const item2 = document.querySelectorAll('li')[2];

    //     ul.insertBefore(copy, item2); // copyをitem2の前に置く
    // });
}

{
    // 要素の削除
    // document.querySelector('button').addEventListener('click', () => {
    //     const item1 = document.querySelectorAll('li')[1];

    //     // item1.remove(); // 一部のブラウザでは使えない
    //     // 親Node.removeChild(削除するNode)
    //     document.querySelector('ul').removeChild(item1);
    // });
}

{
    // 入力値の利用
    // document.getElementById('btn2').addEventListener('click', () => {
    //     const li = document.createElement('li');
    //     const text = document.querySelector('input');
    //     li.textContent = text.value;
    //     document.getElementById('ul2').appendChild(li);

    //     text.value = '';
    //     text.focus(); // フォーカスさせるメソッド
    // });
}

{
    // selectタグを利用
    // document.getElementById('btn2').addEventListener('click', () => {
    //     const li = document.createElement('li');
    //     const color = document.querySelector('select');
    //     console.log(color);
    //     li.textContent = `${color.value} - ${color.selectedIndex}`;
    //     document.getElementById('ul2').appendChild(li);
    // });
}

{
    // document.getElementById('btn2').addEventListener('click', () => {
    //     const colors = document.querySelectorAll('input');
    //     let selectColor;

    //     colors.forEach(color => {
    //         if (color.checked === true) {
    //             selectColor = color.value;
    //         }
    //     })

    //     const li = document.createElement('li');
    //     li.textContent = selectColor;
    //     document.getElementById('ul2').appendChild(li);
    // });
}

{
    // チェックボックスでの操作
    // document.getElementById('btn2').addEventListener('click', () => {
    //     const colors = document.querySelectorAll('input');
    //     const selectedColors = [];

    //     colors.forEach(color => {
    //         if (color.checked === true) {
    //             selectedColors.push(color.value);
    //         }
    //     })

    //     const li = document.createElement('li');
    //     li.textContent = selectedColors;
    //     document.getElementById('ul2').appendChild(li);
    // });
}

{
    // document.querySelector('button').addEventListener('dblclick', () => {
    //     console.log('ダブルクリックしました。');
    // });

    // document.addEventListener('mousemove', e => {
    //     console.log(e.clientX, e.clientY);
    // });

    // document.addEventListener('keydown', e => {
    //     console.log(e.key);
    // })
    
}

{
    // const text = document.querySelector('textarea');

    // // text.addEventListener('focus', () => {
    // //     console.log('フォーカス'); // フォーカスを当てる
    // // });
    // // text.addEventListener('blur', () => {
    // //     console.log('ブラー'); // フォーカスを外す
    // // });

    // text.addEventListener('input', () => {
    //     console.log('インプット'); // 入力
    //     console.log(text.value.length); // 文字数
    // });
    // text.addEventListener('change', () => {
    //     console.log('チェンジ'); // フォーカスを外す
    // });
}

{
    // document.querySelector('form').addEventListener('submit', e => {
    //     e.preventDefault(); // ページ遷移の中止
    //     console.log('認証');
    // })
}

{
    // イベントの伝播
    document.querySelector('ul').addEventListener('click', e => {
        if (e.target.nodeName === 'LI') {
            e.target.classList.toggle('done');
        }
    })
}