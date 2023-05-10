const fs = require('fs');
const request = require('request');

const path = process.argv[3];
const domain = process.argv[2];

request(domain, function (error, response, body) {
  if (error) { 
    console.error('error:', error); // Print the error if one occurred
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});