'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        // const resulut = ['大吉', '中吉', '凶', '末吉'];
        // const resulut = ['大吉', '大吉', '大吉', '大吉', '凶'];
        // const n = Math.floor(Math.random() * resulut.length);
        // btn.textContent = resulut[n];
        // btn.textContent = resulut[Math.floor(Math.random() * resulut.length)];

        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉'; // 5%
        } else if (n < 0.2) {
            btn.textContent = '中吉'; // 15%
        } else {
            btn.textContent = '凶'; // 80
        }

        // switch (n) {
        //     case 0:
        //         btn.textContent = '大吉';
        //         break;
        //     case 1:
        //         btn.textContent = '中吉';
        //         break;
        //     case 2:
        //         btn.textContent = '吉';
        //         break;
        //     case 3:
        //         btn.textContent = '小吉';
        //         break;
        //     case 4:
        //         btn.textContent = '凶';
        //         break;
            
        // }
    });
}

console.log(Math.floor(Math.random() * 3));