function checkCreds(){
    //input validaton for week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML ="Status of Login"
    //variables we need
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;

    //fill in the variables
    //working on imputing first name
    firstName = document.getElementById("fName").value;
    console.log("The first name was imputed as " + firstName);
    //working on imputing last name
    lastName = document.getElementById("lName").value;
    console.log("The last name was imputed as " + lastName);
    //working on imputing zipcode
    zipCode = document.getElementById("zipCode").value;
    console.log("The zipCode was imputed as " + zipCode);
    //working on imputing fullname
    fullName = firstName + " " + lastName;
    console.log("The full name was imputed as " + fullName);
    //working on imputing fullnamelength 
    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");
    //working on imputing zip code number
    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);

    //things to check for... fullNameLength is less than 20 characters, 
    //zipcode has only 5 digits
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML ="Invalid full name"
    } else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML ="Invalid zipcode"
    } else {
        alert("User credintals passed, welcome to the site, " + fullName);
    }
}

function checkPalin(){
    console.log("checkPalin() started");
    //record the string into a variable 
    var entStr;
    entStr = document.getElementById("palinInput").value; 
    console.log("entStr is " + entStr);

    //take away any spaces 
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is " + entStrNoSpace);

    //creat rev array var and a rev string
    var revStr;
    const revArray =[];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);

    //input into array and reverse it 
    for(var i = length; i >= 0; i--){
        revArray.push(entStrNoSpace[i]);
    }

    //convert to a string from an array 
    revStr = revArray.join("");
    console.log("reversed is " + revStr);

    //compare rev to string and write to status
    var equil = 0;
    equil = (entStrNoSpace === revStr);
    console.log("the ent and reverse being equil is " + equil);

    //write to palindrome status 
    if(equil == true){
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome";
    }
}