// 関数スコープ

function a() {
    let b = 0;
    console.log(b);
}

a();

// {}で囲まれた範囲をブロックスコープ

{
    const c = 'ハローワールド';
    console.log(c);
    const d = function d() {
        console.log('d is called');
    }
    
}

d();