document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form'); // フォームを取得
    const submitButton = document.getElementById('submit'); // 送信ボタンを取得
    const modal = document.getElementById('popup01'); // モーダルを取得 (IDは適宜変更)

    // フォームの送信を監視
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // 通常のフォーム送信を防ぐ

        // 送信処理を実行 (ここでは例としてAJAXで送信する場合)
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // 送信成功時の処理
                alert('送信完了しました。アンケートにご協力いただき誠にありがとうございます！！');  // ダイアログで送信完了を表示

                // モーダルを閉じる処理
                modal.classList.remove('visible');  // モーダルのvisibleクラスを削除して非表示にする

                // 必要に応じてフォームをリセットする
                form.reset();
            } else {
                // エラーハンドリング
                alert('送信に失敗しました。再試行してください。');
            }
        })
        .catch(error => {
            // ネットワークエラー等のハンドリング
            alert('エラーが発生しました。再試行してください。');
        });
    });
});