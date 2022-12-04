let savedTitles = JSON.parse(window.localStorage.getItem('savedTitles'));

if(!savedTitles){
    savedTitles=[];
}
// savedTitles.push('aa');
// window.localStorage.setItem('savedTitles',JSON.stringify(savedTitles));
// savedTitles.push('aa');
// window.localStorage.setItem('savedTitles',JSON.stringify(savedTitles));
// console.log(savedTitles);

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
    const title = item.querySelector('.card-title').innerText;
    if(savedTitles.includes(title)){
        item.parentElement.children[0].classList.remove("bi-bookmark");
        item.parentElement.children[0].classList.add("bi-bookmark-fill");
    }
})

document.querySelectorAll('.btnFav').forEach(item => {
    item.addEventListener('click',(e)=>{
        const btnClicked = e.target;

        if(btnClicked.classList.contains("bi-bookmark-fill")){
            e.path.forEach(pathItem => {
                if(pathItem.className == 'card'){
                    const unlikedTitle = pathItem.querySelector('.card-title').innerText;
                    const indexOfTitle = savedTitles.indexOf(unlikedTitle);
                    if(indexOfTitle != -1){
                        savedTitles.splice(indexOfTitle,1);
                        window.localStorage.setItem('savedTitles',JSON.stringify(savedTitles));
                    }
                }
            })
            btnClicked.classList.remove("bi-bookmark-fill");
            btnClicked.classList.add("bi-bookmark");
        }else{
            e.path.forEach(pathItem => {
                if(pathItem.className == 'card'){
                    const likedTitle = pathItem.querySelector('.card-title').innerText;
                    savedTitles.push(likedTitle);
                    window.localStorage.setItem('savedTitles',JSON.stringify(savedTitles));
                }
            })
            btnClicked.classList.remove("bi-bookmark");
            btnClicked.classList.add("bi-bookmark-fill");
        }
    });
})
