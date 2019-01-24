/* -----------H-ui前端框架-------------
* h-ui.admin.pro.js v1.0
* http://www.h-ui.net/
* Created & Modified by guojunhui
* Date modified 2018.12.05
* Copyright 2013-2018 北京颖杰联创科技有限公司 All rights reserved.
* Licensed under MIT license.
* http://opensource.org/licenses/MIT
*/
/*左侧菜单响应式*/
function Huiasidedisplay(){
	if($(window).width() <= 768){
		$("body").addClass("big-page");
		$(".Hui-admin-dislpayArrow a").addClass("open");
	}
}
/*设置皮肤 + cookie*/
function getskincookie(){
	var v = $.cookie("Huiskin");
	var hrefStr=$("#skin").attr("href");
	var hrefRes ='';
	if(v==null||v==""){
		v="default";
	}
	if(hrefStr!=undefined){
		hrefRes=hrefStr.substring(0,hrefStr.lastIndexOf('skin/'))+'skin/'+v+'/skin.css';
		$("#skin").attr("href",hrefRes);
	}
	$("#Hui-skin .dropDown-menu a").on('click',function(){
		var _v = $(this).attr("data-val");
		$.cookie("Huiskin", _v);
		hrefRes=hrefStr.substring(0,hrefStr.lastIndexOf('skin/'))+'skin/'+_v+'/skin.css';
		$(window.frames.document).contents().find("#skin").attr("href",hrefRes);
	});
}
/*弹出层*/
/*
	参数解释：
	title	标题
	url		请求的url
	id		需要操作的数据id
	w		弹出层宽度（缺省调默认值）
	h		弹出层高度（缺省调默认值）
*/
function layer_show(title,url,w,h){
	if (title == null || title == '') {
		title=false;
	};
	if (url == null || url == '') {
		url="404.html";
	};
	if (w == null || w == '') {
		w=800;
	};
	if (h == null || h == '') {
		h=($(window).height() - 50);
	};
	layer.open({
		type: 2,
		area: [w+'px', h +'px'],
		fix: false, //不固定
		maxmin: true,
		shade:0.4,
		title: title,
		content: url
	});
}

/*时间*/
function getHTMLDate(obj) {
  var d = new Date();
  var weekday = new Array(7);
  var _mm = "";
  var _dd = "";
  var _ww = "";
  weekday[0] = "星期日";
  weekday[1] = "星期一";
  weekday[2] = "星期二";
  weekday[3] = "星期三";
  weekday[4] = "星期四";
  weekday[5] = "星期五";
  weekday[6] = "星期六";
  _yy = d.getFullYear();
  _mm = d.getMonth() + 1;
  _dd = d.getDate();
  _ww = weekday[d.getDay()];
  obj.html(_yy + "年" + _mm + "月" + _dd + "日 " + _ww);
};

/*个人信息*/
function myselfinfo(){
	layer.open({
		type: 1,
		area: ['300px','200px'],
		fix: false, //不固定
		maxmin: true,
		shade:0.4,
		title: '查看信息',
		content: '<div>管理员信息</div>'
	});
}

/* 侧边栏交互 */
function asideInteractive(){
	var resizeID;
	$(window).resize(function(){
		clearTimeout(resizeID);
		resizeID = setTimeout(function(){
			Huiasidedisplay();
		},500);
	});

	$(".nav-toggle").click(function(){
		$(".Hui-admin-aside-wrapper").slideToggle();
	});
	$(".Hui-admin-aside-wrapper").on("click",".Hui-admin-menu-dropdown dd li a",function(){
		if($(window).width()<=768){
			$("body").addClass("big-page");
			$(".Hui-admin-dislpayArrow a").addClass("open");
		}
	});
	$(".Hui-admin-aside-mask").click(function(){
		$("body").addClass("big-page");
		$(".Hui-admin-dislpayArrow a").addClass("open");
	});

	/*左侧菜单*/
	$(".Hui-admin-aside-wrapper").Huifold({
		titCell:'.Hui-admin-menu-dropdown > .Hui-menu > .Hui-menu-title',
		mainCell:'.Hui-admin-menu-dropdown > .Hui-menu > .Hui-menu-item',
	});
	$(".Hui-menu-item").Huifold({
		titCell:'.Hui-menu > .Hui-menu-title',
		mainCell:'.Hui-menu > .Hui-menu-item',
	});
}
$(function(){
	getHTMLDate($("#top_time"));
	getskincookie();
	Huiasidedisplay();
	asideInteractive();
});
