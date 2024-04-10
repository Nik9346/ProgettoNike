document.addEventListener('DOMContentLoaded', function () {
    const tagliaSelected = document.getElementById('taglia')
    const quantitySelected = document.getElementById('quantità')
    const quantitySelected1 = document.getElementById('quantità1')
    const tagliaSelected1 = document.getElementById('taglia1')
    let tagliaSelectedValue = undefined
    let tagliaSelected1Value = undefined
    const shoesPriceFixed = document.querySelectorAll('.shoes-price')
    let subTotalPrice = document.getElementById('subtotal-price')
    let totalPrice = document.getElementById('total-price')
    let partialPrice = undefined
    let partialPrice1 = undefined
    let defaultQuantity = undefined
    let defaultQuantity1 = undefined
    let option = document.querySelectorAll('#quantità option')
    let option1 = document.querySelectorAll('#quantità1 option')
    let shipmentCost = document.getElementById('shipment-cost')
    const boxShoes = document.getElementById('box-sx-item')
    const boxShoes1 = document.getElementById('box-sx-2-item')
    const removeItem = document.querySelectorAll(".remove-item")
    let itemRemoved = false
    let itemRemoved1 = false
    const showBtn = document.getElementById('show-btn')
    const couponBox = document.getElementById('coupon-box')
    const paymentBtn = document.getElementById('payment-btn')


    // Prendo il valore di riferimento iniziale per il primo prodotto
    for (let index = 0; index < option.length; index++) {
        const element = option[index];
        if (element.selected == true) {
            defaultQuantity = element.value
        }
    }
    // Prendo il valore di riferimento iniziale per il secondo prodotto
    for (let index = 0; index < option1.length; index++) {
        const element = option1[index];
        if (element.selected == true) {
            defaultQuantity1 = element.value
        }

    }
    // Calcolo il totale di partenza quando viene caricata la pagina
    partialPrice = partialTotalCalc(shoesPriceFixed[0].innerHTML, defaultQuantity)
    partialPrice1 = partialTotalCalc(shoesPriceFixed[1].innerHTML, defaultQuantity1)
    let subTotalValue = subTotalCalc(partialPrice, partialPrice1)
    subTotalPrice.innerHTML = subTotalValue
    let totalPriceValue = totalCalc(subTotalValue, shipmentCost.innerHTML)
    totalPrice.innerHTML = totalPriceValue

    // Gestisco la rimozione di un elemento dal carrello
    removeItem[0].addEventListener('click', function () {
        boxShoes.style.display = "none"
        defaultQuantity = 0
        subTotalValue = partialPrice1
        subTotalPrice.innerHTML = partialPrice1
        totalPriceValue = subTotalValue + parseFloat(shipmentCost.innerHTML)
        totalPrice.innerHTML = totalPriceValue + " €"
        itemRemoved = true
        console.log(itemRemoved);
        ItemRemovedAll(itemRemoved, itemRemoved1)
    })

    removeItem[1].addEventListener('click', function () {
        boxShoes1.style.display = "none"
        defaultQuantity1 = 0
        subTotalValue = partialPrice
        subTotalPrice.innerHTML = partialPrice
        totalPriceValue = subTotalValue + parseFloat(shipmentCost.innerHTML)
        totalPrice.innerHTML = totalPriceValue + " €"
        itemRemoved1 = true
        console.log(itemRemoved1);
        ItemRemovedAll(itemRemoved, itemRemoved1)
    })

    // Gestisco la selezione della taglia e della quantità per il primo prodotto
    tagliaSelected.addEventListener('change', function () {
        tagliaSelectedValue = tagliaSelected.value
    })

    quantitySelected.addEventListener('change', function () {
        if (itemRemoved1 == true) {
            defaultQuantity1 = 0
            partialPrice = partialTotalCalc(shoesPriceFixed[0].innerHTML, defaultQuantity)
            partialPrice1 = partialTotalCalc(shoesPriceFixed[1].innerHTML, defaultQuantity1)
            subTotalValue = subTotalCalc(partialPrice, partialPrice1)
            subTotalPrice.innerHTML = subTotalValue
            totalPriceValue = totalCalc(subTotalValue, shipmentCost.innerHTML)
            totalPrice.innerHTML = totalPriceValue
        } {
            defaultQuantity = quantitySelected.value
            partialPrice = partialTotalCalc(shoesPriceFixed[0].innerHTML, defaultQuantity)
            subTotalValue = subTotalCalc(partialPrice, partialPrice1)
            subTotalPrice.innerHTML = subTotalValue
            totalPriceValue = totalCalc(subTotalValue, shipmentCost.innerHTML)
            totalPrice.innerHTML = totalPriceValue
        }
    })
    // Gestisco la selezione della taglia e quantità per il secondo prodotto
    tagliaSelected1.addEventListener('change', function () {
        tagliaSelected1Value = tagliaSelected1.value
    })
    quantitySelected1.addEventListener('change', function () {
        if (itemRemoved == true) {
            defaultQuantity = 0
            partialPrice1 = partialTotalCalc(shoesPriceFixed[1].innerHTML, defaultQuantity1)
            partialPrice = partialTotalCalc(shoesPriceFixed[0].innerHTML, defaultQuantity)
            subTotalValue = subTotalCalc(partialPrice1, partialPrice)
            subTotalPrice.innerHTML = subTotalValue
            totalPriceValue = totalCalc(subTotalValue, shipmentCost.innerHTML)
            totalPrice.innerHTML = totalPriceValue
        } {
            defaultQuantity1 = quantitySelected1.value
            partialPrice1 = partialTotalCalc(shoesPriceFixed[1].innerHTML, defaultQuantity1)
            subTotalValue = subTotalCalc(partialPrice, partialPrice1)
            subTotalPrice.innerHTML = subTotalValue
            totalPriceValue = totalCalc(subTotalValue, shipmentCost.innerHTML)
            totalPrice.innerHTML = totalPriceValue
        }
    })
    // Al click sul codice promozionale mostra il box per inserire il coupon
    showBtn.addEventListener('click', function () {
        if (couponBox.classList.contains('hidden') == true) {
            couponBox.classList.remove('hidden')
            couponBox.classList.add('visible')
        } else {
            couponBox.classList.remove('visible')
            couponBox.classList.add('hidden')
        }
    })
    // Funzione che calcola il parziale prezzo prodotto per quantità
    function partialTotalCalc(price, quantity) {
        const number = parseFloat(price.replace(',', '.'))
        return number * quantity
    }
    // Funzione che calcola il subtotale sommando il prezzo dei due prodotti
    function subTotalCalc(price1, price2) {
        const total = price1 + price2
        return total.toFixed(2) + " €"
    }
    // Funzione che calcola il totale sommando al subtotale le spese di spedizione
    function totalCalc(subtotal, shipmentcost) {
        const number = parseFloat(shipmentcost.replace(',', '.'))
        const total = parseFloat(subtotal.replace(',', '.'))
        return total + number + " €"
    }
    // Funzione che alla rimozione di entrambi i prodotti calcola il valore del subtotale
    function ItemRemovedAll(item1, item2) {
        if (item1 == true && item2 == true) {
            defaultQuantity = 0
            defaultQuantity1 = 0
            partialPrice = partialTotalCalc(shoesPriceFixed[0].innerHTML, defaultQuantity)
            partialPrice1 = partialTotalCalc(shoesPriceFixed[1].innerHTML, defaultQuantity1)
            subTotalValue = subTotalCalc(partialPrice, partialPrice1)
            subTotalPrice.innerHTML = subTotalValue
            totalPriceValue = totalCalc(subTotalValue, shipmentCost.innerHTML)
            totalPrice.innerHTML = totalPriceValue
        }
    }
    // Al click sul button vai ai pagamenti va sulla pagina dei pagamenti
    paymentBtn.addEventListener('click', function () {
        window.location.href = "payment.html"
    })




 
})