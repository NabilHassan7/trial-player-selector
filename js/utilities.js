function getPlayerListLength(){
    const selectedPlayers = document.querySelectorAll('li');
    const numberOfSelectedPlayers = selectedPlayers.length;
    return numberOfSelectedPlayers;
}

function selectedPlayerNumberVerifier(){
    const numberOfSelectedPlayers = getPlayerListLength();
    if(numberOfSelectedPlayers >= 5){
        return true;
    }
    else{
        return false;
    }
}

function addPlayerNameToList(elementId){
    const playerNameElement = document.getElementById(elementId);
    const playerNameString = playerNameElement.innerText;

    const newLi = document.createElement('li');
    newLi.innerText = playerNameString;
    const listElement = document.getElementById('selected-players');
        
    listElement.appendChild(newLi);
}

function disableSelectButton(elementId){
    document.getElementById(elementId).setAttribute("style", "background-color: #A2A9AF;");
    document.getElementById(elementId).setAttribute("disabled", true);
}

function updateListHeaderNumber(){
    const numberOfSelectedPlayers = getPlayerListLength();
    const currentSelectedPlayers = document.getElementById('current-selected-players');
    currentSelectedPlayers.innerText = numberOfSelectedPlayers;
}

function getElementValueById(elementId){
    const selectedElementField = document.getElementById(elementId);
    const selectedElementString = selectedElementField.value;
    const selectedElement = parseInt(selectedElementString);
    return selectedElement;
}

function getElementStringValueById(elementId){
    const selectedElementField = document.getElementById(elementId);
    const selectedElementString = selectedElementField.innerText;
    const selectedElement = parseInt(selectedElementString);
    return selectedElement;
}

function setElementValueById(elementId, value){
    const selectedElementField = document.getElementById(elementId);
    selectedElementField.innerText = value;
}

function setElementValueNumberById(elementId, value){
    const selectedElementField = document.getElementById(elementId);
    selectedElementField.value = value;
}

function inputValueValidator(elementId, elementValue){
    if(isNaN(elementValue)){
        const emptyString = ' ';
        setElementValueNumberById(elementId,emptyString);
        alert('Please enter a valid number in the input field');
        return false;
    }
    else if(elementValue < 0){
        const emptyString = ' ';
        setElementValueNumberById(elementId,emptyString);
        alert('Budget cannot be a negative number.');
        return false;
    }
    else if(elementValue === ' '){
        const emptyString = ' ';
        setElementValueNumberById(elementId,emptyString);
        alert('Please enter a number in the cost per player field');
        return false;
    }
    else{
        return true;
    }
}