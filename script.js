function selectCard(card) {
    
    if (card === 'card1') {
        document.getElementsByClassName('card2')[0].id = '';
        document.getElementsByClassName('card3')[0].id = '';
    } else if (card === 'card2') {
        document.getElementsByClassName('card1')[0].id = '';
        document.getElementsByClassName('card3')[0].id = '';
    } else if (card === 'card3') {
        document.getElementsByClassName('card1')[0].id = '';
        document.getElementsByClassName('card2')[0].id = '';
    }
    document.getElementsByClassName(card)[0].id = 'selected';
}

function addWork() {
    const textInput = document.getElementById('work').value;
    const ulNode = document.createElement('ul');
    const listNode = document.createElement('li');
    const textNode = document.createTextNode(textInput);
    const boardToWrite = document.getElementById('selected');

    listNode.appendChild(textNode);

    const cardTab = document.getElementById('selected').className;

    let ulTabId = '';

    switch (cardTab) {
        case 'card1': 
            ulTabId = 'card1';
            break;
        case 'card2': 
            ulTabId = 'card2';
            break;
        case 'card3': 
            ulTabId = 'card3';
            break;
    }

    //console.log(cardTab);
    //console.log(ulTabId);
    const ulNodeExists = document.getElementById(ulTabId);

    if (typeof(ulNodeExists) != 'undefined' && ulNodeExists != null) {
        ulNodeExists.appendChild(listNode);
        boardToWrite.appendChild(ulNodeExists);
        
    } else {
        ulNode.appendChild(listNode);
        boardToWrite.appendChild(ulNode);
        ulNode.setAttribute('id', ulTabId);
    }

    document.getElementById('work').value = '';

}

function deleteWork() {
    // code goes here to delete a work in a card
  
}

function update() {
    const textInput = document.getElementById('cardTitle').value;
    document.getElementById('selected').children[1].innerHTML = textInput;
    document.getElementById('cardTitle').value = '';
}

function clearWorkList() {
    document.getElementById('addWork').checked = true;
    document.getElementById('cardTitle').value = '';
    document.getElementById('work').value = '';

    const card1 = document.getElementsByClassName('card1')[0];
    //card1.removeChild(card1.childNodes[2]);
    console.log(card1);
  
}

function changeMode() {
    const workCheck = document.getElementById('addWork').checked;
    const editCheck = document.getElementById('editTitle').checked;
    
    if (workCheck) {
        document.getElementById('add').style.display = 'block';
        document.getElementById('edit').style.display = 'none';
    } else if (editCheck) {
        document.getElementById('add').style.display = 'none';
        document.getElementById('edit').style.display = 'block';
    }
    
}

function deleteMode() {
  // code goes here for delete Mode
}