function starters() {
    //fetch init API
    fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
        .then(response => response.json())
        .then(data => getPokemonData(data))
}
    
function getPokemonData(data) {
    let urls = [];
    let promises = [];
    let pokemons = [];

    data.results.forEach(result => {
        //push all urls into array urls
        urls.push(result.url);
    });
    
    //for all urls, push a promise from the url to an array promises
    for (let i = 0; i < urls.length; i++) {
        promises.push(getPokemon(urls[i]));
    }
    //resolve all promises
    Promise.all(promises).then(results => {
        //for each pokemon in results push the pokemon to the array pokemons
        results.forEach(pokemon => {
            pokemons.push({
                naam: pokemon.name,
                stat: pokemon.stats
            });
        });
        console.table(pokemons);
    });
}
    
function getPokemon(url) {
    // return every fetch
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}
starters();