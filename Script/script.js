document.addEventListener("DOMContentLoaded", function () {
    const leftButtonScrollShoes = document.getElementById("left-scroll-shoes")
    const rightButtonScrollShoes = document.getElementById("right-scroll-shoes")
    const shoes = document.querySelectorAll(".shoes")
    const boxScrollBar1 = document.getElementById('first-img-section')
    const leftButtonScroll2 = document.getElementById('left-btn-scroll2')
    const rightButtonScroll2 = document.getElementById('right-btn-scroll2')
    const boxScrollBar2 = document.getElementById('second-img-section')
    const imgScrollBar2 = document.querySelectorAll('#second-img-section ul li')
    const leftButtonScroll3 = document.getElementById('left-button-scroll3')
    const rightButtonScroll3 = document.getElementById('right-button-scroll3')
    const boxScrollBar3 = document.getElementById('third-img-section')
    const imgScrollBar3 = document.querySelectorAll('#third-img-section ul li')
    const carrelloIcon = document.getElementById('carrello-icon')
    console.log(imgScrollBar3);

    // Funzione che al clic sull'immagine di qualsiasi scarpa reindirizza alla pagina della scarpa
    for (let index = 0; index < shoes.length; index++) {
        itemSelected = shoes[index];
        itemSelected.addEventListener('click', function () {
            window.location.href = 'Shoes-page.html'
        })
    }
    
    // Reindirizzamento alla pagina del carrello
    carrelloIcon.addEventListener('click', function () {
        window.location.href = 'cart.html'
    })
    
    // Script per lo scroll della barra scarpe
    boxScrollBar1.addEventListener('wheel', (evt) => {
        evt.preventDefault()
        boxScrollBar1.scrollLeft += evt.deltaY
        boxScrollBar1.classList.remove('scroll-smooth')
        boxScrollBar1.classList.add('scroll-auto')
    })
    rightButtonScrollShoes.addEventListener('click', function () {
        for (let index = 0; index < shoes.length; index++) {
            itemSelected = shoes[index];
            boxScrollBar1.scrollLeft += itemSelected.scrollWidth;
            boxScrollBar1.classList.remove('scroll-auto')
            boxScrollBar1.classList.add('scroll-smooth')
        }

    })
    leftButtonScrollShoes.addEventListener('click', function () {
        for (let index = 0; index < shoes.length; index++) {
            itemSelected = shoes[index];
            boxScrollBar1.scrollLeft -= itemSelected.scrollWidth;
            boxScrollBar1.classList.remove('scroll-auto')
            boxScrollBar1.classList.add('scroll-smooth')
            console.log();
        }

    })

    // Script per lo scorrimento del secondo box

    boxScrollBar2.addEventListener('wheel', (evt) => {
        evt.preventDefault()
        boxScrollBar2.scrollLeft += evt.deltaY
        boxScrollBar2.classList.remove('scroll-smooth')
        boxScrollBar2.classList.add('scroll-auto')
        // boxScrollBar2.style.scrollBehavior = 'auto'
    })
    rightButtonScroll2.addEventListener('click', function () {
        for (let index = 0; index < imgScrollBar2.length; index++) {
            itemSelected = imgScrollBar2[index];
            boxScrollBar2.scrollLeft += itemSelected.scrollWidth;
            boxScrollBar2.classList.remove('scroll-auto')
            boxScrollBar2.classList.add('scroll-smooth')
            console.log();
        }
    })
    leftButtonScroll2.addEventListener('click', function () {
        for (let index = 0; index < imgScrollBar2.length; index++) {
            itemSelected = imgScrollBar2[index];
            boxScrollBar2.scrollLeft -= itemSelected.scrollWidth;
            boxScrollBar2.classList.remove('scroll-auto')
            boxScrollBar2.classList.add('scroll-smooth')
            console.log();
        }

    })
    // Script per lo scorrimento del terzo box

    boxScrollBar3.addEventListener('wheel', (evt) => {
        evt.preventDefault()
        boxScrollBar3.scrollLeft += evt.deltaY
        boxScrollBar3.classList.remove('scroll-smooth')
        boxScrollBar3.classList.add('scroll-auto')
    })
    rightButtonScroll3.addEventListener('click', function () {
        for (let index = 0; index < imgScrollBar3.length; index++) {
            itemSelected = imgScrollBar3[index];
            boxScrollBar3.scrollLeft += itemSelected.scrollWidth;
            boxScrollBar3.classList.remove('scroll-auto')
            boxScrollBar3.classList.add('scroll-smooth')
            console.log(itemSelected.scrollWidth);
        }

    })
    leftButtonScroll3.addEventListener('click', function () {
        for (let index = 0; index < imgScrollBar3.length; index++) {
            itemSelected = imgScrollBar3[index];
            boxScrollBar3.scrollLeft -= itemSelected.scrollWidth;
            boxScrollBar3.classList.remove('scroll-auto')
            boxScrollBar3.classList.add('scroll-smooth')
            console.log(itemSelected.scrollWidth);
        }
    })

    // script per la visualizzazione degli elementi li prima del footer on mouserover

    const listVisible = document.querySelectorAll(".visible-list li")
    const listHidden = document.querySelectorAll("#pre-footer div div ul div")

    for (let index = 0; index < listVisible.length; index++) {
        const element = listVisible[index];
        // console.log(element);
        element.addEventListener('mouseover', function () {
            for (let index = 0; index < listHidden.length; index++) {
                hiddenElement = listHidden[index];
                hiddenElement.classList.remove('hidden')
                hiddenElement.classList.add('visible')
            }
        })
    }
    for (let index = 0; index < listVisible.length; index++) {
        const element = listVisible[index];
        element.addEventListener('mouseout', function () {
            for (let index = 0; index < listHidden.length; index++) {
                hiddenElement = listHidden[index];
                hiddenElement.classList.remove('visible')
                hiddenElement.classList.add('hidden')
            }
        })
    }
})


