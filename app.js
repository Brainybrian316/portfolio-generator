const profileDataArgs = process.argv.slice(2, process.argv.length);

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

const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

console.log(generatePage('Jane', 'janehub'));