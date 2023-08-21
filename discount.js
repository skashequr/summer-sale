document.getElementById("btn-get-item-percues").addEventListener("click",function(){
   const inputTextCuppon = document.getElementById("inputTextCuppon");
   const inputText = inputTextCuppon.value;
   
   const totalPrice = document.getElementById("total-price");
   if (inputText === "SELL200") {
    const totalPriceString = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceString);
    // console.log(totalPriceNumber);

    const discount = ( 20 / 100 ) * totalPriceNumber ;
    
    const twoPointNumber = discount.toFixed(2);

    const discountPrice = document.getElementById("discountPrice");
    discountPrice.innerText = twoPointNumber;

    const costumerPayAmmount = document.getElementById("costumer-pay-ammount");

    costumerPayAmmount.innerText = totalPriceNumber - discount
    
   }
   

})



document.getElementById("go-home").addEventListener("click",function(){
   // const items = document.getElementsByClassName("heareIPut")
   const totalPrice = document.getElementById("total-price")
   const discountPrice = document.getElementById("discountPrice")
   const coustomerPay = document.getElementById("costumer-pay-ammount")

   const removeItem = document.getElementById("heareIPut");
   removeItem.innerHTML = " "

   const totalNumber = totalPrice.innerText = "0.00";
   discountPrice.innerText = "0.00";
   coustomerPay.innerText = "0.00";


   const cupponButton = document.getElementById('btn-get-item-percues')
    if (parseFloat(totalPrice) > 200) {
      cupponButton.removeAttribute('disabled');
      } else {
        cupponButton.setAttribute('disabled', 'disabled');
      }

      const getBtn = document.getElementById('btnModal')
      if (parseFloat(totalPrice) > 0) {
        getBtn.removeAttribute('disabled');
        } else {
          getBtn.setAttribute('disabled', 'disabled');
        }
      

   

})
