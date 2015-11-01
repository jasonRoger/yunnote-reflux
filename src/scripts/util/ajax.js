/**
 * @fileOverview  ajax请求
 */
var ajax = function(params) {
    //初始化deferred对象
    var d = $.Deferred();

    //初始化参数
    var config = {
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        cache: false
    };

    /**
     * 支持 abort 和 mock 参数，abort 参数为 true 时，不对 URL 进行锁定
     */
    if (params.type == 'mock') {
        //设定执行状态为“已完成”，触发done操作
        $.getJSON(params.url, params.data ? params.data : {}, function(res) {
            //判断返回参数
            if (res && res.ret) {
                //改变执行状态，触发done操作
                d.resolve(res.data || {});
            } else {
                //改变执行状态，触发fail操作
                d.reject(res);
            }
        });
    } else {
        //执行ajax操作
        $.ajax($.extend(config, params))
        //请求成功
        .done(function(retData) {
            //判断返回参数
            if (retData && retData.ret) {
                //改变执行状态，触发done操作
                d.resolve(retData.data || {});
            } else {
                //改变执行状态，触发fail操作
                d.reject(retData);
            }
        })
        //请求失败
        .fail(function() {
            //改变执行状态，触发fail操作
            d.reject({
                ret: false,
                errmsg: '系统繁忙，请稍后重试。'
            });
        })
    }
    //返回promise对象，支持done和fail链式方法操作
    return d.promise();
}

module.exports = ajax;
