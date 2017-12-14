window.onload = function() {
	var bannerWrapper = document.getElementById('banner_wrapper');
	var banner = document.getElementById('banner');
	var oimg = banner.getElementsByTagName('img');
	var prevBtn = document.getElementById('prev');
	var nextBtn = document.getElementById('next');
	var circle = document.getElementById('circle');
	var ali = circle.getElementsByTagName('li');

	var num = 0;
	//初始化
	oimg[0].style.opacity = "1";
	ali[0].className = "active";

	nextBtn.onclick = function() {
		num++;
		if (num == 8) {
			num = 0;
			ali[num].className = "";
			oimg[num].style.opacity = "0";
		}
		for (var i = 0; i < ali.length; i++) {
			ali[i].className = '';
			oimg[i].style.opacity = "0"
		}
		ali[num].className = 'active';
		oimg[num].style.opacity = "1";
	}

	prevBtn.onclick = function() {
		num--;
		if (num == -1) {
			num = 7;
			ali[num].className = "";
			oimg[num].style.opacity = "0";
		}
		for (var i = 0; i < ali.length; i++) {
			ali[i].className = '';
			oimg[i].style.opacity = "0"
		}
		ali[num].className = 'active';
		oimg[num].style.opacity = "1";
	}

	/*定时切换*/
	var Timer = null;

	function Move() {

		Timer = setInterval(function() {
			num++;
			if (num == 8) {
				num = 0;
				ali[num].className = "";
				oimg[num].style.opacity = "0";
			}
			for (var i = 0; i < ali.length; i++) {
				ali[i].className = '';
				oimg[i].style.opacity = "0"
			}
			ali[num].className = 'active';
			oimg[num].style.opacity = "1";
		}, 3000)
	}
	/*封装的函数不会自动执行  因此要启动定时器*/
	Move();

	/*鼠标滑过清除滑动(定时器)*/
	bannerWrapper.onmouseover = function() {
			clearInterval(Timer);
		}
		/*鼠标移出继续滑动(定时器) 因此封装定时切换*/
	bannerWrapper.onmouseout = function() {
		Move();
	}

	/*什么元素用什么事件实现什么功能*/

	//淡入淡出  /*点击悬浮下标小圆点进行切换*/
	for (var i = 0; i < ali.length; i++) { //循环遍历每一个按钮
		ali[i].index = i;
		ali[i].onclick = function() {
			num = this.index;
			for (var j = 0; j < ali.length; j++) {
				ali[j].className = "";
				oimg[j].style.opacity = "0";
			}
			this.className = "active";
			oimg[num].style.opacity = "1";
		}

	}
}