
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const [Melvin, melwel74] = profileDataArgs;
console.log(Melvin, melwel74);
console.log(generatePage(Melvin, melwel74));

const generatePage = (Melvin, melwel74) => `Name: ${Melvin}, Github: ${melwel74}`;

console.log(generatePage('Melvin', 'melwel74'));

const generatePage = (Melvin, melwel74) => {
    return `
    Name: ${Melvin}, 
    GitHub: ${melwel74}
    `;
};


profileDataArr.forEach(profileItem => console.log(profileItem));








