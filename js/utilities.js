// function determines the current number of selected players 
function getPlayerListLength(){
    const selectedPlayers = document.querySelectorAll('li');
    const numberOfSelectedPlayers = selectedPlayers.length;
    return numberOfSelectedPlayers;
}

// function verifies if the number of players is greater 5 or not
function selectedPlayerNumberVerifier(){
    const numberOfSelectedPlayers = getPlayerListLength();
    if(numberOfSelectedPlayers >= 5){
        return true;
    }
    else{
        return false;
    }
}

// function adds player names to the list
function addPlayerNameToList(elementId){
    const playerNameElement = document.getElementById(elementId);
    const playerNameString = playerNameElement.innerText;

    const newLi = document.createElement('li');
    newLi.innerText = playerNameString;
    const listElement = document.getElementById('selected-players');
        
    listElement.appendChild(newLi);
}

// function disables the button after clicked
function disableSelectButton(elementId){
    document.getElementById(elementId).setAttribute("style", "background-color: #A2A9AF;");
    document.getElementById(elementId).setAttribute("disabled", true);
}

// function updates the list header title
function updateListHeaderNumber(){
    const numberOfSelectedPlayers = getPlayerListLength();
    const currentSelectedPlayers = document.getElementById('current-selected-players');
    currentSelectedPlayers.innerText = numberOfSelectedPlayers;
}

// function retrieves the value from a field in the form of a number
function getElementValueById(elementId){
    const selectedElementField = document.getElementById(elementId);
    const selectedElementString = selectedElementField.value;
    const selectedElement = parseInt(selectedElementString);
    return selectedElement;
}

// function retrieves the value from a field in the form of a string
function getElementStringValueById(elementId){
    const selectedElementField = document.getElementById(elementId);
    const selectedElementString = selectedElementField.innerText;
    const selectedElement = parseInt(selectedElementString);
    return selectedElement;
}

// function sets the value of a field in the form of a number
function setElementValueById(elementId, value){
    const selectedElementField = document.getElementById(elementId);
    selectedElementField.innerText = value;
}

// function sets the value of a field in the form of a number
function setElementValueNumberById(elementId, value){
    const selectedElementField = document.getElementById(elementId);
    selectedElementField.value = value;
}

// validates user inputs and checks for errors
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
        alert('Input cannot be a negative number.');
        return false;
    }
    else if(elementValue === ' '){
        const emptyString = ' ';
        setElementValueNumberById(elementId,emptyString);
        alert('Please enter a number in the input field');
        return false;
    }
    else{
        return true;
    }
}