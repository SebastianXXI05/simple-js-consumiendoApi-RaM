const serverResponse = async () => {
  const data = await fetch('https://rickandmortyapi.com/api/character/?page=2')
  const caracters = await data.json()
  return caracters
}

export default serverResponse