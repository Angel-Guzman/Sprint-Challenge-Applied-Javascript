/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('.carousel-container')

function createCarousel() {
  // create elements
  carouselDiv = document.createElement('div')
  leftBtnDiv = document.createElement('div')
  mountainImg = document.createElement('img')
  computerImg = document.createElement('img')
  treesImg = document.createElement('img')
  turntableImg = document.createElement('img')
  rightBtnDiv = document.createElement('div')
  
  // structure
  carouselDiv.appendChild(leftBtnDiv)
  carouselDiv.appendChild(mountainImg)
  carouselDiv.appendChild(computerImg)
  carouselDiv.appendChild(treesImg)
  carouselDiv.appendChild(turntableImg)
  carouselDiv.appendChild(rightBtnDiv)

  // classes
  carouselDiv.classList.add('carousel')
  leftBtnDiv.classList.add('left-button')
  rightBtnDiv.classList.add('right-button')

  // text content, and srcs
  leftBtnDiv.textContent = '<'
  // mountainImg.setAttribute('src', "./assets/carousel/mountains.jpeg")
  mountainImg.src = "./assets/carousel/mountains.jpeg"
  computerImg.src = "./assets/carousel/computer.jpeg"
  treesImg.src = "./assets/carousel/trees.jpeg"
  turntableImg.src = "./assets/carousel/turntable.jpeg"
  rightBtnDiv.textContent = '>'
  mountainImg.style.height = 'auto'
  mountainImg.style.width = '100%'

  return carouselDiv
}

const testCarousel = createCarousel()
carouselContainer.appendChild(testCarousel)