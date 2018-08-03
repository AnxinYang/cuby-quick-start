/**
 * Created by Anxin Yang on 6/23/2018.
 */

var Web_Port = {
    request(method, data, url, _settings, callback) {
        let settings = _settings || {};
        $.ajax({
            url: url,
            type: method,
            async: settings.async || true,
            crossDomain: true,
            contentType: settings.contentType || "application/json; charset=utf-8",
            data: JSON.stringify(data),
            dataType: settings.dataType || "json",
            beforeSend: function (xhr) {
                if (CubY.getValue('Authorization')) {
                    xhr.setRequestHeader("Authorization", CubY.getValue('Authorization'));
                }
            },

        }).done(function (response, textStatus, xhr) {
            if(typeof callback === 'function')callback(response, textStatus, xhr)
        }).fail(function (response, textStatus, xhr) {
            if(response.status === 401){
                CubY.storeValue('isLogin', false);
            }
            if(typeof callback === 'function')callback(response, textStatus, xhr)
        })
    },
    baseUrl: 'http://anxinyang.us/php/api/todo/',

    getTodoList: function(id, callback){
        CubY.request('get', undefined, CubY.baseUrl + 'read.php'+ (id!==undefined?('?id='+id):''),undefined, function (response, textStatus, xhr) {
            if(id){
                CubY.storeValue(id, response.data[0]);
                CubY.storeValue('currentTodo', id, {forceReact:true});
            }else{
                let todoList = CubY.storeDataArray(response.data);
                CubY.storeValue('todoList', todoList);
            }
            if(callback){
                callback();
            }
        });
    },
    createNewTodo: function (data) {
        data.ref = Math.random()*10000 + '.' + Date.now();
        CubY.request('post', data, CubY.baseUrl + 'create.php',undefined, function (response, textStatus, xhr) {
            if(response.message === 'Created'){
                CubY.getTodoList(undefined,function () {
                    CubY.storeValue('currentTodo', response.id);
                });
            }
        });
    },
    updateTodo: function (data) {
        data.ref = Math.random()*10000 + '.' + Date.now();
        CubY.request('put', data, CubY.baseUrl + 'update.php',undefined, function (response, textStatus, xhr) {
            if(response.message === 'Updated'){
                //CubY.storeValue('currentTodo', data.id, {forceReact: true});
                CubY.storeValue(data.id, {});
                CubY.storeValue('hint', 'Change Saved', {forceReact:true});
                // TODO: WHAT NEXT?
            }
        });
    }
};
//window.Web_Port = Web_Port;
export default Web_Port;