const body = document.querySelector('body')
const cardContainer=document.querySelector('.card-container');
const cardData=[
    {heading:"heading1",content:"qwerty",id:1},
    {heading:"heading2",content:"qwerty",id:2},
    {heading:"heading3",content:"qwerty",id:3},
    {heading:"heading4",content:"qwerty",id:4},
    {heading:"heading5",content:"qwerty",id:5},
    {heading:"heading6",content:"qwerty",id:6},
    {heading:"heading7",content:"qwerty",id:7},
];
const createNotes=(array)=>{
    array.forEach(cardObj => {
        const {heading, content, id} =cardObj;
        const card=document.createElement("div");
        card.classList.add("card");
        card.id=id;

        const insideHtml=  `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updatePage/updatePage.html?noteId=${id}"><div class="edit-note"><img src="../../assets/edit.svg" alt=""></div></a></div><div class="card-content">${content}</div>`
        card.innerHTML=insideHtml;
        cardContainer.appendChild(card);
        //console.log(`<div class="card-header"><div class="card-heading">${heading}</div><div class="edit-note"><img src="../../assets/edit.svg" alt=""></div></div><div class="card-content">${content}</div>`);
    });
};
createNotes(cardData);

window.addEventListener('load',() =>{
    body.classList.add("visible")
})