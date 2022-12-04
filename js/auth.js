
document.getElementById('prueba').addEventListener('click',async () =>{
    const datos = {
            password : "asd",
            mail : "tyu"
        }
    
    
    const respuesta = await axios.post('http://localhost:3001/auth/signUp',datos)
    
    console.log(respuesta);
})