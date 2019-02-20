let rootNode = document.getElementById("root");


//TODO LIST
let mainContainer = document.createElement('section');
mainContainer.setAttribute('id', 'main-container');

//HEADER WRAPPER
let header = document.createElement('header');

let title = document.createElement('div');
title.innerHTML = 'TODO Cat List';
title.setAttribute('class', 'header-title');

//INPUT FIELD + BTN
let addInput = document.createElement('div');
addInput.setAttribute('class', 'addInput');

let inputField = document.createElement('input');
inputField.setAttribute('id', 'input');
inputField.setAttribute('class', 'header-input')
inputField.setAttribute('placeholder', 'Add New Action');

let addBtn = document.createElement('i');
addBtn.setAttribute('class', 'material-icons add-btn');
addBtn.innerHTML = 'add_box';
addBtn.addEventListener('click', function () {

    let text = document.getElementById('input').value;
    alert(text);
    let listItem = document.createElement('div');



})

addInput.appendChild(inputField);
addInput.appendChild(addBtn);
//HR
let hr = document.createElement('hr');
hr.setAttribute('class', 'header-line');

//
header.appendChild(title);
header.appendChild(addInput);
header.appendChild(hr);
//

//MAIN WRAPPER
let list = document.createElement('main');
list.setAttribute('class', 'list');







//FOOTER
let footer = document.createElement('div');
footer.setAttribute('class', 'footer')
let footerImg = document.createElement('img');
footerImg.setAttribute('class', 'cat-img');
footerImg.setAttribute('src', './assets/img/cat.png')

footer.appendChild(footerImg);



mainContainer.appendChild(header);
mainContainer.appendChild(list);
mainContainer.appendChild(footer);
rootNode.appendChild(mainContainer);