const rootNode = document.getElementById('root');
window.location.hash = '';

const mainContainer = document.createElement('section');
mainContainer.setAttribute('id', 'main');
const list = document.createElement('div');

let todoItems = [];
const ZERO = 0;
let ID, isDone, desc;
const addItem = () => {
    desc = document.getElementById('addInput').value;
    if (desc !== '') {
        if (todoItems.length > ZERO) {
            ID += 1;
        } else {
            ID = ZERO;
        }
        isDone = false;
        todoItems.push({
            isDone,
            ID: ID,
            desc
        })
        window.location.hash = '';
    }
}

const drawAll = arr => {
    let x = document.createElement('div');
    for (let el of arr) {
        if (el.isDone === false) {
            x.appendChild(drawItem(el))
        }
    }
    for (let el of arr) {
        if (el.isDone === true) {
            x.appendChild(drawItem(el))
        }
    }
    return x;
}

const delItem = ID => {
    todoItems = todoItems.filter(el => el.ID !== ID);
    list.replaceChild(drawAll(todoItems), list.firstChild);
    if (todoItems.length === ZERO) {
        let message = document.createElement('p');
        message.setAttribute('class', 'message');
        message.innerHTML = 'TODO is empty';
        list.replaceChild(message, list.firstChild);
    }
}

const check = item => {
    if (item.isDone === false) {
        item.isDone = true;
        list.replaceChild(drawAll(todoItems), list.firstChild);
    }
}

const drawItem = item => {
    let itemEl = {
        row: document.createElement('div'),
        check: document.createElement('div'),
        desc: document.createElement('div'),
        del: document.createElement('div')
    }
    itemEl.row.setAttribute('class', 'row');
    itemEl.desc.setAttribute('class', 'desc');
    if (item.isDone === false) {
        itemEl.check.setAttribute('class', 'check');
        itemEl.desc.setAttribute('class', 'desc');
    } else {
        itemEl.check.setAttribute('class', 'checked');
        itemEl.desc.setAttribute('class', 'desc checked-desc');
    }
    itemEl.check.addEventListener('click', () => check(item));
    itemEl.del.addEventListener('click', () => {
        delItem(item.ID);
    });
    itemEl.del.setAttribute('class', 'del');
    itemEl.desc.innerHTML = item.desc;
    itemEl.row.appendChild(itemEl.check);
    itemEl.row.appendChild(itemEl.desc);
    itemEl.row.appendChild(itemEl.del);

    return itemEl.row;
}

let addTask = () => {
    if (window.location.hash === '') {
        window.location.hash = '/add';
        //main
        let addPage = document.createElement('section');
        addPage.setAttribute('id', 'addPage');
        //header
        let headerText = document.createElement('h1');
        headerText.innerHTML = 'Add Task';
        headerText.setAttribute('class', 'welcome');
        //container 
        let addContainer = document.createElement('div');
        addContainer.setAttribute('class', 'addCont');

        let actionInput = document.createElement('input');
        actionInput.setAttribute('id', 'addInput');

        let buttons = document.createElement('div');
        buttons.setAttribute('class', 'buttons');

        let cancelBnt = document.createElement('button');
        cancelBnt.setAttribute('class', 'cancelBnt');
        cancelBnt.innerHTML = 'Cancel';
        cancelBnt.addEventListener('click', () => {
            window.location.hash = '';
        })

        let saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'saveBtn');
        saveBtn.innerHTML = 'Save changes';
        saveBtn.addEventListener('click', addItem);

        buttons.appendChild(cancelBnt);
        buttons.appendChild(saveBtn);

        addPage.appendChild(headerText);
        addPage.appendChild(actionInput);
        addPage.appendChild(buttons);
        mainContainer.replaceChild(addPage, page1);
    }
}

function mainCon() {
    const mainElem = {
        TODOList: document.createElement('section'),
        welcome: document.createElement('h1'),
        addTaskBtn: document.createElement('button'),

        message: document.createElement('p')
    }
    mainElem.TODOList.setAttribute('id', 'todo-page');
    mainElem.welcome.setAttribute('class', 'welcome');
    mainElem.welcome.innerHTML = 'Simple TODO aplication';
    mainElem.addTaskBtn.setAttribute('class', 'add-button');
    mainElem.addTaskBtn.innerHTML = 'Add new task';
    mainElem.addTaskBtn.addEventListener('click', addTask);
    mainElem.list.setAttribute('id', 'list');
    mainElem.TODOList.appendChild(mainElem.welcome);
    mainElem.TODOList.appendChild(mainElem.addTaskBtn);
    if (todoItems.length === ZERO) {
        mainElem.message.setAttribute('class', 'message');
        mainElem.message.innerHTML = 'TODO is empty';
        mainElem.list.appendChild(mainElem.message);
        mainElem.TODOList.appendChild(mainElem.list);
    } else {
        list.replaceChild(drawAll(todoItems), list.firstChild);
    }
    return mainElem.TODOList;
}

let page1 = mainCon();
mainContainer.appendChild(page1);

function locationHashChanged() {
    if (location.hash === '') {
        mainContainer.replaceChild(page1, mainContainer.firstChild);
        mainCon();
    }
}

window.onhashchange = locationHashChanged;
rootNode.appendChild(mainContainer);
