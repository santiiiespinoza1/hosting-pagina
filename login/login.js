var user = document.getElementById("user-input");
var password = document.getElementById("password-input");
var errorUser = document.getElementById("error-user");
var errorPassword = document.getElementById("error-password");


var form = document.getElementById('formulario');
    form.addEventListener('submit',function(evt){
        evt.preventDefault();
        let formato;

        if(user.value === null || user.value === ''){
            errorUser.innerHTML = '*Debe ingresar el nombre de usuario';
            user.style.border = 'red solid 2px';
        }else{
            errorUser.innerHTML = '';
            user.style.border = 'none';
        }

        // if ((user.value).indexOf('@') === -1){
        //     errorUser.innerHTML = 'Formato incorrecto';
        //     user.style.border = 'red solid 2px';
        //     errorUser.style.left = '230px';
        // }

    
        
        if(password.value === null || password.value === ''){
            errorPassword.innerHTML = '*Debe ingresar la contraseña';
            password.style.border ='red solid 2px';
        }else{
            errorPassword.innerHTML = '';
            password.style.border = 'none';
        }
    })
