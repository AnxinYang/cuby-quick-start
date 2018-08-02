/**
 * Created by Anxin Yang on 3/28/2018.
 */
import CubY from './cuby/CubY';
import cardContainer from './components/cardContainer';
import COLORS from './styles/colors';
import COMMON_STYLE from './styles/common';
CubY.addOn(cardContainer);
CubY.addOn(COMMON_STYLE);
//Declare layout components
let root = CubY.createElement('div', 'cuby_root', document.getElementById('app'))
    .style(CubY.ROOT_STYLE);

let mainContentSection = CubY.createElement('div', 'mainContentSection')
    .style({
        position: 'relative',
        minWidth: '300px',
        width:'66.66%',
        flexGrow: 1
    });
let secondContentSection = CubY.createElement('div', 'secondContentSection').style({
    position: 'relative',
    minWidth: '100px',
    flexGrow: 1
});

let mainCard = CubY.createCard('mainCard');
let secondCard = CubY.createCard('secondCard');

// Place components
root.appendElement(mainContentSection);
root.appendElement(secondContentSection);

mainContentSection.appendElement(mainCard);


//setup basic listener
window.addEventListener('resize', function () {

});
assetLoaded('main');