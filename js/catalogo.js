import libros from './components/libros.js';
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

document.querySelectorAll('.btnFav').forEach(async (item) => {
    await item.addEventListener('click',async (e)=>{
        const btnClicked = e.target;

        if(btnClicked.classList.contains("bi-bookmark-fill")){
            await e.path.forEach(async (pathItem) => {
                if(pathItem.className == 'card'){
                    const unlikedTitle = pathItem.querySelector('.card-title').innerText;
                    const indexOfTitle = savedTitles.indexOf(unlikedTitle);
                    if(indexOfTitle != -1){
                        savedTitles.splice(indexOfTitle,1);
                        try{
                            const email = window.localStorage.getItem('mail');
                            const titles = JSON.stringify(savedTitles);
                            const body = {
                                mail : email,
                                likedTitles : titles
                            }
                            const res = await axios.put('http://localhost:3001/data', body, {
                                headers: {
                                    'token-session': window.localStorage.getItem('tokenSesion')
                                }
                                });
                        }catch(e){
                            console.error(e);
                            alert("Error");
                            return
                        }
                        window.localStorage.setItem('savedTitles',JSON.stringify(savedTitles));
                        btnClicked.classList.remove("bi-bookmark-fill");
                        btnClicked.classList.add("bi-bookmark");
                    }
                }
            })
        }else{
            await e.path.forEach(async (pathItem) => {
                if(pathItem.className == 'card'){
                    const likedTitle = pathItem.querySelector('.card-title').innerText;
                    savedTitles.push(likedTitle);
                    try{
                        const email = window.localStorage.getItem('mail');
                        const titles = JSON.stringify(savedTitles);
                        const body = {
                            mail : email,
                            likedTitles : titles
                        }
                        const res = await axios.put('http://localhost:3001/data', body, {
                            headers: {
                                'token-session': window.localStorage.getItem('tokenSesion')
                            }
                            });
                    }catch(e){
                        console.error(e);
                        alert("Error");
                        return
                    }
                    window.localStorage.setItem('savedTitles',JSON.stringify(savedTitles));
                    btnClicked.classList.remove("bi-bookmark");
                    btnClicked.classList.add("bi-bookmark-fill");
                }
            })
        }
    });
})
