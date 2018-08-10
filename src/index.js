/**
 * Created by Anxin Yang on 3/28/2018.
 */
import $ from 'jquery';
import CubY from './cuby/CubY';
import COLORS from './styles/colors';
import COMMON_STYLE from './styles/common';
import cardContainer from './components/cardContainer';
import todoList from './components/todoList';
import View from './services/View';
import Web from './services/Web';
window.$ = $
CubY.addOn(COMMON_STYLE);
CubY.addOn(View);
CubY.addOn(Web);
CubY.addOn(cardContainer);
CubY.addOn(todoList);

//Init loadding
CubY.getTodoList();
//Declare layout components
window.root = CubY.createElement('div', 'cuby_root', document.getElementById('app'))
    .style(CubY.ROOT_STYLE);

let headerContainer = CubY.createElement('div', 'headerContainer').content('Todo')
    .style(CubY.HEADER_STYLE)
    .on('click', CubY.getTodoList);

let contentContainer = CubY.createElement('div', 'contentContainer').style({
    position: 'relative',
    minWidth: '300px',
    display: 'flex',
    flexGrow:1,
    flexWrap: 'wrap',
    transition:'0.2s',
});
let mainContentSection = CubY.createElement('div', 'mainContentSection')
    .style({
        position: 'relative',
        minWidth: '300px',
        flexGrow: 1,
        transition:'0.2s'
    });
let secondContentSection = CubY.createElement('div', 'secondContentSection').style({
    position: 'relative',
    minWidth: '100px',
    flexGrow: 1,
    transition:'0.2s',
});

let hint = mainContentSection.append('span', 'todoHint')
    .style(
        {
            color: 'gray',
            position: 'absolute',
            bottom: '1em',
            right: 0,
            left: 0,
            opacity: 0,
            transition: '0.2s',
            zIndex: 10,
            textAlign: 'center'
        }
    )
    .content('Saved');

let mainCard = CubY.createCard('mainCard');
let secondCard = CubY.createCard('secondCard')
    .style('overflowX', 'hidden');
let addButton = CubY.createElement('button', 'addButton')
    .content('New')
    .style({"width":"100%","background":"rgb(0, 99, 204)","border":"none","borderBottom":"1px solid rgba(243, 243, 243, 0.85)","padding":"0.5em 0","color":"white","cursor":"pointer"})
    .on('click', function () {
        let data = {
            title: 'New Todo',
            detail: ''
        };
        CubY.createNewTodo(data);
    });

// Place components
root.appendElement(headerContainer);
root.appendElement(contentContainer);
contentContainer.appendElement(secondContentSection);
contentContainer.appendElement(mainContentSection);


mainContentSection.appendElement(mainCard);
secondContentSection.appendElement(secondCard);

secondCard.appendElement(addButton);
// Connect store to components and events

CubY.connect('viewportSize').to(CubY.resetMainContentSectionSize).belong(mainContentSection);
CubY.saveViewportSize();
CubY.connect('todoList').to(function () {
    secondCard.remove('div');
    CubY.createTodoList(secondCard);
});
CubY.connect('currentTodo').to(function (id) {
    mainCard.remove('input');
    mainCard.remove('textarea');
    CubY.createTododetail(mainCard, id);
});

CubY.connect('hint').to(function (_hint) {
    let self = this;
    hint.content(_hint).style('opacity', 1);
    if(this.hintTimer){
        clearTimeout(this.hintTimer);
    }
    this.hintTimer = setTimeout(function () {
        hint.style('opacity', 0);
        self.hintTimer = undefined;
    }, 3000)
}).belong(mainContentSection);

//setup basic listener
window.addEventListener('resize', CubY.saveViewportSize);
assetLoaded('main');

//functions
