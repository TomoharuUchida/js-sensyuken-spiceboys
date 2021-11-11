'use strict'

//---------------------------shoppinglistの動き----------------------------------------//

const shoppingArray = [];//shoppinglist用の配列

// shoppinglist データの追加
$('#shopping_add').on('click', function () { //shopping_addボタンが押されたら  
  $('#shopping_output').empty(); //再表示のために一回消す
  const text = $('#shopping_input').val(); //入力されたものを変数に入れる

  $("#shopping_input").val("");//入力欄を空欄にする
  $("#shopping_input").focus();//入力欄にフォーカスを当てる

  //変数textを配列に入れる
  shoppingArray.push(`<div class="shopping_txt"><label><input type="checkbox" class="check">${text}</label><button class= "delete_btn fas fa-trash-alt"></button></div>`);

  console.log(shoppingArray); //配列をコンソールに出す

  //JSON保存部分
  //const jsonData = JSON.stringify(todos); //JSON 形式に変換
  //console.log(jsonData); //JSONをコンソールに出す
  //setItem("shopping_list", jsonData);//LocalStorage に情報を保存．

  //ページに表示
  $('#shopping_output').html(shoppingArray);//htmlに変換
});


//ゴミ箱ボタンでtodoの項目を消す
$(document).on('click', '.delete_btn', function () { //deleteボタンが押されたら
  const num = $(this).parent().index(); //ボタンの親要素のインデックス番号を取得
  console.log(num); //インデックス番号をコンソールに出す
  shoppingArray.splice(num, 1); //配列から該当するインデックス番号を削除

  //JSON再保存部分
  //const jsonData = JSON.stringify(todos); //JSON 形式に変換
  //console.log(jsonData); //JSONをコンソールに出す
  //localStorage.setItem("memo_todo", jsonData); //キーmemo_todoでローカルストレージに保存

  $('#shopping_output').html(shoppingArray);//配列を再表示
  //↑htmlを置き換える

});


// shoppinglistデータの削除
$("#clear_btn").on("click", function () {
  localStorage.removeItem("memo_todo");//キーmemo_todoをローカルストレージから削除
  $("#shopping_input").val(""); //入力欄を空に
  $('#shopping_output').empty(); //画面に表示されているものをを全部消す
  todos.splice(0); //配列todosを空に
});


// // todoデータの取得（リロード時）
// if (localStorage.getItem('memo_todo')) {
//   const jsonData = localStorage.getItem("memo_todo");//キーmemo_todoをローカルストレージから持ってくる
//   const data = JSON.parse(jsonData);//キーmemo_todoをローカルストレージから持ってくる
//   //console.log(data);//コンソールにdataを出す
//   $('#todo_list').html(data);//dateを画面に表示

//   for (let i = 0; i < data.length; i++) { //dateを配列todosに格納
//     todos.push(data[i]);
//   }

// }

//チェックボックスにチェックを入れると打ち消し線が入る
$(document).on('click', '.check', function () {
  //console.log($(this).is(":checked"));
  if ($(this).is(":checked")) { //true チェックが入ったら
    $(this).parent().css("text-decoration", "line-through");
  }
  else { //false チェックが消えたら
    $(this).parent().css("text-decoration", "none");
  }
});


//---------------------------shoppinglistの動きここまで----------------------------------------//


// ----------------------------member部分------------------------------------------------------//