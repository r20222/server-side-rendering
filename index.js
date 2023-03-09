console.log('cooll')

import express from 'express'

// basis url voor de api
const url = 'https://api.vinimini.fdnd.nl/api/v1'

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
// dit plak je aan de basis url van de api, /categories
// { categories: data.categories } toen het niet werkte, werkt nu wel met enkel data
app.get('/', (request, response) => {
  let categoriesUrl = url + '/categories'

  fetchJson(categoriesUrl).then((data) => {
    response.render('index', data)
  })
})

// dit plak je aan de basis url van de api, /producten
app.get('/Ei', async (request, response) => {
  let productenUrl = url + '/producten'

  await fetchJson(productenUrl).then((data) => {
    response.render('Ei', data )
  })
})


// van de chatgpt
// app.get('/', async (request, response) => {
//   let categoriesUrl = url + '/categories'
//   let productenUrl = url + '/producten'

//   let [categories, producten] = await Promise.all([
//     fetchJson(categoriesUrl),
//     fetchJson(productenUrl)
//   ])

//   if (!Array.isArray(producten)) {
//     // Als producten geen array is, maak er dan een lege array van
//     producten = [producten]
//   }
//   if (!Array.isArray(categories)) {
//     // Als producten geen array is, maak er dan een lege array van
//     categories = []
//   }

//   let data = {
//     categories: categories,
//     producten: producten
//   }

//   response.render('index', data)
// })




// nieuw probeersel haal data op
// const productenUrl = url + '/producten'
// const producten = await fetch(productenUrl)
//   .then((response) => response.json())
//   .catch((error) => error)

// console.log(producten)

// // maak een route voor de data
// app.get('/', (request, response) => {
//   // console.log(request.query.squad)

//   response.render('index', {producten: data.producten})
// })




// app.get('/sprint', (request, response) => {
//   let slug = request.query.sprintSlug || 'your-tribe'
//   let sprintUrl = url + '/sprint/' + slug
//   fetchJson(sprintUrl).then((data) => {
//     // console.log(data)
//     response.render('sprint', data)
//   })
// })


// geen idee
// app.get('/Ei', (request, response) => {
//   response.render('Ei')
// })

// app.get('/contact', (request, response) => {
//   response.render('contact')
// })

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}