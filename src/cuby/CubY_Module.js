function CubY_Module(fn, options = {}) {
    this.module = fn;
    this.options = options;
}
CubY_Module.prototype = {
    content: function (options) {
        if(typeof this.module === 'function'){
            //let _options = Object.assign({},this.options, options);
            this.module = this.module(options);
        }
        return this.module;
    }
};

export default CubY_Module;