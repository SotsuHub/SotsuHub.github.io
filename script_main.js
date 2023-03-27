"use strict";
// Please don't delete the 'use strict' line above

// 初期設定
let notPushButton = document.getElementById("notPushButton");
let unicorn = document.getElementById("unicorn");
let count = 1;
let runFlag = 0;

// gifを配列に入れる
const url = "pictures/";
const gifCount = 4;
const pictures = [];
for (let i = 0; i <= gifCount; i++) {
    pictures[i] = `${url}unicorn_${i}.gif`;
}
pictures.push(`${url}unicorn_none.png`);
pictures.push(`${url}unicorn_half.gif`);

// ボタンが押された処理
notPushButton.addEventListener("click", notPushButtonClick);

async function notPushButtonClick() {
    console.log("count:" + count);
    if (runFlag === 0) {
        if (count === 1 || count === 2) {
            runFlag = 1;
            unicorn.src = pictures[0];
            await wait(5);
            unicorn.src = pictures[1];
            count++;
            runFlag = 0;
        } else if (count === 3) {
            runFlag = 1;
            for (let i = 0; i <= gifCount; i++) {
                unicorn.src = pictures[i];
                await wait(2.8);
            }
            unicorn.src = pictures[5];
            await wait(7);
            unicorn.src = pictures[6];
            await wait(7);
            unicorn.src = pictures[0];
            await wait(7);
            unicorn.src = pictures[1];
            count = 1;
            runFlag = 0;
        } else {
            count = 1;
        }
    }
}

// 待機処理
const wait = (sec) => {
    return new Promise((resolve) => {
        setTimeout(resolve, sec * 1000);
    });
};
