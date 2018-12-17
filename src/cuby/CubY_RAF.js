import CubY_Module from "../cuby/CubY_Module";

let mod = new CubY_Module(function (obj) {
    let o = (obj || window);
    o.requestAnimFrame = (function () {
        return o.requestAnimationFrame ||
            o.webkitRequestAnimationFrame ||
            o.mozRequestAnimationFrame ||
            o.oRequestAnimationFrame ||
            o.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                o.setTimeout(callback, 1000 / 60);
            };
    })();

    o.requestTimeout = function (fn, delay) {
        if (!o.requestAnimationFrame &&
            !o.webkitRequestAnimationFrame &&
            !(o.mozRequestAnimationFrame && o.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
            !o.oRequestAnimationFrame &&
            !o.msRequestAnimationFrame)
            return setTimeout(fn, delay);

        var start = new Date().getTime(),
            handle = new Object();

        function loop() {
            var current = new Date().getTime(),
                delta = current - start;

            delta >= delay ? fn.call() : handle.value = o.requestAnimFrame(loop);
        };

        handle.value = o.requestAnimFrame(loop);
        return handle;
    };

    o.clearRequestTimeout = function (handle) {
        o.cancelAnimationFrame ? o.cancelAnimationFrame(handle.value) :
            o.webkitCancelAnimationFrame ? o.webkitCancelAnimationFrame(handle.value) :
                o.webkitCancelRequestAnimationFrame ? o.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
                    o.mozCancelRequestAnimationFrame ? o.mozCancelRequestAnimationFrame(handle.value) :
                        o.oCancelRequestAnimationFrame ? o.oCancelRequestAnimationFrame(handle.value) :
                            o.msCancelRequestAnimationFrame ? o.msCancelRequestAnimationFrame(handle.value) :
                                clearTimeout(handle);
    };

    /**
     * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
     * @param {function} fn The callback function
     * @param {int} delay The delay in milliseconds
     */
    o.requestInterval = function (fn, delay) {
        if (!o.requestAnimationFrame &&
            !o.webkitRequestAnimationFrame &&
            !(o.mozRequestAnimationFrame && o.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
            !o.oRequestAnimationFrame &&
            !o.msRequestAnimationFrame)
            return setInterval(fn, delay);

        var start = new Date().getTime(),
            handle = new Object();

        function loop() {
            var current = new Date().getTime(),
                delta = current - start;

            if (delta >= delay) {
                fn.call();
                start = new Date().getTime();
            }

            handle.value = o.requestAnimFrame(loop);
        };

        handle.value = o.requestAnimFrame(loop);
        return handle;
    }

    /**
     * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
     * @param {int|object} fn The callback function
     */
    o.clearRequestInterval = function (handle) {
        o.cancelAnimationFrame ? o.cancelAnimationFrame(handle.value) :
            o.webkitCancelAnimationFrame ? o.webkitCancelAnimationFrame(handle.value) :
                o.webkitCancelRequestAnimationFrame ? o.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
                    o.mozCancelRequestAnimationFrame ? o.mozCancelRequestAnimationFrame(handle.value) :
                        o.oCancelRequestAnimationFrame ? o.oCancelRequestAnimationFrame(handle.value) :
                            o.msCancelRequestAnimationFrame ? o.msCancelRequestAnimationFrame(handle.value) :
                                clearInterval(handle);
    };

});

export default mod
