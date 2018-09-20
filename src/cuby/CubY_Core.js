import CubY from "./CubY";

const EMPTY_FUNCTION = ()=>{};
class CubY_Core{
    constructor(_props){
        let props = props || {};
        let self = this;
        this.init(props);
    }

    init(_props){
        let props = _props || {};
        this.dataMap = {};
        this.connectionMap = {};
        this.browser = this.getBrowser();
        window.cc = this;
    }
    getCallerName(){
        // Include this function just for fun
        console.warn('[Non-standard]: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.')
        try {
            let str = new Error().stack.toString();
            let array = str.split('at');
            let name = array[3];
            name = (name.split(' '))[1];
            return name;
        }catch (e){
            console.warn('[getCallName] feature is not supported in this client: ' + this.getBrowser())
        }
    }
    getBrowser(){
        let isIE = false;
        let isChrome = false;
        let isOpera = false;
        if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0){
            isOpera = true;
            return 'opera';
        }
        if(typeof InstallTrigger !== 'undefined'){
            return 'firefox';
        }
        if(/constructor/i.test(window.HTMLElement) || (function (p) {
                return p.toString() === "[object SafariRemoteNotification]";
            })(!window['safari'] || safari.pushNotification)){
            return 'safari';
        }
        if(false || !!document.documentMode){
            Object.assign = function () {
                var output = arguments[0];
                for (var i = 1; i < arguments.length; i++) {
                    for (var key in arguments[i]) {
                        var obj = arguments[i];
                        if (obj.hasOwnProperty(key))
                            output[key] = obj[key];
                    }
                }
                return output;
            };
            if (!('remove' in Element.prototype)) {
                Element.prototype.remove = function() {
                    if (this.parentNode) {
                        this.parentNode.removeChild(this);
                    }
                };
            }
            isIE =true;
            return 'ie';
        }
        if(!isIE && !!window.StyleMedia){
            return 'edge';
        }
        if(!!window.chrome && !!window.chrome.webstore){
            isChrome = true
            return 'chrome';
        }
        if((isChrome || isOpera) && !!window.CSS){
            return 'blink';
        }
    }

    storeDataArray(_array, _idKey, _itemProcessor, _options, _callback) {
        var self = this;
        var options = _options || {};
        var idKey = _idKey || 'id';
        var callback = _callback || EMPTY_FUNCTION;
        var array = _array || [];
        var itemList = [];
        var itemProcessor = _itemProcessor || EMPTY_FUNCTION;

        array.forEach(function (_item) {
            var key = _item[idKey];
            if (key === undefined) {
                return;
            }

            var item = self.storeValue(key, _item, _options);

            itemProcessor(item);
            itemList.push(item);
        });

        callback(_array, itemList);
        return itemList;
    };
    setValue(key, value){
       this.storeValue(key, value,{overwrite:true, forceReact: true})
    }
    storeValue(_key, _value, _options, _callback) {
        var options = _options || {};
        var store = this.dataMap;
        var key = ''+_key;
        var callback = _callback || EMPTY_FUNCTION;
        var newValue = _value;
        var item = store[key];
        var shouldReact = true;
        if(item!==undefined && item === Object(item) && options.overwrite!==true && !(item instanceof Array)) {
            item = Object.assign(item, newValue);
        }else {
            shouldReact = (item!==newValue);
            item = newValue;
        }
        this.dataMap[key] = item;

        callback(item);
        if(shouldReact || options.forceReact) {
            this.react(key);
        }
        return item;
    };
    getValue(key, options) {
        let _key = key || '' ;
        _key = '' + key;
        let selector = _key.charAt(0);
        let name = _key.substring(1);
        switch (selector){
            case '#':
                let id = this.getValue(name);
                return this.getValue(id);
            default:
                return this.dataMap[_key];
        }
    };

    connect(_key){
        let newConector = new CubY_Connector(_key, this);
        return newConector;
    }
    react(key){
        var self = this;
        var connectionMap = this.connectionMap;
        var connectorMap = connectionMap[key] || {};
        var newValue = self.getValue(key);
        for(var id in connectorMap){
            if(connectorMap.hasOwnProperty(id)){
                connectorMap[id].run(newValue)
            }
        }
    }
    readValue(value, defaultValue){
        let _value = value;
        if(typeof _value === "function"){z
            let output = _value();
            return output !== undefined ? output : defaultValue;
        }else{
            return _value !== undefined ? _value : defaultValue;
        }
    }
    isObjectEmpty(obj){
        if(!obj){
            return true
        }
        for(var key in obj){
            if(obj.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    }

    createID() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    debug(str) {
        if(this.getValue('DEBUG_MODE')){
            console.log('DEBUG: ' + str);
        }
    };

    server(params) {
        let {url, method, payload, ref, async, contentType, dataType, callback} = params || {};
        ref = this.getValue('currentRef');
        $.ajax({
            url: url,
            type: method || 'get',
            async: async || true,
            contentType: contentType || "application/json; charset=utf-8",
            crossDomain: true,
            data: JSON.stringify(payload),
            dataType: dataType || "json",
            beforeSend: function (xhr) {
                CubY.setValue('loading', true);
                if (CubY.getValue('Authorization')) {
                    xhr.setRequestHeader("Authorization", CubY.getValue('Authorization'));
                }
            },

        }).done(function (response, textStatus, xhr) {
            CubY.setValue('loading', false);
            if(ref !== undefined && ref !== CubY.getValue('currentRef') ){
                return;
            }
            if(typeof callback === 'function')callback(true, response, textStatus, xhr)
        }).fail(function (response, textStatus, xhr) {
            CubY.setValue('loading', false);
            if(response.status === 401){
                CubY.storeValue('Authorized', false);
            }
            if(ref !== undefined && ref !== CubY.getValue('currentRef') ){
                return;
            }
            if(typeof callback === 'function')callback(false, response, textStatus, xhr)
        })
    };
}
const _CubY_Core = new CubY_Core();
export default _CubY_Core;

class CubY_Connector{
    constructor(key, core){
        let self = this;
        this.id =  'connector-' + CubY.createID();
        this.bindingKey = key;

        this.insert = function () {
            var connectorMap = core.connectionMap[self.bindingKey] || {};
            connectorMap[self.id] = self;
            core.connectionMap[self.bindingKey] = connectorMap;
        };
        this.remove = function () {
            try {
                if(core.connectionMap[self.bindingKey]){
                    if(core.connectionMap[self.bindingKey][self.id]){
                        delete core.connectionMap[self.bindingKey][self.id];
                    }
                    if (CubY.isObjectEmpty(core.connectionMap[self.bindingKey])) {
                        delete core.connectionMap[self.bindingKey];
                    }
                }
            }catch (e){
                console.warn('[Warning]: Connector remove method reference error.')
            }
        };
        this.insert();
    }
    to(action){
        this.action = action;
        return this;
    }
    belong(owner){
        this.owner = owner;
        owner.connectionList.push(this);
        return this;
    }
    run(newValue){
        let self = this;
        if(this._reactTimer !== undefined){
            clearTimeout(this._reactTimer)
        }
        this._reactTimer = setTimeout(function () {
            if (typeof self.action === 'function') {
                if (self.owner) {
                    if (self.owner.isActive) {
                        self.action.call(self.owner, newValue);
                    }
                } else {
                    self.action(newValue);
                }
            }
            self._reactTimer = undefined;
        }, 25);
    }
}
