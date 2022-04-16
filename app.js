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
// variable to load inquirer
const inquirer = require('inquirer');
// variable to call the functions to  generate the HTML page
const { writeFile, copyFile } = require('./utils/generate-site.js');
// require statement to include the generatePage function in this file. 
const generatePage = require('./src/page-template');
// //  * variable to process the node arguments which is going to be changed with inquirer
// // const profileDataArgs = process.argv.slice(2);
// // * variable for the name and github values in an array/object to be passed into the generatePage function which will be replaced with inquirer
// // const [inputName, github] = profileDataArgs;



//  function to prompt user for their information
const promptUser = () => {
    //  return the inquirer prompt to the user
    return inquirer.prompt([{
            // type is a property that is used to determine what kind of input the user will be given
            type: 'input',
            // name is a property used when storing the answer from the user response 
            name: 'name',
            // message is a property that is the question to print
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide a short description about yourself:',
            when: ({
                confirmAbout
            }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

const promptProject = portfolioData => {
    console.log(`
    ==============
    Add a New Project
    ==============
    `);
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: messageInput => {
                if (messageInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData)
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

// * this is known as nesting callback this is bad practice
// promptUser()
// .then(promptProject)
// .then(portfolioData => {
//     // variable to store the generatePage function output
//     const pageHTML = generatePage(portfolioData);
//     // method to write the html file to the file system
//     fs.writeFile('./dist/index.html', pageHTML, err => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log('Page created! Check out index.html in this directory to see it!');
      
//         fs.copyFile('./src/style.css', './dist/style.css', err => {
//           if (err) {
//             console.log(err);
//             return;
//           }
//           console.log('Style sheet copied successfully!');
//         });
//       });
//     });

// * this is using promises to handle the callback hell which is good practice
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
    
//   *old code
// .then(answers => console.log(answers))
// .then(promptProject)
// .then(projectAnswers => console.log(projectAnswers))