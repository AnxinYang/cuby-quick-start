import CubY_Core from './CubY_Core';
import CDOM from './CubY_DOM';
import CubY_Routine from './CubY_Routine';
import CubY_Module from './CubY_Module';
import CubY_XHR from './CubY_XHR';
import CubY_RAF from './CubY_RAF';
const EMPTY_FUNCTION = ()=>{};


CubY_RAF.content();

function CubY (config) {
    let Core = new CubY_Core(config);
    let methods = {
        //Core
        getValue: Core.getValue.bind(Core),
        getBrowser: Core.getBrowser.bind(Core),
        storeValue: Core.storeValue.bind(Core),
        storeArray: Core.storeArray.bind(Core),
        setValue: Core.setValue.bind(Core),
        connect: Core.connect.bind(Core),
        react: Core.react.bind(Core),
        debug: Core.debug.bind(Core),
        readValue: Core.readValue.bind(Core),
        isObjectEmpty: Core.isObjectEmpty.bind(Core),
        createID: Core.createID.bind(Core),
        getCallerName: Core.getCallerName.bind(Core),

        //DOM
        createElement: function (_tag, _id, _root) {
            return new CDOM(_tag, _id, _root);
        },
        createElementNS: function (_tag, _id, _root) {
            return new CDOM(_tag, _id, _root, true);
        },
        //
        module: function(fn, options){
            return new CubY_Module(fn, options)
        },
        //xhr
        ajax: CubY_XHR.ajax,
        //Routine
        createRoutine:CubY_Routine.createRoutine.bind(CubY_Routine),
        getCurrentCycle:CubY_Routine.getCurrentCycle.bind(CubY_Routine),
        routine:CubY_Routine.routine.bind(CubY_Routine),
        //AddOns
        addOn: function (obj) {
            for(var key in obj){
                if(obj.hasOwnProperty(key)){
                    CubY[key] = obj[key];
                }
            }
        },
        //Other
        version: 'Privata.111618.00',
        debugInfo: [CubY_Core,CubY_Routine]
    };
    Object.assign(CubY, methods);
}


window.CubY = CubY;
export default CubY;
