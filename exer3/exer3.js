console.log("Password:\n");

var pw1;
var pw2;


function minChar(){
 if (pw1.length > 7 && pw2.length >7) {
    return true;
 }
}

function cNum(){
    let a = false;
    let b = false;
    var i=0;
    var character='';
    while (i <= pw1.length){
        character = pw1.charAt(i);
        if (!isNaN(character * 1)){
            a = true;
        }
    }

    while (i <= pw2.length){
        character = pw2.charAt(i);
        if (!isNaN(character * 1)){
            b = true;
        }
    }
    i++;
}
    

function cUpperCase(){
    if (pw1 == pw1.toUpperCase() && pw2 == pw2.toUpperCase()){
        return true;
    }else{
        return false;
    }
}

function cLowerCase(){
    if (pw1 == pw1.toLowerCase() && pw2 == pw2.toLowerCase()){
        return true;
    }else{
        return false;
    }
}



function validatePassword(pw1, pw2){
if (pw1 === pw2 && minChar == true && cLowerCase == true && cUpperCase == true){
    return true;
}else{
    return false;
}
}

function reversePassword(pw1, pw2){
    let reversed = '';
    for (let i = pw1.length - 1; i >= 0; i--) {
        reversed += pw1[i];
    }
    return reversed;
}

function storePassword(name, pw1, pw2){
    var newPW = pw2;
    if (validatePassword(pw1, pw2) == true){
        newPW = reversePassword(pw1, pw2);
    }else{
        newPW == pw2;
    }
    let namePW = {
        name: name,
        newpassword: newPW,
    }
    console.log("name:" +name+ ", newpassword:" +newPW);
}











console.log(validatePassword("helloworld", "hello"));     // returns false
console.log(validatePassword("hello", "hello"));    	  // returns false
console.log(validatePassword("hello1234", "hello1234"));  // returns false
console.log(validatePassword("Hello1234", "Hello1234")); // returns true
console.log(validatePassword("HELLO1234", "HELLO1234"));  // returns false



console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")); // returns {name: "John", newpassword:"Pass123"}
