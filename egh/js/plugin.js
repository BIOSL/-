document.addEventListener( "plusready",  function()
{
// 声明的JS“扩展插件别名”
    var _BARCODE = 'plugintest',
        B = window.plus.bridge;
    var plugintest = 
{
// 声明异步返回方法
        PluginTestFunction : function (Argus1, Argus2, Argus3, Argus4, successCallback, errorCallback ) 
        {
            var success = typeof successCallback !== 'function' ? null : function(args) 
            {
                successCallback(args);
            },
            fail = typeof errorCallback !== 'function' ? null : function(code) 
            {
                errorCallback(code);
            };
            callbackID = B.callbackId(success, fail);
// 通知Native层plugintest扩展插件运行”PluginTestFunction”方法
            return B.exec(_BARCODE, "PluginTestFunction", [callbackID, Argus1, Argus2, Argus3, Argus4]);
        }
    };
    window.plus.plugintest = plugintest;
}, true );