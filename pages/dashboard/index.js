
const apiurl="https://anuragsnotebook.herokuapp.com";
const body = document.querySelector("body")
const logout =document.querySelector(".logout");
const createNoteButton =document.querySelector(".new-note");
const cardContainer=document.querySelector(".card-container");
const token = localStorage.getItem("jwt");

logout.addEventListener('click',()=>{
    localStorage.removeItem("jwt");
    location.href = "/";
})

let cardData=[];

createNoteButton.addEventListener('click',() =>{
    location.href = "/pages/createNotes/createNotes.html";
})

const createNotes=(array)=>{
    cardContainer.innerHTML ="";

    array.forEach(cardObj => {
        const {heading, content} =cardObj;
        const id = cardObj.noteId;

        const card=document.createElement("div");
        card.classList.add("card");
        card.id=id;

        const insideHtml=  `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updatePage/updatePage.html?noteId=${id}"><div class="edit-note"><img src="../../assets/edit.svg" alt=""></div></a></div><div class="card-content">${content}</div>`
        card.innerHTML=insideHtml;
        cardContainer.appendChild(card);
        //console.log(`<div class="card-header"><div class="card-heading">${heading}</div><div class="edit-note"><img src="../../assets/edit.svg" alt=""></div></div><div class="card-content">${content}</div>`);
    });
};

// createNotes(cardData);

window.addEventListener('load',() =>{
    body.classList.add("visible");
if(token){
    fetch(`${apiurl}/note/getallnotes`,{
        method:"GET",
        headers:{
            'Content-Type': "application/json",
            'authorization': token
        },

    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
        cardData = data.data;
        createNotes(data.data);
        })
    .catch(err=>{
        alert("Error Fetching Data ")
        console.log(err);
    });
}
else{
    location.href="/";
}
   
})