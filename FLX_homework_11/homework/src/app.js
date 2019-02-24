let rootNode = document.getElementById("root");

//TODO LIST
let mainContainer = document.createElement('section');
mainContainer.setAttribute('id', 'main-container');

//HEADER block
let header = document.createElement('header');

const headerEl = {
    title: document.createElement('div'),
    addInput: document.createElement('div'),
    inputField: document.createElement('input'),
    addBtn: document.createElement('i')
}

headerEl.title.innerHTML = 'TODO Cat List';
headerEl.title.setAttribute('class', 'header-title');

//INPUT FIELD + add button
headerEl.addInput.setAttribute('class', 'addInput');

headerEl.inputField.setAttribute('id', 'input');
headerEl.inputField.setAttribute('class', 'header-input')
headerEl.inputField.setAttribute('placeholder', 'Add New Action');
headerEl.inputField.autofocus = true;
headerEl.inputField.addEventListener('input', () => {
    if (!!document.getElementById('input').value > 0) {
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

let amount = 0;
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
        if (!!document.querySelector('.error-message')) {
            document.querySelector('.error-message').style.display = 'none';
        }
    })
    elemObj.right.appendChild(elemObj.delIco);

    elemObj.row.appendChild(elemObj.left);
    elemObj.row.appendChild(elemObj.right);

    document.getElementById('list').appendChild(elemObj.row);

    if (amount === 10) {
        btn.disabled = true;
        if (!!document.querySelector('.error-message')) {
            document.querySelector('.error-message').style.display = 'block';
        } else {
            let message = document.createElement('p');
            message.setAttribute('class', 'error-message');
            message.innerHTML = 'Maximum item per list are create';
            headerEl.title.appendChild(message);
        }
    }
})
btn.appendChild(headerEl.addBtn);

headerEl.addInput.appendChild(headerEl.inputField);
headerEl.addInput.appendChild(btn);
//HR
let hr = document.createElement('hr');
hr.setAttribute('class', 'header-line');

//
header.appendChild(headerEl.title);
header.appendChild(headerEl.addInput);
header.appendChild(hr);
//

//MAIN WRAPPER
let list = document.createElement('main');
list.setAttribute('id', 'list');

//FOOTER
let footer = document.createElement('footer');
footer.setAttribute('class', 'footer')
let footerImg = document.createElement('img');
footerImg.setAttribute('class', 'cat-img');
footerImg.setAttribute('src', './assets/img/cat.png');

//secret button :)
footerImg.addEventListener('click', () => {
    if (list.firstChild) {
        let dec = confirm('Do you really want do delete all actions?');
        if (dec) {
            document.getElementById('list').innerHTML = null;
            amount = 0;
        }
    }
})
footer.appendChild(footerImg);

mainContainer.appendChild(header);
mainContainer.appendChild(list);
mainContainer.appendChild(footer);
rootNode.appendChild(mainContainer);