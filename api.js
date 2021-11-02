fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
    .then(function (response) {
        // The JSON data will arrive here
        return response.json();
    })
    .then(function (data) {
        // Functions will be executed here
        let results = data.results;
        let allPokemonArray = [];
        showAllNames(results);
        showStats(results)
        dataArray(results);
        console.table(results);

        for (let i = 0; i < results.length; i++) {
            let temp = results[i].url;
            allPokemonArray.push(temp);
        }
        console.table('urls:', allPokemonArray);
        let p = Promise.all(allPokemonArray);
        console.log(p);

        
    })
    .catch(function (err) {
        // If an error occured, it will be catched here
        console.log(err);
    });

 let pokemon = [];

function showAllNames(data) {
    for (let i = 0; i < data.length; i++) {
        // shows all items of API request to the console
        var names = (data[i].name);
        return names;
    }
}

function showStats(data) {
    for (let i = 0; i < data.length; i++) {
        var stats = data[i].stats;
        console.log(stats);
        
    }

}

function dataArray (data) {
    for (let i = 0; i < data.length; i++) {
        pokemon.push(data[i].name);
    }
    console.table(pokemon);
}
