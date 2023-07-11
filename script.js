"use strict";

// 👇ローカルストレージからデータを取得
const populateTableFromLocalStorage = () => {
    const jsonData = localStorage.getItem("inputData");
    if (jsonData) {
        const data = JSON.parse(jsonData);
        setTableData("table1", data.table1);
        setTableData("table2", data.table2);
        setTableData("table3", data.table3);
    }
};

// 👇テーブルに入力
const setTableData = (tableId, data) => {
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName("tr");

    // 各行のデータをセット
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        // 各セルのデータをセット
        for (let j = 0; j < cells.length; j++) {
            const textarea = cells[j].querySelector("textarea");
            // データをセット
            if (textarea && data.length > 0) {
                textarea.value = data.shift();
            }
        }
    }
};

// 👇入力完了ボタン処理
const pushInputCompleteButton = () => {
    // テーブルのデータを取得
    const table1Data = getTableData("table1");
    const table2Data = getTableData("table2");
    const table3Data = getTableData("table3");
    // データを結合してJSONに変換
    const jsonData = JSON.stringify({
        table1: table1Data,
        table2: table2Data,
        table3: table3Data,
    });
    // ローカルストレージに保存
    localStorage.setItem("inputData", jsonData);
    location.href = "result.html";
};

// 👇各テキストエリアの値を取得
const getTableData = (tableId) => {
    const table = document.getElementById(tableId);
    const textarea = table.querySelectorAll("textarea");
    const data = [];
    Array.from(textarea).forEach((textarea) => {
        data.push(textarea.value);
    });
    return data;
};

// 👇オールクリアボタン処理
const pushClearButton = () => {
    if (!confirm("本当にデータをクリアしますか？")) {
        return;
    }
    // テーブルの値を消去する
    localStorage.clear();
    location.reload();
};

// 👇変数宣言
const inputAllElements = document.querySelectorAll("table textarea");
const inputAllElementsArray = Array.from(inputAllElements);

// 👇ページ読み込み時の処理
populateTableFromLocalStorage();
