import CubY from "../cuby/CubY";

const TODO_LIST_STYLE = {

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
        let component = CubY.createElement('div', item.id);
        return component;
    }
};
export default todoList;