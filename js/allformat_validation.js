function myform(e) {
    let userName = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let consfirmPassword = document.getElementById("confpass").value;
    let mobile = document.getElementById("mobile_number").value;
    let email = document.getElementById("email").value;

    // user validation
    if (userName == "") {
        document.getElementById("username_msg").innerHTML =
        " ** please fill the userName field";
        document.getElementById("username_msg").style.color = "red";
        return false;
    } else if (userName.length <= 2 || userName.length > 20) {
        document.getElementById("username_msg").innerHTML = 
        " ** please enter the length between 2 to 20";
        document.getElementById("username_msg").style.color = "red";
        return false;
    } else if (!isNaN(userName)) {
        document.getElementById("username_msg").innerHTML = 
        " ** Only characters are allowed";
        document.getElementById("username_msg").style.color = "red";
        return false;

    }
    else {
        document.getElementById("username_msg").innerHTML = ""
    }

    // pass validation
    if (password == "") {
        document.getElementById("pass_msg").innerHTML =
        " ** Please fill the password field";
        document.getElementById("pass_msg").style.color = "red";
        return false;

    } else if (password.length <= 5 || password.length > 20 ) {
        document.getElementById("pass_msg").innerHTML =
        "** Please enter the length between 5 to 20";
        document.getElementById("pass_msg").style.color = "red";
        return false;

    } else if (password !== confirmPassword) {
        document.getElementById("confpass_msg").innerHTML = 
        " ** Password not matched";
        document.getElementById("confpass_msg").style.color = "red";
        return false;
    }
    else { 
        document.getElementById("pass_msg").innerHTML = ''
    }

    // confirmPass validation

    if (confirmPassword == "") {
        document.getElementById("confpass_msg").innerHTML = 
        "** please fill the confirmPassword field";
        document.getElementById("confpass_msg").style.color = "red";
        return false
    }
    else {
        document.getElementById("confpass_msg").innerHTML = ''

    }

    // mobileNumber validation

    if (mobile == "") {
        document.getElementById("mobile_msg").innerHTML =
        "** please fill the mobile fieldd";
        document.getElementById("mobile_msg").style.color = "red";
        return false
    } else if (isNaN(mobile)) {
        document.getElementById("mobile_msg").innerHTML =
        " ** please enter a digit not a characters.";
        document.getElementById("mobile_msg").style.color = "red";
        return false;

    } else if(mobile.length !== 10) {
        document.getElementById("mobile_msg").innerHTML =
        " ** Mobiel number must be a 10 digit.";
        document.getElementById("mobile_msg").style.color = "red";
        return false;
    }
    else {
        document.getElementById("mobile_msg").innerHTML = ''
    }

    // email validation

    if (email == "") {
        document.getElementById("email_msg").innerHTML =
        "** Please fill the email field";
        document.getElementById("email_msg").style.color = "red";
        return false;
    } else if (email.indexof("@") <= 0) {
        document.getElementById("email_msg").innerHTML = " ** @ invalid position.";
        document.getElementById("email_msg").style.color = "red";
        return false;
    }
    // emteyajahmad10@gmail.com // length 20
    else if(
        email.charAt(email.length - 4) !== "." &&
        email.charAt(email.length - 3) !== "."
    ) {
        document.getElementById("emal_msg").innerHTML = " ** invalid position.";
        document.getElementById("email_msg").style.color = "red";
        return false;
    }
    else{
        document.getElementById("email_msg").innerHTML = ''
    }
    


}