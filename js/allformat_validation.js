function myform(e) {
    let password = document.getElementById("pass").value;
    let consfirmPassword = document.getElementById("confpass").value;
    let mobile = document.getElementById("mobile_number").value;
    let email = document.getElementById("email").value;

    // user validation
    if (userName == "") {
        document.getElementById("username_msg").innerHTML =
        " ** please fir the userName field";
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

    } else if (password !== consfirmPassword) {
        document.getElementById("confpass_msg").innerHTML = 
        " ** Passwor not matched";
        document.getElementById("confpass_msg").style.color = "red";
        return false;
    }
    else { 
        document.getElementById("pass_msg").innerHTML = ''
    }

    // confirmPass validation

    if (consfirmPassword == "") {
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
    } else if (NaN(mobile)) {
        document.getElementById("mobile_msg").innerHTML =
        " ** please enter a digit not a characters.";
        document.getElementById("mobile_msg").style.color = "red";
        return false;

    }


}