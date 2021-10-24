
//comments
//var message ='Hello Node!';
//var sum = 5 + 3;
//console.log(message);
//console.log(sum);

var commandLineArgs = process.argv;
console.log(commandLineArgs);
var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
const printProfileData = (profileDataArr) => {
    console.log(profileDataArr);
};

const name = profileDataArgs [0];
const github = profileDataArgs[1];

const generatePage = () => 'Name: Jane, Github: janehub';
console.log(generatePage(name, github));
console.log(generatePage('Jane', 'janehub'));

const generatePage = (userName, githubName) => {
    return `
    Name: ${userName}
    GitHub: ${githubName}
    `;
};

printProfileData(profileDataArgs);
const printProfileData = profileDataArr => {
   for (let i = 0; i < profileDataArr.length; i+= 1){
       console.log(profileDataArr [i]);

    }
   console.log('===');

}

profileDataArr.forEach(profileItem => console.log(profileItem));


