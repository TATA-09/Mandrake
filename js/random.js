var s1 = ["s1-1", "s1-2", "s1-3", "s1-4", "s1-5"];
//var s2 = ["s2-1", "s2-2", "s2-3", "s2-4", "s2-5"];
var s2 = ["s2-1"];

var allCards =[];

var userID = "Guest";

$(function() {
	
	//點擊按鈕
	$("#get").click(function(){
	//$(".btn").click(function(){
		
		$(this).prop("disabled", true);	//禁用按鈕
		//設定1秒後可以重新使用
		setTimeout( function(){
			$("#get").prop("disabled", false);	
		}, 1000);
		
		
		//組合要抽的卡季
		let temp = allCards.concat(s1, s2);
		
		let cardName = getRandom(temp, temp.length);
		showGif( cardName );
		
		writeSheet(userID, cardName);
		
	});
	
	
	
});  


//抽卡
function getRandom(arr, max){
	
	//抽取隨機數
	let i = parseInt( Math.random() * max );
	//console.log(i);
	//console.log( arr[i] );
	
	return arr[i];
}

//顯示抽卡結果
function showGif(cardName){
	//可見圖片
	document.getElementById("show").style.visibility = "visible";
	document.getElementById("show").src = "./img/" + cardName + ".gif";
	
}


//記錄到google sheet
function writeSheet(id, cardName){
	
	let date = new Date();
	let now = date.getFullYear() + "/" + padTo2Digits( date.getMonth()+1 ) + "/" + padTo2Digits( date.getDate());
	let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	
	a = {
		data: now+','+time+','+id+','+cardName,
		sheetUrl: 'https://docs.google.com/spreadsheets/d/1WMG455yqP1HWFNysFfTDoJJTP1QhukwyX2IbDd9jUIM/edit#gid=0',
		sheetTag: 'history'
    };
    console.log(a);
    $.get('https://script.google.com/macros/s/AKfycbzxKU7nhN7if-6qzHdbyM8i8oWbcv1aoCiLJxfld4_-1PMGZCi9LRkFIX_tUpIaIOUA/exec', a);
}


//月日個位數補0
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}


