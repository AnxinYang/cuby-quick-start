/**
 * Created by Anxin Yang on 6/23/2018.
 */
import toolbarContainer from '../components/toolbar';
import CubY from "../Framework/CubY/CubY";
const enterpriseFields = ['name','address','adminEmail','adminPhone'];
const enterpriseLabels = ['Name','Address','Admin Email','Admin Phone'];

var networkContainer = CubY.createElement('div', 'networkContainer')
    .appendClass('mainContent')
    .style({"width":"100%","height":"100%", "transition": "0.2s"})
    .attr('activated', setupNetworkView);

CubY.connect('sites').to(function (sites) {
    let siteTable = networkContainer.select('#siteTable') || {};
    let mapContainer = networkContainer.select('#mapContainer') || {};
    CubY.appendSiteMarkers(sites, mapContainer);
    siteTable.updater('update')();
}).belong(networkContainer);

CubY.connect('links').to(function (sites) {
    let siteDetailTable = this.select('#siteDetailTable') || {};
    siteDetailTable.updater('update')();
}).belong(networkContainer);

CubY.connect('enterprises').to(function (sites) {
    let enterpriseTable = networkContainer.select('#enterpriseTable') || {};
    enterpriseTable.updater('update')();
}).belong(networkContainer);

CubY.connect('currentViewType').to(function (type) {
    switchContent(type)
}).belong(networkContainer);

CubY.connect('currentLevel').to(function (level) {
    let currentViewType = CubY.getValue('currentViewType');
    switchContent(currentViewType)
}).belong(networkContainer);

function setupNetworkView() {
    let currentEnterprise = CubY.getValue('currentEnterprise');
    let currentViewType = CubY.getValue('currentViewType');

    let enterpriseTable = this.select('#enterpriseTable');
    let siteTable = this.select('#siteTable');
    let siteDetailTable = this.select('#siteDetailTable');
    let toolbar = this.select('#toolbarContainer');
    let mapContainer = this.select('#mapContainer');

    if(toolbar === undefined){
        toolbar = networkContainer.appendElement(toolbarContainer);
        toolbar.appendClass('networkContent');
        toolbar.appendClass('table');
        toolbar.appendClass('diagram');
        toolbar.appendClass('map');
    }

    if(enterpriseTable === undefined){
        enterpriseTable = CubY.createEnterpriseTable(CubY.getValue('enterprises'));
        enterpriseTable.appendClass('networkContent');
        networkContainer.appendElement(enterpriseTable);
    }
    if(siteTable === undefined){
        siteTable = CubY.createSiteTable(CubY.getValue('sites'));
        siteTable.appendClass('networkContent');
        networkContainer.appendElement(siteTable);
    }
    if(siteDetailTable === undefined){
        siteDetailTable = CubY.createSiteDetailTable(CubY.getValue('currentSite'));
        siteDetailTable.appendClass('networkContent');
        networkContainer.appendElement(siteDetailTable);
    }

    if(mapContainer === undefined){
        mapContainer = CubY.createElement('div', 'mapContainer')
            .appendClass('networkContent').appendClass('map')
            .style(CubY.MAP_CONTAINER_STYLE);
        mapContainer.map = CubY.appendMap(mapContainer.dom);
        networkContainer.appendElement(mapContainer);
    }

    switchContent(currentViewType);
}

function switchContent(viewType) {
    let contents = networkContainer.select('.networkContent');
    let currentViewType = viewType.toLowerCase()
    contents.forEach((content)=>{
        if(content.classes.indexOf(currentViewType)<0) {
            content.style('display', 'none')
        }else{
            content.style('display', content.attribute.display || '');
        }
    });

    let currentLevel = CubY.getValue('currentLevel');
    switch (currentViewType){
        case 'table':
            switchTable(currentLevel);
            break;
    }
}

function switchTable(currentLevel) {
    if (!networkContainer.isActive) {
        return;
    }
    let enterpriseTable = networkContainer.select('#enterpriseTable');
    let siteTable = networkContainer.select('#siteTable');
    let siteDetailTable = networkContainer.select('#siteDetailTable');
    switch (currentLevel) {
        case 'carrier':
            enterpriseTable.style('display', '');
            siteTable.style('display', 'none');
            siteDetailTable.style('display','none');
            break;
        case 'enterprise':
            enterpriseTable.style('display', 'none');
            siteTable.style('display', '');
            siteDetailTable.style('display','none');
            break;
        case 'site':
            enterpriseTable.style('display', 'none');
            siteTable.style('display', 'none');
            siteDetailTable.style('display','');
            break;
    }
}





export default networkContainer;