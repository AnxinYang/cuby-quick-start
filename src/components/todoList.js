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
const TODO_TITLE_INPUT_STYLE = {
    fontSize: '15px',
    fontWeight: 'bold',
    border:'none',
    borderBottom: '1px solid lightgray',
    width: 'calc(100% - 2em)',
    color: BLACK,
    margin: '0.5em',
    paddingLeft: '1em',
    "outline": "none",
    "WebkitBoxShadow": "none",
    "MozBoxShadow": "none",
    "boxShadow": "none",
};
const TODO_DETAIL_TEXTAREA_STYLE = {
    width: 'calc(100% - 2em)',
    height: 'calc(100% - 4em)',
    "border": "none",
    "overflow": "auto",
    "outline": "none",
    "WebkitBoxShadow": "none",
    "MozBoxShadow": "none",
    "boxShadow": "none",
    margin: '0.5em',
    paddingLeft: '1em',
};
let todoList = {
    setCurrentTodo: function (id, component) {
        let currentSelectedComponent =  CubY.getValue('currentSelectedComponent');
        currentSelectedComponent && currentSelectedComponent.style({
            'background': '',
            "borderLeft": ""
        });
        component.style("borderLeft","4px solid rgb(0, 99, 204)");
        CubY.getTodoList(id);
        CubY.storeValue('currentTodo', id);
        CubY.storeValue('currentSelectedComponent', component, {overwrite: true});
    },
    createTododetail: function (container, id) {
        let item = CubY.getValue(id);
        let title = CubY.createElement('input')
            .style(TODO_TITLE_INPUT_STYLE)
            .attr('maxlength', 32)
            .attr('placeholder', 'Title')
            .prop('value', item.title)
            .on('keyup', function () {
                item.title = this.dom.value;
                CubY.storeValue(item.id, {title:item.title});
                if(this.saveTimer){
                    clearTimeout(this.saveTimer);
                }
                this.saveTimer = setTimeout(function () {
                    CubY.updateTodo(item);
                    self.saveTimer = undefined;
                }, 1000);
            });
        let detail = CubY.createElement('textarea')
            .style(TODO_DETAIL_TEXTAREA_STYLE)
            .attr('placeholder', 'Enter details...')
            .attr('maxlength', 5000)
            .prop('value', item.detail)
            .on('keyup', function () {
                item.detail = this.dom.value;
                CubY.storeValue(item.id, {detail:item.detail});
                if(this.saveTimer){
                    clearTimeout(this.saveTimer);
                }
                this.saveTimer = setTimeout(function () {
                    CubY.updateTodo(item);
                    self.saveTimer = undefined;
                }, 1000);
            });;

        container.appendElement(title);
        container.appendElement(detail);
    },
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
            .style("borderLeft",CubY.getValue('currentTodo')===item.id?"4px solid rgb(0, 99, 204)":'')
            .style('background', CubY.getValue('currentTodo')===item.id?'#eee':'')
            .on('click', function (e) {
                CubY.setCurrentTodo(_item.id, component);
            })
            .on('mouseenter',function () {
                this.style('background', '#eee')
            })
            .on('mouseleave',function () {
                let currentTodo =  CubY.getValue('currentTodo');
                this.style('background', currentTodo===item.id?'#eee':'')
            });
        if(CubY.getValue('currentTodo')===item.id){
            CubY.setCurrentTodo(_item.id, component);
        }
        let componentContent = component.append('div')
            .content(item.title);

        CubY.connect(_item.id).to(function (updated) {
            componentContent.content(updated.title);
        });

        return component;
    }
};
export default todoList;