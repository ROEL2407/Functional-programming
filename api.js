fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
    .then(function (response) {
        // The JSON data will arrive here
        return response.json();
    })
    .then(function (data) {
        // Functions will be executed here
        showAllNames(data.results);
    })
    .catch(function (err) {
        // If an error occured, it will be catched here
        console.log(err);
    });


function showAllNames(data) {
    for (let i = 0; i < data.length; i++) {
        // shows all items of API request to the console
        console.log(data[i].name);
    }
}