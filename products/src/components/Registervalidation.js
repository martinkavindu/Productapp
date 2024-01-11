function validation(values) {
    let error = {};
  
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  
    if (values.email === "") {
      error.email = "Please enter email";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Enter a valid email address";
    } else error.email = "";
  
    if(values.name === ""){
        error.name= 'please enter username'
    }else
    error.name ="";
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password =
        "The password should meet the following format: At least one lowercase letter, At least one uppercase letter, At least one digit, At least one special character.";
    } else error.password = "";
  
    return error; // Add this line to return the error object
  }
  
  export default validation;
  