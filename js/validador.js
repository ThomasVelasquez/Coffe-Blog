const datos = {
       Nombre:'', 
       Correo:'', 
       Mensaje:''
};

const nombre = document.querySelector('#Nombre');
const email = document.querySelector('#Correo');
const mensaje = document.querySelector('#Mensaje');
const formulario = document.querySelector('.formulario');

Nombre.addEventListener('input',leerTexto)
Correo.addEventListener('input',leerTexto)
Mensaje.addEventListener('input',leerTexto)
/* Evento de sumit */
formulario.addEventListener('submit',function(e){
       e.preventDefault();

       /* Validar formulario */
       const {Nombre, Correo, Mensaje} = datos;

       if( Nombre === '' || Correo === '' || Mensaje === ''){
              return mostrarAlerta('Todos los Campos son Obligatorios' , 'error')
       }
       
       mostrarAlerta('El Formulario Ha Sido Enviado')
})

function leerTexto (e){
       datos[e.target.id] = e.target.value;
       console.log(datos)
}

function mostrarAlerta (Mensaje , error = null){ 
       const alerta = document.createElement('P')
       alerta.textContent = Mensaje

       if(error){
              alerta.classList.add('error')
       }else{
              alerta.classList.add('correcto')
       }

       formulario.appendChild(alerta)

       setTimeout(() => {
              alerta.remove()
       }, 2000);
}