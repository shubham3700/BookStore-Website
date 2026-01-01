  function validateForm(){
            var fname = document.myForm.firstname.value;

            if (fname == "") {
                alert("firstname cannot be empty");
                return false; // stop submission
            }
             var letters = /^[A-Za-z]+$/;
      if(!fname.match(letters))
      {
      alert('Please enter only letters');
      return false;
      } 
      var lname= document.myForm.lastname.value;

      if (lname == ""){
        alert("lastname cannot be empty");
        return false;
      }

      var letters = /^[A-Za-z]+$/;
      if(!lname.match(letters)){
        alert("please enter only letters")
      return false;
      }

       var password = document.myForm.password.value;
    if(password.length < 6){
        alert("Password must be at least 6 characters");
        return false;
    }
     var pattern = /^[0-9]+$/;
    if(!pattern.test(password)){
        alert("Password must contain digits only");
        return false;
    }

    var number = document.myForm.number.value;
    
    var pattern = /^[0-9]+$/;
    if(!pattern.test(number)){
      alert("Mobile Number must contain digits only");
      return false;
    }
    if(number.length!=10){
      alert("Mobile numbers must be 10 digits only");
      return false;
    }

    alert("Form Submitted Successfully!");
            return true; // allow submission
        } 