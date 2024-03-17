var callStop = false;

$(function() {
	
	let gifElement = document.querySelector('#Niffler');
	
	gifElement.addEventListener('click', function(){
		gifElement.src = "./img/Niffler.gif";
		
		if (gifElement.classList.contains('playing')) {
			// 如果當前處於播放狀態，就停止動畫	
			gifElement.src = gifElement.src;
			gifElement.classList.remove('playing');
		} else {
			// 如果當前處於暫停狀態，就播放動畫
			gifElement.src = gifElement.src;
			gifElement.classList.add('playing');
		}
		
		if(callStop == false){
			setTimeout( function(){
				gifElement.src = "./img/Niffler.png";
				callStop = false;
			}, 3000);
		}
		
		callStop = true;
	});
	
}); 