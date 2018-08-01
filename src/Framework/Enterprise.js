/**
 * Created by Anxin Yang on 6/23/2018.
 */
import CubY from "./CubY/CubY";

const INPUT_LABEL_STYLE = {
    width: '128px',
    display: 'inline-block',
    textAlign: 'left'
};

const INPUT_STYLE = {
    "textShadow": "white 0px 0px 0.5px",
    "padding": "0.5em",
    "border": "1px solid lightgray",
    "borderRadius": "4px",
    "background": "transparent",
    "width": "256px",
};

const SUBMIT_BUTTON_STYLE = {
    "display":"inline-block",
    "position":"relative",
    "padding": "0.5em",
    "background": "rgba(0, 99, 204, 0.5)",
    "marginTop": "1em",
    "borderRadius": "4px",
    "transition": "0.2s",
    "cursor": "pointer",
    "width": "64px",
    "textAlign": "center",
    "color": "white"
};

var Enterprise = {
    enterpriseProps:{
        id:{formType:'hidden'},
        name:{formType:'input', label:'Enterprise Name'},
        address: {formType: 'input', label: 'Address'},
        timezone: {formType: 'select', label: 'Timezone', options: [
                {"value": "UTC+12-Anadyr", "label": "UTC+12-Anadyr"}, {
                    "value": "UTC+11-Melbourne",
                    "label": "UTC+11-Melbourne"
                },
                {"value": "UTC+9-Tokyo", "label": "UTC+9-Tokyo"}, {
                    "value": "UTC+8-Beijing",
                    "label": "UTC+8-Beijing"
                }, {"value": "UTC+7-Jakarta", "label": "UTC+7-Jakarta"},
                {"value": "UTC+6-Dhaka", "label": "UTC+6-Dhaka"},
                {"value": "UTC_8_Los_Angeles", "label": "UTC_8_Los_Angeles"}, {
                    "value": "UTC+5-Tashkent",
                    "label": "UTC+5-Tashkent"
                }, {"value": "UTC+4-Dubai", "label": "UTC+4-Dubai"},
                {"value": "UTC+2-Cairo", "label": "UTC+2-Cairo"}, {
                    "value": "UTC+0-London",
                    "label": "UTC+0-London"
                }, {"value": "UTC-1-Praia", "label": "UTC-1-Praia"},
                {"value": "UTC+1-Brussels", "label": "UTC+1-Brussels"}, {
                    "value": "UTC-2-Rio-de-Janeiro",
                    "label": "UTC-2-Rio-de-Janeiro"
                }, {"value": "UTC-3-Brazil", "label": "UTC-3-Brazil"}, {
                    "value": "UTC-3:30-Canada",
                    "label": "UTC-3:30-Canada"
                }, {"value": "UTC+3:30-Iran", "label": "UTC+3:30-Iran"},
                {"value": "UTC-4-Canada", "label": "UTC-4-Canada"}, {
                    "value": "UTC-5-Bahamas",
                    "label": "UTC-5-Bahamas"
                }, {"value": "UTC-6-Canada", "label": "UTC-6-Canada"}, {
                    "value": "UTC-7-Mexico",
                    "label": "UTC-7-Mexico"
                }, {"value": "UTC-8-Los-Angeles", "label": "UTC-8-Los-Angeles"},
                {
                    "value": "UTC-9-Gambier Islands",
                    "label": "UTC-9-Gambier Islands"
                }, {
                    "value": "UTC-9:30-Marquesas Islands",
                    "label": "UTC-9:30-Marquesas Islands"
                }, {"value": "UTC-10-Honolulu", "label": "UTC-10-Honolulu"}, {
                    "value": "UTC-11-American Samoa",
                    "label": "UTC-11-American Samoa"
                },
                {"value": "UTC-12-Baker Island", "label": "UTC-12-Baker Island"}, {
                    "value": "UTC+10-Australia",
                    "label": "UTC+10-Australia"
                }, {"value": "UTC+3-Russia", "label": "UTC+3-Russia"}, {
                    "value": "UTC+14-Kiribati",
                    "label": "UTC+14-Kiribati"
                },
                {"value": "UTC+14-Tokelau", "label": "UTC+13-Tokelau"}, {
                    "value": "UTC+12:45-New Zealand",
                    "label": "UTC+12:45-New Zealand"
                }, {"value": "UTC+12:00-New Zealand", "label": "UTC+12:00-New Zealand"},
                {
                    "value": "UTC+10:00-Australia (Queensland",
                    "label": "UTC+10:00-Australia (Queensland)"
                }, {
                    "value": "UTC+9:30-Australia (Northern Territory)",
                    "label": "UTC+9:30-Australia (Northern Territory)"
                },
                {
                    "value": "UTC+8:45-Australia (Eucla unofficial)",
                    "label": "UTC+8:45-Australia (Eucla unofficial)"
                }, {"value": "UTC+6:30-Myanmar", "label": "UTC+6:30-Myanmar"}, {
                    "value": "UTC+5:30-Sri Lanka",
                    "label": "UTC+5:30-Sri Lanka"
                },
                {"value": "UTC+5:45-Nepal", "label": "UTC+5:45-Nepal"}, {
                    "value": "UTC+4:30-Afghanistan",
                    "label": "UTC+4:30-Afghanistan"
                },
            ]},
        /*
        address1:{formType:'input', label:'Address 1'},
        address2:{formType:'input', label:'Address 2'},
        city:{formType:'input', label:'City'},
        state:{formType:'input', label:'State'},
        country:{formType:'input', label:'Country'},
        zip:{formType:'input', label:'Zip Code'},
        */
        //nickname:{formType:'input', label:'Admin Name'},
        adminEmail:{formType:'input', label:'Admin Email'},
        adminPhone:{formType:'input', label:'Admin Phone'},
        alertMethod:{formType:'select', label:'Alert Method', options:['Phone','Email']},
        language:{formType:'select', label:'Language', options:['English']},
        topology:{formType:'hidden', label:'Topology'},
        BGPAuthentication:{formType:'hidden', label:''},
        BGPAsNumber:{formType:'input', label:'BGP As Number'},
        BGPPeerPassword:{formType:'hidden', label:''},
        vrf:{formType:'input', label:'VRF Name'},
    },
    createEnterpriseTable(){
        const tableFields = ['name', 'adminEmail','adminPhone'];
        const headerLabels = ['Name', 'Admin Email','Admin Phone'];
        let enterpriseTable = CubY.createTable('enterpriseTable');
        enterpriseTable.setUpdater('update',function () {
            enterpriseTable.remove('tr');
            let headerRow = CubY.createTableHeader(headerLabels);
            let list = CubY.getValue('enterprises');
            enterpriseTable.appendElement(headerRow);
            let selectedEnterprise = CubY.getValue('selectedEnterprise') || '';
            list.forEach(function (item) {
                if (item.isCarrier) {
                    return;
                }
                let tr = CubY.createTableRow(tableFields, item, CubY.enterpriseTableFormatter);
                tr.style({backgroundColor: selectedEnterprise === item.id ? 'rgba(0, 99, 204,0.5)' : ''})
                    .on('click', function () {
                        let selectedEnterprise = CubY.getValue('selectedEnterprise');
                        CubY.storeValue('selectedEnterprise', selectedEnterprise === item.id?undefined:item.id);
                    })
                    .on('mouseleave', function () {
                        this.style({backgroundColor: CubY.getValue('selectedEnterprise') === item.id ? 'rgba(0, 99, 204,0.5)' : ''})
                    });
                tr.on('dblclick', function () {
                    CubY.handleEnterpriseTableDoubleClick(item.id);
                });
                CubY.connect('selectedEnterprise').to(function (id) {
                    this.style({backgroundColor: id === item.id ? 'rgba(0, 99, 204,0.5)' : ''})
                }).belong(tr);
                enterpriseTable.appendElement(tr);
            })
        });
        enterpriseTable.updater('update')();
        return enterpriseTable;
    },
    handleEnterpriseTableDoubleClick(eId){
      CubY.storeValue('currentEnterprise', eId);
      CubY.storeValue('currentLevel', 'enterprise');
    },
    enterpriseTableFormatter : function (field,enterprise, td) {
        if(field==='address'){
            let address = '' + enterprise.address1;
            if(enterprise.address2)address += (', ' + enterprise.address2);
            if(enterprise.city)address += (', ' + enterprise.city);
            if(enterprise.state)address += (', ' + enterprise.state);
            if(enterprise.country)address += (', ' + enterprise.country);
            if(enterprise.zip)address += (' ' + enterprise.zip);
            td.content(address);
        }
    },
    getEnterpriseForm: function (data) {
        CubY.storeValue('enterpriseFormAddresses', {}, {overwrite: true});
        let fields = [];
        let action = data===undefined?'post':'put';
        let formData = data || {};
        let enterpriseProps = CubY.enterpriseProps;
        for (var key in enterpriseProps) {
            if (enterpriseProps.hasOwnProperty(key)) {
                let prop = enterpriseProps[key];
                let field = CubY.createInput(key, prop);
                if(field) {
                    fields.push(field.field);
                    CubY.enterpriseFormFieldProcessor(key,field, data);
                }
            }
        }

        let form = CubY.createFormConatiner('enterprise', fields, );
        let formContainer = form.container;
        let formContent = form.content;
        let submit = form.submit;
        let title = form.title;

        submit.on('click', function (e) {
            e.preventDefault();
            CubY.updateEnterprise(formContent.id, action,function (isDone, response, textStatus, xhr) {
                if(isDone){
                    formContainer.remove(300)
                } else{
                    title.content(response.responseJSON.retCode || 'Something wrong. Please try it later.').style('color', 'darkred')
                }
            });
        });

        return formContainer;
    },
    enterpriseFormFieldProcessor(key, field , data){
        if(data)field.input.prop('value', data[key] || '');
        switch (key) {
            case 'address':
                if(data) {
                    let address = '' + data.address1;
                    if (data.address2) address += (', ' + data.address2);
                    if (data.city) address += (', ' + data.city);
                    if(data.state)address += (', ' + data.state);
                    if (data.country) address += (', ' + data.country);
                    if (data.zip) address += (' ' + data.zip);
                    field.input.prop('value', address);
                }
                let autocomplete = new google.maps.places.Autocomplete(field.input.dom,{types: ['geocode']});
                autocomplete.addListener('place_changed', function () {
                    var formAddresses = CubY.convertAddressToDetail(autocomplete);
                    CubY.storeValue('enterpriseFormAddresses', formAddresses, {overwrite: true});
                });
                break;
            case 'vrf':
                break;
        }
    },
    getEnterprises: function (id) {
        if(id){
            this.request('get',undefined,this.baseUrl+'enterprises?enterpriseId='+id)
        }else{
            this.request('get',undefined,this.baseUrl+'enterprises?',undefined, function (state,res) {
                if(state){
                    let enterprises = res.result || [];
                    enterprises = CubY.storeDataArray(enterprises,'id',undefined, {
                        skipFun: function (item) {
                            return (item.configState === 3)
                        }
                    });
                    CubY.storeValue('enterprises',enterprises,{overwrite:true});
                }
            })
        }
    },
    deleteEnterprise(){
        let form = CubY.createFormConatiner('enterprise');
        let formContainer = form.container;
        let formContent = form.content;
        let submit = form.submit;
        let title = form.title;
        title.content('Confirm delete: '+ CubY.getValue(CubY.getValue('selectedEnterprise')).name);
        formContainer.style('height', '100px');
        submit.content('Confirm');
        submit.on('click', function (e) {
            e.preventDefault();
            CubY.request('delete',undefined,CubY.baseUrl +'enterprise/' +CubY.getValue('selectedEnterprise'),undefined, function (isDone, response, textStatus, xhr) {
                if(isDone){
                    formContainer.remove(300);
                    CubY.getEnterprises();
                } else{
                    title.content(response.responseJSON.retCode || 'Something wrong. Please try it later.').style('color', 'darkred')
                }
            })
        });
        return formContainer;
    },
    updateEnterprise(form, action, callback){
        let data = CubY.convertFormToJSON(form);
        let formAddresses = CubY.getValue('enterpriseFormAddresses');
        let _callback = function (isDone, response, textStatus, xhr) {
            CubY.getEnterprises();
            if(typeof callback === 'function'){
                callback(isDone, response, textStatus, xhr)
            }
        };

        data.address1 = formAddresses.address1;
        data.address2 = formAddresses.address2;
        data.city = formAddresses.addresscity;
        data.state = formAddresses.addressstate;
        data.country = formAddresses.addresscountry;
        data.zip = formAddresses.addresszip;
        delete data.address;

        if(action==='put'){
            let eId = CubY.getValue('selectedEnterprise');
            let eData = CubY.getValue(eId);
            for(var key in data){
                if(data.hasOwnProperty(key) && data[key] === eData[key] || !eData.hasOwnProperty(key)){
                    delete data[key]
                }
            }
            data.id = eId;
        }

        let batchData = {
            type:0,
            requests:[]
        };
        batchData.requests[0] = {
            body: data,
            method: action,
            path:'/Enterprise'
        };
        CubY.request('post', batchData, CubY.baseUrl + 'batch',undefined, _callback);
    }
};
export default Enterprise;