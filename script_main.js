"use strict";
// Please don't delete the 'use strict' line above

let notPushButton = document.getElementById("notPushButton");
let unicorn = document.getElementById("unicorn");

// gifを配列に入れる
const url = "pictures/";
const gifCount = 4;
const pictures = [];
for (let i = 0; i <= gifCount; i++) {
    pictures[i] = `${url}unicorn_${i}.gif`;
}

// ボタンが押された処理
notPushButton.addEventListener("click", notPushButtonClick);

async function notPushButtonClick() {
    for (const element of pictures) {
        unicorn.src = element;
        await wait(2);
    }
    unicorn.src = url + "unicorn_none.png";
    await wait(6);
    unicorn.src = url + "unicorn_half.gif";
    await wait(6);
    unicorn.src = url + "unicorn_0.gif";
}

// 待機処理
const wait = (sec) => {
    return new Promise((resolve) => {
        setTimeout(resolve, sec * 1000);
    });
};
