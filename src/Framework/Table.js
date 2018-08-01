const TABLE_STYLE = {"position":"relative","left":"0","right":"0","top":"1em","margin":"auto","width":"90%","textAlign":"center", borderCollapse:'collapse', borderSpacing:0, border: '1px solid #dddddd'};
const TABLE_BORDER_STYLE = {border: '1px solid #dddddd'};
const TABLE_CELL_STYLE ={padding: '0.5em', transition: '0.2s', border: '1px solid #dddddd'};
var Table = {
    createTable(id){
        return CubY.createElement('table',id).style(TABLE_STYLE)
    },
    createTableRow(fieldList, data, cellProcessor) {
        let tr = CubY.createElement('tr').style('transition','0.2s')
            .on('mouseenter', function () {
                this.style({backgroundColor: 'rgba(0, 99, 204,0.5)', "transform":"translate(-1px, -2px)","boxShadow":"lightgray 2px 4px 4px"})
            })
            .on('mouseleave', function () {
                this.style({backgroundColor: '', "transform":"","boxShadow":""})
            });
        fieldList.forEach(function (field) {
            let td = CubY.createElement('td').style(TABLE_CELL_STYLE);
            if (typeof cellProcessor === 'function') {
                let notSetContent = cellProcessor(field, data, td);
                if(notSetContent !== true) {
                    td.content(data[field]);
                }
            }
            tr.appendElement(td);
        });
        return tr;
    },
    createTableHeader(fieldList, headerProcessor){
        let tr = CubY.createElement('tr').style({backgroundColor: 'rgba(0, 99, 204, 1)', color: 'white'});
        fieldList.forEach(function (field)  {
            let th = CubY.createElement('th').style(TABLE_CELL_STYLE);
            th.content(field);
            if(typeof headerProcessor === 'function') {
                headerProcessor(field, th);
            }
            tr.appendElement(th);
        });
        return tr;
    },
    fillTable: function (table) {
        table.remove('tr');

    }
};

export default Table