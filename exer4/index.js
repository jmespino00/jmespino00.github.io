import { v4 as uuidv4 } from 'uuid';
uuidv4();
import validator from 'validator';
import { snakeCase } from "snake-case";


var fName;
var lName;
var eMail;
var age;

var fnameLetter = fName.split('').map(fnameLetter => fnameLetter[0]).join('');


const generateUniqueID = (fName, lName) => {
    console.log(uuidv4());
    return snakeCase(fName + lName);
}



// const addAccount = (fName, lName, eMail, age) => {
//     validator.isEmail(eMail);
// }



console.log((generateUniqueID("Alan", "Turing")));
//console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));