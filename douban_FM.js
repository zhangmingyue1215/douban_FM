(function () {
	var loadname_hover = document.getElementById('loadname_hover');
	var loadname_table = document.getElementById('loadname_table');
	loadname_hover.onmouseover = function() {
		loadname_table.style.display = "block";
	}
	loadname_hover.onmouseout = function() {
		loadname_table.style.display = "none";
	}

	var audio = document.getElementById('audio');
	var pro_up = document.getElementById('pro_up');
	audio.ontimeupdate = function () {
		var pro_percent = audio.currentTime/audio.duration;
		pro_up.style.width = 220 * pro_percent +"px";

		var time = document.getElementById('time');
		time.innerHTML = "-" + parseInt((audio.duration - audio.currentTime)/60) + ":" + parseInt((audio.duration - audio.currentTime)%60);
	}

	var pause = document.getElementById('pause');
	var bofang = document.getElementById('bofang');
	var bofang_div = document.getElementById('bofang_div');
	pause.onclick = function () {
		audio.pause();
		bofang_div.style.display = "block";
	}
	
	bofang.onclick = function () {
		audio.play();
		bofang_div.style.display = "none";
	}

	var volume_bottom = document.getElementById('volume_bottom');
	var volume_ball = document.getElementById("volume_ball");
	var volume_top =document.getElementById('volume_top');
	// volume_ball.ondragend = function(event){
	// 	var length = event.clientX - volume_bottom.offsetLeft;
	// 	var percent = length / volume_bottom.offsetWidth;
		
	// 		volume_top.style.width = percent * 100 + "px";
	// 		volume_ball.style.left = percent * 100 + 10 + "px";
	// 		audio.volume = percent;
		
	// }
	// volume_ball.ondrag = function(event){
	// 	var length = event.clientX - volume_bottom.offsetLeft;
	// 	var percent = length / volume_bottom.offsetWidth;
		
	// 		volume_top.style.width = percent * 100 + "px";
	// 		volume_ball.style.left = percent * 100 + 10 + "px";
	// 		audio.volume = percent;
		
	// }

	// volume_bottom.onmousedown = function(event) {
 //            var volume_length = event.clientX - volume_bottom.offsetLeft;
 //            var volume_percent = volume_length / volume_bottom.offsetWidth;
 //            volume_top.style.width = volume_percent * 100 + "px";
 //            var volume_length = event.clientX - volume_bottom.offsetLeft;
 //            var volume_percent = volume_length / volume_bottom.offsetWidth;
 //            volume_ball.style.left = volume_percent * 10+"px";
 //            audio.volume = volume_percent;
 //    }
 //    volume_top.onmousedown = function(event) {
 //            var volume_length = event.clientX - volume_bottom.offsetLeft;
 //            var volume_percent = volume_length / volume_bottom.offsetWidth;
 //            volume_top.style.width = volume_percent * 100 + "px";
 //            volume_ball.style.left =10 + audio.volume*100 +"px";
 //            var volume_length = event.clientX - volume_bottom.offsetLeft;
 //            var volume_percent = volume_length / volume_bottom.offsetWidth;
 //            volume_ball.style.left = volume_percent * 100+10+"px";
 //            audio.volume = volume_percent;
 //    }
















}(window))