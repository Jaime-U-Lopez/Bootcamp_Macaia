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
    Número_de_documento: 121,
    Contraseña: "1234",
    Tipo_de_usuario: 1,
  },
  {
    Nombre: "Maria Fernanda Sepulveda",
    Número_de_documento: 112,
    Contraseña: "1111",
    Tipo_de_usuario: 2,
  },
  {
    Nombre: "Santiago Sepulveda",
    Número_de_documento: 1,
    Contraseña: "1",
    Tipo_de_usuario: 2,
  },
];

const login = () => {
  confirm(" Debes de hacer log in para ingresar ")
  const SetDocumento = parseInt(prompt("ingresa su numero de documento"));
  const SetContraseña = prompt("Ingrese su Passwork ");

  for (let index = 0; index < listUser.length; index++) {
    const DocumentUser = listUser[index].Número_de_documento;
    const Passwork = listUser[index].Contraseña;

    if (DocumentUser === SetDocumento && Passwork === SetContraseña) {
      alert(" Login  exitoso, tienes acceso !");
      return;
    } else if (listUser.length - 1 === index) {
      alert("Datos Errados, no tienes acceso");
      return;
    }
  }
};

const LoginUser = login();

LoginUser;
