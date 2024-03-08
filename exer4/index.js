import { v4 as uuidv4 } from 'uuid';
uuidv4();
import validator from 'validator';
import fs from "fs";



//import { snakeCase } from "snake-case";


var fName;
var lName;
var eMail;
var age;



const generateUniqueID = (fName, lName) => {
    const fnameLetter = fName.charAt(0); //gets the first name initial
    const uniqueID = uuidv4(); 
    const concatenatedName = fnameLetter.toLowerCase() + lName.toLowerCase(); //concatenates first name initial and last name, also in lowercase
    return concatenatedName + uniqueID.replace(/-/g, '').slice(0, 8); //combining the concatenated fname and lname + the 8 char uuid
}

function validAcc([fName, lName, eMail, age]) {
    if (!fName || typeof fName !== 'string') 
        return false;
    if (!lName || typeof lName !== 'string') 
        return false;
    if (!eMail || typeof eMail !== 'string' || !validator.isEmail(eMail)) 
        return false;
    if (!age || typeof age !== 'number' || age < 18) 
        return false;
    return true;
}


const addAccount = (account) => {
    const [fName, lName, eMail, age] = account;
    if (!validAcc([fName, lName, eMail, age])){
        return false;
    }
   
}





console.log((generateUniqueID("Alan", "Turing")));
console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
//console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));