const  TOOLBAR_CONTAINER_STYLE = {
    "justifyContent": "flex-end",
    "paddingRight": "1em",
    "display": "flex",
    "paddingTop": "1em",
    "position": "relative"
};

const TOOLBAR_BUTTON_STYLE = {
    "cursor": "pointer",
    "borderRadius": "4px",
    "padding": "0.5em",
    "width": '32px',
    "textAlign": "center",
    "color": "white",
    'border':'1px solid rgba(0, 99, 204, 0.5)',
    "background": "rgba(0, 99, 204, 0.5)",
    "transition": "0.2s",
    "marginRight": "0.5em"
};

const  TOOLBAR_TITLE = {
    marginTop: '0.5em',
    flexGrow: 1,
    textAlign: 'center'
};


var toolbarContainer = CubY.createElement('div', 'toolbarContainer').style(TOOLBAR_CONTAINER_STYLE)
    .attr('display', 'flex');

var toolbarTitle = CubY.createElement('span', 'toolbarTitle').style(TOOLBAR_TITLE);

var backButton = CubY.createElement('span','backButton').content('Back').style(TOOLBAR_BUTTON_STYLE)
    .style({
        marginLeft: '2em'
    })
    .attr('activated',function () {
        this.style('visibility', CubY.getValue('currentLevel') === 'carrier'?'hidden':'visible')
    })
    .on('mouseover',function () {
        this.style('background', 'rgba(0, 99, 204, 1)')
    })
    .on('mouseleave',function () {
        this.style('background', 'rgba(0, 99, 204, 0.5)')
    })
    .on('click', function () {
        let currentLevel = CubY.getValue('currentLevel');
        if(form){
            form.remove();
        }
        switch (currentLevel){
            case 'carrier':
                break;
            case 'enterprise':
                CubY.storeValue('currentLevel', 'carrier');
                CubY.storeValue('currentEnterprise', CubY.getValue('currentCarrier'),{forceReact: true});
                break;
            case 'site':
                CubY.storeValue('currentLevel', 'enterprise');
                CubY.storeValue('currentEnterprise', CubY.getValue('currentEnterprise'),{forceReact: true});
                CubY.storeValue('currentSite');
                break;
        }
    });

var addButton = CubY.createElement('span','addButton').content('Add').style(TOOLBAR_BUTTON_STYLE)
    .on('mouseover',function () {
        this.style('background', 'rgba(0, 99, 204, 1)')
    })
    .on('mouseleave',function () {
        this.style('background', 'rgba(0, 99, 204, 0.5)')
    })
    .on('click', function () {
        let currentLevel = CubY.getValue('currentLevel');
        if(form){
            form.remove();
        }
        switch (currentLevel){
            case 'carrier':
                form = CubY.getEnterpriseForm();
                toolbarContainer.appendElement(form);
                break;
            case 'enterprise':
                form = CubY.getSiteForm();
                toolbarContainer.appendElement(form);
                break;
            case 'site':
                form = CubY.getLinkForm();
                toolbarContainer.appendElement(form);
                break;
        }
    });
var editButton = CubY.createElement('span', 'edieButton').content('Edit').style(TOOLBAR_BUTTON_STYLE)
    .on('mouseover',function () {
        this.style('background', 'rgba(0, 99, 204, 1)')
    })
    .on('mouseleave',function () {
        this.style('background', 'rgba(0, 99, 204, 0.5)')
    })
    .on('click', function () {
        let currentLevel = CubY.getValue('currentLevel');
        if(form){
            form.remove();
        }
        let selectedId;
        switch (currentLevel){
            case 'carrier':
                selectedId = CubY.getValue('selectedEnterprise');
                form = CubY.getEnterpriseForm(CubY.getValue(selectedId));
                toolbarContainer.appendElement(form);
                break;
            case 'enterprise':
                form = CubY.getSiteForm();
                toolbarContainer.appendElement(form);
                break;
            case 'site':
                form = CubY.getLinkForm();
                toolbarContainer.appendElement(form);
                break;
        }
    });
var deleteButton = CubY.createElement('span', 'deleteButton').content('Delete').style(TOOLBAR_BUTTON_STYLE)
    .style('color','rgba(214, 48, 49, 1)')
    .style('border','1px solid rgba(214, 48, 49, 0.5)')
    .style('background', 'white')
    .on('mouseover',function () {
        this.style('background', 'rgba(214, 48, 49,1.0)')
            .style('color','white')
    })
    .on('mouseleave',function () {
        this.style('background', 'white')
            .style('color','rgba(214, 48, 49, 1)')
    })
    .on('click', function () {
        let currentLevel = CubY.getValue('currentLevel');
        if(form){
            form.remove();
        }
        let selectedId;
        switch (currentLevel){
            case 'carrier':
                selectedId = CubY.getValue('selectedEnterprise');
                form = CubY.deleteEnterprise();
                toolbarContainer.appendElement(form);
                break;
            case 'enterprise':
                selectedId = CubY.getValue('selectedSite');
                form = CubY.deleteSite();
                toolbarContainer.appendElement(form);
                break;
            case 'site':

                break;
        }
    });
var form;


CubY.connect('currentLevel')
    .to(function (level) {
        switch (level){
            case 'carrier':
                backButton.style('visibility', 'hidden');
                toolbarTitle.content('');
                break;
            case 'enterprise':
                backButton.style('visibility', 'visible');
                toolbarTitle.content(CubY.getValue(CubY.getValue('currentEnterprise')).name);
                break;
            case 'site':
                backButton.style('visibility', 'visible');
                toolbarTitle.content(CubY.getValue(CubY.getValue('currentEnterprise')).name + ' - ' + CubY.getValue(CubY.getValue('currentSite')).name);
                break;
        }
    })
    .belong(toolbarContainer);

CubY.connect('currentView')
    .to()
    .belong(toolbarContainer);
CubY.connect('currentEnterprise')
    .to(function (currentEnterprise) {
        if(currentEnterprise) {
            toolbarTitle.content(CubY.getValue(currentEnterprise).name);
        }
    })
    .belong(toolbarContainer);
CubY.connect('currentSite')
    .to(function (currentSite) {
        if(currentSite) {
            toolbarTitle.content(CubY.getValue(CubY.getValue('currentEnterprise')).name + ' - ' + CubY.getValue(currentSite).name);
        }
    })
    .belong(toolbarContainer);

toolbarContainer.appendElement(backButton);
toolbarContainer.appendElement(toolbarTitle);
toolbarContainer.appendElement(addButton);
toolbarContainer.appendElement(editButton);
toolbarContainer.appendElement(deleteButton);

export default toolbarContainer;
