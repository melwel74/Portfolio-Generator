
// const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Melvin', 'melwel74'));

// const generatePage = (userName, githubName) => {
//   return `
//   Name: ${Melvin}
//   GitHub: ${melwel74}
//   `;
// };





// const [Melvin, melwel74] = profileDataArgs;
// console.log(Melvin, melwel74);
// console.log(generatePage(Melvin, melwel74));

// const generatePage = (Melvin, melwel74) => `Name: ${Melvin}, Github: ${melwel74}`;

// console.log(generatePage('Melvin', 'melwel74'));

// const generatePage = (Melvin, melwel74) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${Melvin}</h1>
//       <h2><a href="https://github.com/${melwel74}">Github</a></h2>
//     </body>
//     </html>
//     `;
// };


// profileDataArr.forEach(profileItem => console.log(profileItem));

// console.log('hello node!');

// var message = 'Hello Node!';

// var sum = 5 + 3;
// console.log(message);
// console.log(sum);

var commandLineArgs = process.argv;
console.log(commandLineArgs);
console.log(process);

var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);



const printProfileData = profileDataArr => {
  for (let i = 0; i < profileDataArr.length; i++) {
    console.log(profileDataArr[i]);
  }
};



