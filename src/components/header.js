import CubY from '../Framework/CubY/CubY';

var header = CubY.createElement('div', 'header')
    .attr('onselectstart', 'return false;')
    .style('width','100vw')
    .style('display', 'flex')
    .style('position', 'absolute')
    .style('opacity', '1')
    .style('top', '-4em')
    .style('height', '3em')
    .style('zIndex', '10')
    .style('transition', '0.2s')
    .style('background','rgb(0, 99, 204)')
    .style({"borderBottom":"1px solid black"});

var headerItems = ['Dashboard', 'Network', 'Application','Software','Marketplace'];
headerItems.forEach(function (item,idx) {
    headerItems[idx] = header.append('div', 'header_' + item)
        .content(item)
        .appendClass('xx')
        .style('textAlign','center')
        .style('color', 'white')
        .style('padding', '1em 0.5em')
        .style('cursor', 'pointer')
        .style('textShadow', '0 0 1px white')
        .style('transition', '0.2s')
        .on('mouseover', function () {
            this.style('background', 'rgb(39, 50, 56)');
        })
        .on('mouseleave', function () {
            let background = this.isSelected?'rgb(39, 50, 56)':'rgb(0, 99, 204)';
            this.style('background', background);
        })
        .on('click', function () {
            CubY.storeValue('currentView', item);
        });

    CubY.connect('currentView').to(function (d) {
        if(headerItems[idx].getContent()===d){
            headerItems[idx].style('background', 'rgb(39, 50, 56)');
            headerItems[idx].isSelected = true;
        }else{
            headerItems[idx].style('background', 'rgb(0, 99, 204)');
            headerItems[idx].isSelected = false;
        }
    });

    CubY.connect('isLogin').to(function (d) {
        let isLogin = CubY.getValue('isLogin');
        if(isLogin){
            header.style('top','0');
        }else {
            header.style('top','-4em');
        }
    })
});


export default header;