// const fs = require('fs');
// const profileDataArgs = process.argv.slice(2, process.argv.length)
// const [inputName, github] = profileDataArgs;


// * extract arguments and store them into distinct variables
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// * ES6 featured called assignment destructuring



//  ! everything up to this point was learning purposes. 
// console.log(profileDataArgs);

//  * this is the same as the forEach() method below
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
// };

// * for each  method meant specifically for arrays
// const printProfileData = profileDataArr => {
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem);
//     });
// };

// //  function with one return action can be written like this. We are using the foreach method
// const printProfileData = profileDataArr => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);

//  TODO: New learning point to create an html file without the DOM

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// const generatePage = (userName, githubName) => {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Document</title>
//     </head>

//     <body>
//     <h1>${inputName}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
// };

// fs.writeFile('index.html', generatePage(inputName, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output');
// });

// ! refactoring code with new knowledge 
const inquirer = require('inquirer');
inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }])
    .then(answers => console.log(answers));
// // variable to load the html file
// const fs = require('fs');
// // require statement to include the generatePage function in this file. 
// const generatePage = require('./src/page-template');
// //  * variable to process the node arguments which is going to be changed with inquirer
// // const profileDataArgs = process.argv.slice(2);
// // * variable for the name and github values in an array/object to be passed into the generatePage function which will be replaced with inquirer
// // const [inputName, github] = profileDataArgs;
// // variable to store the generatePage function output
// const pageHTML = generatePage(inputName, github);

// // method to write the html file to the file system
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output');
// });