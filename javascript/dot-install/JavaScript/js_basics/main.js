'use strict';

{
    // function update() {
    //     document.getElementById('target').textContent = 'Changed!';
    // }

    // document.querySelector('button').addEventListener('click', () => {
    //     document.getElementById('target').textContent = 'Changed!';
    // })

    const scores = [80, 90, 40];

    console.log(`Score; ${scores[0]}`);
    console.log(`Score; ${scores[1]}`);
    console.log(`Score; ${scores[2]}`);
    scores.forEach(element => {
        console.log('Scores: ', element);
    });
    for (let i = 0; i < scores.length; i++) {
        const element = scores[i];
        console.log(`Scores[${i}]: `, element);
        
    }
}