import CubY from '../Framework/CubY/CubY';

const NAVIGATION_CONTAINER_STYLE = {
    position:'relative',
    width: '250px',
    minWidth: '250px',
    background:'rgb(39, 50, 56)',
    marginTop:'3em',
    height:'calc(100vh - 3em)',
    "border": "1px solid black",
    transition:'0.2s',
    zIndex:1
};

const NAVIGATION_ARROW_STYLE = {
    position: 'absolute',
    background:'rgb(39, 50, 56)',
    right: '-2em',
    width: '2em',
    height: '2em',
    cursor:'pointer',
    color:'white'
};

const NAVIGATION_CONTENT_STYLE = {
    "width": "250px",
    "overflow": "hidden",
    "marginTop": "2em",
    "transition": "0.2s",
    "position": "absolute",
    "right": "0"
};

const ENTERPRISE_LIST_STYLE = {
    "width": "80%",
    "marginLeft": "10%",
    "textShadow": "white 0px 0px 1px",
    "padding": "0.5em",
    "border": "1px solid black",
    "borderRadius": "4px",
    "background": "transparent",
    "color": "white"
};

const VIEW_SWITCH_STYLE = {
    "display": "flex",
    "justifyContent": "space-between",
    "color": "white",
    "marginTop": "1em",
    "marginLeft": "10%",
    "marginRight": "10%"
};

const VIEW_SWITCH_BUTTON_STYLE = {
    "cursor": "pointer",
    "border": "1px solid black",
    "borderRadius": "4px",
    "padding": "0.5em",
    "width": '25%',
    "textAlign": "center",
    "textShadow": "white 0px 0px 1px",
    "transition": "0.2s"
};

const NODE_LIST_TREE_STYLE = {
    "border": "1px solid black",
    "borderRadius": "4px",
    "padding": "0.5em",
    "marginLeft": "10%",
    "marginRight": "10%",
    "marginTop": "1em",
    "textAlign": "center",
    "textShadow": "white 0px 0px 1px",
    "transition": "0.2s",
    "color": "white",
    "maxHeight": "75vh",
    "minHeight": "16.9em",
    "overflow": "auto"
};

const NAVIGATION_INPUT_STYLE = {
    "textShadow": "white 0px 0px 1px",
    "padding": "0.5em",
    "border": "1px solid black",
    "borderRadius": "4px",
    "background": "transparent",
    "color": "white",
    "marginLeft": "10%",
    "width": "74%",
    "marginTop": "1em"
};

const SITE_STATE_COLOR = ['lightgray','orange','red','red','lightgreen'];

var navigationContainer = CubY.createElement('div', 'navigationContainer');

navigationContainer.style(NAVIGATION_CONTAINER_STYLE);
navigationContainer.style('width','0');
navigationContainer.style('minWidth','0');
navigationContainer.style('border','0px solid black');

