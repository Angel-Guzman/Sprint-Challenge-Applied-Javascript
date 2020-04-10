// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

function cardCreator(articlesData) {
    // create
    cardDiv = document.createElement('div')
    headlineDiv = document.createElement('div')
    authorDiv = document.createElement('div')
    imgDiv = document.createElement('div')
    imgElement = document.createElement('img')
    spanElement = document.createElement('span')

    // structure
    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgDiv)
    imgDiv.appendChild(imgElement)
    authorDiv.appendChild(spanElement)

    // add classes
    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgDiv.classList.add('img-container')

    //set text and src
    headlineDiv.textContent = `${articlesData.headline}`
    spanElement.textContent = `${articlesData.authorName}`
    imgElement.src = `${articlesData.authorPhoto}`

    return cardDiv
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const Articles = response.data.articles.javascript
        // console.log(Articles)
        Articles.forEach(item => {
            const newCards = cardCreator(item)
            cardsContainer.appendChild(newCards)
        })
        const Articles1 = response.data.articles.bootstrap
        // console.log(Articles1)
        Articles1.forEach(item => {
            const newCards = cardCreator(item)
            cardsContainer.appendChild(newCards)
        })
        const Articles2 = response.data.articles.technology
        // console.log(Articles2)
        Articles2.forEach(item => {
            const newCards = cardCreator(item)
            cardsContainer.appendChild(newCards)
        })
        const Articles3 = response.data.articles.jquery
        // console.log(Articles3)
        Articles3.forEach(item => {
            const newCards = cardCreator(item)
            cardsContainer.appendChild(newCards)
        })
        const Articles4 = response.data.articles.node
        // console.log(Articles4)
        Articles4.forEach(item => {
            const newCards = cardCreator(item)
            cardsContainer.appendChild(newCards)
        })
    })
    .catch(err => {
        console.log(err)
    })