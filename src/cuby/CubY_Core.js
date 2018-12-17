const EMPTY_FUNCTION = ()=>{};
class CubY_Core{
    constructor(props = {}){
        let self = this;
        this.init(props);
    }

    init(props) {
        let self = this;
        this.dataMap = {};
        this.connectionMap = {};
        this.browser = this.getBrowser();
        window.ccaxy = this;
        this.setupDebugger(props);
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
    storeArray(array = [], options = {}){
        var self = this;
        let {idKey, callback, pre, post} = options;
        idKey = idKey || 'id';
        var itemList = [];
        array.forEach(function (_item) {
            var key = _item[idKey];
            let item = _item;
            if (key === undefined) {
                return;
            }
            if(pre){
                item = pre(_item)
            }
            item = self.storeValue(key, item, options);
            if(post) {
                post(item);
            }
            itemList.push(item);
        });

        callback && callback(array, itemList);
        return itemList;
    }
    setValue(key, value){
       return this.storeValue(key, value,{overwrite:true, forceReact: true})
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
        if(_key === undefined){
            console.error('[Violation]: Cannot create a connector with a invalid key.');
            return undefined;
        }
        return new CubY_Connector(_key, this);
    }
    react(key){
        var self = this;
        var connectionMap = this.connectionMap;
        var connectorMap = connectionMap[key] || {};
        var newValue = self.getValue(key);
        let counter = 0;
        for(var id in connectorMap){
            if(connectorMap.hasOwnProperty(id)){
                connectorMap[id].run(newValue);
            }
        }
    }
    readValue(value, defaultValue){
        let _value = value;
        if(typeof _value === "function"){
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

    setupDebugger(props){
        let {DEBUG_MODE, DEBUG_TAGS} = props || {};
        let debugTags = DEBUG_TAGS || [];
        switch (DEBUG_MODE) {
            case 1:
                window.ccsyslog = [];
                this.debug = function (str, options = {}) {
                    let {type, tag} = options;
                    ccsyslog.push('[' + (type || 'log') + '] ' + '[' + (tag || 'LOG') + '] ' + str);
                };
                break;
            case 2:
                // this.debug = function (str, options = {}) {
                //     let {type, tag} = options;
                //     if(debugTags.length ===0 || debugTags.indexOf(tag)>-1) {
                //         console[(type || 'log')]('[' + (tag || 'LOG') + '] ' + str);
                //     }
                //
                // };
                this.debug = function (str, options = {}) {
                    let {type, tag, detail} = options;
                    let payload ={
                        task: 'debug',
                        data:{
                            str: str,
                            type: type,
                            tag: tag,
                            DEBUG_TAGS: DEBUG_TAGS,
                            DEBUG_MODE:DEBUG_MODE,
                        },
                    };
                    cw.sent(payload);
                    // if(debugTags.length ===0 || debugTags.indexOf(tag)>-1) {
                    //     console[(type || 'log')]('[' + (tag || 'LOG') + '] ' + str + (detail ? ('\nDetail:\n' + detail) : ''));
                    // }
                };
                break;
            case 3:
                // this.debug = function (str, options = {}) {
                //     let {type, tag, detail} = options;
                //     if(debugTags.length ===0 || debugTags.indexOf(tag)>-1) {
                //         console[(type || 'log')]('[' + (tag || 'LOG') + '] ' + str + (detail ? ('\nDetail:\n' + detail) : ''));
                //     }
                // };
                this.debug = function (str, options = {}) {
                    let {type, tag, detail} = options;
                    let payload ={
                        task: 'debug',
                        data:{
                            str: str,
                            type: type,
                            tag: tag,
                            detail: (detail && detail.toString()) || undefined,
                            DEBUG_TAGS: DEBUG_TAGS,
                            DEBUG_MODE:DEBUG_MODE,
                        },
                    };
                    cw.sent(payload);
                    // if(debugTags.length ===0 || debugTags.indexOf(tag)>-1) {
                    //     console[(type || 'log')]('[' + (tag || 'LOG') + '] ' + str + (detail ? ('\nDetail:\n' + detail) : ''));
                    // }
                };
                break;
            default:
                this.debug = ()=>{};
                break;

        }
    }

}


class CubY_Connector{
    constructor(key, core){
        let self = this;
        this.id =  'connector-' + CubY.createID();
        this.bindingKey = key;
        this._freq = 32;

        this.insert = function () {
            var connectorMap = core.connectionMap[self.bindingKey] || {};
            connectorMap[self.id] = self;
            core.connectionMap[self.bindingKey] = connectorMap;

            if(core.DEBUG_MODE){
                let counter = 0
                for(var key in connectorMap){
                    if(connectorMap.hasOwnProperty(key)){
                        counter++;
                    }
                }
                CubY.debug('KEY: '+ self.bindingKey + ' CONNECT #: ' +counter);
            }

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
    freq(ms){
        this._freq = ms;
        return this;
    }
    run(newValue){
        let self = this;
        if(this._reactTimer !== undefined){
            cw.clearTimer(this._reactTimer)
        }
        if (self.action) {
            if (self.owner) {
                if (self.owner.isActive) {
                    this._reactTimer = cw.setTimer(
                        function () {
                            let t0 = performance.now();
                            self.action.call(self.owner, newValue);
                            let t1 = performance.now();
                            CubY.debug('Element ' + self.owner.id + ' took [' + (t1 - t0).toFixed(0) + 'ms] for reacting to the change of [' + self.bindingKey + ']. ', {
                                tag: 'REACT',
                                detail: self.action
                            });
                        }, this._freq)
                }
            }else {
                this._reactTimer = cw.setTimer(function () {
                    let t0 = performance.now();
                    self.action(newValue);
                    let t1 = performance.now();
                    CubY.debug('Reacting to the change of [' + self.bindingKey + '] took ['+ (t1- t0).toFixed(0) +'ms]', {tag: 'REACT', detail:self.action});

                },this._freq);
            }
        }
    }
}

export default CubY_Core;