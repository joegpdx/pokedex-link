import request from 'superagent';

export const getPokemon = (pokeId) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${pokeId}`)