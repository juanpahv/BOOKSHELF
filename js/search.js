import libros from './components/libros.js';

document.getElementById('btnSearch').addEventListener('click',()=>{
    const searchValue = document.getElementById('searchValue').value;
    const libro = libros[searchValue]

    if(!libro){
        alert('libro no encontrado')
    }else{
        window.localStorage.setItem('tituloSeleccionado',searchValue)
        window.location.href = 'libroSample.html';
    }
})