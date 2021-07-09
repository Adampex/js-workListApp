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
    // code goes here for add work mode
    const textInput = document.getElementById('work').value;
    document.getElementById('selected').children[1].innerHTML = textInput;
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
    //code goes here to clear workList
  
}

function changeMode() {
    document.getElementById('add').style.display = 'none';
    document.getElementById('edit').style.display = 'block';
}

function deleteMode() {
  // code goes here for delete Mode
}