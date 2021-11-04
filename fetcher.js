//import request library for handling HTTP
const request = require('request');
const fs = require('fs');

//get the URL and path from args
const args = process.argv.slice(2);
//extract URL and path
const URL = args[0];
const PATH = args[1];
//request server for data
request(URL, (error, response, body) => {
  //terminate process if error occurs
  //console.log(error);
/*   if (error) {
    //console.log(error);
   console.log(`Error ${response.statusCode}: There is a problem with the URL. `);
   return;
  } */
  //write data stored in body into our local file
  fs.writeFile(PATH, body, err => {
    if (err !== null && err.code === 'ENOENT') {
      console.error('The local file path specified does not exist');
      return;
    }
    //file written successfully
    const size = body.length;
    console.log(`Downloaded and saved ${size} bytes to ${PATH}`);
  });
});