'use strict';

// fetch thenの用法
//  function callApi() {
//     // 処理
//     fetch("https://jsonplaceholder.typicode.com/users").then(function(res) {
//         return res.json();
//     })
//     .then(function(users) {
//         console.log(users);
//     });
// }

// async function => 非同期関数
// async function callApi() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();
//     console.log(users);
// }

// XMLHttpRequestの使い方
function callApi() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function() {
        console.log(this.response);
    }
}

callApi();