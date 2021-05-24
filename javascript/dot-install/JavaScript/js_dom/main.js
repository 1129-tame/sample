'use strict';

{
    function update() {
        // document.querySelector('#target').textContent = 'かえました。';
        // document.querySelectorAll('p')[2].textContent = '変わりました！';
        document.querySelectorAll('p').forEach((p, index) => {
            p.textContent = `${index}番目のpです。`;
        });
    }

    setTimeout(update, 1000);
    
}