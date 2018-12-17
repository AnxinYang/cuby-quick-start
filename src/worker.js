import Worker from './services/Worker';
import raf from './cuby/CubY_RAF';

let worker = self;
raf.content(worker);
onmessage = function (e) {
    let self = this;
    let payload = e.data;
    let {task, data, options, handleID} = payload || {};
    let reply;
    switch (task) {
        case 'test':
            reply = test(data);
            break;
        case 'setTimer':
            worker.requestTimeout(function () {
                self.postMessage({handleID: handleID, reply: true});
            }, data);
            return;
        default:
            reply = Worker[task](data);
    }
    this.postMessage({handleID: handleID, reply: reply});
};


function test() {
    return 'Ready to work!'
}