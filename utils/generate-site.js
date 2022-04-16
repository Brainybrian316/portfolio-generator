const fs = require('fs');

// function to return a promise
const writeFile = fileContent => {
    // return a new promise with two functions that are called when the promise is resolved or rejected
    return new Promise((resolve, reject) => {
        // writeFile() method takes three arguments:
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the promise
            if (err) {
                reject(err);
                return;
            }
            // if everything is successful, resolve the promise
            resolve({
                // resolve object can be anything
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// function to return a promise
const copyFile = () => {
    // return a new promise with two functions that are called when the promise is resolved or rejected
    return new Promise((resolve, reject) => {
        // writeFile() method takes three arguments:
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there is an error, reject the promise
            if (err) {
                reject(err);
                return;
            }
            // if everything is successful, resolve the promise
            resolve({
                // resolve object can be anything
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        });
    });
}

module.exports = { writeFile, copyFile };
