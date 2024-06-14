// 1から100までのランダムな数を生成
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

// ゲームの状態を管理する変数
// 予想回数　
let guessCount = 1;
// リセットボタン
let resetButton;
// 入力欄にフォーカス
guessField.focus();

function checkGuess() {
    // 入力から数値を取得
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "前の推測:";
    }
    // 全ての推測を表示
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    // 正解の場合
    if (userGuess === randomNumber) {
        lastResult.textContent = "おめでとうございます！正解です！";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    // 10回目の推測で間違えた場合
    } else if (guessCount === 10) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent = "";
        setGameOver();
    // それ以外の場合
    } else {
        lastResult.textContent = "間違いです！";
        lastResult.style.backgroundColor = "red";
        // 正解よりも低いか高いかに応じてヒントを表示
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "前回の推測は低すぎました！";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "前回の推測は高すぎました！";
        }
    }

    // 推測回数を増やす
    guessCount++;
    // 初期化
    guessField.value = "";
    guessField.focus();
}

// 送信ボタンにイベントリスナーを追加
guessSubmit.addEventListener("click", checkGuess);

// ゲームオーバー時の処理
function setGameOver() {
    // 入力欄を無効化
    guessField.disabled = true;
    // 送信ボタンを無効化
    guessSubmit.disabled = true;
    // リセットボタンを追加
    resetButton = document.createElement("button");
    resetButton.textContent = "新しいゲームを始める";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

// ゲームをリセット
function resetGame() {
    // カウントをリセット
    guessCount = 1;

    // class resultParasに含まれるすべての段落をリセット
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    // リセットボタンを削除
    resetButton.parentNode.removeChild(resetButton);

    // 入力欄や送信ボタンを有効化
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
