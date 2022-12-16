//Entradas


// lista usuario con los siguientes datos 
//Escribir una lista de usuarios con los siguientes datos:
// nombre, número de  documento,contraseñay  tipo  de usuario.
//El  tipo  de  usuario  será:  1: administrador, 2: cliente.Guardarla en un array de objetos.

//proceso 
// login 

// salida entrega de dinero


//desarrollo

const listUser = [
  {
    Nombre: "Orlando Lopez",
    Número_de_documento: 1,
    Contraseña :1234,
    Tipo_de_usuario:1,

  },
  {
    Nombre: "Maria Fernanda Sepulveda",
    Número_de_documento: 1,
    Contraseña :1111,
    Tipo_de_usuario:2,

  },  
  {
    Nombre: "Santiago Sepulveda",
    Número_de_documento: 1,
    Contraseña :1119,
    Tipo_de_usuario:2,
  }
]
   
   
   
   
   
    listUser.map(item => item.Contraseña).reduce((prev, curr) => prev + curr, 0);



const login=( )=> {

  const Documento = parseInt(prompt())
  const Contraseña = parseInt(prompt())
 
}

for (let index = 0; index < listUser.length; index++) {
  const Passwork  = listUser[index].Contraseña;
  const DocumentoUser  = listUser[index].Nombre;

  console.log(element)
}

console.log(listUser.Tipo_de_usuario)

console.log("hola")
listUser.Número_de_documento



