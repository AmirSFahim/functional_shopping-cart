function updatePhoneNumber(newPhone){
    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString); 
    let newPhoneNumber ;
    if(newPhone===true){
         newPhoneNumber = previousPhoneNumber + 1;
    } else{
         newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber; 
    return newPhoneNumber
}



 function newPhonePrice(newPhonePriceTotal){
    const phonePriceTotal = newPhonePriceTotal * 1219;
    const priceTotal  = document.getElementById('phone-total');
    priceTotal.innerText =phonePriceTotal;
 }



document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhonePriceTotal = updatePhoneNumber(true);
    newPhonePrice(newPhonePriceTotal);

    calculateSubtotal();


})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhonePriceTotal=updatePhoneNumber(false);
    newPhonePrice(newPhonePriceTotal);
    calculateSubtotal();
   
})

