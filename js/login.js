function login(){

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if(email === "" || password === ""){
    Swal.fire("Missing Fields","Please fill in all fields.","warning");
    return;
  }

  if(!email.endsWith("@gmail.com")){
    Swal.fire("Invalid Email",
      "Email must end with @gmail.com",
      "error"
    );
    return;
  }

  Swal.fire({
    title: "Login Successful 🎉",
    text: "Welcome " + email,
    icon: "success",
    timer: 1500,
    showConfirmButton: false
  }).then(() => {
    window.location = "index.html";
  });

}