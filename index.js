import serverResponse from "./serverResponse.js"

const divResulted = document.querySelector('#resulted')

async function showCaracters() {
  const response = await serverResponse()
  response.results.map(caracter => {
    const divCaracter = document.createElement('div')
    const imageCaracter = document.createElement('img')
    const titleCaracter = document.createElement('h2')
    const genderCaracter = document.createElement('h3')
    const specieCaracter = document.createElement('h3')

    imageCaracter.setAttribute('src', caracter.image)
    imageCaracter.setAttribute('alt', 'imagen de ' + caracter.name)
    titleCaracter.textContent = 'Nombre: ' + caracter.name
    genderCaracter.textContent = 'Genero: ' + caracter.gender
    specieCaracter.textContent = 'Especie: ' + caracter.species

    divCaracter.appendChild(imageCaracter)
    divCaracter.appendChild(titleCaracter)
    divCaracter.appendChild(genderCaracter)
    divCaracter.appendChild(specieCaracter)

    divResulted.appendChild(divCaracter)
  })
}

showCaracters()