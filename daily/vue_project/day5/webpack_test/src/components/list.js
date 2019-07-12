
function createList(n) {
    const ul = document.createElement('ul');

    for (let i = 0;i < n; i++) {
        let li = document.createElement('li');
        li.innerHTML = i;

        ul.appendChild(li);
    }

    return ul;
}


module.exports = {
    createList
};
