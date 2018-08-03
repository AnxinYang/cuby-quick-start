import CubY from "../cuby/CubY";

const LIST_ITEM_CONTAINER_STYLE = {
    width: 'calc(100% - 1em)',
    color: 'rgba(0,0,0,0.87)',
    cursor: 'pointer',
    position: 'relative',
    transition: '0.2s',
    textAlign: 'left',
    padding: '1em 0.5em',
    borderBottom: '1px solid rgba(243,243,243,.85)',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
};

let todoList = {
    createTodoList: function (container) {
        let data = CubY.getValue('todoList') || [];
        data.forEach(function (item) {
            let _item = item;
            container.appendElement(CubY.createTodoListItem(_item));
        })
    },
    createTodoListItem: function (item) {
        let _item = item;
        let component = CubY.createElement('div', _item.id).style(LIST_ITEM_CONTAINER_STYLE)
            .on('click', function (e) {
                let currentSelectedComponent =  CubY.getValue('currentSelectedComponent');
                currentSelectedComponent && currentSelectedComponent.style({
                    'background': '',
                    "borderLeft": ""
                });
                component.style("borderLeft","0.5em solid rgb(0, 99, 204)");
                CubY.storeValue('currentTodo', _item.id);
                CubY.storeValue('currentSelectedComponent', component, {overwrite: true});
            })
            .on('mouseenter',function () {
                this.style('background', '#eee')
            })
            .on('mouseleave',function () {
                let currentTodo =  CubY.getValue('currentTodo');
                this.style('background', currentTodo===item.id?'#eee':'')
            });
        let componentContent = component.append('div')
            .content(item.title);


        return component;
    }
};
export default todoList;