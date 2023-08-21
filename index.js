document.getElementById("item-1").addEventListener("click",function () {
    const whatIPut = document.getElementById("frist-item-name").innerText
    
    
    // wharIPut
    const whereIPut = document.getElementById("heareIPut")
    const div = document.createElement("div")
    
    const count = whereIPut.childElementCount
    div.innerHTML = `
    <h3 class="font-medium text-base leading-6">${count + 1}. ${whatIPut}</h3>
    `
    whereIPut.appendChild(div)

   
    const fristNumber = convertNumber("frist-item-price");
    // total price ke dhoro
    const totalPrice = convertNumber("total-price")
    const sum = fristNumber + totalPrice;
    const twoPointNumber = sum.toFixed(2)


    const tot = document.getElementById("total-price");
    tot.innerText = twoPointNumber;
    
    const coustomerPay = document.getElementById("costumer-pay-ammount");
    coustomerPay.innerText = twoPointNumber;
    
    const cupponButton = document.getElementById('btn-get-item-percues')
    if (parseFloat(twoPointNumber) > 200) {
      cupponButton.removeAttribute('disabled');
      } else {
        cupponButton.setAttribute('disabled', 'disabled');
      }

      const modulButton = document.getElementById('btnModal')
     if (parseFloat(twoPointNumber) > 0) {
      modulButton.removeAttribute('disabled');
      } else {
        modulButton.setAttribute('disabled', 'disabled');
      }
  

})


document.getElementById("item-2").addEventListener("click",function () {
    const whatIPut = document.getElementById("second-item").innerText;
    const whereIPut = document.getElementById("heareIPut")
    const div = document.createElement("div")
    
    const count = whereIPut.childElementCount
    div.innerHTML = `
    <h3 class="font-medium text-base leading-6">${count + 1}. ${whatIPut}</h3>
    `
whereIPut.appendChild(div)


const secondNumber = convertNumber("second-item-price");
    // total price ke dhoro
    const totalPrice = convertNumber("total-price")
    const sum = secondNumber + totalPrice;
    const twoPointNumber = sum.toFixed(2)


    const tot = document.getElementById("total-price");
    tot.innerText = twoPointNumber;

    const coustomerPay = document.getElementById("costumer-pay-ammount");
    coustomerPay.innerText = twoPointNumber;
    
    const cupponButton = document.getElementById('btn-get-item-percues')
    if (parseFloat(twoPointNumber) > 200) {
      cupponButton.removeAttribute('disabled');
      } else {
        cupponButton.setAttribute('disabled', 'disabled');
      }


      const modulButton = document.getElementById('btnModal')
      if (parseFloat(twoPointNumber) > 0) {
       modulButton.removeAttribute('disabled');
       } else {
         modulButton.setAttribute('disabled', 'disabled');
       }

})



document.getElementById("item-3").addEventListener("click",function () {
    const whatIPut = document.getElementById("therd-item").innerText;
    const whereIPut = document.getElementById("heareIPut")
    const div = document.createElement("div")
    
    const count = whereIPut.childElementCount
    div.innerHTML = `
    <h3 class="font-medium text-base leading-6">${count + 1}. ${whatIPut}</h3>
    `
    whereIPut.appendChild(div)



    const therdNumber = convertNumber("therd-item-number");
    // total price ke dhoro
    const totalPrice = convertNumber("total-price")
    const sum = therdNumber + totalPrice;
    const twoPointNumber = sum.toFixed(2)


    const tot = document.getElementById("total-price");
    tot.innerText = twoPointNumber;
    
    const coustomerPay = document.getElementById("costumer-pay-ammount");
    coustomerPay.innerText = twoPointNumber;
    
    const cupponButton = document.getElementById('btn-get-item-percues')
    if (parseFloat(twoPointNumber) > 200) {
      cupponButton.removeAttribute('disabled');
      } else {
        cupponButton.setAttribute('disabled', 'disabled');
      }


      const modulButton = document.getElementById('btnModal')
      if (parseFloat(twoPointNumber) > 0) {
       modulButton.removeAttribute('disabled');
       } else {
         modulButton.setAttribute('disabled', 'disabled');
       }
})



// part-2


