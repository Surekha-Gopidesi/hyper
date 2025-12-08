function validateForm() {
    // Name validation
    var name = document.querySelector('input[name="username"]').value;
    var nameError = document.getElementById("nameError");
    if (name == "" || name == null) {
      nameError.innerHTML = "Please enter your name";
      return false;
    } else {
      nameError.innerHTML = "";
    }
  
    // Email validation
    var email = document.querySelector('input[name="mail Id"]').value;
    var mailError = document.getElementById("MailError");
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      mailError.innerHTML = "Invalid email address";
      return false;
    } else {
      mailError.innerHTML = "";
    }
  
    // Qualification validation
    var qualification = document.getElementById("qualification").value;
    var qualificationError = document.getElementById("qualificationError");
    if (qualification == "") {
      qualificationError.innerHTML = "Please select your qualification";
      return false;
    } else {
      qualificationError.innerHTML = "";
    }
  
    // Gender validation
    var gender = document.querySelectorAll('input[name="gender"]');
    var genderError = document.getElementById("genderError");
    var isChecked = false;
    gender.forEach(function(g) {
      if (g.checked) {
        isChecked = true;
      }
    });
    if (!isChecked) {
      genderError.innerHTML = "Please select your gender";
      return false;
    } else {
      genderError.innerHTML = "";
    }
  
    // Job selection validation
    var job = document.querySelector('select[name="job"]').value;
    var positionError = document.getElementById("positionError");
    if (job == "") {
      positionError.innerHTML = "Please select a job";
      return false;
    } else {
      positionError.innerHTML = "";
    }
  
    // Success message
    document.getElementById("successMessage").innerHTML = "Form submitted successfully!";
    return true;
  }
  

