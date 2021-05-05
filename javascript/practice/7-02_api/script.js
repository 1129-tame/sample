'use strict';

// geolocation
function success(pos) {
    ajaxRequest(pos.coords.latitude, pos.coords.longitude);
}

function fail(error) {
    alert('位置情報の取得に失敗しました。エラーコード：' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);

// データ取得
async function ajaxRequest(lat, long) {
    const appId = '9e163a3723576c6555670dd272585e1b';
    const url = 'https://api.openweathermap.org/data/2.5/forecast?' + `lat=${lat}&lon=${long}&appid=${appId}&units=metric&lang=ja`;
    
    // ?lat={lat}&lon={lon}&appid={API key}
    const request = await fetch(url);
    const data = await request.json();
    console.log(data); 
    console.log(url);
    console.log(lat);
    console.log(long);
}