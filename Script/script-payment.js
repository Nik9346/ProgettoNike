document.addEventListener('DOMContentLoaded', function () {
    const shipmentButton = document.getElementById('shipment-btn')
    const withDrawButton = document.getElementById('withdraw-btn')
    const name = document.getElementById('name')
    const cognome = document.getElementById('cognome')
    const address = document.getElementById('address')
    const company = document.getElementById('company')
    const addButton = document.getElementById('add-button')
    const cap = document.getElementById('cap')
    const città = document.getElementById('città')
    const email = document.getElementById('email')
    const telefono = document.getElementById('telefono')
    const saveButton = document.getElementById('save-btn')
    const required = document.querySelectorAll('.required')
    let requiredItem = []
    const telefonoRegex = /^\d{10}$/;
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    let nameValid = false
    let cognomeValid = false
    let addressValid = false
    let capValid = false
    let cittàValid = false
    let emailValid = false
    let telefonoValid = false
    const formBox = document.getElementById('form-box-sx')
    const paymentBox = document.getElementById('form-box-sx-payment')
    let shipmentChoice = false
    const giftCard = document.getElementById('gift-card')
    const giftCardBox = document.getElementById('gift-card-box')
    const promotionalCode = document.getElementById('promotional-code')
    const cardNumber = document.getElementById('credit-card-number')
    const cardDate = document.getElementById('credit-card-date')
    const cardCvv = document.getElementById('credit-card-cvv')
    let cardNumberValid = false
    let cardDateValid = false
    let date = new Date()
    let cardCvvValid = false
    const msgNumberCardValid = document.getElementById('number-card-invalid-msg')
    const msgDateCardInvalid = document.getElementById('date-invalid-msg')
    const msgCvvCardInvalid = document.getElementById('card-cvv-invalid')
    const paymentButton = document.getElementById('payment-button')
    const paymentValid = []
    const boxVerified = document.getElementById('form-box-sx-verified')
    const formBoxDx = document.getElementById('form-box-dx')

    // Prendo gli elementi della NodeList e li trasformo in array per leggere la lunghezza
    for (let index = 0; index < required.length; index++) {
        const element = required[index];
        requiredItem.push(element)
    }

    // Al click fai la scelta tra spedizione e ritiro
    shipmentButton.addEventListener('click', function () {
        withDrawButton.style.border = "1px solid #75757563"
        shipmentButton.style.border = "1px solid black"
        shipmentChoice = true
    })
    withDrawButton.addEventListener('click', function () {
        shipmentButton.style.border = '1px solid #75757563'
        withDrawButton.style.border = '1px solid black'
        shipmentChoice = true
    })

    // Disabilito il bottone per il salvataggio
    saveButton.disabled = true

    // Verifico all'input se i dati inseriti sono validi
    checkFormIsValidName(name, required[0])
    checkFormIsValidSurname(cognome, required[1])
    checkFormIsValidAddress(address, required[2])
    checkFormIsValidCap(cap, required[3])
    checkFormIsValidCity(città, required[4])
    checkFormMailIsValid(email, required[5])
    checkFormTelIsValid(telefono, required[6])

    // Visualizzo il box per inserire il nome dell'azienda
    addButton.addEventListener('click', function () {
        company.classList.remove('hidden')
        company.classList.add('visible')
        addButton.classList.add('hidden')
    })



    // Quando clicco sul pulsante salva e continua verifico i campi e evidenzio quelli errati
    // Se i dati sono tutti giusti appare il nuovo box per inserire i dati del pagamento
    saveButton.addEventListener('click', function () {
        if (shipmentChoice == true) {
            paymentBox.classList.remove('hidden')
            paymentBox.classList.add('visible')
            paymentBox.style.top = "0"
            formBox.classList.add('visibility-hidden')
        } else {
            shipmentButton.style.borderColor = 'red'
            withDrawButton.style.borderColor = 'red'
        }
    })


    // Visualizzo il box per inserire un codice promozionale o gift card
    giftCard.addEventListener('click', function () {
        if (giftCard.checked == true) {
            giftCardBox.classList.remove('hidden')
            promotionalCode.classList.remove('hidden')
            promotionalCode.classList.add('visible')
            giftCardBox.classList.add('visible')
        } else {
            giftCardBox.classList.remove('visible')
            giftCardBox.classList.add('hidden')
            promotionalCode.classList.remove('visible')
            promotionalCode.classList.add('hidden')
        }
    })
    // Verifico che i dati inseriti per il pagamento siano validi
    paymentButton.disabled = true

    checkCardCvv(cardCvv)
    checkCardDate(cardDate)
    checkCardNumber(cardNumber)

    paymentButton.addEventListener('click', function () {
        boxVerified.classList.remove('hidden')
        boxVerified.classList.add('visible')
        boxVerified.style.top = '0'
        formBoxDx.classList.add('hidden')
        paymentBox.classList.remove('visible')
        paymentBox.classList.add('hidden')

    })

    // Funzione che verifica i dati inseriti quando li digiti
    function checkFormIsValidName(campo, box) {
        campo.addEventListener('keyup', function () {
            if (campo.value.length >= 2) {
                box.classList.remove('span-required')
                box.classList.add('hidden')
                campo.style.borderColor = 'black'
                nameValid = true
                saveButtonNotDisabled(saveButton)
            } else {
                box.classList.add('span-required')
                box.classList.remove('hidden')
                campo.style.borderColor = 'red'
                saveButton.style.backgroundColor = "rgb(229, 229, 229)"
                saveButton.style.color = 'rgb(158, 158, 160)'
                nameValid = false
                saveButtonNotDisabled(saveButton)
            }
        })
    }
    function checkFormIsValidSurname(campo, box) {
        campo.addEventListener('keyup', function () {
            if (campo.value.length >= 2) {
                box.classList.remove('span-required')
                box.classList.add('hidden')
                campo.style.borderColor = 'black'
                cognomeValid = true
                saveButtonNotDisabled(saveButton)
            } else {
                box.classList.add('span-required')
                box.classList.remove('hidden')
                campo.style.borderColor = 'red'
                saveButton.style.backgroundColor = "rgb(229, 229, 229)"
                saveButton.style.color = 'rgb(158, 158, 160)'
                cognomeValid = false
                saveButtonNotDisabled(saveButton)
            }
        })
    } function checkFormIsValidAddress(campo, box) {
        campo.addEventListener('keyup', function () {
            if (campo.value.length >= 4) {
                box.classList.remove('span-required')
                box.classList.add('hidden')
                campo.style.borderColor = 'black'
                addressValid = true
                saveButtonNotDisabled(saveButton)
            } else {
                box.classList.add('span-required')
                box.classList.remove('hidden')
                campo.style.borderColor = 'red'
                saveButton.style.backgroundColor = "rgb(229, 229, 229)"
                saveButton.style.color = 'rgb(158, 158, 160)'
                addressValid = false
                saveButtonNotDisabled(saveButton)
            }
        })
    } function checkFormIsValidCap(campo, box) {
        campo.addEventListener('keyup', function () {
            if (campo.value.length >= 5) {
                box.classList.remove('span-required')
                box.classList.add('hidden')
                campo.style.borderColor = 'black'
                capValid = true
                saveButtonNotDisabled(saveButton)
            } else {
                box.classList.add('span-required')
                box.classList.remove('hidden')
                campo.style.borderColor = 'red'
                saveButton.style.backgroundColor = "rgb(229, 229, 229)"
                saveButton.style.color = 'rgb(158, 158, 160)'
                capValid = false
                saveButtonNotDisabled(saveButton)
            }
        })
    } function checkFormIsValidCity(campo, box) {
        campo.addEventListener('keyup', function () {
            if (campo.value.length >= 4) {
                box.classList.remove('span-required')
                box.classList.add('hidden')
                campo.style.borderColor = 'black'
                cittàValid = true
                saveButtonNotDisabled(saveButton)
            } else {
                box.classList.add('span-required')
                box.classList.remove('hidden')
                campo.style.borderColor = 'red'
                saveButton.style.backgroundColor = "rgb(229, 229, 229)"
                saveButton.style.color = 'rgb(158, 158, 160)'
                cittàValid = false
                saveButtonNotDisabled(saveButton)
            }
        })
    }
    // Funzione che verifica i dati inseriti quando li digiti
    function checkFormMailIsValid(campo, box) {
        campo.addEventListener('keyup', function () {
            if (emailRegex.test(campo.value) == true) {
                box.classList.remove('span-required')
                box.classList.add('hidden')
                campo.style.borderColor = 'black'
                emailValid = true
                saveButtonNotDisabled(saveButton)
            } else {
                box.classList.add('span-required')
                box.classList.remove('hidden')
                campo.style.borderColor = 'red'
                saveButton.style.backgroundColor = "rgb(229, 229, 229)"
                saveButton.style.color = 'rgb(158, 158, 160)'
                emailValid = false
                saveButtonNotDisabled(saveButton)
            }
        })
    }
    // Funzione che verifica i dati inseriti quando li digiti
    function checkFormTelIsValid(campo, box,) {
        campo.addEventListener('keyup', function () {
            if (telefonoRegex.test(campo.value) == true) {
                box.classList.remove('span-required')
                box.classList.add('hidden')
                campo.style.borderColor = 'black'
                telefonoValid = true
                saveButtonNotDisabled(saveButton)
            } else {
                box.classList.add('span-required')
                box.classList.remove('hidden')
                campo.style.borderColor = 'red'
                saveButton.style.backgroundColor = "rgb(229, 229, 229)"
                saveButton.style.color = 'rgb(158, 158, 160)'
                telefonoValid = false
                saveButtonNotDisabled(saveButton)

            }
        })
    }
    // Funzione che verifica la validità del numero di carta di credito
    function checkCardNumber(campo) {
        campo.addEventListener('keyup', function () {
            const numberSpaceLess = campo.value.replace(/\D/g, '')
            if (numberOnly(numberSpaceLess) == true) {
                if (numberSpaceLess.length > 14 && numberSpaceLess.length < 19) {
                    msgNumberCardValid.classList.remove('span-required')
                    msgNumberCardValid.classList.add('hidden')
                    cardNumberValid = true
                    paymentButtonOn(paymentButton)
                }
                else {
                    msgNumberCardValid.innerHTML = 'Inserisci il numero di carta valido*'
                    msgNumberCardValid.classList.remove('hidden')
                    msgNumberCardValid.classList.add('span-required')
                    cardNumberValid = false
                    paymentButtonOn(paymentButton)
                }
            }
            else if (campo.value.length == 0) {
                msgNumberCardValid.innerHTML = ''
                msgNumberCardValid.classList.add('hidden')
                msgNumberCardValid.classList.remove('span-required')
                cardNumberValid = false
                paymentButtonOn(paymentButton)
            }
            else if (numberOnly(campo) == false) {
                msgNumberCardValid.innerHTML = 'Hai inserito caratteri al posto di numeri'
                msgNumberCardValid.classList.remove('hidden')
                msgNumberCardValid.classList.add('span-required')
                cardNumberValid = false
                paymentButtonOn(paymentButton)
            }
        }
        )
    }
    // funzione che verifica la validità della data
    function checkCardDate(campo) {
        campo.addEventListener('change', function () {
            inputDate = new Date(campo.value)
            if (inputDate > date) {
                msgDateCardInvalid.classList.remove('span-required')
                msgDateCardInvalid.classList.add('hidden')
                cardDateValid = true
                console.log(paymentValid);
                paymentButtonOn(paymentButton)
            } else {
                msgDateCardInvalid.classList.remove('hidden')
                msgDateCardInvalid.classList.add('span-required')
                cardDateValid = false
                paymentButtonOn(paymentButton)
            }
        })
    }
    // funzione che verifica la validità del campo CVV
    function checkCardCvv(campo) {
        campo.addEventListener('keyup', function () {
            console.log(campo.value.length);
            if (campo.value.length == 3) {
                msgCvvCardInvalid.classList.remove('span-required')
                msgCvvCardInvalid.classList.add('hidden')
                cardCvvValid = true
                paymentButtonOn(paymentButton)
            } else if (campo.value.length != 3) {
                msgCvvCardInvalid.classList.add('span-required')
                msgCvvCardInvalid.classList.remove('hidden')
                cardCvvValid = false
                paymentButtonOn(paymentButton)
            }
        })

    }

    // Funzione che verifica se il campo contiene solo numeri
    function numberOnly(campo) {
        return /^[0-9]+$/.test(campo)
    }

    // Funzione che abilita il pulsante di salvataggio se i dati inseriti nei campi di input obbligatori sono validi
    function saveButtonNotDisabled(button) {

        if (nameValid == true && cognomeValid == true && addressValid == true && cittàValid == true && capValid == true && telefonoValid == true) {
            console.log('puoi procedere');
            button.disabled = false
            button.style.backgroundColor = '#111111'
            button.style.color = '#fff'
        } else {
            console.log('non vai avanti')
        }
    }
    // Funzione che abilita il pulsante di pagamento se i dati della carta inseriti sono validi
    function paymentButtonOn(button) {
        if (cardNumberValid == true && cardDateValid == true && cardCvvValid == true) {
            button.disabled = false
            button.classList.remove('btn-disabled')
            button.style.backgroundColor = '#111111'
            button.style.color = '#fff'
        } else {
            button.disabled = true
            button.classList.add('btn-disabled')
            button.style.backgroundColor = 'rgb(229, 229, 229)'
            button.style.color = 'rgb(158, 158, 160)';
        }
    }

})