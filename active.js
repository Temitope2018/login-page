const myUser = document.getElementById("user");
const myPassword = document.getElementById("password");
const eyeShow = document.getElementById("eyeshow");
const eyehide = document.getElementById("eyehide");

eyeShow.addEventListener("click",event =>{
      if(myUser.type==="text"){
        myUser.type = "password";
        eyeShow.src ="eye-hide.jpg";
      }
      else{
        myUser.type = "text";
        eyeShow.src = "eye-show.png";
      }
      

})

eyehide.onclick = function(){
  if(myPassword.type==="password"){
    myPassword.type = "text";
    eyehide.src = "eye-show.png";
  }
  else{
    myPassword.type = "password";
    eyehide.src = "eye-hide.jpg";
  }
  
}


