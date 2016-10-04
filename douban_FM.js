(function () {
	// header
	var loadname_hover = document.getElementById('loadname_hover');
	var loadname_table = document.getElementById('loadname_table');
	loadname_hover.onmouseover = function() {
		loadname_table.style.display = "block";
	}
	loadname_hover.onmouseout = function() {
		loadname_table.style.display = "none";
	}
	// bck_color
	var share = document.getElementById('share');
	var share_btn = document.getElementById('share_btn');
	var logos = document.getElementById('logos');
	share.onmouseover = function() {
		logos.style.display = "block";
		share_btn.style.left = "850px";
	}
	share.onmouseout = function() {
		logos.style.display = "none";
		share_btn.style.left = "1020px";
	}





	// audioplayer
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

	
	// var volume_bottom = document.getElementById('volume_bottom');
	// var volume_top = document.getElementById('volume_top');
	// audio.onvolumechange = function(){
	// 	volume_top.style.width = audio.volume*70 + "px"; 
	// }
	// volume_bottom.onclick = function (event) {
	// 	audio.volume = (event.clientX - volume_bottom.offsetLeft)/70;
	// 	volume_top.style.width = audio.volume*70 + "px";
	// }
	// volume_top.onclick = function (event) {
	// 	audio.volume = (event.clientX - volume_bottom.offsetLeft)/70;
	// 	volume_top.style.width = audio.volume*70 + "px";
	// }



	var blackxin = document.getElementById('blackxin');
	var redxin = document.getElementById('redxin');
	blackxin.onclick = function() {
		redxin.style.display = "block";
		blackxin.style.display = "none"
	}
	redxin.onclick = function() {
		redxin.style.display = "none";
		blackxin.style.display = "block"
	}

	var delete_ = document.getElementById('delete');
	var poster = document.getElementById('poster');
	var audio = document.getElementById('audio');
	var playername = document.getElementById('playername');
	var audioname = document.getElementById('audioname');
	delete_.onclick = function(){
		poster.src = "valder_fields.jpg";
		audio.src = "Valder Fields.mp3";
		playername.innerHTML = "Tamas Wells";
		audioname.innerHTML = "Valder Fields";
	}
	var nextaudio = document.getElementById('nextaudio');
	nextaudio.onclick = function(){
		poster.src = "tryeverying.jpg";
		audio.src = "Try Everything.mp3";
		playername.innerHTML = "Shakira";
		audioname.innerHTML = "Try Everything";
	}












}(window))