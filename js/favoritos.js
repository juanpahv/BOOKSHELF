import libros from './components/libros.js';

let savedTitles = JSON.parse(window.localStorage.getItem('savedTitles'));
// console.log(savedTitlesString);
// let savedTitles = [];

// var word ='';
// console.log(savedTitles[17]);

// for (var i = 0; i < savedTitlesString.length; i++) {
//     if(savedTitlesString[i]=='['||savedTitlesString[i]==']'||savedTitlesString[i]=='"'){    }
//     else if(savedTitles[i] == ','){
//         savedTitles.push(word)
//         console.log(`saved ${word}`);
//         word = '';
//     }else{
//         word+=savedTitlesString[i]
//         console.log(word);
//     }
// }

if(!savedTitles){
    savedTitles=[];
}

const size = Object.keys(libros).length;

function actualizarLibros () {
    if(!savedTitles.length){
        document.getElementById('mainContainer').innerHTML += `<div class="">
        <h2>No tienes libros favoritos</h2>
        </div>`;
    }
    
    savedTitles.forEach(titulo => {
        const libro = libros[titulo]
        document.getElementById('mainContainer').innerHTML += `<div class="col-6 col-md-3">
        <div class="card">
            <i class="bi bi-bookmark-fill btnFav"></i>
            <a href="libroSample.html" style="text-decoration: none; color: black;">
                <img src="${libro.rutaImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title">${titulo}</p>
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
        item.addEventListener('click',async (e)=>{
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
                                alert("Error");
                                return
                            }
                            window.localStorage.setItem('savedTitles',JSON.stringify(savedTitles));
                        }
                    }
                })
                btnClicked.classList.remove("bi-bookmark-fill");
                btnClicked.classList.add("bi-bookmark");
            }else{
                await e.path.forEach( async (pathItem) => {
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
                            alert("Error");
                            return
                        }
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