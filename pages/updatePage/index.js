const body = document.querySelector('body')

window.addEventListener('load',() =>{
    body.classList.add("visible")
})


const urlParams =new URLSearchParams(window.location.search);
const noteId =urlParams.get('noteId');

console.log(noteId);

const body = document.querySelector('body')
const createNoteButton =document.querySelector('.create-note-button')
const apiurl="https://anuragsnotebook.herokuapp.com";
const token = localStorage.getItem("jwt");

updateNoteButton.addEventListener("click",()=>{
    const content =document.querySelector('.create-note-input').value;
    const heading =document.querySelector('.create-note-heading').value;

    if(token){
        fetch(`${apiUrl}/note/update/${noteId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              'authorization': token
            },
            body: JSON.stringify({ content,heading }),
          })
            .then((res) => res.json())
            .then((data) => {

            //   const { meassage } = data;
            //   console.log(meassage);
              if(data.meassage){
                location.href = "/pages/dashboard/dashboard.html";
              }
            })
            .catch((err) => {
              alert("Error Updating Note !! Retry");
              console.log(err);
            });
    }
})

