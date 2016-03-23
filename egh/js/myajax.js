var url = "http://112.74.132.108:8080/EGH/";
var timeout=10000;
var debug=true;

/**
 * 请求
 * @param {Object} controller
 * @param {Object} data
 * @param {Object} action
 * @param {Object} showWatting
 */
var ajax = function(controller, data, action, showWatting) {
	if (showWatting)
		plus.nativeUI.showWaiting('请稍等...');
		
	console.log("data:" + JSON.stringify(data));
	console.log('请求:' + url + controller);
	
	mui.ajax(url + controller, {
		"data": data,
		"type": 'post', //HTTP请求类型
		"dataType": 'jsonp',
		"timeout": timeout,
		"success": action,
		error: function(xhr, type, errorThrown) {
			mui.toast("网络连接超时！");
			plus.nativeUI.closeWaiting();
		}
	});
}

/**
 * 检查响应数据
 * @param {Object} req
 * @param {Object} response
 */
var checkRespose = function(req,response) {
	console.log("回应信息：" + response);
	console.log("回应信息：" + JSON.parse(response));
	if (req== '' || req == null) {
		console.log('没有返回结果！');
		mui.toast('网络连接失败，请检查网络！');
		return false;
	}else{
		return true;
	}
}

function log(content){
	if(debug)
		console.log(content);
}