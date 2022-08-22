
function updateCaseNumber(newIncrease) {
    const caseNumberField = document.getElementById('case-number-field')
    const caseNumberString = caseNumberField.value;
    const previousCasenNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (newIncrease ===true) {
       newCaseNumber = previousCasenNumber + 1;
    }
    else {
       newCaseNumber = previousCasenNumber - 1;
    }
    caseNumberField.value = newCaseNumber
    return newCaseNumber;
}
function newCasePrice (newCaseTotal){
    const casepriceTotal = newCaseTotal * 59 ;
    const priceTotal = document.getElementById('case-price');
    priceTotal.innerText = casepriceTotal;
}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseTotal =  updateCaseNumber(true);
    newCasePrice (newCaseTotal);
    calculateSubtotal();



})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseTotal =  updateCaseNumber(false);
    newCasePrice (newCaseTotal);
    calculateSubtotal();

})



