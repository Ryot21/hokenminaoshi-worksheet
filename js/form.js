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



    // 前Qが選択されているかチェックする関数
    function isQ1Selected() {return [...q1RadioBtn].some(radio => radio.checked);}
    function isQ2Selected() {return [...q2RadioBtn].some(radio => radio.checked);}
    function isQ3Selected() {return [...q3RadioBtn].some(radio => radio.checked);}

    // ラジオボタンにイベントリスナーを追加
    q1RadioBtn.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (radio.checked) {
                // 選択されている場合はスタイルを追加
                current01.classList.add('selected');
                // Q1が選択されたらQ2にスクロール
                q2Section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    q2RadioBtn.forEach(function(radio) {
        radio.addEventListener('change', function(event) {
            if (!isQ1Selected()) {
                // Q1が選択されていない場合、Q2の選択をキャンセルし、Q1にスクロール
                event.preventDefault();  // Q2の選択をキャンセル
                q1Section.scrollIntoView({ behavior: 'smooth' });  // Q1にスクロール
            }
            if (radio.checked) {
                // 選択されている場合はスタイルを追加
                current02.classList.add('selected');
            }
        });
    });
    q3RadioBtn.forEach(function(radio) {
        radio.addEventListener('change', function(event) {
            if (!isQ2Selected()) {
                // Q1が選択されていない場合、Q3の選択をキャンセルし、Q2にスクロール
                event.preventDefault();  // Q2の選択をキャンセル
                q2Section.scrollIntoView({ behavior: 'smooth' });  // Q1にスクロール
            }
            if (radio.checked) {
                // 選択されている場合はスタイルを追加
                current03.classList.add('selected');
                // Q1が選択されたらQ2にスクロール
                q4Section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    q4RadioBtn.forEach(function(radio) {
        radio.addEventListener('change', function(event) {
            if (!isQ3Selected()) {
                // Q1が選択されていない場合、Q4の選択をキャンセルし、Q3にスクロール
                event.preventDefault();  // Q4の選択をキャンセル
                q3Section.scrollIntoView({ behavior: 'smooth' });  // Q3にスクロール
            }
            if (radio.checked) {current04.classList.add('selected');}
        });
    });
});
