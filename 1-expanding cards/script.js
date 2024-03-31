function active(){
    removeActive();
    this.classList.add("active");
    console.log(this.classList);
    
}

function removeActive(){
    cards.forEach(card => card.classList.remove("active"))
}



const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener('click', active));