/**
 * Created by Anxin Yang on 3/28/2018.
 */
import CubY from './cuby/CubY';
import $ from 'jquery';
window.$ = $;
window.root = new CubY.createElement('div', 'cuby_root', document.getElementById('app'));
let startTime = 1425283200;
let currentTime = parseInt(Date.now()/1000);
let dt = 86400;
let currentTimeStamp = startTime;
let dataList = CubY.storeValue('dataList', []);
let keys = ['keywords', 'lat', 'lng', 'name', 'timestamp', 'description', 'city', 'link'];
let table = CubY.createElement('table');
let thr = CubY.createElement('tr');
keys.forEach(function (key) {
    thr.append('th').content(key);
});
table.appendElement(thr);
root.appendElement(table);

function callApi(time) {
    CubY.server({
        method: 'get',
        url: 'https://syria.liveuamap.com/ajax/do?act=pts&curid=0&time='+time+'&last=0',
        callback: function (state, response, textStatus, xhr) {
            CubY.storeDataArray(response.venues, 'id', function (item) {
                for(var key in item) {
                    if(keys.indexOf(key)<0){
                        delete item[key];
                    }
                }
                let tr = CubY.createElement('tr');
                keys.forEach(function (key) {
                    tr.append('td').content(item[key]);
                });
                table.appendElement(tr);
                dataList.push(item);
            });
            if(time<currentTime) {
                callApi((time + dt))
            }
        }
    });
}
callApi(startTime);
assetLoaded('main');