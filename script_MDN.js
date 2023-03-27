"use strict";
// Please don't delete the 'use strict' line above

// 初期設定
let input = document.getElementById("input");
input.value = "";
let runButton = document.getElementById("runButton");
let resetButton = document.getElementById("resetButton");
let output = document.getElementById("output");
const word = [
    "匹しかサカナ食べれへんの？まじ？",
    "ｍ以上跳んだって・・・ほんま？",
    "日くらい晴れつづいとるがな",
    "時間しか寝てへんねん、しんどい",
    "度？えぐっ",
    "キロやせたん？どないしてん",
    "万円は高いが・・・しゃあない",
    "人ぶん？なんでやねん！",
    "杯飲んだわー、酔ったわー",
    "ヤードかー・・・さむっ",
];

// 実行ボタンのクリック処理
runButton.addEventListener("click", runButtonClick);
function runButtonClick() {
    let result;
    let program = input.value;
    console.log(program);
    if (program == "") {
        output.innerHTML = "😸 :まずは入力してみてからや";
    } else {
        // result = eval(program); //evalはevil
        result = functionExecution(program);
        if (result == "エラー") {
            output.innerHTML = "😸 : さすがにそれはエラーやって";
        } else if (typeof result === "string") {
            output.innerHTML = "😸 : それなー string いうねん";
        } else if (typeof result === "undefined") {
            output.innerHTML = "😸 : ナイことがアルのを undefined いうねん";
        } else {
            output.innerHTML = "😸 : " + result + randomWord();
        }
    }
}

// 入力されたコードの実行
function functionExecution(program) {
    try {
        // constの判定
        if (program.indexOf("const") !== -1 || program.indexOf("let") !== -1) {
            let constCode = program.slice(0, program.indexOf(";") + 1);

            let LF = program.indexOf(checkString(program)) + 1;
            program = program.slice(LF);

            return Function('"use strict";' + constCode + "return " + program)();
        } else {
            return Function('"use strict";return ' + program)();
        }
    } catch (err) {
        return "エラー";
    }
}

// リセットボタンのクリック処理
resetButton.addEventListener("click", resetButtonClick);
function resetButtonClick() {
    input.value = "";
    output.innerHTML = "";
}

// 改行の判定
function checkString(str) {
    if (str.indexOf("\r\n") > -1) {
        return "\r\n";
    } else if (str.indexOf("\n") > -1) {
        return "\n";
    } else if (str.indexOf("\r") > -1) {
        return "\r";
    }
}

// ランダムワード
function randomWord() {
    let num = Math.floor(Math.random() * word.length);
    return word[num];
}
