/**
 * Created by Anxin Yang on 6/23/2018.
 */
import toolbarContainer from '../components/toolbar';
import CubY from "../Framework/CubY/CubY";

var applicationContainer = CubY.createElement('div', 'applicationContainer')
    .appendClass('mainContent')
    .style({"width":"100%","height":"100%", "transition": "0.2s"})
    .attr('activated', setupApplicationView);

CubY.connect('sites').to(function (sites) {

}).belong(applicationContainer);

CubY.connect('links').to(function (sites) {
    let siteDetailTable = this.select('#siteDetailTable') || {};
    siteDetailTable.updater('update')();
}).belong(applicationContainer);

CubY.connect('enterprises').to(function (sites) {
    let enterpriseTable = applicationContainer.select('#enterpriseTable') || {};
    enterpriseTable.updater('update')();
}).belong(applicationContainer);

CubY.connect('currentViewType').to(function (type) {
    switchContent(type)
}).belong(applicationContainer);

CubY.connect('currentLevel').to(function (level) {
    let currentViewType = CubY.getValue('currentViewType');
    switchContent(currentViewType)
}).belong(applicationContainer);

function setupApplicationView() {
    let currentEnterprise = CubY.getValue('currentEnterprise');
    let currentViewType = CubY.getValue('currentViewType');

    let appTable = this.select('#appTable');
    let toolbar = this.select('#toolbarContainer');
    if(toolbar === undefined){
        toolbar = applicationContainer.appendElement(toolbarContainer);
        toolbar.appendClass('applicationContent');
    }
    if(appTable === undefined){
        let appTable =
        appTable = applicationContainer.appendElement(appTable);
        appTable.appendClass('applicationContent');
    }

}

function createAppTable(){
    const tableFields = ['name', 'role','state', 'deviceType', 'serialNum', 'cpu1Usage'];
    const headerLabels = ['Name', 'Role','State', 'Device Type', 'Serial Number', 'DP Usage %'];
    let table = CubY.createTable('siteTable');

    table.setUpdater('update',function () {
        table.remove('tr');
        let headerRow = CubY.createTableHeader(headerLabels);
        let list = CubY.getValue('sites');
        table.appendElement(headerRow);
        let selectedSite = CubY.getValue('selectedSite') || '';
        list.forEach(function (item) {
            let tr = CubY.createTableRow(tableFields, item, CubY.siteTableFormatter);
            table.appendElement(tr);
            tr.style({backgroundColor: selectedSite === item.id ? 'rgba(0, 99, 204,0.5)' : ''})
                .on('click', function () {
                    let selectedSite = CubY.getValue('selectedSite');
                    CubY.storeValue('selectedSite', selectedSite === item.id?undefined:item.id);
                })
                .on('mouseleave', function () {
                    this.style({backgroundColor: CubY.getValue('selectedSite') === item.id ? 'rgba(0, 99, 204,0.5)' : ''})
                })
                .on('dblclick', function () {
                    CubY.storeValue('currentSite', item.id);
                    CubY.storeValue('currentLevel', 'site');
                });
            CubY.connect('selectedSite').to(function (id) {
                this.style({backgroundColor: id === item.id ? 'rgba(0, 99, 204,0.5)' : ''})
            }).belong(tr);
        })
    });

    table.updater('update')();
    return table;
}



export default applicationContainer;