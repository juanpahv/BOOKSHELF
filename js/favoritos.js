import libros from './components/libros.js';

let savedTitles = JSON.parse(window.localStorage.getItem('savedTitles'));
if(!savedTitles){
    savedTitles=[];
}

function actualizarLibros () {
    if(!savedTitles.length){
        document.getElementById('mainContainer').innerHTML += `<div class="">
        <h2>No tienes libros favoritos</h2>
        </div>`;
    }
    savedTitles.forEach(titulo => {
        const libro = libros[titulo];
        document.getElementById('mainContainer').innerHTML += `<div class="col-6 col-md-3">
        <div class="card">
            <i class="bi bi-bookmark-fill btnFav"></i>
            <a href="libroSample.html" style="text-decoration: none; color: black;">
                <img src="${libro.rutaImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title">${libro.titulo}</p>
                    <p class="card-text">${libro.autor}</p>
                </div>
            </a>
        </div>
        </div>`;
    });

}

actualizarLibros();

function loadClick () {
    
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
            document.getElementById('mainContainer').innerHTML = '';
            actualizarLibros();
            loadClick();
        });
    })
}

loadClick();