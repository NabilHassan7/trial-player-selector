document.getElementById('btn-select-1').addEventListener('click',function(){
    if(selectedPlayerNumberVerifier()){
        alert('Cannot add more players');
        return;
    }
    else{
        addPlayerNameToList('player-name-1');       
        disableSelectButton('btn-select-1');
    }
})