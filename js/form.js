// ページ読み込み時に実行
document.addEventListener("DOMContentLoaded", function() {
    // Qに関連する要素を取得
    const q1Section = document.getElementById('Q01'); // Q1のセクションを取得
    const q1RadioBtn = document.querySelectorAll('input[name="q01"]');
    const current01  = document.querySelector('.-current01');

    const q2Section = document.getElementById('Q02'); // Q2のセクションを取得
    const q2RadioBtn = document.querySelectorAll('input[name="q02"]');
    const current02  = document.querySelector('.-current02');

    const q3Section = document.getElementById('Q03'); // Q3のセクションを取得
    const q3RadioBtn = document.querySelectorAll('input[name="q03"]');
    const current03  = document.querySelector('.-current03');

    const q4Section = document.getElementById('Q04'); // Q4のセクションを取得
    const q4RadioBtn = document.querySelectorAll('input[name="q04"]');
    const current04  = document.querySelector('.-current04');

    // ポップアップ関連要素の取得
    const popupTrigger = document.querySelector('label[for="popup01"]');
    const popup01 = document.getElementById('popup01');
    const popupBtn = document.getElementById('popup01-btn');

    // 前Qが選択されているかチェックする関数
    function isQ1Selected() { return [...q1RadioBtn].some(radio => radio.checked); }
    // function isQ2Selected() { return [...q2RadioBtn].some(radio => radio.checked); }
    function isQ3Selected() { return [...q3RadioBtn].some(radio => radio.checked); }
    function isQ4Selected() { return [...q4RadioBtn].some(radio => radio.checked); }

    // 全ての質問が選択されているかチェックする関数
    function areAllQuestionsSelected() {
        return isQ1Selected() && isQ3Selected() && isQ4Selected();
        // return isQ1Selected() && isQ2Selected() && isQ3Selected() && isQ4Selected();
    }

    // ボタンの有効/無効を切り替える関数
    function togglePopupBtn() {
        if (areAllQuestionsSelected()) {
            popupBtn.classList.remove('disabled');  // ボタンを有効化
            popupBtn.style.pointerEvents = 'auto';  // クリック可能にする
        } else {
            popupBtn.classList.add('disabled');     // ボタンを無効化
            popupBtn.style.pointerEvents = 'none';  // クリック不可にする
        }
    }

    // 初期状態でボタンを無効化
    togglePopupBtn();

    // ラジオボタンにイベントリスナーを追加
    q1RadioBtn.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (radio.checked) {
                // 選択されている場合はスタイルを追加
                current01.classList.add('selected');
                // Q1が選択されたらQ2にスクロール
                setTimeout(() => q2Section.scrollIntoView({ behavior: 'smooth' }), 200); // スクロールにタイムアウトを追加
                togglePopupBtn(); // ボタン状態をチェック
            }
        });
    });

    // q2RadioBtn.forEach(function(radio) {
    //     radio.addEventListener('change', function(event) {
    //         if (!isQ1Selected()) {
    //             // Q1が選択されていない場合、Q2の選択をキャンセルし、Q1にスクロール
    //             event.preventDefault();  // Q2の選択をキャンセル
    //             q1Section.scrollIntoView({ behavior: 'smooth' });  // Q1にスクロール
    //             return;
    //         }
    //         if (radio.checked) {
    //             // 選択されている場合はスタイルを追加
    //             current02.classList.add('selected');
    //             setTimeout(() => q3Section.scrollIntoView({ behavior: 'smooth' }), 200);
    //             togglePopupBtn(); // ボタン状態をチェック
    //         }
    //     });
    // });

    q3RadioBtn.forEach(function(radio) {
        radio.addEventListener('change', function(event) {
            if (!isQ2Selected()) {
                // Q2が選択されていない場合、Q3の選択をキャンセルし、Q2にスクロール
                event.preventDefault();  // Q3の選択をキャンセル
                q2Section.scrollIntoView({ behavior: 'smooth' });  // Q2にスクロール
                return;
            }
            if (radio.checked) {
                // 選択されている場合はスタイルを追加
                current03.classList.add('selected');
                setTimeout(() => q4Section.scrollIntoView({ behavior: 'smooth' }), 200);
                togglePopupBtn(); // ボタン状態をチェック
            }
        });
    });

    q4RadioBtn.forEach(function(radio) {
        radio.addEventListener('change', function(event) {
            if (!isQ3Selected()) {
                // Q3が選択されていない場合、Q4の選択をキャンセルし、Q3にスクロール
                event.preventDefault();  // Q4の選択をキャンセル
                q3Section.scrollIntoView({ behavior: 'smooth' });  // Q3にスクロール
                return;
            }
            if (radio.checked) {
                current04.classList.add('selected');
                togglePopupBtn(); // ボタン状態をチェック
            }
        });
    });


    // ポップアップの表示と非表示の制御
    popupTrigger.addEventListener('click', function() {
        if (areAllQuestionsSelected()) {
            popup01.classList.add('visible'); // 全て選択されている場合にポップアップを表示
        }
    });
});
