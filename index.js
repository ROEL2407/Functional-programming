fetch("./dataset_raw.json")
    .then(function (response) {
        // The JSON data will arrive here
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        let keys = getKeys(data);
    })
    .catch(function (err) {
        // If an error occured, it will be catched here
        console.log(err);
    });

function getKeys(data) {
    // Show all keys(questions) of the dataset
    let keys = Object.keys(data[0])
    console.log("Keys: ", keys);
}

function appendData(data) {
    var mainContainer = document.getElementById("dataset");
    for (var i = 0; i < data.length; i++) {
        // Loops all items of json file to the console 
        console.log(data);
    }
}