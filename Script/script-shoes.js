document.addEventListener('DOMContentLoaded', function () {
    // script per gestire il cambio dell'immagine principale passando sulle immagini mini
    const imgBigBox = document.getElementById('shoes-img-big')
    const imgBigBox2 = document.getElementById('shoes-img-big-2')
    const sliderButton = document.querySelector('#shoes-img-big div')
    const size = document.querySelectorAll("#size ul li")
    const sizeBox = document.getElementById("size")
    const addBtn = document.getElementById("add-btn")
    const mainBox = document.getElementById("main-box")
    const shoesColor = document.querySelectorAll('#mini-img-select div img')
    const carrello = document.getElementById("pop-up-carrello")
    const sizeText = document.getElementById('size-text')
    const sizeText2 = document.getElementById('size-text2')
    const closeCart = document.querySelector('#close-cart span')
    let cartImg = document.querySelector('#cart-img')
    const sizeCart = document.getElementById('size-cart')
    const carrelloIcon = document.getElementById('carrello-icon')
    let sizeSelected = undefined
    let shoesSelected = ''
    const imgSmall = document.querySelectorAll('#shoes-img-small div img')
    const cartButtonPayment = document.getElementById('payment-button')
    const cartButtonCart = document.getElementById('cart-button')
    const videoShoes = document.getElementById('video-shoes')
    const videoShoes2 = document.getElementById('video-shoes2')
    const imgSmall2 = document.querySelectorAll('#shoes-img-small-2 div img')
    const imgSmallBox1 = document.getElementById('shoes-box-sx')
    const imgSmallBox2 = document.getElementById('shoes-box-sx-2')
    const previousButton = document.getElementById('previous-btn')
    const nextButton = document.getElementById('next-btn')
    const videoshoes = document.getElementById('video-shoes')
    const videoshoes2 = document.getElementById('video-shoes2')
    let ImgArray =[]
    let ImgArray1 =[]
    
    // Attivo la riproduzione dei video
    
    videoShoes.setAttribute('autoplay',true)
    videoShoes2.setAttribute('autoplay',true)

    // Trasformo la nodelist delle mini immagini in array img + video
    
    for (let index = 0; index < imgSmall.length; index++) {
    const element = imgSmall[index];
    ImgArray.push(element)
    }
    ImgArray.push(videoshoes)

    // Trasformo la nodelist delle mini immagini in array img + video

    for (let index = 0; index < imgSmall2.length; index++) {
    const element = imgSmall2[index];
    ImgArray1.push(element)
    }
    ImgArray1.push(videoshoes2)
    
    // Funzione che cambia le immagini visualizzate nel box grande al passaggio con mouseover
    for (let index = 0; index < ImgArray.length; index++) {
        const element = ImgArray[index]
        let elementClone = element.cloneNode(true);
        element.addEventListener('mouseover', function () {
            imgBigBox.innerHTML = ""
            imgBigBox.appendChild(elementClone)
            imgBigBox.appendChild(sliderButton)
            for (let index = 0; index < ImgArray.length; index++) {
                const element = ImgArray[index];
                element.style.filter = 'brightness(100%)'
            }
            element.style.filter = 'brightness(50%)'
        })
    }

    // Funzione che cambia le immagini visualizzate nel box grande seconda scarpa
    for (let index = 0; index < ImgArray1.length; index++) {
        const element = ImgArray1[index]
        let elementClone = element.cloneNode(true);
        element.addEventListener('mouseover', function () {
            imgBigBox2.innerHTML = ""
            imgBigBox2.appendChild(elementClone)
            imgBigBox2.appendChild(sliderButton)
            for (let index = 0; index < ImgArray1.length; index++) {
                const element = ImgArray1[index];
                element.style.filter = 'brightness(100%)'
            }
            element.style.filter = 'brightness(50%)'
        })
    }

    // Gestico l'apparizione del carrello al click sull'icona carrello
    carrelloIcon.addEventListener('click', function () {
        PopUpCarrello()
    })
    // Pagina di pagamento o carrello al click sul button
    cartButtonPayment.addEventListener('click', function () {
        window.location.href = 'payment.html'
    })
    cartButtonCart.addEventListener('click', function () {
        window.location.href = 'cart.html'
    })

    // Gestisco la scelta del colore della scarpa e in base al colore scelto, facendo clic sulle freccette precedente e successivo mi sposto tra le varie immagini delle scarpe in più assegno il filtro per la mini immagine dove mi trovo
    for (let index = 0; index < shoesColor.length; index++) {
        shoesColor[index].addEventListener('click', function () {
            for (let index = 0; index < shoesColor.length; index++) {
                const element = shoesColor[index];
                element.style.border = 'none'
            }
            shoesSelected = this
            shoesSelected.style.border = '1px solid black'
            cartImg.innerHTML = ''
            let elementClone = shoesSelected.cloneNode(true);
            elementClone.style.border = 'none'
            cartImg.appendChild(elementClone)

            if (shoesSelected == shoesColor[0]) {
                imgSmallBox1.classList.remove('hidden')
                imgSmallBox1.classList.add('visible')
                imgSmallBox2.classList.remove('visible')
                imgSmallBox2.classList.add('hidden')
                imgBigBox.appendChild(sliderButton)
                let currentImgIndex = 0
                nextButton.addEventListener('click', function () {
                    currentImgIndex++
                    if (currentImgIndex >= ImgArray.length) {
                        currentImgIndex = 0
                    }
                    updateBigImage();
                })
                previousButton.addEventListener('click', function () {
                    currentImgIndex--
                    if (currentImgIndex < 0) {
                        currentImgIndex = ImgArray.length - 1;
                    }
                    updateBigImage();
            
                })
                function updateBigImage() {
                    const elementClone = ImgArray[currentImgIndex].cloneNode(true);
                    for (let index = 0; index < ImgArray.length; index++) {
                        const element = ImgArray[index];
                        element.style.filter = "brightness(100%)";
                    }
                    ImgArray[currentImgIndex].style.filter = "brightness(50%)";
                    imgBigBox.innerHTML = '';
                    elementClone.style.filter = 'brightness(100%)'
                    imgBigBox.appendChild(elementClone);
                    imgBigBox.appendChild(sliderButton);
                }
            } else {
                imgSmallBox2.classList.remove('hidden')
                imgSmallBox2.classList.add('visible')
                imgSmallBox1.classList.remove('visible')
                imgSmallBox1.classList.add('hidden')
                imgBigBox2.appendChild(sliderButton);
                let currentImgIndex1 = 0
                nextButton.addEventListener('click', function () {
                    currentImgIndex1++
                    if (currentImgIndex1 >= ImgArray1.length) {
                        currentImgIndex1 = 0
                    }
                    updateBigImage1();
                })
                previousButton.addEventListener('click', function () {
                    currentImgIndex1--
                    if (currentImgIndex1 < 0) {
                        currentImgIndex1 = ImgArray1.length - 1;
                    }
                    updateBigImage1();
                })
                function updateBigImage1() {
                    const elementClone = ImgArray1[currentImgIndex1].cloneNode(true);

                    for (let index = 0; index < ImgArray1.length; index++) {
                        const element = ImgArray1[index];
                        element.style.filter = "brightness(100%)";
                    }
                    ImgArray1[currentImgIndex1].style.filter = "brightness(50%)";
                    imgBigBox2.innerHTML = '';
                    elementClone.style.filter = 'brightness(100%)'
                    imgBigBox2.appendChild(elementClone);
                    imgBigBox2.appendChild(sliderButton);
                }
            }
        });
    }

    // Gestisco la scelta delle taglie e l'aggiunta al carrello
    for (let index = 0; index < size.length; index++) {
        size[index].addEventListener('click', function () {
            for (let index = 0; index < size.length; index++) {
                const element = size[index];
                element.style.border = "none"
            }
            sizeSelected = this
            sizeText.classList.remove('color-red')
            sizeText2.classList.remove('color-red')
            sizeText2.classList.add('hidden')
            sizeBox.classList.remove('brd-col-red')
            sizeSelected.style.border = "1px solid black"
        })
    }

    addBtn.addEventListener('click', function () {
        setTimeoutCartClose = setTimeout(function () {
            mainBox.classList.remove("filter-brightness")
            mainBox.classList.remove("bck-color-grey")
            carrello.classList.add("hidden")
            carrello.classList.remove("visible")
        }, 5000);
        if (sizeSelected != undefined) {
            PopUpCarrello()
            sizeCart.innerHTML = "Taglia/misura " + sizeSelected.innerHTML
        } else {
            sizeText.classList.add('color-red')
            sizeText2.classList.remove('hidden')
            sizeText2.classList.add('color-red')
            sizeBox.classList.add('brd-col-red')
        }
    })
    // Funzione che fa chiudere il pop-up carrello se clicco sulla x in alto a destra
    closeCart.addEventListener('click', function () {
        mainBox.classList.remove("filter-brightness")
        mainBox.classList.remove("bck-color-grey")
        carrello.classList.add("hidden")
        carrello.classList.remove("visible")

    })
    // Funzione che fa apparire il pop-up del carrello
    function PopUpCarrello() {
        mainBox.classList.add("filter-brightness")
        mainBox.classList.add("bck-color-grey")
        carrello.classList.remove("hidden")
        carrello.classList.add("visible")
        sizeCart.innerHTML = "Taglia/misura " + sizeSelected.innerHTML
    }


})
