function logout() {
    const tokenSesion = localStorage.getItem('tokenSesion');

    if(tokenSesion) {
        document.getElementById('cuenta').innerHTML = 'Cerrar sesión';
    }

    document.getElementById('cuenta').addEventListener('click',async (e)=>{
        event.preventDefault();
        if(tokenSesion){
            await window.localStorage.clear();
            window.location.href = 'index.html';
        }else{
            window.location.href = 'sign in.html';
        }
    })
}

logout();