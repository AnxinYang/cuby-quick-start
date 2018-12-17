import CubY from "./CubY";

/**
 * Created by Anxin Yang on 5/26/2018.
 */

function createID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

window.cdomList = [];
function CDOM(_tag, _id, _root, NS) {
    this.tag = this.readValue(_tag) || 'div';
    this.id = this.readValue(_id)|| this.tag + '_' + createID();
    this.dom = NS === true? document.createElementNS("http://www.w3.org/2000/svg",this.tag) : document.createElement(this.tag);
    this.NS = NS;
    this.onEvent = {};
    this.childrenList = [];
    this.attribute = {};
    this.property = {};
    this.domStyle = {};
    this.updaters = {};
    this.connectionList = [];
    this.parent;
    this.classes = [];
    this.root(_root);
    this.hasInit = false;
    this.attr('id', this.id);

    let self = this;
    this.updater = function (name) {
        let updater =this.updaters[name];
        return function () {
            if(updater) {
                updater.call(self, self.data, arguments);
            }
        }
    };
    cdomList.push(this);
}
CDOM.prototype = {
    setUpdater(name,updater){
        this.updaters[name] = updater;
        return this;
    },
    bind(key, fn, options = {}){
        if(key) {
            let {speed} = options;
            switch (speed) {
                case 'fastest':
                    speed = 0;
                    break;
                case 'fast':
                    speed = 16;
                    break;
                case 'normal':
                    speed = 32;
                    break;
                case 'slow':
                    speed = 64;
                    break;
                case 'slowest':
                    speed = 128;
                    break;
                case 'do not care':
                    speed = 256;
                    break;
                case 'why we need this?':
                    speed = 512;
                    break;
                case 'really?':
                    speed = 1024;
                    break;
                default:
                    speed = 32;
            }
            CubY.connect(key).to(fn).belong(this).freq(speed);
        }
        return this;
    },
    root(_root){
        if(_root){
            _root.appendChild(this.dom);
            this.isRoot = true;
            this.activated();
        }
        return this;
    },
    append(_tag,_id){
        let tag = this.readValue(_tag);
        let id = this.readValue(_id);
        let element = CubY.createElement(tag,id);
        this.appendElement(element);
        return element;
    },
    appendNS(_tag,_id){
        let tag = this.readValue(_tag);
        let id = this.readValue(_id);
        let element = CubY.createElementNS(tag,id);
        this.appendElement(element);
        return element;
    },
    appendElement(CubY_DOM) {
        if (CubY_DOM === undefined) {
            return;
        }
        let element = this.readValue(CubY_DOM);
        element.parent = this;

        this.childrenList.push(element);
        this.dom.appendChild(element.dom);
        if (this.isActive || this.isRoot) {
            element.activated();
        }
        return element;
    },
    attr(key,_value){
        let value;

        if(typeof key === 'object'){
            for(var k in key){
                this.attr(k,key[k])
            }
            return this;
        }

        if(key === 'init' || key ==='activated' || key === 'deactivated'){
            value = _value;
        }else{
            value = this.readValue(_value);
            if(value === false){
                if(this.NS){
                    this.dom.removeAttribute(null, key)
                }else{
                    this.dom.removeAttribute(key)
                }
            }else {
                if (this.NS) {
                    this.dom.setAttributeNS(null, key, value)
                } else {
                    this.dom.setAttribute(key, value)
                }
            }

        }

        if(key === 'id'){
            this.id = value;
        }
        this.attribute[key] = value;
        return this;
    },
    prop(key,_value){
        let value;

        if(typeof key === 'object'){
            for(var k in key){
                this.prop(k,key[k])
            }
            return this;
        }

        if(key ==='activated' || key === 'deactivated'){
            value = _value;
        }else{
            value = this.readValue(_value);
            this.dom[key] =  value;
        }

        this.property[key] = value;
        return this;
    },
    on(eventName,_value, tag = ''){
        let value = _value;
        let self = this;
        if(this.onEvent[eventName + tag]){
            this.dom.removeEventListener(eventName, this.onEvent[eventName + tag]);
        }
        this.onEvent[eventName + tag] = value;
        if(value) {
            this.dom.addEventListener(eventName, function (e) {
                self.onEvent[eventName + tag].call(self, e, self.data)
            });
        }
        return this;
    },
    style(_key,_value, options = {}){
        let self = this;
        let key = this.readValue(_key);
        let value = this.readValue(_value);
        if(typeof key === 'object'){
            for(var k in key){
                this.style(k,key[k], options)
            }
            return this;
        }
        let {delay} = options;
        if(delay){
            cw.setTimer(function () {
                self.domStyle[key] = value;
                self.dom.style[key] = value;
            }, delay)
        }else {
            this.domStyle[key] = value;
            this.dom.style[key] = value;
        }
        return this;
    },
    content(_value){
        let value = this.readValue(_value);
        this.innerHTML = value;
        this.dom.innerHTML = value;
        return this;
    },
    getContent(){
        return this.innerHTML;
    },
    appendClass(_className){
        let className = this.readValue(_className);
        let classes = this.classes || [];
        classes.push(className);
        this.dom.classList.add(className);
        this.classes = classes;
        return this;
    },
    removeClass(_className){
        let className = this.readValue(_className);
        let classes = this.classes || [];
        let index = classes.indexOf(className);
        if(index < 0){
            return this;
        }
        classes.splice(index, 1);
        this.dom.classList.remove(className);
        this.classes = classes;
        return this;
    },
    select(_selector){
        let selector = _selector.charAt(0);
        let name = _selector.substring(1);
        switch (selector){
            case '#':
                return this.selectById(name);
            case '.':
                return this.selectByClassName(name);
            default:
                return this.selectByTag(_selector);
        }
    },
    detach(){
        BACKGROUND.appendElement(this);
        this.deactivated();
    },
    selectById(id){
        let childrenList = this.childrenList;
        let target;
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.id === id){
                target = child;
                break;
            }
        }
        return target;
    },
    selectByClassName(className){
        let childrenList = this.childrenList;
        let targetList = [];
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.classes.indexOf(className)>-1){
                targetList.push(child);
            }
        }
        return targetList;
    },
    selectByTag(_tag){
        let childrenList = this.childrenList;
        let targetList = [];
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.tag === _tag){
                targetList.push(child);
            }
        }
        return targetList;
    },
    remove(_selector,_transition){
        if(_selector===undefined || typeof _selector === 'number'){
            this.removeSelf(_selector || _transition);
            return;
        }
        let selector = _selector.charAt(0);
        let name = _selector.substring(1);
        let target;
        switch (selector){
            case '#':
                this.removeById(name,_transition);
                break;
            case '.':
                this.removeByClassName(name,_transition);
                break;
            default:
                this.removeByTag(_selector,_transition);
        }
    },
    removeById(id,_transition){
        let childrenList = this.childrenList;
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.id === id){
                childrenList.splice(i,1);
                child.remove(undefined,_transition);
                i--;
                break;
            }
        }
    },
    removeByClassName(className,_transition){
        let childrenList = this.childrenList;
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.classes.indexOf(className)>-1){
                childrenList.splice(i,1);
                child.remove(undefined,_transition);
                i--;
            }
        }
    },
    removeByTag(_tag,_transition){
        let childrenList = this.childrenList;
        for(var i = 0; i<childrenList.length;i++){
            let child = childrenList[i];
            if(child.tag === _tag){
                childrenList.splice(i,1);
                child.remove(undefined,_transition);
                i--;
            }
        }
    },
    removeAllChildren(){
        let childrenList = this.childrenList;
        while (childrenList.length>0){
            let child = childrenList.pop();
            child.remove();
        }
        this.childrenList = [];
    },
    removeSelf(_transition){
        let self = this;
        this.deactivated();
        if(_transition) {
            this.deactivatedTimer = cw.setTimer(function () {
                self.dom.remove();
            },_transition)
        }else{
            self.dom.remove();
        }
        if(this.parent){
            let childrenList = this.parent.childrenList;
            for(var i = 0; i<childrenList.length;i++){
                let child = childrenList[i];
                if(child === this){
                    childrenList.splice(i,1);
                    this.parent.childrenList = childrenList;
                }
            }
        }

        this.removeAllChildren();

        let idx = cdomList.indexOf(this);
        if(idx>=0) {
            cdomList.splice(idx, 1)
        }
    },
    activated(){
        this.isActive = true;
        if(this.deactivatedTimer){
            cw.clearTimer(this.deactivatedTimer)
        }

        this.connectionList.forEach(function (connection) {
            connection.insert();
        });

        this.childrenList.forEach(function (child) {
            child.activated();
        });

        if(this.attribute.init !== undefined && !this.hasInit){
            this.attribute.init.call(this)
        }
        if(this.attribute.activated){
            this.attribute.activated.call(this);
        }
        this.hasInit = true;
    },
    deactivated(){
        this.isActive = false;

        this.connectionList.forEach(function (connection) {
            connection.remove();
        });

        this.childrenList.forEach(function (child) {
            child.deactivated();
        });

        if(this.attribute.deactivated){
            this.attribute.deactivated.call(this);
        }
    },
    readValue(_value){
        let value = _value;
        if(typeof value === "function"){
            return value.call(this,this.data);
        }else{
            return value;
        }
    }
};

let BACKGROUND = new CDOM('BACKGROUND', 'BACKGROUND');
//window.CDOM = CDOM;
export default CDOM