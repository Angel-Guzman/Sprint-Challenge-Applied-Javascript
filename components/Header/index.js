// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const header = document.querySelector('.header-container')
function Header() {
    // create elements
    headerDiv = document.createElement('div')
    dateSpan = document.createElement('span')
    h1Element = document.createElement('h1')
    tempSpan = document.createElement('span')
    // structure
    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(h1Element)
    headerDiv.appendChild(tempSpan)
    // add classes
    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')
    // add text Content
    dateSpan.textContent = 'SMARCH 28, 2019'
    h1Element.textContent = 'Lambda Times'
    tempSpan.textContent = '98°'

    
    return headerDiv
}
header.appendChild(Header())