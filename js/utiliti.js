function subtotal(number){
    const phoneTotalElement = document.getElementById(number);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const curretPhoneTotal = parseInt(currentPhoneTotalString);
    return curretPhoneTotal;
}
function setElemntByValueId(elementId , value){
    const priviousSubtal = document.getElementById(elementId);
    priviousSubtal.innerText = value;
}
function calculateSubtotal(){
    const currentPhoneTotal = subtotal('phone-total');
    const currentcaseTotal = subtotal('case-price');
    const everyTotal = currentPhoneTotal + currentcaseTotal;
    setElemntByValueId('sub-total',everyTotal)

    const taxAmountString = (everyTotal *.1).toFixed(1);
    const taxAmount = parseFloat(taxAmountString)
    setElemntByValueId('tax-total',taxAmount )
    const finalTotal = everyTotal + taxAmount;
    setElemntByValueId ('final-total',finalTotal)

}