'use strict';

// geolocation
function success(pos) {
    ajaxRequest(pos.coords.latitude, pos.coords.longitude);
}

function fail(error) {
    alert('位置情報の取得に失敗しました。エラーコード：' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);

// UTCをミリ秒に
function utcToJSTime(utcTime) {
    return utcTime * 1000;
}

// データ取得
async function ajaxRequest(lat, long) {
    const appId = '9e163a3723576c6555670dd272585e1b';
    const url = 'https://api.openweathermap.org/data/2.5/forecast?' + `lat=${lat}&lon=${long}&appid=${appId}&units=metric&lang=ja`;
    
    // ?lat={lat}&lon={lon}&appid={API key}
    const request = await fetch(url);
    const data = await request.json();
    console.log(data); 
    // console.log(url);
    // console.log(lat);
    // console.log(long);

    // 都市名・国名
    console.log('都市名：' + data.city.name);
    console.log('国名：' + data.city.country);
    document.getElementById('place').textContent =  data.city.name + ',' + data.city.country;

    // 天気予報データ
    data.list.forEach(function(forecast, index) {
        const dataTime = new Date(utcToJSTime(forecast.dt));
        const month = dataTime.getMonth() + 1;
        const date = dataTime.getDate();
        const hours = dataTime.getHours();
        console.log(month);
        const min = String(dataTime.getMinutes()).padStart(2, '0');
        const temperature = Math.round(forecast.main.temp);
        const description = forecast.weather[0].description;
        const iconPath = `images/${forecast.weather[0].icon}.svg`;

        console.log('日時：' + `${month}/${date} ${hours}:${min}`);
        console.log('気温：' + temperature);
        console.log('天気：' + description);
        console.log('画像パス：' + iconPath);

        if (index === 0) {
            const currentWeather = `
            <div class="icon"><img src="${iconPath}"></div>
            <div class="info">
                <p>
                    <span class="description">現在の天気：${description}</span>
                    <span class="temp">${temperature}</span>℃
                </p>
                </div>`;
                console.log(currentWeather);
            document.getElementById("weather").insertAdjacentHTML("beforeend", currentWeather);
        } else {
            const tableRow = `
            <tr>
                <tb class="info">
                    ${month}/${date} ${hours}:${min}
                </tb>
                <td class="icon"><img src="${iconPath}"></td>
                <td><span class="description">${description}</span></td>
            </tr>`;
            document.getElementById("forecast").insertAdjacentHTML("beforeend", tableRow);
        }
    });
}