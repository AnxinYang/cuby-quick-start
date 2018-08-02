/**
 * Created by Anxin Yang on 3/28/2018.
 */
import $ from 'jquery';
import CubY from './cuby/CubY';
import cardContainer from './components/cardContainer';
import todoList from './components/todoList';
import COLORS from './styles/colors';
import COMMON_STYLE from './styles/common';
import View from './services/View';
import Web from './services/Web';
window.$ = $
CubY.addOn(View);
CubY.addOn(Web);
CubY.addOn(cardContainer);
CubY.addOn(todoList);
CubY.addOn(COMMON_STYLE);
//Init loadding
CubY.getTodoList();
//Declare layout components
window.root = CubY.createElement('div', 'cuby_root', document.getElementById('app'))
    .style(CubY.ROOT_STYLE);

let mainContentSection = CubY.createElement('div', 'mainContentSection')
    .style({
        position: 'relative',
        minWidth: '300px',
        width:'66.66%',
        flexGrow: 1,
        transition:'0.2s'
    });
let secondContentSection = CubY.createElement('div', 'secondContentSection').style({
    position: 'relative',
    minWidth: '100px',
    flexGrow: 1,
    transition:'0.2s'
});

let mainCard = CubY.createCard('mainCard');
let secondCard = CubY.createCard('secondCard');

// Place components
root.appendElement(secondContentSection);
root.appendElement(mainContentSection);


mainContentSection.appendElement(mainCard);
secondContentSection.appendElement(secondCard);

// Connect store to components and events

CubY.connect('viewportSize').to(CubY.resetMainContentSectionSize).belong(mainContentSection);
CubY.connect('todoList').to(function () {
    CubY.createTodoList(secondCard);
});

//setup basic listener
window.addEventListener('resize', CubY.saveViewportSize);
assetLoaded('main');

//functions
