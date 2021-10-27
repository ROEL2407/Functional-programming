const json = fetch("./dataset_raw.json")
    .then(function (response) {
        // The JSON data will arrive here
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        showKeys(data);
    })
    .catch(function (err) {
        // If an error occured, it will be catched here
        console.log(err);
    });
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

function appendData(data) {
    for (var i = 0; i < data.length; i++) {
        // Loops all items of json file to the console 
        console.log(data);
    }
}

const ujson = json;
const arr = JSON.stringify( ujson );
arr.forEach( obj => renameKey( obj, 'Wat is je favoriete soort huisdier?', 'huisdier' ) );

console.log( updatedJson );


//     from: "Wat is je favoriete soort huisdier?",
//     to: "huisdier"
// },
// {
//     from: "Wat is je oogkleur?",
//     to: "oogkleur"
// },
// {
//     from: "Wat is je favoriete windrichting?",
//     to: "windrichting"
// },
// {
//     from: "Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?",
//     to: "motivatie"
// },
// {
//     from: "Kies zelf of je deze vraag beantwoord.",
//     to: "upToYou"
// },
// {
//     from: "Wat is je favoriete datum?",
//     to: "date"
// },
// {
//     from: "Wat is je favoriete datum, maar nu in tekst!",
//     to: "dateText"
// },
// {
//     from: "Wat is je favoriete zuivelproduct?",
//     to: "zuivel"
// },
// {
//     from: "Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)",
//     to: "kleding"
// },
// {
//     from: "Op welke verdieping van het TTH studeer je het liefst?",
//     to: "verdieping"
// },
// {
//     from: "Wat wil je worden als je groot bent?",
//     to: "droombaanNu"
// },
// {
//     from: "Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.",
//     to: "droombaan8"
// },
// {
//     from: "Kaas is ook een zoogdier?",
//     to: "kaas"
// },
// {
//     from: "Als je later een auto zou kopen, van welk merk zou deze dan zijn?",
//     to: "automerk"
// }
// ]);

function showKeys(data) {
    // Show all keys(questions) of the dataset
    let keys = Object.keys(data[0])
    console.log("Keys: ", keys);
}