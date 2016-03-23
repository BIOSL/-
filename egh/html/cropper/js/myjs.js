//var url = plus.storage.getItem("service_url");
//var debug=plus.storage.getItem("debug");
mui.plusReady(function(){
	if(true)
		plus.storage.setItem("service_url","http://88.128.20.212:8080/EGH/");
})


var ajax = function(controller, data, action, showWatting) {
//	plus.storage.setItem("service_url","http://192.168.31.172:8080/EGH/");
//	plus.storage.setItem("service_url","http://192.168.43.43:8080/EGH/");
//	plus.storage.setItem("service_url","http://192.168.191.2:8080/EGH/");
//	plus.storage.setItem("service_url","http://88.128.20.212:8080/EGH/");
//	var url = plus.storage.getItem("service_url");
	var url = "http://88.128.20.212:8080/EGH/";
	if (showWatting)
		plus.nativeUI.showWaiting('请稍等...');
	console.log("data:"+JSON.stringify(data));
	console.log('请求:' + url + controller);
	mui.ajax(url + controller, {
		"data": data,
		"type": 'post', //HTTP请求类型
		"dataType": 'jsonp',
		"timeout": 10000,
		"success": action,
		error: function(xhr, type, errorThrown) {
			mui.toast("网络连接超时！");
			plus.nativeUI.closeWaiting();
		}
	});
}

var checkRespose = function(req,response) {
	plus.nativeUI.closeWaiting();
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

function mylog(content){
	var debug=plus.storage.getItem("debug");
	
	if(debug)
		console.log(content);
}
