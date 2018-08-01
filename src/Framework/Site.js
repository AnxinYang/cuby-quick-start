/**
 * Created by Anxin Yang on 6/23/2018.
 */
import CubY from "./CubY/CubY";



const siteFields = ['name', 'role','state', 'deviceType', 'serialNum'];
const siteLabels = ['Name', 'Role','State', 'Device Type', 'Serial Number'];

var Site = {
    SITE_STATE_COLOR: ['lightgray','orange','red','red','limegreen'],
    siteProps: {
        siteBasic: {formType: 'text', label: 'Basic Information - Required'},
        name: {formType: 'input', label: 'Site Name'},
        role: {formType: 'select', label: 'Role', options:['Spine', 'Branch'], noEmpty: true, defaultValue:'Branch'},
        deviceType: {formType: 'select', label: 'DeviceType', options:[{"value":"X86-GenericServer", "label":"X86-Generic Server"},{"value":"AdvanTech1010", "label":"AdvanTech 1010"},{"value":"DellServer", "label":"Dell Server"}]},
        vmflavor: {formType: 'select', label: 'VM Flavcr', options:['Small','Medium', 'Large']},
        interfaceType: {formType: 'select', label: 'Interface Type', options:[{value:0,label:'Single'}, {value:1,label:'Dual'}]},
        managementIp: {formType: 'input', label: 'Management IP'},
        serialNum: {formType: 'input', label: 'Serial Number'},
        siteOptional: {formType: 'text', label: 'Detail Information - Optional, you may fill out these later'},
        contactName: {formType: 'input', label: 'Contact Name'},
        email: {formType: 'input', label: 'E-mail'},
        phoneNumber: {formType: 'input', label: 'Phone'},
        twoFaEnabled:{formType: 'select', label: 'Two Factor Enable', options:[{label:'False', value:false}, {label:'True', value:true}], defaultValue:'false', noEmpty: true},
        alertMethod: {formType: 'select', label: 'alertMethod', options:['Phone', 'Email']},
        address: {formType: 'input', label: 'Address'},
        /*address2: {formType: 'input', label: 'Address 2'},
        addresscity: {formType: 'input', label: 'City'},
        addressstate: {formType: 'input', label: 'State'},
        addresscountry: {formType: 'input', label: 'Country'},
        addresszip: {formType: 'input', label: 'Zip Code'},*/
        latitude: {formType: 'input', label: 'Latitude'},
        longitude: {formType: 'input', label: 'Longitude'},
        tag: {formType: 'input', label: 'Tag'},
        enterpriseId: {formType: 'hidden'},
        id: {formType: 'hidden'},
        state: {formType: 'hidden'},
    },
    siteWANProps:{
        connection1: {formType: 'text', label: 'WAN 1 - Optional'},
        name1: {formType: 'input', label: 'Connection Name'},
        interfaceName1: {formType: 'select', label: 'Interface Name', options:[{label:'Please Select a Device Type', value:'0'}], noEmpty: true, defaultValue: '0'},
        type1: {formType: 'select', label: 'Connection Type', options:[{label:'MPLS', value:'0'}, {label:'Broadband', value:'1'}], noEmpty: true, defaultValue: '0'},
        loadBalancingRole1:{formType: 'select', label: 'Load Balancing', options: [{label:'Active', value: 0}, {label:'Standby', value: 1}], noEmpty: true, defaultValue:'0'},
        connection2: {formType: 'text', label: 'WAN 2 - Optional '},
        name2: {formType: 'input', label: 'Connection Name'},
        interfaceName2: {formType: 'select', label: 'Interface Name', options:[{label:'Please Select a Device Type', value:'0'}], noEmpty: true, defaultValue: '0'},
        type2: {formType: 'select', label: 'Connection Type', options:[{label:'MPLS', value:'0'}, {label:'Broadband', value:'1'}], noEmpty: true, defaultValue: '1'},
        loadBalancingRole2:{formType: 'select', label: 'Load Balancing', options: [{label:'Active', value: 0}, {label:'Standby', value: 1}], noEmpty: true, defaultValue:'0'},
    },
    siteLANProps:{
        lanConnection: {formType: 'text', label: ''},
        lanInterfaceName: {formType: 'select', label: 'Interface Name', options:[{label:'Please Select a Device Type', value:'0'}], noEmpty: true, defaultValue: '0'},
        vlanId: {formType: 'input', label: 'vLAN Id'},
        ip:{formType: 'input', label: 'IP'},
        mask: {formType: 'input', label: 'Mask'},
        dhcpAdminState:{formType: 'select', label: 'DHCP Enable', options:[{label: 'Disable', value: '0'}, {label: 'Enable', value: '1'}], defaultValue:'0', onEmpty: true},
        ipRangeStart: {formType: 'input', label: 'IP Range Start'},
        ipRangeEnd: {formType: 'input', label: 'IP Range End'},
        dnsPrimaryIpAddr: {formType: 'input', label: 'Primary DNS'},
        dnsSecondaryIpAddr: {formType: 'input', label: 'Secondary DNS'},
    },
    getSiteForm: function () {
        let fields = [];
        let siteProps = CubY.siteProps;
        CubY.storeValue('siteCreateDeviceType', undefined , {overwrite: true});
        CubY.storeValue('siteCreateInterfaceType', undefined, {overwrite: true});
        CubY.storeValue('siteCreateFormRole', undefined, {overwrite: true});
        CubY.storeValue('siteCreateFormAddresses', {}, {overwrite: true});
        for(var key in siteProps){
            if(siteProps.hasOwnProperty(key)){
                let prop = siteProps[key];
                let field = CubY.createInput(key, prop);
                if(field) {
                    fields.push(field.field);
                    CubY.siteFormFieldProcessor(key,field)
                }
            }
        }
        for(var key in CubY.siteWANProps){
            if(CubY.siteWANProps.hasOwnProperty(key)){
                let prop = CubY.siteWANProps[key];
                let field = CubY.createInput(key, prop);
                if(field) {
                    fields.push(field.field);
                    CubY.siteFormFieldProcessor(key,field)
                }
            }
        }
        let lanContainer = CubY.createElement('div', 'lanConatainer');
        fields.push(lanContainer);
        CubY.storeValue('lanIdx', 0);
        let addLANButton = CubY.createElement('span', 'addLAN').style(CubY.SUBMIT_BUTTON_STYLE).content('Add LAN')
            .style('display', 'block')
            .style('marginLeft', '4em')
            .on('click', function () {
                let lanIdx = CubY.getValue('lanIdx');
                let lanContent = CubY.createElement('div', 'lanContent');
                let deleteLANButton = CubY.createElement('span', 'deleteLAN').style(CubY.SUBMIT_BUTTON_STYLE).content('Delete LAN')
                    .style('color','rgba(214, 48, 49, 1)')
                    .style('border','1px solid rgba(214, 48, 49, 0.5)')
                    .style('background', 'white')
                    .on('click', function () {
                        lanContent.remove();
                    })
                    .on('mouseover',function () {
                        this.style('background', 'rgba(214, 48, 49,1.0)')
                            .style('color','white')
                    })
                    .on('mouseleave',function () {
                        this.style('background', 'white')
                            .style('color','rgba(214, 48, 49, 1)')
                    });
                for(var key in CubY.siteLANProps){
                    if(CubY.siteLANProps.hasOwnProperty(key)){
                        let prop = CubY.siteLANProps[key];
                        let lanKey = key + lanIdx;
                        let field = CubY.createInput(lanKey, prop);
                        if(key === 'lanConnection'){
                            field.label.content('LAN '+ (lanIdx + 1) +' - Optional')
                        }
                        if(field) {
                            lanContent.appendElement(field.field);
                            CubY.siteFormLANFieldProcessor(key,field);
                        }
                    }
                }
                lanContainer.appendElement(lanContent);
                lanContent.appendElement(deleteLANButton);
                CubY.storeValue('lanIdx', lanIdx+1);
            })
            .on('mouseover',function () {
                this.style('background', 'rgba(0, 99, 204, 1)')
            })
            .on('mouseleave',function () {
                this.style('background', 'rgba(0, 99, 204, 0.5)')
            });
        fields.push(addLANButton);

        let form = CubY.createFormConatiner('site', fields);
        let formContainer = form.container;
        let formContent = form.content;
        let submit = form.submit;
        let title = form.title;
        submit.on('click', function (e) {
            e.preventDefault();
            CubY.createSite(formContent.id, function (isDone, response, textStatus, xhr) {
                if(isDone){
                    formContainer.remove(300)
                } else{
                    title.content(response.responseJSON.retCode || 'Something wrong. Please try it later.').style('color', 'darkred')
                }
            });
        });
        return formContainer;
    },
    siteFormLANFieldProcessor(key, field){
        let siteCreateDeviceType = CubY.getValue('siteCreateDeviceType');
        switch (key) {
            case 'lanInterfaceName':
                let device = siteCreateDeviceType;
                if(device) {
                    let intfList = CubY.getValue(device, false).interfaces;
                    field.input.remove('option');
                    CubY.createOptions(field.input, intfList);
                }
                CubY.connectInterfaceList(field);
            case 'ipRangeStart':
            case 'ipRangeEnd':
            case 'dnsPrimaryIpAddr':
            case 'dnsSecondaryIpAddr':
            case 'vlanId':
            case 'ip':
            case 'mask':
            case 'connection':
            case 'dhcpAdminState':
                let lanKey = key;
                let lanIdx = CubY.getValue('lanIdx');
                if(lanKey === 'dhcpAdminState'){
                    field.input.on('change', function () {
                        CubY.storeValue('dhcpEnable' + lanIdx, field.input.dom.value)
                    })
                }else if(lanKey !== 'vlanId' && lanKey !== 'ip' && lanKey !== 'mask' && lanKey !== 'lanInterfaceName' && lanKey !== 'connection'){
                    field.field.style('display', 'none');
                    CubY.connect('dhcpEnable' + lanIdx).to(function (type) {
                        field.field.style('display', type === '1' ? '' : 'none')
                    }).belong(field.field);
                }
                break;
        }
    },
    siteFormFieldProcessor(key, field){
        switch (key) {
            case 'role':
                field.input.on('change', function () {
                    CubY.storeValue('siteCreateFormRole', field.input.dom.value);
                });
                break;
            case 'deviceType':
                field.input.on('change', function () {
                    CubY.storeValue('siteCreateDeviceType', field.input.dom.value);
                });
                break;
            case 'managementIp':
                field.field.style('display', 'none');
                CubY.connect('siteCreateFormRole').to(function (role) {
                    field.field.style('display', role === 'Spine' ? '' : 'none')
                }).belong(field.field);
                break;
            case 'serialNum':
                CubY.connect('siteCreateFormRole').to(function (role) {
                    field.field.style('display', role === 'Branch' ? '' : 'none')
                }).belong(field.field);
                break;
            case 'address':
                let autocomplete = new google.maps.places.Autocomplete(field.input.dom,{types: ['geocode']});
                autocomplete.addListener('place_changed', function () {
                    var formAddresses = CubY.convertAddressToDetail(autocomplete);
                    CubY.storeValue('siteCreateFormAddresses', formAddresses, {overwrite: true});
                });
                break;
            case 'latitude':
            case 'longitude':
                CubY.connect('siteCreateFormAddresses').to(function (addresses) {
                    field.input.prop('value', key==='latitude'?addresses.lat:addresses.lng)
                }).belong(field.field);
                break;
            case 'interfaceType':
                field.input.on('change', function () {
                    CubY.storeValue('siteCreateInterfaceType', field.input.dom.value);
                });
                break;
            case 'interfaceName2':
                CubY.connectInterfaceList(field);
            case 'connection2':
            case 'name2':
            case 'type2':
            case 'loadBalancingRole2':
                CubY.connect('siteCreateInterfaceType').to(function (type) {
                    field.field.style('display', type === '1' ? '' : 'none')
                }).belong(field.field);
                break;
            case 'interfaceName1':
                CubY.connectInterfaceList(field);
                break;
        }
    },
    connectInterfaceList(field){
        CubY.connect('siteCreateDeviceType').to(function (type) {
            let device = type;
            let intfList = CubY.getValue(device, false).interfaces;
            field.input.remove('option');
            CubY.createOptions(field.input, intfList)
        }).belong(field.field);
    },
    siteFormDataProcessor(form){
        let data = CubY.convertFormToJSON(form);
        let siteData = {};
        let wanData = [{}];
        let lanData = [];
        if(CubY.getValue('siteCreateInterfaceType')==='1') {
            wanData = [{}, {}];
        }
        for(var key in data){
            if(data.hasOwnProperty(key)){
                if(CubY.siteProps.hasOwnProperty(key)){
                    siteData[key] = data[key];
                }
                if(CubY.siteWANProps.hasOwnProperty(key)){
                    let wanKey = key.substring(0, key.length-1);
                    if(key.indexOf('1')>=0) {
                        wanData[0][wanKey] = data[key];
                    }else if(key.indexOf('2') && CubY.getValue('siteCreateInterfaceType')==='1'){
                        wanData[1][wanKey] = data[key];
                    }
                }
                if(CubY.siteLANProps.hasOwnProperty(key.substring(0, key.length-1))){
                    let lanKey = key.substring(0, key.length-1);
                    let lanIdx = parseInt(key.charAt(key.length-1));
                    if(lanData[lanIdx]=== undefined){
                        lanData[lanIdx] = {};
                    }
                    lanData[lanIdx][lanKey] = data[key];
                }
            }
        }
        return {
            siteData: siteData,
            wanData: wanData,
            lanData: lanData
        }
    },
    createSite(form, callback) {
        let data = CubY.siteFormDataProcessor(form);
        let eId = CubY.getValue('currentEnterprise');
        let eName = CubY.getValue(eId).name;
        let batchData = {
            type:0,
            requests:[]
        };
        let formAddresses = CubY.getValue('siteCreateFormAddresses');
        data.siteData.latitude = parseFloat(data.siteData.latitude);
        data.siteData.longitude = parseFloat(data.siteData.longitude);
        data.siteData.address1 = formAddresses.address1;
        data.siteData.address2 = formAddresses.address2;
        data.siteData.addresscity = formAddresses.addresscity;
        data.siteData.addressstate = formAddresses.addressstate;
        data.siteData.addresscountry = formAddresses.addresscountry;
        data.siteData.addressczip = formAddresses.addressczip;
        delete data.siteData.address;
        data.siteData.interfaceType = parseInt(data.siteData.interfaceType);
        data.siteData.twoFaEnabled = data.siteData.twoFaEnabled === 'true';
        data.siteData.enterpriseId = eId;
        batchData.requests[0] = {
            body: data.siteData,
            method: 'post',
            path:'/Site'
        };
        data.wanData.forEach(function (wan) {
            wan.loadBalancingRole = parseInt(wan.loadBalancingRole);
            wan.type = parseInt(wan.type);
            wan.siteId = '';
            wan.siteName = data.siteData.name;
            wan.enterpriseName = eName;
            if(wan.interfaceName === '' || wan.interfaceName === undefined){
                return;
            }
            batchData.requests.push({
                body: wan,
                method: 'post',
                path:'/SiteInterface'
            });
        });
        data.lanData.forEach(function (lan) {
            lan.dhcpAdminState = parseInt(lan.dhcpAdminState);
            lan.type = parseInt(lan.type);
            lan.vlanId = parseInt(lan.vlanId);
            lan.siteId = '';
            lan.siteName = data.siteData.name;
            lan.enterpriseName = eName;
            lan.interfaceName = lan.lanInterfaceName;
            delete lan.lanInterfaceName;
            if(lan.interfaceName === '' || lan.interfaceName === undefined){
                return;
            }
            batchData.requests.push({
                body: lan,
                method: 'post',
                path:'/SiteDhcp'
            });
        });



        CubY.request('post', batchData, CubY.baseUrl + 'batch', undefined,
            function (isDone, response, textStatus, xhr) {
                CubY.getSites(CubY.getValue('currentEnterprise'));
                if(typeof callback === 'function'){
                    callback(isDone, response, textStatus, xhr)
                }
            });
    },
    createSiteTable(){
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
    },
    siteTableFormatter : function (field, site, td, isConnected) {
        let value = site[field];
        let formatted = value;
        let notSetContent = false;
        switch (field){
            case 'state':
                formatted = CubY.siteStateTableFormatter(value, td);
                notSetContent = true;
                break;
            case 'role':
                formatted = CubY.siteRoleTableFormatter(value);
                break;
            case 'cpu1Usage':
                if(td.barConatiner===undefined) {
                    formatted = td.append('div').style('position', 'relative');
                    td.barConatiner = formatted;
                    td.barConatiner.bar =  formatted.append('div').style({
                        position: 'absolute',
                        width: (value) + '%',
                        height: '100%',
                        background: 'rgba(0, 99, 204,0.5)',
                        transition: '0.2s'
                    });
                    td.barConatiner.text = formatted.append('div',).content(value);
                }else{
                    td.barConatiner.bar.style({
                        position: 'absolute',
                        width: (value) + '%',
                        height: '100%',
                        background: 'rgba(0, 99, 204,0.5)',
                        transition: '1s',
                        transitionTimingFunction:'linear'
                    });
                    td.barConatiner.text.content(value);
                    formatted = td.barConatiner;
                }
                notSetContent = true;
                break;
            default:
                formatted = value;
        }
        /*if(typeof formatted === 'object') {
            td.content('');
            td.appendElement(formatted)
        }else{
            td.content(formatted)
        }*/
        if(!isConnected) {
            let tdConnect = CubY.connect(site.id).to(function (newSiteData) {
                CubY.siteTableFormatter(field, newSiteData, td, true)
            }).belong(td);
            //td.attr('deactivated', tdConnect.remove)
            return notSetContent;
        }else if(notSetContent!== true){
            td.content(formatted)
        }
    },
    siteStateTableFormatter:  function (value, td) {

        if(td.stateDiv === undefined){
            td.stateDiv = td.append('div')
                .style({
                    "maxWidth": "100px",
                    "position": "relative",
                    "left": "0",
                    "right": "0",
                    "margin": "auto",
                    "height": "100%",
                    "color": "green",
                    "fontWeight": "bold"
                });
        }
        let stateDiv = td.stateDiv;
        switch (value){
            case 0:
                stateDiv.content('INIT');
                stateDiv.style('color',CubY.SITE_STATE_COLOR[value]);
                break;
            case 4:
                stateDiv.content('UP');
                stateDiv.style('color', "green");
                break;
            default:
                stateDiv.content('Error');
                stateDiv.style('color','red')
        }
        return stateDiv;
    },
    siteRoleTableFormatter:  function (value) {
        return  value.charAt(0).toUpperCase() + value.substring(1);
    },
    siteDetailTableFormatter : function (field, item, td, isConnected) {
        let value = item[field];
        let formatted = value;
        switch (field){
            case 'from':
                let srcId = item['srcId'];
                formatted = CubY.getValue(srcId).name;
                break;
            case 'to':
                let desId = item['desId'];
                formatted = CubY.getValue(desId).name;
                break;
            case 'operState':
                let state = CubY.linkOperStateMap[value];
                formatted = state;
                td.style('color', CubY.linkOperStateColorCode[value]);
                break;
            default:
                formatted = value;
        }
        if(typeof formatted === 'object') {
            td.content('');
            td.appendElement(formatted)
        }else{
            td.content(formatted)
        }
        if(!isConnected) {
            let tdConnect = CubY.connect(item.id).to(function (newItemData) {
                CubY.siteDetailTableFormatter(field, newItemData, td, true)
            }).belong(td);
            //td.attr('deactivated', tdConnect.remove)
        }
    },
    createSiteDetailTable: function (siteId) {
        const tableFields = ['name', 'from','to', 'operState'];
        const headerLabels = ['Link Name', 'From','To', 'Status'];
        let table = CubY.createTable('siteDetailTable');

        table.setUpdater('update',function () {
            table.remove('tr');
            let headerRow = CubY.createTableHeader(headerLabels);
            let list = CubY.getValue('links') || [];
            table.appendElement(headerRow);
            list.forEach(function (item) {
                let tr = CubY.createTableRow(tableFields, item, CubY.siteDetailTableFormatter);
                table.appendElement(tr);
            })
        });

        table.updater('update')();
        return table;
    },
    siteUpdateByWS(data){
        if(data.type === 'DashboardUpdated' && data.details === 'siteState'){
            let siteData = data.data;
            CubY.storeDataArray(siteData,'siteId');
        }
    },
    getSites: function (eId,sId) {
        if(eId){
            this.request('get',undefined,this.baseUrl+'site?enterpriseId='+eId,undefined, function (state,res) {
                if(state){
                    let sites = res.result || [];
                    sites = CubY.storeDataArray(sites,'id');
                    CubY.storeValue('sites',sites,{overwrite:true});
                    CubY.request('get',undefined,CubY.baseUrl+'sitestate?enterpriseId='+eId,undefined, function (state,res) {
                        if(state){
                            let sitestates = res.result || [];
                            sitestates = CubY.storeDataArray(sitestates,'siteId');
                            CubY.storeValue('sites',sitestates,{overwrite:true});
                        }
                    })
                }
            });
        }else{
            if(sId){
                this.request('get',undefined,this.baseUrl+'site?id='+sId,undefined, function (state,res) {
                    if(state){
                        let sites = res.result || [];
                        sites = CubY.storeDataArray(sites,'id');
                        CubY.storeValue('sites',sites,{overwrite:true});
                        CubY.request('get',undefined,CubY.baseUrl+'sitestate?siteId='+sId,undefined, function (state,res) {
                            if(state){
                                let sitestates = res.result || [];
                                sitestates = CubY.storeDataArray(sitestates,'siteId');
                                CubY.storeValue('sites',sitestates,{overwrite:true});
                            }
                        })
                    }
                });

            }else{
                this.request('get',undefined,this.baseUrl+'sites',undefined, function (state,res) {
                    if(state){
                        let sites = res.result || [];
                        sites = CubY.storeDataArray(sites,'id');
                        CubY.storeValue('sites',sites,{overwrite:true});
                        CubY.request('get',undefined,CubY.baseUrl+'sitestates',undefined, function (state,res) {
                            if(state){
                                let sitestates = res.result || [];
                                sitestates = CubY.storeDataArray(sitestates,'siteId');
                                CubY.storeValue('sites',sitestates,{overwrite:true});
                            }
                        })
                    }
                });
            }

        }
    },
    deleteSite(){
        let form = CubY.createFormConatiner('site');
        let formContainer = form.container;
        let formContent = form.content;
        let submit = form.submit;
        let title = form.title;
        title.content('Confirm delete: '+ CubY.getValue(CubY.getValue('selectedSite')).name);
        formContainer.style('height', '100px');
        submit.content('Confirm');
        submit.on('click', function (e) {
            e.preventDefault();
            CubY.request('delete',undefined,CubY.baseUrl +'site/' +CubY.getValue('selectedSite'),undefined, function (isDone, response, textStatus, xhr) {
                if(isDone){
                    formContainer.remove(300);
                    CubY.getSites(CubY.getValue('currentEnterprise'));
                } else{
                    title.content(response.responseJSON.retCode || 'Something wrong. Please try it later.').style('color', 'darkred')
                }
            })
        });
        return formContainer;
    },
};
export default Site;