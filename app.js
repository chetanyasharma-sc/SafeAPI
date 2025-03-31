function validate(event){

    event.preventDefault();
    let username =  document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == "" || password == "" ){
        alert("Please fill in all fields");
    
        }   
        if (username === "admin" && password === "1234"){
            alert("Login successful ")

           
            } 

        else{
            alert("Invalid username or password");
          
            
        }


}