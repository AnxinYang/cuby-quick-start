import CubY from "../cuby/CubY";

const LIST_ITEM_CONTAINER_STYLE = {
    width: '95%',
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
            let itemComponent = CubY.createTodoListItem(item);

            container.appendElement(itemComponent);
        })
    },
    createTodoListItem: function (item) {
        let component = CubY.createElement('div', item.id).content(item.title)
            .style(LIST_ITEM_CONTAINER_STYLE)
            .on('mouseenter',function () {
                this.style('background', '#eee')
            })
            .on('mouseleave',function () {
                this.style('background', '')
            });

        return component;
    }
};
export default todoList;