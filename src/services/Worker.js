/**
 * Created by Anxin Yang on 11/28/2018.
 */
const Worker = {
    sortObjectArray(payload = {}) {
        let {dataList, key, order} = payload || {};
        var length = (dataList || []).length;
        let shouldSwitch = false;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < (length - i - 1); j++) {
                if (order === 1) {
                    if (typeof dataList[j][key] === 'string') {
                        shouldSwitch = (dataList[j][key].toLowerCase() > dataList[j + 1][key].toLowerCase());
                    }
                    if (typeof dataList[j][key] === 'number') {
                        shouldSwitch = (dataList[j][key] > dataList[j + 1][key])
                    }
                    if (shouldSwitch) {
                        var tmp = dataList[j];
                        dataList[j] = dataList[j + 1];
                        dataList[j + 1] = tmp;
                    }
                } else if (order === 2) {
                    if (typeof dataList[j][key] === 'string') {
                        shouldSwitch = (dataList[j][key].toLowerCase() < dataList[j + 1][key].toLowerCase());
                    }
                    if (typeof dataList[j][key] === 'number') {
                        shouldSwitch = (dataList[j][key] < dataList[j + 1][key])
                    }
                    if (shouldSwitch) {
                        let tmp = dataList[j];
                        dataList[j] = dataList[j + 1];
                        dataList[j + 1] = tmp;
                    }
                } else {
                    return dataList;
                }
            }
        }
        return dataList;
    },
    debug(props) {
        let {DEBUG_MODE, DEBUG_TAGS, str, tag, type, detail} = props || {};
        let debugTags = DEBUG_TAGS || [];
        let debug;
        switch (DEBUG_MODE) {
            case 2:
                debug = function (str, options = {}) {
                    let {type, tag} = options;
                    if (debugTags.length === 0 || debugTags.indexOf(tag) > -1) {
                        console[(type || 'log')]('[' + (tag || 'LOG') + '] ' + str);
                    }

                };
                break;
            case 3:
                debug = function (str, options = {}) {
                    let {type, tag, detail} = options;
                    if (debugTags.length === 0 || debugTags.indexOf(tag) > -1) {
                        console[(type || 'log')]('[' + (tag || 'LOG') + '] ' + str + (detail ? ('\nDetail:\n' + detail) : ''));
                    }
                };
                break;
            default:
                debug = () => {
                };
                break;

        }
        debug(str, {
            tag: tag,
            type: type,
            detail: detail
        });
    },
    convertArrayOfObjectsToCSV(args) {
        let result, ctr, keys, columnDelimiter, lineDelimiter, data, schema;

        data = args.data || null;
        schema = args.schema || null;

        if (data === null || !data.length || schema === null || !schema.length) {
            return null;
        }


        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        result = '';
        schema.forEach(function (column, idx) {
            result += (column.label || column.key) + ((schema.length !== (idx + 1)) ? columnDelimiter : lineDelimiter);
        });

        data.forEach(function (item) {
            ctr = 0;
            schema.forEach(function (column) {
                if (ctr > 0) result += columnDelimiter;
                let str = item[column.key];
                if(column.dataFormatter){
                    str = Worker[column.dataFormatter](str)
                }
                result += str;
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    },
    timeDurationFormatter: function (ms) {
        let covertList = [86400000, 3600000, 60000, 1000];
        let output = '';
        let unitList = ['d', 'h', 'm', 's'];
        let shouldUnitDisplay = false;

        for (var i = 0; i < covertList.length; i++) {
            let value = Math.floor((+ms) / covertList[i]);
            if (value > 0) {
                shouldUnitDisplay = true;
                ms -= (value * covertList[i]);
            }
            if (shouldUnitDisplay) {
                output += (value + unitList[i] + (i === unitList.length - 1 ? '' : ':'))
            }
        }

        if (+output === 0 || output === '') {
            output = '-';
        }

        return output;
    },
    timeDurationFormatterSec: function (s) {
        return Worker.timeDurationFormatter(s*1000)
    },
    performanceCheck(){
        let iterations = 1000000;
        let testNumber = 10;
        let start;
        let total = 0;
        let test = function () {
            for(var i = 0; i < iterations; i++ ){
                (self || window).mark += i*i*i*i*i*i;
            }
        };
        for(var i = 0; i<testNumber; i++){
            start = performance.now();
            test();
            total += performance.now() - start;
        }


        return (total/testNumber).toFixed(0);
    }
};
export default Worker;