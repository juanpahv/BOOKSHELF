import libros from './components/libros.js';

const tituloSeleccionado = window.localStorage.getItem('tituloSeleccionado');

const libroSeleccionado = libros[tituloSeleccionado];

document.getElementById('mainContainer').innerHTML =`
<div class="row">
                <div class="col-lg-3">
                    <img src="/img/portadas/romance/cumbres borrascosas.png" style="display: block; margin: auto; max-height: 300px;">
                    
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
                    <div class="btn btn-primary" style="width: 100%; ">Agregar a favoritos</div>
                </div>
            </div>
`;

// window.localStorage.removeItem('tituloSeleccionado');