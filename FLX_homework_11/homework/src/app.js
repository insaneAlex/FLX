let rootNode = document.getElementById('root');

//TODO LIST
let mainContainer = document.createElement('section');
mainContainer.setAttribute('id', 'main-container');

//HEADER block
let header = document.createElement('header');
const TEN = 10;
const ZERO = 0;
const headerEl = {
    title: document.createElement('div'),
    addAction: document.createElement('div'),
    inputField: document.createElement('input'),
    addBtn: document.createElement('i')
}

headerEl.title.innerHTML = 'TODO Cat List';
headerEl.title.setAttribute('class', 'header-title');

//INPUT FIELD + add button
headerEl.addAction.setAttribute('class', 'addAction');

headerEl.inputField.setAttribute('id', 'input');
headerEl.inputField.setAttribute('class', 'header-input')
headerEl.inputField.setAttribute('placeholder', 'Add New Action');
headerEl.inputField.autofocus = true;
headerEl.inputField.addEventListener('input', () => {
    if (!!document.getElementById('input').value > ZERO) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

headerEl.addBtn.setAttribute('class', 'material-icons');
headerEl.addBtn.innerHTML = 'add_box';

let btn = document.createElement('button');
btn.setAttribute('id', 'add-btn');
btn.disabled = true;

let amount = ZERO;
btn.addEventListener('click', function () {
    const elemObj = {
        text: document.getElementById('input').value,
        row: document.createElement('div'),
        left: document.createElement('div'),
        statusIco: document.createElement('i'),
        itemText: document.createElement('p'),
        right: document.createElement('div'),
        delIco: document.createElement('i')
    }
    amount++;
    elemObj.row.setAttribute('class', 'row');
    elemObj.row.setAttribute('draggable', 'true');

    elemObj.left.setAttribute('class', 'left');
    elemObj.statusIco.setAttribute('class', 'material-icons status');
    elemObj.statusIco.innerHTML = 'check_box_outline_blank';
    elemObj.statusIco.addEventListener('click', () => {
        if (elemObj.statusIco.innerHTML !== 'check_box') {
            elemObj.statusIco.innerHTML = 'check_box';
        }
    })

    elemObj.itemText.setAttribute('class', 'item-text')
    elemObj.itemText.innerHTML = elemObj.text;
    elemObj.left.appendChild(elemObj.statusIco);
    elemObj.left.appendChild(elemObj.itemText);

    elemObj.right.setAttribute('class', 'right');
    elemObj.delIco.setAttribute('class', 'material-icons delIco');
    elemObj.delIco.innerHTML = 'delete';
    elemObj.delIco.addEventListener('click', () => {
        elemObj.row.remove();
        amount--;
        btn.disabled = false;

        if (document.querySelector('.error-message')) {
            document.querySelector('.error-message').style.display = 'none';
        }

        if (headerEl.inputField.disabled) {
            headerEl.inputField.disabled = false;
        }
    })
    elemObj.right.appendChild(elemObj.delIco);

    elemObj.row.appendChild(elemObj.left);
    elemObj.row.appendChild(elemObj.right);

    document.getElementById('list').appendChild(elemObj.row);

    if (amount === TEN) {
        btn.disabled = true;
        headerEl.inputField.disabled = true;
        if (document.querySelector('.error-message')) {
            document.querySelector('.error-message').style.display = 'block';
        } else {
            let message = document.createElement('p');
            message.setAttribute('class', 'error-message');
            message.innerHTML = 'Maximum item per list are created';
            headerEl.title.appendChild(message);
        }
    }
    let cols = document.querySelectorAll('#list .row');
    [].forEach.call(cols, function (col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false)
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
    });
})
let dragSrcEl = null;

function handleDragStart(e) {
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDrop(e) {
    // this/e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }

    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl !== this) {
        // Set the source column's HTML to the HTML of the columnwe dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

btn.appendChild(headerEl.addBtn);

headerEl.addAction.appendChild(headerEl.inputField);
headerEl.addAction.appendChild(btn);
//HR
let hr = document.createElement('hr');
hr.setAttribute('class', 'header-line');

header.appendChild(headerEl.title);
header.appendChild(headerEl.addAction);
header.appendChild(hr);

//MAIN WRAPPER
let list = document.createElement('main');
list.setAttribute('id', 'list');

//FOOTER
let footer = document.createElement('footer');
footer.setAttribute('class', 'footer')
let footerImg = document.createElement('img');
footerImg.setAttribute('class', 'cat-img');
footerImg.setAttribute('src', './assets/img/cat.png');


//paw secret button :)
footerImg.addEventListener('click', () => {
    if (list.firstChild) {
        let dec = confirm('Do you really want do delete all actions?');
        if (dec) {
            document.getElementById('list').innerHTML = null;
            amount = ZERO;
            if (document.querySelector('.error-message')) {
                document.querySelector('.error-message').style.display = 'none';
            }
            headerEl.inputField.disabled = false;
            document.getElementById('input').value = '';
            headerEl.addBtn.disabled = true;
        }
    }
})

footer.appendChild(footerImg);

mainContainer.appendChild(header);
mainContainer.appendChild(list);
mainContainer.appendChild(footer);
rootNode.appendChild(mainContainer);