document.getElementById("item-4").addEventListener("click",function () {
    const whatIPut = document.getElementById("four-item").innerText;
    const whereIPut = document.getElementById("heareIPut")
    const div = document.createElement("div")
    
    const count = whereIPut.childElementCount
    div.innerHTML = `
    <h3 class="font-medium text-base leading-6">${count + 1}. ${whatIPut}</h3>
    `
    whereIPut.appendChild(div)



    const fourdNumber = convertNumber("four-item-number");
    // total price ke dhoro
    const totalPrice = convertNumber("total-price")
    const sum = fourdNumber + totalPrice;
    const twoPointNumber = sum.toFixed(2)


    const tot = document.getElementById("total-price");
    tot.innerText = twoPointNumber;
    
    const coustomerPay = document.getElementById("costumer-pay-ammount");
    coustomerPay.innerText = twoPointNumber;

    const cupponButton = document.getElementById('btn-get-item-percues')
    if (parseFloat(twoPointNumber) > 200) {
      cupponButton.removeAttribute('disabled');
      } else {
        cupponButton.setAttribute('disabled', 'disabled');
      }


      const modulButton = document.getElementById('btnModal')
      if (parseFloat(twoPointNumber) > 0) {
       modulButton.removeAttribute('disabled');
       } else {
         modulButton.setAttribute('disabled', 'disabled');
       }
})




document.getElementById("item-5").addEventListener("click",function () {
    const whatIPut = document.getElementById("five-item").innerText;
    const whereIPut = document.getElementById("heareIPut")
    const div = document.createElement("div")
    
    const count = whereIPut.childElementCount
    div.innerHTML = `
    <h3 class="font-medium text-base leading-6">${count + 1}. ${whatIPut}</h3>
    `
    whereIPut.appendChild(div)



    const fiveNumber = convertNumber("five-item-number");
    // total price ke dhoro
    const totalPrice = convertNumber("total-price")
    const sum = fiveNumber + totalPrice;
    const twoPointNumber = sum.toFixed(2)


    const tot = document.getElementById("total-price");
    tot.innerText = twoPointNumber;
    
    const coustomerPay = document.getElementById("costumer-pay-ammount");
    coustomerPay.innerText = twoPointNumber; 

    const cupponButton = document.getElementById('btn-get-item-percues')
    if (parseFloat(twoPointNumber) > 200) {
      cupponButton.removeAttribute('disabled');
      } else {
        cupponButton.setAttribute('disabled', 'disabled');
      }


      const modulButton = document.getElementById('btnModal')
      if (parseFloat(twoPointNumber) > 0) {
       modulButton.removeAttribute('disabled');
       } else {
         modulButton.setAttribute('disabled', 'disabled');
       }
})



document.getElementById("item-6").addEventListener("click",function () {
    const whatIPut = document.getElementById("six-item").innerText;
    const whereIPut = document.getElementById("heareIPut")
    const div = document.createElement("div")
    
    const count = whereIPut.childElementCount
    div.innerHTML = `
    <h3 class="child" class="font-medium text-base leading-6">${count + 1}. ${whatIPut}</h3>
    `
    whereIPut.appendChild(div)



    const sixItemdNumber = convertNumber("six-item-number");
    // total price ke dhoro
    const totalPrice = convertNumber("total-price")
    const sum = sixItemdNumber + totalPrice;
    const twoPointNumber = sum.toFixed(2)


    const tot = document.getElementById("total-price");
    tot.innerText = twoPointNumber;
    
    const coustomerPay = document.getElementById("costumer-pay-ammount");
    coustomerPay.innerText = twoPointNumber;

    const cupponButton = document.getElementById('btn-get-item-percues')
    if (parseFloat(twoPointNumber) > 200) {
      cupponButton.removeAttribute('disabled');
      } else {
        cupponButton.setAttribute('disabled', 'disabled');
      }


      const modulButton = document.getElementById('btnModal')
      if (parseFloat(twoPointNumber) > 0) {
       modulButton.removeAttribute('disabled');
       } else {
         modulButton.setAttribute('disabled', 'disabled');
       }
})




// common function convetr number
function convertNumber(numberid){
    const ItemPrice = document.getElementById(numberid);
    const ItemPriceStrig = ItemPrice.innerText;
    const ItemPriceNumber = parseFloat(ItemPriceStrig);
    return ItemPriceNumber;
}

