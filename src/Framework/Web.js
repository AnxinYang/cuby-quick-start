/**
 * Created by Anxin Yang on 6/23/2018.
 */
var Web = {
    request(method, data, url, _settings, callback) {
        let settings = _settings || {};
        $.ajax({
            url: url,
            type: method,
            async: settings.async || true,
            contentType: settings.contentType || "application/json; charset=utf-8",
            data: JSON.stringify(data),
            dataType: settings.dataType || "json",
            beforeSend: function (xhr) {
                if (CubY.getValue('Authorization')) {
                    xhr.setRequestHeader("Authorization", CubY.getValue('Authorization'));
                }
            },

        }).done(function (response, textStatus, xhr) {
            if(typeof callback === 'function')callback(true, response, textStatus, xhr)
        }).fail(function (response, textStatus, xhr) {
            if(response.status === 401){
                CubY.storeValue('isLogin', false);
            }
            if(typeof callback === 'function')callback(false, response, textStatus, xhr)
        })
    },
    baseUrl:SERVER_CONFIG.MANO_URL
};
export default Web;