const body = document.querySelector('body')
const apiurl="https://anuragsnotebook.herokuapp.com";

window.addEventListener('load',() =>{
    body.classList.add("visible")
})

const signInForm = document.querySelector(".signin-form");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const signInEmail = document.querySelector(".signin-email");
  const signInPassword = document.querySelector(".signin-password");

  const email = signInEmail.value;
  const password = signInPassword.value;
  
  if(email.length==0 ||  password.length==0){
    alert("All two categories need to have not null value");
    return;
}

  fetch(`${apiUrl}/auth/signin`, {
    mode:'cors',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/pages/dashboard/dashboard.html";
      } else {
        alert("SignIn Again");
      }
    })
    .catch((err) => {
      alert("Error Signing In!!! Re-try....");
      console.log(err);
    });
});

const signUpForm=document.querySelector(".signup-form");

signUpForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const email= document.querySelector('.signup-name').value;
    const name= document.querySelector('.signup-email').value;
    const password= document.querySelector('.signup-password').value;
    const retypePassword= document.querySelector('.signup-retyped-password').value;

    //console.log(email,name,password,retypePassword);
    if(password!== retypePassword) {
        alert("Password dont match");
        return;
    }

    if(email.length==0 || name.length==0 || password.length==0 || retypePassword.length==0){
        alert("All four categories need to have not null value");
        return;
    }

    fetch(`${apiurl}/auth/signup`,{
        mode:'cors',
        method:"POST",
        headers:{
            'Content-Type': "application/json",
        },
        body:JSON.stringify({name,email,password}),

    }).then(res=>res.json())
    .then(data=>{
        //console.log(data);
        const {token}=data.data;
        if(token){
            localStorage.setItem("jwt",token);
            location.href = "/pages/dashboard/dashboard.html";
        }
        else{
            alert("SignUp Again");
        }    })
    .catch(err=>{
        alert("Error Signing up !!! Retry")
        console.log(err);
    });
})