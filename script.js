let submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", submit);

function submit() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  console.log(email.value);
  console.log(password.value);
  if (password.value == "") {
    let passworderror = document.querySelector(".password-wrap .error");
    passworderror.innerText = "Password can't be empty";
    passworderror.classList.remove("hide");
  } else if (password.value.length < 8) {
    let passworderror = document.querySelector(".password-wrap .error");
    passworderror.innerText = "Password should be above 8 charecter";
    passworderror.classList.remove("hide");
  } else {
    let passworderror = document.querySelector(".password-wrap .error");
    passworderror.classList.add("hide");
  }

  if (email.value == "") {
    let emailerror = document.querySelector(".email-warp .error");
    emailerror.innerText = "Email should not be empty";
    emailerror.classList.remove("hide");
  } else if (!email.value.match(/\w*@\w*.\w*/)) {
    let emailerror = document.querySelector(".email-warp .error");
    emailerror.innerText = "Enter a valid email";
    emailerror.classList.remove("hide");
  } else {
    let emailerror = document.querySelector(".email-warp .error");
    emailerror.classList.add("hide");
  }
}
