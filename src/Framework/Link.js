import CubY from "./CubY/CubY";

var Link = {
    linkOperStateColorCode:[
        'gray',
        'gray',
        'green',
        'red',
        'green',
        'red',
        'red',
        'red',
        'red'
    ],
    linkOperStateMap: {
        0: 'INIT',
        1: 'DISCONNECTED',
        2: 'UP',
        3: 'ERROR',
        4: 'READY',
        5: 'DOWN',
        6: 'ProfileErr',
        7: 'DELETED',
        8: 'DELETING'
    },
    linkProps: {
        name: {formType: 'input', label: 'Link Name'},
        srcTitle: {formType: 'text', label: 'From'},
        srcId: {formType: 'select', label: 'Site', options:[]},
        srcIntfName: {formType: 'select', label: 'Interface Name', options:[]},
        dstcTitle: {formType: 'text', label: 'To'},
        desId: {formType: 'select', label: 'Site', options:[]},
        dstIntfName: {formType: 'select', label: 'Interface Name', options:[]},
    },
    getLinksBySrcId: function (id, callback){
        let self = this;
        this.request('get',undefined,this.baseUrl+'link?srcId=' + id ,undefined, function (state,res) {
            if(state){
                let links = res.result || [];
                links = CubY.storeDataArray(links);
                CubY.storeValue('links',links,{overwrite:true});
                self.request('get',undefined,self.baseUrl+'linkstate?srcId=' + id ,undefined, function (state,res) {
                    if(state){
                        let links = res.result || [];
                        links = CubY.storeDataArray(links,'linkId');
                        CubY.storeValue('links',links,{overwrite:true});
                        if(typeof callback === 'function'){
                            callback(links);
                        }
                    }
                })
            }
        })
    },
    linkFormProcessor: function (key,field) {
        let sites = CubY.getValue('sites')|| [];
        let options = [];

        CubY.storeValue('linkFormSelectedSites', [], {overwrite:true});
        CubY.storeValue('linkFormSelectedSitesInterfaces', [], {overwrite:true});
        switch (key) {
            case 'srcId':
            case 'desId':
                sites.forEach(function (site) {
                    let option = {
                        label: site.name,
                        value: site.id
                    };
                    option = CubY.createOption(field.input, option);
                    CubY.connect('linkFormSelectedSites').to(function (list) {
                        if(list.indexOf(option.attribute.value)>=0){
                            option.style('display', 'none')
                        }else{
                            option.style('display', '')
                        }
                    }).belong(option);
                });
                field.input.on('change',function () {
                    let linkFormSelectedSites = CubY.getValue('linkFormSelectedSites');
                    let idx = key==='srcId'?0:1;
                    linkFormSelectedSites[idx] = this.dom.value;

                    CubY.storeValue('linkFormSelectedSites', linkFormSelectedSites, {overwrite:true, forceReact: true});
                    CubY.request('get',undefined, CubY.baseUrl + 'siteInterface?siteId=' + this.dom.value, undefined, function (state,res,t,xhr) {
                        let linkFormSelectedSitesInterfaces = CubY.getValue('linkFormSelectedSitesInterfaces' + idx);
                        linkFormSelectedSitesInterfaces = res.result;
                        CubY.storeValue('linkFormSelectedSitesInterfaces' + idx, linkFormSelectedSitesInterfaces, {overwrite:true, forceReact: true});
                    });
                });
                break;
            case 'srcIntfName':
            case 'dstIntfName':
                let idx = key==='srcIntfName'?0:1;
                CubY.connect('linkFormSelectedSitesInterfaces' + idx).to(function (list) {
                    let options = [];
                    list.forEach(function (item) {
                        let option = {
                            label: item.interfaceName,
                            value: item.interfaceName
                        };
                        options.push(option);
                    });
                    CubY.createOptions(field.input, options);
                }).belong(field.field);
                break;
        }
    },
    getLinkForm: function () {
        let fields = [];

        let linkProps = CubY.linkProps;
        for (var key in linkProps) {
            if (linkProps.hasOwnProperty(key)) {
                let prop = linkProps[key];
                let field = CubY.createInput(key, prop);
                if(field) {
                    CubY.linkFormProcessor(key, field);
                    fields.push(field.field);
                }
            }
        }

        let form = CubY.createFormConatiner('link', fields);
        let formContainer = form.container;
        let formContent = form.content;
        let submit = form.submit;
        let title = form.title;

        submit.on('click', function (e) {
            e.preventDefault();
            CubY.createLink(formContent.id, function (isDone, response, textStatus, xhr) {
                if(isDone){
                    formContainer.remove(300)
                } else{
                    title.content(response.responseJSON.retCode || 'Something wrong. Please try it later.').style('color', 'darkred')
                }
            });
        });

        return formContainer;
    },
    createLink: function (formId, callback) {
        let data = CubY.convertFormToJSON(formId);
        data.enterpriseId =  CubY.getValue('currentEnterprise');
        CubY.request('post', data, CubY.baseUrl + 'Link', undefined, callback)
    }
};

export default Link;