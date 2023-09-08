//API Info
const baseURL = "https://pokeapi.co/api/v2/";
const pokemonEndpoint = "pokemon/"
const typeEndpoint = "type/"
const locationEndpoint = "region/"
let requestParam = "1";

//GET Request for Pokemon data
const getPokemonData = async () => {
    const url = baseURL + pokemonEndpoint + requestParam;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            handlePokemonData(jsonResponse);
            return;
        }
        throw new Error("Error with Pokemon Request");
    } catch (error) { console.log(error); }
};

function handlePokemonData(jsonResponse) {
    const moves = jsonResponse.moves;
    const types = jsonResponse.types;
    const pastTypes = jsonResponse.past_types;

    console.log(moves);
    console.log(types);
    console.log(pastTypes);
}

//GET Request for Type data
const getTypeData = async () => {
    const url = baseURL + typeEndpoint + requestParam;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            handleTypeData(jsonResponse);
            return;
        }
        throw new Error("Error with Type Request");
    } catch(error) { console.log(error); } 
}

function handleTypeData(jsonResponse) {
    const type = jsonResponse.name;
    const noDamage = jsonResponse.damage_relations.no_damage_to; //Array
    const weakAgainst = jsonResponse.damage_relations.half_damage_to; //Array
    const strongAgainst = jsonResponse.damage_relations.double_damage_to; //Array
    const pokemonWithType = jsonResponse.pokemon;
    const movesWithType = jsonResponse.moves;

    console.log(type);
    console.log(noDamage);
    console.log(weakAgainst);
    console.log(strongAgainst);
    console.log(pokemonWithType);
    console.log(movesWithType);
}

//GET Request for Location data
const getLocationData = async () => {
    const url = baseURL + locationEndpoint + requestParam;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            handleLocationData(jsonResponse);
            return;
        }
        throw new Error("Error with Location Request");
    } catch(error) { console.log(error); }
}

function handleLocationData(jsonResponse) {
    const region = jsonResponse.name;
    const locations = jsonResponse.locations;

    console.log(region);
    console.log(locations);
}

