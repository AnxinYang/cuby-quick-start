import CubY from "./CubY/CubY";

/**
 * Created by Anxin Yang on 6/23/2018.
 */



var Common = {
    MAP_CONTAINER_STYLE: {"position":"relative","overflow":"hidden","width":"100%","height":"93%","top":"1em","left":"0","right":"0","margin":"auto","border":"1px solid lightgray","boxShadow":"5px 0 5px lightgrey","float":"left"},
    TABLE_STYLE: {"position":"relative","left":"0","right":"0","top":"1em","margin":"auto","width":"90%","textAlign":"center", borderCollapse:'collapse', borderSpacing:0},
    INPUT_LABEL_STYLE: {
        width: '128px',
        display: 'inline-block',
        textAlign: 'left'
    },
    INPUT_STYLE: {
        "textShadow": "white 0px 0px 0.5px",
        "padding": "0.5em",
        "border": "1px solid lightgray",
        "borderRadius": "4px",
        "background": "transparent",
        "width": "256px",
    },
    FORM_CONTAINER_STYLE : {
        "position": "fixed",
        "width": "500px",
        "left": "100vw",
        "top": "100px",
        "right": "0px",
        "bottom": "100px",
        "margin": "auto",
        "background": "white",
        "padding": "2em",
        "border": "1px solid lightgray",
        "boxShadow": "lightgrey 0px 0px 1px",
        "opacity": "0.5",
        "transition": "0.2s",
        "zIndex": "9",
        "textAlign": "center",
        "maxHeight":"75vh",
        "overflowY": "auto"
    },
    SUBMIT_BUTTON_STYLE : {
        "display": "inline-block",
        "position": "relative",
        "padding": "0.5em",
        "background": "rgba(0, 99, 204, 0.5)",
        "marginTop": "1em",
        "borderRadius": "4px",
        "transition": "0.2s",
        "cursor": "pointer",
        "width": "64px",
        "textAlign": "center",
        "color": "white"
    },
    convertAddressToDetail(autocomplete){
        let placeDetail = autocomplete.getPlace();
        let addresses = placeDetail.address_components;
        let geometry = placeDetail.geometry.location;
        let formAddresses = {
            address1: '',
            address2: '', // TODO: WHAT ADDRESS DETAIL SHOULD PUT IN HERE?
            addresscity: '',
            addressstate: '',
            addresscountry: '',
            addresszip: '',
            lat: geometry.lat(),
            lng: geometry.lng()
        };
        for (var i = 0; i < addresses.length; i++) {
            let addressItem = addresses[i];
            let addressType = addressItem.types[0];
            switch (addressType){
                case 'street_number':
                    formAddresses.address1 = addressItem['short_name'] + formAddresses.address1;
                    break;
                case 'route':
                    formAddresses.address1 = formAddresses.address1 + ' ' +addressItem['long_name'];
                    break;
                case 'locality':
                    formAddresses.addresscity = addressItem['short_name'];
                    break;
                case 'administrative_area_level_1':
                    formAddresses.addressstate = addressItem['short_name'];
                    break;
                case 'country':
                    formAddresses.addresscountry = addressItem['short_name'];
                    break;
                case 'postal_code':
                    formAddresses.addresszip = addressItem['short_name'];
                    break;
            }
        }

        return formAddresses;
    },
    convertFormToJSON(formId){
        let output = {};
        let array = $('#'+formId).serializeArray();
        array.forEach(function (item) {
            output[item.name] = item.value;
        });
       return output;
    },
    createOptions(input,options, noEmpty){
        input.remove('option');
        if(noEmpty !== true){
            input.append('option');
        }
        options.forEach(function (option) {
            CubY.createOption(input, option)
        })
    },
    createOption(input, option){
        if(typeof option === 'string') {
            return input.append('option').attr('value', option).content(option)
        }else {
            return input.append('option').attr('value', option.value).content(option.label)
        }

    },
    createInput(key,prop){
        let formType = prop.formType;
        if(formType=== 'hidden' || formType === undefined){
            return;
        }

        let field = CubY.createElement('div').style({marginTop:'1em',textAlign:'left', paddingLeft:'4em'});
        let label = field.append('span').content(prop.label||key).style(CubY.INPUT_LABEL_STYLE);
        if(formType=== 'text'){
            label.style(
                {
                    borderBottom: '1px solid black',
                    width: '90%',
                    fontWeight: 'bold'
                }
            );
            return {field:field, label:label}
        }
        let input = field.append(formType).style(CubY.INPUT_STYLE).attr('name', key).attr('placeholder', prop.label||key);

        switch (formType){
            case 'select':
                let options = prop.options;
                input.style('width','271px');
                CubY.createOptions(input,options, prop.noEmpty);
                input.prop('value',prop.defaultValue || '');
                break;
        }
        return {field:field, input:input, label:label};
    },
    createFormConatiner(name, _fields){
        let fields = _fields || []
        let formContainer =  CubY.createElement('div', name + 'FormContainer');
        let formContent =  CubY.createElement('form', name + 'FormContent');
        let title = formContent.append('span', name + 'FormTitle').style('display', 'block');
        formContainer.appendElement(formContent);
        formContainer.style(CubY.FORM_CONTAINER_STYLE)
            .attr('activated', function () {
                let self = this;
                setTimeout(function () {
                    self.style('left','0px');
                    self.style('opacity','1')
                }, 10)
            })
            .attr('deactivated', function () {
                let self = this;
                self.style('left','100vw');
                self.style('opacity','0.5')
            });

        fields.forEach(function (field) {
            formContent.appendElement(field);
        });

       let submit =  formContent.append('span').content('Submit').style(CubY.SUBMIT_BUTTON_STYLE)
            .style({
                marginRight: '50%',
                marginTop: '4em'
            })
            .on('mouseover',function () {
                this.style('background', 'rgba(0, 99, 204, 1)')
            })
            .on('mouseleave',function () {
                this.style('background', 'rgba(0, 99, 204, 0.5)')
            });
        let cancel = formContent.append('span').content('Cancel').style(CubY.SUBMIT_BUTTON_STYLE)
            .style('color','rgba(214, 48, 49, 1)')
            .style('border','1px solid rgba(214, 48, 49, 0.5)')
            .style('background', 'white')
            .on('click', function (e) {
                formContainer.remove(300);
            })
            .on('mouseover',function () {
                this.style('background', 'rgba(214, 48, 49,1.0)')
                    .style('color','white')
            })
            .on('mouseleave',function () {
                this.style('background', 'white')
                    .style('color','rgba(214, 48, 49, 1)')
            });
        return {container:formContainer,content:formContent,submit:submit,cancel:cancel,title:title};
    }
};
export default Common;