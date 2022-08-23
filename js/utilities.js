function selectedPlayerNumberVerifier(){
    const numberOfSelectedPlayers = document.querySelectorAll('li');
    if(numberOfSelectedPlayers.length >= 5){
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