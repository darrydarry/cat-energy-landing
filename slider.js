//constants
const MAX_WIDTH_ELEMENT = 100
const MIDDLE_RANGE_INPUT = 50

//initialization events
window.addEventListener('load', onLoad)

//initialization variables
let catBeforeElement, catAfterElement = null


function onLoad() {
    //getting elements from DOM
    catBeforeElement = document.querySelector('.cat-before')
    catAfterElement = document.querySelector('.cat-after')

    // check on exist of elements
    if (!catBeforeElement || !catAfterElement) {
        console.error('catBeforeElement or catAfterElement are not loaded')
        return
    }

    // getting input slider from DOM
    const slider = document.querySelector('#slider-cat');

    // setting event for input slider
    slider.addEventListener('input', onToggleCat)
}

// callback function for input with cats
function onToggleCat() {

    // calculated width for cat elements
    catBeforeElement.style.width = MAX_WIDTH_ELEMENT - this.value + '%'
    catAfterElement.style.width = this.value + '%'

    // is increment style left or decrement for catAfter
    if (this.value > MIDDLE_RANGE_INPUT) {
        // increment left
        catAfterElement.style.left = MAX_WIDTH_ELEMENT - this.value + '%'
    } else {
        //decrement left
        catAfterElement.style.left = this.value + '%'
    }
    
    // ouput in the browser console
    console.log('BEFORE: ', catBeforeElement.style.width);
    console.log('AFTER: ', catAfterElement.style.width);
}