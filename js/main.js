document.getElementById('btn-select-1').addEventListener('click',function(){
    if(selectedPlayerNumberVerifier()){
        alert('You have reached maximum number of selectable players. Cannot add more');
        return;
    }
    else{
        addPlayerNameToList('player-name-1');       
        disableSelectButton('btn-select-1');
        updateListHeaderNumber();
    }
})

document.getElementById('btn-select-2').addEventListener('click',function(){
    if(selectedPlayerNumberVerifier()){
        alert('You have reached maximum number of selectable players. Cannot add more');
        return;
    }
    else{
        addPlayerNameToList('player-name-2');       
        disableSelectButton('btn-select-2');
        updateListHeaderNumber();
    }
})

document.getElementById('btn-select-3').addEventListener('click',function(){
    if(selectedPlayerNumberVerifier()){
        alert('You have reached maximum number of selectable players. Cannot add more');
        return;
    }
    else{
        addPlayerNameToList('player-name-3');       
        disableSelectButton('btn-select-3');
        updateListHeaderNumber();
    }
})

document.getElementById('btn-select-4').addEventListener('click',function(){
    if(selectedPlayerNumberVerifier()){
        alert('You have reached maximum number of selectable players. Cannot add more');
        return;
    }
    else{
        addPlayerNameToList('player-name-4');       
        disableSelectButton('btn-select-4');
        updateListHeaderNumber();
    }
})

document.getElementById('btn-select-5').addEventListener('click',function(){
    if(selectedPlayerNumberVerifier()){
        alert('You have reached maximum number of selectable players. Cannot add more');
        return;
    }
    else{
        addPlayerNameToList('player-name-5');       
        disableSelectButton('btn-select-5');
        updateListHeaderNumber();
    }
})

document.getElementById('btn-select-6').addEventListener('click',function(){
    if(selectedPlayerNumberVerifier()){
        alert('You have reached maximum number of selectable players. Cannot add more');
        return;
    }
    else{
        addPlayerNameToList('player-name-6');       
        disableSelectButton('btn-select-6');
        updateListHeaderNumber();
    }
})

document.getElementById('btn-select-7').addEventListener('click',function(){
    if(selectedPlayerNumberVerifier()){
        alert('You have reached maximum number of selectable players. Cannot add more');
        return;
    }
    else{
        addPlayerNameToList('player-name-7');       
        disableSelectButton('btn-select-7');
        updateListHeaderNumber();
    }
})

document.getElementById('btn-select-8').addEventListener('click',function(){
    if(selectedPlayerNumberVerifier()){
        alert('You have reached maximum number of selectable players. Cannot add more');
        return;
    }
    else{
        addPlayerNameToList('player-name-8');       
        disableSelectButton('btn-select-8');
        updateListHeaderNumber();
    }
})

document.getElementById('btn-select-9').addEventListener('click',function(){
    if(selectedPlayerNumberVerifier()){
        alert('You have reached maximum number of selectable players. Cannot add more');
        return;
    }
    else{
        addPlayerNameToList('player-name-9');       
        disableSelectButton('btn-select-9');
        updateListHeaderNumber();
    }
})

document.getElementById('calculate-budget').addEventListener('click', function(){
    
    const selectedPlayerNumber = getPlayerListLength();

    const costPerPlayer = getElementValueById('per-player-budget');
 
    const inputValidation = inputValueValidator('per-player-budget',costPerPlayer);

    if(inputValidation){
        const calculatedBudget = selectedPlayerNumber * costPerPlayer;

        setElementValueById('player-budget-output', calculatedBudget);
    }
 })

 document.getElementById('calculate-total').addEventListener('click',function(){
    const managerCost = getElementValueById('manager-cost');
    const coachCost = getElementValueById('coach-cost');
    const playerBudget = getElementStringValueById('player-budget-output');

    const inputValidationManagerCost = inputValueValidator('manager-cost',managerCost);
    const inputValidationCoachCost = inputValueValidator('coach-cost',coachCost);

    if(inputValidationManagerCost && inputValidationCoachCost){
        const calculatedTotal = managerCost + coachCost + playerBudget;
        setElementValueById('final-total',calculatedTotal);
    }
 })