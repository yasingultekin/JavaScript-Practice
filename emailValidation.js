// Purpose of the this coding challenge is to write a code that given email adresses, returns the emails valid or invalid.

// Valid email addresses must follow these rules:
// It must have the username@websitename.extension format type.
// The maximum length of the extension is 3.
// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// Analyze a problem, identify and apply programming knowledge for appropriate solution.

// Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.


function emailValidation(mail) {
    if (mail.includes("@") && (mail.length-3 == mail.indexOf(".") || mail.length-4 == mail.indexOf("."))) {
        console.log("E-mail is valid.");
    } else {
        console.log("E-mail is not valid.");
    }
} 

console.log(emailValidation("username@websitename.extension"));