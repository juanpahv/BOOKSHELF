import libros from './components/libros.js';


let savedTitles = JSON.parse(window.localStorage.getItem('savedTitles'));

if(!savedTitles){
    savedTitles=[];
}

const tituloSeleccionado = window.localStorage.getItem('tituloSeleccionado');

const libroSeleccionado = libros[tituloSeleccionado];

let texto;

if(savedTitles.includes(libroSeleccionado.titulo)){
    texto = 'Eliminar de favoritos';
}else{
    texto = 'Agregar a favoritos';
}

let clase

if(savedTitles.includes(libroSeleccionado.titulo)){
    clase = 'Eliminar';
}else{
    clase = 'Agregar';
}

document.getElementById('mainContainer').innerHTML =`
<div class="row">
        <div class="col-lg-3">
            <img src="${libroSeleccionado.rutaImg}" style="display: block; margin: auto; max-height: 300px;">
            
        </div>
        <div class="col-lg-9 py-3 px-5">
            <div class="row">
                <h2>
                    ${libroSeleccionado.titulo}
                </h2>
            </div>
            <div class="row">
                <div id="Autor"><b>Autor: </b>${libroSeleccionado.autor}</div>
            </div>
            <div class="row">
                <div id="Autor"><b>Editorial: </b>${libroSeleccionado.editorial}</div>
            </div>
            <div class="row">
                <div id="Autor"><b>ISBN: </b>${libroSeleccionado.ISBN}</div>
            </div>
            <hr class="mt-4" style="height: 2px; background-color: black;">
            <h4>Sinopsis</h4>
            <p> 
                ${libroSeleccionado.sinopsis}
            </p>
            <div class="btn btn-primary ${clase}" style="width: 100%; " id="favController" > ${texto} </div>
        </div>
    </div>
`;

document.getElementById('favController').addEventListener('click', (e)=>{

    if(e.target.classList.contains('Agregar')){
        savedTitles.push(libroSeleccionado.titulo);
        window.localStorage.setItem('savedTitles',JSON.stringify(savedTitles));
        
        e.target.classList.remove("Agregar");
        e.target.classList.add("Eliminar");
        e.target.innerHTML='Eliminar de favoritos'
    }else{
        const indexOfTitle = savedTitles.indexOf(libroSeleccionado.titulo);
        if(indexOfTitle != -1){
            savedTitles.splice(indexOfTitle,1);
            window.localStorage.setItem('savedTitles',JSON.stringify(savedTitles));
        }
        e.target.classList.remove("Eliminar");
        e.target.classList.add("Agregar");
        e.target.innerHTML='Agregar a favoritos'
    }
    
});

// window.localStorage.removeItem('tituloSeleccionado');