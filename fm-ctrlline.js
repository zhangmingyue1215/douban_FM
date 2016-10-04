(function () {
	var ctrlline_open = document.getElementById('ctrlline_open');
	var ctrlline_neirong = document.getElementById('ctrlline_neirong');
	var ctrlline_close = document.getElementById('ctrlline_close');
	
	ctrlline_open.onclick = function() {
		ctrlline_neirong.style.left = "0px";
		ctrlline_close.style.left = "662px";
		ctrlline_close.style.visibility = "visible";
		
	}
	ctrlline_close.onclick = function() {
		ctrlline_neirong.style.left = "-685px";
		ctrlline_close.style.left = "-18px";
		ctrlline_close.style.visibility = "hidden";
		
	}



	var lunbo = document.getElementById('lunbo_img');
	var mhz_name = document.getElementById('mhz_name');
	var jieshao = document.getElementById('jieshao');
	var hotaudio = document.getElementById('hotaudio');
	var audionum = document.getElementById('audionum');
	setInterval(function(){
		var p = document.getElementById("lunbo_img");
		if(p.src.match("1.png")){
			p.src = "2.png";
			mhz_name.innerHTML = "布鲁斯 MHz";
			jieshao.innerHTML = " ";
			hotaudio.innerHTML = "热门歌曲：To Know Him Is To Love Him (Live At Pete Mitchell 2006) / Life Will Be Better / Occupation Blues";
			audionum.innerHTML = "4163首歌曲";
			btn2.style.backgroundColor = "#5CE45C";
			btn1.style.backgroundColor = "#D4DAD8";
			btn3.style.backgroundColor = "#D4DAD8";
			btn4.style.backgroundColor = "#D4DAD8";
			btn5.style.backgroundColor = "#D4DAD8";
			btn6.style.backgroundColor = "#D4DAD8";

		}else if(p.src.match("2.png")){
			p.src = "3.png";
			mhz_name.innerHTML = "轻音乐 MHz";
			jieshao.innerHTML = "在属于你的放松地带，释放心灵";
			hotaudio.innerHTML = "热门歌曲：My Memory~「冬のソナタ」より / Papillon / Twinkle,twinkle,little Star";
			audionum.innerHTML = "2736首歌曲";
			btn3.style.backgroundColor = "#5CE45C";
			btn1.style.backgroundColor = "#D4DAD8";
			btn2.style.backgroundColor = "#D4DAD8";
			btn4.style.backgroundColor = "#D4DAD8";
			btn5.style.backgroundColor = "#D4DAD8";
			btn6.style.backgroundColor = "#D4DAD8";
			
		}else if(p.src.match("3.png")){
			p.src = "4.png";
			mhz_name.innerHTML = "摇滚 MHz";
			jieshao.innerHTML = "Rock and Roll Ain't Noise Pollution，Welcome to the Jungle";
			hotaudio.innerHTML = "热门歌曲：Don't Cry (original) / It's My Life / Viva La Vida";
			audionum.innerHTML = "3654首歌曲";
			btn4.style.backgroundColor = "#5CE45C";
			btn1.style.backgroundColor = "#D4DAD8";
			btn2.style.backgroundColor = "#D4DAD8";
			btn3.style.backgroundColor = "#D4DAD8";
			btn5.style.backgroundColor = "#D4DAD8";
			btn6.style.backgroundColor = "#D4DAD8";
		}else if(p.src.match("4.png")){
			p.src = "5.png";
			mhz_name.innerHTML = "爵士 MHz";
			jieshao.innerHTML = " ";
			hotaudio.innerHTML = "热门歌曲：Vincent (Live) / Auld Lang Syne / Donde Estas, Yolanda?";
			audionum.innerHTML = "4163首歌曲";
			btn5.style.backgroundColor = "#5CE45C";
			btn1.style.backgroundColor = "#D4DAD8";
			btn2.style.backgroundColor = "#D4DAD8";
			btn3.style.backgroundColor = "#D4DAD8";
			btn4.style.backgroundColor = "#D4DAD8";
			btn6.style.backgroundColor = "#D4DAD8";
		}else if(p.src.match("5.png")){
			p.src = "6.png";
			mhz_name.innerHTML = "SK-II 最初的梦MHz";
			jieshao.innerHTML = " ";
			hotaudio.innerHTML = "热门歌曲：夜空中最亮的星 / 一万次悲伤 / 最初的梦想（Cover 范玮琪";
			audionum.innerHTML = "50首歌曲";
			btn6.style.backgroundColor = "#5CE45C";
			btn1.style.backgroundColor = "#D4DAD8";
			btn2.style.backgroundColor = "#D4DAD8";
			btn3.style.backgroundColor = "#D4DAD8";
			btn4.style.backgroundColor = "#D4DAD8";
			btn5.style.backgroundColor = "#D4DAD8";
		}else if(p.src.match("6.png")){
			p.src = "1.png";
			mhz_name.innerHTML = "R&B MHz";
			jieshao.innerHTML = "跟随着节拍一起摇摆";
			hotaudio.innerHTML = "热门歌曲:Dynamite/Right Now/Mad";
			audionum.innerHTML = "2606首歌曲";
			btn1.style.backgroundColor = "#5CE45C";
			btn5.style.backgroundColor = "#D4DAD8";
			btn2.style.backgroundColor = "#D4DAD8";
			btn3.style.backgroundColor = "#D4DAD8";
			btn4.style.backgroundColor = "#D4DAD8";
			btn6.style.backgroundColor = "#D4DAD8";
		}
		}, 2000)

	var btn1 = document.getElementById('btn1');
	var btn2 = document.getElementById('btn2');
	var btn3 = document.getElementById('btn3');
	var btn4 = document.getElementById('btn4');
	var btn5 = document.getElementById('btn5');
	var btn6 = document.getElementById('btn6');
	var p = document.getElementById("lunbo_img");
	btn1.onmouseover = function(){
		p.src = "1.png";
		mhz_name.innerHTML = "R&B MHz";
		jieshao.innerHTML = "跟随着节拍一起摇摆";
		hotaudio.innerHTML = "热门歌曲:Dynamite/Right Now/Mad";
		audionum.innerHTML = "2606首歌曲";

		btn1.style.backgroundColor = "#5CE45C";
		btn5.style.backgroundColor = "#D4DAD8";
		btn2.style.backgroundColor = "#D4DAD8";
		btn3.style.backgroundColor = "#D4DAD8";
		btn4.style.backgroundColor = "#D4DAD8";
		btn6.style.backgroundColor = "#D4DAD8";
	}
	btn2.onmouseover = function(){
			p.src = "2.png";
			mhz_name.innerHTML = "布鲁斯 MHz";
			jieshao.innerHTML = " ";
			hotaudio.innerHTML = "热门歌曲：To Know Him Is To Love Him (Live At Pete Mitchell 2006) / Life Will Be Better / Occupation Blues";
			audionum.innerHTML = "4163首歌曲";	
			btn2.style.backgroundColor = "#5CE45C";
			btn1.style.backgroundColor = "#D4DAD8";
			btn3.style.backgroundColor = "#D4DAD8";
			btn4.style.backgroundColor = "#D4DAD8";
			btn5.style.backgroundColor = "#D4DAD8";
			btn6.style.backgroundColor = "#D4DAD8";	
	}
	btn3.onmouseover = function(){
			p.src = "3.png";
			mhz_name.innerHTML = "轻音乐 MHz";
			jieshao.innerHTML = "在属于你的放松地带，释放心灵";
			hotaudio.innerHTML = "热门歌曲：My Memory~「冬のソナタ」より / Papillon / Twinkle,twinkle,little Star";
			audionum.innerHTML = "2736首歌曲";
			btn3.style.backgroundColor = "#5CE45C";
			btn1.style.backgroundColor = "#D4DAD8";
			btn2.style.backgroundColor = "#D4DAD8";
			btn4.style.backgroundColor = "#D4DAD8";
			btn5.style.backgroundColor = "#D4DAD8";
			btn6.style.backgroundColor = "#D4DAD8";		
	}
	btn4.onmouseover = function(){
      		p.src = "4.png";
			mhz_name.innerHTML = "摇滚 MHz";
			jieshao.innerHTML = "Rock and Roll Ain't Noise Pollution，Welcome to the Jungle";
			hotaudio.innerHTML = "热门歌曲：Don't Cry (original) / It's My Life / Viva La Vida";
			audionum.innerHTML = "3654首歌曲";
			btn4.style.backgroundColor = "#5CE45C";
			btn1.style.backgroundColor = "#D4DAD8";
			btn2.style.backgroundColor = "#D4DAD8";
			btn3.style.backgroundColor = "#D4DAD8";
			btn5.style.backgroundColor = "#D4DAD8";
			btn6.style.backgroundColor = "#D4DAD8";		
	}
	btn5.onmouseover = function(){
			p.src = "5.png";
			mhz_name.innerHTML = "爵士 MHz";
			jieshao.innerHTML = " ";
			hotaudio.innerHTML = "热门歌曲：Vincent (Live) / Auld Lang Syne / Donde Estas, Yolanda?";
			audionum.innerHTML = "4163首歌曲";	
			btn5.style.backgroundColor = "#5CE45C";
			btn1.style.backgroundColor = "#D4DAD8";
			btn2.style.backgroundColor = "#D4DAD8";
			btn3.style.backgroundColor = "#D4DAD8";
			btn4.style.backgroundColor = "#D4DAD8";
			btn6.style.backgroundColor = "#D4DAD8";	
	}
	btn6.onmouseover = function(){
			p.src = "6.png";
			mhz_name.innerHTML = "SK-II 最初的梦MHz";
			jieshao.innerHTML = " ";
			hotaudio.innerHTML = "热门歌曲：夜空中最亮的星 / 一万次悲伤 / 最初的梦想（Cover 范玮琪";
			audionum.innerHTML = "50首歌曲";	
			btn6.style.backgroundColor = "#5CE45C";
			btn1.style.backgroundColor = "#D4DAD8";
			btn2.style.backgroundColor = "#D4DAD8";
			btn3.style.backgroundColor = "#D4DAD8";
			btn4.style.backgroundColor = "#D4DAD8";
			btn5.style.backgroundColor = "#D4DAD8";	
	}











}(window))