/**
 * Created by Anxin Yang on 11/28/2018.
 */
import localWorker from '../services/Worker';
import raf from '../services/raf';

function createWorkerID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4();
}

function CubY_Worker(config) {
    let self = this;
    this.isSupport = typeof(Worker) !== "undefined" && CubY.getBrowser() === 'chrome';
    if (this.isSupport) {
        this.worker = new Worker('worker.js');
        this.handlers = {};
        this.worker.onmessage = function (e) {
            let handleID = e.data.handleID;
            let reply = e.data.reply;
            self.handlers[handleID] && self.handlers[handleID](reply);
            delete self.handlers[handleID];
        };
    }
    raf.content();
}

CubY_Worker.prototype.sent = function (payload = {}) {
    let self = this;
    let {task, data, done} = payload;
    let worker = this.worker;
    let handleID = createWorkerID();
    if (this.isSupport) {
        let _payload = {
            task: task,
            data: data,
            handleID: handleID
        };

        if(done){
            self.handlers[handleID] = done;
        }

        worker.postMessage(_payload);
        // worker.onmessage = function (e) {
        //     let handleID = e.data.handleID;
        //     let reply = e.data.reply;
        //     self.handlers[handleID] && self.handlers[handleID](reply);
        //     delete self.handlers[handleID];
        // };
    }else{
        let d = localWorker[task](data);
        done && done(d);
    }
    return handleID;
};

CubY_Worker.prototype.temporary = function (payload = {}) {
    let self = this;
    let {task, data, done} = payload;
    let handleID = createWorkerID();
    if (this.isSupport) {
        let worker = new Worker('worker.js');
        let _payload = {
            task: task,
            data: data,
            handleID: handleID
        };

        if(done){
            self.handlers[handleID] = done;
        }

        worker.postMessage(_payload);
        worker.onmessage = function (e) {
            let handleID = e.data.handleID;
            let reply = e.data.reply;
            self.handlers[handleID] && self.handlers[handleID](reply);
            delete self.handlers[handleID];
            worker.terminate();
        };
    }else{
        let d = localWorker[task](data);
        done && done(d);
    }
    return handleID;
};

CubY_Worker.prototype.setTimer = function (fn, ms) {
    if(this.worker) {
        return cw.sent({
            task: 'setTimer',
            data: ms,
            done: fn
        });
    }else {
        return requestTimeout(fn,ms)
    }
};

CubY_Worker.prototype.clearTimer = function (handleID) {
    if(this.worker) {
        delete this.handlers[handleID];
    }else{
        clearRequestTimeout(handleID);
    }
};


export default CubY_Worker