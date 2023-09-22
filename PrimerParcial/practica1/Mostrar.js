const fetchUrlData = require("./https"); 



async function getPokemonByID(id) {
  try {
    const data = await fetchUrlData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(data.name);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getPokemonByID(1);

