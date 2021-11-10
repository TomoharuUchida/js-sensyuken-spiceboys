'use strict'

//about消しておく
$('#about').hide();

//aboutボタンが押されたらabout表示
$('#about_btn').on('click', function () {
  $('#about').show();
})
//closeボタンが押されたらaboutを消す
$('#about_close').on('click', function () {
  $('#about').hide();
})

//設定メニュー消しておく
$('#setting_list').hide();

//歯車ボタンで設定メニューを出す
$('#setting_btn').on('click', function () {
  $('#setting_list').slideDown();
})

//closeボタンで設定メニューを隠す
$('#setting_close').on('click', function () {
  $('#setting_list').slideUp();
})