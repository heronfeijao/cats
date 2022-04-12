// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    //Log (cb function) is waiting to be called when readFile is done reading the file.
    if (!error) cb(data);
  });
};

//Use this function to ONLY return the value after the file has been read.
const returnValue = (breed) => {
  console.log('Return Value: ', breed);
};

console.log(returnValue);

breedDetailsFromFile('Bombay', returnValue);