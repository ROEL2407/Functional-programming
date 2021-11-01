fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
    .then(function (response) {
        // The JSON data will arrive here
        return response.json();
    })
    .then(function (data) {
        // Functions will be executed here
        showAllNames(data.results);
        showStats(data.results)
        dataArray(data.results);
        console.table(data.results);
    })
    .catch(function (err) {
        // If an error occured, it will be catched here
        console.log(err);
    });
 let pokemonArray = [];

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
        pokemonArray.push(data[i].name);
    }
    console.table(pokemonArray);
}
