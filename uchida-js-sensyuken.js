// 内田が担当する部分に関するjsを記述しています


// 日時の表示
let date = Date();
console.log(date);

// メンバーの名前に関する記述
const membersArray = ['うちだ', 'やすたけ', 'たかだ', 'ふじさき', 'しおつき', 'ふじむら', 'きよしま', 'ほりい',];

// 仕事の配列を作成する,仕事のデータは外部に保管しないと消える
const workArray = [
    {
        name: 'トイレ(3F/4F)そうじ',
        workContent: '内容はトイレの張り紙を見てね',
    },
    {
        name: '買い出し',
        workContent: '買い物リストを見て買ってきてね',
    },
    {
        name: '玄関そうじ',
        workContent: '内容は玄関の張り紙を見てね',
    },
    {
        name: 'フロア(3F/4F)そうじ',
        workContent: '内容はリビングの張り紙を見てね',
    },
    {
        name: 'ゴミ出し',
        workContent: '燃えるゴミは,火曜・金曜,燃えないゴミは、水曜.詳細はキッチンの張り紙を見てね',
    },
    {
        name: '風呂そうじ',
        workContent: '内容は脱衣所の張り紙を見てね',
    },
    {
        name: 'キッチンそうじ',
        workContent: '内容はキッチンの張り紙を見てね',
    },
    {
        name: 'リビングそうじ',
        workContent: '内容はリビングの張り紙を見てね',
    },
];

// 仕事を作成して、firebaseに保存する記述
$("#work_create").on("click", function () {
    // 作成に必要な処理
    const workCreateArray = [];
    const data = {
        name: $("#name_of_work").val(),
        workContent: $("#explain_of_work").val(),
    };
    workCreateArray.push(data);
    console.log(data);
    // collection,collection名を指定しないとaddDocがエラーになる
    addDoc(collection(db, 'work'), data);
    $('#name_of_work').val('');
    $('#explain_of_work').val('');

});


// メンバーの名前、仕事をタグ付して、htmlにする配列
function membersBoxDisplay() {
    const membersBoxArray = [];
    for (let i = 0; i < membersArray.length; i++) {
        membersBoxArray.push(`<div class="membersBox"><p class="name_tag_u">${membersArray[i]}</p><p>担当: ${workArray[i].name}</p><p>${workArray[i].workContent}</p></div>`);
    }
    $('#member_list_box').html(membersBoxArray);
}
membersBoxDisplay();



// 担当の仕事を入れ替える処理についての記述
// 配列の要素をシャッフルする関数
function arrayShuffle(array) {
    for (let i = (array.length - 1); 0 < i; i--) {

        // 0〜(i+1)の範囲で値を取得
        let r = Math.floor(Math.random() * (i + 1));

        // 要素の並び替えを実行
        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }
    return array;
}
// '入れ替え実行ボタンを押すと配列の要素が並び変わる'
$('#work_mixing_btn').on('click', function () {
    arrayShuffle(workArray);
    console.log(workArray);
    membersBoxDisplay();//配列が並び変わったので、名前と仕事のhtmlを作り直す
});





// 仕事の配列から、自分の担当の仕事（インデックス番号）をタグ付して、表示させる
let myworkArray = [];
myworkArray.push(workArray[7]);//自分の仕事の番号を参照できる必要がある
myworkArray.push(`<li>${workArray[7].name}</li><li>${workArray[7].workContent}</li>`);
console.log(myworkArray);
$('#mywork_box_work').html(myworkArray);


// 仕事をボタンにして表示させ、削除するものをクリックして選択し、削除決定ボタンで削除する
// 仕事の配列から、ボタンを作成する処理
function deleteBtnCreate() {
    const deleteBtnArray = [];
    for (let i = 0; i < workArray.length; i++) {
        deleteBtnArray.push(`<li><button id="deleteBtn" value="${i}">${workArray[i].name}</button></li>`);
    }
    $('#delete_btn_box').html(deleteBtnArray);
}
deleteBtnCreate();

// 仕事のbtnをクリックすると、アラートを出して、'削除決定'をクリックして、削除
// アラート、分岐の処理
function workDelete() {
    if (confirm('この仕事を削除しますか？')) {
        // 配列から削除する処理
        workArray.splice(0, value);
        console.log('workArray');
    } else {
        console.log('削除しなかった');
    }
}
$('#deleteBtn').on('click', function (e) {
    console.log(e.target.value);
    if (confirm('この仕事を削除しますか？')) {
        // 配列から削除する処理
        workArray.splice(0, e.target.value + 1);
        deleteBtnCreate();
        // console.log(workArray);
        // $('#mywork_box_work').html(myworkArray);
    } else {
        console.log('削除しなかった');
    }
});

// 仕事を作成（追加）する
$('#work_create').on('click', function () {
    // alert('ok');
    const workNameData = $('#name_of_work').val();
    const workExplainData = $('#explain_of_work').val();
    workArray.push({ name: workNameData, workContent: workExplainData });
    console.log(workArray);

});

// 仕事を削除する workArrayにfilterを使う



// 仕事の追加、削除、割当の同期管理が難しい、一旦中断
// 他の人には、担当の仕事（インデックス番号）を割り当てる
// 一定の周期(setIntarval的な?)で、仕事を変更する、インデックス番号をずらす
