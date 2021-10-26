fetch("./dataset_raw.json")
  .then(function (response) {
    // The JSON data will arrive here
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    // If an error occured, it will be catched here
    console.log(err);
  });

  function appendData(data) {
    var mainContainer = document.getElementById("dataset");
    for (var i = 0; i < data.length; i++) {
        // Loops all items of json file to html 
      console.log(data);
    }
  }