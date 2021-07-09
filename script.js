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
    let node = document.createElement("li");
    let textnode = document.createTextNode("");
    node.appendChild(textnode);
}

function deleteWork() {
    // code goes here to delete a work in a card
  
}

function update() {
    // code goes here to update card title
}

function clearWorkList() {
    //code goes here to clear workList
  
}

function changeMode() {
  // code goes here switch between add work, update card title and delete work
}

function deleteMode() {
  // code goes here for delete Mode
}