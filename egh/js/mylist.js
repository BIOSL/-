var rows = 10;
var pages = 1;
var can_load = false;
var is_refresh = false;

function getTeacherLI(tearcherName, remark) {
	var s = '<div class="mui-slider-cell"><div class="oa-contact-cell mui-table"><div class="oa-contact-avatar mui-table-cell"><img width="60px" src="../../images/common/student_img.jpg" data-src="http://112.74.132.108:8080/EGH/imageController.do?getImg&fileName=' + tearcherName + '" onload="lazyload(this)" /></div><div class="oa-contact-content mui-table-cell"><div class="mui-clearfix"><h4 class="oa-contact-name">' + tearcherName + '</h4><span class="oa-contact-position mui-h6">' + "中国" + '</span></div><p class="mui-h6 teacher-remark mui-ellipsis">' + remark + '</p></div></div></div>'
	return s;
}

function getHistoryLI(tearcherName, tasteName, time) {
	var timeStr = new Date(time).format("yyyy-MM-dd");
	var s = '<div class="mui-slider-cell"><div class="oa-contact-cell mui-table"><div class="oa-contact-avatar mui-table-cell"><img width="60px" src="../../images/common/student_img.jpg" data-src="http://112.74.132.108:8080/EGH/imageController.do?getImg&fileName=' + tearcherName + '" onload="lazyload(this)" /></div><div class="oa-contact-content mui-table-cell"><div class="mui-clearfix"><h4 class="oa-contact-name">' + tearcherName + '</h4></div><p class="mui-h6 teacher-remark mui-ellipsis">' + timeStr + '</p><p class="mui-h6 teacher-remark mui-ellipsis">' + tasteName + '</p></div></div></div>'
	return s;
}

function getAccessLi(tearcherName, tasteName, remark, score) {
	var img_div = '<div class="oa-contact-avatar mui-table-cell"><img width="60px" src="../../images/common/student_img.jpg" data-src="http://112.74.132.108:8080/EGH/imageController.do?getImg&fileName=' + tearcherName + '" onload="lazyload(this)" /></div>'
	var info_div = '<div class="oa-contact-content mui-table-cell"><div class="mui-clearfix"><h4 class="oa-contact-name">' + tearcherName + '</h4><br></div><span class="oa-contact-position mui-h6">' + tasteName + '</span>'
	var start_div = '<div class="icons">';

	for (var i = 0; i < score; i++) {
		start_div += '<i data-index="1" class="mui-icon mui-icon-star-filled"></i>'
	}
	for (var i = 0; i < 5 - score; i++) {
		start_div += '<i data-index="1" class="mui-icon mui-icon-star"></i>'
	}
	start_div += '</div></div>'

	var html = '<div class="mui-slider-cell"><div class="oa-contact-cell mui-table">' + img_div + info_div + start_div + '</div></div>'
	return html;
}

function getScoreLi(tearcherName, tasteName, remark, score) {
	var img_div = '<div class="oa-contact-avatar mui-table-cell"><img width="60px" src="../../images/common/student_img.jpg" data-src="http://112.74.132.108:8080/EGH/imageController.do?getImg&fileName=' + tearcherName + '" onload="lazyload(this)" /></div>'
	var info_div = '<div class="oa-contact-content mui-table-cell"><div class="mui-clearfix" style="width:100%!important;"><h4 class="oa-contact-name" style="width:100%!important;">' + tearcherName + '(' + tasteName + ')</h4><br></div><span class="oa-contact-position mui-h6">' + remark + '</span>'
	var start_div = '<div class="icons">';

	for (var i = 0; i < score; i++) {
		start_div += '<i data-index="1" class="mui-icon mui-icon-star-filled"></i>'
	}
	for (var i = 0; i < 5 - score; i++) {
		start_div += '<i data-index="1" class="mui-icon mui-icon-star"></i>'
	}
	start_div += '</div></div>'

	var html = '<div class="mui-slider-cell"><div class="oa-contact-cell mui-table">' + img_div + info_div + start_div + '</div></div>'
	return html;
}

Date.prototype.format = function(format) {
	var o = {
		"M+": this.getMonth() + 1, //month
		"d+": this.getDate(), //day
		"h+": this.getHours(), //hour
		"m+": this.getMinutes(), //minute
		"s+": this.getSeconds(), //second
		"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
		"S": this.getMilliseconds() //millisecond
	}
	if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1,
				RegExp.$1.length == 1 ? o[k] :
				("00" + o[k]).substr(("" + o[k]).length));
	return format;
}