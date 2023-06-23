require('dotenv').config()

const mySecret = process.env.MY_SECRET
const myVar = process.env.MY_VAR

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

h1.textContent = mySecret
h2.textContent = myVar

console.log('Olá mundo!)
