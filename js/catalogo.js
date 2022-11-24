const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

document.getElementsByClassName('libro').addEventListener('click',(e)=>{

    const titulo = e.target.textContent;
    window.localStorage.setItem('tituloSeleccionado',titulo)
});