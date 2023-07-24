//Import axios for get url, meanwhile cheerio to get load html page and get a specific tag element
const axios = require('axios');
const cheerio = require('cheerio');

//declare input node app [2] [3]
const lamanweb = process.argv[2];
const tag = process.argv[3];


const fungsi = async (lamanweb, tag) => {
    try {
        const response = await axios.get(lamanweb);
        const $ = cheerio.load(response.data);

        console.log($(tag).text());
    } catch (err) {
        console.log(err.message);
    }
}

(!lamanweb && !tag) ? console.error('Sila masukkan valid url dan css selector') : fungsi(lamanweb, tag);


