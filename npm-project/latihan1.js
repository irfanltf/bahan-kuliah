const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://github.com/irfanltf';

axios.get(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const title = $('title').text();
    const metaTags = $('meta');

     fs.writeFile('./result.txt', title, (error)=>{
        if(error) throw error;
        // const dataJson = JSON.stringify(metaTags);
        fs.writeFile('./resultmeta.txt', toString(metaTags), (e) => {
            if(e) throw e;
            console.log('berhasil menyimpan meta tags');
        });
        console.log('berhasil menyimpan title');
    });

}).catch(error => {
    console.log(error);
});


// const axios = require('axios');
// const cheerio = require('cheerio');
// const fs = require('fs');

// const url = 'https://github.com/irfanltf';

// axios.get(url).then(response => {
//   const html = response.data;
//   const $ = cheerio.load(html);

//   const title = $('title').text();
//   const metaTags = $('meta');
//   const metaArray = [];

//   metaTags.each((i, tag) => {
//     metaArray.push($(tag).attr());
//   });

//   fs.writeFile('./result.txt', title, (error)=>{
//     if(error) throw error;

//     fs.writeFile('./resultmeta.json', JSON.stringify(metaArray), (e) => {
//       if(e) throw e;

//       console.log('berhasil menyimpan meta tags');
//     });

//     console.log('berhasil menyimpan title');
//   });

// }).catch(error => {
//   console.log(error);
// });
