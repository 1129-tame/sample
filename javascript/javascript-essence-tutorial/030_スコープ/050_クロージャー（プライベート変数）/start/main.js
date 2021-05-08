// クロージャー
// ->レキシカルスコープの変数を関数が使用している状態

function incrementFactory() {

    let num = 0; // スコープ内で宣言

    function increment() {
        num = num + 1;
        console.log(num);
    }
    return increment;
}


const increment = incrementFactory(); // 戻り地に関数

increment();
increment();
increment();
increment();

// incrementFactoryに変数宣言することで、勝手に変数が書き換わらないようにしている