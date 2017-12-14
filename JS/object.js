window.onload = function() {
	new Banner('banner_wrapper')
}

function Banner(id) {
	var _this = this
	var bannerWrapper = document.getElementById(id);
	this.banner = document.getElementById('banner');
	this.oimg = banner.getElementsByTagName('img');
	this.prevBtn = document.getElementById('prev');
	this.nextBtn = document.getElementById('next');
	this.circle = document.getElementById('circle');
	this.ali = circle.getElementsByTagName('li');
	this.num = 0;
	this.Timer = null;
	//初始化
	this.oimg[0].style.opacity = "1";
	this.ali[0].className = "active";

	this.nextBtn.onclick = function() {
		_this.nextClick(this)
	}
	this.prevBtn.onclick = function() {
			_this.prevClick(this)
		}
		/*定时切换*/
	autoPlay = function() {
		_this.autoPlay(this)
	}

	/*封装的函数不会自动执行  因此要启动定时器*/
	_this.autoPlay(this)

	/*鼠标滑过清除滑动(定时器)*/
	bannerWrapper.onmouseover = function() {
			clearInterval(_this.Timer);
		}
		/*鼠标移出继续滑动(定时器) 因此封装定时切换*/
	bannerWrapper.onmouseout = function() {
		_this.autoPlay(this)
	}

	/*什么元素用什么事件实现什么功能*/
	/*点击悬浮下标小圆点进行切换*/
	for (var i = 0; i < this.ali.length; i++) { //循环遍历每一个按钮
		this.ali[i].index = i; //下标索引
		this.ali[i].onclick = function() {
			_this.aliClick(this)
		}
	}
}

Banner.prototype.nextClick = function() {
	this.num++;
	if (this.num == 8) {
		this.num = 0;
		this.ali[this.num].className = "";
		this.oimg[this.num].style.opacity = "0";
	}
	for (var i = 0; i < this.ali.length; i++) {
		this.ali[i].className = '';
		this.oimg[i].style.opacity = "0"
	}
	this.ali[this.num].className = 'active';
	this.oimg[this.num].style.opacity = "1";
}

Banner.prototype.prevClick = function() {
	this.num--;
	if (this.num == -1) {
		this.num = 7;
		this.ali[this.num].className = "";
		this.oimg[this.num].style.opacity = "0";
	}
	for (var i = 0; i < this.ali.length; i++) {
		this.ali[i].className = '';
		this.oimg[i].style.opacity = "0"
	}
	this.ali[this.num].className = 'active';
	this.oimg[this.num].style.opacity = "1";
}

Banner.prototype.aliClick = function(oLi) {

	for (var i = 0; i < this.ali.length; i++) {
		this.ali[i].className = "";
		this.oimg[i].style.opacity = "0";
	}
	this.num = oLi.index;
	oLi.className = "active";
	this.oimg[this.num].style.opacity = "1";
}

Banner.prototype.autoPlay = function() {
	var _this = this;
	_this.Timer = setInterval(function() {
		_this.nextClick(this)
	}, 3000)
}