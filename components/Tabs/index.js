// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div> 
const topicsDiv = document.querySelector('.topics')

function tabCreator() {
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab')
    topicsDiv.appendChild(tabDiv)

    return tabDiv
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // console.log(response.data)
        const topicsData = response.data.topics
        topicsData.forEach(element => {
            const newTabs = tabCreator(element)
            newTabs.textContent = element
            topicsDiv.appendChild(newTabs)
        });
    })
    .catch(err => {
        console.log(err)
    })