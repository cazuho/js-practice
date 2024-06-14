// 段落を作成し文言を書き込みbodyに追加する関数
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "ボタンが押されました!";
    document.body.appendChild(para);
}

// ボタンを全て取得
const buttons = document.querySelectorAll("button");

// ボタンをクリック時に createParagraph 関数を呼び出す
for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}
