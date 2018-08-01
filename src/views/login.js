/**
 * Created by Anxin Yang on 6/23/2018.
 */

const LOGIN_CONTAINER_STYLE ={
    height: '100vh',
    width: '100%',
    background: 'rgb(39, 50, 56)',
    marginTop: '-3em',
    color: 'white',
    "transition": "0.2s",
    "textShadow": "white 0px 0px 0.5px"
};

const LOGIN_FORM_STYLE = {
    "position": "fixed",
    "border": "1px solid black",
    "borderRadius": "4px",
    "width": "256px",
    "height": "256px",
    "margin": "auto",
    "left": "0",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "textAlign": "center"
};

const LOGIN_TITLE_STYLE = {"width":"100%","display":"inline-block","textAlign":"center","margin":"0.5em 0"};

const LOGIN_INPUT_STYLE = {
    "textShadow": "white 0px 0px 0.5px",
    "padding": "0.5em",
    "border": "1px solid black",
    "borderRadius": "4px",
    "background": "transparent",
    "color": "white",
    "width": "74%",
    "marginTop": "1em"
};

const LOGIN_BUTTON_STYLE = {
    "display":"inline-block",
    "position":"relative",
    "padding": "0.5em",
    "background": "rgba(0, 99, 204, 0.5)",
    "marginTop": "1em",
    "border": "1px solid black",
    "borderRadius": "4px",
    "transition": "0.2s",
    "cursor": "pointer",
    "width": "64px",
    "textAlign": "center"
};

var loginContainer = CubY.createElement('div', 'loginContainer')
    .appendClass('mainContent')
    .style(LOGIN_CONTAINER_STYLE);

var loginForm = loginContainer.append('div', 'loginForm').style(LOGIN_FORM_STYLE);
var title = loginForm.append('span','title').content('Welcome').style(LOGIN_TITLE_STYLE);
var userName = loginForm.append('input', 'userName').style(LOGIN_INPUT_STYLE).attr('placeholder', 'username');

var password = loginForm.append('input', 'password').style(LOGIN_INPUT_STYLE).attr('type', 'password')
    .attr('placeholder', 'password');

var login = loginForm.append('span','login').content('Login').style(LOGIN_BUTTON_STYLE)
    .on('mouseover',function () {
        this.style('background', 'rgba(0, 99, 204, 1)')
    })
    .on('mouseleave',function () {
        this.style('background', 'rgba(0, 99, 204, 0.5)')
    })
    .on('click', function () {
        let data = {
            userName: userName.dom.value,
            password: password.dom.value
        }
        CubY.request('post',data,CubY.baseUrl+'login',undefined,function (state,res,t,xhr) {
            if(state) {
                CubY.storeValue('Authorization',xhr.getResponseHeader('Authorization'));
                CubY.request('get',undefined,CubY.baseUrl+'Globalss',undefined,function (state,res,t,xhr) {
                    if(state) {
                        if(res.result[0].setupDone) {
                            CubY.storeValue('currentView', 'Dashboard');
                            CubY.storeValue('isLogin', true);
                            CubY.getEnterprises();
                        }
                    }
                });
            }
        });

    });

var forgot = loginForm.append('span','forgot').content('Forgot password').style(LOGIN_TITLE_STYLE)
    .style('marginTop','2em')
    .style('cursor', 'pointer')
    .style('opacity', '0.5')
    .on('mouseover',function () {
        this.style('opacity', '1')
    })
    .on('mouseleave',function () {
        this.style('opacity', '0.5')
    });
export default loginContainer
