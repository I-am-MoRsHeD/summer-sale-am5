


function getTextValue(id) {
    const textValueElement = document.getElementById(id)
    const textValueString = textValueElement.innerText
    const textValue = parseFloat(textValueString).toFixed(2)
    return textValue
}

function setTextValue(id, newValue) {
    const textField = document.getElementById(id)
    textField.innerText = newValue;
}





let total = 0;
function cardAccess(target) {
    const itemsContainer = document.getElementById('items-container')

    const items = target.childNodes[3].childNodes[3].innerText

    const li = document.createElement('li')
    
    li.innerText = items
    itemsContainer.appendChild(li)

    const disabledButton = document.getElementById('btn-apply')
    const disabledButtonPurchase = document.getElementById('btn-purchase')

    const couponFieldElement = document.getElementById('coupon-field')
    const couponFieldValue = couponFieldElement.value

    const itemsPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0]

    total = parseFloat(total) + parseFloat(itemsPrice)
    const totalPrice = total.toFixed(2)

    const totalPriceElement = setTextValue('totalPrice-field', totalPrice)


    // calculate Total Amount
    const totalAmountValue = setTextValue('total-field', totalPrice)

    if (totalPrice > 0) {
        disabledButtonPurchase.removeAttribute('disabled');

        document.getElementById('btn-home').addEventListener('click', function () {
            
            setTextValue('totalPrice-field', '00.00')
            setTextValue('total-field', '00.00')
            setTextValue('discount-field', '00.00')
            itemsContainer.removeChild(li)
         
  
        })
    }

    // checking the condition
    if (totalPrice == 200 || totalPrice > 200) {
        disabledButton.removeAttribute('disabled')


        document.getElementById('btn-apply').addEventListener('click', function () {

            if (couponFieldValue === "SELL200") {

                const discount = totalPrice * (20 / 100)
                const discountPriceToDecimal = discount.toFixed(2)

                const discountField = getTextValue('discount-field');
                const discountPrice = setTextValue('discount-field', discountPriceToDecimal)

                // calculate Total Amount

                const totalAmount = totalPrice - discount;
                console.log(totalAmount)

                const totalAmountValue = setTextValue('total-field', totalAmount)
            }

        })
    }

}




