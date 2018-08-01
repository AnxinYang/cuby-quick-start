/**
 * Created by Anxin Yang on 3/28/2018.
 */
import $ from 'jquery';
import CubY from './Framework/CubY/CubY';
import Web from './Framework/Web';
import Map from './Framework/Map';
import Common from './Framework/Common';
import Site from './Framework/Site';
import Link from './Framework/Link';
import Table from './Framework/Table';
import Enterprise from './Framework/Enterprise';
import header from './components/header'
import navigation from './components/navigation'
import login from './views/login'
import network from './views/network'
import application from './views/application'

// Const
const VIEW_TRANSITION_TIME = 400;
const DEBUG_MODE = window.location.hostname.indexOf('localhost')>-1;
const MAIN_CONTAINER_STYLE = {"width":"100%","background":"white","flexGrow":"1","marginTop":"3em", 'transition': '0.2s'};
window.$ = $;
// Global Listeners
window.addEventListener('resize',function () {
    if(window.resizing){
        clearTimeout(window.resizing)
    }
    window.resizing = setTimeout(function () {
        CubY.storeValue('viewportSize',{w:window.innerWidth,h:window.innerHeight});
    },200)
});

// Websocket
try {
    var websocket = new WebSocket(SERVER_CONFIG.WS_URL);

    websocket.onmessage = function (event) {
        CubY.debug(event.data.toString());
        CubY.siteUpdateByWS(JSON.parse(event.data));
    };
    websocket.onopen = function (event) {
        CubY.debug(JSON.stringify(event));
    };
    websocket.onerror = function (error) {
        CubY.debug(JSON.stringify(error));
    };
}catch (e){
    console.warn(e);
}
// Main
assetLoaded('main');
CubY.addOn(Web);
CubY.addOn(Map);
CubY.addOn(Common);
CubY.addOn(Site);
CubY.addOn(Link);
CubY.addOn(Enterprise);
CubY.addOn(Table);
CubY.storeValue('DEBUG_MODE',DEBUG_MODE);
CubY.storeValue('currentView','Login');
CubY.storeValue('currentLevel','carrier');
window.root = new CubY.createElement('div', 'ax_root', document.getElementById('app'));

root.style('display', 'flex');
root.style('fontSize', '12px');
root.appendElement(header);
root.appendElement(navigation);
var mainContainer = root.append('div', 'mainContainer')
    .style(MAIN_CONTAINER_STYLE);
mainContainer.appendElement(login);

// Connect
var viewTransitionTimer;
CubY.connect('currentView')
    .to(function () {
            let currentView = CubY.getValue('currentView');
            mainContainer.style('opacity', 0);
            mainContainer.remove('.mainContent', VIEW_TRANSITION_TIME);
            clearTimeout(viewTransitionTimer);
            viewTransitionTimer = setTimeout(function () {
                var newView;
                switch (currentView) {
                    case 'Login':
                        newView = login;
                        break;
                    case 'Network':
                        newView = network;
                        break;
                    case 'Application':
                        newView = application;
                        break;
                    default:
                        newView = CubY.createElement('div').content('Coming soon').appendClass('mainContent');
                }
                mainContainer.appendElement(newView);
                mainContainer.style('opacity', 1);
                CubY.debug('Current View = ' + currentView);
            }, VIEW_TRANSITION_TIME)
        }
    );

CubY.connect('isLogin').to(function (isLogin) {
    if(isLogin) {
        let msg = JSON.stringify({
            "interestedInSite": true,
            "interestedInSiteStateMovingAvg": true,
            "interestedInLink": true,
            "interestedInLinkStateMovingAvg": true,
            "request": null
        });
        CubY.debug(msg);
        websocket.send(msg);
        CubY.request('get',undefined,CubY.baseUrl+'Devicetypeinterfacelists', undefined, function (status,res) {
            let list = res.result || [];
            CubY.storeDataArray(list,'deviceType');
        });
    }else {
        CubY.storeValue('currentView', 'Login')
    }
});

CubY.connect('currentLevel')
    .to(function (level) {
                CubY.debug('Current Level = ' + level);
        }
    );
CubY.connect('currentEnterprise')
    .to(function (currentEnterprise) {
            CubY.debug('Current currentEnterprise = ' + currentEnterprise);
            let enterprise = CubY.getValue(currentEnterprise) || {};
            if (enterprise.isCarrier === true) {
                CubY.storeValue('currentLevel', 'carrier');
                CubY.getSites();
                CubY.getEnterprises();
            } else {
                CubY.storeValue('currentLevel', 'enterprise');
                CubY.getSites(currentEnterprise);
            }
        }
    );

CubY.connect('currentSite')
    .to(function (currentSite) {
            CubY.debug('Current currentSite = ' + currentSite);
            if(currentSite) {
                CubY.getLinksBySrcId(currentSite);
            }
        }
    );
