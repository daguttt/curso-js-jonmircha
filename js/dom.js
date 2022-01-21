// const texto = 'Hola soy Daniel Gutiérrez xd'
// const hablar = (texto) => speechSynthesis
//     .speak(new SpeechSynthesisUtterance(texto));
// hablar(texto);

/* ****************************************************************** */
// Clase 61: Introducción al DOM
/* ****************************************************************** */

// setTimeout(() => {
//     console.log(document.getSelection().toString())
// }, 3000);
/* ****************************************************************** */

/* ****************************************************************** */
// Clase 62: Nodos, Elementos y Selectores
/* ****************************************************************** */

// Selectores 

/* ****************************************************************** */
// Clase 63: Attributes and data-attribute
/* ****************************************************************** */
// Obtener atributos
// Forma 1
// const d = document
// const $linkDom = d.querySelector('.link-dom')
// console.log($linkDom.getAttribute('href'))
//     // Forma 2
// console.log($linkDom.href)

// // Establecer atributos
// $linkDom.setAttribute('href', 'https://youtube.com/jonmircha')
// $linkDom.setAttribute('target', '_blank')
// $linkDom.setAttribute('rel', 'noopener')

// // Obtener atributos
// console.log($linkDom.getAttribute('data-description'))

// $linkDom.setAttribute('data-id', '1')

// //Eliminar atributos
// $linkDom.removeAttribute('data-id')

// // Consultar atributos
// console.log($linkDom.hasAttribute('data-id'))

// /* ************************* */
// // DATA-ATTRIBUTES
// // Obtener
// console.log($linkDom.dataset) // Es un objeto MAP

// console.log($linkDom.dataset.description)
// console.log($linkDom.getAttribute('data-description'))

// // Establecer
// $linkDom.dataset.id = 1;
// $linkDom.setAttribute('data-id', '2')

/* ************************* */
/* ****************************************************************** */


/* ****************************************************************** */
// Clase 64: Estilos y Variables CSS
/* ****************************************************************** */
// const d = document
// const $linkDom = d.querySelector('.link-dom')
/* ****************************************************************** */

/* ****************************************************************** */
// Clase 65: Clases CSS
/* ****************************************************************** */
/* ****************************************************************** */
// Clase 66: Texto y HTML
/* ****************************************************************** */
/* ****************************************************************** */
// Clase 67: DOM Traversing: Recorriendo el DOM
/* ****************************************************************** */

/* ****************************************************************** */
// Clase 68: Creando Elementos y Fragmentos
/* ****************************************************************** */

// const d = document,
//     $figure = d.createElement('figure'),
//     $figcaption = d.createElement('figcaption'),
//     $img = d.createElement('img'),
//     $figCaptionText = d.createTextNode('Animals'),
//     $cards = d.querySelector('.cards');
// $img.setAttribute('src', 'https://placeimg.com/200/200/animals')
// $img.setAttribute('alt', 'Animals')
// $figure.appendChild($img)
// $figcaption.appendChild($figCaptionText)
// $figure.appendChild($figcaption)
// $cards.appendChild($figure)

// const capitalizeStr = (str) => {
//     let firstLetter = str.charAt(0);
//     firstLetter = firstLetter.toUpperCase();
//     let otherPartStr = str.slice(1)
//     otherPartStr = otherPartStr.toLowerCase()
//     return firstLetter + otherPartStr
// }

// const createCard = (imgSrc, imgAlt) => {
//     const $figure = d.createElement('figure'),
//     $figcaption = d.createElement('figcaption'),
//     $img = d.createElement('img'),
//     $figCaptionText = d.createTextNode(capitalizeStr(imgAlt));
//     $img.setAttribute('src', `https://placeimg.com/200/200/${imgAlt}`)
//     $img.setAttribute('alt', capitalizeStr(imgAlt))
//     $figure.appendChild($img)
//     $figcaption.appendChild($figCaptionText)
//     $figure.appendChild($figcaption)
//     return $figure
// }
// const addCard = (card, wrapper) => {
//     wrapper.appendChild(card)
// }
// let card1 = createCard('https://placeimg.com/200/200/people', 'People')
// addCard(card1, $cards)

// const seasons = [
//     "Primavera",
//     "Verano",
//     "Otoño",
//     "Invierno"
//     ],
//     $ulSeasons = d.createElement('ul');
// d.write('<h3>Estaciones</h3>')
// seasons.forEach(el => {
//     const $li = d.createElement('li')
//     $li.textContent = el
//     $ulSeasons.appendChild($li)
// })
// d.body.appendChild($ulSeasons)

// d.write('<h3>Continentes</h3>')
// const continents = [
//     "America",
//     "Asía",
//     "África",
//     "Oceanía",
//     "Europa"
//     ],
//     $ulContinents = d.createElement('ul');
// $ulContinents.innerHTML = ""
// continents.forEach(el => $ulContinents.innerHTML += `<li>${el}</li>`)
// d.body.appendChild($ulContinents)

// d.write('<h3>Meses del año</h3>')
// const monthsOfYear = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre"
//     ],
//     $ulMonths = d.createElement('ul'),
//     $fragment = d.createDocumentFragment();
// monthsOfYear.forEach(el => {
//     const $li = d.createElement('li')
//     $li.textContent = el
//     $fragment.appendChild($li)
// })
// $ulMonths.appendChild($fragment)
// d.body.appendChild($ulMonths)

/* ****************************************************************** */

/* ****************************************************************** */
// Clase 69: Templates HTML
/* ****************************************************************** */
const d = document;
const $cards = d.querySelector('.cards'),
    $templateCard = d.getElementById('template-card').content;
const $fragment = d.createDocumentFragment(),
    cards = [
        {
            title: "Tecnología",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },
    ];
cards.forEach(el => {
    $templateCard.querySelector('img').setAttribute('src', el.img)
    $templateCard.querySelector('img').setAttribute('alt', el.title)
    $templateCard.querySelector('figcaption').textContent = el.title
    let $clone = d.importNode($templateCard, true)
    $fragment.appendChild($clone)
})
$cards.appendChild($fragment)

/* ****************************************************************** */

/* ****************************************************************** */
// Clase 70: ...
/* ****************************************************************** */

/* ****************************************************************** */

/* ****************************************************************** */
// Clase 71: ...
/* ****************************************************************** */

/* ****************************************************************** */

/* ****************************************************************** */
// Clase 72: ...
/* ****************************************************************** */

/* ****************************************************************** */

