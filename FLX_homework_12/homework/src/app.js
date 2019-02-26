const rootNode = document.getElementById('root');

const todoItems = [];

window.location.hash = '';

let mainContainer = document.createElement('section');
mainContainer.setAttribute('id', 'main');

const ZERO = 0;

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
    mainElem.TODOList.appendChild(mainElem.welcome);
    mainElem.TODOList.appendChild(mainElem.addTaskBtn);

    if (todoItems.length === ZERO) {
        mainElem.message.setAttribute('class', 'message');
        mainElem.message.innerHTML = 'TODO is empty';

        mainElem.TODOList.appendChild(mainElem.message);
    }
    return mainElem.TODOList;
}

let page1 = mainCon();
mainContainer.appendChild(page1);

function locationHashChanged() {
    if (location.hash === '') {
        mainContainer.innerHTML = null;
        mainContainer.appendChild(page1);
        mainCon();
    }
}

window.onhashchange = locationHashChanged;
rootNode.appendChild(mainContainer);
