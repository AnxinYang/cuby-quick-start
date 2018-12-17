import CubY from "./CubY";

const CubY_XHR = function () {

};

CubY_XHR.prototype.ajax = function (params = {}) {
    let {url, method, data, ref, async, xhr, contentType, noAuth,dataType, processData, cache, noJSON, ajax,callback, heavy} = params || {};
    let {header, onProgress, beforeSend} = params;
    let request = new XMLHttpRequest();
    request.open((method || 'GET'), url, async === undefined ? true: async);

    for(var key in (header || {})){
        if(header.hasOwnProperty(key)){
            request.setRequestHeader(key, header[key]);
        }
    }

    request.onload = function() {
        let data = request.responseText;
        if (request.status >= 200 && request.status < 400) {
            data = JSON.parse(request.responseText);
            callback(true, data, request.status, request)
        } else {
            callback(false, data, request.status, request)
        }
    };

    request.onerror = function() {
        let data = JSON.parse(request.responseText);
        callback(false, data, request.status, request)
    };

    request.upload.onprogress = function(e){
        onProgress && onProgress(e);
    };

    let _data;
    switch (dataType) {
        case 'file':
            _data = data;
            break;
        case 'json':
        default:
            request.setRequestHeader('Content-Type', contentType === undefined ? "application/json; charset=utf-8" : contentType);
            _data = JSON.stringify(data);
    }

    beforeSend && beforeSend(request);

    request.send(_data)

};

export default new CubY_XHR();

function temp() {
    let {url, method, payload, ref, async, xhr, contentType, noAuth,dataType, processData, cache, noJSON, ajax,callback, heavy} = params || {};
    let requestQueueNumber = CubY.getValue('requestQueueNumber') || 0;
    let queue = CubY.getValue('requestQueue') || [];
    CubY.setValue('requestQueue', queue);

    if(!CubY.ifCurrentUserIsAdmin() && noAuth !== true && (method || 'get') !== 'get'){
        return;
    }

    ref = this.getValue('currentRef');
    if(requestQueueNumber < (CCONFIG.MAX_REQUEST || 3)) {
        CubY.debug('Requesting: ' + (method || 'get') +' '+ url, {tag: 'WEB'});
        CubY.setValue('requestQueueNumber', ++requestQueueNumber);
        $.ajax((ajax || {
            url: url,
            type: method || 'get',
            async: async || true,
            contentType: processData || "application/json; charset=utf-8",
            crossDomain: true,
            data: JSON.stringify(payload),
            dataType: dataType || "json",
            xhr: xhr,
            beforeSend: function (xhr) {
                CubY.setValue('loading', heavy ? 'heavy' : true);
                if (CubY.getValue('Authorization')) {
                    xhr.setRequestHeader("Authorization", CubY.getValue('Authorization'));
                }
            },

        })).done(function (response, textStatus, xhr) {
            CubY.setValue('loading', false);
            if (ref !== undefined && ref !== CubY.getValue('currentRef')) {
                return;
            }
            if (typeof callback === 'function') callback(true, response, textStatus, xhr)
        }).fail(function (response, textStatus, xhr) {
            CubY.setValue('loading', false);
            let status = response.status;
            let isHandled;

            if (ref !== undefined && ref !== CubY.getValue('currentRef')) {
                return;
            }
            if (typeof callback === 'function') {
                isHandled = callback(false, response, textStatus, xhr)
            };

            if(isHandled){
                return;
            }

            switch (status) {
                case 401:
                    CubY.storeValue('Authorized', false);
                default:
                    CubY.networkFail && CubY.networkFail(status)
            }


        }).always(function(){
            let queue = CubY.getValue('requestQueue');
            let p = queue.shift();

            p && CubY.server(p);
            let requestQueueNumber = CubY.getValue('requestQueueNumber');
            CubY.setValue('requestQueueNumber', Math.max(0, --requestQueueNumber));
        })
    }else {
        CubY.debug('Reach max request number, holding request.', {tag: 'WEB'});
        let queue = CubY.getValue('requestQueue');
        queue.push(params);
        CubY.setValue('requestQueue', queue);
    }
}