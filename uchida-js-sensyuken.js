// 内田が担当する部分に関するjsを記述しています

/*'自分の仕事'の表示ボックスに関する記述
自分の名前、担当の仕事は配列で管理する*/

// 日時の表示
let date = Date();
console.log(date);

$('#mywork_box_date').html(date);
const membersArray = [];
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

// 仕事の配列から、自分の担当の仕事（インデックス番号）をタグ付して、表示させる
const myworkArray = [];
myworkArray.push(workArray[7]);
myworkArray.push(`<li>${workArray[7].name}</li><li>${workArray[7].workContent}</li>`);
console.log(myworkArray);
$('#mywork_box_work').html(myworkArray);


// 仕事の配列から、他の人の仕事（インデックス番号）をタグ付して、表示させる
// const myworkArray = [];
// myworkArray.push(workArray[7]);
// myworkArray.push(`<li>${workArray[7].name}</li><li>${workArray[7].workContent}</li>`);
// console.log(myworkArray);
// $('#mywork_box_work').html(myworkArray);


// 仕事を作成（追加）する
$('#work_create').on('click', function () {
    // alert('ok');
    const workNameData = $('#name_of_work').val();
    const workExplainData = $('#explain_of_work').val();
    workArray.push({ name: workNameData, workContent: workExplainData });
    console.log(workArray);
});

// 仕事を削除する workArrayにfilterを使う




// 他の人には、担当の仕事（インデックス番号）を割り当てる
// 一定の周期(setIntarval的な?)で、仕事を変更する、インデックス番号をずらす
