import { v4 as uuidv4 } from 'uuid';
uuidv4();
import validator from 'validator';
import fs from "fs";
import { userInfo } from 'os';



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
    if (!eMail || typeof eMail !== 'string' || !validator.isEmail(eMail)) //validates if the email is string and in email fromat
        return false;
    if (!age || typeof age !== 'number' || age < 18) //validates if age is a number and if greater than or equal to 18
        return false;
    return true;
}


const addAccount = (account) => {
    const [fName, lName, eMail, age] = account;
    if (!validAcc([fName, lName, eMail, age])){ //checks if the user info is valid
        console.log("Invalid.");
        return false;
    }

    const uniqueID = generateUniqueID(fName, lName); //generates the id
    const userInfo = fName + ',' + lName + ',' + eMail + ',' + age + ',' + uniqueID + '\n'; //string of user indormation

    fs.appendFileSync('users.txt', userInfo, function (err) { //append the user info to user txt
        // if (err) console.log(err);
        // console.log('Saved!');
        return true;
    });

   
}





console.log((generateUniqueID("Alan", "Turing")));
console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
console.log(addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]));