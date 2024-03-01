console.log("Password:\n");

var pw1 = "";
var pw2 = "";


function minChar(pw1, pw2){//checks pw character
   if (pw1.length > 7 && pw2.length > 7){
    return true;
   } else {
    return false;
   }
}

function cNum(pw1, pw2) {//checks if it has numbers
    for (let i = 0; i < pw1.length; i++) {
        var character = pw1.charAt(i);
        if (!isNaN(character * 1)) {
            return true;
        }
    }

    for (let i = 0; i < pw2.length; i++) {
        var character = pw2.charAt(i);
        if (!isNaN(character * 1)) {
            return true;
        }
    }
    return false;
}
    

function cUpperCase(pw1, pw2){//checks if it has uppercase
    if (pw1 == pw1.toUpperCase() && pw2 == pw2.toUpperCase()){
        return true;
    } else {
        return false;
    }
}

function cLowerCase(pw1, pw2){//checks if it has lowercase
    if (pw1 == pw1.toLowerCase() && pw2 == pw2.toLowerCase()){
        return true;
    } else {
        return false;
    }
}



function validatePassword(pw1, pw2){//validates all the prev functions
if (pw1 !== pw2) {
    return false;
}
return minChar(pw1, pw2) && cLowerCase(pw1, pw2) && cUpperCase(pw1, pw2) && cNum(pw1, pw2);
}

function reversePassword(pw){//reverses the new pw
    let reversed = '';
    for (let i = pw.length - 1; i >= 0; i--) {
        reversed += pw[i];
    }
    return reversed;
}

function storePassword(name, pw1, pw2){//stores the password and prints it
    var newPW = pw2;
    if (validatePassword(pw1, pw2)){
        newPW = reversePassword(pw1, pw2);
    } else {
        newPW = pw2;
    }
    let namePW = {
        name: name,
        newpassword: reversePassword(pw1),
    }
    return namePW;
}




console.log(validatePassword("helloworld", "hello"));     // returns false
console.log(validatePassword("hello", "hello"));    	  // returns false
console.log(validatePassword("hello1234", "hello1234"));  // returns false
console.log(validatePassword("Hello1234", "Hello1234")); // returns true
console.log(validatePassword("HELLO1234", "HELLO1234"));  // returns false



console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")); // returns {name: "John", newpassword:"Pass123"}

