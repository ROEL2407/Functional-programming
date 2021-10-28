fetch("./dataset_raw.json")
    .then(function (response) {
        // The JSON data will arrive here
        return response.json();
    })
    .then(function (data) {
        renameKeys(data);
        dataToLowerCase(data);
        showAllData(data);
        showKeys(data);
    })
    .catch(function (err) {
        // If an error occured, it will be catched here
        console.log(err);
    });

function showAllData(data) {
    for (var i = 0; i < data.length; i++) {
        // Loops all items of json file to the console 
        //console.log(data);
    }
}

function renameKey(obj, oldKey, newKey) {
    delete Object.assign(obj, {
        [newKey]: obj[oldKey]
    })[oldKey];
}

function renameKeys(data) {
    data.forEach(obj => renameKey(obj, 'Wat is je favoriete windrichting?', 'windrichting'));
    data.forEach(obj => renameKey(obj, 'Wat is je favoriete soort huisdier?', 'huisdier'));
    data.forEach(obj => renameKey(obj, 'Wat is je oogkleur?', 'oogkleur'));
    data.forEach(obj => renameKey(obj, 'Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?', 'motivatie'));
    data.forEach(obj => renameKey(obj, 'Kies zelf of je deze vraag beantwoord.', 'upToYou'));
    data.forEach(obj => renameKey(obj, 'Wat is je favoriete datum?', 'date'));
    data.forEach(obj => renameKey(obj, 'Wat is je favoriete datum, maar nu in tekst!', 'dateText'));
    data.forEach(obj => renameKey(obj, 'Wat is je favoriete zuivelproduct?', 'zuivel'));
    data.forEach(obj => renameKey(obj, 'Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)', 'kleding'));
    data.forEach(obj => renameKey(obj, 'Op welke verdieping van het TTH studeer je het liefst?', 'verdieping'));
    data.forEach(obj => renameKey(obj, 'Wat wil je worden als je groot bent?', 'droombaanNu'));
    data.forEach(obj => renameKey(obj, 'Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.', 'droombaan8'));
    data.forEach(obj => renameKey(obj, 'Kaas is ook een zoogdier?', 'kaas'));
    data.forEach(obj => renameKey(obj, 'Als je later een auto zou kopen, van welk merk zou deze dan zijn?', 'auto'));
}

function dataToLowerCase(obj) {
    for (var i = 0; i < obj.length; i++) {
        Object.keys(obj[i]).forEach(key => {
            console.log(obj[i][key]);
            if (typeof obj[i][key] == 'string') {
                var temp = obj[i][key].toLowerCase();
                console.log(temp);
            }
        })
    }
}

function showKeys(data) {
    // Show all keys(questions) of the dataset
    let keys = Object.keys(data[0]);
    console.log("Keys: ", keys);
    return keys;
}
// let endpoint = './dataset_raw.json';

//     async function Fetch(url) {
//         try {
//           const response = await fetch(url);
//           const data = await response.json();
//           return data;
//           return "yes";
//         } catch {
//           console.log(err);
//         }
//       }

//       Fetch(endpoint).then((userData) => {
//         console.log('hello, data is loaded');

//                appendData(endpoint);
//       });