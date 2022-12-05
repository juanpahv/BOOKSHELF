function handleLoginFormSubmit(event){
    event.preventDefault();

    var email= document.querySelector('#email-1').value;
    var pass= document.querySelector('#password-1').value;

}
document
.querySelector('#formulario-InicioSesion-1')
.addEventListener('submit',handleLoginFormSubmit)

function handleLoginFormSubmit1(event){
    event.preventDefault();

    var e= document.querySelector('#email').value;
    var password= document.querySelector('#password').value;

    
}
document
.querySelector('#formulario-InicioSesion')
.addEventListener('submit',handleLoginFormSubmit1)