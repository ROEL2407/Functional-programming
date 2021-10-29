// trying to fetch data with functional programming
let endpoint = './dataset_raw.json';

    async function Fetch(url) {
        try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
          return "yes";
        } catch {
          console.log(err);
        }
      }

      Fetch(endpoint).then((userData) => {
        console.log('hello, data is loaded');

               appendData(endpoint);
      });
      // end