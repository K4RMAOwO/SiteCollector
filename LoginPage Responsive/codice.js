const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//**PASSWORD CONTROL LATO CLIENT*/

function verifyPassword() {  
  var pw = document.getElementById("input-pswrd").value;  
   
  if(pw == "") {  
    //document.getElementById("message").innerHTML = "Fill the password!"
     alert("Fill the password!");  
     return false;  
  }       
  if(pw.length < 8) {  
     //document.getElementById("message").innerHTML = "length must be atleast 8 characters";  
     alert("length must be atleast 8 characters");
     return false;  
  }     
  if(pw.length > 15) {  
     //document.getElementById("message").innerHTML = "length must not exceed 15 characters";  
     alert("length must not exceed 15 characters");    
     return false;  
  } else {  
     alert("Password is correct");  

     window.location.href = "https://www.iismarconipieralisi.it";
     //return true;
  }  
}  

/*
$("#login_btn").click(function(){
  var flag = verifyPassword(); 

  if(flag)
  {
    window.location.href = "https://www.iismarconipieralisi.it";
  }
  else
  {
    alert("Password errata");
  }

});*/


//**EMAIL CONTROL */
function ValidateEmail(mail) {
  if (/^\w+([.-]?\w+)"\w+([.-]?\w+)(.\w{2,3})+$/.test(myForm.emailAddr.value)) {
    return (true);
  }
  alert("You have entered an invalid email address!");
  return (false);
}


//**TOGGLE PSWRD BUTTON */

$("#toggle-pswrd-open").click(function (event) {
  var clicked_btn = "#" + event.target.id;
  var input_id = "#input-pswrd";

  console.log(clicked_btn);
  console.log(input_id);

  if ($(input_id).attr("type") == "password") {
    $(input_id).attr("type", "text");
    $(clicked_btn).text("visibility_off");
    $(clicked_btn).toggleClass("toggle-pswrd-open");
  } else if ($(input_id).attr("type") == "text") {
    $(input_id).attr("type", "password");
    $(clicked_btn).text("visibility");
    $(clicked_btn).toggleClass("toggle-pswrd-open");
  }
});

//**LOAD MENU */
$(document).ready(function () {
  $(".navigation").load("include/menu.html", function () {
  });
});

$().blur(function () {
  $(".input-field").css("border", "solid 2px red");
})