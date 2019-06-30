
function createTable(rows, columns) {
    let table = document.createElement('table');
    table.border = 1;
    let tbody = document.createElement('tbody');

    table.appendChild(tbody);

    for (let i = 0;i < rows; i++) {
        let tr = document.createElement('tr');

        for (let j = 0;j < columns; j++) {
            let td = document.createElement('td');
            td.innerText = i + ', ' + j;
            tr.appendChild(td)
        }

        tbody.appendChild(tr);
    }

    return table;
}

// exports.add = function() {
//
// }

module.exports = {
    add(a, b) {
        return a + b;
    },
    createTable
}