CubY.connect('isLogin')
    .to(function () {
    let isLogin = CubY.getValue('isLogin');
    if(isLogin && navigationContainer.isLoaded !== true){
        navigationContainer.isLoaded = true;
        navigationContainer.style('width','250px');
        navigationContainer.style('minWidth','250px');
        navigationContainer.style('border','1px solid black');

        var navigationArrow = navigationContainer.append('span','navigationArrow')
            .content('<')
            .style(NAVIGATION_ARROW_STYLE)
            .on('click', function () {
                if(navigationContainer.hasExpand !== false){
                    navigationContainer.hasExpand = false;
                    navigationContainer.style('width','0');
                    navigationContainer.style('minWidth','0');
                    this.content('>')
                }else {
                    navigationContainer.hasExpand = true;
                    navigationContainer.style('width','250px');
                    navigationContainer.style('minWidth','250px');
                    this.content('<')
                }
            });

        var navigationContent = navigationContainer.append('div','navigationContent');
        navigationContent.style(NAVIGATION_CONTENT_STYLE);

        var enterpriseSelect =  navigationContent.append('select','enterpriseSelect');
        enterpriseSelect.on('change',function () {
            CubY.debug('Select ' + this.dom.value);
            CubY.storeValue('currentEnterprise', this.dom.value);
        });

        CubY.connect('currentEnterprise').to(function (eId) {
            enterpriseSelect.dom.value = eId;
        });

        CubY.connect('enterprises')
            .to(function () {
            var enterpriseList = CubY.getValue('enterprises') || [];
            var currentEnterprise;
            enterpriseSelect.remove('option');
            var carrier = enterpriseSelect.append('option')
                .attr('value', 'carrier')
                .content('Carrier')
                .style({"background": "rgb(39, 50, 56)"});

            enterpriseList.forEach(function(enterprise){
                if(enterprise.isCarrier===true){
                    carrier.attr('value',enterprise.id)
                        .content(enterprise.name);
                    CubY.storeValue('currentCarrier', enterprise.id);
                }else {
                    enterpriseSelect.append('option')
                        .attr('value', enterprise.id)
                        .content(enterprise.name)
                        .style({"background": "rgb(39, 50, 56)"})
                }
            });

            currentEnterprise = CubY.getValue('currentEnterprise') || carrier.attribute.value;
            enterpriseSelect.attr('value', currentEnterprise);
            enterpriseSelect.prop('value', currentEnterprise);
        });


        enterpriseSelect.style(ENTERPRISE_LIST_STYLE);

        var viewSwitchContainer = navigationContent.append('div','viewSwitchContainer')
            .style(VIEW_SWITCH_STYLE);
        var viewTypes = ['Table','Diagram','Map'];

        CubY.storeValue('currentViewType', 'Table');

        viewTypes.forEach((type)=>{
            let viewSwitchButton = viewSwitchContainer.append('span',type)
                .content(type)
                .style(VIEW_SWITCH_BUTTON_STYLE)
                .attr('activate',function () {
                    if(this.getContent()=== CubY.getValue('currentViewType')) {
                        this.style('background', 'rgb(0, 99, 204)');
                        this.isSelected = true;
                    }
                })
                .on('mouseover',function () {
                    this.style('background', 'rgb(0, 99, 204)');
                })
                .on('mouseleave',function () {
                    if(!this.isSelected){
                        this.style('background', '');
                    }
                })
                .on('click',function () {
                    CubY.debug('Select ' + this.getContent());
                    CubY.storeValue('currentViewType', this.getContent());
                });

            CubY.connect('currentViewType')
                .to(function (d) {
                if (viewSwitchButton.getContent() === d) {
                    viewSwitchButton.style('background', 'rgb(0, 99, 204)');
                    viewSwitchButton.isSelected = true;
                } else {
                    viewSwitchButton.style('background', '');
                    viewSwitchButton.isSelected = false;
                }
            })
        });

        var treeSearch = navigationContent.append('input', 'search')
            .style(NAVIGATION_INPUT_STYLE)
            .attr('placeholder', 'Search')
            .on('keyup', function () {
                CubY.debug(this.dom.value);
                CubY.storeValue('searchTree', this.dom.value);
            });

        var nodeTreeContainer = navigationContent.append('div', 'nodeTreeContainer')
            .style(NODE_LIST_TREE_STYLE);

        CubY.connect('sites')
            .to(function () {
            var sites = CubY.getValue('sites') || [];
            var currentSite =CubY.getValue('currentSite');
            nodeTreeContainer.remove('option');
            nodeTreeContainer.remove('div');
            if(sites.length === 0){
                nodeTreeContainer.append('div','Empty')
                    .attr('value', '')
                    .content('Empty')
                    .style({
                        "padding": "0.5em",
                        "textAlign": "left",
                        "background": "rgb(39, 50, 56)",
                        "marginLeft": "0.5em",
                        "marginRight": "0.5em",
                        "marginTop": "0.5em",
                        "transition": "0.2s",
                        "color": "lightgray",
                        "cursor": "pointer"
                    })
            } else {
                sites.forEach(function (site) {
                    let nodeTreeLeaf = nodeTreeContainer.append('div')
                        .attr('value', site.id)
                        .content(site.name)
                        .style({
                            "padding": "4px 0.5em",
                            "textAlign": "left",
                            "background": "rgb(39, 50, 56)",
                            "marginLeft": "0.5em",
                            "marginRight": "0.5em",
                            "marginTop": "0.5em",
                            "border": "1px solid black",
                            "borderRadius": "1px",
                            "transition": "0.2s",
                            "cursor": "pointer",
                            "position": "relative"
                        })
                        .on('mouseover', function () {
                            this.style('background', 'rgb(0, 99, 204)');
                        })
                        .on('mouseleave', function () {
                            if (!this.isSelected) {
                                this.style('background', '');
                            }
                        })
                        .on('click', function () {
                            CubY.debug('Select ' + this.getContent());
                            CubY.storeValue('currentSite', this.attribute.value);
                            CubY.storeValue('currentLevel', 'site');
                        });

                    let nodeStatus = nodeTreeLeaf.append('div', site.id)
                        .style({
                            "position": "absolute",
                            "height": "0.5em",
                            "width": "1em",
                            "background": SITE_STATE_COLOR[site.state],
                            "right": "0.5em",
                            "top": "0",
                            "bottom":"0",
                            "margin":"auto",
                            "borderRadius": "1px"
                        });
                    CubY.connect(site.id).to(function (newSiteData) {
                        nodeStatus.style({ "background": SITE_STATE_COLOR[newSiteData.state]});
                        nodeTreeLeaf.attr('value', newSiteData.id).content(newSiteData.name);
                         nodeTreeLeaf.appendElement(nodeStatus);
                    }).belong(nodeTreeLeaf);

                    CubY.connect('currentSite')
                        .to(function (d) {
                        if (nodeTreeLeaf.attribute.value === d) {
                            nodeTreeLeaf.style('background', 'rgb(0, 99, 204)');
                            nodeTreeLeaf.isSelected = true;
                        } else {
                            nodeTreeLeaf.style('background', '');
                            nodeTreeLeaf.isSelected = false;
                        }
                    });

                    CubY.connect('searchTree').to(function (d) {
                        if (nodeTreeLeaf.getContent().toLowerCase().indexOf(d.toLowerCase()) < 0) {
                            nodeTreeLeaf.style('display', 'none')
                        } else {
                            nodeTreeLeaf.style('display', 'block')
                        }
                    })
                });
            }
        });
        CubY.getEnterprises();
        CubY.getSites()
    }else {
        navigationContainer.remove('div');
        navigationContainer.remove('span');
        navigationContainer.isLoaded = false;
        navigationContainer.hasExpand = false;
        navigationContainer.style('width','0');
        navigationContainer.style('minWidth','0');
        navigationContainer.style('border','0px solid black');
    }
});



export default navigationContainer;