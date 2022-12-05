document.getElementById('signUp').addEventListener('click',async () =>{
    
    event.preventDefault();
    const datos = {
        password : document.querySelector('#password-1').value,
        mail : document.querySelector('#email-1').value
    }
    var respuesta;
        try{
            respuesta = await axios.post('http://localhost:3001/auth/signUp',datos)
        }catch(e){
            if(e.response.status == 409){
                //TODO Conflict
                alert("Correo en uso");
            }else if (e.response.status == 400){
                //TODO BadRequest
                alert("Verifica que hayas llenado todos los campos");
            }else{
                //TODO general Error
                alert("Error");
            }
            return
        }
    console.log(respuesta);
    window.localStorage.setItem('tokenSesion',respuesta.data.sesion.tokenSesion)
    window.localStorage.setItem('mail',datos.mail);
    window.location.href = 'index.html';
    
})


document.getElementById('logIn').addEventListener('click',async () =>{
    
    event.preventDefault();
    const datos = {
        password : document.querySelector('#password').value,
        mail : document.querySelector('#email').value
    }
    var respuesta;
        try{
            respuesta = await axios.post('http://localhost:3001/auth/logIn',datos);
        }catch(e){
            if(e.response.status == 409){
            //TODO Conflict
                alert("Correo o contraseña incorrectos");
            }else if (e.response.status == 400){
                //TODO BadRequest
                alert("Verifica que hayas llenado todos los campos");
            }else{
                //TODO general Error
                alert("Error");
            }
            return
        }
    window.localStorage.setItem('tokenSesion',respuesta.data.sesion.tokenSesion);
    var likedTitles = respuesta.data.likedTitles;
    if(!likedTitles){
        likedTitles =[];
    }
    window.localStorage.setItem('savedTitles',JSON.stringify(likedTitles));
    window.localStorage.setItem('mail',JSON.stringify(respuesta.data.mail));
    // window.location.href = 'index.html';
    
})