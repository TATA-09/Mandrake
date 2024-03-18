
var callStop = false;


$(function() {
	
	let hitOpen = $('#switch').checked;
	let gif = (hitOpen)? 'Hit' : 'Niffler';
	
	gifElement = document.querySelector('#Niffler');
	
	$("#switch").click(function(){
		hitOpen = $('#switch').is(":checked");
		gif = (hitOpen)? 'Hit' : 'Niffler';
		gifElement.src = "./img/"+gif+".png";
	});
	
	
	gifElement.addEventListener('click', function(){
		gifElement.src = "./img/"+gif+".gif";
		
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
				gifElement.src = "./img/"+gif+".png";
				callStop = false;
			}, 3000);
		}
		
		callStop = true;
	});
	
}); 