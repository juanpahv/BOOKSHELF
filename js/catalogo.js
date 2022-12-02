document.querySelectorAll('.libro').forEach(item => {
    item.addEventListener('click',(e)=>{
        // event.preventDefault();
        var card;

        e.path.forEach(element => {
            if(element.className == 'card'){
                card = element;
            }
        })

        if(!card){
            return
        }   
        const titulo = card.querySelector('.card-title').innerText;
        window.localStorage.setItem('tituloSeleccionado',titulo)
    });
})



document.querySelectorAll('.btnFav').forEach(item => {
    item.addEventListener('click',(e)=>{
        const btnClicked = e.target;

        if(btnClicked.classList.contains("bi-bookmark-fill")){
            btnClicked.classList.remove("bi-bookmark-fill");
            btnClicked.classList.add("bi-bookmark");
        }else{
            btnClicked.classList.remove("bi-bookmark");
            btnClicked.classList.add("bi-bookmark-fill");
        }
    });
})
