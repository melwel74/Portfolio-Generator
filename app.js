//console.log('Hello Node!');
//console.log(document)
var message ='Hello Node!';
var sum = 5 + 3;
console.log(message);
console.log(sum);
var commandLineArgs = process.argv;
console.log(commandLineArgs);
var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
const printProfileData = (profileDataArr) => {
    console.log(profileDataArr);
};

printProfileData(profileDataArgs);
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++){

    }
}


//most recent code from befor
//const printProfileData = profileDataArr => {
   // for (let i = 0; i < profileDataArr.length; i += 1) {
        //console.log(profileDataArr[i]);
    //}
   // console.log('==========');
//}
//profileDataArr.forEach((profileItem => console.log(profileItem))
