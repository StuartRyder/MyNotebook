const body = document.querySelector('body')
const createNoteButton =document.querySelector('.create-note-button')
const apiurl="https://anuragsnotebook.herokuapp.com";
const token = localStorage.getItem("jwt");

createNoteButton.addEventListener("click",()=>{
    const content =document.querySelector('.create-note-input').value;
    const heading =document.querySelector('.create-note-heading').value;
    if(token){
        fetch(`${apiurl}/note/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'authorization': token
            },
            body: JSON.stringify({ content,heading }),
          })
            .then((res) => res.json())
            .then((data) => {

            //   const { meassage } = data;
              console.log(data);
              if(data.message.length){
                location.href = "/pages/dashboard/dashboard.html";
              }
            })
            .catch((err) => {
              alert("Error Creating Note !! Retry");
              console.log(err);
            });
    }
})
window.addEventListener('load',() =>{
    body.classList.add("visible")
})
